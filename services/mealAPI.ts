// Utility functions to interact with TheMealDB API

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const MealAPI = {
  searchMealsByName: async (query: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/search.php?s=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error searching meals by name: ", error);
      return [];
    }
  },

  getMealById: async (id: string) => {
    try {
      // lookup meal details by id
      const response = await fetch(`${BASE_URL}/lookup.php?i=${encodeURIComponent(id)}`);
      const data = await response.json();
      return data.meals ? data.meals[0] : null;
    } catch (error) {
      console.error("Error searching meal by id: ", error);
      return null;
    }
  },

  getRandomMeal: async () => {
    try {
      const response = await fetch(`${BASE_URL}/random.php`);
      const data = await response.json();
      return data.meals ? data.meals[0] : null;
    } catch (error) {
      console.error("Error getting random meal:", error);
      return null;
    }
  },

  getRandomMeals: async (count = 6) => {
    try {
      const promises = Array(count)
        .fill(null)
        .map(() => MealAPI.getRandomMeal());
      const meals = await Promise.all(promises);
      return meals.filter((meal) => meal !== null);
    } catch (error) {
      console.error("Error getting random meals:", error);
      return [];
    }
  },

  getCategories: async () => {
    try {
      const response = await fetch(`${BASE_URL}/categories.php`);
      const data = await response.json();
      return data.categories || [];
    } catch (error) {
      console.error("Error getting categories: ", error);
      return [];
    }
  },

  filterByIngredient: async (ingredient: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error filtering by ingredient: ", error);
      return [];
    }
  },

  filterByCategory: async (category: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error filtering by category: ", error);
      return [];
    }
  },

  transformMealData: (meal: any) => {
    if (!meal) return null;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        const measureText =
          measure && measure.trim() ? `${measure.trim()} ` : "";
        ingredients.push(`${measureText}${ingredient.trim()}`);
      }
    }

    const instructions = meal.strInstructions
      ? meal.strInstructions.split(/\r?\n/).filter((step: any) => step.trim())
      : [];

    return {
      id: meal.idMeal,
      title: meal.strMeal,
      description: meal.strInstructions
        ? meal.strInstructions.substring(0, 120) + "..."
        : "Delicious meal from TheMealDB",
      image: meal.strMealThumb,
      cookTime: "30 minutes",
      servings: 4,
      category: meal.strCategory || "Main Course",
      area: meal.strArea,
      ingredients,
      instructions,
      originalData: meal,
    };
  },
};
