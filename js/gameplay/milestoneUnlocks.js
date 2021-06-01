function grantMilestone(id) {
    if (milestone.completed[id] = "false") {
        milestone.completed[id] = "true";
    }
}

function checkMilestones() {
    if (xDistance.gte(10) && milestone.completed[0] === "false") {
        grantMilestone(0);
        manMoveCooldown = manMoveCooldown/2;
    }
    if (xDistance.gte(25) && milestone.completed[1] === "false") {
        grantMilestone(1);
        manMoveCooldown = manMoveCooldown/2;
    }
    if (xDistance.gte(50) && milestone.completed[2] === "false") {
        grantMilestone(2);
        manMoveCooldown = manMoveCooldown/2;
    }
    if (xDistance.gte(100) && milestone.completed[3] === "false") {
        grantMilestone(3);
        manMoveCooldown = manMoveCooldown/2;
        manMoveDistanceCheck();
    }
    if (xDistance.gte(250) && milestone.completed[4] === "false") {
        grantMilestone(4);
        manMoveDistanceCheck();
    }
    if (xDistance.gte(500) && milestone.completed[5] === "false") {
        grantMilestone(5);
        manMoveCooldown = 0;
    }
    if (xDistance.gte(1000) && milestone.completed[6] === "false") {
        grantMilestone(6);
        discoverFeature(1);
        unlockFeature(1);
        discoverFeature(0);
        unlockFeature(0);
    }
}