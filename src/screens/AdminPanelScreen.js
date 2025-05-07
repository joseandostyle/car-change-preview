import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AdminPanelScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Panel de Administración</Text>
      <Button title="Ver documentos pendientes" onPress={() => {}} />
      <Button title="Ver disputas activas" onPress={() => {}} />
      <Button title="Ver contratos" onPress={() => {}} />
    </View>
  );
}
