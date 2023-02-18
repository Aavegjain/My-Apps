// const name = "Aaveg" 
// const surname = "Jain" 
// object properties shorthand
// const obj = {
//     "name" : name , 
//     "age" : 27 , 
//     "surname" : "jain"
// }

const obj = {
    name: "Aaveg" ,  
    age : 37 , 
    surname: "jain"
}

// console.log(obj)

// destructuring 
// const {name: alibi = "Arnav",surname, label = "3435453"} = obj 
// console.log(alibi,surname,label)
 
const foo = (dummy, {name : alibi = "arnav", surname, age : myage}) => {
    console.log(alibi, surname, myage)
}

foo(obj, obj)

