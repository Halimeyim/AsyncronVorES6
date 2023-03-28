document.getElementById("change").addEventListener("click", change);

function change() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.freecurrencyapi.com/v1/latest?apikey=3p5HOM5fthsunnRYQts2pPj9YKlinOM8LtSYSi5C");

    xhr.onload = function () {
        if (this.status) {
            const response = JSON.parse(this.responseText);
            //console.log(this.responseText);
            const rate = response.data.TRY;
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value = rate * amount
            console.log(response.data.TRY);
        }
    }
    xhr.send();
}
