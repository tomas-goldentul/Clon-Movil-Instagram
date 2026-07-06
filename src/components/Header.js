import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context'; 

const Header = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.headerContainer}>
        
        <TouchableOpacity style={styles.iconButtonLeft} activeOpacity={0.7}>
          <Feather name="camera" size={24} color="#000000" />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Instagram</Text>
        </View>

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
    height: 50, 
    paddingHorizontal: 15,
  },
  iconButtonLeft: {
    padding: 5,
  },
  iconButtonRight: {
    padding: 5,
    marginLeft: 12,
    position: 'relative',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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