import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatListScreen from './screens/ChatListScreen';
import ChatScreen from './screens/ChatScreen';
// Aquí puedes importar más pantallas cuando las tengas:
// import VehicleDetail from './screens/VehicleDetail';
// import Onboarding1 from './screens/Onboarding/Onboard1';
// etc.

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChatList">
        <Stack.Screen
          name="ChatList"
          component={ChatListScreen}
          options={{ title: 'Chats' }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ title: 'Conversación' }}
        />
        {/* Agrega aquí más pantallas según vayas creando */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
