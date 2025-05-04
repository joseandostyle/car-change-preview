import React from 'react';
import { registerRootComponent } from 'expo';
import AppNavigator from './src/navigation';

function App() {
  return <AppNavigator />;
}

// registerRootComponent hace que Expo y web sepan dónde empezar la app
export default registerRootComponent(App);
