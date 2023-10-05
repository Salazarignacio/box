


const array = [
    { id: 1, title: "coca", price: 500, cant: 1 },
    { id: 2, title: "leche", price: 500, cant: 1 },
    { id: 7, title: "manteca", price: 500, cant: 1 },
    { id: 4, title: "aceite", price: 500, cant: 1 },
];

const map = array.map((a)=>{return a})
const find = array.find((a)=>{return a.id==4})

console.log(map)
console.log(find)
console.log(array.indexOf(find))
console.log(array.lastIndexOf(find))
