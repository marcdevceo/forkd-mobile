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
import { useSignUp } from "@clerk/clerk-expo";
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
import VerifyEmail from "./verfiy-email";

export default function SignUpScreen() {
  const router = useRouter();
  const { isLoaded, signUp } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fille in all fields");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Error", "Password must be at least 8 characters long");
    }

    if (!isLoaded) return;

    setLoading(true);

    try {
      await signUp.create({ emailAddress: email, password });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
    } catch (err: any) {
      Alert.alert(
        "Error",
        err.errors?.[0]?.message || "Failed to create account"
      );
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setLoading(false);
    }
  };

  if (pendingVerification)
    return (
      <VerifyEmail email={email} onBack={() => setPendingVerification(false)} />
    );

  return (
    <MainView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollSection>
          <BoxView padding="md">
            <Image
              source={require("@/assets/images/signup-chef.png")}
              contentFit="contain"
              style={[
                { width: 400, height: 400 },
                Platform.OS === "android"
                  ? { marginTop: 50 }
                  : { marginTop: 0 },
              ]}
            />
          </BoxView>

          <Title>Create Account</Title>

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
              label="Sign Up"
              loadingText="Creating Account..."
              onPress={handleSignUp}
              disabled={loading}
              style={loading ? { opacity: 0.6 } : undefined}
            />
          </StackView>
          <RowView justify="center">
            <Button
              variant="ghost"
              loadingText="Signin In"
              onPress={() => router.back()}
            >
              <BodyText>
                Already have an account? {""}
                <BodyText color="primary" weight="bold">
                  Sign In
                </BodyText>
              </BodyText>
            </Button>
          </RowView>
        </ScrollSection>
      </KeyboardAvoidingView>
    </MainView>
  );
}
