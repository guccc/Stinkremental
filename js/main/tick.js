var tickInterval = 1000;
var iterateTick = setInterval(tick, tickInterval);
var iterateVisualUpdate = setInterval(visualUpdate, 100);

var spacePreTick;
var spacePostTick;
var spaceCovered;

function tick() {
    doBeforeTick();
    doDuringTick();
    doAfterTick();
}

function doBeforeTick() {
    spacePreTick = spacePostTick;
}

function doDuringTick() {
    // Updating Position Derivatives

    if (features.wAxis) {
        if (features.wVelocity) wDisplacement = wDisplacement.add(wVelocity);
        if (features.wAcceleration) wVelocity = wVelocity.add(wAcceleration);
        if (features.wJerk) wAcceleration = wAcceleration.add(wJerk);
        if (features.wSnap) wJerk = wJerk.add(wSnap);
        if (features.wCrackle) wSnap = wSnap.add(wCrackle);
        if (features.wPop) wCrackle = wCrackle.add(wPop);
        if (features.wLock) wPop = wPop.add(wLock);
        if (features.wDrop) wLock = wLock.add(wDrop);
    }
    if (features.xAxis) {
        if (features.xVelocity) xDisplacement = xDisplacement.add(xVelocity);
        if (features.xAcceleration) xVelocity = xVelocity.add(xAcceleration);
        if (features.xJerk) xAcceleration = xAcceleration.add(xJerk);
        if (features.xSnap) xJerk = xJerk.add(xSnap);
        if (features.xCrackle) xSnap = xSnap.add(xCrackle);
        if (features.xPop) xCrackle = xCrackle.add(xPop);
        if (features.xLock) xPop = xPop.add(xLock);
        if (features.xDrop) xLock = xLock.add(xDrop);
    }
    if (features.yAxis) {
        if (features.yVelocity) yDisplacement = yDisplacement.add(yVelocity);
        if (features.yAcceleration) yVelocity = yVelocity.add(yAcceleration);
        if (features.yJerk) yAcceleration = yAcceleration.add(yJerk);
        if (features.ySnap) yJerk = yJerk.add(ySnap);
        if (features.yCrackle) ySnap = ySnap.add(yCrackle);
        if (features.yPop) yCrackle = yCrackle.add(yPop);
        if (features.yLock) yPop = yPop.add(yLock);
        if (features.yDrop) yLock = yLock.add(yDrop);
    }
    if (features.zAxis) {
        if (features.zVelocity) zDisplacement = zDisplacement.add(zVelocity);
        if (features.zAcceleration) zVelocity = zVelocity.add(zAcceleration);
        if (features.zJerk) zAcceleration = zAcceleration.add(zJerk);
        if (features.zSnap) zJerk = zJerk.add(zSnap);
        if (features.zCrackle) zSnap = zSnap.add(zCrackle);
        if (features.zPop) zCrackle = zCrackle.add(zPop);
        if (features.zLock) zPop = zPop.add(zLock);
        if (features.zDrop) zLock = zLock.add(zDrop);
    }
}

function doAfterTick() {
    if (features.wAxis) spacePostTick = wDisplacement.mul(zDisplacement).mul(yDisplacement).mul(xDisplacement);
    else if (features.zAxis) spacePostTick = zDisplacement.mul(yDisplacement).mul(xDisplacement);
    else if (features.yAxis) spacePostTick = yDisplacement.mul(xDisplacement);
    else if (features.xAxis) spacePostTick = xDisplacement;
    spaceCovered = spacePostTick.sub(spacePreTick);
    if (features.elements) dropElements();
    milestoneCheck();
}


// Visual Update

function visualUpdate() {
    // x-Axis Status Bar
    document.getElementById("xDisplacement").innerHTML = xDisplacement.toString().replace("+","");
    document.getElementById("xVelocity").innerHTML = xVelocity.toString().replace("+","");
    document.getElementById("xAcceleration").innerHTML = xAcceleration.toString().replace("+","");
    document.getElementById("xJerk").innerHTML = xJerk.toString().replace("+","");
    document.getElementById("xSnap").innerHTML = xSnap.toString().replace("+","");
    document.getElementById("xCrackle").innerHTML = xCrackle.toString().replace("+","");
    document.getElementById("xPop").innerHTML = xPop.toString().replace("+","");
    document.getElementById("xLock").innerHTML = xLock.toString().replace("+","");
    document.getElementById("xDrop").innerHTML = xDrop.toString().replace("+","");
    
    // y-Axis Status Bar
    document.getElementById("yDisplacement").innerHTML = yDisplacement.toString().replace("+","");
    document.getElementById("yVelocity").innerHTML = yVelocity.toString().replace("+","");
    document.getElementById("yAcceleration").innerHTML = yAcceleration.toString().replace("+","");
    document.getElementById("yJerk").innerHTML = yJerk.toString().replace("+","");
    document.getElementById("ySnap").innerHTML = ySnap.toString().replace("+","");
    document.getElementById("yCrackle").innerHTML = yCrackle.toString().replace("+","");
    document.getElementById("yPop").innerHTML = yPop.toString().replace("+","");
    document.getElementById("yLock").innerHTML = yLock.toString().replace("+","");
    document.getElementById("yDrop").innerHTML = yDrop.toString().replace("+","");

    // z-Axis Status Bar
    document.getElementById("zDisplacement").innerHTML = zDisplacement.toString().replace("+","");
    document.getElementById("zVelocity").innerHTML = zVelocity.toString().replace("+","");
    document.getElementById("zAcceleration").innerHTML = zAcceleration.toString().replace("+","");
    document.getElementById("zJerk").innerHTML = zJerk.toString().replace("+","");
    document.getElementById("zSnap").innerHTML = zSnap.toString().replace("+","");
    document.getElementById("zCrackle").innerHTML = zCrackle.toString().replace("+","");
    document.getElementById("zPop").innerHTML = zPop.toString().replace("+","");
    document.getElementById("zLock").innerHTML = zLock.toString().replace("+","");
    document.getElementById("zDrop").innerHTML = zDrop.toString().replace("+","");

    // w-Axis Status Bar
    document.getElementById("wDisplacement").innerHTML = wDisplacement.toString().replace("+","");
    document.getElementById("wVelocity").innerHTML = wVelocity.toString().replace("+","");
    document.getElementById("wAcceleration").innerHTML = wAcceleration.toString().replace("+","");
    document.getElementById("wJerk").innerHTML = wJerk.toString().replace("+","");
    document.getElementById("wSnap").innerHTML = wSnap.toString().replace("+","");
    document.getElementById("wCrackle").innerHTML = wCrackle.toString().replace("+","");
    document.getElementById("wPop").innerHTML = wPop.toString().replace("+","");
    document.getElementById("wLock").innerHTML = wLock.toString().replace("+","");
    document.getElementById("wDrop").innerHTML = wDrop.toString().replace("+","");

    // x-Axis Prestige Quantities
    if (xDisplacement.gte(velocityPrestigeRequirement)) document.getElementById("xVelocityOnPrestige").innerHTML = xDisplacement.div(velocityPrestigeRequirement).logBase(2).add(1).floor().toString().replace("+","");
    else document.getElementById("xVelocityOnPrestige").innerHTML = "0";

    if (xVelocity.gte(accelerationPrestigeRequirement)) document.getElementById("xAccelerationOnPrestige").innerHTML = xVelocity.div(accelerationPrestigeRequirement).logBase(3).add(1).floor().toString().replace("+","");
    else document.getElementById("xAccelerationOnPrestige").innerHTML = "0";

    if (xAcceleration.gte(jerkPrestigeRequirement)) document.getElementById("xJerkOnPrestige").innerHTML = xAcceleration.div(jerkPrestigeRequirement).logBase(4).add(1).floor().toString().replace("+","");
    else document.getElementById("xJerkOnPrestige").innerHTML = "0";

    if (xJerk.gte(snapPrestigeRequirement)) document.getElementById("xSnapOnPrestige").innerHTML = xJerk.div(snapPrestigeRequirement).logBase(5).add(1).floor().toString().replace("+","");
    else document.getElementById("xSnapOnPrestige").innerHTML = "0";

    if (xSnap.gte(cracklePrestigeRequirement)) document.getElementById("xCrackleOnPrestige").innerHTML = xSnap.div(cracklePrestigeRequirement).logBase(6).add(1).floor().toString().replace("+","");
    else document.getElementById("xCrackleOnPrestige").innerHTML = "0";

    if (xCrackle.gte(popPrestigeRequirement)) document.getElementById("xPopOnPrestige").innerHTML = xCrackle.div(popPrestigeRequirement).logBase(7).add(1).floor().toString().replace("+","");
    else document.getElementById("xPopOnPrestige").innerHTML = "0";

    if (xPop.gte(lockPrestigeRequirement)) document.getElementById("xLockOnPrestige").innerHTML = xPop.div(lockPrestigeRequirement).logBase(8).add(1).floor().toString().replace("+","");
    else document.getElementById("xLockOnPrestige").innerHTML = "0";

    if (xLock.gte(dropPrestigeRequirement)) document.getElementById("xDropOnPrestige").innerHTML = xLock.div(dropPrestigeRequirement).logBase(9).add(1).floor().toString().replace("+","");
    else document.getElementById("xDropOnPrestige").innerHTML = "0";


    // Element Storage Quantities
    if (document.getElementById('elementTabButton').classList.contains('activeTab')) {
        var i;
        for (i=0;i<118;i++) {
            let id = 'playerStored' + elements.name[i];
            document.getElementById(id).innerHTML = playerStorage[i].toString().replace("+","");
        }
    }
    
}