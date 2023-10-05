const products = [
  { id: 1, title: "coca", price: 500, cant: 1 },
  { id: 2, title: "leche", price: 500, cant: 1 },
  { id: 3, title: "manteca", price: 500, cant: 1 },
  { id: 4, title: "aceite", price: 500, cant: 1 },
];

export function getProductById(id){
    const find = products.find((a)=>a.id == id)
    return new Promise((resolve, reject)=>{
        resolve(find)
    })
}

export function getProducts(){
    return new Promise((resolve, reject)=>{
        resolve(products)
    })
}