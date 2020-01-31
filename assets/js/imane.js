const game = ()=> {

const startGame = () =>{
    const playBtn = document.querySelectorAll('guessButton');
    const guess = document.querySelector('.guessPokemon');
    const catchIt = document.querySelector('.catchIt');

    playBtn.addEventListener('click', () =>{
        guess.classList.add("fadeOut");
        catchIt.classList.add("fadeIn");
    });
};
startGame();

};
