// function greet(user){
//     console.log(`Hello ${user}!`);
// }

// greet("Bhavya");


// let greet= function(user){
//     console.log(`Hello ${user}!`);
// }

// const greet=(user,time="day")=>
// {
//     console.log(`Good ${time} ${user}`);
// }
// greet("Neda","night","morning");
// greet("Neda");

let areaCalc=function (radius){
    let radiusP= document.querySelector("#radius");
    // console.log(radiusP);
    radiusP.textContent=radius;
    return Math.PI*radius*radius;
}

let r= prompt("Enter the radius");

let area = Math.trunc(areaCalc(r)*100)/100;
alert(`The area is ${area}`);
let resultP= document.querySelector("#result");
// console.log(resultP);
resultP.textContent= area;