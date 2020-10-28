import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./components/Button";
import "./styles.css";
import whatsapp from "./1.png";
import automated from "./2.png";
import serve from "./3.png";
import welcome from "./4.png";

function App() {
  return (
    <>
    <div class = "row1">
    <div className="container-whatsapp">
    <img src={whatsapp} alt="Snow"/>
      <a href="https://www.nectars.co.in">
  
      <Button
        type="Button"
        buttonStyle="btn--danger--solid"
        
      >
        Start  
      </Button>
      </a>
    </div><div className="container-automated" >
    <img src={automated} alt="Snow"/>
      <a href="https://www.nectars.co.in">
      
      <Button
        type="Button"
        buttonStyle="btn--danger--solid"
        buttonSize="btn--large"
      >
        Start  
      </Button>
      </a>
    </div>
    </div>
    <div class = "row2">
    <div className="container-serve">
    <img src={serve} alt="Snow"/>
      <a href="https://www.nectars.co.in">
      <Button
        type="Button"
        buttonStyle="btn--danger--solid"
        buttonSize="btn--large"
      >
        Start  
      </Button>
      </a>
    </div>
    <div className="container-welcome">
    <img src={welcome} alt="Snow"/>
      <a href="https://www.nectars.co.in">
      <Button
        type="Button"
        buttonStyle="btn--danger--solid"
        buttonSize="btn--medium"
      >
        Start  
      </Button>
      </a>
    </div>
    </div>
    </>
  );

}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);