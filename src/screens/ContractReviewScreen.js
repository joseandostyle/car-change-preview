import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function ContractReviewScreen({ route }) {
  const { contractText } = route.params;

  const handleSign = () => {
    Alert.alert('Contrato firmado digitalmente ✅');
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Revisión del Contrato</Text>
      <Text style={{ marginVertical: 16 }}>{contractText}</Text>
      <Button title="Firmar contrato" onPress={handleSign} />
    </View>
  );
}
