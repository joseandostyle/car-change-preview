import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function SubmitReviewScreen({ route }) {
  const { toUserId } = route.params;
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const submit = () => {
    // Aquí iría submitReview(toUserId, rating, comment)
    alert('Reseña enviada ✅');
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold' }}>Puntuación (1–5):</Text>
      <TextInput keyboardType="numeric" value={rating} onChangeText={setRating} style={{ borderWidth: 1, padding: 8, marginBottom: 8 }} />
      <Text style={{ fontWeight: 'bold' }}>Comentario:</Text>
      <TextInput multiline value={comment} onChangeText={setComment} style={{ borderWidth: 1, padding: 8, height: 100 }} />
      <Button title="Enviar reseña" onPress={submit} />
    </View>
  );
}
