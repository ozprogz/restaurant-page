const loadNotFound = () => {
  renderNotFound();
};

const renderNotFound = () => {
  const content = document.getElementById("content");
  const box = document.getElementById("box");
  box.classList.add("not-found");
  const text = document.createElement("div");
  text.id = "notfound";
  text.innerHTML = `404 - Page not found!`;
  box.append(text);
  content.append(box);
};

export default loadNotFound;
