import restaurant from "./images/restaurant.jpg";

export const loadInitPage = () => {
  renderContent();
};

export const renderInit = () => {
  const body = document.getElementById("body");
  const header = document.createElement("header");
  const footer = document.createElement("footer");
  footer.innerHTML = `Made by Zaro`;
  header.innerHTML = `<a href ="http://localhost:8080/#home" class="header">Guilty Pleasures</a>
        <nav> 
            <ul>
                <li><a href="/#home">Home</a></li>
                <li><a href="/#menu">Menu</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>`;
  body.prepend(header);
  body.append(footer);
};

const renderContent = () => {
  const content = document.getElementById("content");
  const box = document.getElementById("box");
  box.classList.add("init");
  const text = document.createElement("div");
  text.id = "text";
  text.innerHTML = `<h1>Welcome to Guilty Pleasures</h1>

  <p>Indulge in your favorite comfort foods and guilty pleasures at our one-of-a-kind restaurant. We're dedicated to providing a warm and inviting atmosphere where you can relax, unwind, and enjoy a delicious meal.</p>
  
  <p>Our menu features an array of classic comfort foods, like mac and cheese, fried chicken, and burgers, as well as decadent desserts, like molten chocolate lava cake and apple pie. We use only the freshest ingredients and our experienced chefs are passionate about creating dishes that are bursting with flavor.</p>
  
  <p>We also offer a wide selection of drinks, including classic cocktails, craft beers, and a selection of wines. Our bartenders are skilled at mixing up the perfect drink to complement your meal.</p>
  
  <p>Whether you're looking for a romantic dinner for two, a night out with friends, or a family gathering, Guilty Pleasures is the perfect spot. Come and indulge your guilty pleasures with us!</p>
  
  <h4>Make a reservation or stop by and see us today. We can't wait to welcome you to our restaurant!</h4>
  `;
  box.append(text);
  content.append(box);
};
