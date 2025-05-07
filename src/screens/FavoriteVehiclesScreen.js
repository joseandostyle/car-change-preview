import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function FavoriteVehiclesScreen({ favorites }) {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Mis vehículos favoritos</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.brand} {item.model} - {item.value} €</Text>
        )}
      />
    </View>
  );
}
