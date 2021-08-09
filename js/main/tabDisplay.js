document.getElementById("positionTabButton").click();
document.getElementById("xAxisTabButton").click();
document.getElementById("xDisplacementPosTabButton").click();
document.getElementById("yDisplacementPosTabButton").click();
document.getElementById("zDisplacementPosTabButton").click();
document.getElementById("wDisplacementPosTabButton").click();


// Main Tab Bar
function openTab(evt, tabName) {
    var i, contents, links;

    contents = document.getElementsByClassName("mainTab");
    for (i=0;i<contents.length;i++) {
        contents[i].style.display="none";
    }

    links = document.getElementsByClassName("mainTabButton");
    for (i=0;i<links.length;i++) {
        links[i].className=links[i].className.replace(" activeTab", "");
    }

    document.getElementById(tabName).style.display="block";
    evt.currentTarget.className+=" activeTab";
}

// Axis Tab Bar
function openAxisTab(evt, tabName) {
    var i, contents, links;

    contents = document.getElementsByClassName("axisTab");
    for (i=0;i<contents.length;i++) {
        contents[i].style.display="none";
    }

    links = document.getElementsByClassName("axisTabButton");
    for (i=0;i<links.length;i++) {
        links[i].className=links[i].className.replace(" activeAxisTab","");
    }

    document.getElementById(tabName).style.display="block";
    evt.currentTarget.className+=" activeAxisTab";
}

// x-Axis Tab Bar
function xPosOpenTab(evt, tabName) {
    var i, contents, links;

    contents = document.getElementsByClassName("xPosTab");
    for (i=0;i<contents.length;i++) {
        contents[i].style.display="none"
    }

    links = document.getElementsByClassName("xPosTabButton");
    for (i=0;i<links.length;i++) {
        links[i].className=links[i].className.replace(" xActivePosTab","");
    }

    document.getElementById(tabName).style.display="block";
    evt.currentTarget.className+=" xActivePosTab";
}

// y-Axis Tab Bar
function yPosOpenTab(evt, tabName) {
    var i, contents, links;

    contents = document.getElementsByClassName("yPosTab");
    for (i=0;i<contents.length;i++) {
        contents[i].style.display="none"
    }

    links = document.getElementsByClassName("yPosTabButton");
    for (i=0;i<links.length;i++) {
        links[i].className=links[i].className.replace(" yActivePosTab","");
    }

    document.getElementById(tabName).style.display="block";
    evt.currentTarget.className+=" yActivePosTab";
}

// z-Axis Tab Bar
function zPosOpenTab(evt, tabName) {
    var i, contents, links;

    contents = document.getElementsByClassName("zPosTab");
    for (i=0;i<contents.length;i++) {
        contents[i].style.display="none"
    }

    links = document.getElementsByClassName("zPosTabButton");
    for (i=0;i<links.length;i++) {
        links[i].className=links[i].className.replace(" zActivePosTab","");
    }

    document.getElementById(tabName).style.display="block";
    evt.currentTarget.className+=" zActivePosTab";
}

// w-Axis Tab Bar
function wPosOpenTab(evt, tabName) {
    var i, contents, links;

    contents = document.getElementsByClassName("wPosTab");
    for (i=0;i<contents.length;i++) {
        contents[i].style.display="none"
    }

    links = document.getElementsByClassName("wPosTabButton");
    for (i=0;i<links.length;i++) {
        links[i].className=links[i].className.replace(" wActivePosTab","");
    }

    document.getElementById(tabName).style.display="block";
    evt.currentTarget.className+=" wActivePosTab";
}