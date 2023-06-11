//classes
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // private amount: number;
    function Invoice(client, //only works with access modifiers
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes ").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
;
var invoices = [];
var inv = new Invoice('mario', 'work on the mario website', 250);
var in2 = new Invoice('luigi', 'work on the luigi website', 300);
invoices.push(inv);
invoices.push(in2);
//access modifiers
console.log(inv.format());
console.log(inv);
console.log(invoices);
console.log(inv, in2);
//const form = document.querySelector('form')!; knows HTML element type but if we pass a class , it doensn't
//so we use method AS 
var form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
