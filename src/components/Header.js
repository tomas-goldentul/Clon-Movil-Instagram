import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
// CORRECCIÓN 1: Importar SafeAreaView desde safe-area-context
import { SafeAreaView } from 'react-native-safe-area-context'; 

const Header = () => {
  return (
    // edges={['top']} asegura que solo empuje hacia abajo la barra de estado y no agregue aire abajo
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.headerContainer}>
        
        {/* Ícono Izquierdo (Cámara) */}
        <TouchableOpacity style={styles.iconButtonLeft} activeOpacity={0.7}>
          <Feather name="camera" size={24} color="#000000" />
        </TouchableOpacity>

        {/* Contenedor del Logo Centrado */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Instagram</Text>
        </View>

        {/* Contenedor Iconos Derechos */}
        <View style={styles.rightIconsContainer}>
          <TouchableOpacity style={styles.iconButtonRight} activeOpacity={0.7}>
            <Feather name="tv" size={24} color="#000000" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButtonRight} activeOpacity={0.7}>
            <Feather name="send" size={24} color="#000000" />
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#DBDBDB',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 50, // Altura ideal para un header de Instagram en mobile
    paddingHorizontal: 15,
  },
  // CORRECCIÓN 2: Separamos márgenes izquierdos y derechos para no romper el centrado del flex
  iconButtonLeft: {
    padding: 5,
  },
  iconButtonRight: {
    padding: 5,
    marginLeft: 12, // Separación simétrica entre los íconos de la derecha
    position: 'relative',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // Compensamos levemente para un centrado matemático perfecto en pantallas chicas
    paddingLeft: 10, 
  },
  logoText: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 4,
    right: 2,
    backgroundColor: '#FF3040',
    width: 9,
    height: 9,
    borderRadius: 4.5,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
});

export default Header;