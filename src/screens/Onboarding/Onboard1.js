import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Onboard1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚗 Intercambia tu coche de forma gratuita y segura</Text>
      <Text style={styles.bullet}>• Intercambio 100% gratuito entre particulares</Text>
      <Text style={styles.bullet}>• Usuarios verificados con identidad real</Text>
      <Text style={styles.bullet}>• Contrato legal para cada intercambio</Text>
      <Text style={styles.bullet}>• Garantía Recíproca CarChange™</Text>
      <Text style={styles.bullet}>• Sistema de reputación y valoraciones</Text>
      <View style={styles.button}>
        <Button title="Siguiente" onPress={() => navigation.navigate('Onboard2')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  bullet: {
    fontSize: 16,
    marginVertical: 4
  },
  button: {
    marginTop: 32,
    alignSelf: 'center',
    width: '50%'
  }
});
