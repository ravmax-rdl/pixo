import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '@/Styles/auth.styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/theme';
import { useSSO } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

export default function login() {
  const { startSSOFlow } = useSSO();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy: 'oauth_google' });
      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.replace('/(tabs)');
      }
    } catch (error) {
      console.log('OAuth error', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Brand section */}

      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>spotlight</Text>
        <Text style={styles.tagline}>don't miss anything</Text>
      </View>

      {/* Illustration*/}

      <View style={styles.illustrationContainer}>
        <Image
          source={require('../../assets/images/auth-bg-2.png')}
          style={styles.illustration}
          resizeMode="cover"
        />
      </View>

      {/* Form */}

      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By continuing, you agree to out Terms and Privacy Policy
        </Text>
      </View>
    </View>
  );
}
