/**
знайдіть всі <h2> з класом head,
зробіть для них зелений колір фону,
потім серед знайдених елементів знайдіть елементи з класом inner
і поставте їм розмір шрифту 35px (не вносьте змін до html-файлу)
 */

$(document).ready(function(){
  let headElements = $('h2.head');
  headElements.css("background-color", "green");
  headElements.find(".inner").css("font-size", "35px;");

});
