
var p = document.createElement("p");
var num = Math.floor(Math.random() * 100);
const element = document.getElementById("quote");
const element2 = document.getElementById("author");

var quote= fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    element.appendChild(document.createTextNode(JSON.stringify(data[num].text)));
    element2.appendChild(document.createTextNode(JSON.stringify(data[num].author)));
  });

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
		'X-RapidAPI-Key': '1bb629e3f9mshb5f12caa7b04894p103a14jsn640e3230402f'
	}
};

fetch('https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=sussy', options)
	.then(response => response.json())
	.then(response => console.log(response.list[9].definition))
	.catch(err => console.error(err));