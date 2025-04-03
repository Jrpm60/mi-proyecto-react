import React, { useState } from 'react';
import { Button, TextField, Box, Card, CardContent, Typography, Slider  } from '@mui/material';
import { Filter9Plus } from '@mui/icons-material';




 const items = [
  { "id": 1, "name": "TOYOTA RAV-4", "description": "SUV 4X4", "combustible": "HIBRIDO GASOLINA", "price": 50000 },
  { "id": 2, "name": "FORD FOCUS", "description": "Compacto", "combustible": "GASOLINA", "price": 25000 },
  { "id": 3, "name": "TESLA MODEL S", "description": "Sedán eléctrico", "combustible": "ELECTRICO", "price": 85000 },
  { "id": 4, "name": "AUDI Q5", "description": "SUV Premium", "combustible": "DIESEL", "price": 60000 },
  { "id": 5, "name": "BMW X3", "description": "SUV", "combustible": "HIBRIDO DIESEL", "price": "65000€" },
  { "id": 6, "name": "MERCEDES-BENZ C 200", "description": "Sedán", "combustible": "GASOLINA", "price": 55000 },
  { "id": 7, "name": "HONDA CIVIC", "description": "Compacto Deportivo", "combustible": "GASOLINA", "price": 28000 },
  { "id": 8, "name": "VOLKSWAGEN GOLF", "description": "Hatchback", "combustible": "HIBRIDO GASOLINA", "price": 32000 },
  { "id": 9, "name": "PEUGEOT 3008", "description": "SUV", "combustible": "HIBRIDO DIESEL", "price": 40000 },
  { "id": 10, "name": "RENAULT ZOE", "description": "Compacto eléctrico", "combustible": "ELECTRICO", "price": 32000 },
  { "id": 11, "name": "SEAT LEON", "description": "Compacto", "combustible": "GASOLINA", "price": 27000 },
  { "id": 12, "name": "HYUNDAI IONIQ 5", "description": "SUV eléctrico", "combustible": "ELECTRICO", "price": 55000 },
  { "id": 13, "name": "KIA SPORTAGE", "description": "SUV", "combustible": "HIBRIDO GASOLINA", "price": 42000 },
  { "id": 14, "name": "JEEP WRANGLER", "description": "Todo terreno", "combustible": "GASOLINA", "price": 60000 },
  { "id": 15, "name": "MAZDA CX-5", "description": "SUV", "combustible": "DIESEL", "price": 43000 },
  { "id": 16, "name": "SKODA OCTAVIA", "description": "Sedán", "combustible": "HIBRIDO GASOLINA", "price": 35000 },
  { "id": 17, "name": "FIAT 500", "description": "Compacto urbano", "combustible": "ELECTRICO", "price": 28000},
  { "id": 18, "name": "OPEL GRANDLAND", "description": "SUV", "combustible": "HIBRIDO DIESEL", "price": 38000 },
  { "id": 19, "name": "CITROEN C4", "description": "Crossover compacto", "combustible": "DIESEL", "price": 33000 },
  { "id": 20, "name": "LEXUS RX", "description": "SUV Premium", "combustible": "HIBRIDO GASOLINA", "price": 70000 }
]
; 


function valuetext(value) {
  return `${value}€`;
}

const FiltrosMui2 = () => {
  const [filter, setFilter] = useState(''); 
  const [filterc, setFilterc] = useState('');
  const [filterp, setFilterp] = useState([15000, 95000]);
  const [filteredItems, setFilteredItems] = useState(items);

  
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilterChangec = (event) => {
    setFilterc(event.target.value);
  };

  const handleFilterChangep = (event) => {
    setFilterp(event.target.value);
  };


  const handleFilter = () => {

    const pmin = filterp[0]
    const pmax = filterp[1]


    setFilteredItems(
      items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase()) 
      && 
      item.combustible.toLowerCase().includes(filterc.toLowerCase())
      &&
      item.price>=pmin
      &&
      item.price<=pmax
      )
      
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
        value={filterc}
        onChange={handleFilterChangec}
        sx={{ marginBottom: '20px' }}
      />

      <Slider
        getAriaLabel={() => 'Rango de Precio'}
        value={filterp}
        onChange={handleFilterChangep}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={15000}
        max={95000}
        step={10000}
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

export default FiltrosMui2;