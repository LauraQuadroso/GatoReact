import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="login"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-circle-outline" color={'pink'} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="pagina1"
        options={{
          title: 'Gato',
          tabBarIcon: ({ color }) => (
            <Ionicons name="logo-octocat" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="pagina2"
        options={{
          title: 'Cuidados',
          tabBarIcon: ({ color }) => (
            <Ionicons name="bandage-outline" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="pagina3"
        options={{
          title: 'Shopping',
          tabBarIcon: ({ color }) => (
            <Ionicons name="bag-handle-outline" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
