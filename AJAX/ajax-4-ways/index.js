var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quote = document.querySelector("#quote");


// XML HTTP REQUEST
var xhrBtn = document.querySelector("#xhr");
xhrBtn.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      quote.innerText = JSON.parse(xhr.responseText);
    }
  };
  xhr.open("GET", url);
  xhr.send();
});

// FETCH
var fetchBtn = document.querySelector("#fetch");
fetchBtn.addEventListener("click", function() {
  fetch(url)
  .then(function(request) {
    if (!request.ok) {
      throw Error(request.status);
    }
    return request;
  })
  .then(function(response) {
    return response.json().then(function(parsedData) {
      quote.innerText = parsedData;
    })
  })
  .catch(function(err) {
    console.log(err);
  })
});

// JQUERY
var jqueryBtn = document.querySelector("#jquery");
jqueryBtn.addEventListener("click", function() {
  $.getJSON(url)
  .done(function(data) {
    quote.innerText = data;
  })
  .fail(function(err) {
    console.log(err);
  });
});

// AXIOS
var axiosBtn = document.querySelector("#axios");
axiosBtn.addEventListener("click", function() {
  axios.get(url)
  .then(function(data) {
    console.log(data);
    quote.innerText = data.data;
  })
  .catch(function(err) {
    console.log(err);
  })
});