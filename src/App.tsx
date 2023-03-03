import React from 'react';
//import './App.css';
import Button from 'react-bootstrap/Button';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Pizzas, Pizza } from './PizzaData';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TopNavigationBar} from './Components/TopNavigationBar/TopNavigationBar';
import ItemCard from './Components/ItemCard/ItemCard';



function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <TopNavigationBar></TopNavigationBar>
        <Container fluid>
          <Row>{ItemCard(Pizzas.concat(Pizzas))}</Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
