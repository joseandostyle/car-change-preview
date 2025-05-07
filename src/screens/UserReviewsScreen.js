import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function UserReviewsScreen({ reviews }) {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Reseñas de este usuario</Text>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 8 }}>
            <Text>⭐ {item.rating}/5</Text>
            <Text>{item.comment}</Text>
          </View>
        )}
      />
    </View>
  );
}
