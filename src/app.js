import React from "react";
import { scaleOrdinal } from "d3";
import Pie from "./piechart";
import LoansArray from "../data/piedata";

class App extends React.Component {
  componentDidMount() {
    let gdata = {};
    //consol.log(LoansArray.default)
    for (let idata = 0; idata < LoansArray.length; idata++) {
      if (!gdata[LoansArray[idata]]) {
        gdata[LoansArray[idata]] = 0;
      }
      gdata[LoansArray[idata]] = gdata[LoansArray[idata]] + 1;
    }
    this.gdata = gdata;
  }
  render() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let minViewportSize = Math.min(width, height);
    let radius = (minViewportSize * 0.9) / 2;
    let x = width / 2;
    let y = height / 2;
    let gdata = {};
    //consol.log(LoansArray.default)
    for (let idata = 0; idata < LoansArray.length; idata++) {
      if (!gdata[LoansArray[idata]]) {
        gdata[LoansArray[idata]] = 0;
      }
      gdata[LoansArray[idata]] = gdata[LoansArray[idata]] + 1;
    }
    this.gdata = gdata;
    let tdata = [];
    for (let gkey in this.gdata) {
      tdata.push(this.gdata[gkey]);
    }
    return (
      <svg width={width} height={height}>
        <Pie
          x={x}
          y={y}
          innerRadius={radius * 0.005}
          outerRadius={radius}
          cornerRadius={7}
          padAngle={0.02}
          data={tdata}
        />
      </svg>
    );
  }
}
export default App;
