export interface IProduct{
    productName:string;
    unitPrice:number;
    
}

export class Product implements IProduct{
    productName: string;
    unitPrice: number;


constructor(productName: string, unitPrice: number) {
    this.productName = productName;
    this.unitPrice = unitPrice;
}
}