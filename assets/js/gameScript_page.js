// Javascript code voor animatie heen en weer van figure op pagina 2
document.getElementById("secondPicture").style.animation = "pokeMove 2s alternate infinite";
document.getElementById("secondPicture").style.WebkitAnimation = "pokeMove 2s alternate infinite"; // Code for Safari

function myMove() {  // move pokebal or candy or rock

    var elem = document.getElementById("myAnimation");
    var pos = 15;
    var id = setInterval(frame, 19);
    document.getElementById("myAnimation").style.display="block";
    function frame() {
        if (pos == 25) { // when on the same place ball and pokemon . . .
            // remove interval
            clearInterval(id);

            // call 'die' in the css and start the animation  // make pokemon dissapear
            document.getElementById("secondPicture").style.animation = "die 2s ease-in";
            document.getElementById("secondPicture").style.WebkitAnimation = "die 2s ease-in"; // Code for Safari 4.0 - 8.0

            //animation of the ball or candy or rock

            document.getElementById('myAnimation').style.WebkitTransitionDuration="1s";
            document.getElementById('myAnimation').style.webkitTransform = 'rotate(40deg)';
// elem.setAttribute('style','bottom:'+(pos)+'px;');

        } else {
            // bal moves to the right
            pos++;
            elem.style.left = pos + '5px';
        }
    }
}

document.getElementById("myAnimation").style.display="none";

// onclick on word/name change throw-item into bal or candy or rock and start function myMove

document.getElementById("pokeball").addEventListener("click", function(){

    document.getElementById("myAnimation").style.backgroundImage= "url('assets/img/used/pokeball_pokeball.svg')";
    myMove();
    });
document.getElementById("rock").addEventListener("click", function(){
    document.getElementById("myAnimation").style.backgroundImage= "url('assets/img/used/rock.png')";
    myMove();
});
document.getElementById("candy").addEventListener("click", function(){

    document.getElementById("myAnimation").style.backgroundImage="url('assets/img/used/candy_candy.svg')";
    myMove();
});