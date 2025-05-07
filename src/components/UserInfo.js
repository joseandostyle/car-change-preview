import React from 'react';
import { View, Text } from 'react-native';

export default function UserInfo({ user }) {
  return (
    <View style={{ padding: 8 }}>
      <Text style={{ fontWeight: 'bold' }}>{user.name} {user.firstSurname} {user.secondSurname}</Text>
      <Text>Correo: {user.email}</Text>
      <Text>Intercambios: {user.totalExchanges || 0}</Text>
    </View>
  );
}
