import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { Feather, Foundation } from '@expo/vector-icons';

const Footer = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.footerContainer}>

        <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
          <Foundation name="home" size={28} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
          <Feather name="search" size={26} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
          <Feather name="plus-square" size={26} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
          <Feather name="heart" size={26} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.profileButton}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            style={styles.profileImage}
          />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#000000',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000000',
    height: 50,
    paddingHorizontal: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#262626',
  },
  iconButton: {
    padding: 10,
  },
  profileButton: {
    padding: 5, 
  },
  profileImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#262626',
    backgroundColor: '#333333',
  },
});

export default Footer;