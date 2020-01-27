//document.getElementById('inputBtn').addEventListener('click', function getName(){

//fetch JSON
async function getPokemon(name) {

//empty moves array every time you search for new pokemon
   // array.length = 0;
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
    }
let ImageIndex = randomSprite[Math.floor(Math.random() * 5)]; // to select the image to show
        //ImageIndex.......sprites.front_default;

   /* function same(randomSprite[i]) {
        return randomSprite[i] !== ImageValue;
    }

    function myFunction() {
        document.getElementsByClassName("namePoke");innerHTML= randomSprite.filter(same);
    }*/
}
getPokemon(151);






//});