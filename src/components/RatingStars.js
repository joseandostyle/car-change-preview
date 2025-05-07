import React from 'react';
import { View, Text } from 'react-native';

export default function RatingStars({ score }) {
  const stars = '⭐'.repeat(Math.round(score || 0));
  return (
    <View style={{ flexDirection: 'row', marginVertical: 4 }}>
      <Text>{stars}</Text>
      <Text style={{ marginLeft: 4 }}>({score?.toFixed(1) || '0.0'})</Text>
    </View>
  );
}
