
const category = 'happiness';
const apiKey = 'cuAKWWU0SfGHz/JjaQn/wg==1xZziCcQHnDAFXGW'; 

let quote ='Happiness is the real sense of fulfillment that comes from hard work.';
let author = 'Joseph Barbara';

const getQuote = () => {
  $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
      headers: { 'X-Api-Key': apiKey},
      contentType: 'application/json',
      success: function(result) {
          //console.log(result[0],result[0].author);
          quote = result[0].quote;
          author = result[0].author;
          console.log(quote,author);
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
  });
};

const setNewQuote = (newQuote, newAuthor) => {
  $("#text").text(newQuote);
  $("#author").text(newAuthor);
}

$(document).ready(function(){
  setNewQuote(quote,author);
  getQuote();

  $( "#new-quote" ).on( "click", function() {
    getQuote();
    setNewQuote(quote,author);
  } );
});