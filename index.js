
const category = 'happiness';
const apiKey = 'cuAKWWU0SfGHz/JjaQn/wg==1xZziCcQHnDAFXGW'; 

let quote ='Happiness is the real sense of fulfillment that comes from hard work.';
let author = '- Joseph Barbara';

const getQuote = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': apiKey},
    contentType: 'application/json',
    success: function(result) {
      //console.log(result[0],result[0].author);
      quote = result[0].quote;
      author = '- ' + result[0].author;
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

  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + newQuote + '" ' + newAuthor)
  );

  $('#tumbr-quote').attr(
    'href',
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(newAuthor) +
      '&content=' +
      encodeURIComponent(newQuote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  );
}

$(document).ready(function(){
  getQuote().then(()=> {
    setNewQuote(quote,author);
  });

  $( "#new-quote" ).on( "click", function() {
    getQuote().then(()=> {
      setNewQuote(quote,author);
    });
  } );
});