import { BoxView, colorVariants, Input, MainView, ScrollSection, StackView, textColor, Title } from "@/ui-framework";
import { useSignIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image } from "expo-image";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";

export default function SignInScreen() {
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fille in all fields");
      return;
    }

    if (!isLoaded) return;

    setLoading(true);

    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        Alert.alert("Error", "Sign in failed. Please try again.");
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      Alert.alert("Error", err.errors?.[0]?.message || "Sign in failed");
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainView justify="start">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollSection>
          <BoxView padding="md">
            <Image
              source={require("@/assets/images/signin-chef.png")}
              contentFit="contain"
              style={styles.image}
            />
          </BoxView>
          
          <Title>Welcome Back</Title>

            <StackView pt="lg" px="md">
                <Input 
                  placeholder="Enter email"
                  placeholderTextColor={textColor.primary}
                  value="email"
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
            </StackView>
        </ScrollSection>
      </KeyboardAvoidingView>
    </MainView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 400,
    height: 400,
  },
});
