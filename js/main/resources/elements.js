const elements = { 
    name: ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminium', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Rubidium', 'Strontium', 'Yttrium', 'Zirconium', 'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium', 'Rhodium', 'Palladium', 'Silver', 'Cadmium', 'Indium', 'Tin', 'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Cesium', 'Barium', 'Lanthanum', 'Cerium', 'Praseodymium', 'Neodymium', 'Promethium', 'Samarium', 'Europium', 'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium', 'Erbium', 'Thulium', 'Ytterbium', 'Lutetium', 'Hafnium', 'Tantalum', 'Tungsten', 'Rhenium', 'Osmium', 'Iridium', 'Platinum', 'Gold', 'Mercury', 'Thalium', 'Lead', 'Bismuth', 'Polonium', 'Astatine', 'Radon', 'Francium', 'Radium', 'Actinium', 'Thorium', 'Protactinium', 'Uranium', 'Neptunium', 'Plutonium', 'Americum', 'Curium', 'Berkelium', 'Californium', 'Einsteinium', 'Fermium', 'Mendelevium', 'Nobelium', 'Lawrencium', 'Rutherfordium', 'Dubnium', 'Seaborgium', 'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium', 'Roentgenium', 'Copernicium', 'Nihonium', 'Flerovium', 'Moscovium', 'Livermorium', 'Tennessine', 'Oganesson'],
    abbr: ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'],
    group: ['nonmetal', 'nobleGas', 'alkaliMetal', 'alkalineEarthMetal', 'metalloid', 'nonmetal', 'nonmetal', 'nonmetal', 'halogen', 'nobleGas', 'alkaliMetal', 'alkalineEarthMetal', 'postTransitionMetal', 'metalloid', 'nonmetal', 'nonmetal', 'halogen', 'nobleGas', 'alkaliMetal', 'alkalineEarthMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'postTransitionMetal', 'metalloid', 'metalloid', 'nonmetal', 'halogen', 'nobleGas', 'alkaliMetal', 'alkalineEarthMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'metalloid', 'metalloid', 'halogen', 'nobleGas', 'alkaliMetal', 'alkalineEarthMetal', 'lanthanide', 'lanthanide', 'lanthanide', 'lanthanide', 'lanthanide', 'lanthanide', 'lanthanide', 'lanthanide', 'lanthanide', 'lanthanide', 'lanthanide', 'lanthanide', 'lanthanide', 'lanthanide', 'lanthanide', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'metalloid', 'halogen', 'nobleGas', 'alkaliMetal', 'alkalineEarthMetal', 'actinide', 'actinide', 'actinide', 'actinide', 'actinide', 'actinide', 'actinide', 'actinide', 'actinide', 'actinide', 'actinide', 'actinide', 'actinide', 'actinide', 'actinide', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'halogen', 'nobleGas'],
    rarity: ['common', 'common', 'limited', 'common', 'limited', 'common', 'limited', 'rare', 'common', 'limited', 'common', 'scarce', 'limited', 'rare', 'rare', 'unique', 'limited', 'limited', 'rare', 'rare', 'rare', 'unique', 'limited', 'rare', 'limited', 'common', 'scarce', 'common', 'common', 'rare', 'rare', 'common', 'unique', 'scarce', 'rare', 'unique', 'rare', 'limited', 'unique', 'scarce', 'limited', 'scarce', 'rare', 'scarce', 'rare', 'scarce', 'scarce', 'rare', 'scarce', 'common', 'unique', 'scarce', 'rare', 'scarce', 'unique', 'limited', 'common', 'common', 'common', 'limited', 'limited', 'limited', 'rare', 'rare', 'rare', 'scarce', 'scarce', 'scarce', 'unique', 'unique', 'unique', 'limited', 'common', 'scarce', 'limited', 'rare', 'rare', 'unique', 'unique', 'rare', 'scarce', 'rare', 'unique', 'rare', 'scarce', 'rare', 'scarce', 'unique', 'common', 'common', 'common', 'unique', 'limited', 'unique', 'scarce', 'scarce', 'scarce', 'rare', 'rare', 'limited', 'limited', 'unique', 'unique', 'rare', 'scarce', 'rare', 'scarce', 'limited', 'common', 'scarce', 'rare', 'unique', 'rare', 'scarce', 'scarce', 'unique', 'unique', 'unique'],
    minDistance: [new OmegaNum(10), new OmegaNum(10), new OmegaNum(10), new OmegaNum(10), new OmegaNum(10), new OmegaNum('e4'), new OmegaNum('e9'), new OmegaNum('e16'), new OmegaNum(10), new OmegaNum('e8'), new OmegaNum('e16'), new OmegaNum('e32'), new OmegaNum(10), new OmegaNum('e64'), new OmegaNum('e25'), new OmegaNum('e36'), new OmegaNum('e128'), new OmegaNum('e27'), new OmegaNum('e81'), new OmegaNum('e243'), new OmegaNum(10), new OmegaNum('e512'), new OmegaNum('e19683'), new OmegaNum('e262144'), new OmegaNum('e1953125'), new OmegaNum('e10077696'), new OmegaNum('e40353607'), new OmegaNum('e134217728'), new OmegaNum('e387420489'), new OmegaNum('e1000000000'), new OmegaNum('e256'), new OmegaNum('e729'), new OmegaNum('e4096'), new OmegaNum('e49'), new OmegaNum('e2187'), new OmegaNum('e64'), new OmegaNum('e256'), new OmegaNum('e1024'), new OmegaNum('e2357947691'), new OmegaNum('e5159780352'), new OmegaNum('e10604499373'), new OmegaNum('e20661046784'), new OmegaNum('e38443359375'), new OmegaNum('e68719476736'), new OmegaNum('e1.18588e11'), new OmegaNum('e1.98359e11'), new OmegaNum('e3.22688e11'), new OmegaNum('e5.12e11'), new OmegaNum('e6561'), new OmegaNum('e65536'), new OmegaNum('e15625'), new OmegaNum('e46656'), new OmegaNum('e16384'), new OmegaNum('e125'), new OmegaNum('e625'), new OmegaNum('e3125'), new OmegaNum(10), new OmegaNum('e1024'), new OmegaNum('e59049'), new OmegaNum('e1048576'), new OmegaNum('e9765625'), new OmegaNum('e60466176'), new OmegaNum('e282475249'), new OmegaNum('e1073741824'), new OmegaNum('e3486784401'), new OmegaNum('ee10'), new OmegaNum('e25937424601'), new OmegaNum('e61917364224'), new OmegaNum('e1.37858e11'), new OmegaNum('e2.89255e11'), new OmegaNum('e5.7665e11'), new OmegaNum('e7.9428e11'), new OmegaNum('e1.20727e12'), new OmegaNum('e1.80115e12'), new OmegaNum('e2.64181e12'), new OmegaNum('e3.8147e12'), new OmegaNum('e5.4295e12'), new OmegaNum('e7.6256e12'), new OmegaNum('e1.05785e13'), new OmegaNum('e1.45071e13'), new OmegaNum('e390625'), new OmegaNum('e1679616'), new OmegaNum('e5764801'), new OmegaNum('e117649'), new OmegaNum('e78125'), new OmegaNum('e216'), new OmegaNum('e1296'), new OmegaNum('e7776'), new OmegaNum(10), new OmegaNum('e2048'), new OmegaNum('e177147'), new OmegaNum('e4194304'), new OmegaNum('e48828125'), new OmegaNum('e362797056'), new OmegaNum('e1977326743'), new OmegaNum('e8589934592'), new OmegaNum('e31381059609'), new OmegaNum('ee11'), new OmegaNum('e2.85312e11'), new OmegaNum('e7.43008e11'), new OmegaNum('e1.79216e12'), new OmegaNum('e4.04957e12'), new OmegaNum('e8.64976e12'), new OmegaNum('e1.9683e13'), new OmegaNum('e2.64396e13'), new OmegaNum('e3.51844e13'), new OmegaNum('e4.64115e13'), new OmegaNum('e6.0717e13'), new OmegaNum('e7.88156e13'), new OmegaNum('e1.0156e14'), new OmegaNum('e1.29962e14'), new OmegaNum('e1.65216e14'), new OmegaNum('e16777216'), new OmegaNum('e43046721'), new OmegaNum('e100000000'), new OmegaNum('e214358881'), new OmegaNum('e279936'), new OmegaNum('e343')],
    idGroup: {
        nonmetal: [0, 5, 6, 7, 14, 15, 33],
        nobleGas: [1, 9, 17, 35, 53, 85, 117],
        alkaliMetal: [2, 10, 18, 36, 54, 86],
        alkalineEarthMetal: [3, 11, 19, 37, 55, 87],
        metalloid: [4, 13, 31, 32, 50, 51, 83],
        halogen: [8, 16, 34, 52, 84, 116],
        postTransitionMetal: [12, 30, 48, 49, 80, 81, 82, 112, 113, 114, 115],
        transitionMetal: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 71, 72, 73, 74, 75, 76, 77, 78, 79, 103, 104, 105, 106, 107, 108, 109, 110, 111],
        lanthanide: [56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
        actinide: [88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102]
    },
    idRarityGroup: {
        nonmetal: {
            common: [0, 5],
            limited: [6],
            rare: [7, 14],
            scarce: [33],
            unique: [15]
        },
        nobleGas: {
            common: [1],
            limited: [9, 17],
            rare: [85],
            scarce: [53],
            unique: [35, 117]
        },
        alkaliMetal: {
            common: [10],
            limited: [2],
            rare: [18, 36],
            scarce: [86],
            unique: [54]
        },
        alkalineEarthMetal: {
            common: [3],
            limited: [37, 55],
            rare: [19],
            scarce: [11],
            unique: [87]
        },
        metalloid: {
            common: [31],
            limited: [4],
            rare: [13, 83],
            scarce: [51],
            unique: [32, 50]
        },
        halogen: {
            common: [8],
            limited: [16],
            rare: [34, 52],
            scarce: [84],
            unique: [116]
        },
        postTransitionMetal: {
            common: [49],
            limited: [12],
            rare: [30, 81, 112],
            scarce: [48, 80, 113, 114],
            unique: [82, 115]
        },
        transitionMetal: {
            common: [25, 27, 28, 72, 108],
            limited: [22, 24, 40, 71, 74, 107],
            rare: [20, 23, 29, 42, 44, 47, 75, 76, 79, 103, 105, 110],
            scarce: [26, 39, 41, 43, 45, 46, 73, 104, 106, 109],
            unique: [21, 38, 77, 78, 111]
        },
        lanthanide: {
            common: [56, 57, 58],
            limited: [59, 60, 61],
            rare: [62, 63, 64],
            scarce: [65, 66, 67],
            unique: [68, 69, 70]
        },
        actinide: {
            common: [88, 89, 90],
            limited: [92, 99, 100],
            rare: [97, 98],
            scarce: [94, 95, 96],
            unique: [91, 93, 101, 102]
        }
    },
    dropPool: {
        nonmetals: ['nonmetal'],
        nobleGases: ['nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal'],
        alkaliMetals: ['alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal'],
        alkalineEarthMetals: ['alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal'],
        metalloids: ['metalloid', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal'],
        halogens: ['halogen', 'halogen', 'halogen', 'halogen', 'halogen', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal'],
        postTransitionMetals: ['postTransitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'halogen', 'halogen', 'halogen', 'halogen', 'halogen', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal'],
        transitionMetals: ['transitionMetal', 'transitionMetal', 'transitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'halogen', 'halogen', 'halogen', 'halogen', 'halogen', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal'],
        lanthanides: ['lanthanide', 'lanthanide', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'halogen', 'halogen', 'halogen', 'halogen', 'halogen', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal'],
        actinides: ['actinide', 'lanthanide', 'lanthanide', 'transitionMetal', 'transitionMetal', 'transitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'postTransitionMetal', 'halogen', 'halogen', 'halogen', 'halogen', 'halogen', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'metalloid', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkalineEarthMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'alkaliMetal', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nobleGas', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal', 'nonmetal']
    },
    rarityDropPoolEntries: {
        common: 15,
        limited: 10,
        rare: 6,
        scarce: 3,
        unique: 1,
    },
    rarityAvgDrop: {
        common: 21,
        limited: 15,
        rare: 10,
        scarce: 6,
        unique: 3
    },
    // nodeSizeMultiplier: {
    //     stone: 1,
    //     rock: 1.2,
    //     boulder: 1.6,
    //     mountain: 2.4,
    //     moon: 4
    // },
    nodeSizePool: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 2.4, 2.4, 2.4, 2.4, 4]
};

var playerStorage = {
    0: new OmegaNum(0),
    1: new OmegaNum(0),
    2: new OmegaNum(0),
    3: new OmegaNum(0),
    4: new OmegaNum(0),
    5: new OmegaNum(0),
    6: new OmegaNum(0),
    7: new OmegaNum(0),
    8: new OmegaNum(0),
    9: new OmegaNum(0),
    10: new OmegaNum(0),
    11: new OmegaNum(0),
    12: new OmegaNum(0),
    13: new OmegaNum(0),
    14: new OmegaNum(0),
    15: new OmegaNum(0),
    16: new OmegaNum(0),
    17: new OmegaNum(0),
    18: new OmegaNum(0),
    19: new OmegaNum(0),
    20: new OmegaNum(0),
    21: new OmegaNum(0),
    22: new OmegaNum(0),
    23: new OmegaNum(0),
    24: new OmegaNum(0),
    25: new OmegaNum(0),
    26: new OmegaNum(0),
    27: new OmegaNum(0),
    28: new OmegaNum(0),
    29: new OmegaNum(0),
    30: new OmegaNum(0),
    31: new OmegaNum(0),
    32: new OmegaNum(0),
    33: new OmegaNum(0),
    34: new OmegaNum(0),
    35: new OmegaNum(0),
    36: new OmegaNum(0),
    37: new OmegaNum(0),
    38: new OmegaNum(0),
    39: new OmegaNum(0),
    40: new OmegaNum(0),
    41: new OmegaNum(0),
    42: new OmegaNum(0),
    43: new OmegaNum(0),
    44: new OmegaNum(0),
    45: new OmegaNum(0),
    46: new OmegaNum(0),
    47: new OmegaNum(0),
    48: new OmegaNum(0),
    49: new OmegaNum(0),
    50: new OmegaNum(0),
    51: new OmegaNum(0),
    52: new OmegaNum(0),
    53: new OmegaNum(0),
    54: new OmegaNum(0),
    55: new OmegaNum(0),
    56: new OmegaNum(0),
    57: new OmegaNum(0),
    58: new OmegaNum(0),
    59: new OmegaNum(0),
    60: new OmegaNum(0),
    61: new OmegaNum(0),
    62: new OmegaNum(0),
    63: new OmegaNum(0),
    64: new OmegaNum(0),
    65: new OmegaNum(0),
    66: new OmegaNum(0),
    67: new OmegaNum(0),
    68: new OmegaNum(0),
    69: new OmegaNum(0),
    70: new OmegaNum(0),
    71: new OmegaNum(0),
    72: new OmegaNum(0),
    73: new OmegaNum(0),
    74: new OmegaNum(0),
    75: new OmegaNum(0),
    76: new OmegaNum(0),
    77: new OmegaNum(0),
    78: new OmegaNum(0),
    79: new OmegaNum(0),
    80: new OmegaNum(0),
    81: new OmegaNum(0),
    82: new OmegaNum(0),
    83: new OmegaNum(0),
    84: new OmegaNum(0),
    85: new OmegaNum(0),
    86: new OmegaNum(0),
    87: new OmegaNum(0),
    88: new OmegaNum(0),
    89: new OmegaNum(0),
    90: new OmegaNum(0),
    91: new OmegaNum(0),
    92: new OmegaNum(0),
    93: new OmegaNum(0),
    94: new OmegaNum(0),
    95: new OmegaNum(0),
    96: new OmegaNum(0),
    97: new OmegaNum(0),
    98: new OmegaNum(0),
    99: new OmegaNum(0),
    100: new OmegaNum(0),
    101: new OmegaNum(0),
    102: new OmegaNum(0),
    103: new OmegaNum(0),
    104: new OmegaNum(0),
    105: new OmegaNum(0),
    106: new OmegaNum(0),
    107: new OmegaNum(0),
    108: new OmegaNum(0),
    109: new OmegaNum(0),
    110: new OmegaNum(0),
    111: new OmegaNum(0),
    112: new OmegaNum(0),
    113: new OmegaNum(0),
    114: new OmegaNum(0),
    115: new OmegaNum(0),
    116: new OmegaNum(0),
    117: new OmegaNum(0)
};

function dropElements() {
    var i, elementAlpha, elementAlphaQty, elementAlphaFound, elementAlphaGroup, elementAlphaRarity, elementAlphaGroupRarity, elementAlphaNode, elementAlphaAvg;

    let medianSpace = spacePreTick.add(spaceCovered.div(2));
    let elementAlphaChance = new OmegaNum.pow(10, medianSpace.log10().floor().add(1).neg()).mul(spaceCovered);
    let randomNumAlpha = 1-Math.random();

    if (elementAlphaChance.gte(1)) elementAlphaFound = elementAlphaChance.mul(randomNumAlpha).ceil();
    else if (elementAlphaChance.gte(randomNumAlpha)) elementAlphaFound = new OmegaNum(1);
    else elementAlphaFound = new OmegaNum(0);

    if (elementAlphaFound.gte(1)) {
        var elementAlphaRarityPool = [];
        if (features.actinideElements) elementAlphaGroup = elements.dropPool.actinides[Math.floor(Math.random()*elements.dropPool.actinides.length)];
        else if (features.lanthanideElements) elementAlphaGroup = elements.dropPool.lanthanides[Math.floor(Math.random()*elements.dropPool.lanthanides.length)];
        else if (features.transitionMetalElements) elementAlphaGroup = elements.dropPool.transitionMetals[Math.floor(Math.random()*elements.dropPool.transitionMetals.length)];
        else if (features.postTransitionMetalElements) elementAlphaGroup = elements.dropPool.postTransitionMetals[Math.floor(Math.random()*elements.dropPool.postTransitionMetals.length)];
        else if (features.halogenElements) elementAlphaGroup = elements.dropPool.halogens[Math.floor(Math.random()*elements.dropPool.halogens.length)];
        else if (features.metalloidElements) elementAlphaGroup = elements.dropPool.metalloids[Math.floor(Math.random()*elements.dropPool.metalloids.length)];
        else if (features.alkalineEarthMetalElements) elementAlphaGroup = elements.dropPool.alkalineEarthMetals[Math.floor(Math.random()*elements.dropPool.alkalineEarthMetals.length)];
        else if (features.alkaliMetalElements) elementAlphaGroup = elements.dropPool.alkaliMetals[Math.floor(Math.random()*elements.dropPool.alkaliMetals.length)];
        else if (features.nobleGasElements) elementAlphaGroup = elements.dropPool.nobleGases[Math.floor(Math.random()*elements.dropPool.nobleGases.length)];
        else if (features.nonmetalElements) elementAlphaGroup = elements.dropPool.nonmetals[Math.floor(Math.random()*elements.dropPool.nonmetals.length)];

        if (elementAlphaGroup == 'nonmetal') elementAlphaGroupRarity = elements.idRarityGroup.nonmetal; 
        else if (elementAlphaGroup == 'nobleGas') elementAlphaGroupRarity = elements.idRarityGroup.nobleGas; 
        else if (elementAlphaGroup == 'alkaliMetal') elementAlphaGroupRarity = elements.idRarityGroup.alkaliMetal; 
        else if (elementAlphaGroup == 'alkalineEarthMetal') elementAlphaGroupRarity = elements.idRarityGroup.alkalineEarthMetal; 
        else if (elementAlphaGroup == 'metalloid') elementAlphaGroupRarity = elements.idRarityGroup.metalloid; 
        else if (elementAlphaGroup == 'halogen') elementAlphaGroupRarity = elements.idRarityGroup.halogen; 
        else if (elementAlphaGroup == 'postTransitionMetal') elementAlphaGroupRarity = elements.idRarityGroup.postTransitionMetal; 
        else if (elementAlphaGroup == 'transitionMetal') elementAlphaGroupRarity = elements.idRarityGroup.transitionMetal; 
        else if (elementAlphaGroup == 'lanthanide') elementAlphaGroupRarity = elements.idRarityGroup.lanthanide; 
        else if (elementAlphaGroup == 'actinide') elementAlphaGroupRarity = elements.idRarityGroup.actinide;
        
        if (medianSpace.gte(elements.minDistance[elementAlphaGroupRarity.common[0]])) {
            for (i=0;i<elements.rarityDropPoolEntries.common;i++) elementAlphaRarityPool.push('common');
        }
        if (medianSpace.gte(elements.minDistance[elementAlphaGroupRarity.limited[0]])) {
            for (i=0;i<elements.rarityDropPoolEntries.limited;i++) elementAlphaRarityPool.push('limited');
        }
        if (medianSpace.gte(elements.minDistance[elementAlphaGroupRarity.rare[0]])) {
            for (i=0;i<elements.rarityDropPoolEntries.rare;i++) elementAlphaRarityPool.push('rare');
        }
        if (medianSpace.gte(elements.minDistance[elementAlphaGroupRarity.scarce[0]])) {
            for (i=0;i<elements.rarityDropPoolEntries.scarce;i++) elementAlphaRarityPool.push('scarce');
        }
        if (medianSpace.gte(elements.minDistance[elementAlphaGroupRarity.unique[0]])) {
            for (i=0;i<elements.rarityDropPoolEntries.unique;i++) elementAlphaRarityPool.push('unique');
        }

        elementAlphaRarity = elementAlphaRarityPool[Math.floor(Math.random()*elementAlphaRarityPool.length)];

        if (elementAlphaRarity == 'common') {
            elementAlpha = elementAlphaGroupRarity.common[Math.floor(Math.random()*elementAlphaGroupRarity.common.length)];
            elementAlphaAvg = elements.rarityAvgDrop.common;
        }
        if (elementAlphaRarity == 'limited') {
            elementAlpha = elementAlphaGroupRarity.limited[Math.floor(Math.random()*elementAlphaGroupRarity.limited.length)];
            elementAlphaAvg = elements.rarityAvgDrop.limited;
        }
        if (elementAlphaRarity == 'rare') {
            elementAlpha = elementAlphaGroupRarity.rare[Math.floor(Math.random()*elementAlphaGroupRarity.rare.length)];
            elementAlphaAvg = elements.rarityAvgDrop.rare;
        }
        if (elementAlphaRarity == 'scarce') {
            elementAlpha = elementAlphaGroupRarity.scarce[Math.floor(Math.random()*elementAlphaGroupRarity.scarce.length)];
            elementAlphaAvg = elements.rarityAvgDrop.scarce;
        }
        if (elementAlphaRarity == 'unique') {
            elementAlpha = elementAlphaGroupRarity.unique[Math.floor(Math.random()*elementAlphaGroupRarity.unique.length)];
            elementAlphaAvg = elements.rarityAvgDrop.unique;
        }

        elementAlphaNode = elements.nodeSizePool[Math.floor(Math.random()*elements.nodeSizePool.length)];

        elementAlphaQty = new OmegaNum(elementAlphaAvg).mul(elementAlphaNode).mul(elementAlphaFound).round();

        playerStorage[elementAlpha] = playerStorage[elementAlpha].add(elementAlphaQty);
    }
}