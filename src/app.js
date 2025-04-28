import "bootstrap";
import "./style.css";


window.onload = function() {
  //write your code here
  let symbol = ["♦", "♥", "♠", "♣"];
  let symbolSelect = symbol[Math.floor(Math.random()*symbol.length)];
  let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let valueRandom = value[Math.floor(Math.random()*value.length)];
  
  document.querySelector("#symbol-top").innerHTML = symbolSelect
  document.querySelector("#value").innerHTML = valueRandom
  document.querySelector("#symbol-bottom").innerHTML = symbolSelect
  console.log(symbol);
};
