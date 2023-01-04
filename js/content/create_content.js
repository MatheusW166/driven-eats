import { TYPES, getAllFoods } from "../db/database.js";

function groupByCategory(data) {
  const groups = {};
  data.forEach((e) => {
    const category = e.category;
    if (!(category in groups)) {
      groups[category] = [];
    }
    groups[category].push({ ...e });
  });
  return groups;
}

function createFoodSection(title) {
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const div = document.createElement("div");
  div.classList.add("food-list");
  h2.appendChild(document.createTextNode(title));
  section.appendChild(h2);
  section.appendChild(div);
  return section;
}

function createFoodCard(food) {
  const article = document.createElement("article");
  const image = document.createElement("img");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const h4 = document.createElement("h4");
  article.setAttribute("id", `${food.category}-${food.foodId}`);
  article.setAttribute("data-test", `${food.category === TYPES.MAIN ? "dish" : food.category === TYPES.DRINK ? "drink" : "dessert"}`);
  image.src = food.img;
  h3.appendChild(document.createTextNode(food.name));
  h3.setAttribute("data-test", "item-name");
  p.appendChild(document.createTextNode(food.description));
  h4.appendChild(document.createTextNode(food.price));
  h4.setAttribute("data-test", "item-price");
  article.appendChild(image);
  article.appendChild(h3);
  article.appendChild(p);
  article.appendChild(h4);

  return article;
}

const titles = {
  [TYPES.MAIN]: "Primeiro, seu prato",
  [TYPES.DRINK]: "Agora, sua bebida",
  [TYPES.DESSERT]: "Por fim, sua sobremesa",
};
function createMainContent(db) {
  const groups = groupByCategory(db);
  const sections = [];
  Object.entries(groups).forEach((entry) => {
    const [type, foods] = [entry[0], entry[1]];
    const typeSection = createFoodSection(titles[type] ?? "Escolha um item");
    const foodListElement = typeSection.getElementsByClassName("food-list")[0];
    foods.forEach((e) => {
      foodListElement.appendChild(createFoodCard(e));
    });
    sections.push(typeSection);
  });
  return sections;
}

function insertContent() {
  const mainSections = createMainContent(getAllFoods());
  const fragment = document.createDocumentFragment();
  mainSections.forEach((e) => fragment.appendChild(e));

  const main = document.getElementsByTagName("main")[0];
  main.appendChild(fragment);
}

export { insertContent };
