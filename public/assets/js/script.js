$( document ).ready(function() {
    $('.modal').modal();
    $('#modal1').on('click', function() {
    });
// Ajax + form info

    $(".modal1").on("submit", function(event) {
        event.preventDefault();
    
        var entryInfo = {
        entry: $(this).children("#entry").val(),
        //createdAt: $(this).children(".createdAt").val(),
        //updatedAt: $(this).children(".updatedAt").val(),
        context: $(this).children("#context").val(),
        contextLink: $(this).children("#contextLink").val()
        };

        $.ajax({
        method: "PUT",
        url: "/index/update",
        data: entryInfo
        }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
        });
    
    });

// Character Counter 
$(".materialize-textarea").on("input",function(event){
    checkTextAreaMaxLength(this,event);
  });
  
  /*
  Checks the MaxLength of the Textarea
  -----------------------------------------------------
  @prerequisite:	textBox = textarea dom element
                  e = textarea event
                  length = Max length of characters
  */
  function checkTextAreaMaxLength(textBox, e) { 
      
      var maxLength = parseInt($(textBox).data("length"));
      
    
      if (!checkSpecialKeys(e)) { 
          if (textBox.value.length > maxLength - 1) textBox.value = textBox.value.substring(0, maxLength); 
     } 
    $(".char-count").html(maxLength - textBox.value.length);
      
      return true; 
  } 
  /*
  Checks if the keyCode pressed is inside special chars
  -------------------------------------------------------
  @prerequisite:	e = e.keyCode object for the key pressed
  */
  function checkSpecialKeys(e) { 
      if (e.keyCode != 8 && e.keyCode != 46 && e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40) 
          return false; 
      else 
          return true; 
  }
  



});

console.log("Routed Well");