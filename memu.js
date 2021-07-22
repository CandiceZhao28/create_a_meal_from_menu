const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(newAppetizers) {
    this._courses.appetizers = newAppetizers;
  },
  set mains(newMains) {
    this._courses.mains = newMains;
  },
  set desserts(newDesserts) {
    this._courses.desserts = newDesserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers, // use the getters written above
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const indexRandom = Math.floor(Math.random()*dishes.length);
    return dishes[indexRandom];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    return `The three-course meal picked jsut for you:\n   Appetizer: ${appetizer.name} --- £${appetizer.price}\n   Main: ${main.name} --- £${main.price}\n   Dessert: ${dessert.name} --- £${dessert.price}`
  }
};

// add dishes to the menu
menu.addDishToCourse('appetizers', 'Fried Shrimp', 7);
menu.addDishToCourse('appetizers', 'Fish Cake', 6.5);
menu.addDishToCourse('appetizers', 'Scallop', 8);
menu.addDishToCourse('mains', 'Angus Burger', 11);
menu.addDishToCourse('mains', 'Beef Lasagna', 12);
menu.addDishToCourse('mains', 'Lemon Chicken & Rice', 10.5);
menu.addDishToCourse('mains', 'Pan-fried Cod', 12.5);
menu.addDishToCourse('desserts', 'Chocolate Browny', 5);
menu.addDishToCourse('desserts', 'Lemon Cheesecase', 5.5);
menu.addDishToCourse('desserts', 'Stawberry Icecream', 4.5);

// create a meal!
const meal = menu.generateRandomMeal();
console.log(meal);

