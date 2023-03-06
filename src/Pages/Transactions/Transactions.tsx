import React from 'react';
import {Card, Container} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {TopNavigationBar} from '../../Components/TopNavigationBar/TopNavigationBar';
import TransactionItem from "../../Components/Transaction/TransactionItem";


function Transactions() {
    return (
        <div className="App">
            <header className='App-header'>
                <TopNavigationBar></TopNavigationBar>
                <Container fluid={'sm'}>
                    {TransactionItem()}
                </Container>
            </header>
        </div>
    );
}

export default Transactions;
