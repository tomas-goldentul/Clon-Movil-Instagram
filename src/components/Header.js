import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
        <Feather name="camera" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Instagram</Text>
      </View>

      <View style={styles.rightIconsContainer}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Feather name="tv" size={24} color="#FFFFFF" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Feather name="send" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000', 
    height: 55, 
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#262626',
  },
  iconButton: {
    padding: 5,
    marginLeft: 15,
    position: 'relative',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 30,
  },
  logoText: {
    color: '#FFFFFF',
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
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#000000',
  },
});

export default Header;