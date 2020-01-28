(() => {
getOneliner();



    async function getOneliner() {

        let pullOneliner = await fetch("https://webknox-jokes.p.rapidapi.com/jokes/oneLiner");
        const oneLinerData = await pullOneliner.json();

})();