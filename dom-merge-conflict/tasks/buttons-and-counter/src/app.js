import { Header } from "./header.js";
import { Main } from "./main.js";

//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}
function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
  const body = document.createElement("body");

  const header = Header();
  const main = Main();
  body.appendChild(header);
  body.appendChild(main);

  const buttonIncrement = body.querySelector("#increment");
  const buttonDecrement = body.querySelector("#decrement");
  const counter = body.querySelector("#counter");

  buttonIncrement.addEventListener("click", () => {
    increment(counter);
  });

  buttonDecrement.addEventListener("click", () => {
    decrement(counter);
  });

  return body;
}
