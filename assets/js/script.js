(() => {
    // initialise vars
    let ImageIndex=0;
    let randomSprite = [];

//fetch JSON
async function getPokemon() {

//fetch stream of data 151 pokemons, starting at 0
    const pokemonPlain = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`);

//convert to json
    const pObject = await pokemonPlain.json();
    console.log(pObject); // testing in the console

    // generate 4 random numbers to use as random id's to select 4 random pokemons
    for (let i = 1; i <= 4; i++) {
        randomSprite[i] = Math.floor(Math.random() * 151) + 1;     // returns a random integer from 1 to 151
        console.log(randomSprite[i]); // this works fine
    }

    // select buttons to display 4 random pokemon names   ---this works!
    for (let y = 0; y < 4; y++) {
        document.querySelectorAll(".guessButton")[y].innerHTML = pObject.results[randomSprite[y + 1]].name;
    }

    // to generate a random number between 0 and 4 to select the random id of the image we are going to show
    let randomGetal = Math.floor(Math.random() * 5); // this works fine!
    if (randomGetal==0){
        randomGetal=1;
    }

    ImageIndex = randomSprite[randomGetal]; // to select the random image to show from the four selected pokemons
    ImageIndex=ImageIndex+1;
    getPokemonImage(ImageIndex);
}
getPokemon(); // call the function

  //console.log(pObject); // testing in the console dus met ne return krijg ik de pObject data niet uit de functie ???!!! why?!!!
    async function getPokemonImage(name) {
        //fetch stream of data
        const pokemonImage = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pImage = await pokemonImage.json();

     console.log(pImage.sprites.front_default);  // this works
        console.log(pImage.name);
        console.log(pImage.id);
        document.querySelector(".PokemonIcon").src=pImage.sprites.front_default;    // this works!
    }

    /*
    // het vergelijken of er twee van die randomwaarde hetzelfde zijn heb ik nog niet gedaan
    function same(randomSprite[i]) {
     return randomSprite[i] !== ImageValue;

     //na die eerste fetch de data in een array steken zodat die constant bereikbaar zijn heb ik nog niet gedaan
     // zo ook voor de tweede fetch

     // een catch - error constructie voorzien, dat heb ik ook nog niet gedaan
 }
*/

})();