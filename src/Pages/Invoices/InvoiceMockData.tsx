import React from 'react';

import {IInvoices} from "./IInvoices";


export const InvoiceMockData: IInvoices[] = [
    {
        buyer: "Adidas",
        payment_reference: "a9ec7532-ebd8-4440-b35b-918dce628bf2",
        amount_booked: 1234,
        due_date: "2023-06-01",
        is_disputed: false,
        item: "Shoes"
    },
    {
        buyer: "Puma",
        payment_reference: "6558c9e3-1157-436f-b80c-c73f74468856",
        amount_booked: 2355,
        due_date: "2023-06-01",
        is_disputed: false,
        item: "Material and goods"
    },
    {
        buyer: "Zalando",
        payment_reference: "03e5fb97-e7c6-4939-9f0a-e6f84737683a",
        amount_booked: 23526,
        due_date: "2023-06-03",
        is_disputed: true,
        item: "Stuff"
    },
    {
        buyer: "Kicks",
        payment_reference: "cc6a5c2c-9ae2-4ab7-ac0c-a31669130cbe",
        amount_booked: 4568,
        due_date: "2023-05-01",
        is_disputed: false,
        item: "More stuff"
    },
    {
        buyer: "H&M",
        payment_reference: "0b77daf0-5851-4678-85ec-0e1a0cec9dac",
        amount_booked: 7524,
        due_date: "2023-08-01",
        is_disputed: true,
        item: "Hats"
    },
];
