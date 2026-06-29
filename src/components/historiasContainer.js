import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import Stories from './Historia';
import Publicacion from './publicacion';

export default function StoriesContainer({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      <View style={styles.feedContainer}>
        <Publicacion navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  feedContainer: {
    flex: 1,
  },
});