import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import api from '../services/api.js';
import { useNavigation } from '@react-navigation/native';
export default function Perfil() {
    const [fotosGatos, setFotosGatos] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        api.get('images/search?limit=15')
            .then(response => setFotosGatos(response.data))
            .catch(error => console.error(error));
    }, []);

    const ProfileHeader = () => (
        <View style={styles.pad}>
            {/* CORREGIDO: Barra superior con distribución simétrica */}
            <View style={[styles.flexRow, styles.spaceBtn]}>
                <View style={styles.flexRow}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <Text style={styles.btnVolverText}>‹</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtBold}>📷 jacob_w</Text>
                </View>
                {/* El menú ahora sí se posiciona correctamente a la derecha */}
                <Text style={styles.menuIcon}>☰</Text>
            </View>

            <View style={[styles.flexRow, styles.spaceBtn, styles.marV]}>
                <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.avatar} />
                <View style={[styles.flexRow, { flex: 1, justifyContent: 'space-around' }]}>
                    <View style={styles.center}><Text style={styles.txtBold}>15</Text><Text style={styles.txtGray}>Posts</Text></View>
                    <View style={styles.center}><Text style={styles.txtBold}>834</Text><Text style={styles.txtGray}>Followers</Text></View>
                    <View style={styles.center}><Text style={styles.txtBold}>162</Text><Text style={styles.txtGray}>Following</Text></View>
                </View>
            </View>

            <View style={{ marginBottom: 15 }}>
                <Text style={styles.txtBold}>Jacob West</Text>
                <Text style={styles.txtGray}>Digital goodies designer @pixsellz</Text>
                <Text style={styles.txtWhite}>Everything is designed.</Text>
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBold}>Edit Profile</Text>
            </TouchableOpacity>

            {/* IA:GEMINI */}
            <View style={[styles.flexRow, { marginBottom: 15 }]}>
                <View style={[styles.center, { marginRight: 15 }]}>
                    <View style={styles.circle}><Text style={styles.txtWhite}>+</Text></View>
                    <Text style={[styles.txtWhite, { fontSize: 12 }]}>New</Text>
                </View>
                <View style={styles.center}>
                    <View style={styles.circle}><Text style={{ fontSize: 20 }}>🐱</Text></View>
                    <Text style={[styles.txtWhite, { fontSize: 12 }]}>Cats</Text>
                </View>
            </View>
            <View style={[styles.flexRow, { borderTopWidth: 0.5, borderColor: '#262626' }]}>
                <View style={[styles.center, { flex: 1, padding: 10, borderBottomWidth: 1, borderColor: '#fff' }]}><Text style={styles.txtWhite}>田</Text></View>
                <View style={[styles.center, { flex: 1, padding: 10 }]}><Text style={{ color: 'gray' }}>👤</Text></View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.bg}>
            <FlatList
                data={fotosGatos}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                ListHeaderComponent={ProfileHeader}

                //IA:GEMINI
                /* PROPIEDAD AGREGADA: Reemplaza el uso de .map() para iterar la lista */
                renderItem={({ item }) => (
                    <Image source={{ uri: item.url }} style={styles.gridImage} />
                )}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#fff',
    },
    pad: {
        padding: 15,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spaceBtn: {
        justifyContent: 'space-between',
    },
    center: {
        alignItems: 'center',
    },
    marV: {
        marginVertical: 15,
    },
    txtBlack: {
        color: '#000', 
    },
    txtBold: {
        color: '#000', 
        fontWeight: 'bold',
        fontSize: 16,
    },
    txtGray: {
        color: '#666',
        fontSize: 13,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    btn: {
        backgroundColor: '#efefef', 
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    circle: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#efefef', 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    gridImage: {
        width: '33.33%',
        aspectRatio: 1,
        borderWidth: 0.5,
        borderColor: '#fff', 
    },
    listContainer: {
        paddingBottom: 90,
    },
    backButton: {
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnVolverText: {
        fontSize: 34,
        fontWeight: '300',
        color: '#000', 
        lineHeight: 34,
    },
    menuIcon: {
        color: '#000', 
        fontSize: 20,
    },
});