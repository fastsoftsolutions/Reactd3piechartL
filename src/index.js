import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import App from "./app";

ReactDOM.render(<App data={[1, 2, 3]} />, document.getElementById("piechart"));
