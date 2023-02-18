const foo = (arg) => {
    let data = 23 ; 
    setTimeout((arg) => {
        data = arg 
        console.log("settimeout running and passed argument is ", arg) 
        return arg 
    },2000) 
    console.log("new value of data is ", data )
    console.log("exiting foo")
}

// console.log(foo("aaveg")) 

const add = (a,b,callback) => {
    setTimeout(() => {
        callback(a + b)    
    },2000) 
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
