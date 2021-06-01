var xDistance = new OmegaNum(0);
var manMoveAllow = 1;
var manMoveCooldown = 1000;
var manMoveDistance = new OmegaNum(1);

//Manual Movement
function manMove() {

	//Actually Move
	if (manMoveCooldown > 0) {
		if (manMoveAllow == 0) {
			return;
		}
		else if (manMoveAllow == 1) {
			manMoveAllow = 0;
			document.getElementById("manDist").style.backgroundColor = "#DDDDDD";
			xDistance = xDistance.add(manMoveDistance);
			setTimeout(function() {
				manMoveAllow = 1;
				document.getElementById("manDist").style.backgroundColor = "#FFFFFF";
			}, manMoveCooldown);
			checkMilestones();
		}
	}
	else if (manMoveCooldown == 0) {
		xDistance = xDistance.add(manMoveDistance);
		checkMilestones();
	}
}

function manMoveDistanceCheck() {
	manMoveDistance = OmegaNum(1);

	//Milestones
	if (milestone.completed[3] === "true") manMoveDistance = manMoveDistance.add(1);
	if (milestone.completed[4] === "true") manMoveDistance = manMoveDistance.add(1);

}