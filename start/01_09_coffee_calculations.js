// Write your code here
const orders = [2, 5, 7, 1, 4];
const sumOrders =  orders.reduce((accumulator, currentValue) => 
accumulator + (currentValue*1.25), 0);

console.log(`The total bill is ${sumOrders}`);