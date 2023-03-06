import React from 'react';
import {Card, Container, Row} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {TopNavigationBar} from '../../Components/TopNavigationBar/TopNavigationBar';
import IntegrationCard from '../../Components/ItemCard/IntegrationCard';
import {Systems} from '../../MockData/IntegrationMockData';


function App() {
    return (
        <div className="App">
            <header className='App-header'>
                <TopNavigationBar></TopNavigationBar>
                <Container fluid>
                    <Row xs={1} sm={1} md={2} lg={4} className="g-4">{IntegrationCard(Systems, 1)}</Row>
                </Container>
            </header>
        </div>
    );
}

export default App;
