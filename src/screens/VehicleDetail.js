import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import VehicleActions from '../components/VehicleActions';

export default function VehicleDetail({ route }) {
  const { vehicle } = route.params;

  return (
    <View style={{ padding: 16 }}>
      <Image source={{ uri: vehicle.photo }} style={{ width: '100%', height: 200 }} />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{vehicle.brand} {vehicle.model} ({vehicle.year})</Text>
      <Text>{vehicle.type} · {vehicle.value} € · {vehicle.location}</Text>
      <Text style={{ marginTop: 8 }}>{vehicle.description}</Text>
      <VehicleActions vehicle={vehicle} />
    </View>
  );
}
