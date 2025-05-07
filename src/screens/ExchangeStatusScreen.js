import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExchangeStatusScreen({ route }) {
  const { exchange } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estado del Intercambio</Text>
      <Text>ID: {exchange.id}</Text>
      <Text>Estado actual: {exchange.status}</Text>
      <Text>Vehículo: {exchange.vehicleId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 }
});
