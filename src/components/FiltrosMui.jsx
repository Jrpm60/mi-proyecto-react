import React, { useState } from 'react';
import { Button, TextField, Box, Card, CardContent, Typography } from '@mui/material';

 const items = [
  { id: 1, name: 'TOYOTA RAV-4', description: 'SUV 4X4', combustible:'HIBRIDO GASOLINA', price: '50000€' },
  { id: 2, name: 'RENAULT FLUENCE', description: 'BERLINA', combustible:'HIBRIDO GASOLINA', price: '45000€' },
  { id: 3, name: 'RENAULT KANGOO', description: 'COMERCIAL', combustible:'GASOLEO', price: '30000€' },
  { id: 4, name: 'CITROEN C-4', description: 'COMPACTO ', combustible:'GASOLINA', price: '42000€' },
  { id: 5, name: 'FORD MUSTANG', description: 'DEPORTIVO ', combustible:'ELECTRICO', price: '62000€' },
  ]; 

const FiltrosMui = () => {
  const [filter, setFilter] = useState('');  

  const [filterc, setFilterc] = useState('');

  const [filteredItems, setFilteredItems] = useState(items);


  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilterChangec = (event) => {
    setFilterc(event.target.value);
  };

  const handleFilter = () => {
    setFilteredItems(
      items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase()) 
      && 
      item.combustible.toLowerCase().includes(filterc.toLowerCase()))
    );
  };



  return (
    <Box sx={{ padding: '20px' }}>
      <TextField
        label="Introduce Modelo"
        value={filter}
        onChange={handleFilterChange}
        sx={{ marginBottom: '20px' }}
      />

      <TextField
        label="Introduce Combustible"
        valuec={filterc}
        onChange={handleFilterChangec}
        sx={{ marginBottom: '20px' }}
      />



      
      <Button onClick={handleFilter} variant="contained" sx={{ marginBottom: '20px' }}>
        Ver Coincidencias
      </Button>


      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {filteredItems.map(item => (
          <Card key={item.id} sx={{ width: 250 }}>
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {item.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.combustible}
              </Typography>
              <Typography variant="h6" color="primary">
                {item.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default FiltrosMui;