import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function VehicleCard({ vehicle, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ margin: 12, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 }}>
        <Image source={{ uri: vehicle.photo }} style={{ width: '100%', height: 180, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
        <View style={{ padding: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{vehicle.brand} {vehicle.model} ({vehicle.year})</Text>
          <Text>{vehicle.type} · {vehicle.value} €</Text>
          <Text>Ubicación: {vehicle.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
