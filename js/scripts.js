// user interface:
var originalPhrase = "Hello there! Don't leave.";
var formattedString = originalPhrase.replace(/[\W]/g,'').toLowerCase();

var makeArray = function(phrase) {
  phraseArray = phrase.split('');
//  console.log(phraseArray);
  return phraseArray;
}

var closestSquareRoot = function(phrase) {
  var phraseLength = (phrase.length);
  var squareRoot = Math.sqrt(phraseLength);
  var roundedNum = Math.floor(squareRoot);
//  console.log(roundedNum);
  return roundedNum;
}

var encryptFunction = function(phrase) {
//  console.log(closestSquareRoot(phrase));
//  return closestSquareRoot(phrase);
  var newArray = [];
  for ( ; ; ;) {
    //save point, logic not yet written
  }
  console.log(newArray);
}


$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
//    var encryptThis = $("#phrase-input").val();
    makeArray(formattedString);
    closestSquareRoot(formattedString);
    var encryptedResult = encryptFunction(phraseArray)
//    var outputResult = encryptionFunction(makeArray);
    $(".output").text(encryptFunction);
  });
});
