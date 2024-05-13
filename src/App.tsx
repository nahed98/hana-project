import * as React from "react";
import "./App.css";
import Product from "./components/product.tsx";
import Typography from "@mui/material/Typography";
import Acoustic from "./assets/Acoustic.png";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: 'unset'
  //  color: theme.palette.text.secondary,
}));
function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
            <Box
              component="img"
              sx={{
                height: 200,
                display: 'block',
                maxWidth: 200,
                overflow: 'hidden',
                width: '100%',
              }}

              src={Acoustic}
              alt='Acoustic'
            /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography variant="h2" gutterBottom>
              <strong>Welcome to our website</strong>
            </Typography>
            <Typography variant="h1" gutterBottom>
              <i>ACOUSTICO</i>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs>
          <Item></Item>
        </Grid>
      </Grid>

      <Product />
    </div>
  );
}

export default App;
