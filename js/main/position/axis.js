var velocityPrestigeRequirement = new OmegaNum(1000);
var accelerationPrestigeRequirement = new OmegaNum(10000);
var jerkPrestigeRequirement = new OmegaNum(10000000);
var snapPrestigeRequirement = new OmegaNum(100000000000);
var cracklePrestigeRequirement = new OmegaNum(10000000);
var popPrestigeRequirement = new OmegaNum(100000);
var lockPrestigeRequirement = new OmegaNum(1000);
var dropPrestigeRequirement = new OmegaNum(100);

function displacementClick(axis) {
    if (axis == 'x') xDisplacement = xDisplacement.add(xMovementIncrement);
    else if (axis == 'y') yDisplacement = yDisplacement.add(yMovementIncrement);
    else if (axis == 'z') zDisplacement = zDisplacement.add(zMovementIncrement);
    else if (axis == 'w') wDisplacement = wDisplacement.add(wMovementIncrement);
}

function velocityReset(axis) {
    var axisVelocity, axisDisplacement;
    if (axis == 'x') {
        axisDisplacement = xDisplacement;
        axisVelocity = xVelocity;
    }
    else if (axis == 'y') {
        axisDisplacement = yDisplacement;
        axisVelocity = yVelocity;
    }
    else if (axis == 'z') {
        axisDisplacement = zDisplacement;
        axisVelocity = zVelocity;
    }
    else if (axis == 'w') {
        axisDisplacement = wDisplacement;
        axisVelocity = wVelocity;
    }

    if (axisDisplacement.gte(velocityPrestigeRequirement)) {
        axisVelocity = axisVelocity.add(axisDisplacement.div(velocityPrestigeRequirement).logBase(2).add(1).floor());
        if (axis == 'x') {
            xDisplacement = new OmegaNum(0);
            xVelocity = axisVelocity;
        }
        else if (axis == 'y') {
            yDisplacement = new OmegaNum(0);
            yVelocity = axisVelocity;
        }
        else if (axis == 'z') {
            zDisplacement = new OmegaNum(0);
            zVelocity = axisVelocity;
        }
        else if (axis == 'w') {
            wDisplacement = new OmegaNum(0);
            wVelocity = axisVelocity;
        }
    }
}

function accelerationReset(axis) {
    var axisAcceleration, axisVelocity;
    if (axis == 'x') {
        axisAcceleration = xAcceleration;
        axisVelocity = xVelocity;
    }
    else if (axis == 'y') {
        axisAcceleration = yAcceleration;
        axisVelocity = yVelocity;
    }
    else if (axis == 'z') {
        axisAcceleration = zAcceleration;
        axisVelocity = zVelocity;
    }
    else if (axis == 'w') {
        axisAcceleration = wAcceleration;
        axisVelocity = wVelocity;
    }

    if (axisVelocity.gte(accelerationPrestigeRequirement)) {
        axisAcceleration = axisAcceleration.add(axisVelocity.div(accelerationPrestigeRequirement).logBase(3).add(1).floor());
        if (axis == 'x') {
            xDisplacement = new OmegaNum(0);
            xVelocity = new OmegaNum(0);
            xAcceleration = axisAcceleration;
        }
        else if (axis == 'y') {
            yDisplacement = new OmegaNum(0);
            yVelocity = new OmegaNum(0);
            yAcceleration = axisAcceleration;
        }
        else if (axis == 'z') {
            zDisplacement = new OmegaNum(0);
            zVelocity = new OmegaNum(0);
            zAcceleration = axisAcceleration;
        }
        else if (axis == 'w') {
            wDisplacement = new OmegaNum(0);
            wVelocity = new OmegaNum(0);
            wAcceleration = axisAcceleration;
        }
    }
}

function jerkReset(axis) {
    var axisAcceleration, axisJerk;
    if (axis == 'x') {
        axisAcceleration = xAcceleration;
        axisJerk = xJerk;
    }
    else if (axis == 'y') {
        axisAcceleration = yAcceleration;
        axisJerk = yJerk;
    }
    else if (axis == 'z') {
        axisAcceleration = zAcceleration;
        axisJerk = zJerk;
    }
    else if (axis == 'w') {
        axisAcceleration = wAcceleration;
        axisJerk = wJerk;
    }

    if (axisAcceleration.gte(jerkPrestigeRequirement)) {
        axisJerk = axisJerk.add(axisAcceleration.div(jerkPrestigeRequirement).logBase(4).add(1).floor());
        if (axis == 'x') {
            xDisplacement = new OmegaNum(0);
            xVelocity = new OmegaNum(0);
            xAcceleration = new OmegaNum(0);
            xJerk = axisJerk;
        }
        else if (axis == 'y') {
            yDisplacement = new OmegaNum(0);
            yVelocity = new OmegaNum(0);
            yAcceleration = new OmegaNum(0);
            yJerk = axisJerk;
        }
        else if (axis == 'z') {
            zDisplacement = new OmegaNum(0);
            zVelocity = new OmegaNum(0);
            zAcceleration = new OmegaNum(0);
            zJerk = axisJerk;
        }
        else if (axis == 'w') {
            wDisplacement = new OmegaNum(0);
            wVelocity = new OmegaNum(0);
            wAcceleration = new OmegaNum(0);
            wJerk = axisJerk;
        }
    }
}

function snapReset(axis) {
    var axisSnap, axisJerk;
    if (axis == 'x') {
        axisSnap = xSnap;
        axisJerk = xJerk;
    }
    else if (axis == 'y') {
        axisSnap = ySnap;
        axisJerk = yJerk;
    }
    else if (axis == 'z') {
        axisSnap = zSnap;
        axisJerk = zJerk;
    }
    else if (axis == 'w') {
        axisSnap = wSnap;
        axisJerk = wJerk;
    }

    if (axisJerk.gte(snapPrestigeRequirement)) {
        axisSnap = axisSnap.add(axisJerk.div(snapPrestigeRequirement).logBase(5).add(1).floor());
        if (axis == 'x') {
            xDisplacement = new OmegaNum(0);
            xVelocity = new OmegaNum(0);
            xAcceleration = new OmegaNum(0);
            xJerk = new OmegaNum(0);
            xSnap = axisSnap;
        }
        else if (axis == 'y') {
            yDisplacement = new OmegaNum(0);
            yVelocity = new OmegaNum(0);
            yAcceleration = new OmegaNum(0);
            yJerk = new OmegaNum(0);
            ySnap = axisSnap;
        }
        else if (axis == 'z') {
            zDisplacement = new OmegaNum(0);
            zVelocity = new OmegaNum(0);
            zAcceleration = new OmegaNum(0);
            zJerk = new OmegaNum(0);
            zSnap = axisSnap;
        }
        else if (axis == 'w') {
            wDisplacement = new OmegaNum(0);
            wVelocity = new OmegaNum(0);
            wAcceleration = new OmegaNum(0);
            wJerk = new OmegaNum(0);
            wSnap = axisSnap;
        }
    }
}

function crackleReset(axis) {
    var axisSnap, axisCrackle;
    if (axis == 'x') {
        axisSnap = xSnap;
        axisCrackle = xCrackle;
    }
    else if (axis == 'y') {
        axisSnap = ySnap;
        axisCrackle = yCrackle;
    }
    else if (axis == 'z') {
        axisSnap = zSnap;
        axisCrackle = zCrackle;
    }
    else if (axis == 'w') {
        axisSnap = wSnap;
        axisCrackle = wCrackle;
    }

    if (axisSnap.gte(cracklePrestigeRequirement)) {
        axisCrackle = axisCrackle.add(axisSnap.div(cracklePrestigeRequirement).logBase(6).add(1).floor());
        if (axis == 'x') {
            xDisplacement = new OmegaNum(0);
            xVelocity = new OmegaNum(0);
            xAcceleration = new OmegaNum(0);
            xJerk = new OmegaNum(0);
            xSnap = new OmegaNum(0);
            xCrackle = axisCrackle;
        }
        else if (axis == 'y') {
            yDisplacement = new OmegaNum(0);
            yVelocity = new OmegaNum(0);
            yAcceleration = new OmegaNum(0);
            yJerk = new OmegaNum(0);
            ySnap = new OmegaNum(0);
            yCrackle = axisCrackle;
        }
        else if (axis == 'z') {
            zDisplacement = new OmegaNum(0);
            zVelocity = new OmegaNum(0);
            zAcceleration = new OmegaNum(0);
            zJerk = new OmegaNum(0);
            zSnap = new OmegaNum(0);
            zCrackle = axisCrackle;
        }
        else if (axis == 'w') {
            wDisplacement = new OmegaNum(0);
            wVelocity = new OmegaNum(0);
            wAcceleration = new OmegaNum(0);
            wJerk = new OmegaNum(0);
            wSnap = new OmegaNum(0);
            wCrackle = axisCrackle;
        }
    }
}

function popReset(axis) {
    var axisPop, axisCrackle;
    if (axis == 'x') {
        axisPop = xPop;
        axisCrackle = xCrackle;
    }
    else if (axis == 'y') {
        axisPop = yPop;
        axisCrackle = yCrackle;
    }
    else if (axis == 'z') {
        axisPop = zPop;
        axisCrackle = zCrackle;
    }
    else if (axis == 'w') {
        axisPop = wPop;
        axisCrackle = wCrackle;
    }

    if (axisCrackle.gte(popPrestigeRequirement)) {
        axisPop = axisPop.add(axisCrackle.div(popPrestigeRequirement).logBase(7).add(1).floor());
        if (axis == 'x') {
            xDisplacement = new OmegaNum(0);
            xVelocity = new OmegaNum(0);
            xAcceleration = new OmegaNum(0);
            xJerk = new OmegaNum(0);
            xSnap = new OmegaNum(0);
            xCrackle = new OmegaNum(0);
            xPop = axisPop;
        }
        else if (axis == 'y') {
            yDisplacement = new OmegaNum(0);
            yVelocity = new OmegaNum(0);
            yAcceleration = new OmegaNum(0);
            yJerk = new OmegaNum(0);
            ySnap = new OmegaNum(0);
            yCrackle = new OmegaNum(0);
            yPop = axisPop;
        }
        else if (axis == 'z') {
            zDisplacement = new OmegaNum(0);
            zVelocity = new OmegaNum(0);
            zAcceleration = new OmegaNum(0);
            zJerk = new OmegaNum(0);
            zSnap = new OmegaNum(0);
            zCrackle = new OmegaNum(0);
            zPop = axisPop;
        }
        else if (axis == 'w') {
            wDisplacement = new OmegaNum(0);
            wVelocity = new OmegaNum(0);
            wAcceleration = new OmegaNum(0);
            wJerk = new OmegaNum(0);
            wSnap = new OmegaNum(0);
            wCrackle = new OmegaNum(0);
            wPop = axisPop;
        }
    }
}

function lockReset(axis) {
    var axisPop, axisLock;
    if (axis == 'x') {
        axisPop = xPop;
        axisLock = xLock;
    }
    else if (axis == 'y') {
        axisPop = yPop;
        axisLock = yLock;
    }
    else if (axis == 'z') {
        axisPop = zPop;
        axisLock = zLock;
    }
    else if (axis == 'w') {
        axisPop = wPop;
        axisLock = wLock;
    }

    if (axisPop.gte(lockPrestigeRequirement)) {
        axisLock = axisLock.add(axisPop.div(lockPrestigeRequirement).logBase(8).add(1).floor());
        if (axis == 'x') {
            xDisplacement = new OmegaNum(0);
            xVelocity = new OmegaNum(0);
            xAcceleration = new OmegaNum(0);
            xJerk = new OmegaNum(0);
            xSnap = new OmegaNum(0);
            xCrackle = new OmegaNum(0);
            xPop = new OmegaNum(0);
            xLock = axisLock;
        }
        else if (axis == 'y') {
            yDisplacement = new OmegaNum(0);
            yVelocity = new OmegaNum(0);
            yAcceleration = new OmegaNum(0);
            yJerk = new OmegaNum(0);
            ySnap = new OmegaNum(0);
            yCrackle = new OmegaNum(0);
            yPop = new OmegaNum(0);
            yLock = axisLock;
        }
        else if (axis == 'z') {
            zDisplacement = new OmegaNum(0);
            zVelocity = new OmegaNum(0);
            zAcceleration = new OmegaNum(0);
            zJerk = new OmegaNum(0);
            zSnap = new OmegaNum(0);
            zCrackle = new OmegaNum(0);
            zPop = new OmegaNum(0);
            zLock = axisLock;
        }
        else if (axis == 'w') {
            wDisplacement = new OmegaNum(0);
            wVelocity = new OmegaNum(0);
            wAcceleration = new OmegaNum(0);
            wJerk = new OmegaNum(0);
            wSnap = new OmegaNum(0);
            wCrackle = new OmegaNum(0);
            wPop = new OmegaNum(0);
            wLock = axisLock;
        }
    }
}

function dropReset(axis) {
    var axisDrop, axisLock;
    if (axis == 'x') {
        axisDrop = xDrop;
        axisLock = xLock;
    }
    else if (axis == 'y') {
        axisDrop = yDrop;
        axisLock = yLock;
    }
    else if (axis == 'z') {
        axisDrop = zDrop;
        axisLock = zLock;
    }
    else if (axis == 'w') {
        axisDrop = wDrop;
        axisLock = wLock;
    }

    if (axisLock.gte(dropPrestigeRequirement)) {
        axisDrop = axisDrop.add(axisLock.div(dropPrestigeRequirement).logBase(9).add(1).floor());
        if (axis == 'x') {
            xDisplacement = new OmegaNum(0);
            xVelocity = new OmegaNum(0);
            xAcceleration = new OmegaNum(0);
            xJerk = new OmegaNum(0);
            xSnap = new OmegaNum(0);
            xCrackle = new OmegaNum(0);
            xPop = new OmegaNum(0);
            xLock = new OmegaNum(0);
            xDrop = axisDrop;
        }
        else if (axis == 'y') {
            yDisplacement = new OmegaNum(0);
            yVelocity = new OmegaNum(0);
            yAcceleration = new OmegaNum(0);
            yJerk = new OmegaNum(0);
            ySnap = new OmegaNum(0);
            yCrackle = new OmegaNum(0);
            yPop = new OmegaNum(0);
            yLock = new OmegaNum(0);
            yDrop = axisDrop;
        }
        else if (axis == 'z') {
            zDisplacement = new OmegaNum(0);
            zVelocity = new OmegaNum(0);
            zAcceleration = new OmegaNum(0);
            zJerk = new OmegaNum(0);
            zSnap = new OmegaNum(0);
            zCrackle = new OmegaNum(0);
            zPop = new OmegaNum(0);
            zLock = new OmegaNum(0);
            zDrop = axisDrop;
        }
        else if (axis == 'w') {
            wDisplacement = new OmegaNum(0);
            wVelocity = new OmegaNum(0);
            wAcceleration = new OmegaNum(0);
            wJerk = new OmegaNum(0);
            wSnap = new OmegaNum(0);
            wCrackle = new OmegaNum(0);
            wPop = new OmegaNum(0);
            wLock = new OmegaNum(0);
            wDrop = axisDrop;
        }
    }
}