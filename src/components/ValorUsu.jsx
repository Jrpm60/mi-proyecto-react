import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import { Button, TextField, Card, CardContent, Snackbar} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function ValorUsu() {

    const [valor, setValor] = useState(''); 
    const [mejorar, setMejorar] = useState('');
    const [gustame, setGustame] = useState('');
    const [open, setOpen] = useState(false);
          
    const handleChangev = (event) => {
        setValor(event.target.value);
      };
    const handleChangem = (event) => {
        setMejorar(event.target.value);
      };
    const handleChangeg = (event) => {
        setGustame(event.target.value);
      };

    const handleClick = () => {
        setOpen(true);
      };

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

      const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );



  return (
    <Box sx={{ '& > legend': { mt: 10 } }}>
      
        <Typography 
            variant="h1"
            component="legend">
                Valora tu experiencia
        </Typography>
        
        <Rating 
            name="size-large"
            value={valor} 
            onChange={handleChangev}
            defaultValue={0} max={5} 
            size="large"         
        />
        <br/><br/>

        <Box sx={{
            width: 500,
            height: 100,
            m:3,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
                bgcolor: 'primary.dark',
            },
            }}>
            <TextField
                fullWidth
                fullHeight
                label="¿Que podemos Mejorar?"
                multiline
                rows={3}
                value={mejorar}
                onChange={handleChangem}
                sx={{ marginBottom: '40px' }}
            />
        </Box>


        
        <Box sx={{
            width: 500,
            height: 100,
            m:3,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
                bgcolor: 'primary.dark',
            },
            }}>  
            <TextField
                fullWidth
                fullHeight
                label="¿Que te ha gustado?"
                multiline
                rows={3}
                value={gustame}
                onChange={handleChangeg}
                sx={{ marginBottom: '40px' }}
            />         
        </Box>

        <br/>

        <Button 

           /*  onClick={() => {
                console.log(`${valor}`)
                console.log(`${mejorar}`)
                console.log(`${gustame}`)
            }} */
            onClick={handleClick}
            variant="contained" 
            sx={{ marginBottom: '20px' }}>
                        
            Enviar comentarios
        </Button>

        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message="Gracias por ayudarnos a mejorar"
            action={action}
        />

    </Box>
  );
}
