const loadAboutPage = () => {
  const content = document.getElementById("content");
  const box = document.getElementById("box");
  box.classList.add("about");
  const text = document.createElement("div");
  text.id = "about";
  text.innerHTML = `<p>Welcome to Guilty Pleasures, a one-of-a-kind restaurant that brings together the best of comfort food and guilty indulgences. Our restaurant is dedicated to creating a warm and inviting atmosphere that allows our customers to unwind, relax and indulge in their favourite guilty pleasures.</p>
    <p>At Guilty Pleasures, we pride ourselves on our menu, which is filled with an array of dishes that are sure to satisfy any craving. From classic comfort foods like macaroni and cheese and fried chicken to decadent desserts like molten chocolate lava cake and caramel apple pie, our menu has something for everyone.</p>
    <p>Our team of experienced chefs are passionate about food and are committed to using only the freshest ingredients in all our dishes. We believe that the secret to creating great food is using the best ingredients, and we work hard to ensure that every dish we serve is bursting with flavour.</p>
    <p>In addition to our delicious menu, Guilty Pleasures also offers a wide range of drinks, including classic cocktails, craft beers and a selection of wines. Our bar is stocked with premium spirits and our bartenders are skilled at mixing up the perfect drink to complement your meal.</p>
    <p>We understand that dining out is about more than just great food and drinks. That's why we've created a warm and inviting atmosphere that makes you feel right at home. Whether you're looking for a romantic dinner for two, a night out with friends or a family gathering, Guilty Pleasures is the perfect spot.</p>
    <p>Thank you for considering Guilty Pleasures for your next dining experience. We can't wait to welcome you to our restaurant and indulge your guilty pleasures.</p>`;
  box.append(text);
  content.append(box);
};

export default loadAboutPage;
