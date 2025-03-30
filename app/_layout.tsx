import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Slot } from 'expo-router';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error('Missing Clerk Publishable Key. Please add it to your .env file.');
}

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <Stack screenOptions={{ headerShown: false }} />
          </SafeAreaView>
        </SafeAreaProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
