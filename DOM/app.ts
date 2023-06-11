//classes

class Invoice {
    // readonly client: string;
    // private details: string;
    // private amount: number;

    constructor(
        readonly client : string, //only works with access modifiers
        private details : string,
        public amount: number,
    ){}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
};

let invoices: Invoice[] = [];


const inv = new Invoice('mario','work on the mario website',250);
const in2 = new Invoice('luigi','work on the luigi website',300);
invoices.push(inv);
invoices.push(in2);


//access modifiers


console.log(inv.format());
console.log(inv);
console.log(invoices);
console.log(
    inv,
    in2
)

//const form = document.querySelector('form')!; knows HTML element type but if we pass a class , it doensn't
//so we use method AS 
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

//inputs

const type = document.querySelector('#type')! as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom')! as HTMLInputElement;
const details = document.querySelector('#details')! as HTMLInputElement;
const amount = document.querySelector('#amount')! as HTMLInputElement;

form.addEventListener('submit',(e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})

