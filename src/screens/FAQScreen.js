import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function FAQScreen() {
  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Preguntas Frecuentes</Text>
      <Text style={{ marginVertical: 8, fontWeight: 'bold' }}>¿Cómo funciona CarChange?</Text>
      <Text>CarChange te permite intercambiar tu coche temporalmente con otro usuario mediante un sistema seguro, legal y gratuito.</Text>

      <Text style={{ marginVertical: 8, fontWeight: 'bold' }}>¿Es legal?</Text>
      <Text>Sí. El intercambio se formaliza con un contrato legal digital firmado por ambas partes.</Text>

      <Text style={{ marginVertical: 8, fontWeight: 'bold' }}>¿Qué pasa si alguien tiene un accidente?</Text>
      <Text>Ambos usuarios deben contar con seguro activo. Además, la Garantía Recíproca CarChange™ protege a ambas partes como respaldo mutuo.</Text>

      <Text style={{ marginVertical: 8, fontWeight: 'bold' }}>¿Cómo se garantiza la confianza?</Text>
      <Text>Con documentos verificados, puntuación media, reseñas públicas y sistema de insignias de reputación.</Text>
    </ScrollView>
  );
}
