import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import ListItem from './components/ListItem';

function App(props) {
  useEffect(() => {
    
  }, []);
  return (
    <div className="App">
      <p>Hello {props.firstName} </p>
      <p>Welcome to Collected Compendiums</p>
      <ListItem poster="https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg" 
      title="Black Panther" 
      mediaType="Film"
      releaseYear="2014"/>
    </div>
  );
}

export default App;
