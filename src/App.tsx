import * as React from "react";
import "./App.css";
import Product from "./components/product.tsx";
import Typography from "@mui/material/Typography";
import Acoustic from "./../assets/Acoustic.png"
function App() {
  return (
    <div className="App">
      <header>

        <Typography variant="h2" gutterBottom>
          <strong>Welcome to our website</strong>
        </Typography>
        <Typography variant="h1" gutterBottom>
          <i>ACOUSTICO</i>
        </Typography>
      </header>
      <Product />
    </div>
  );
}

export default App;
