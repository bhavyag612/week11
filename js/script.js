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
    return Math.PI*radius*radius;
}

let r= prompt("Enter the radius");
let area = areaCalc(r);
alert(`The area is ${Math.trunc(area*100)/100}`);