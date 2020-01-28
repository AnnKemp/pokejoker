(() => {

function joke(divInput){
    fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
        "headers":{
            "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
            "x-rapidapi-key": "d6a9a6a636msh6149dd70f533fbep1d082ejsn996b4026e931",
            "accept": "application/json"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.value);
            document.getElementById("pokeGuess1").innerHMTL = divInput;
        });
}




document.getElementById("pokeGuess1").addEventListener("click",function () {
    joke();
});




})();