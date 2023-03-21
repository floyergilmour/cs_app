import React, {useEffect, useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Card, Col, Modal} from 'react-bootstrap';
import {IErpSystems} from "../../MockData/IErpSystems";
const CardStyle: React.CSSProperties = {width: '20rem'}
const CardBodyStyle: React.CSSProperties = {height: '15rem'}
const CardFooterStyle: React.CSSProperties = {height: '4rem'}
const CardImageStyle: React.CSSProperties = {height: '200px', width: '100%', objectFit: 'scale-down'}


export function IntegrationCard(items: IErpSystems[], maxHeight: number) {

    return (items.map((item) => (
        <Col>
            <Card style={CardStyle}>
                <Card.Img variant="top" src={item.image_source} style={CardImageStyle}/>
                <Card.Body style={CardBodyStyle}>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                {
                    !item.available
                        ? <Card.Footer className="text-muted" style={CardFooterStyle}>Coming soon</Card.Footer>
                        : <Card.Footer className="text-muted" style={CardFooterStyle}>
                            <Button variant="dark" onClick={()=> {
                                let message = "You are now intergrated with: " + item.name;
                                alert(message)
                            }
                            }>{"Add Integration"}</Button>
                        </Card.Footer>
                }
            </Card>
        </Col>
    )));
}

export default IntegrationCard;
