var tick = setInterval(doTick, 100);

function doTick() {
    beforeTick();
    duringTick();
    afterTick();
}


function beforeTick() {

}


function duringTick() {
    updateDistance();
}


function afterTick() {

}

//Visual Updates

function updateDistance() {
    //Metric Units of Measurement
    if (xDistance.lt("1e4")) {
        document.getElementById("xDistanceUnit").innerHTML = "m";
        document.getElementById("xDistance").innerHTML = xDistance.toString();
    }
    else if (xDistance.lt("1e7")) {
        document.getElementById("xDistanceUnit").innerHTML = "km";
        document.getElementById("xDistance").innerHTML = xDistance.div("1e3").toString();
    }
    else if (xDistance.lt("1e10")) {
        document.getElementById("xDistanceUnit").innerHTML = "Mm";
        document.getElementById("xDistance").innerHTML = xDistance.div("1e6").toString();
    }
    else if (xDistance.lt("1e13")) {
        document.getElementById("xDistanceUnit").innerHTML = "Gm";
        document.getElementById("xDistance").innerHTML = xDistance.div("1e9").toString();
    }
    else if (xDistance.lt("1e16")) {
        document.getElementById("xDistanceUnit").innerHTML = "Tm";
        document.getElementById("xDistance").innerHTML = xDistance.div("1e12").toString();
    }
    else if (xDistance.lt("1e19")) {
        document.getElementById("xDistanceUnit").innerHTML = "Pm";
        document.getElementById("xDistance").innerHTML = xDistance.div("1e15").toString();
    }
    else if (xDistance.lt("1e22")) {
        document.getElementById("xDistanceUnit").innerHTML = "Em";
        document.getElementById("xDistance").innerHTML = xDistance.div("1e18").toString();
    }
    else if (xDistance.lt("1e25")) {
        document.getElementById("xDistanceUnit").innerHTML = "Zm";
        document.getElementById("xDistance").innerHTML = xDistance.div("1e21").toString();
    }
    else if (xDistance.lt("1e28")) {
        document.getElementById("xDistanceUnit").innerText = "Ym";
        document.getElementById("xDistance").innerHTML = xDistance.div("1e24").toString();
    }
}

function updateVisibility() {
    //Main Tabs
    

    if (features.visible[0] === "true" && document.getElementById("milestonesTab").style.display!="block") {
        tabBarVisibility("milestonesTab");
    }

    //Pos Tabs
    if (features.visible[1] === "true" && document.getElementById("veloTab").style.display!="block") {
        tabBarVisibility("dispTab");
        tabBarVisibility("veloTab");
    }
    if (features.visible[2] === "true" && document.getElementById("acceTab").style.display!="block") {
        tabBarVisibility("acceTab");
    }
    if (features.visible[3] === "true" && document.getElementById("jerkTab").style.display!="block") {
        tabBarVisibility("jerkTab");
    }
    if (features.visible[4] === "true" && document.getElementById("snapTab").style.display!="block") {
        tabBarVisibility("snapTab");
    }
    if (features.visible[5] === "true" && document.getElementById("cracTab").style.display!="block") {
        tabBarVisibility("cracTab");
    }
    if (features.visible[6] === "true" && document.getElementById("popTab").style.display!="block") {
        tabBarVisibility("popTab");
    }
    if (features.visible[7] === "true" && document.getElementById("lockTab").style.display!="block") {
        tabBarVisibility("lockTab");
    }
    if (features.visible[8] === "true" && document.getElementById("dropTab").style.display!="block") {
        tabBarVisibility("dropTab");
    }
    
    //Milestone Sets

}

function tabBarVisibility(tabName) {
    document.getElementById(tabName).style.display="block";
    document.getElementById(tabName+"Cell").style.display="table-cell";
}