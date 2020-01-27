


//document.getElementById('inputBtn').addEventListener('click', function getName(){

//fetch JSON
async function getPokemon(name) {

//if input is empty alert the user to enter a pokemon name
    //   if(name === ""){
    //       alert('type in a pokemon name!')
    //  }
//fetch stream of data
    const pokemonPlain = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemonSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);

//convert to json
    const pObject = await pokemonPlain.json();
    const pSpecies = await pokemonSpecies.json();

    console.log(pObject);
    console.log(pSpecies);

    for (i = 1; i <= 4; i++) {

        let randomSprite = [];
        randomSprite[i] = Math.floor(Math.random() * 151) + 1; // returns a random integer from 1 to 151

        let ImageValue = randomSprite[i]; // beeld om te tonen
    }
}
getPokemon(randomSprite);






//});