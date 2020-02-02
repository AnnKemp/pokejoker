//commenting this out because i dont want to remove stefan's work, he still needs to explain it to me and rest of group
/*var joker = fetchJoke();


function fetchJoke(){
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
            joker = data.value;
            return joker;
        });
    return joker;
}

function joke(joke){
    // document.getElementById("jokeText").innerHTML = joke;
}



    document.getElementById("pokeball").addEventListener("click",function () {
      joke(joker);
        console.log(joker);
    });*/

//fetch for new joke api, this generates a random joke every fetch, unlimited fetch so no need to store anywhere
async function fetchJoke() {
    //fetch stream of data
    const jokeApi = await fetch(`https://official-joke-api.appspot.com/random_joke`);
    const responsejoke = await jokeApi.json();

    //getting the joke from api, it is set in two parts: a set up and a punchline, concatonating the two in a variable
    let joke;
        let part1 = responsejoke.setup;
        let part2 = responsejoke.punchline;
        joke =`${part1} ${part2}`;

    //this line can be added to the other js file
    document.getElementById("jokeText").innerHTML = joke;

}

fetchJoke();

//found this cool git repo for a joke api https://github.com/15Dkatz/official_joke_api