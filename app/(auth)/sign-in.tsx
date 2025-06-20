/* eslint-disable react/no-unescaped-entities */
import {
  BodyText,
  BoxView,
  Button,
  Input,
  MainView,
  RowView,
  ScrollSection,
  StackView,
  text,
  Title,
} from "@/ui-framework";
import { useSignIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image } from "expo-image";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
    <MainView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollSection>
          <BoxView padding="md">
            <Image
              source={require("@/assets/images/signin-chef.png")}
              contentFit="contain"
              style={[
                { width: 400, height: 400 },
                Platform.OS === "android"
                  ? { marginTop: 50 }
                  : { marginTop: 0 },
              ]}
            />
          </BoxView>

          <Title>Welcome Back</Title>

          <StackView pt="lg" px="md">
            <Input
              placeholder="Enter email"
              placeholderTextColor={text.secondary}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input
              placeholder="Enter password"
              placeholderTextColor={text.secondary}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              rightElement={
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color={text.secondary}
                  />
                </TouchableOpacity>
              }
            />
            <Button
              label="Sign In"
              loadingText="Signin In"
              onPress={handleSignIn}
              disabled={loading}
              style={loading ? { opacity: 0.6 } : undefined}
            />
          </StackView>
          <RowView justify="center">
            <Button
              variant="ghost"
              loadingText="Signin Up"
              onPress={() => router.push("/(auth)/sign-up")}
            >
              <BodyText>
                Don't have an account?{" "}
                <BodyText color="primary" weight="bold">
                  Sign Up
                </BodyText>
              </BodyText>
            </Button>
          </RowView>
        </ScrollSection>
      </KeyboardAvoidingView>
    </MainView>
  );
}
