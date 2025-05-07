import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TrustBadge({ level }) {
  let label = 'Nuevo';
  if (level >= 1 && level < 3) label = 'Conductor Confiable';
  else if (level >= 3 && level < 5) label = 'Conductor Experto';
  else if (level >= 5) label = 'Conductor Maestro';

  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#eee',
    padding: 6,
    borderRadius: 8,
    marginTop: 4
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12
  }
});
