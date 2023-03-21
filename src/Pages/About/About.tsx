import React from 'react';
import {Card, Container, ListGroup, Row} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {TopNavigationBar} from '../../Components/TopNavigationBar/TopNavigationBar';
import FaceCard from "../../Components/Cards/FaceCard";
import {Persons} from "../../MockData/PersonMockData";


function App() {
    return (
        <div className="App test-container">
            <header className='App-header'>
                <TopNavigationBar></TopNavigationBar>
                <Container fluid>
                    <Row xs={1} sm={1} md={2} lg={4} className="g-4">{FaceCard(Persons)}</Row>
                </Container>
            </header>
        </div>
    );
}

export default App;
