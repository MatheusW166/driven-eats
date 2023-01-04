import { searchByFoodId } from "./database.js";
import { getLastFood, setFood } from "./order.js";

function getTagFromFood(food) {
  return document.getElementById(`${food.category}-${food.foodId}`);
}

function onclickFoodCard(event) {
  const [category, id] = event.currentTarget.id.split("-");
  const lastFood = getLastFood(category);
  if (lastFood?.foodId === parseInt(id)) {
    return;
  }
  const selectedFood = searchByFoodId(id);
  setFood(selectedFood);

  if (lastFood) {
    getTagFromFood(lastFood).classList.remove("selected");
  }
  getTagFromFood(selectedFood).classList.add("selected");
}

export function insertOnclickCardEvents() {
  const elements = document.querySelectorAll(".food-list>article");
  elements.forEach((e) => e.onclick = onclickFoodCard);
}