// business logic
var isNonAlpha = function(input){
  if (input.charAt(0).match(/[a-z]/i)){
    alert("there are letters");
  } else {
    alert("this begins with a non-alpha character");
  }
}


// ui logic
$(function() {

  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    isNonAlpha(userInput);

    $(".result").show();






  }); //this closes form submit
}); //this closes doc ready fxn
