import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function ReportScreen({ userId }) {
  const [reason, setReason] = useState('');

  const submitReport = () => {
    // reportIssue(userId, 'usuario', reason)
    alert('Reporte enviado. Gracias por ayudarnos a mejorar');
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Reportar Usuario</Text>
      <TextInput
        placeholder="Explica el motivo"
        value={reason}
        onChangeText={setReason}
        style={{ borderWidth: 1, padding: 8, height: 100, marginVertical: 8 }}
        multiline
      />
      <Button title="Enviar Reporte" onPress={submitReport} />
    </View>
  );
}
