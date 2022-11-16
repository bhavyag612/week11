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

// let areaCalc=function (radius){
//     let radiusP= document.querySelector("#radius");
//     // console.log(radiusP);
//     radiusP.textContent=radius;
//     return Math.PI*radius*radius;
// }

// let r= prompt("Enter the radius");

// let area = Math.trunc(areaCalc(r)*100)/100;
// alert(`The area is ${area}`);
// let resultP= document.querySelector("#result");
// // console.log(resultP);
// resultP.textContent= area;
const unorderedList= document.querySelector(".shopping");
console.log(unorderedList);
function populateList(list)
{
    list.forEach(a => {
        let newItem=document.createElement("li");
        unorderedList.appendChild(newItem);
        newItem= newItem.textContent=a;
    });
}

const shoppingList=["cheese","bread","green pepper"];
populateList(shoppingList);

function changeListStyle()
{
    unorderedList.classList.replace("circleList","squareList");
    console.log(unorderedList);
}

changeListStyle();

