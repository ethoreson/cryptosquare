// user interface:
var sqrts = [144, 121, 100, 81, 64, 49, 36, 25, 16, 9, 4];
var originalPhrase = "Hello there! Don't leave.";
var erasePunc = originalPhrase.replace(/[\W]/g,'').toLowerCase();

var makeArray = function(phrase) {
  phraseArray = phrase.split('');
  console.log(phraseArray);
  return phraseArray;
}


var closestSquareRoot = function(phrase) {
  var phraseLength = (phrase.length);
  var squareRoot = Math.sqrt(phraseLength);
  var roundedNum = Math.ceil(squareRoot);
  console.log(roundedNum);
}


var encryptFunction = function(phrase) {

}


$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var encryptThis = $("#phrase-input").val();
    makeArray(erasePunc);
    var outputResult = closestSquareRoot(erasePunc);

//    var outputResult = encryptionFunction(makeArray);
    $(".output").text(outputResult);
  });
});
