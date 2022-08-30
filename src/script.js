// Consuming the quotes API

const quote_url = "https://zenquotes.io/api/quotes/keyword=fear"
const quote_text = document.getElementById("quote");
const quote_author = document.getElementById("author");
fetch(quote_url,{
    method: "GET",
    headers:{
        "content-type": "application/json",
    },
    mode: 'no-cors'
})
    .then(res => console.log(res))
    .then(data => {
        quote_text.textContent = data[0]['q'];
        quote_author.textContent = data[0]['a'];
    })