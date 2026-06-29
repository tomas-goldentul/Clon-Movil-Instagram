import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Publicacion from './src/components/publicacion'; 
import PublicacionDetail from './src/components/publicacionDetail'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Publicacion" component={Publicacion} />
        <Stack.Screen name="PublicacionDetail" component={PublicacionDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}