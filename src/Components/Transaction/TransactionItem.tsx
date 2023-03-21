import React from 'react';
import {Card} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {TransactionsMock} from "../../MockData/TransationMockData";
import {Status} from "../../Enum/Status";
import {Transaction} from "./Transaction";

const CardStyle: React.CSSProperties = {width: '70%'}
const CardBodyStyle: React.CSSProperties = {height: '7rem'}
const CardFooterStyle: React.CSSProperties = {height: '3rem'}
const CardImageStyle: React.CSSProperties = {height: '200px', width: '100%', objectFit: 'scale-down'}

function renderActionField(transaction: Transaction) {

    const footerContent= () => {
        if (transaction.status === Status.PAID) {
            return <div>{Status.PAID}</div>
        } else if (transaction.status === Status.DISPUTED) {
            return <div>{Status.DISPUTED}</div>
        } else if (transaction.status === Status.PENDING) {
            return <div>{Status.PENDING}</div>
        } else {
           return  <></>
        }
    };

    return <Card.Footer className="text-muted" style={CardFooterStyle}>{footerContent()}</Card.Footer>
}

export function TransactionItem() {
    let transaction = TransactionsMock[0];

    const actionFieldFooter = renderActionField(transaction);
    return (
        <Card style={CardStyle}>
            <Card.Body style={CardBodyStyle}>
                <Card.Title>{transaction.ocr}</Card.Title>
                <Card.Text>{transaction.sellerId}</Card.Text>
            </Card.Body>
            {actionFieldFooter}
        </Card>

    );
}

export default TransactionItem;
