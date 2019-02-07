import React, { Component } from 'react';
import Uploader from './components/image-file-uploader/uploader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Uploader multi={true}  />
      </div>
    );
  }
}

export default App;
