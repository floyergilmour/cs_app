import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App/App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Invoices from "./Pages/Invoices/Invoices";
import Disputes from "./Pages/Disputes/Disputes";
import About from "./Pages/About/About";
import CashFlow from "./Pages/CashFlow/CashFlow";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "integrations/",
        element: <App/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "invoices/",
        element: <Invoices/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "disputes/",
        element: <Disputes/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "about/",
        element: <About/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "cashflow/",
        element: <CashFlow/>,
        errorElement: <ErrorPage/>,
    }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
        <RouterProvider router={router}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
