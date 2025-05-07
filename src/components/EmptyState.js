import React from 'react';
import { View, Text } from 'react-native';

export default function EmptyState({ message }) {
  return (
    <View style={{ padding: 24, alignItems: 'center' }}>
      <Text style={{ fontSize: 16, color: '#888' }}>{message}</Text>
    </View>
  );
}
