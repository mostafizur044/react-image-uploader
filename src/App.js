import React, { Component } from 'react';
import Uploader from './components/image-file-uploader/uploader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Uploader multi={true} accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" />
      </div>
    );
  }
}

export default App;

/* 
  image(any) => image/*,
  csv => .csv,
  excel => application/vnd.openxmlformats-officedocument.spreadsheetml.sheet (2007+)
  text => text/plain,
  html => text/html,
  video => video/*,
  audio => audio/*,
  PDF => .pdf,
  excel => .xlsx, .xls, .csv,
  word => application/vnd.openxmlformats-officedocument.wordprocessingml.document
*/