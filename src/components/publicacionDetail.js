import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
function PublicacionDetail({ route }) {
    const [likes, setLikes] = useState(0);
    const { imagen, breeds, id } = route.params;
    const raza = breeds?.[0] || {};

    return (
        <ScrollView style={styles.detail} contentContainerStyle={styles.scrollContent}>
            <Image
                style={styles.imagenPrincipal}
                source={{ uri: imagen }}
            />

            <View style={styles.infoContainer}>
                <Text style={styles.tituloBreed}>{raza.name}</Text>
                <Text style={styles.idText}>ID: {id}</Text>

                <Text style={styles.descripcion}>{raza.description}</Text>

                <View style={styles.detallesGrid}>
                    <Text style={styles.detalleItem}><Text style={styles.bold}>Origen:</Text> {raza.origin}</Text>
                    <Text style={styles.detalleItem}><Text style={styles.bold}>Temperamento:</Text> {raza.temperament}</Text>
                    <Text style={styles.detalleItem}><Text style={styles.bold}>Esperanza de vida:</Text> {raza.life_span} años</Text>
                    <Text style={styles.detalleItem}><Text style={styles.bold}>Nivel de afecto:</Text> {raza.affection_level}/5</Text>
                </View>

                <Pressable style={styles.btnLike} onPress={() => setLikes(likes + 1)}>
                    <Text style={styles.btnLikeText}>❤️ {likes} Likes</Text>
                </Pressable>

                <View style={styles.comentariosContainer}>
                    <Text style={styles.tituloComentarios}>Comentarios</Text>

                    <Text style={styles.comentario}>
                        <Text style={styles.usuario}>michi_fan123: </Text>Este gato es demasiado lindo ฅ≽^•⩊•^≼ฅ
                    </Text>
                    <Text style={styles.comentario}>
                        <Text style={styles.usuario}>catlover_ok: </Text>Necesito abrazarlo ahora mismo ᨐᵉᵒʷ
                    </Text>
                    <Text style={styles.comentario}>
                        <Text style={styles.usuario}>pastelDePapa777: </Text>me gustan mas los perros 🐶
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    detail: { flex: 1, backgroundColor: '#fff' },
    scrollContent: { paddingBottom: 30 },
    imagenPrincipal: { width: '100%', height: 350, resizeMode: 'cover' },
    infoContainer: { padding: 16 },
    tituloBreed: { fontSize: 26, fontWeight: 'bold', color: '#262626' },
    idText: { fontSize: 14, color: '#8e8e8e', marginBottom: 12 },
    descripcion: { fontSize: 16, lineHeight: 22, color: '#333', marginBottom: 16 },
    detallesGrid: { backgroundColor: '#f9f9f9', padding: 12, borderRadius: 8, marginBottom: 20 },
    detalleItem: { fontSize: 14, marginBottom: 6, color: '#444' },
    bold: { fontWeight: 'bold', color: '#000' },
    btnLike: { backgroundColor: '#fe2c55', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginBottom: 24 },
    btnLikeText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    comentariosContainer: { borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 16 },
    tituloComentarios: { fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#262626' },
    comentario: { fontSize: 14, lineHeight: 20, marginBottom: 10, color: '#333' },
    usuario: { fontWeight: 'bold', color: '#000' },
});

export default PublicacionDetail;