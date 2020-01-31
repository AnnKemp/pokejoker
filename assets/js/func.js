let Name;
const guess = document.querySelector(".guessPokemon");
const catchIt = document.querySelector('.catchIt');
const Intro = document.querySelector('.Intro');

(() => {

// a loop to select the four buttons on the startpage and add an eventlisteners (click event) on them

Intro.classList.add('fadeIn');
guess.style.display='none';
catchIt.style.display='none';

document.querySelector('.introButton').addEventListener("click", function (){
    document.querySelector('.body').style.background = 'url("../assets/img/used/bg_bg.svg")';
    Intro.classList.add('fadeOut');
    Intro.style.display='none';
    guess.classList.add('fadeIn');
    guess.style.display='flex';

 });




  for(let i=0;i<4 ;i++) {
        // if you click on one of the four buttons you call a nameless function
      document.getElementsByClassName("guessButton")[i].addEventListener("click", function(){

        document.getElementById("lala").innerHTML="There is a wild pokemon rapidly coming towards you, wich one is it?";
        // the name on the clicked button, which is dynamically generated is stored in let Name
        Name = document.getElementsByClassName("guessButton")[i].innerHTML;

        // call function checkName and give the name of the clicked button as parameter/value to the function
      checkName(Name);
      });
      }

      function checkName(Name){

          // Retrieve data from session
          let ImageIndexName= sessionStorage.getItem("nameImage");

          // compare if the name on the clicked button and the name of the pokemon are equal
        if(Name === ImageIndexName) {  // so Yes/true
            document.getElementById("lala").innerHTML=" ";
            guess.classList.add('fadeOut');
            catchIt.classList.add("fadeIn");

            // adjust name of pokemon in the second screen
            document.querySelector("#pokeId").innerHTML=Name;
            // hide weapons temporaly
            document.querySelector(".chooseItem").style.display="none";

            let weapon;
            // after one second the weapons appear
            function showWeapons() {
                weapon = setTimeout(weaponFunc, 10000);
            }
            function weaponFunc() {
                document.querySelector(".chooseItem").style.display="block";
                // and the insults dissapear
                document.querySelector("#insultText").style.display="none";
            }
            showWeapons();
            // this doesn't work
           // document.querySelector("#secondPicture").addEventListener("click", function(){
            //    document.querySelector("#insultText").style.display="block";

           // });
            // voor audio na knopklik af te spelen id moet nog aangepast worden
            //var x = document.getElementById("myAudio");
             //   x.play();


       }else{
            document.getElementById("lala").innerHTML="You missed !...";

            let myVar;

                 function myFunction() {
                      myVar = setTimeout(bannerFunc, 1000);
                 }
                    function bannerFunc() {
                        document.getElementById("lala").innerHTML="There is a wild pokemon rapidly coming towards you, wich one is it?";
                    }
                  myFunction();
             }
      }
})()
