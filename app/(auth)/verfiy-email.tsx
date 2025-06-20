/* eslint-disable react/no-unescaped-entities */
import { BodyText, BoxView, Button, Input, MainView, RowView, ScrollSection, StackView, text, Title } from "@/ui-framework";
import { useSignUp } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
interface VerifyEmailProps {
  email: string;
  onBack: () => void;
}

export default function VerifyEmail({ email, onBack }: VerifyEmailProps) {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerification = async () => {
    if (!isLoaded) return;

    setLoading(true);
    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
      } else {
        Alert.alert("Error", "Verification failed. Please try again.");
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err: any) {
      Alert.alert(
        "Error",
        err.errors?.[0]?.message || "Verification failed. Please try again."
      );
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
              source={require("@/assets/images/email-chef.png")}
              contentFit="contain"
              style={[
                { width: 400, height: 400 },
                Platform.OS === "android"
                  ? { marginTop: 50 }
                  : { marginTop: 0 },
              ]}
            />
          </BoxView>

          <Title>Verify Your Email</Title>
          <StackView padding="md">
            <BodyText align="center">We've sent a verification code to</BodyText>
            <BodyText align="center">{email}</BodyText>
          </StackView>
          <StackView pt="lg" px="md">
            <Input
              placeholder="Enter verification code"
              placeholderTextColor={text.secondary}
              value={code}
              onChangeText={setCode}
              keyboardType="number-pad"
              autoCapitalize="none"
              // rightElement={
              //   <TouchableOpacity
              //     onPress={() => setShowPassword(!showPassword)}
              //   >
              //     <Ionicons
              //       name={showPassword ? "eye-outline" : "eye-off-outline"}
              //       size={20}
              //       color={text.secondary}
              //     />
              //   </TouchableOpacity>
              // }
            />

            <Button
              label="Verify Email"
              loadingText="Verifying..."
              onPress={handleVerification}
              disabled={loading}
              style={loading ? { opacity: 0.6 } : undefined}
            />
          </StackView>
          <RowView justify="center" py="lg">
            <Button
              variant="ghost"
              label="Back to Sign Up"
              loadingText="Signin In"
              onPress={onBack}
            />
          </RowView>
        </ScrollSection>
      </KeyboardAvoidingView>
    </MainView>
  );
}
