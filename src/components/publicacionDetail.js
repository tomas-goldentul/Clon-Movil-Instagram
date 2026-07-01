import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, SafeAreaView } from 'react-native';

function PublicacionDetail({ route, navigation }) {
    const { imagen, breeds, id } = route.params;
    const raza = breeds?.[0] || {};
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(45686);

    const handleLike = () => {
        if (liked) {
            setLikesCount(likesCount - 1);
        } else {
            setLikesCount(likesCount + 1);
        }
        setLiked(!liked);
    };
         
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.detail} contentContainerStyle={styles.scrollContent}>

                <View style={styles.headerPost}>
                    <View style={styles.userInfo}>
                        {/* Boton volver GEMINI */}
                        <Pressable onPress={() => navigation.goBack()} style={styles.btnVolver}>
                            <Text style={styles.btnVolverText}>‹</Text>
                        </Pressable>

                        <View style={styles.profilePicContainer}>
                            <Image source={require('../../assets/perfil.png')} style={styles.avatar} />
                        </View>
                        <View style={styles.userNameLoc}>
                            <Text style={styles.userName}>joshua_l</Text>
                            <Text style={styles.location}>Cat Cafe, Tokyo</Text>
                        </View>
                    </View>
                    <Text style={styles.options}>...</Text>
                </View>

                <Image style={styles.fotoGato} source={{ uri: imagen }} />

                <View style={styles.toolbar}>
                    <View style={styles.toolbarLeft}>
                        <Pressable onPress={handleLike}>
                            <Image
                                source={require('../../assets/instagram-heart-icon.png')}
                                style={[styles.icon, liked && styles.iconLiked]}
                            />
                        </Pressable>
                        <Image source={require('../../assets/instagram-comment-icon.png')} style={styles.icon} />
                        <Image source={require('../../assets/instagram-share-icon.png')} style={styles.icon} />
                    </View>
                    <Image source={require('../../assets/instagram-save-icon.png')} style={styles.iconRight} />
                </View>

                <View style={styles.likesSection}>
                    <View style={styles.miniProfilePic}>
                        <Text style={styles.miniProfilePicText}>🐱</Text>
                    </View>
                    <Text style={styles.likesText}>
                        Liked by <Text style={styles.boldText}>MiauFan123</Text> and <Text style={styles.boldText}>{likesCount.toLocaleString()}</Text> others
                    </Text>
                </View>

                <View style={styles.captionSection}>
                    <Text style={styles.captionText}>
                        <Text style={styles.boldText}>joshua_l</Text> <Text>{raza.name }</Text> (ID: {id}) {raza.description}
                    </Text>
                </View>

                {raza.name && (
                    <View style={styles.detallesEspecificos}>
                        <Text style={styles.detalleItemText}><Text style={styles.boldText}>Origen:</Text> {raza.origin}</Text>
                        <Text style={styles.detalleItemText}><Text style={styles.boldText}>Temperamento:</Text> {raza.temperament}</Text>
                        <Text style={styles.detalleItemText}><Text style={styles.boldText}>Esperanza de vida:</Text> {raza.life_span} años</Text>
                        <Text style={styles.detalleItemText}><Text style={styles.boldText}>Nivel de afecto:</Text> {raza.affection_level}/5</Text>
                    </View>
                )}

                <View style={styles.comentariosContainer}>
                    <Text style={styles.comentario}>
                        <Text style={styles.boldText}>michi_fan123 </Text>Este gato es demasiado lindo ฅ≽^•⩊•^≼ฅ
                    </Text>
                    <Text style={styles.comentario}>
                        <Text style={styles.boldText}>catlover_ok </Text>Necesito abrazarlo ahora mismo ᨐᵉᵒʷ
                    </Text>
                    <Text style={styles.comentario}>
                        <Text style={styles.boldText}>pastelDePapa777 </Text>me gustan mas los perros 🐶
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detail: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  headerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // estilo boton volver atras [gemini]
  btnVolver: {
    paddingRight: 12,
    paddingLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnVolverText: {
    fontSize: 34,
    fontWeight: '300',
    color: '#000',
    lineHeight: 34,
  },

  profilePicContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    overflow: 'hidden',
    marginRight: 10,
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  fotoGato: {
    width: '100%',
    height: 420,
    resizeMode: 'cover',
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
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
  iconLiked: {
    tintColor: '#ff3b30',
  },
  iconRight: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  likesSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingBottom: 6,
  },
  miniProfilePic: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  miniProfilePicText: {
    fontSize: 10,
  },
  likesText: {
    fontSize: 13,
    color: '#000',
  },
  captionSection: {
    paddingHorizontal: 14,
    paddingBottom: 8,
  },
  captionText: {
    fontSize: 14,
    color: '#000',
    lineHeight: 19,
  },
  detallesEspecificos: {
    marginHorizontal: 14,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 14,
  },
  detalleItemText: {
    fontSize: 13,
    color: '#262626',
    marginBottom: 4,
    lineHeight: 16,
  },
  comentariosContainer: {
    paddingHorizontal: 14,
    paddingTop: 8,
    borderTopWidth: 0.5,
    borderTopColor: '#efefef',
  },
  comentario: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 6,
    color: '#000',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
export default PublicacionDetail;