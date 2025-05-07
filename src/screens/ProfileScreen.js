import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ user }) {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        {user.name} {user.firstSurname} {user.secondSurname}
      </Text>
      <Text>Email: {user.email}</Text>
      <Text>Valoración de Confianza: {user.trustScore || 'N/A'}</Text>
      <Button title="Ver todas las reseñas" onPress={() => {}} />
      {user.verified && <Text style={{ marginTop: 8 }}>🛂 Identidad Verificada</Text>}
    </View>
  );
}
