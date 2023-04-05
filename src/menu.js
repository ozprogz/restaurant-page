import nacho from "./images/loaded-nachos-1590072354.jpg";
import chicken from "./images/chicken.jpg";
import cake from "./images/molten-chocolate-cake.jpg";
import drink from "./images/margarita-new.jpg";

const loadMenuPage = () => {
  const content = document.getElementById("content");
  const box = document.getElementById("box");
  const text = document.createElement("div");
  text.id = "menu";
  text.innerHTML = `<h3>Appetizers:</h3>
        <div class="menubox">
          <ul class="ul-menu">
            <li><strong>Loaded Nachos:</strong> crispy tortilla chips topped with melted cheddar cheese, jalapenos, diced tomatoes, green onions, sour
            cream and guacamole.</li>
            <li><strong>Fried Mac and Cheese Bites:</strong> crispy fried bites of mac and cheese served with a spicy aioli dipping sauce.</li>
            <li><strong>Bacon-wrapped Jalapeno Poppers:</strong> fresh jalapenos stuffed with cream cheese, wrapped in bacon and baked to perfection.</li>
          </ul>
          <img class="menu-picture" src="${nacho}" width="20%" height="5%">
        </div>
        <h3>Entrees:</h3>
        <div class="menubox">
          <ul class="ul-menu">
              <li><strong>Southern Fried Chicken:</strong> crispy fried chicken served with a side of creamy mashed potatoes and gravy.</li>
              <li><strong>Grilled Cheese Sandwich:</strong> classic grilled cheese made with melted cheddar cheese and served with a side of tomato soup
              for dipping.
              </li>
              <li><strong>Classic Cheeseburger:</strong> juicy beef patty topped with melted cheddar cheese, lettuce, tomato, onion and pickles served with
              a side of fries.</li>
          </ul>
          <img class="menu-picture" src="${chicken}" width="20%" height="5%">
        </div>
        <h3>Desserts:</h3>
        <div class="menubox">
          <ul class="ul-menu">
              <li><strong>Molten Chocolate Lava Cake:</strong> warm chocolate cake with a gooey chocolate center served with a scoop of vanilla ice cream.</li>
              <li><strong>Caramel Apple Pie:</strong> warm apple pie with a drizzle of caramel sauce and a scoop of vanilla ice cream.</li>
              <li><strong>Brownie Sundae:</strong> warm chocolate brownie served with a scoop of vanilla ice cream, chocolate sauce and whipped cream.</li>
          </ul>
          <img class="menu-picture" src="${cake}" width="20%" height="5%">
        </div>
        <h3>Drinks:</h3>
        <div class="menubox">
          <ul class="ul-menu">
              <li><strong>Classic Margarita:</strong> tequila, lime juice and triple sec served over ice with a salt rim.</li>
              <li><strong>Old Fashioned:</strong> bourbon, sugar, bitters and orange peel served over ice.</li>
          </ul>
          <img class="menu-picture" src="${drink}" width="20%" height="5%">
        </div>
        <h2>We hope you enjoy your meal at Guilty Pleasures!</h2>`;
  box.append(text);
  content.append(box);
};

export default loadMenuPage;
