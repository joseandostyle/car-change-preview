import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function ContractPreviewScreen({ route }) {
  const { contractData } = route.params;

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Vista previa del contrato</Text>
      <Text>{contractData.text}</Text>
    </ScrollView>
  );
}
