import React, {PureComponent, useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";

import TopNavigationBar from "../../Components/TopNavigationBar/TopNavigationBar";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import StatsService from "../../Clients/StatsService";
import {AxiosResponse} from "axios";
import {ICashFlowResponse} from "./ICashFlowResponse";
import Button from "react-bootstrap/Button";
import {render} from "react-dom";
import {ICashFlow} from "./ICashFlow";
import Form from 'react-bootstrap/Form';

const data = [
    {
        date: '2023-03-12',
        current_cashflow: 4000,

    },
    {
        date: '2023-03-12',
        current_cashflow: 3000,
    },
    {
        date: '2023-03-13',
        current_cashflow: 2000,

    },
    {
        date: '2023-03-14',
        current_cashflow: 2100,
        predicted_cashflow: 2100,
    },
    {
        date: '2023-03-15',
        predicted_cashflow: 1000,

    },
    {
        date: '2023-03-16',
        predicted_cashflow: 10,
    },
    {
        date: '2023-03-17',
        predicted_cashflow: -1000,
    },
];


export function CashFlow() {

    const [graphData, setGraphData] = useState<ICashFlow[]>([]);
    const [merchant, setMerchant] = useState<string>("");
    const [loanAmount, setLoanAmount] = useState<number>(0);

    function mergeCashFlowAndPredictions(balance: ICashFlowResponse[], predictions: ICashFlowResponse[]): ICashFlow[] {
        let new_graph_data: ICashFlow[] = [];

        balance.forEach((e) => {
            new_graph_data.push({date: e.date, previous_cashflow: e.cashflow, merchant: e.merchant});
        })

        predictions.forEach((prediction) => {
            if (new_graph_data.find((e) => {
                return e.date == prediction.date
            })) {
                let index = new_graph_data.findIndex((e) => {
                    return e.date == prediction.date
                });
                new_graph_data[index].predicted_cashflow = prediction.cashflow;
            } else {
                new_graph_data.push({
                    date: prediction.date,
                    predicted_cashflow: prediction.cashflow,
                    merchant: prediction.merchant
                });
            }
        })
        console.log(new_graph_data);
        return new_graph_data;
    }


    useEffect(() => {
        const fetchData = async () => {
            const cashFlowResponse = await StatsService.getBalance(merchant)
                .then((axiosResponse: AxiosResponse<ICashFlowResponse[]>) => {
                    return axiosResponse.data;
                });

            const cashFlowPredictionResponse = await StatsService.getPrediction(merchant)
                .then((axiosResponse: AxiosResponse<ICashFlowResponse[]>) => {
                    return axiosResponse.data;
                });


            setGraphData(mergeCashFlowAndPredictions(cashFlowResponse, cashFlowPredictionResponse));
        };
        fetchData();
    }, []);

    async function onClick(m: string) {
        console.log("merchant in:" + m);

        const cashFlowResponse = await StatsService.getBalance(m)
            .then((axiosResponse: AxiosResponse<ICashFlowResponse[]>) => {
                return axiosResponse.data;
            });

        const cashFlowPredictionResponse = await StatsService.getPrediction(m)
            .then((axiosResponse: AxiosResponse<ICashFlowResponse[]>) => {
                return axiosResponse.data;
            });


        setGraphData(mergeCashFlowAndPredictions(cashFlowResponse, cashFlowPredictionResponse));
    }


    async function giveLoan(merchant:string, amount: number) {
        await StatsService.giveLoan(merchant, amount)
            .then((axiosResponse: AxiosResponse<ICashFlowResponse[]>) => {
                return axiosResponse.data;
            });
        let message = "Congrats you are eligible for a loan. "+ amount + " has been transfered you your account."
        alert(message)
    }

    return (
        <div className="App test-container">
            <header className='App-header'>
                <TopNavigationBar></TopNavigationBar>
                <Container fluid className={"donnys-center-div"}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Serach for merchant</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={e => setMerchant(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                You can only serach for Nike and Adidas for now
                            </Form.Text>
                            <Container fluid className={"donnys-center-div"}>
                            </Container>
                            <Button variant="primary" onClick={() => onClick(merchant)}>Get data</Button>
                        </Form.Group>
                    </Form>
                    <Form className={"left-padding"}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Apply for loan</Form.Label>
                            <Form.Control
                                type="number"
                                onChange={e => setLoanAmount(parseInt(e.target.value))}
                            />
                            <Form.Text className="text-muted">
                                How much money do you want to borrow
                            </Form.Text>
                            <Container fluid className={"donnys-center-div"}>
                            </Container>
                            <Button variant="primary" onClick={() => giveLoan(merchant, loanAmount)}>Give me my money</Button>
                        </Form.Group>
                    </Form>
                </Container>

                <Container fluid className={"donnys-center-div"}>
                    <AreaChart
                        width={1400}
                        height={400}
                        data={graphData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="date"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type="monotone" dataKey="predicted_cashflow" stackId="1" stroke="#8884d8" fill="#8884d8"/>
                        <Area type="monotone" dataKey="previous_cashflow" stackId="2" stroke="#82ca9d" fill="#82ca9d"/>
                    </AreaChart>
                </Container>

            </header>
        </div>
    );
}

export default CashFlow;
