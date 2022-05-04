
var p = document.createElement("p");
var num = Math.floor(Math.random() * 100);
const element3 = document.getElementById("quote");
const element4 = document.getElementById("author");

var quote = fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    element3.appendChild(document.createTextNode(JSON.stringify(data[num].text)));
    element4.appendChild(document.createTextNode(JSON.stringify(data[num].author)));
  });


const element = document.getElementById("definition");
const element2 = document.getElementById("example");
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
    'X-RapidAPI-Key': '1bb629e3f9mshb5f12caa7b04894p103a14jsn640e3230402f'
  }
};

fetch('https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=sussy', options)
  .then(response => response.json())
  .then(response => element.appendChild(document.createTextNode(JSON.stringify(data[num].text))))
  .then(response => console.log(JSON.stringify(response.list[9].definition)))
  .catch(err => console.error(err));