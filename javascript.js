var kiosk={
    set getFruits(fruit){
     this.fruit=this.fruit+fruit;   
    },
   fruit:["banana","mango, "] 
}
kiosk.getFruits="apple";
console.log(kiosk.fruit)
