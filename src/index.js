import { loadInitPage, renderInit } from "./init";
import loadNotFound from "./notfound";
import loadAboutPage from "./about";
import loadContactPage from "./contact";
import loadMenuPage from "./menu";
import "./styles.css";

renderInit();
loadInitPage();
window.onhashchange = () => {
  clearContent();
  navigate();
};

const navigate = () => {
  const hash = location.hash;
  switch (hash) {
    case "":
      loadInitPage();
      break;
    case "#home":
      loadInitPage();
      break;
    case "#about":
      loadAboutPage();
      break;
    case "#menu":
      loadMenuPage();
      break;
    case "#contact":
      loadContactPage();
      break;
    default:
      loadNotFound();
      break;
  }
};

const clearContent = () => {
  const box = document.getElementById("box");
  box.className = "";
  box.innerHTML = "";
};
