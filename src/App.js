import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from 'axios';
import { NavBar } from './components/NavBar';
import { useEffect } from 'react';
import ListItem from './components/ListItem';

function App(props) {
  useEffect(() => {
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=ab32f046").then(response => {console.log(response)})
  }, []);
  return (
    <div className="App">
      <NavBar />
      <p>Hello {props.firstName} </p>
      <p>Welcome to Collected Compendiums</p>
      {/* <ListItem poster="https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg" 
      title="Black Panther" 
      mediaType="Film"
      releaseYear="2014"/> */}
    </div>
  );
}

export default App;
