// function myConsole(masheu) {
//     console.log(masheu);
// }

const myConsole = masheu => console.log(masheu);

const multi = (num1, num2, fn) => {
    fn(num1 * num2);
    fn(num1 + num2);
    fn(num1 - num2);
}

multi(9, 9, myConsole);
multi(10, 9, res => console.log(`אופציה נוספת ${res * 200}`));

myConsole("שלום");