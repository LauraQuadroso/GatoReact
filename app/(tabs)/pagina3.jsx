import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function Pagina3() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Acessórios para Gatos</Text>
        <Image
          source={{ uri: 'https://rawznaturalpetfood.com/wp-content/uploads/Screen-Shot-2022-02-28-at-2.29.34-PM.png' }}
          style={styles.img}
        />
        <Text style={styles.descricao}>
          Explore uma variedade de acessórios para o seu gato, como arranhadores, brinquedos, camas e muito mais. 
          Proporcione conforto e diversão para o seu amigo felino com produtos de qualidade.
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
