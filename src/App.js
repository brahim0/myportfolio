import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <div className="container main-container">
       <Main />
       </div>
       
      </div>
    );
  }
}

export default App;
