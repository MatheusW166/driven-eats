import { searchByFoodId } from "./database.js";
import { getLastFood, updateOrder, remainingNumber } from "./order.js";

function getTagFromFood(food) {
  return document.getElementById(`${food.category}-${food.foodId}`);
}

function updateButton(remains) {
  const finishBtn = document.getElementById("finish-order");
  if (remains === 0) {
    finishBtn.removeAttribute("disabled");
    finishBtn.innerHTML = "Finalizar pedido";
    return;
  }
  if (remains > 1) {
    finishBtn.innerHTML = `Selecione mais ${remains} itens<br>para fechar o pedido`;
    return;
  }
  finishBtn.innerHTML = `Selecione mais 1 item<br>para fechar o pedido`;
}

function selectFoodCard(lastFood, currFood) {
  if (lastFood) {
    getTagFromFood(lastFood).classList.remove("selected");
  }
  getTagFromFood(currFood).classList.add("selected");
}

function onclickFoodCard(event) {
  const [category, id] = event.currentTarget.id.split("-");
  const lastFood = getLastFood(category);
  if (lastFood?.foodId === parseInt(id)) {
    return;
  }
  const selectedFood = searchByFoodId(id);
  updateOrder(selectedFood);
  selectFoodCard(lastFood, selectedFood);
  updateButton(remainingNumber());
}

export function insertOnclickCardEvents() {
  const elements = document.querySelectorAll(".food-list>article");
  elements.forEach((e) => e.onclick = onclickFoodCard);
}