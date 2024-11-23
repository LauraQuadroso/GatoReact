import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
export default function Login(): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="heart" size={100} color="purple" style={styles.icone} />
        <Text style={styles.titulo}>Bem-vindo!</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="gray"
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.botao} onPress={() => { }}>
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 20,
  },
  titulo: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  icone: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20, 
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#841584',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, 
    marginTop: 20,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
