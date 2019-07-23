import React, { Component } from 'react';
import './App.css';
import Header from'./components/Header/Header';
import Topnews from'./components/Header/Topnews';


class App extends Component {

  render()
 {
  return(
 <div className="App">
    <Header/>
  
    <Topnews/>
    <news1/>
    <news2/>
    <news3/>
 </div>
    );
}
}
export default App;
