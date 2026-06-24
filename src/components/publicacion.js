import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, FlatList, SafeAreaView} from 'react-native';
import api from '../services/api.js'
import PublicacionDetail from '../components/publicacionDetail.js'; 

function Publicacion() {
    const [gatos, setGatos] = useState([]);
    const [gatoSeleccionado, setGatoSeleccionado] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function obtenerGatos() {
            try {
                const response = await api.get(
                    'images/search?limit=12&has_breeds=1'
                );
                setGatos(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        obtenerGatos();
    }, []);

    const handleBack = () => {
        setGatoSeleccionado(null);
    };

    if (gatoSeleccionado) {
        return (
            <SafeAreaView style={styles.container}>
               
                <Pressable style={styles.btnVolver} onPress={handleBack}>
                    <Text style={styles.btnVolverText}>Volver</Text>
                </Pressable>
                <PublicacionDetail
                    imagen={gatoSeleccionado.url}
                    breeds={gatoSeleccionado.breeds}
                    id={gatoSeleccionado.id}
                />
            </SafeAreaView>
        );
    }

    // VISTA DE CARGA
   // if (loading) {
  //      return <Loader />;
    //}

    // VISTA PRINCIPAL (GALERÍA)
    return (
        <SafeAreaView style={styles.container}>
            {/* Las cadenas de texto SIEMPRE van dentro de un componente <Text> */}
            <Text style={styles.titulo}>Trending</Text>
            
            {/* 2. Cambiamos el .map() por un FlatList (Mucho mejor rendimiento en celulares) */}
            <FlatList
                data={gatos}
                keyExtractor={(gato) => gato.id.toString()}
                numColumns={2} // Mantiene el diseño de galería/grilla de 2 columnas
                columnWrapperStyle={styles.fila}
                contentContainerStyle={styles.galeria}
                renderItem={({ item: gato }) => (
                    <View style={styles.card}>
                        {/* 3. Las imágenes de internet SIEMPRE llevan source={{ uri: ... }} y ancho/alto fijo */}
                        <Image
                            style={styles.fotoGato}
                            source={{ uri: gato.url }}
                        />
                        <View style={styles.footerPost}>
                            {/* 4. Las imágenes locales se importan y se pasan directo */}
                            
                            <Pressable 
                                style={styles.btnDetalle} 
                                onPress={() => setGatoSeleccionado(gato)}
                            >
                                <Text style={styles.btnDetalleText}>Ver detalle</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

// 5. Reemplazo de publicacion.css por StyleSheet de React Native
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
        paddingHorizontal: 8,
    },
    fila: {
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        margin: 8,
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#efefef',
        // Sombras para iOS y Android
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    fotoGato: {
        width: '100%',
        height: 160,
    },
    footerPost: {
        flexDirection: 'row', // En RN por defecto es 'column', acá lo hacemos fila.
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    fotoPerfil: {
        width: 30,
        height: 30,
        borderRadius: 15, // Círculo perfecto
    },
    btnVolver: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#f0f0f0',
        alignSelf: 'flex-start',
        margin: 16,
        borderRadius: 8,
    },
    btnVolverText: {
        fontWeight: '600',
        color: '#333',
    },
    btnDetalle: {
        backgroundColor: '#0095f6', // Azul Instagram clásico
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    btnDetalleText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default Publicacion;