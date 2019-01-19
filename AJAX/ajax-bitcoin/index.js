var price = document.querySelector("#price");
var btn = document.querySelector("button");
var currency = "EUR";

btn.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();   
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var url = JSON.parse(xhr.responseText).bpi[currency].rate;
      price.innerHTML = url + " " + currency;
    }
  }

xhr.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
xhr.send();
});