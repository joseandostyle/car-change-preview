import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Onboard2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔁 ¿Cómo funciona?</Text>
      <Text style={styles.step}>1️⃣ Encuentra un coche que se adapte a tus necesidades</Text>
      <Text style={styles.step}>2️⃣ Envía una solicitud de intercambio</Text>
      <Text style={styles.step}>3️⃣ Firma el contrato legal</Text>
      <Text style={styles.step}>4️⃣ Entrega el vehículo… ¡y disfruta del otro!</Text>
      <View style={styles.buttonRow}>
        <Button title="Anterior" onPress={() => navigation.goBack()} />
        <Button title="Siguiente" onPress={() => navigation.navigate('Onboard3')} />
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
  step: {
    fontSize: 16,
    marginVertical: 6
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32
  }
});
