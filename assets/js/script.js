(() => {
    // variabelen initialiseren
    let ImageIndex;

    document.getElementsByTagName("body")[0].addEventListener("load", getPokemon);
//fetch JSON
async function getPokemon() {

//fetch stream of data
    const pokemonPlain = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`);

//convert to json
    const pObject = await pokemonPlain.json();
    console.log(pObject);

    let randomSprite = [];

// to random select 4 images by id
    for (i = 1; i <= 4; i++) {
        randomSprite[i] = Math.floor(Math.random() * 151) + 1; // returns a random integer from 1 to 151
      console.log( randomSprite[i] );
    }

    /*  for (i = 0; i < 4; i++) {
          document.querySelector(".guessButton")[i].innerHTML ="image_"+i.name;
      }*/
    let randomGetal = Math.floor(Math.random() * 5);
    console.log(randomGetal);
    ImageIndex = randomSprite[randomGetal]; // to select the image to show
    console.log(ImageIndex);
    return ImageIndex;
}

    console.log(ImageIndex);

  /*  async function getPokemonImage(name) {
        //fetch stream of data
        const pokemonImage = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pImage = await pokemonImage.json();
        console.log(pImage);
    }

    getPokemonImage(ImageIndex);
    //ImageIndex.
   // PokemonIcon
   // pObject.sprites.front_default;

    /* function same(randomSprite[i]) {
     return randomSprite[i] !== ImageValue;
 }
 function myFunction() {
     document.getElementsByClassName("namePoke");innerHTML= randomSprite.filter(same);
 }*/

    // voor de buttons
    //   document.querySelector(".guessButton")[i].innerHTML = item[i].name;


getPokemon();

//});
})();