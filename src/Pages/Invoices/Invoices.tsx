import {Card, Col, Container, Nav, Row} from "react-bootstrap";
import React, {useState} from "react";
import TopNavigationBar from "../../Components/TopNavigationBar/TopNavigationBar";
import Button from "react-bootstrap/Button";
import InvoiceCards from "./InvoiceCards";
import {InvoiceMockData} from "./InvoiceMockData";

function Invoices() {

    const [tab, setTab] = useState("info");

    const handleTab = (selectedTab:string) => {
        setTab(selectedTab);
    };
    let button;
    if (tab==="info") {
        button =
            (<Card.Body>
            <Card.Title>Nike</Card.Title>
            <Card.Text>
                Transaction 0c2368cd-7a3f-4275-8916-bdab256fc5ab has been disputed
            </Card.Text>

            <Button className={"test-padding"} variant="primary">Accept</Button>
            <Button className={"test-padding"} variant="secondary">Reject</Button>
        </Card.Body>)
    } else if(tab=="comments") {
        button = (<Card.Body>
            <Card.Title>Comments</Card.Title>
            <Card.Text>
                Comments functionality coming soon
            </Card.Text>
            <Button variant="primary" disabled>Comment</Button>
        </Card.Body>)
    }


    return (

        <div className="App test-container">
            <header className='App-header'>
                <TopNavigationBar></TopNavigationBar>
                <Container fluid className={"test-container"}>
                    <Row xs={1} sm={1} md={1} lg={1} className="g-4">
                        {InvoiceCards(InvoiceMockData)}
                    </Row>


                </Container>
            </header>
        </div>
    )
}

export default Invoices;
