let random = Math.random()
let a = prompt("enter the first number")
let b = prompt("enter the operation")
let c = prompt("enter the third number")

let obj ={
    "+":"-",
    "*":"+",
    "-": "/",
    "/":"*",
}

if (random>0.1){
    console.log(`the result is ${a} ${b} ${c}`)
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    b= obj [b]
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}