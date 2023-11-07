/**
 створіть HTML-сторінку з 6 чекбоксами. 
 Підключіть бібліотеку **JQuery** та 
 напишіть скріпт, який після того, 
 як користувач позначив будь-які 3 чекбокси, 
 всі чекбокси робить неактивними.
 */
// $(document).ready(function () {
//     let checkboxes = $(".myCheckbox");
//     checkboxes.change(function () {
//         let checkedCount = checkboxes.filter(":checked").length;
//         if (checkedCount >= 3) {
//             checkboxes.not(":checked").attr("disabled", true);
//         }
//     });
// });
$(document).ready(function () {
    let checkboxes = $("input[type='checkbox']");

    checkboxes.change(function () {
        let checkedCount = checkboxes.filter(":checked").length;
        if (checkedCount >= 3) {
            checkboxes.not(":checked").attr("disabled", true);
        }
    });
});