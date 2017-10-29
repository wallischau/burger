/* Author: Wallis Chau                     */
/* event handling                          */
/* api calls                               */

$(function() {

  $(".create-form").on("click", "#submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log('here');

    var newBurger = {
      name: $("#bur").val().trim(),
      devoured: 0
    };

    // console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });//create-form

  $(".devoured-btn").on("click", function(event) {
    event.preventDefault();
    // console.log($(this));
    var id = $(this).attr('id').substr(14);
    console.log(id);
    var devourValue = {devoured: 1};
    $(this).parent().remove();
    $.ajax("/api/burgers/"+id, {
      type: "PUT",
      data: devourValue
    }).then(
      function() {
        console.log("updated burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );


 });//devoured-btn 
});
