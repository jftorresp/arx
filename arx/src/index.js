// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);
import React from "react";
import ReactDOM from "react-dom";
import "./Components/Styles/bootstrap.min.css";
import "./Components/Styles/animate.css";
//import "./Components/Styles/linearicons.css";
import "./Components/Styles/magnific-popup.css";
import "./Components/Styles/normalize.css";
//import "./Components/Styles/owl.carousel.min.css";
import "./Components/Styles/responsive.css";
import "./Components/Styles/icon-font.min.css";
import "./Components/Styles/font-awesome.min.css";
import "./Components/Styles/hamburgers.min.css";
import "./Components/Styles/animsition.min.css";
import "./Components/Styles/select2.min.css";
import "./Components/Styles/daterangepicker.css";

import "./style.css";
import "./main.css";
import First from "./pages/First";
import Second from "./pages/Second";
import App from "./Components/App";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
