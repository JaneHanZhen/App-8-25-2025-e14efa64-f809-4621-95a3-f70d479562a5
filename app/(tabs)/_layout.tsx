import { Tabs } from 'expo-router';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#1e88e5',
        headerStyle: {
          backgroundColor: '#f7f9fc',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#1e88e5',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hello World',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}