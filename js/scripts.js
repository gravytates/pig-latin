// business logic

var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

// this checks first letter of full string, for a non-alpha, returns an alert if it is
var isNonAlpha = function(input){
  if (input.charAt(0).match(/[a-z]/i)){
    return true;
  } else {
    return false;
  }
}

// function to see if first character is vowel, if so, will return. if not, will check to see if constonant
var isVowelOrConsonantFirst = function(input){
  for(var i = 0; i < vowels.length; i++){
    if(input.charAt(0) === vowels[i]){
      input = input + "way";
      return input;
    }
  }
  // checks to see if string begins with 1-3 consonants
  for(var i = 0; i < consonants.length; i++){
    if(input.charAt(0) === consonants[i]) {
      input = input.substring(1, input.length) + (input.charAt(0));
      for(var j = 0; j < consonants.length; j++){
        if(input.charAt(0) === consonants[j]){
          input = input.substring(1, input.length) + (input.charAt(0));
          for(var k = 0; k < consonants.length; k++){
            if(input.charAt(0) === consonants[k]){
              input = input.substring(1, input.length) + (input.charAt(0));
            }
          }
        }
      }
      return input + "ay";
    }
  }
} //ends our function isVowelOrConsonantFirst

// checks to see if string begins with qu, or if second and third letters are qu
var isQu = function(input){
  if(input.substring(0,2) === "qu"){
    input = input.substring(2, input.length) + "quay";
  } else if (input.substring(1,3) === "qu"){
    input = input.substring(3, input.length) + input.charAt(0) + "quay";
  } else {
    input = isVowelOrConsonantFirst(input);
  }
  return input;
}

// ui logic
$(function() {

  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val().toLowerCase();
    // var alphaResult;
    var inputArray = userInput.split(" ");
    var pigArray = [];

    inputArray.forEach(function(word){
      var alphaResult = isNonAlpha(word);
        if(alphaResult === false){
          $("p").hide();
          $(".alerts").append("<li>Please have your input be only letters!</li>");
        }
    });

    inputArray.forEach(function(word){
      var result = isQu(word);
      pigArray.push(result);
    });

    var pigString = pigArray.join(" ");

    $(".result").show();
    $("form").hide();

    $("#pigResult").append(pigString);


  }); //this closes form submit

  $("#reload").click(function(){
    location.reload();
  });

});
