console.log(this);
//SetTimeout
//iki saniye bekledikten sonra yazar
setTimeout(function () {
    console.log("naber");
}, 2000)

//setInterval
//belirtilen aralik ile fonsiyonu tekrarlar
let i = 0;
let value = setInterval(function () {

    i++;
    console.log("Sayi: " + i);

}, 2000)
document.getElementById("btn").addEventListener("click", function () {
    clearInterval(value);
});