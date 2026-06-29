import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({ color = '#007AFF', tamaño = 'small', backgroundColor = '#F0F0F0' }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ActivityIndicator size={tamaño} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

export default Loading;