import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// 1. Importás el componente (asegurate de que la ruta coincida con dónde guardaste el archivo)
import Publicacion from './src/components/publicacion'; 

export default function App() {
  return (
    <View style={styles.container}>
      {/* 2. Reemplazamos el texto de bienvenida por tu componente */}
      <Publicacion />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // IMPORTANTE: Saqué 'alignItems: center' y 'justifyContent: center'
    // Si los dejás, la galería de fotos se va a encoger y centrar en un cuadradito.
    // Al sacarlos, dejamos que el componente Publicacion ocupe todo el ancho de la pantalla.
  },
});