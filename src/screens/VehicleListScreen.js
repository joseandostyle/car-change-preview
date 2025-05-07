import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function VehicleListScreen({ vehicles }) {
  const nav = useNavigation();

  return (
    <FlatList
      data={vehicles}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => nav.navigate('VehicleDetail', { vehicleId: item.id })}>
          <View style={{ padding: 16, borderBottomWidth: 1 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.brand} {item.model} ({item.year})</Text>
            <Text>{item.type} · {item.value} € · {item.location}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
