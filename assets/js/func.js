(() => {

    let Name;

  for(let i=0;i<4 ;i++) {
      document.getElementById("lala").innerHTML="There is a wild pokemon rapidly coming towards you, wich one is it?";

      document.getElementsByClassName("guessButton")[i].addEventListener("click", function(){

        Name = document.getElementsByClassName("guessButton")[i].innerHTML;

      checkName(Name);
      });

      }

      function checkName(Name){

          // Retrieve data from session
          let ImageIndexName= sessionStorage.getItem("nameImage");


          //console.log(ImageIndexName);

        if(Name == ImageIndexName) {

            document.getElementById("lala").innerHTML=" ";

            document.querySelector(".guessPokemon").style.display="none";
            document.querySelector(".catchIt").style.display="block";
       }else{
            document.getElementById("lala").innerHTML="you missed!";
        }
      }






















})();