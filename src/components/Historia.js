import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const STORIES_DATA = [
    { id: '1', name: 'Tu historia', image: require('../../assets/perfil.png'), isUser: true },
    { id: '2', name: 'michi_fan', image: { uri: 'https://cdn2.thecatapi.com/images/uUGt0UBzF.jpg' } },
    { id: '3', name: 'catlover_ok', image: { uri: 'https://cdn2.thecatapi.com/images/0XYvN1wHz.jpg' } },
    { id: '4', name: 'pastelDePapa', image: { uri: 'https://cdn2.thecatapi.com/images/asv.jpg' } },
    { id: '5', name: 'gat', image: { uri: 'https://cdn2.thecatapi.com/images/MTY3MDU3MQ.jpg' } },
];

export default function Stories() {
    return (
        <View style={styles.container}>
            <FlatList
                data={STORIES_DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listPadding}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.storyContainer} activeOpacity={0.8}>
                        <View style={[styles.borderGradient, item.isUser && styles.userBorder]}>
                            <View style={styles.avatarContainer}>
                                <Image source={item.image} style={styles.avatar} />
                            </View>
                        </View>
                        <Text style={styles.username} numberOfLines={1}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#f0f0f0',
    },
    listPadding: {
        paddingHorizontal: 10,
    },
    storyContainer: {
        alignItems: 'center',
        marginHorizontal: 7,
        width: 72,
    },
    borderGradient: {
        width: 68,
        height: 68,
        borderRadius: 34,
        borderWidth: 2,
        borderColor: '#fe2c55',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
    },
    userBorder: {
        borderColor: '#ccc', 
    },
    avatarContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 32,
        overflow: 'hidden',
        backgroundColor: '#efefef',
    },
    avatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    username: {
        fontSize: 11,
        color: '#262626',
        marginTop: 4,
        textAlign: 'center',
        width: '100%',
    },
});