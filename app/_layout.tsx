import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { background } from "@/ui-framework";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Slot screenOptions={{ headerShown: false, backgroundColor: background.primary  }} />
    </ClerkProvider>
  );
}
