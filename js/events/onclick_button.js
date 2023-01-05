import { numberToMoney } from "../utils/utils.js";
import { getOrder, getTotalPrice } from "../db/order.js";

function createTableRows(order) {
  const { MAIN, DRINK, DESSERT } = order;
  return `
    <tr>
      <td>${MAIN.name}</td>
      <td>${MAIN.price.split(" ")[1]}</td>
    </tr>
    <tr>
      <td>${DRINK.name}</td>
      <td>${DRINK.price.split(" ")[1]}</td>
    </tr>
    <tr>
      <td>${DESSERT.name}</td>
      <td>${DESSERT.price.split(" ")[1]}</td>
    </tr>
    <tr>
      <td>TOTAL</td>
      <td>${numberToMoney(getTotalPrice())}</td>
    </tr>
  `;
}

const finishBtn = document.getElementById("finish-order");
const alertContainer = document.getElementsByClassName("container-alert")[0];
const table = alertContainer.getElementsByTagName("table")[0];
finishBtn.onclick = () => {
  table.innerHTML = createTableRows(getOrder());
  alertContainer.classList.remove("hidden");
}

const cancelOrder = document.getElementById("cancel-order");
cancelOrder.onclick = () => {
  alertContainer.classList.add("hidden");
}

function inputText(title, reinforceTitle) {
  let text = "";
  let times = 0;
  let titleCopy = title;
  while (!text.trim()) {
    if (times > 0) titleCopy = reinforceTitle ?? title;
    text = prompt(titleCopy);
    if (text === null) return text; // User canceled
    times++;
  }
  return text;
}

const closeOrder = document.getElementById("confirm-order");
closeOrder.onclick = () => {
  const name = inputText("Qual é o seu nome?", "Por favor, informe seu nome.");
  if (name === null) return;
  const address = inputText("Qual é o seu endereço?", "Endereço obrigatório, quer receber o pedido como doidão?");
  if (address === null) return;

  const { MAIN, DRINK, DESSERT } = getOrder();
  const message = `Olá, gostaria de fazer o pedido:\n- Prato: ${MAIN.name}\n- Bebida: ${DRINK.name}\n- Sobremesa: ${DESSERT.name}\nTotal: ${numberToMoney(getTotalPrice(), false)}\n\nNome: ${name}\nEndereço: ${address}`;
  const url = new URL(`https://wa.me/5564992262101?text=${encodeURIComponent(message)}`);

  location.href = url;
  alertContainer.style.display = "none";
};

export { };