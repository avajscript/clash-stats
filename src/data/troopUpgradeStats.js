const troops = [
    {
        "id": 0,
        "name": "Barbarian",
        "housingSpace": 1,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 1,
            "cost": 100,
            "time": 10,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 1
        },
        "trainingTime": 5,
        "regenerationTimes": [],
        "dps": [8, 11, 14, 18, 23, 26, 30, 34, 38, 42, 45, 48],
        "upgrade": {
            "cost": [20000, 60000, 200000, 650000, 1400000, 2100000, 2800000, 5000000, 10000000, 16000000, 18000000],
            "time": [7200, 18000, 43200, 86400, 129600, 172800, 216000, 302400, 518400, 1036800, 1123200],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12]
    },
    {
        "id": 1,
        "name": "Archer",
        "housingSpace": 1,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 2,
            "cost": 500,
            "time": 60,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 2
        },
        "trainingTime": 6,
        "regenerationTimes": [],
        "dps": [7, 9, 12, 16, 20, 22, 25, 28, 31, 34, 37, 40],
        "upgrade": {
            "cost": [30000, 80000, 300000, 800000, 2000000, 2500000, 3200000, 5600000, 10200000, 16000000, 18000000],
            "time": [10800, 21600, 43200, 86400, 129600, 172800, 216000, 302400, 518400, 1036800, 1123200],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12]
    },
    {
        "id": 2,
        "name": "Goblin",
        "housingSpace": 1,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 2,
            "cost": 5000,
            "time": 3600,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 4
        },
        "trainingTime": 7,
        "regenerationTimes": [],
        "dps": [11, 14, 19, 24, 32, 42, 52, 62, 72],
        "upgrade": {
            "cost": [45000, 175000, 500000, 1200000, 2000000, 3000000, 5600000, 16000000],
            "time": [18000, 32400, 43200, 86400, 129600, 259200, 518400, 1144800],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 8, 8, 8, 9, 9]
    },
    {
        "id": 3,
        "name": "Giant",
        "housingSpace": 5,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 2,
            "cost": 2500,
            "time": 600,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 3
        },
        "trainingTime": 30,
        "regenerationTimes": [],
        "dps": [11, 14, 19, 24, 31, 43, 55, 62, 70, 78, 86, 94],
        "upgrade": {
            "cost": [40000, 150000, 500000, 1200000, 2000000, 3000000, 3500000, 5600000, 8000000, 16500000, 18500000],
            "time": [14400, 28800, 43200, 86400, 172800, 244800, 345600, 475200, 604800, 1080000, 1209600],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 12]
    },
    {
        "id": 4,
        "name": "Wall Breaker",
        "housingSpace": 2,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 3,
            "cost": 20000,
            "time": 28800,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 5
        },
        "trainingTime": 15,
        "regenerationTimes": [],
        "dps": [6, 10, 15, 20, 43, 55, 66, 75, 86, 94, 102, 110],
        "upgrade": {
            "cost": [100000, 250000, 600000, 1200000, 2500000, 4200000, 6500000, 8000000, 11000000, 16500000, 19000000],
            "time": [21600, 43200, 64800, 86400, 129600, 183600, 302400, 561600, 1036800, 1080000, 1209600],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    {
        "id": 5,
        "name": "Balloon",
        "housingSpace": 5,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 4,
            "cost": 120000,
            "time": 43200,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 6
        },
        "trainingTime": 30,
        "regenerationTimes": [],
        "dps": [25, 32, 48, 72, 108, 162, 198, 236, 256, 276, 290],
        "upgrade": {
            "cost": [125000, 400000, 720000, 1300000, 2750000, 4500000, 7000000, 8500000, 17000000, 20000000],
            "time": [28800, 43200, 64800, 86400, 302400, 345600, 453600, 777600, 1209600, 1382400],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 10, 11]
    },
    {
        "id": 6,
        "name": "Wizard",
        "housingSpace": 4,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 5,
            "cost": 270000,
            "time": 64800,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 7
        },
        "trainingTime": 30,
        "regenerationTimes": [],
        "dps": [50, 70, 90, 125, 170, 185, 200, 215, 230, 245, 260, 275],
        "upgrade": {
            "cost": [120000, 320000, 620000, 1200000, 2200000, 3500000, 5000000, 5800000, 8500000, 17200000, 19200000],
            "time": [28800, 43200, 64800, 86400, 172800, 230400, 302400, 453600, 604800, 1080000, 1209600],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 12]
    },
    {
        "id": 7,
        "name": "Healer",
        "housingSpace": 14,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 6,
            "cost": 800000,
            "time": 86400,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 8
        },
        "trainingTime": 120,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [450000, 900000, 2700000, 4200000, 8000000, 16000000, 18000000, 21000000],
            "time": [43200, 86400, 172800, 345600, 561600, 1036800, 1144800, 1296000],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9]
    },
    {
        "id": 8,
        "name": "Dragon",
        "housingSpace": 20,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 7,
            "cost": 1000000,
            "time": 129600,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 9
        },
        "trainingTime": 180,
        "regenerationTimes": [],
        "dps": [140, 160, 180, 210, 240, 270, 310, 330, 350, 370, 390],
        "upgrade": {
            "cost": [1000000, 2000000, 3000000, 3800000, 4900000, 6300000, 8800000, 17500000, 19500000, 21500000],
            "time": [64800, 129600, 259200, 345600, 453600, 475200, 604800, 1036800, 1209600, 1382400],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        "id": 9,
        "name": "P.E.K.K.A",
        "housingSpace": 25,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 8,
            "cost": 1400000,
            "time": 216000,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 10
        },
        "trainingTime": 180,
        "regenerationTimes": [],
        "dps": [260, 290, 320, 360, 410, 470, 540, 610, 680, 750, 810],
        "upgrade": {
            "cost": [1200000, 1800000, 2800000, 3200000, 4200000, 5200000, 7000000, 8500000, 18000000, 20500000],
            "time": [43200, 86400, 172800, 230400, 302400, 410400, 518400, 604800, 1123200, 1252800],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 3, 4, 6, 7, 8, 9, 9, 10, 11]
    },
    {
        "id": 10,
        "name": "Minion",
        "housingSpace": 2,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 7,
            "cost": 200000,
            "time": 28800,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 1
        },
        "trainingTime": 18,
        "regenerationTimes": [],
        "dps": [38, 41, 44, 47, 50, 54, 58, 62, 66, 70, 74],
        "upgrade": {
            "cost": [2000, 5000, 10000, 20000, 30000, 63000, 95000, 150000, 210000, 310000],
            "time": [28800, 57600, 86400, 172800, 230400, 302400, 432000, 604800, 1036800, 1123200],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 11]
    },
    {
        "id": 11,
        "name": "Hog Rider",
        "housingSpace": 5,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 7,
            "cost": 600000,
            "time": 86400,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 2
        },
        "trainingTime": 45,
        "regenerationTimes": [],
        "dps": [60, 70, 80, 92, 105, 118, 135, 148, 161, 174, 187, 200],
        "upgrade": {
            "cost": [4000, 7000, 10000, 20000, 37000, 70000, 95000, 150000, 175000, 240000, 335000],
            "time": [36000, 72000, 108000, 172800, 230400, 302400, 453600, 604800, 604800, 1036800, 1144800],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 2, 4, 5, 6, 7, 9, 10, 11, 12, 12]
    },
    {
        "id": 12,
        "name": "Valkyrie",
        "housingSpace": 8,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 8,
            "cost": 1000000,
            "time": 129600,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 3
        },
        "trainingTime": 90,
        "regenerationTimes": [],
        "dps": [94, 106, 119, 133, 148, 163, 178, 193, 208, 223, 238],
        "upgrade": {
            "cost": [6000, 10000, 20000, 32000, 63000, 110000, 155000, 240000, 320000, 340000],
            "time": [86400, 172800, 259200, 345600, 367200, 453600, 604800, 1036800, 1144800, 1296000],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        "id": 13,
        "name": "Golem",
        "housingSpace": 30,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 8,
            "cost": 1600000,
            "time": 172800,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 4
        },
        "trainingTime": 300,
        "regenerationTimes": [],
        "dps": [35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
        "upgrade": {
            "cost": [8000, 12000, 20000, 37000, 53000, 77000, 100000, 125000, 160000, 230000, 330000, 350000],
            "time": [108000, 216000, 259200, 324000, 367200, 432000, 475200, 561600, 604800, 1036800, 1144800, 1296000],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 7, 9, 10, 11, 12, 13]
    },
    {
        "id": 15,
        "name": "Witch",
        "housingSpace": 12,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 9,
            "cost": 2200000,
            "time": 302400,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 5
        },
        "trainingTime": 120,
        "regenerationTimes": [],
        "dps": [100, 110, 140, 160, 180, 200, 220],
        "upgrade": {
            "cost": [40000, 58000, 90000, 125000, 340000, 360000],
            "time": [345600, 410400, 583200, 648000, 1209600, 1382400],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 5, 5, 6, 7]
    },
    {
        "id": 17,
        "name": "Lava Hound",
        "housingSpace": 30,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 9,
            "cost": 2900000,
            "time": 388800,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 6
        },
        "trainingTime": 300,
        "regenerationTimes": [],
        "dps": [10, 12, 14, 16, 18, 20],
        "upgrade": {
            "cost": [28000, 43000, 85000, 120000, 160000],
            "time": [216000, 345600, 540000, 604800, 691200],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 6, 6, 6]
    },
    {
        "id": 22,
        "name": "Bowler",
        "housingSpace": 6,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 10,
            "cost": 4000000,
            "time": 561600,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 7
        },
        "trainingTime": 60,
        "regenerationTimes": [],
        "dps": [60, 70, 80, 90, 96, 102, 114],
        "upgrade": {
            "cost": [65000, 88000, 125000, 170000, 240000, 335000],
            "time": [259200, 302400, 432000, 604800, 1036800, 1144800],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 7]
    },
    {
        "id": 23,
        "name": "Baby Dragon",
        "housingSpace": 10,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 9,
            "cost": 2600000,
            "time": 345600,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 11
        },
        "trainingTime": 90,
        "regenerationTimes": [],
        "dps": [75, 85, 95, 105, 115, 125, 135, 145, 155],
        "upgrade": {
            "cost": [2000000, 2500000, 3400000, 4200000, 5500000, 7200000, 16000000, 18000000],
            "time": [172800, 302400, 345600, 432000, 540000, 604800, 950400, 1123200],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 6, 7, 8, 9, 9]
    },
    {
        "id": 24,
        "name": "Miner",
        "housingSpace": 6,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 10,
            "cost": 3700000,
            "time": 475200,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 12
        },
        "trainingTime": 30,
        "regenerationTimes": [],
        "dps": [80, 88, 96, 104, 112, 120, 128, 136, 144, 152],
        "upgrade": {
            "cost": [2500000, 3200000, 3800000, 5000000, 5800000, 8000000, 16500000, 18500000, 20500000],
            "time": [172800, 259200, 345600, 367200, 604800, 691200, 950400, 1144800, 1296000],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 6, 7, 8, 9, 10]
    },
    {
        "id": 26,
        "name": "Super Barbarian",
        "housingSpace": 5,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 1,
            "cost": 100,
            "time": 10,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 1
        },
        "trainingTime": 25,
        "regenerationTimes": [],
        "dps": [180, 200, 220, 240, 260],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 8,
        "seasonal": false,
        "levels": [8, 8, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
    },
    {
        "id": 27,
        "name": "Super Archer",
        "housingSpace": 12,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 2,
            "cost": 500,
            "time": 60,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 2
        },
        "trainingTime": 72,
        "regenerationTimes": [],
        "dps": [120, 132, 144, 156, 162],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 8,
        "seasonal": false,
        "levels": [0, 8, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
    },
    {
        "id": 28,
        "name": "Super Wall Breaker",
        "housingSpace": 8,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 3,
            "cost": 20000,
            "time": 28800,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 5
        },
        "trainingTime": 60,
        "regenerationTimes": [],
        "dps": [78, 100, 120, 130, 140, 150],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 7,
        "seasonal": false,
        "levels": [0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
    },
    {
        "id": 29,
        "name": "Super Giant",
        "housingSpace": 10,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 2,
            "cost": 2500,
            "time": 600,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 3
        },
        "trainingTime": 60,
        "regenerationTimes": [],
        "dps": [130, 140, 150, 160],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 9,
        "seasonal": false,
        "levels": [0, 9, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
    },
    {
        "id": 31,
        "name": "Raged Barbarian",
        "housingSpace": 4,
        "village": "builderBase",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 1,
            "cost": 1000,
            "time": 0,
            "resource": "Builder Elixir",
            "building": "Builder Barracks",
            "buildingLevel": 1
        },
        "trainingTime": "",
        "regenerationTimes": [],
        "dps": [45, 45, 58, 58, 70, 70, 83, 83, 93, 93, 103, 103, 112, 112, 120, 120, 128, 128, 136, 136],
        "upgrade": {
            "cost": [3500, 7000, 10000, 90000, 180000, 300000, 330000, 700000, 900000, 1000000, 1200000, 2000000, 2200000, 3000000, 3200000, 3800000, 4000000, 4600000, 5200000],
            "time": [300, 900, 18000, 36000, 54000, 72000, 86400, 129600, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400, 561600, 561600],
            "resource": "Builder Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    },
    {
        "id": 32,
        "name": "Sneaky Archer",
        "housingSpace": 3,
        "village": "builderBase",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 2,
            "cost": 4000,
            "time": 60,
            "resource": "Builder Elixir",
            "building": "Builder Barracks",
            "buildingLevel": 2
        },
        "trainingTime": "",
        "regenerationTimes": [],
        "dps": [60, 60, 66, 66, 72, 72, 79, 79, 86, 86, 95, 95, 104, 104, 112, 112, 119, 119, 125, 125],
        "upgrade": {
            "cost": [5000, 8000, 12000, 100000, 200000, 320000, 350000, 800000, 1000000, 1100000, 1300000, 2100000, 2300000, 3100000, 3300000, 3900000, 4100000, 4700000, 5300000],
            "time": [180, 600, 1800, 21600, 39600, 57600, 75600, 86400, 129600, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400, 561600, 561600],
            "resource": "Builder Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    },
    {
        "id": 33,
        "name": "Beta Minion",
        "housingSpace": 3,
        "village": "builderBase",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 3,
            "cost": 25000,
            "time": 1800,
            "resource": "Builder Elixir",
            "building": "Builder Barracks",
            "buildingLevel": 4
        },
        "trainingTime": "",
        "regenerationTimes": [],
        "dps": [60, 60, 65, 65, 72, 72, 81, 81, 90, 90, 99, 99, 108, 108, 117, 117, 126, 126],
        "upgrade": {
            "cost": [50000, 110000, 220000, 330000, 360000, 900000, 1100000, 1300000, 1500000, 2300000, 2500000, 3300000, 3500000, 4000000, 4200000, 4800000, 5400000],
            "time": [14400, 28800, 43200, 64800, 86400, 129600, 172800, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400, 561600, 561600],
            "resource": "Builder Elixir",
            "costAndResources": []
        },
        "minLevel": 3,
        "seasonal": false,
        "levels": [0, 0, 6, 8, 10, 12, 14, 16, 18, 20]
    },
    {
        "id": 34,
        "name": "Boxer Giant",
        "housingSpace": 18,
        "village": "builderBase",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 3,
            "cost": 10000,
            "time": 600,
            "resource": "Builder Elixir",
            "building": "Builder Barracks",
            "buildingLevel": 3
        },
        "trainingTime": "",
        "regenerationTimes": [],
        "dps": [65, 65, 70, 70, 76, 76, 83, 83, 91, 91, 100, 100, 109, 109, 119, 119, 129, 129],
        "upgrade": {
            "cost": [60000, 120000, 240000, 350000, 380000, 1000000, 1200000, 1300000, 1500000, 2300000, 2500000, 3300000, 3500000, 4000000, 4200000, 4800000, 5400000],
            "time": [18000, 36000, 57600, 72000, 86400, 129600, 172800, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400, 561600, 561600],
            "resource": "Builder Elixir",
            "costAndResources": []
        },
        "minLevel": 3,
        "seasonal": false,
        "levels": [0, 0, 6, 8, 10, 12, 14, 16, 18, 20]
    },
    {
        "id": 35,
        "name": "Bomber",
        "housingSpace": 12,
        "village": "builderBase",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 4,
            "cost": 100000,
            "time": 10800,
            "resource": "Builder Elixir",
            "building": "Builder Barracks",
            "buildingLevel": 5
        },
        "trainingTime": "",
        "regenerationTimes": [],
        "dps": [80, 80, 90, 90, 100, 100, 110, 110, 120, 120, 130, 130, 140, 140, 150, 150],
        "upgrade": {
            "cost": [320000, 340000, 360000, 900000, 1000000, 1200000, 1400000, 2200000, 2400000, 3200000, 3400000, 3900000, 4100000, 4700000, 5300000],
            "time": [57600, 72000, 86400, 129600, 172800, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400, 561600, 561600],
            "resource": "Builder Elixir",
            "costAndResources": []
        },
        "minLevel": 5,
        "seasonal": false,
        "levels": [0, 0, 0, 8, 10, 12, 14, 16, 18, 20]
    },
    {
        "id": 36,
        "name": "Power P.E.K.K.A",
        "housingSpace": 22,
        "village": "builderBase",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 8,
            "cost": 1500000,
            "time": 259200,
            "resource": "Builder Elixir",
            "building": "Builder Barracks",
            "buildingLevel": 10
        },
        "trainingTime": "",
        "regenerationTimes": [],
        "dps": [420, 420, 460, 460, 500, 500, 560, 560],
        "upgrade": {
            "cost": [3600000, 3800000, 4000000, 4600000, 4800000, 5600000, 5800000],
            "time": [388800, 475200, 475200, 518400, 518400, 561600, 561600],
            "resource": "Builder Elixir",
            "costAndResources": []
        },
        "minLevel": 13,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 16, 18, 20]
    },
    {
        "id": 37,
        "name": "Cannon Cart",
        "housingSpace": 16,
        "village": "builderBase",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 5,
            "cost": 300000,
            "time": 32400,
            "resource": "Builder Elixir",
            "building": "Builder Barracks",
            "buildingLevel": 7
        },
        "trainingTime": "",
        "regenerationTimes": [],
        "dps": [115, 115, 130, 130, 150, 150, 170, 170, 190, 190, 215, 215, 240, 240],
        "upgrade": {
            "cost": [1000000, 1100000, 1200000, 1400000, 1600000, 2400000, 2600000, 3400000, 3600000, 4100000, 4300000, 5300000, 5700000],
            "time": [86400, 129600, 172800, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400, 561600, 561600],
            "resource": "Builder Elixir",
            "costAndResources": []
        },
        "minLevel": 7,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 10, 12, 14, 16, 18, 20]
    },
    {
        "id": 38,
        "name": "Drop Ship",
        "housingSpace": 15,
        "village": "builderBase",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 7,
            "cost": 1000000,
            "time": 172800,
            "resource": "Builder Elixir",
            "building": "Builder Barracks",
            "buildingLevel": 9
        },
        "trainingTime": "",
        "regenerationTimes": [],
        "dps": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        "upgrade": {
            "cost": [2400000, 2600000, 2800000, 3600000, 3800000, 4300000, 4500000, 5500000, 5700000],
            "time": [216000, 302400, 388800, 475200, 475200, 518400, 518400, 561600, 561600],
            "resource": "Builder Elixir",
            "costAndResources": []
        },
        "minLevel": 11,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 14, 16, 18, 20]
    },
    {
        "id": 41,
        "name": "Baby Dragon",
        "housingSpace": 12,
        "village": "builderBase",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 4,
            "cost": 150000,
            "time": 21600,
            "resource": "Builder Elixir",
            "building": "Builder Barracks",
            "buildingLevel": 6
        },
        "trainingTime": "",
        "regenerationTimes": [],
        "dps": [62, 62, 68, 68, 75, 75, 83, 83, 91, 91, 100, 100, 110, 110, 120, 120],
        "upgrade": {
            "cost": [360000, 380000, 400000, 1000000, 1200000, 1400000, 1600000, 2400000, 2600000, 3400000, 3600000, 4100000, 4300000, 5100000, 5500000],
            "time": [57600, 72000, 86400, 129600, 172800, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400, 561600, 561600],
            "resource": "Builder Elixir",
            "costAndResources": []
        },
        "minLevel": 5,
        "seasonal": false,
        "levels": [0, 0, 0, 8, 10, 12, 14, 16, 18, 20]
    },
    {
        "id": 42,
        "name": "Night Witch",
        "housingSpace": 14,
        "village": "builderBase",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 6,
            "cost": 500000,
            "time": 86400,
            "resource": "Builder Elixir",
            "building": "Builder Barracks",
            "buildingLevel": 8
        },
        "trainingTime": "",
        "regenerationTimes": [],
        "dps": [176, 176, 193, 193, 216, 216, 234, 234, 257, 257, 278, 278],
        "upgrade": {
            "cost": [1400000, 1600000, 1800000, 2500000, 2700000, 3500000, 3700000, 4200000, 4400000, 5200000, 5600000],
            "time": [172800, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400, 561600, 561600],
            "resource": "Builder Elixir",
            "costAndResources": []
        },
        "minLevel": 9,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 12, 14, 16, 18, 20]
    },
    {
        "id": 51,
        "name": "Wall Wrecker",
        "housingSpace": 1,
        "village": "home",
        "category": "troop",
        "subCategory": "siege",
        "unlock": {
            "hall": 12,
            "cost": 3000000,
            "time": 345600,
            "resource": "Elixir",
            "building": "Workshop",
            "buildingLevel": 1
        },
        "trainingTime": 1200,
        "regenerationTimes": [],
        "dps": [250, 300, 350, 400, 450],
        "upgrade": {
            "cost": [3800000, 5000000, 8500000, 15000000],
            "time": [345600, 432000, 691200, 1123200],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4, 5, 5]
    },
    {
        "id": 52,
        "name": "Battle Blimp",
        "housingSpace": 1,
        "village": "home",
        "category": "troop",
        "subCategory": "siege",
        "unlock": {
            "hall": 12,
            "cost": 5000000,
            "time": 432000,
            "resource": "Elixir",
            "building": "Workshop",
            "buildingLevel": 2
        },
        "trainingTime": 1200,
        "regenerationTimes": [],
        "dps": [100, 140, 180, 220],
        "upgrade": {
            "cost": [3800000, 5000000, 8500000],
            "time": [345600, 432000, 691200],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4, 4, 4]
    },
    {
        "id": 53,
        "name": "Yeti",
        "housingSpace": 18,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 12,
            "cost": 8000000,
            "time": 777600,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 14
        },
        "trainingTime": 180,
        "regenerationTimes": [],
        "dps": [230, 250, 270, 290, 310],
        "upgrade": {
            "cost": [7000000, 9000000, 17100000, 19000000],
            "time": [518400, 604800, 1036800, 1188000],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 5]
    },
    {
        "id": 55,
        "name": "Sneaky Goblin",
        "housingSpace": 3,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 2,
            "cost": 5000,
            "time": 3600,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 4
        },
        "trainingTime": 21,
        "regenerationTimes": [],
        "dps": [155, 170, 180],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 7,
        "seasonal": false,
        "levels": [0, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
    },
    {
        "id": 56,
        "name": "Super Miner",
        "housingSpace": 24,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 10,
            "cost": 3700000,
            "time": 475200,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 12
        },
        "trainingTime": 120,
        "regenerationTimes": [],
        "dps": [170, 185, 200, 215],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 7,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10]
    },
    {
        "id": 57,
        "name": "Rocket Balloon",
        "housingSpace": 8,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 4,
            "cost": 120000,
            "time": 43200,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 6
        },
        "trainingTime": 48,
        "regenerationTimes": [],
        "dps": [236, 256, 276, 290],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 8,
        "seasonal": false,
        "levels": [0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
    },
    {
        "id": 58,
        "name": "Ice Golem",
        "housingSpace": 15,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 11,
            "cost": 7500000,
            "time": 691200,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 8
        },
        "trainingTime": 150,
        "regenerationTimes": [],
        "dps": [24, 28, 32, 36, 40, 44, 48],
        "upgrade": {
            "cost": [55000, 85000, 100000, 125000, 240000, 335000],
            "time": [244800, 345600, 432000, 561600, 950400, 1144800],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 5, 6, 7, 7]
    },
    {
        "id": 59,
        "name": "Electro Dragon",
        "housingSpace": 30,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 11,
            "cost": 6500000,
            "time": 648000,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 13
        },
        "trainingTime": 360,
        "regenerationTimes": [],
        "dps": [240, 270, 300, 330, 360, 390, 420],
        "upgrade": {
            "cost": [6300000, 7000000, 9600000, 18000000, 20000000, 22000000],
            "time": [432000, 475200, 777600, 1036800, 1209600, 1382400],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 7]
    },
    {
        "id": 62,
        "name": "Stone Slammer",
        "housingSpace": 1,
        "village": "home",
        "category": "troop",
        "subCategory": "siege",
        "unlock": {
            "hall": 12,
            "cost": 7000000,
            "time": 604800,
            "resource": "Elixir",
            "building": "Workshop",
            "buildingLevel": 3
        },
        "trainingTime": 1200,
        "regenerationTimes": [],
        "dps": [400, 500, 600, 700, 750],
        "upgrade": {
            "cost": [3800000, 5000000, 8500000, 15000000],
            "time": [345600, 432000, 691200, 1123200],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4, 5, 5]
    },
    {
        "id": 63,
        "name": "Inferno Dragon",
        "housingSpace": 15,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 9,
            "cost": 2600000,
            "time": 345600,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 11
        },
        "trainingTime": 135,
        "regenerationTimes": [],
        "dps": [75, 79, 83, 85],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 6,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9]
    },
    {
        "id": 64,
        "name": "Super Valkyrie",
        "housingSpace": 20,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 8,
            "cost": 1000000,
            "time": 129600,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 3
        },
        "trainingTime": 225,
        "regenerationTimes": [],
        "dps": [250, 300, 325, 350, 375],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 7,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11]
    },
    {
        "id": 65,
        "name": "Dragon Rider",
        "housingSpace": 25,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 13,
            "cost": 10000000,
            "time": 820800,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 15
        },
        "trainingTime": 250,
        "regenerationTimes": [],
        "dps": [340, 370, 400, 430],
        "upgrade": {
            "cost": [9600000, 16500000, 21500000],
            "time": [777600, 1209600, 1382400],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 4]
    },
    {
        "id": 66,
        "name": "Super Witch",
        "housingSpace": 40,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 9,
            "cost": 2200000,
            "time": 302400,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 5
        },
        "trainingTime": 400,
        "regenerationTimes": [],
        "dps": [360, 390, 420],
        "upgrade": {
            "cost": [75000],
            "time": [518400],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 5,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7]
    },
    {
        "id": 70,
        "name": "Hog Glider",
        "housingSpace": 12,
        "village": "builderBase",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 9,
            "cost": 2000000,
            "time": 345600,
            "resource": "Builder Elixir",
            "building": "Builder Barracks",
            "buildingLevel": 11
        },
        "trainingTime": "",
        "regenerationTimes": [],
        "dps": [900, 1100, 1100, 1100, 1100, 1300],
        "upgrade": {
            "cost": [4000000, 4200000, 4400000, 5400000, 5800000],
            "time": [475200, 518400, 518400, 561600, 561600],
            "resource": "Builder Elixir",
            "costAndResources": []
        },
        "minLevel": 15,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 18, 20]
    },
    {
        "id": 75,
        "name": "Siege Barracks",
        "housingSpace": 1,
        "village": "home",
        "category": "troop",
        "subCategory": "siege",
        "unlock": {
            "hall": 13,
            "cost": 9000000,
            "time": 864000,
            "resource": "Elixir",
            "building": "Workshop",
            "buildingLevel": 4
        },
        "trainingTime": 1200,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [5000000, 7000000, 8500000],
            "time": [432000, 648000, 691200],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4]
    },
    {
        "id": 76,
        "name": "Ice Hound",
        "housingSpace": 40,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 9,
            "cost": 2900000,
            "time": 388800,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 6
        },
        "trainingTime": 400,
        "regenerationTimes": [],
        "dps": [10, 15],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 5,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
        "id": 80,
        "name": "Super Bowler",
        "housingSpace": 30,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 10,
            "cost": 4000000,
            "time": 561600,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 7
        },
        "trainingTime": 300,
        "regenerationTimes": [],
        "dps": [170, 185, 200, 215],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 4,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7]
    },
    {
        "id": 81,
        "name": "Super Dragon",
        "housingSpace": 40,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 7,
            "cost": 1000000,
            "time": 129600,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 9
        },
        "trainingTime": 360,
        "regenerationTimes": [],
        "dps": [80, 85, 90, 95, 99],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 7,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
    },
    {
        "id": 82,
        "name": "Headhunter",
        "housingSpace": 6,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 12,
            "cost": 9000000,
            "time": 864000,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 9
        },
        "trainingTime": 60,
        "regenerationTimes": [],
        "dps": [105, 115, 125],
        "upgrade": {
            "cost": [115000, 145000],
            "time": [777600, 864000],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 3]
    },
    {
        "id": 83,
        "name": "Super Wizard",
        "housingSpace": 10,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 5,
            "cost": 270000,
            "time": 64800,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 7
        },
        "trainingTime": 75,
        "regenerationTimes": [],
        "dps": [220, 240, 260, 275],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 9,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
    },
    {
        "id": 84,
        "name": "Super Minion",
        "housingSpace": 12,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 7,
            "cost": 200000,
            "time": 28800,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 1
        },
        "trainingTime": 108,
        "regenerationTimes": [],
        "dps": [300, 325, 350, 360],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 8,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
    },
    {
        "id": 87,
        "name": "Log Launcher",
        "housingSpace": 1,
        "village": "home",
        "category": "troop",
        "subCategory": "siege",
        "unlock": {
            "hall": 13,
            "cost": 10000000,
            "time": 950400,
            "resource": "Elixir",
            "building": "Workshop",
            "buildingLevel": 5
        },
        "trainingTime": 1200,
        "regenerationTimes": [],
        "dps": [140, 160, 180, 200],
        "upgrade": {
            "cost": [4800000, 6500000, 8500000],
            "time": [432000, 648000, 691200],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4]
    },
    {
        "id": 91,
        "name": "Flame Flinger",
        "housingSpace": 1,
        "village": "home",
        "category": "troop",
        "subCategory": "siege",
        "unlock": {
            "hall": 14,
            "cost": 14000000,
            "time": 1123200,
            "resource": "Elixir",
            "building": "Workshop",
            "buildingLevel": 6
        },
        "trainingTime": 1200,
        "regenerationTimes": [],
        "dps": [45, 50, 55, 60],
        "upgrade": {
            "cost": [7600000, 10500000, 13300000],
            "time": [648000, 1036800, 1080000],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4]
    },
    {
        "id": 92,
        "name": "Battle Drill",
        "housingSpace": 1,
        "village": "home",
        "category": "troop",
        "subCategory": "siege",
        "unlock": {
            "hall": 15,
            "cost": 19000000,
            "time": 1166400,
            "resource": "Elixir",
            "building": "Workshop",
            "buildingLevel": 7
        },
        "trainingTime": 1200,
        "regenerationTimes": [],
        "dps": [430, 470, 510, 550],
        "upgrade": {
            "cost": [8000000, 11000000, 14000000],
            "time": [864000, 1036800, 1080000],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4]
    },
    {
        "id": 95,
        "name": "Electro Titan",
        "housingSpace": 32,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 14,
            "cost": 12000000,
            "time": 1036800,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 16
        },
        "trainingTime": 360,
        "regenerationTimes": [],
        "dps": [180, 200, 220],
        "upgrade": {
            "cost": [19500000, 20500000],
            "time": [1123200, 1209600],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3]
    },
    {
        "id": 97,
        "name": "Apprentice Warden",
        "housingSpace": 20,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 13,
            "cost": 13000000,
            "time": 1123200,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 10
        },
        "trainingTime": 240,
        "regenerationTimes": [],
        "dps": [170, 185, 200, 215],
        "upgrade": {
            "cost": [180000, 300000, 340000],
            "time": [777600, 1036800, 1209600],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 4]
    },
    {
        "id": 98,
        "name": "Super Hog Rider",
        "housingSpace": 12,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 7,
            "cost": 600000,
            "time": 86400,
            "resource": "Elixir",
            "building": "Dark Barracks",
            "buildingLevel": 2
        },
        "trainingTime": 108,
        "regenerationTimes": [],
        "dps": [190, 210, 230],
        "upgrade": {
            "cost": [],
            "time": [],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 10,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
    },
    {
        "id": 106,
        "name": "Electrofire Wizard",
        "housingSpace": 14,
        "village": "builderBase",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 10,
            "cost": 3000000,
            "time": 432000,
            "resource": "Builder Elixir",
            "building": "Builder Barracks",
            "buildingLevel": 12
        },
        "trainingTime": "",
        "regenerationTimes": [],
        "dps": [220, 220, 253, 253],
        "upgrade": {
            "cost": [4400000, 5400000, 5800000],
            "time": [518400, 561600, 561600],
            "resource": "Builder Elixir",
            "costAndResources": []
        },
        "minLevel": 17,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 20]
    },
    {
        "id": 110,
        "name": "Root Rider",
        "housingSpace": 20,
        "village": "home",
        "category": "troop",
        "subCategory": "troop",
        "unlock": {
            "hall": 15,
            "cost": 16000000,
            "time": 1209600,
            "resource": "Elixir",
            "building": "Barracks",
            "buildingLevel": 17
        },
        "trainingTime": 220,
        "regenerationTimes": [],
        "dps": [210, 230, 250],
        "upgrade": {
            "cost": [19000000, 22000000],
            "time": [1036800, 1209600],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3]
    },
    {
        "id": 0,
        "name": "Lightning Spell",
        "housingSpace": 1,
        "village": "home",
        "category": "spell",
        "subCategory": "spell",
        "unlock": {
            "hall": 5,
            "cost": 150000,
            "time": 28800,
            "resource": "Elixir",
            "building": "Spell Factory",
            "buildingLevel": 1
        },
        "trainingTime": 180,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [50000, 100000, 200000, 600000, 1500000, 2500000, 4200000, 6300000, 16000000, 18500000],
            "time": [14400, 28800, 43200, 86400, 259200, 345600, 518400, 604800, 1080000, 1209600],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 4, 4, 4, 5, 6, 7, 8, 9, 9, 9, 10, 11]
    },
    {
        "id": 1,
        "name": "Healing Spell",
        "housingSpace": 2,
        "village": "home",
        "category": "spell",
        "subCategory": "spell",
        "unlock": {
            "hall": 6,
            "cost": 300000,
            "time": 86400,
            "resource": "Elixir",
            "building": "Spell Factory",
            "buildingLevel": 2
        },
        "trainingTime": 360,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [75000, 150000, 300000, 900000, 1800000, 3000000, 8500000, 17000000, 19000000],
            "time": [18000, 36000, 72000, 129600, 259200, 345600, 518400, 1144800, 1296000],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 3, 4, 5, 6, 7, 7, 7, 8, 8, 9, 10]
    },
    {
        "id": 2,
        "name": "Rage Spell",
        "housingSpace": 2,
        "village": "home",
        "category": "spell",
        "subCategory": "spell",
        "unlock": {
            "hall": 7,
            "cost": 600000,
            "time": 172800,
            "resource": "Elixir",
            "building": "Spell Factory",
            "buildingLevel": 3
        },
        "trainingTime": 360,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [400000, 800000, 1600000, 2400000, 7000000],
            "time": [43200, 86400, 172800, 345600, 518400],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6]
    },
    {
        "id": 3,
        "name": "Jump Spell",
        "housingSpace": 2,
        "village": "home",
        "category": "spell",
        "subCategory": "spell",
        "unlock": {
            "hall": 9,
            "cost": 1200000,
            "time": 302400,
            "resource": "Elixir",
            "building": "Spell Factory",
            "buildingLevel": 4
        },
        "trainingTime": 360,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [2000000, 3400000, 7200000, 16500000],
            "time": [259200, 345600, 518400, 1123200],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 4, 4, 5, 5]
    },
    {
        "id": 5,
        "name": "Freeze Spell",
        "housingSpace": 1,
        "village": "home",
        "category": "spell",
        "subCategory": "spell",
        "unlock": {
            "hall": 9,
            "cost": 1200000,
            "time": 302400,
            "resource": "Elixir",
            "building": "Spell Factory",
            "buildingLevel": 4
        },
        "trainingTime": 180,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [1200000, 1700000, 3000000, 4200000, 6000000, 7000000],
            "time": [129600, 223200, 280800, 345600, 518400, 604800],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 6, 7, 7, 7, 7, 7]
    },
    {
        "id": 9,
        "name": "Poison Spell",
        "housingSpace": 1,
        "village": "home",
        "category": "spell",
        "subCategory": "spell",
        "unlock": {
            "hall": 8,
            "cost": 130000,
            "time": 21600,
            "resource": "Elixir",
            "building": "Dark Spell Factory",
            "buildingLevel": 1
        },
        "trainingTime": 180,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [10000, 20000, 43000, 70000, 110000, 155000, 230000, 320000, 350000],
            "time": [28800, 86400, 223200, 345600, 540000, 604800, 864000, 1144800, 1296000],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        "id": 10,
        "name": "Earthquake Spell",
        "housingSpace": 1,
        "village": "home",
        "category": "spell",
        "subCategory": "spell",
        "unlock": {
            "hall": 8,
            "cost": 260000,
            "time": 64800,
            "resource": "Elixir",
            "building": "Dark Spell Factory",
            "buildingLevel": 2
        },
        "trainingTime": 180,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [12000, 24000, 51000, 84000],
            "time": [64800, 129600, 367200, 669600],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 5, 5, 5, 5, 5]
    },
    {
        "id": 11,
        "name": "Haste Spell",
        "housingSpace": 1,
        "village": "home",
        "category": "spell",
        "subCategory": "spell",
        "unlock": {
            "hall": 9,
            "cost": 600000,
            "time": 172800,
            "resource": "Elixir",
            "building": "Dark Spell Factory",
            "buildingLevel": 3
        },
        "trainingTime": 180,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [16000, 34000, 60000, 77000],
            "time": [129600, 223200, 432000, 669600],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 5, 5, 5, 5, 5]
    },
    {
        "id": 16,
        "name": "Clone Spell",
        "housingSpace": 3,
        "village": "home",
        "category": "spell",
        "subCategory": "spell",
        "unlock": {
            "hall": 10,
            "cost": 2000000,
            "time": 367200,
            "resource": "Elixir",
            "building": "Spell Factory",
            "buildingLevel": 5
        },
        "trainingTime": 540,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [2100000, 3400000, 4200000, 5600000, 7200000, 15500000, 18000000],
            "time": [151200, 259200, 302400, 345600, 604800, 777600, 1144800],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 5, 6, 7, 8, 8]
    },
    {
        "id": 17,
        "name": "Skeleton Spell",
        "housingSpace": 1,
        "village": "home",
        "category": "spell",
        "subCategory": "spell",
        "unlock": {
            "hall": 9,
            "cost": 1200000,
            "time": 345600,
            "resource": "Elixir",
            "building": "Dark Spell Factory",
            "buildingLevel": 4
        },
        "trainingTime": 180,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [22000, 34000, 50000, 80000, 100000, 150000, 320000],
            "time": [115200, 223200, 345600, 367200, 475200, 604800, 1144800],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 4, 6, 7, 7, 8, 8]
    },
    {
        "id": 28,
        "name": "Bat Spell",
        "housingSpace": 1,
        "village": "home",
        "category": "spell",
        "subCategory": "spell",
        "unlock": {
            "hall": 10,
            "cost": 2500000,
            "time": 518400,
            "resource": "Elixir",
            "building": "Dark Spell Factory",
            "buildingLevel": 5
        },
        "trainingTime": 180,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [26000, 51000, 70000, 95000, 330000],
            "time": [151200, 302400, 453600, 518400, 1166400],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 5, 5, 5, 6, 6]
    },
    {
        "id": 35,
        "name": "Invisibility Spell",
        "housingSpace": 1,
        "village": "home",
        "category": "spell",
        "subCategory": "spell",
        "unlock": {
            "hall": 11,
            "cost": 3500000,
            "time": 432000,
            "resource": "Elixir",
            "building": "Spell Factory",
            "buildingLevel": 6
        },
        "trainingTime": 180,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [5600000, 7500000, 9000000],
            "time": [475200, 518400, 820800],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 4, 4, 4]
    },
    {
        "id": 53,
        "name": "Recall Spell",
        "housingSpace": 2,
        "village": "home",
        "category": "spell",
        "subCategory": "spell",
        "unlock": {
            "hall": 13,
            "cost": 9000000,
            "time": 691200,
            "resource": "Elixir",
            "building": "Spell Factory",
            "buildingLevel": 7
        },
        "trainingTime": 360,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [7500000, 14000000, 17500000, 19500000],
            "time": [820800, 993600, 1144800, 1296000],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5]
    },
    {
        "id": 0,
        "name": "Barbarian King",
        "housingSpace": 25,
        "village": "home",
        "category": "hero",
        "subCategory": "hero",
        "unlock": {
            "hall": 7,
            "cost": 5000,
            "time": 0,
            "resource": "Dark Elixir",
            "building": "Barbarian King",
            "buildingLevel": 1
        },
        "resourceType": "Elixir",
        "trainingTime": 0,
        "regenerationTimes": [600, 600, 600, 600, 720, 720, 720, 720, 720, 840, 840, 840, 840, 840, 960, 960, 960, 960, 960, 1080, 1080, 1080, 1080, 1080, 1200, 1200, 1200, 1200, 1200, 1320, 1320, 1320, 1320, 1320, 1440, 1440, 1440, 1440, 1440, 1560, 1560, 1560, 1560, 1560, 1680, 1680, 1680, 1680, 1680, 1800, 1800, 1800, 1800, 1800, 1920, 1920, 1920, 1920, 1920, 2040, 2040, 2040, 2040, 2040, 2160, 2160, 2160, 2160, 2160, 2280, 2280, 2280, 2280, 2280, 2400, 2400, 2400, 2400, 2400, 2520, 2520, 2520, 2520, 2520, 2640, 2640, 2640, 2640, 2640, 2760, 2760, 2760, 2760, 2760, 2880],
        "dps": [102, 104, 105, 108, 110, 112, 115, 116, 119, 122, 124, 127, 129, 132, 134, 137, 139, 143, 145, 148, 151, 154, 157, 161, 164, 167, 170, 173, 177, 181, 184, 188, 192, 196, 200, 203, 207, 212, 216, 220, 234, 239, 244, 249, 254, 259, 265, 270, 276, 282, 288, 294, 300, 307, 314, 320, 327, 334, 341, 349, 355, 362, 370, 377, 385, 393, 400, 408, 417, 425, 434, 442, 451, 459, 468, 475, 483, 490, 498, 506, 513, 519, 526, 533, 540, 547, 553, 560, 567, 574, 581, 587, 594, 601, 608],
        "upgrade": {
            "cost": [5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18500, 20000, 21500, 23000, 24500, 26000, 28000, 29000, 31000, 32000, 34000, 35000, 37000, 38000, 40000, 41000, 43000, 44000, 46000, 47000, 49000, 50000, 52000, 53000, 55000, 56000, 60000, 64000, 68000, 72000, 76000, 80000, 84000, 88000, 92000, 96000, 100000, 105000, 110000, 115000, 120000, 125000, 130000, 135000, 140000, 145000, 150000, 155000, 160000, 165000, 170000, 175000, 180000, 185000, 190000, 195000, 200000, 205000, 210000, 215000, 220000, 225000, 230000, 235000, 240000, 245000, 250000, 255000, 260000, 265000, 270000, 275000, 278000, 280000, 282000, 285000, 290000, 300000, 310000, 320000, 330000],
            "time": [14400, 21600, 28800, 36000, 43200, 50400, 57600, 64800, 72000, 79200, 86400, 86400, 86400, 86400, 86400, 129600, 129600, 129600, 172800, 172800, 172800, 172800, 172800, 216000, 216000, 216000, 216000, 216000, 259200, 259200, 259200, 259200, 259200, 302400, 302400, 302400, 302400, 302400, 345600, 345600, 345600, 345600, 345600, 432000, 432000, 432000, 432000, 432000, 432000, 475200, 475200, 475200, 475200, 475200, 496800, 496800, 496800, 496800, 496800, 518400, 518400, 518400, 518400, 518400, 561600, 561600, 561600, 561600, 561600, 604800, 604800, 604800, 604800, 604800, 648000, 648000, 648000, 648000, 648000, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 50, 65, 75, 80, 90, 95]
    },
    {
        "id": 1,
        "name": "Archer Queen",
        "housingSpace": 25,
        "village": "home",
        "category": "hero",
        "subCategory": "hero",
        "unlock": {
            "hall": 9,
            "cost": 10000,
            "time": 0,
            "resource": "Dark Elixir",
            "building": "Archer Queen",
            "buildingLevel": 1
        },
        "resourceType": "Elixir",
        "trainingTime": 0,
        "regenerationTimes": [600, 600, 600, 600, 720, 720, 720, 720, 720, 840, 840, 840, 840, 840, 960, 960, 960, 960, 960, 1080, 1080, 1080, 1080, 1080, 1200, 1200, 1200, 1200, 1200, 1320, 1320, 1320, 1320, 1320, 1440, 1440, 1440, 1440, 1440, 1560, 1560, 1560, 1560, 1560, 1680, 1680, 1680, 1680, 1680, 1800, 1800, 1800, 1800, 1800, 1920, 1920, 1920, 1920, 1920, 2040, 2040, 2040, 2040, 2040, 2160, 2160, 2160, 2160, 2160, 2280, 2280, 2280, 2280, 2280, 2400, 2400, 2400, 2400, 2400, 2520, 2520, 2520, 2520, 2520, 2640, 2640, 2640, 2640, 2640, 2760, 2760, 2760, 2760, 2760, 2880],
        "dps": [136, 139, 143, 146, 150, 154, 157, 162, 165, 169, 173, 178, 183, 187, 192, 196, 201, 207, 212, 217, 223, 228, 234, 240, 246, 252, 258, 264, 271, 278, 285, 292, 299, 307, 315, 322, 331, 338, 347, 356, 365, 374, 383, 393, 403, 413, 423, 434, 445, 456, 465, 474, 485, 495, 505, 515, 526, 537, 548, 559, 570, 581, 593, 605, 617, 628, 638, 648, 656, 664, 671, 677, 682, 687, 692, 697, 701, 706, 710, 714, 717, 721, 724, 728, 731, 734, 738, 741, 745, 748, 751, 755, 758, 762, 765],
        "upgrade": {
            "cost": [10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 27000, 28000, 30000, 31000, 33000, 34000, 36000, 37000, 39000, 40000, 42000, 43000, 45000, 47000, 49000, 51000, 53000, 55000, 57000, 59000, 61000, 63000, 65000, 68000, 72000, 75000, 79000, 82000, 86000, 89000, 93000, 98000, 103000, 108000, 113000, 118000, 123000, 128000, 133000, 138000, 143000, 148000, 153000, 158000, 163000, 168000, 173000, 178000, 183000, 188000, 193000, 198000, 203000, 208000, 214000, 221000, 229000, 234000, 239000, 244000, 249000, 254000, 259000, 264000, 268000, 272000, 276000, 280000, 282000, 284000, 286000, 288000, 290000, 300000, 310000, 320000, 330000, 340000],
            "time": [14400, 21600, 28800, 36000, 43200, 50400, 57600, 64800, 72000, 79200, 86400, 86400, 86400, 86400, 86400, 129600, 129600, 129600, 172800, 172800, 172800, 172800, 172800, 216000, 216000, 216000, 216000, 216000, 259200, 259200, 259200, 259200, 259200, 302400, 302400, 302400, 302400, 302400, 345600, 345600, 345600, 345600, 345600, 432000, 432000, 432000, 432000, 432000, 432000, 475200, 475200, 475200, 475200, 475200, 496800, 496800, 496800, 496800, 496800, 518400, 518400, 518400, 518400, 518400, 561600, 561600, 561600, 561600, 561600, 604800, 604800, 604800, 604800, 604800, 648000, 648000, 648000, 648000, 648000, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 30, 40, 50, 65, 75, 80, 90, 95]
    },
    {
        "id": 2,
        "name": "Grand Warden",
        "housingSpace": 25,
        "village": "home",
        "category": "hero",
        "subCategory": "hero",
        "unlock": {
            "hall": 11,
            "cost": 1000000,
            "time": 0,
            "resource": "Elixir",
            "building": "Grand Warden",
            "buildingLevel": 1
        },
        "resourceType": "Elixir",
        "trainingTime": 0,
        "regenerationTimes": [1200, 1200, 1200, 1200, 1320, 1320, 1320, 1320, 1320, 1440, 1440, 1440, 1440, 1440, 1560, 1560, 1560, 1560, 1560, 1680, 1680, 1680, 1680, 1680, 1800, 1800, 1800, 1800, 1800, 1920, 1920, 1920, 1920, 1920, 2040, 2040, 2040, 2040, 2040, 2160, 2160, 2160, 2160, 2160, 2280, 2280, 2280, 2280, 2280, 2400, 2400, 2400, 2400, 2400, 2520, 2520, 2520, 2520, 2520, 2640, 2640, 2640, 2640, 2640, 2760, 2760, 2760, 2760, 2760, 2820],
        "dps": [43, 44, 46, 48, 49, 51, 54, 56, 59, 61, 64, 66, 70, 73, 77, 80, 83, 87, 90, 94, 98, 102, 106, 111, 116, 121, 126, 131, 137, 143, 149, 155, 162, 168, 175, 183, 190, 198, 207, 215, 221, 226, 230, 234, 237, 241, 244, 247, 251, 254, 258, 261, 264, 268, 271, 274, 276, 279, 281, 284, 286, 289, 292, 294, 297, 299, 302, 304, 307, 309],
        "upgrade": {
            "cost": [1000000, 1100000, 1200000, 1400000, 1500000, 1700000, 1800000, 2000000, 2300000, 2700000, 3000000, 3400000, 3700000, 4100000, 4400000, 4800000, 5100000, 5500000, 6000000, 6500000, 6600000, 6700000, 6800000, 6900000, 7000000, 7100000, 7200000, 7300000, 7400000, 7500000, 7600000, 7700000, 7800000, 7900000, 8000000, 8100000, 8200000, 8300000, 8400000, 8500000, 8800000, 9100000, 9400000, 9700000, 10000000, 10300000, 10600000, 11000000, 11500000, 12000000, 12500000, 13000000, 13500000, 14000000, 14500000, 15000000, 15500000, 16000000, 16200000, 16700000, 16900000, 17100000, 17300000, 17500000, 18000000, 18500000, 19000000, 19500000, 20000000],
            "time": [7200, 14400, 28800, 43200, 57600, 79200, 86400, 86400, 129600, 129600, 172800, 172800, 172800, 172800, 237600, 237600, 237600, 237600, 237600, 259200, 259200, 259200, 259200, 259200, 345600, 345600, 345600, 345600, 345600, 432000, 432000, 432000, 432000, 432000, 518400, 518400, 518400, 518400, 518400, 540000, 540000, 540000, 540000, 540000, 583200, 583200, 583200, 583200, 583200, 626400, 626400, 626400, 626400, 626400, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200],
            "resource": "Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 40, 50, 55, 65, 70]
    },
    {
        "id": 3,
        "name": "Battle Machine",
        "housingSpace": 25,
        "village": "builderBase",
        "category": "hero",
        "subCategory": "hero",
        "unlock": {
            "hall": 5,
            "cost": 900000,
            "time": 43200,
            "resource": "Builder Elixir",
            "building": "Battle Machine",
            "buildingLevel": 1
        },
        "resourceType": "Builder Elixir",
        "trainingTime": 0,
        "regenerationTimes": [0],
        "dps": [125, 127, 130, 132, 135, 137, 140, 142, 145, 147, 150, 154, 157, 160, 164, 167, 170, 174, 177, 180, 186, 192, 198, 204, 210, 218, 226, 234, 242, 250, 258, 266, 274, 282, 290],
        "upgrade": {
            "cost": [1000000, 1100000, 1200000, 1300000, 1500000, 1600000, 1700000, 1800000, 1900000, 2100000, 2200000, 2300000, 2400000, 2500000, 2600000, 2700000, 2800000, 2900000, 3000000, 3100000, 3200000, 3300000, 3400000, 3500000, 3600000, 3700000, 3800000, 3900000, 4000000, 4100000, 4200000, 4300000, 4400000, 4500000],
            "time": [43200, 43200, 86400, 86400, 129600, 129600, 172800, 172800, 216000, 216000, 259200, 259200, 302400, 302400, 345600, 345600, 345600, 345600, 345600, 432000, 432000, 432000, 432000, 432000, 518400, 518400, 518400, 518400, 518400, 604800, 604800, 604800, 604800, 604800],
            "resource": "Builder Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 5, 10, 20, 25, 30, 35]
    },
    {
        "id": 4,
        "name": "Royal Champion",
        "housingSpace": 25,
        "village": "home",
        "category": "hero",
        "subCategory": "hero",
        "unlock": {
            "hall": 13,
            "cost": 50000,
            "time": 0,
            "resource": "Dark Elixir",
            "building": "Royal Champion",
            "buildingLevel": 1
        },
        "resourceType": "Elixir",
        "trainingTime": 0,
        "regenerationTimes": [1800, 1800, 1800, 1800, 1920, 1920, 1920, 1920, 1920, 2040, 2040, 2040, 2040, 2040, 2160, 2160, 2160, 2160, 2160, 2280, 2280, 2280, 2280, 2280, 2400, 2400, 2400, 2400, 2400, 2520, 2520, 2520, 2520, 2520, 2640, 2640, 2640, 2640, 2640, 2760, 2760, 2760, 2760, 2760, 2880],
        "dps": [340, 350, 360, 370, 375, 380, 385, 390, 396, 402, 408, 414, 420, 426, 432, 438, 444, 448, 452, 456, 460, 465, 470, 474, 477, 480, 483, 486, 489, 492, 495, 498, 502, 506, 510, 514, 518, 522, 526, 530, 533, 536, 539, 542, 545],
        "upgrade": {
            "cost": [70000, 75000, 80000, 90000, 100000, 110000, 120000, 130000, 140000, 150000, 160000, 165000, 170000, 175000, 180000, 185000, 190000, 195000, 200000, 205000, 210000, 215000, 220000, 225000, 230000, 235000, 240000, 245000, 250000, 260000, 265000, 270000, 275000, 280000, 285000, 290000, 295000, 300000, 305000, 315000, 325000, 335000, 345000, 355000],
            "time": [28800, 43200, 57600, 72000, 158400, 237600, 280800, 324000, 367200, 388800, 432000, 432000, 432000, 475200, 475200, 475200, 518400, 518400, 518400, 561600, 561600, 561600, 561600, 561600, 626400, 626400, 626400, 626400, 626400, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 30, 40, 45]
    },
    {
        "id": 5,
        "name": "Battle Copter",
        "housingSpace": 25,
        "village": "builderBase",
        "category": "hero",
        "subCategory": "hero",
        "unlock": {
            "hall": 8,
            "cost": 2500000,
            "time": 0,
            "resource": "Builder Elixir",
            "building": "Battle Copter",
            "buildingLevel": 1
        },
        "resourceType": "Builder Elixir",
        "trainingTime": 0,
        "regenerationTimes": [0],
        "dps": [112, 116, 119, 123, 126, 130, 134, 137, 141, 144, 148, 153, 157, 162, 166, 171, 175, 180, 184, 189, 193],
        "upgrade": {
            "cost": [2600000, 2700000, 2800000, 2900000, 3000000, 3100000, 3200000, 3300000, 3400000, 3500000, 3600000, 3700000, 3800000, 3900000, 4000000, 4100000, 4200000, 4300000, 4400000, 4500000],
            "time": [432000, 432000, 432000, 432000, 432000, 432000, 432000, 432000, 432000, 432000, 518400, 518400, 518400, 518400, 518400, 604800, 604800, 604800, 604800, 604800],
            "resource": "Builder Elixir",
            "costAndResources": []
        },
        "minLevel": 15,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 25, 30, 35]
    },
    {
        "id": 0,
        "name": "L.A.S.S.I",
        "housingSpace": 20,
        "village": "home",
        "category": "troop",
        "subCategory": "pet",
        "unlock": {
            "hall": 14,
            "cost": 10000000,
            "time": 1036800,
            "resource": "Elixir",
            "building": "Pet House",
            "buildingLevel": 1
        },
        "resourceType": "Dark Elixir",
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290],
        "upgrade": {
            "cost": [100000, 110000, 125000, 135000, 150000, 160000, 175000, 185000, 200000, 215000, 230000, 245000, 260000, 275000],
            "time": [259200, 345600, 388800, 432000, 475200, 518400, 561600, 604800, 648000, 691200, 691200, 691200, 691200, 691200],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 15, 15]
    },
    {
        "id": 1,
        "name": "Mighty Yak",
        "housingSpace": 20,
        "village": "home",
        "category": "troop",
        "subCategory": "pet",
        "unlock": {
            "hall": 14,
            "cost": 14000000,
            "time": 1101600,
            "resource": "Elixir",
            "building": "Pet House",
            "buildingLevel": 3
        },
        "resourceType": "Dark Elixir",
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116],
        "upgrade": {
            "cost": [140000, 155000, 175000, 190000, 210000, 215000, 225000, 230000, 240000, 250000, 260000, 270000, 280000, 290000],
            "time": [259200, 345600, 388800, 432000, 475200, 518400, 561600, 604800, 648000, 691200, 691200, 691200, 691200, 691200],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 15, 15]
    },
    {
        "id": 2,
        "name": "Electro Owl",
        "housingSpace": 20,
        "village": "home",
        "category": "troop",
        "subCategory": "pet",
        "unlock": {
            "hall": 14,
            "cost": 12000000,
            "time": 1080000,
            "resource": "Elixir",
            "building": "Pet House",
            "buildingLevel": 2
        },
        "resourceType": "Dark Elixir",
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [100, 105, 110, 115, 120, 125, 130, 135, 140, 145],
        "upgrade": {
            "cost": [115000, 130000, 140000, 155000, 165000, 180000, 190000, 205000, 215000],
            "time": [259200, 345600, 388800, 432000, 475200, 518400, 561600, 604800, 648000],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]
    },
    {
        "id": 3,
        "name": "Unicorn",
        "housingSpace": 20,
        "village": "home",
        "category": "troop",
        "subCategory": "pet",
        "unlock": {
            "hall": 14,
            "cost": 16000000,
            "time": 1123200,
            "resource": "Elixir",
            "building": "Pet House",
            "buildingLevel": 4
        },
        "resourceType": "Dark Elixir",
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [180000, 190000, 200000, 210000, 220000, 230000, 240000, 250000, 260000],
            "time": [259200, 345600, 388800, 432000, 475200, 518400, 561600, 604800, 648000],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]
    },
    {
        "id": 4,
        "name": "Phoenix",
        "housingSpace": 20,
        "village": "home",
        "category": "troop",
        "subCategory": "pet",
        "unlock": {
            "hall": 15,
            "cost": 20500000,
            "time": 1209600,
            "resource": "Elixir",
            "building": "Pet House",
            "buildingLevel": 8
        },
        "resourceType": "Dark Elixir",
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [178, 186, 194, 202, 210, 218, 226, 234, 242, 250],
        "upgrade": {
            "cost": [195000, 205000, 210000, 220000, 225000, 235000, 240000, 250000, 255000],
            "time": [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10]
    },
    {
        "id": 7,
        "name": "Poison Lizard",
        "housingSpace": 20,
        "village": "home",
        "category": "troop",
        "subCategory": "pet",
        "unlock": {
            "hall": 15,
            "cost": 20250000,
            "time": 1188000,
            "resource": "Elixir",
            "building": "Pet House",
            "buildingLevel": 7
        },
        "resourceType": "Dark Elixir",
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [181, 192, 203, 214, 225, 236, 247, 258, 269, 280],
        "upgrade": {
            "cost": [190000, 195000, 200000, 210000, 215000, 225000, 230000, 240000, 245000],
            "time": [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10]
    },
    {
        "id": 8,
        "name": "Diggy",
        "housingSpace": 20,
        "village": "home",
        "category": "troop",
        "subCategory": "pet",
        "unlock": {
            "hall": 15,
            "cost": 20000000,
            "time": 1166400,
            "resource": "Elixir",
            "building": "Pet House",
            "buildingLevel": 6
        },
        "resourceType": "Dark Elixir",
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [105, 110, 115, 120, 125, 130, 135, 140, 145, 150],
        "upgrade": {
            "cost": [185000, 195000, 200000, 210000, 215000, 225000, 230000, 240000, 245000],
            "time": [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10]
    },
    {
        "id": 9,
        "name": "Frosty",
        "housingSpace": 20,
        "village": "home",
        "category": "troop",
        "subCategory": "pet",
        "unlock": {
            "hall": 15,
            "cost": 19750000,
            "time": 1144800,
            "resource": "Elixir",
            "building": "Pet House",
            "buildingLevel": 5
        },
        "resourceType": "Dark Elixir",
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [94, 98, 102, 106, 110, 114, 118, 122, 126, 130],
        "upgrade": {
            "cost": [185000, 190000, 200000, 210000, 215000, 225000, 235000, 240000, 250000],
            "time": [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10]
    },
    {
        "id": 10,
        "name": "Spirit Fox",
        "housingSpace": 20,
        "village": "home",
        "category": "troop",
        "subCategory": "pet",
        "unlock": {
            "hall": 16,
            "cost": 21000000,
            "time": 1296000,
            "resource": "Elixir",
            "building": "Pet House",
            "buildingLevel": 9
        },
        "resourceType": "Dark Elixir",
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [108, 116, 124, 132, 140, 148, 156, 164, 172, 180],
        "upgrade": {
            "cost": [225000, 235000, 245000, 255000, 265000, 275000, 285000, 295000, 315000],
            "time": [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
            "resource": "Dark Elixir",
            "costAndResources": []
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
    },
    {
        "id": 0,
        "name": "Barbarian Puppet",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 8,
            "cost": 750000,
            "time": 86400,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 1
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 9, 9, 12, 12, 15, 15, 18, 18, 18]
    },
    {
        "id": 1,
        "name": "Rage Vial",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 8,
            "cost": 750000,
            "time": 86400,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 1
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [17, 22, 27, 32, 37, 42, 48, 54, 60, 66, 72, 79, 86, 94, 104, 112, 120, 128],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 9, 9, 12, 12, 15, 15, 18, 18, 18]
    },
    {
        "id": 2,
        "name": "Archer Puppet",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 8,
            "cost": 750000,
            "time": 86400,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 1
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [26, 34, 42, 49, 55, 62, 71, 80, 90, 100, 109, 115, 122, 127, 132, 136, 140, 144],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 9, 9, 12, 12, 15, 15, 18, 18, 18]
    },
    {
        "id": 3,
        "name": "Invisibility Vial",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 8,
            "cost": 750000,
            "time": 86400,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 1
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 9, 9, 12, 12, 15, 15, 18, 18, 18]
    },
    {
        "id": 4,
        "name": "Eternal Tome",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 8,
            "cost": 750000,
            "time": 86400,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 1
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 9, 9, 12, 12, 15, 15, 18, 18, 18]
    },
    {
        "id": 5,
        "name": "Life Gem",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 8,
            "cost": 750000,
            "time": 86400,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 1
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 38, 42, 46, 50, 54, 58, 62, 66],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 9, 9, 12, 12, 15, 15, 18, 18, 18]
    },
    {
        "id": 6,
        "name": "Seeking Shield",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 8,
            "cost": 750000,
            "time": 86400,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 1
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 9, 9, 12, 12, 15, 15, 18, 18, 18]
    },
    {
        "id": 7,
        "name": "Royal Gem",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 8,
            "cost": 750000,
            "time": 86400,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 1
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 9, 9, 12, 12, 15, 15, 18, 18, 18]
    },
    {
        "id": 8,
        "name": "Earthquake Boots",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 8,
            "cost": 750000,
            "time": 86400,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 1
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [13, 15, 17, 19, 21, 23, 26, 28, 32, 40, 48, 55, 63, 71, 79, 86, 94, 102],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 9, 9, 12, 12, 15, 15, 18, 18, 18]
    },
    {
        "id": 10,
        "name": "Giant Gauntlet",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 8,
            "cost": 750000,
            "time": 86400,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 1
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [17, 20, 23, 26, 29, 32, 34, 37, 43, 53, 63, 74, 84, 94, 104, 115, 125, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    },
                    {
                        "resource": "Starry Ore",
                        "cost": 10
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    },
                    {
                        "resource": "Starry Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    },
                    {
                        "resource": "Starry Ore",
                        "cost": 30
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    },
                    {
                        "resource": "Starry Ore",
                        "cost": 50
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2800
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 3000
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    },
                    {
                        "resource": "Starry Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 3100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 3200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 3300
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    },
                    {
                        "resource": "Starry Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 3400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 3500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 3600
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    },
                    {
                        "resource": "Starry Ore",
                        "cost": 150
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 12, 12, 15, 15, 18, 18, 21, 24, 27]
    },
    {
        "id": 11,
        "name": "Vampstache",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 10,
            "cost": 2300000,
            "time": 259200,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 3
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [9, 10, 12, 13, 15, 16, 18, 19, 22, 27, 32, 37, 42, 48, 53, 58, 63, 68],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 15, 15, 18, 18, 18]
    },
    {
        "id": 15,
        "name": "Frozen Arrow",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 8,
            "cost": 750000,
            "time": 86400,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 1
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [35, 40, 45, 50, 55, 60, 66, 72, 78, 85, 92, 99, 105, 111, 117, 122, 127, 132, 136, 140, 144, 148, 152, 156, 160, 164, 168],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    },
                    {
                        "resource": "Starry Ore",
                        "cost": 10
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    },
                    {
                        "resource": "Starry Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    },
                    {
                        "resource": "Starry Ore",
                        "cost": 30
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    },
                    {
                        "resource": "Starry Ore",
                        "cost": 50
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2800
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 3000
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    },
                    {
                        "resource": "Starry Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 3100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 3200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 3300
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    },
                    {
                        "resource": "Starry Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 3400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 3500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 3600
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    },
                    {
                        "resource": "Starry Ore",
                        "cost": 150
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 12, 12, 15, 15, 18, 18, 21, 24, 27]
    },
    {
        "id": 17,
        "name": "Giant Arrow",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 9,
            "cost": 1700000,
            "time": 172800,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 2
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [20, 23, 27, 30, 33, 37, 40, 43, 50, 59, 68, 77, 86, 96, 105, 114, 123, 132],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 9, 12, 12, 15, 15, 18, 18, 18]
    },
    {
        "id": 20,
        "name": "Healer Puppet",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 12,
            "cost": 5500000,
            "time": 432000,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 5
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 18, 18, 18]
    },
    {
        "id": 24,
        "name": "Rage Gem",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 11,
            "cost": 3000000,
            "time": 345600,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 4
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [12, 14, 16, 18, 20, 22, 24, 26, 30, 36, 43, 49, 56, 62, 69, 75, 82, 88],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 15, 15, 18, 18, 18]
    },
    {
        "id": 34,
        "name": "Healing Tome",
        "housingSpace": 0,
        "village": "home",
        "category": "equipment",
        "subCategory": "equipment",
        "unlock": {
            "hall": 13,
            "cost": 8500000,
            "time": 518400,
            "resource": "Gold",
            "building": "Blacksmith",
            "buildingLevel": 6
        },
        "trainingTime": 0,
        "regenerationTimes": [],
        "dps": [],
        "upgrade": {
            "cost": [120, 240, 400, 600, 840, 1120, 1440, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
            "time": [],
            "resource": "Shiny Ore",
            "costAndResources": [
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 240
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 20
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 840
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 100
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1120
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1440
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1800
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 1900
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2000
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2100
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 400
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2200
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2300
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2400
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2500
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2600
                    }
                ],
                [
                    {
                        "resource": "Shiny Ore",
                        "cost": 2700
                    },
                    {
                        "resource": "Glowy Ore",
                        "cost": 600
                    }
                ]
            ]
        },
        "minLevel": 1,
        "seasonal": false,
        "levels": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 18, 18, 18]
    }
];

export default troops;