// business logic

var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

// this check first word of full string, for a non-alpha, returns an alert if it is
var isNonAlpha = function(input){
  if (input.charAt(0).match(/[a-z]/i)){
    return true;
  } else {
    return false;
  }
}

//this checks for a index(0) is a vowel, if so, it will append "ay" to the end of the input

//then this checks to see if index(0) is a consonant, if so, it will append the consonant and "ay" to the end
var isVowelOrConsonantFirst = function(input){
  for(var i = 0; i < vowels.length; i++){
    if(input.charAt(0) === vowels[i]){
      input = input + "ay";
    }
  }
  for(var i = 0; i < consonants.length; i++){
    if(input.charAt(0) === consonants[i]){
      // take the first and put it at the end
      input = input.substring(1, input.length) + (input.charAt(0) + "ay");
      // then add ay
    }
  }
  return input;
}

// ui logic
$(function() {

  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val().toLowerCase();
    var alphaResult = isNonAlpha(userInput);

    var result1 = isVowelOrConsonantFirst (userInput);
    // result1 = isConsonant(userInput);

    $(".result").show();

    if (!alphaResult) {
      $(".alerts").append("<li>Please have your input begin with a letter!</li>");
    }

    $("#pigResult").append(result1);


    this.reset();


  }); //this closes form submit
}); //this closes doc ready fxn
