$(document).ready(function() {
  
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
    
      var burgerInfo = {
        burger_id: $(this).children(".burger_id").val(),
        customer: $(this).children(".custInput").val()
      };
  
      $.ajax({
        method: "PUT",
        url: "/burgers/update",
        data: burgerInfo
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
    
    });
  });
  