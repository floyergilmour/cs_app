export interface IInvoices {
    buyer:string,
    payment_reference:string,
    amount_booked: number,
    due_date: string,
    is_disputed: boolean,
    item: string
}
