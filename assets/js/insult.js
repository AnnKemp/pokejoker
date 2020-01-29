

async function insults(lala) {
    //fetch stream of data
    const pokemonImage = await fetch(`https://amused.api.stdlib.com/insult@1.0.0/`);
    const pImage = await pokemonImage.json();

    document.querySelector("#insultText").innerHTML =pImage;

    var str = document.querySelector("p.text").innerHTML,
        i = 0,
        isTag,
        text;

    (function type() {
        text = str.slice(0, ++i);
        if (text === str) return;

        document.querySelector("p.text").innerHTML = text;

        var char = text.slice(-1);
        if( char === '<' ) isTag = true;
        if( char === '>' ) isTag = false;

        if (isTag) return type();
        setTimeout(type, 100);
    }());

}

insults();
