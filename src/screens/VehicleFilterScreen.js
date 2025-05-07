import React, { useState } from 'react';
import { View, Text, Button, Picker } from 'react-native';

export default function VehicleFilterScreen({ onApply }) {
  const [type, setType] = useState('');

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold' }}>Filtrar por tipo de vehículo</Text>
      <Picker selectedValue={type} onValueChange={(itemValue) => setType(itemValue)}>
        <Picker.Item label="Todos" value="" />
        <Picker.Item label="Turismo" value="turismo" />
        <Picker.Item label="SUV/4x4" value="suv" />
        <Picker.Item label="Furgoneta/Comercial" value="furgoneta" />
        <Picker.Item label="Deportivo" value="deportivo" />
        <Picker.Item label="Monovolumen" value="monovolumen" />
      </Picker>
      <Button title="Aplicar Filtro" onPress={() => onApply(type)} />
    </View>
  );
}
