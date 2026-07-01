import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import StoriesContainer from './src/components/historiasContainer';
import PublicacionDetail from './src/components/publicacionDetail';
import Footer from './src/components/Footer';
import Perfil from './src/components/perfil';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={StoriesContainer} />
          <Stack.Screen name="PublicacionDetail" component={PublicacionDetail} />
          <Stack.Screen name="Perfil" component={Perfil} /> 
        </Stack.Navigator>
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <Footer />
        </View>
      </NavigationContainer>

    </SafeAreaProvider>
  );
}