import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';



export default function Pagina1() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Gato Ocicat</Text>
        <Image
          source={{ uri: 'https://img.nsctotal.com.br/wp-content/uploads/2023/11/Gato-cacando.jpg' }}
          style={styles.img}
        />
        <Text style={styles.descricao}>
          O Ocicat é uma raça de gato domesticado que se assemelha a um gato selvagem. 
          É um gato ativo, afetuoso e altamente social, conhecido por sua pelagem com manchas e padrões.
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
    fontSize: 50,
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
