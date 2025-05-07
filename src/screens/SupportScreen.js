import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SupportScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Soporte y Ayuda</Text>
      <Button title="Contactar con Soporte" onPress={() => {}} />
      <Button title="Reportar un problema" onPress={() => {}} />
    </View>
  );
}
