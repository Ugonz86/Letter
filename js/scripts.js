$(function(){
  $(".form-inline").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".userInput").text(nameInput);

    $("#letter").show();

    event.preventDefault();
  });
});
