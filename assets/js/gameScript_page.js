function myMove() {  // move pokebal or candy or rock

    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 19);
    document.getElementById("myAnimation").style.display="block";
    function frame() {
        if (pos == 16) {
            clearInterval(id);
            document.getElementById("secondPicture").style.display="none";

// document.getElementById("secondPicture").rotate(20 * Math.PI / 180);
            document.getElementById('myAnimation').style.WebkitTransitionDuration="1s";
            document.getElementById('myAnimation').style.webkitTransform = 'rotate(40deg)';
// elem.setAttribute('style','bottom:'+(pos)+'px;');

        } else {
            pos++;
            elem.style.left = pos + '5px';

        }
    }
}

document.getElementById("myAnimation").style.display="none";

//#myAnimation    background-image: url("../img/used/pokeball_pokeball.svg");

// voor die prentjes voor het werp-voorwerp te vervangen
document.getElementById("pokeball").addEventListener("click", function(){

    document.getElementById("myAnimation").style.backgroundImage= "url('assets/img/used/pokeball_pokeball.svg')";
    myMove();
});
document.getElementById("rock").addEventListener("click", function(){
    document.getElementById("myAnimation").style.backgroundImage= "url('assets/img/used/rock.png')";
    myMove();
});
document.getElementById("candy").addEventListener("click", function(){

    document.getElementById("myAnimation").style.backgroundImage=" url('assets/img/used/candy_candy.svg')";
    myMove();
});