import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StoriesContainer from '../components/historiasContainer';
import PublicacionDetail from '../components/publicacionDetail';
import Footer from '../components/Footer';
import Perfil from '../components/perfil';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={StoriesContainer} />
        <Stack.Screen name="PublicacionDetail" component={PublicacionDetail} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
      <View style={styles.footerWrapper}>
        <Footer />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  footerWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});