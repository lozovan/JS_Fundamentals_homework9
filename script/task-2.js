/**
Для усіх посилань зі сторінки додайте атрибут target="\_blank", якщо
href починається на`https://
 */
$(document).ready(function () {
  let links = document.querySelectorAll("a[href^='https://']");
  links.forEach(link => {
      link.setAttribute("target", "_blank");
  });
});
