import React from 'react';
//styles
import {GlobalStyle} from './GlobalStyle';
//Routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//import Header Component
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound"


console.log(process.env.REACT_APP_API_KEY)

const App = () =>(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />}/>
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
