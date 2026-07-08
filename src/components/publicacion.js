import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import api from '../services/api.js';
import PostCard from './PostCard.js';

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
                    <PostCard gato={gato} navigation={navigation} />
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
    galeria: {
        paddingHorizontal: 0,
        paddingBottom: 16,
    },
});

export default Publicacion;