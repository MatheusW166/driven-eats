function searchByFoodId(foodId) {
  const id = parseInt(foodId);
  const element = DB.filter((e) => e.foodId === id)[0];
  if (element) {
    return { ...element };
  }
  return element;
}

function getAllFoods() {
  const data = [];
  DB.forEach((e) => data.push({ ...e }));
  return data;
}

const TYPES = {
  MAIN: "MAIN",
  DRINK: "DRINK",
  DESSERT: "DESSERT",
}

const DB = [
  {
    foodId: 1,
    category: TYPES.MAIN,
    name: "Cheddar Burger",
    description: "Hambúrguer angus grelhado",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/Cheddar-Burger.png",
    price: "R$ 45,90",
  },
  {
    foodId: 2,
    category: TYPES.MAIN,
    name: "Chevrolet Burger",
    description: "Com queijo, alface, tomate e cebola",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/Chevrolet-Burger.png",
    price: "R$ 39,90",
  },
  {
    foodId: 3,
    category: TYPES.MAIN,
    name: "Salada Tex Mex",
    description: "Slada mexicana com mix de folhas",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/IMG_0728-min-1536x1024.jpg",
    price: "R$ 29,90",
  },
  {
    foodId: 4,
    category: TYPES.MAIN,
    name: "Larry Page Caesar Salad",
    description: "Mix de folhas frescas e molho Caesar",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/IMG_0615-min-1536x1024.jpg",
    price: "R$ 32,50",
  },
  {
    foodId: 5,
    category: TYPES.DRINK,
    name: "Soda Italiana",
    description: "Água com gás e frutas vermelhas",
    img: "https://cooknenjoy.com/wp-content/uploads/2022/02/soda-italiana-2-1800x1352-1200x901.jpg",
    price: "R$ 19,90",
  },
  {
    foodId: 6,
    category: TYPES.DRINK,
    name: "Refrigerantes",
    description: "Lata 350ml",
    img: "http://www.postotropical.net.br/wp-content/uploads/2021/02/refrigerantes-lata-350ml-min-600x600.jpg",
    price: "R$ 6,90",
  },
  {
    foodId: 7,
    category: TYPES.DRINK,
    name: "Água Mineral",
    description: "Com gás",
    img: "https://www.prabarbebidas.com.br/img/products/agua-mineral-com-gas-crystal-pack-c-6un-de-15-litro_1_1200.jpg",
    price: "R$ 5,50",
  },
  {
    foodId: 8,
    category: TYPES.DRINK,
    name: "H2O",
    description: "Sabor limão",
    img: "https://adegabomretiro.com.br/wp-content/uploads/2019/10/R-199-H2O-500ML-20180618164704-700x850-1.jpg",
    price: "R$ 6,50",
  },
  {
    foodId: 9,
    category: TYPES.DESSERT,
    name: "Churros com doce de leite & sorvete",
    description: "Churros com doce de leite e sorvete",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/Copy-of-Churros-com-sorvete-e-doce-de-leite-min-scaled.jpg",
    price: "R$ 25,90",
  },
  {
    foodId: 10,
    category: TYPES.DESSERT,
    name: "Detroit Brownie com sorvete",
    description: "Brownie de chocolate com sorvete",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/Detroit-Brownie-com-sorvete.png",
    price: "R$ 25,90",
  },
  {
    foodId: 11,
    category: TYPES.DESSERT,
    name: "Waffle Detroit",
    description: "Waffle americano com chocolate",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/Waffle-com-ganache-de-chocolate-morango-e-Sorvete.png",
    price: "R$ 21,50",
  },
  {
    foodId: 12,
    category: TYPES.DESSERT,
    name: "Mega Sundae",
    description: "Ovomaltine e Paçoquinha",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/IMG_1085-min-scaled.jpg",
    price: "R$ 35,90",
  },
];

export { TYPES, searchByFoodId, getAllFoods };
