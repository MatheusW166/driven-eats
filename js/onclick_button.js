import { numberToMoney } from "./utils.js";
import { getOrder, getTotalPrice } from "./order.js";

const finishBtn = document.getElementById("finish-order");
const alertContainer = document.getElementsByClassName("container-alert")[0];
const table = alertContainer.getElementsByTagName("table")[0];

finishBtn.onclick = () => {
  const { MAIN, DRINK, DESSERT } = getOrder();
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
      <td>${numberToMoney(getTotalPrice())}</td>
    </tr>
  `;
  alertContainer.style.display = "grid";
}

const cancelOrder = document.getElementById("cancel-order");
cancelOrder.onclick = () => {
  alertContainer.style.display = "none";
}

const closeOrder = document.getElementById("confirm-order");
closeOrder.onclick = () => {
  const name = prompt("Qual é o seu nome?");
  const address = prompt("Qual é o seu endereço?");

  const { MAIN, DRINK, DESSERT } = getOrder();
  const message = `
  Olá, gostaria de fazer o pedido:
  - Prato: ${MAIN.name}
  - Bebida: ${DRINK.name}
  - Sobremesa: ${DESSERT.name}
  Total: ${numberToMoney(getTotalPrice())}
  `;
  const url = new URL(`https://wa.me/5564992262101?text=${message}`);
  window.open(url, "_blank");
  alertContainer.style.display = "none";
};

export { };