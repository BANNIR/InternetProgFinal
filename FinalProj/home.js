
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
