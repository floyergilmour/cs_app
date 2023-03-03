import React from 'react';
//import './App.css';
import Button from 'react-bootstrap/Button';
import { Card, Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Pizza } from '../../PizzaData';
//import {TopNavigationBar} from './Components/Navbar/Navbar';



export function ItemCard(items: Pizza[]) {
    return (items.map((pizza) => (
        <Col xs="3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pizza.image_source} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Text>
                {pizza.description}
              </Card.Text>
              <Button variant="primary">{pizza.price.toFixed(2)}</Button>
            </Card.Body>
          </Card>
        </Col>
      )));
}

export default ItemCard;