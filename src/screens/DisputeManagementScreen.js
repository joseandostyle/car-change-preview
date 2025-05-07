import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function DisputeManagementScreen({ disputes }) {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Gestión de Disputas</Text>
      <FlatList
        data={disputes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 12 }}>
            <Text>Motivo: {item.reason}</Text>
            <Text>Estado: {item.status}</Text>
            <Button title="Resolver disputa" onPress={() => {}} />
          </View>
        )}
      />
    </View>
  );
}
