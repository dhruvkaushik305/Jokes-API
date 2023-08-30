let button = document.querySelector("#button");
let text = document.querySelector("#textarea");

button.addEventListener("click",()=>{
    text.value="";
    text.setAttribute("placeholder","Generating...");
    randomJokes();
})
async function randomJokes(){
    let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist&type=single";
    let res = await fetch(url);
    let data = await res.json();
    text.value = data.joke;
}