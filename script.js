var bruh = setInterval(tick,1000/(clicknum+1));
var clicknum = 0;

window.addEventListener('click',function() {clicknum++});

function tick() {
    var i;
    for (i=0;i<=42;i++) {
        var a = document.getElementById(i);
        var wid = screen.width;
        var high = screen.height;
        var s = 602*Math.random()*3;
        var r = Math.floor(Math.random()*360);
        var hueval = Math.random()*360
        var x = Math.floor(Math.random()*wid)-602;
        var y = Math.floor(Math.random()*high-602);

        var filt = 'contrast(' + Math.floor(Math.random()*100*clicknum+200) + '%) saturate(' + Math.floor(Math.random()*100*clicknum+200) + '%) hue-rotate(' + hueval + 'deg) opacity(' + Math.floor(Math.random()*50+50) + ')';

        a.style.marginLeft = x + 'px';
        a.style.marginTop = y + 'px';
        a.style.transform = 'rotate(' + r + 'deg)';
        a.style.width = s + 'px';
        a.style.height = s + 'px';
        a.style.filter = filt;
    }
}