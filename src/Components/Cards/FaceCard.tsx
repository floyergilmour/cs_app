import React, {useEffect, useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Badge, Card, Col, ListGroup} from 'react-bootstrap';
import {IPerson} from "../../MockData/IPerson";
import Container from "react-bootstrap/Container";

export function FaceCard(persons: IPerson[]) {


    return (persons.map((item:IPerson) => (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Container>
                <Card.Img variant="top" src={item.image_source} />
                <Card.Body>
                    <Card.Title>{item.name + " - " + item.title}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                </Card.Body>
                </Container>
                <Card.Body>
                    <Container><Card.Link href={item.linked_in}>LinkedIn</Card.Link>
                    </Container>
                    <Container>
                        {item.skills.map(skill => {

                    return (<Badge pill bg="dark">
                        {skill}
                    </Badge>)
                        })}

                    </Container>
                </Card.Body>
            </Card>
        </Col>
    )));
}

export default FaceCard;
