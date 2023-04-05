const loadContactPage = () => {
  const content = document.getElementById("content");
  const box = document.getElementById("box");
  box.classList.add("contact");
  const text = document.createElement("div");
  text.id = "contact";
  text.innerHTML = `Contact Us

  We'd love to hear from you! If you have any questions, comments, or feedback, please don't hesitate to get in touch.
  
  You can reach us by phone at (555) 123-4567, or by email at info@guiltypleasures.com.
  
  Our restaurant is located at 123 Main Street in the heart of downtown. If you'd like to visit us in person, please see our map and directions below.
  
  We're open Monday through Saturday from 11am to 10pm, and on Sundays from 12pm to 9pm. Reservations are recommended, but not required.
  
  Thank you for considering Guilty Pleasures for your dining experience. We can't wait to hear from you and welcome you to our restaurant!
  <div class="iframe-wrapper">
    <iframe width="700" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-96.81406617164613%2C32.77546709763724%2C-96.79614901542665%2C32.783423077838954&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small></small>
  </div>
  `;
  box.append(text);
  content.append(box);
};

export default loadContactPage;
