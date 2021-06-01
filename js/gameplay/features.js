var features = {
/*
    0: Milestones
    1: Velocity
    2: Acceleration
    3: Jerk
    4: Snap
    5: Crackle
    6: Pop
    7: Lock
    8: Drop
*/

    unlocked: {

        0: "false",
        1: "false",
        2: "false",
        3: "false",
        4: "false",
        5: "false",
        6: "false",
        7: "false",
        8: "false"

    },

    visible: {

        0: "false",
        1: "false",
        2: "false",
        3: "false",
        4: "false",
        5: "false",
        6: "false",
        7: "false",
        8: "false"

    }

}

/* var features = {

    //Position Derivatives
    velocity: {
        unlocked: "false",
        visible: "false"
    },
    acceleration: {
        unlocked: "false",
        visible: "false"
    },
    jerk: {
        unlocked: "false",
        visible: "false"
    },
    snap: {
        unlocked: "false",
        visible: "false"
    },
    crackle: {
        unlocked: "false",
        visible: "false"
    },
    pop: {
        unlocked: "false",
        visible: "false"
    },
    lock: {
        unlocked: "false",
        visible: "false"
    },
    drop: {
        unlocked: "false",
        visible: "false"
    },

    //Milestones
    milestones: {

        unlocked: "false",
        visible: {
            //Milestone Sets
            set1: "false", //Visible after velocity reset
            set2: "false", //Visible after acceleration reset
            set3: "false", //Visible after jerk reset
            set4: "false", //Visible after snap reset
            set5: "false", //Visible after crackle reset
            set6: "false", //Visible after pop reset
            set7: "false", //Visible after lock reset
            set8: "false", //Visible after drop reset

        }

    }

} */

function unlockFeature(id) {
    if (features.unlocked[id] === "false") {
        features.unlocked[id] = "true";
    }
}

function discoverFeature(id) {
    if (features.visible[id] === "false") {
        features.visible[id] = "true";
        updateVisibility();
    }
}