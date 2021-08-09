function milestoneCheck() {
    var i;
    for (i=0;i<milestones.total;i++) {
        if (!milestones.completed[i]) {
            if (i==0 && xDisplacement.gte(50)) grantMilestone(i);
            if (i==1 && xDisplacement.gte(250)) grantMilestone(i);
            if (i==2 && xDisplacement.gte(500)) grantMilestone(i);
            if (i==3 && xDisplacement.gte(1000)) grantMilestone(i);

            if (features.milestoneStageTwo) {
                if (i==4 && xVelocity.gte(1)) grantMilestone(i);
                if (i==5 && xVelocity.gte(2)) grantMilestone(i);
                if (i==6 && xVelocity.gte(5)) grantMilestone(i);
                if (i==7 && xVelocity.gte(10)) grantMilestone(i);
                if (i==8 && xDisplacement.gte(10000)) grantMilestone(i);
                if (i==9 && xVelocity.gte(28)) grantMilestone(i);
                if (i==10 && playerStorage[0].gte(1) && playerStorage[5].gte(1)) grantMilestone(i);
            }
        }
    }
}

function grantMilestone(id) {
    milestones.completed[id] = true;

    if (id==0) xMovementIncrement = xMovementIncrement.add(1);
    if (id==1) xMovementIncrement = xMovementIncrement.add(1);
    if (id==2) xMovementIncrement = xMovementIncrement.add(1);

    if (id==3) {
        features.xVelocity = true;
        document.getElementById("xVelocityStatus").style.visibility="visible";
        document.getElementById("derivStatusRightVelocity").style.visibility="visible";
        document.getElementById("xPosTabBar").style.display="block";
        features.milestoneStageTwo = true;
    }

    if (id==4) xMovementIncrement = xMovementIncrement.add(1);
    if (id==5) xMovementIncrement = xMovementIncrement.add(1);
    if (id==6) xMovementIncrement = xMovementIncrement.add(1);

    if (id==7) {
        features.elements = true;
        features.nonmetalElements = true;
        document.getElementById("elementTabButton").style.display="inline-block";
    }

    if (id==8) xMovementIncrement = xMovementIncrement.add(1);
    if (id==9) velocityPrestigeRequirement = velocityPrestigeRequirement.div(2);
    if (id==10) features.nobleGasElements = true;
}