const ORDER = {
  MAIN: null,
  DRINK: null,
  DESSERT: null,
};

export function getLastFood(category) {
  if (ORDER[category]) {
    return { ...ORDER[category] };
  }
  return ORDER[category];
}

export function setFood(food) {
  ORDER[food.category] = { ...food };
  return food;
}
