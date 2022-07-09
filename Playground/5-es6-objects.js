//-------------Object Useage
const name='HAri'
const age=22

const user={
    name,
    age
}
console.log(user)

// Object Destructing

const product={
    label:'Black note',
    price:2000,
    author:'Hari',
    rating:4.5
}

console.log(product.label)
console.log(product.price)

const{label:cover, price, author,rating=5}=product
// console.log(label)
console.log(cover)
console.log(rating)

const transcation=(type,{label,price})=>{
    console.log(type,label,price)

}
transcation('Attitude is every thing',product)
