import React, { useState } from 'react';
import { DataTable } from 'react-native-paper';


export default function Table() {
  const [listExercicies, setlistExercicies] = useState([
    {name: 'Zumba', key: 1, category: 'Ritimos', hour: '18h'},
    {name: 'Abodminal', key: 2, category: 'Exercícios', hour: '18:30h'},
    {name: 'B. Combat', key: 3, category: 'Luta', hour: '19h'},
    {name: 'Alogamento', key: 4, category: 'Exercícios', hour: '19:30h'},
  ]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Ordem</DataTable.Title>
        <DataTable.Title>Aulas</DataTable.Title>
        <DataTable.Title>Categoria</DataTable.Title>
        <DataTable.Title>Horário</DataTable.Title>
      </DataTable.Header>

      {listExercicies.map(item => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.key}</DataTable.Cell>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.category}</DataTable.Cell>
          <DataTable.Cell>{item.hour}</DataTable.Cell>
        </DataTable.Row>
      ))}  
    </DataTable>
  )
}