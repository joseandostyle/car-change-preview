import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function IdentityVerificationScreen() {
  const [front, setFront] = useState(null);
  const [back, setBack] = useState(null);

  const uploadDocument = async (side) => {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    if (!result.canceled) {
      const image = result.assets[0].uri;
      side === 'front' ? setFront(image) : setBack(image);
    }
  };

  const handleSubmit = () => {
    if (!front || !back) {
      Alert.alert('Faltan imágenes', 'Debes subir ambas caras del documento');
      return;
    }
    Alert.alert('¡Enviado!', 'Tu documentación será revisada manualmente.');
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Verificación de Identidad</Text>
      <Button title="Subir anverso del DNI" onPress={() => uploadDocument('front')} />
      <Button title="Subir reverso del DNI" onPress={() => uploadDocument('back')} />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}
