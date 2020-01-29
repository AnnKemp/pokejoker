(() => {

    let Name;

  for(let i=0;i<4 ;i++) {

      document.getElementsByClassName("guessButton")[i].addEventListener("click", function(){

        Name = document.getElementsByClassName("guessButton")[i].innerHTML;

      checkName(Name);
      });

      }

      function checkName(Name){

          alert(Name);

          /*if(Name == ImageIndex.name) {
               document.querySelector(".guessPokemon").style.display = none;
             document.querySelector(".catchIt").style.display = block;
                  }*/
      }






















})();