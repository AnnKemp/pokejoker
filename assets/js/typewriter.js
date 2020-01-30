function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);
    document.getElementById("myAnimation").style.display="block";
    function frame() {
        if (pos == 180) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';

        }
    }
}
document.getElementById("myAnimation").style.display="none";