import React, {useEffect, useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Badge, Card, Col, ListGroup, Nav} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {IPerson} from "../../MockData/IPerson";
import Container from "react-bootstrap/Container";
import {IInvoices} from "./IInvoices";

const CardStyle: React.CSSProperties = {width: '20rem'}
const CardBodyStyle: React.CSSProperties = {height: '15rem'}
const CardFooterStyle: React.CSSProperties = {height: '4rem'}
const CardImageStyle: React.CSSProperties = {height: '200px', width: '100%', objectFit: 'scale-down'}

const MAX_POSSIBLE_HEIGHT = 500;

export function InvoiceCards(invoices: IInvoices[]) {
    const [tab, setTab] = useState("info");

    const handleTab = (selectedTab: string) => {
        setTab(selectedTab);
    };
    let button;


    function getCardContent(invoice: IInvoices) {
        if (tab === "info") {
            return (<Card.Body>
                <Card.Title>{invoice.buyer + " - " +invoice.item + " ("+invoice.amount_booked+"€)"}</Card.Title>
                <Card.Text>
                    {"Transaction " + invoice.payment_reference + " is due: " + invoice.due_date}
                </Card.Text>

                <Button className={"test-padding"} variant="primary">Pay Now</Button>
                <Button className={"test-padding"} variant="secondary">Dispute</Button>
            </Card.Body>)
        } else if (tab == "comments") {
            return (<Card.Body>
                <Card.Title>Comments</Card.Title>
                <Card.Text>
                    Comments functionality coming soon
                </Card.Text>
                <Button variant="primary" disabled>Comment</Button>
            </Card.Body>)
        }
    }


    return (invoices.map((item: IInvoices) => (
        invoices.map((i:IInvoices) => (
        <Col>
            <Card className={"test-padding"}>

                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#info">
                            <Nav.Item>
                                <Nav.Link href="" onClick={(x) => {
                                    handleTab("info")
                                }}>Info</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={(x) => {
                                    handleTab("comments")
                                }}>Comments</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#disabled" disabled>
                                    Auto Resolve (Coming soon)
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    {
                        getCardContent(i)
                    }

            </Card>
        </Col>
        )))));
}

export default InvoiceCards;
