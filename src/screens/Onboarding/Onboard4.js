import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Onboard4({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚘 ¿Por qué usar CarChange?</Text>
      <Text style={styles.point}>✔️ Probar coches que siempre quisiste conducir</Text>
      <Text style={styles.point}>✔️ Cambiar temporalmente de tipo de vehículo (ej: turismo ⇄ furgoneta)</Text>
      <Text style={styles.point}>✔️ Ideal para apasionados del motor y experiencias únicas</Text>
      <Text style={styles.point}>✔️ Intercambio flexible: días, fines de semana, vacaciones...</Text>
      <Text style={styles.point}>✔️ Total control: elige con quién, cuándo y por cuánto tiempo</Text>
      <View style={styles.button}>
        <Button title="Empezar" onPress={() => navigation.replace('ChatList')} />
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
  point: {
    fontSize: 16,
    marginVertical: 4
  },
  button: {
    marginTop: 40,
    alignSelf: 'center',
    width: '50%'
  }
});
