import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function StateCheckAfterScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Estado del Vehículo (Después)</Text>
      <Text>Fotos, gasolina, limpieza...</Text>
      <TextInput placeholder="Observaciones al devolver el vehículo" style={{ marginTop: 8, borderWidth: 1, padding: 8 }} />
      <Button title="Guardar estado final" onPress={() => {}} />
    </View>
  );
}
