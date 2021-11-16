import React from 'react';
//styles
import {GlobalStyle} from './GlobalStyle';
//import Header Component
import Header from "./components/Header";
import Home from "./components/Home"


console.log(process.env.REACT_APP_API_KEY)

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
