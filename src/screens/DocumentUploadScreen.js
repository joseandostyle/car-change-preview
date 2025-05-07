import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function DocumentUploadScreen() {
  const [document, setDocument] = useState(null);

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: ['application/pdf', 'image/*'] });
    if (!result.canceled) {
      setDocument(result.assets[0]);
    }
  };

  const handleSubmit = () => {
    if (!document) return Alert.alert('Sube el documento primero');
    Alert.alert('Documento enviado para revisión');
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18 }}>Subir póliza de seguro</Text>
      <Button title="Seleccionar documento" onPress={pickDocument} />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}
