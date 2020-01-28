
var str = document.querySelector("p.insultText").innerHTML,
    i = 0,
    isTag,
    text;

(function type(lala) {
    text = str.slice(0, ++i);
    if (text === str) return;

    document.querySelector("p.insultText").innerHTML = text;
    document.querySelector("p.jokeText").innerHTML = text;
    document.querySelector("p.complimentText").innerHTML = text;
    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 100);
}());