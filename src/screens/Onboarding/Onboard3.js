import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Onboard3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 Seguridad y Confianza</Text>
      <Text style={styles.item}>✅ Usuarios verificados con documento de identidad</Text>
      <Text style={styles.item}>✅ Contrato legal firmado antes del intercambio</Text>
      <Text style={styles.item}>✅ Sistema de valoraciones y reputación</Text>
      <Text style={styles.item}>✅ Seguro opcional (puede contratarse o verificarse manualmente)</Text>
      <Text style={styles.item}>✅ Garantía Recíproca CarChange™: el vehículo actúa como garantía mutua ante daños graves, robo o siniestro</Text>
      <View style={styles.buttonRow}>
        <Button title="Anterior" onPress={() => navigation.goBack()} />
        <Button title="Siguiente" onPress={() => navigation.navigate('Onboard4')} />
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
  item: {
    fontSize: 16,
    marginVertical: 4
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32
  }
});
