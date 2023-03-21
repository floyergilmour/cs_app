import React, { useState } from 'react';
import { Card, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardList = () => {
    const [activeKey, setActiveKey] = useState('card1');

    const handleSelect = (key:string) => {
        setActiveKey(key);
    };

    return (
        <>
            <Nav
                variant="tabs"
                activeKey={activeKey}
                onSelect={(k) => handleSelect(k==null?"info":k)}
            >
                <Nav.Item>
                    <Nav.Link eventKey="info">Card 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="discuss">Card 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="card3">Card 3</Nav.Link>
                </Nav.Item>
            </Nav>
            <Card>
                <Card.Body>
                    {activeKey === 'card1' && (
                        <div>
                            <h2>Card 1 Content</h2>
                            <p>This is the content for Card 1</p>
                        </div>
                    )}
                    {activeKey === 'card2' && (
                        <div>
                            <h2>Card 2 Content</h2>
                            <p>This is the content for Card 2</p>
                        </div>
                    )}
                    {activeKey === 'card3' && (
                        <div>
                            <h2>Card 3 Content</h2>
                            <p>This is the content for Card 3</p>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </>
    );
};

export default CardList;
