import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import LineChart from './components/LineChart';

class App extends Component {
  render() {
    let data = {
      points: [
        [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 },
          { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ]
        ,
        [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 },
          { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]
        ,
        [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 },
          { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
        ],
      xValues: [0,1,2,3,4,5,6],
      yMin: 0,
      yMax: 30
    };
    return (
      <LineChart
        data={data}
        width={600}
        height={300}
      />
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
