
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

console.log("Hey look in your browser console. It works!");

document.querySelector("#blue").addEventListener("click", () => {
  document.querySelector(".changeMe").style.backgroundColor = "blue";
})

document.querySelector("#red").addEventListener("click", () => {
  document.querySelector(".changeMe").style.backgroundColor = "red";
})

document.querySelector("#green").addEventListener("click", () => {
  document.querySelector(".changeMe").style.backgroundColor = "green"; 
})
