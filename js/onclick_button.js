import { getOrder } from "./order.js";

const finishBtn = document.getElementById("finish-order");
const closeOrder = document.getElementById("confirm-order");
const cancelOrder = document.getElementById("cancel-order");
const alertContainer = document.getElementsByClassName("container-alert")[0];

function moneyToNumber(numberText) {
  const text = numberText.split(" ")[1].replace(",", ".");
  return parseFloat(text);
}

function numberToMoney(number) {
  const formated = number.toFixed(2);
  const formatedText = formated.replace(".", ",");
  return `R$ ${formatedText}`;
}

finishBtn.onclick = () => {
  const table = alertContainer.getElementsByTagName("table")[0];
  const { MAIN, DRINK, DESSERT } = getOrder();
  const total = moneyToNumber(MAIN.price) + moneyToNumber(DRINK.price) + moneyToNumber(DESSERT.price);
  table.innerHTML = `
    <tr>
      <td>${MAIN.name}</td>
      <td>${MAIN.price}</td>
    </tr>
    <tr>
      <td>${DRINK.name}</td>
      <td>${DRINK.price}</td>
    </tr>
    <tr>
      <td>${DESSERT.name}</td>
      <td>${DESSERT.price}</td>
    </tr>
    <tr>
      <td>TOTAL</td>
      <td>${numberToMoney(total)}</td>
    </tr>
  `;

  alertContainer.style.display = "grid";
}

cancelOrder.onclick = () => {
  alertContainer.style.display = "none";
}

export { };