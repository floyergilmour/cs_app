
// @ts-ignore
import http from "./http-common";
import {ICashFlowResponse} from "../Pages/CashFlow/ICashFlowResponse";

const getCashflowBalance = (merchant:string) => {
    return http.get<ICashFlowResponse[]>(`/cashflowbalance/${merchant}`);
};

const getCashflowPrediction = (merchant:string) => {
    return http.get<ICashFlowResponse[]>(`/cashflowprediction/${merchant}`);
};

const giveLoan = (merchant:string, amount:number) => {
    const data = {"merchant": merchant, "amount":amount}
    return http.post('/getLoan/',data );
};
const StatsService = {
    getBalance: getCashflowBalance,
    getPrediction: getCashflowPrediction,
    giveLoan: giveLoan,
};

export default StatsService;
