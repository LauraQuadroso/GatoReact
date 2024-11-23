import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function Pagina2() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Cuidados com Gatos</Text>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6h8OpsUg4QKZutQW-LV6z8DsjGdPQRiLNKw&s' }}
          style={styles.img}
        />
        <Text style={styles.descricao}>
          Gatos precisam de cuidados específicos para uma vida saudável. Alimente-os com ração adequada, mantenha a vacinação em dia e proporcione um ambiente seguro e enriquecido para estimular o comportamento natural.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  titulo: {
    color: 'black',
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  img: {
    width: 380,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 15,
    alignSelf: 'center',
  },
  descricao: {
    color: 'gray',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
});
