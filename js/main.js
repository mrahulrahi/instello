import myJson from "../json/categories.json" assert { type: "json" };
var categories = myJson.categories;
var beverages = myJson.categories.beverages;
console.log(categories);
console.log(beverages[1].name);
