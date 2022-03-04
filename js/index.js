//document.addEventListener('DOMContentLoded', function(event) {
fetch('https://favqs.com/api/qotd')
    .then(response => response.json())
    .then(quotes => {
        console.log(quotes.quote);
        document.getElementById('quote').innerText = `"${quotes.quote.body}"`;
        document.getElementById('author').innerText = quotes.quote.author;
    })
    .catch(error => console.log(error));

//});