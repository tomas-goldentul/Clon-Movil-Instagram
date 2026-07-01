import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, FlatList, SafeAreaView } from 'react-native';
import api from '../services/api.js';

function Publicacion({ navigation }) {
    const [gatos, setGatos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function obtenerGatos() {
            try {
                const response = await api.get('images/search?limit=12&has_breeds=1');
                setGatos(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        obtenerGatos();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={gatos}
                keyExtractor={(gato) => gato.id.toString()}
                contentContainerStyle={styles.galeria}
                renderItem={({ item: gato }) => (
                    <View style={styles.post}>
                        <View style={styles.headerPost}>
                            <View style={styles.userInfo}>
                                <View style={styles.profilePicContainer}>
                                    <Image source={require('../../assets/perfil.png')} style={styles.icon} />
                                </View>
                                <View style={styles.userNameLoc}>
                                    <Text style={styles.userName}>joshua_l</Text>
                                    <Text style={styles.location}>Cat Cafe, Tokyo</Text>
                                </View>
                            </View>
                            <Text style={styles.options}>...</Text>
                        </View>

                        <Image style={styles.fotoGato} source={{ uri: gato.url }} />

                        <View style={styles.toolbar}>
                            <View style={styles.toolbarLeft}>
                                <Image source={require('../../assets/instagram-heart-icon.png')} style={styles.icon} />
                                <Image source={require('../../assets/instagram-comment-icon.png')} style={styles.icon} />
                                <Image source={require('../../assets/instagram-share-icon.png')} style={styles.icon} />
                            </View>
                            <Image source={require('../../assets/instagram-save-icon.png')} style={styles.iconRight} />
                        </View>

                        <View style={styles.likesSection}>
                            <View style={styles.miniProfilePic}>
                            </View>
                            <Text style={styles.likesText}>Liked by <Text style={styles.boldText}>MiauFan123</Text> and <Text style={styles.boldText}>45,686</Text> others</Text>
                        </View>

                        <View style={styles.captionSection}>
                            <Text style={styles.captionText}>
                                <Text style={styles.boldText}>pastelDePapa777</Text> Me gustan más los perros
                            </Text>
                        </View>

                        <Pressable
                            style={styles.btnDetalleLink}
                            onPress={() => navigation.navigate('PublicacionDetail', {
                                imagen: gato.url,
                                breeds: gato.breeds,
                                id: gato.id
                            })}>
                            <Text style={styles.btnDetalleLinkText}>Ver más detalles...</Text>
                        </Pressable>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingVertical: 12,
        color: '#000',
    },
    galeria: {
        paddingHorizontal: 0,
        paddingBottom: 16,
    },
    post: {
        flex: 1,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    fotoGato: {
        width: '100%',
        height: 280,
        resizeMode: 'cover',
    },
    headerPost: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePicContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    profilePicText: {
        fontSize: 18,
    },
    userNameLoc: {
        justifyContent: 'center',
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    location: {
        fontSize: 12,
        color: '#8e8e8e',
    },
    options: {
        fontSize: 20,
        color: '#000',
        marginRight: 4,
    },
    toolbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 10,
    },
    toolbarLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 16,
        resizeMode: 'contain',
    },
    iconRight: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    likesSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingBottom: 4,
    },
    miniProfilePic: {
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 6,
    },
    miniProfilePicText: {
        fontSize: 10,
    },
    likesText: {
        fontSize: 12,
        color: '#000',
    },
    captionSection: {
        paddingHorizontal: 12,
        paddingBottom: 4,
    },
    captionText: {
        fontSize: 14,
        color: '#000',
        lineHeight: 18,
    },
    boldText: {
        fontWeight: 'bold',
    },
    btnDetalleLink: {
        paddingHorizontal: 12,
        paddingBottom: 8,
    },
    btnDetalleLinkText: {
        fontSize: 12,
        color: '#8e8e8e',
    },
});

export default Publicacion;