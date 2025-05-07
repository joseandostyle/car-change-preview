import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NotificationItem({ title, message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  title: {
    fontWeight: 'bold'
  }
});
