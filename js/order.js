const ORDER = {
  MAIN: null,
  DRINK: null,
  DESSERT: null,
};

export function remainingNumber() {
  return Object.entries(ORDER).reduce((prev, curr) => curr[1] ? prev : prev + 1, 0);
}

export function getLastFood(category) {
  if (ORDER[category]) {
    return { ...ORDER[category] };
  }
  return ORDER[category];
}

export function updateOrder(food) {
  ORDER[food.category] = { ...food };
  return food;
}

export function getOrder() {
  return { ...ORDER };
}