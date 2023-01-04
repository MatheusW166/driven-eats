import { moneyToNumber } from "../utils/utils.js";

const ORDER = {
  MAIN: null,
  DRINK: null,
  DESSERT: null,
};

function remainingNumber() {
  return Object.entries(ORDER).reduce((prev, curr) => curr[1] ? prev : prev + 1, 0);
}

function getLastFood(category) {
  if (ORDER[category]) {
    return { ...ORDER[category] };
  }
  return ORDER[category];
}

function updateOrder(food) {
  ORDER[food.category] = { ...food };
  return food;
}

function getOrder() {
  return { ...ORDER };
}

function getTotalPrice() {
  return Object.entries(ORDER).reduce((prev, curr) => moneyToNumber(curr[1].price) + prev, 0.0);
}

export { getLastFood, getOrder, updateOrder, remainingNumber, getTotalPrice };