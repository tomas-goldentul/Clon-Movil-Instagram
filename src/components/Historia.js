import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Historia = ({ imageUrl, nombre, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <LinearGradient
        colors={['#CA1D7E', '#E3515B', '#F2703F', '#F99F4A']} 
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradientBorder}
      >
        <View style={styles.blackSeparator}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: imageUrl }}
              style={styles.avatarImage} 
              resizeMode="cover"
            />
          </View>
        </View>
      </LinearGradient>

      <Text style={styles.labelText} numberOfLines={1}>
        {nombre}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gradientBorder: {
    width: 88,
    height: 88,
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackSeparator: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 74,
    height: 74,
    borderRadius: 37,
    overflow: 'hidden',
    backgroundColor: '#222', 
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  labelText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 6,
    textAlign: 'center',
    maxWidth: 85,
  },
});

export default Historia;