(() => {
    //--------------------------------------------- the intro screen ----------------------------------------------------------------------
    // the intro-screen:
    // hide page1
    document.querySelector(".guessPokemon").style.display='none';

    // change the background picture to the pink bubbly one
    document.getElementsByTagName("body")[0].style.backgroundImage="url(https://i.pinimg.com/originals/31/22/9d/31229d5403b0065a7fb0d5fbb43e5c92.gif)";

    // turn the background music on for the intro
    const src="assets/sounds/pokeMusic.mp3";

    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
            this.sound.play();
        }
       // this.stop = function(){
         //   this.sound.pause();
      //  }
    }
    sound(src);
    //-------------------------------------------- end intro screen --------------------------------------------------------------------------

    // add eventlistener on button and on click
    document.getElementById('introButton').addEventListener("click", function (){

        document.getElementById("lala").innerHTML="There is a wild pokemon rapidly coming towards you, wich one is it?";
    //autoplay="false" // dat werk
        // show screen 1
        document.querySelector(".guessPokemon").style.display='flex';
        // hide the intro screen
        document.querySelector("#sectionIntro").style.display="none";
        // change the background image to the gray landscape
        document.getElementsByTagName("body")[0].style.backgroundImage="url(assets/img/used/bg_bg.svg)";

    // schakelt het geluid uit

    //const audio=document.getElementById("iframeAudio");
   // audio.setAttribute("autoplay", "");
   //audio.removeAttribute("autoplay");
 });

let Name;

// a loop to select the four buttons on the startpage and add an eventlisteners (click event) on them
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
            // adjust name of pokemon in the second screen
            document.querySelector("#pokeId").innerHTML=Name;

            document.querySelector(".chooseItem").style.display="none";
            document.querySelector(".catchIt").style.display="flex";
            document.querySelector(".guessPokemon").style.display='none';

            // hide weapons temporaly
            let weapon;
            // after one second the weapons appear
            function showWeapons() {
                weapon = setTimeout(weaponFunc, 10000);
            }
            function weaponFunc() {
                document.querySelector(".chooseItem").style.display="block";
                // and the insults disappear
                document.querySelector("#insultText").style.display="none";
            }
            showWeapons();

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
})();
