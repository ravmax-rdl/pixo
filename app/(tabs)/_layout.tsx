import { Tabs } from 'expo-router'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Tabs.Screen name="index" options={{tabBarIcon: () => <Ionicons name="home" size={24}/>}}/>
        <Tabs.Screen name="bookmarks"/>
        <Tabs.Screen name="create"/>
        <Tabs.Screen name="notifications"/>
        <Tabs.Screen name="profile"/>
    </Tabs>
  )
}