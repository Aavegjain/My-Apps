// print = () => {console.log("fu")} 
// print = () => console.log("fu")  


const obj1 = {
    name:"Aaveg" ,
    actresses: ["Scarlett Johansson", "Emilia Clarke","Nora Fatehi"],
    method1: function() {
        console.log(this.name)
    } ,
    method2: ()=>{
        console.log(this.name) // prints undefined
    },
    method3() { // ES6 method defintion syntax 
        console.log("Valar Morghulis " + this.name) 
    },
    method4(){
        const that = this 
        this.actresses.forEach(function(actress) {console.log(actress + " loves to come a lot with " + that.name)})
    },
    method5() { 
        this.actresses.forEach((actress) => console.log(actress + " made out with " + this.name))
    }
    
}
// print() ; 
obj1.method4()  ; 
obj1.method5() ; 
