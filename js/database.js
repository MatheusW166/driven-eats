const [MAIN, DRINK, DESSERT] = ["MAIN", "DRINK", "DESSERT"];

const DB = [
  {
    foodId: 1,
    category: MAIN,
    name: "Cheddar Burger",
    description: "Hambúrguer angus grelhado acompanhado de molho cheddar cremoso e cebola caramelizada no pão Brioche.",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/Cheddar-Burger.png",
    price: 45.9,
  },
  {
    foodId: 2,
    category: MAIN,
    name: "Chevrolet Burger",
    description: "Hambúrguer Angus grelhado acompanhado de queijo, alface, tomate, cebola roxa e tempero especial no pão Brioche.",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/Chevrolet-Burger.png",
    price: 39.9,
  },
  {
    foodId: 3,
    category: MAIN,
    name: "Salada Tex Mex",
    description: "Tradicional salada mexicana com mix de folhas, milho, tomate, pepino, cebola e tempero especial levemente picante.",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/IMG_0728-min-1536x1024.jpg",
    price: 29.9,
  },
  {
    foodId: 4,
    category: MAIN,
    name: "Larry Page Caesar Salad",
    description: "Mix de folhas frescas, croutons, queijo parmesão e molho Caesar.",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/IMG_0615-min-1536x1024.jpg",
    price: 32.5,
  },
  {
    foodId: 5,
    category: DRINK,
    name: "Soda Italiana",
    description: "Feita a partir de uma combinação de água com gás e frutas vermelhas.",
    img: "https://cooknenjoy.com/wp-content/uploads/2022/02/soda-italiana-2-1800x1352-1200x901.jpg",
    price: 19.9,
  },
  {
    foodId: 6,
    category: DRINK,
    name: "Refrigerantes",
    description: "Lata 350ml",
    img: "http://www.postotropical.net.br/wp-content/uploads/2021/02/refrigerantes-lata-350ml-min-600x600.jpg",
    price: 6.9,
  },
  {
    foodId: 7,
    category: DRINK,
    name: "Água Mineral",
    description: "Com gás",
    img: "https://www.prabarbebidas.com.br/img/products/agua-mineral-com-gas-crystal-pack-c-6un-de-15-litro_1_1200.jpg",
    price: 5.5,
  },
  {
    foodId: 8,
    category: DRINK,
    name: "H2O",
    description: "Sabor limão",
    img: "https://adegabomretiro.com.br/wp-content/uploads/2019/10/R-199-H2O-500ML-20180618164704-700x850-1.jpg",
    price: 6.5,
  },
  {
    foodId: 9,
    category: DESSERT,
    name: "Churros com doce de leite & sorvete",
    description: "Autêntico churros com doce de leite e sorvete de creme.",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/Copy-of-Churros-com-sorvete-e-doce-de-leite-min-scaled.jpg",
    price: 25.9,
  },
  {
    foodId: 10,
    category: DESSERT,
    name: "Detroit Brownie com sorvete",
    description: "Irresistível Brownie de chocolate coberto com sorvete e ganache e chocolate.",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/Detroit-Brownie-com-sorvete.png",
    price: 25.9,
  },
  {
    foodId: 11,
    category: DESSERT,
    name: "Waffle Detroit",
    description: "Tradicional waffle americano, coberto com ganache de chocolate, morangos e uma bola de sorvete de creme.",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/Waffle-com-ganache-de-chocolate-morango-e-Sorvete.png",
    price: 21.5,
  },
  {
    foodId: 12,
    category: DESSERT,
    name: "Mega Sundae",
    description: "Em 2 diferentes versões: Ovomaltine e Paçoquinha.",
    img: "https://detroitsteakhouse.com.br/cardapio-digital/wp-content/uploads/2021/01/IMG_1085-min-scaled.jpg",
    price: 35.9,
  },
];

const ORDER = {
  MAIN: {},
  DRINK: {},
  DESSERT: {},
};

export { ORDER, DB };
