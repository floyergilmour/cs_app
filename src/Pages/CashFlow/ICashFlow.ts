export interface ICashFlow {

    date: string;
    merchant: string;
    previous_cashflow?:number;
    predicted_cashflow?: number;
}
