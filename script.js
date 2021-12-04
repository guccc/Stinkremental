var bruh = setInterval(tick,10);

function tick() {
    var a = document.getElementById('a');
    var wid = screen.width;
    var high = screen.height;
    var s = 602*Math.random()*3;
    var r = Math.floor(Math.random()*360);
    var x = Math.floor(Math.random()*wid);
    var y = Math.floor(Math.random()*high);

    if (x>(wid+602)) x = x - 602;
    if (y>(high+602)) y = y - 602;

    a.style.marginLeft = x + 'px';
    a.style.marginTop = y + 'px';
    a.style.transform = 'rotate(' + r + 'deg)';
    a.style.width = s + 'px';
    a.style.height = s + 'px';
}