
let currentPrice = document.querySelector("#currentPrice");
let gram = document.getElementById("weightOfGold");
let button = document.querySelector("#findVal");


var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-at6hukp6idi3f-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
method: 'GET',
headers: myHeaders,
redirect: 'follow'
};

fetch("https://www.goldapi.io/api/XAU/INR", requestOptions)
.then(response => response.text())
.then(result => {
let finalPrice = result.split(',')[10].split(':')[1]/28.34951
let final = finalPrice.toFixed(2)
console.log(final)
currentPrice.innerHTML = "Current INR : <span>&#8377 "+final+"</span> /gram"

button.addEventListener('click', () => {
    let calculatedPrice = parseFloat(gram.value)*final;
    let userRequiredPrice = calculatedPrice.toFixed(2);
    document.querySelector("#finalPrice").innerHTML = "Price will be <span>&#8377  " + userRequiredPrice+"</span>"
})
})
.catch(error => console.log('error', error));