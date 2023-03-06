import React, {useEffect, useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Card, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ErpSystems} from "../../MockData/ErpSystems";
const CardStyle: React.CSSProperties = {width: '20rem'}
const CardBodyStyle: React.CSSProperties = {height: '20rem'}
const CardFooterStyle: React.CSSProperties = {height: '4rem'}
const CardImageStyle: React.CSSProperties = {height: '200px', width: '100%', objectFit: 'scale-down'}

const MAX_POSSIBLE_HEIGHT = 500;

export function IntegrationCard(items: ErpSystems[], maxHeight: number) {
    // const ref:React.MutableRefObject<HTMLParagraphElement> = useRef<HTMLParagraphElement>();
    // const [shouldShowExpand, setShouldShowExpand] = useState(false);
    // const [expanded, setExpanded] = useState(true);
    //
    // useEffect(() => {
    //     if (ref.current.scrollHeight > maxHeight) {
    //         setShouldShowExpand(true);
    //         setExpanded(false);
    //     }
    // }, [maxHeight]);


    return (items.map((items) => (
        <Col>
            <Card style={CardStyle}>
                <Card.Img variant="top" src={items.image_source} style={CardImageStyle}/>
                <Card.Body style={CardBodyStyle}>
                    <Card.Title>{items.name}</Card.Title>
                    <Card.Text>{items.description}</Card.Text>
                </Card.Body>
                {
                    !items.available
                        ? <Card.Footer className="text-muted" style={CardFooterStyle}>Coming soon</Card.Footer>
                        : <Card.Footer className="text-muted" style={CardFooterStyle}>
                            <Button variant="dark">{"Add Integration"}</Button>
                        </Card.Footer>
                }
            </Card>
        </Col>
    )));
}

export default IntegrationCard;
