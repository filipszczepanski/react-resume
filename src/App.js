import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Sections from './components/Sections';
import AddNewItem from './components/AddNewItem'
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App container mt-3">
        <Nav />
        <Header />
        <main>
          <Sections />
          <AddNewItem />
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
