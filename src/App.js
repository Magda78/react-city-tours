import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from './coponents/Navbar/navbar';
import TourList from './coponents/TourList/TourList';
import './App.scss';

class App extends Component{
  render() {
  return (
    <div>
    <NavBar />
    <TourList />
    </div>
  );
}
}
export default App;
