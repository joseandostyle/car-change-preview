import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TrustInfoModal({ navigation }) {
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>¿Qué es la Valoración de Confianza?</Text>
      <Text style={{ marginVertical: 12 }}>
        Es una puntuación que combina:
        {'\n'}• Verificación de identidad
        {'\n'}• Número de intercambios exitosos
        {'\n'}• Puntuación media de reseñas
        {'\n'}• Comportamiento sin reportes
      </Text>
      <Button title="Entendido" onPress={() => navigation.goBack()} />
    </View>
  );
}
