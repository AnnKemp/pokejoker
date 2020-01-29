(() => {

    let Name;

  for(let i=0;i<4 ;i++) {


      document.getElementsByClassName("guessButton")[i].addEventListener("click", function(){

        document.getElementById("lala").innerHTML="There is a wild pokemon rapidly coming towards you, wich one is it?";

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
            document.querySelector("#pokeId").innerHTML=Name;

       }else{
            document.getElementById("lala").innerHTML="you missed!";

            let myVar;

            function myFunction() {
                myVar = setTimeout(bannerFunc, 1300);
            }
            function bannerFunc() {
                document.getElementById("lala").innerHTML="There is a wild pokemon rapidly coming towards you, wich one is it?";
            }

            myFunction();
        }
      }






















})();