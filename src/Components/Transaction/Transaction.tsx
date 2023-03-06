import {Status} from "../../Enum/Status";

export class Transaction {
    readonly sellerId: string;
    readonly buyerId: string;
    readonly accountPayableAmount: number;
    readonly accountReceivableAmount: number;
    readonly transactionDateTime: Date;
    readonly ocr: string;
    readonly status: Status;

    constructor(sellerId: string, buyerId: string, accountPayableAmount: number, accountReceivableAmount: number, transactionDateTime: Date, ocr: string, status: Status) {
        this.sellerId = sellerId;
        this.buyerId = buyerId;
        this.accountPayableAmount = accountPayableAmount;
        this.accountReceivableAmount = accountReceivableAmount;
        this.transactionDateTime = transactionDateTime;
        this.ocr = ocr;
        this.status = status;
    }

    payableDiff(): number {
        return this.accountReceivableAmount - this.accountPayableAmount;
    }
}
