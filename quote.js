const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random"
async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(url)
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getquote(api_url)

function tweet(){
    window.open("https://dev.twitter.com/web/tweet-button/web-intent","Tweet Window", "width=600, height=300");
}
tweet()