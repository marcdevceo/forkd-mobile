import { MealAPI } from "@/services/mealAPI";
import { MainView, Title } from "@/ui-framework";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featuredRecipe, setFeaturedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    try {
      setLoading(true);

      const [apiCategories, randomMeals, featuredMeal] = await Promise.all([
        MealAPI.getCategories(),
        MealAPI.getRandomMeals(12),
        MealAPI.getRandomMeal(),
      ]);

      const transformCategories = apiCategories.map((cat: any, index: any) => ({
        id: index + 1,
        name: cat.strCategory,
        image: cat.strCategoryThumb,
        description: cat.strCategoryDescription,
      }));

      setCategories(transformCategories);

      const transformedMeals: any = randomMeals
        .map((meal) => MealAPI.transformMealData(meal))
        .filter((meal) => meal !== null);

      setRecipes(transformedMeals);

      const transformedFeatured: any = MealAPI.transformMealData(featuredMeal);
      setFeaturedRecipe(transformedFeatured);
    } catch (error) {
      console.log("Error loading the data: ", error);
    } finally {
      setLoading(false);
    }
  };

  const loadCategoryData = async (category: any) => {
    try {
      const meals = await MealAPI.filterByCategory(category);
      const transformedMeals = meals
        .map((meal: any) => MealAPI.transformMealData(meal))
        .filter((meal: any) => meal !== null);
        setRecipes(transformedMeals);
    } catch (error) {
      console.error("Error loading category data: ", error);
      setRecipes([]);
    }
  };

  useEffect(() => {
    loadData();
  }, [])

  const handleCategorySelect = async (category: any) => {
    setSelectedCategory(category);
    await loadCategoryData(category);
  }

  return (
    <MainView>
      <Title>Its a me Mario!!!</Title>
    </MainView>
  );
}
