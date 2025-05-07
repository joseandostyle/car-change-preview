import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function StateCheckBeforeScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Estado del Vehículo (Antes)</Text>
      <Text>Fotos, daños, gasolina…</Text>
      <TextInput placeholder="Notas sobre el estado del vehículo" style={{ marginTop: 8, borderWidth: 1, padding: 8 }} />
      <Button title="Guardar estado inicial" onPress={() => {}} />
    </View>
  );
}
