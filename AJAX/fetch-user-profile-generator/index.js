var btn = document.querySelector("#btn");
var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
var avatar = document.querySelector("#avatar");

btn.addEventListener("click", function() {
  var url = "https://randomuser.me/api/";
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(printError);
});


function handleErrors(data) {
  if (!data.ok) {
    throw Error(data.status);
  }
  return data;
}

function parseJSON(data) {
  return data.json().then(function(parsedData){
    return parsedData.results[0];
  })
}

function updateProfile(data) {
  fullname.innerText = data.name.first + " " + data.name.last;
  username.innerText = data.login.username;
  email.innerText = data.email;
  city.innerHTML = data.location.city;
  avatar.src = data.picture.medium;
}

function printError(error) {
  console.log(error);
}