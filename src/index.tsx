import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App/App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import TransactionItem from "./Components/Transaction/TransactionItem";
import {Transaction} from "./Components/Transaction/Transaction";
import {Status} from "./Enum/Status";
import {TransactionsMock} from "./MockData/TransationMockData";
import Transactions from "./Pages/Transactions/Transactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "transactions/",
    element: <Transactions  />,
    errorElement: <ErrorPage />,
  },
  {
    path: "integrations/",
    element: <App  />,
    errorElement: <ErrorPage />,
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
