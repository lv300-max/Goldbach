# GOLDBACH_1MIN_10CORE_TARGETED_SIGNAL_SUITE

FINITE EVIDENCE ONLY. UNIVERSAL PROOF REMAINS OPEN. PATTERN DOES NOT MEAN PROOF.

## Summary

```json
{
  "runtimeSeconds": 1.789,
  "workers": 10,
  "uniqueRowsTested": 10163,
  "K13_431Misses": 0,
  "maxTrueK": 13.4309400510447,
  "maxP29": 582,
  "bossFullIDRepeats": 1,
  "topDMVID": "L|L/24/P29_BOSS/TAIL_STRONG/K13",
  "finalVerdict": "BOSS_REMAINS_ISOLATED_IN_TARGETED_10LANE_SUITE"
}
```

## Lane Results

```json
[
  {
    "laneNumber": 1,
    "laneName": "Boss State-Width DMV Test",
    "rowsTested": 4046,
    "bestC": "3889129261038184",
    "bestTrueK": 13.4309400510447,
    "bestP29": 582,
    "mainAnswer": "MIXED",
    "note": "NO_NEW_SIGNAL",
    "threeFiveD24Count": 0,
    "threeFiveD0Count": 0,
    "targeted3_5MaxTrueK": null,
    "targeted3_5MaxP29": null
  },
  {
    "laneNumber": 2,
    "laneName": "Boss Full ID Stress Test",
    "rowsTested": 22,
    "bestC": "3889129261045384",
    "bestTrueK": 5.426854092387235,
    "bestP29": 232,
    "mainAnswer": "NO",
    "note": "NO_NEW_SIGNAL",
    "fullBossIDCount": 1,
    "nearBossIDCount": 0,
    "closestNonBoss": {
      "C": "3209851851697528",
      "trueK": 10.323590888035527,
      "DMV": "L|23/12/P29_HIGH/TAIL_STRONG/K10"
    }
  },
  {
    "laneNumber": 3,
    "laneName": "Boss vs FullCover Split Drift Map",
    "rowsTested": 2,
    "bestC": "501-534",
    "bestTrueK": 26.47,
    "bestP29": 31,
    "mainAnswer": "YES",
    "note": "baby-boss loses pressure in split windows",
    "drift": [
      {
        "startGap": 1,
        "endGap": 500,
        "matchPercent": 21.4,
        "p29SurvivorCount": 446,
        "oneSideLeaks": 21,
        "bothBlocked": 259,
        "largeComposite": 489,
        "splitZone": true,
        "reconnectZone": false
      },
      {
        "startGap": 501,
        "endGap": 534,
        "matchPercent": 26.47,
        "p29SurvivorCount": 31,
        "oneSideLeaks": 3,
        "bothBlocked": 17,
        "largeComposite": 32,
        "splitZone": true,
        "reconnectZone": false
      }
    ],
    "splitZones": 2,
    "reconnectZones": 0
  },
  {
    "laneNumber": 4,
    "laneName": "P29 Survivor Mass Hunter",
    "rowsTested": 1185,
    "bestC": "3889129261038184",
    "bestTrueK": 13.4309400510447,
    "bestP29": 582,
    "mainAnswer": "YES",
    "note": "NO_NEW_SIGNAL",
    "p29_500_count": 1,
    "p29_550_count": 1,
    "highRows": [
      {
        "C": "3889129261038184",
        "trueK": 13.4309400510447,
        "P29": 582,
        "pairStart": "L|L",
        "Dmod30": 24,
        "DMV": "L|L/24/P29_BOSS/TAIL_STRONG/K13"
      }
    ]
  },
  {
    "laneNumber": 5,
    "laneName": "Tail Rescue Stress Map",
    "rowsTested": 10005,
    "bestC": "3889129261038184",
    "bestTrueK": 13.4309400510447,
    "bestP29": 582,
    "mainAnswer": "NO",
    "note": "NO_NEW_SIGNAL",
    "weakTail1Count": 595,
    "weakTail2Count": 889,
    "weakHigh8Count": 0,
    "weakHigh10Count": 0,
    "tail2RescueCount": 0,
    "tail4RescueCount": 0
  },
  {
    "laneNumber": 6,
    "laneName": "D-Width Family Ranking",
    "rowsTested": 185,
    "bestC": "3912698353475078",
    "bestTrueK": 10.01919534412,
    "bestP29": 457,
    "mainAnswer": "MIXED",
    "note": "ranked by pairStart+Dmod30",
    "topFamilies": [
      {
        "pairStart": "L|L",
        "Dmod30": 0,
        "rowCount": 685,
        "maxTrueK": 10.01919534412,
        "maxP29": 457,
        "bestC": "3912698353475078"
      },
      {
        "pairStart": "L|L",
        "Dmod30": 12,
        "rowCount": 473,
        "maxTrueK": 7.499722853925,
        "maxP29": 322,
        "bestC": "3209851851696962"
      },
      {
        "pairStart": "L|L",
        "Dmod30": 18,
        "rowCount": 468,
        "maxTrueK": 3.748684815282,
        "maxP29": 157,
        "bestC": "3209851851695782"
      },
      {
        "pairStart": "L|L",
        "Dmod30": 6,
        "rowCount": 462,
        "maxTrueK": 4.414120394711,
        "maxP29": 184,
        "bestC": "3889134139470571"
      },
      {
        "pairStart": "L|L",
        "Dmod30": 24,
        "rowCount": 459,
        "maxTrueK": 13.430940051045,
        "maxP29": 582,
        "bestC": "3889129261038184"
      },
      {
        "pairStart": "L|P",
        "Dmod30": 0,
        "rowCount": 174,
        "maxTrueK": 9.591986184282,
        "maxP29": 417,
        "bestC": "3194349700443064"
      },
      {
        "pairStart": "L|L",
        "Dmod30": 10,
        "rowCount": 171,
        "maxTrueK": 1.698242859403,
        "maxP29": 152,
        "bestC": "3209851851695562"
      },
      {
        "pairStart": "P|L",
        "Dmod30": 0,
        "rowCount": 154,
        "maxTrueK": 3.457262259629,
        "maxP29": 149,
        "bestC": "3889129261037288"
      },
      {
        "pairStart": "L|L",
        "Dmod30": 20,
        "rowCount": 151,
        "maxTrueK": 2.349938537581,
        "maxP29": 201,
        "bestC": "3194349700442388"
      },
      {
        "pairStart": "L|L",
        "Dmod30": 4,
        "rowCount": 137,
        "maxTrueK": 1.456628790421,
        "maxP29": 123,
        "bestC": "3889129261036836"
      },
      {
        "pairStart": "L|L",
        "Dmod30": 14,
        "rowCount": 132,
        "maxTrueK": 1.774208265738,
        "maxP29": 200,
        "bestC": "3912698353473756"
      },
      {
        "pairStart": "P|L",
        "Dmod30": 12,
        "rowCount": 129,
        "maxTrueK": 4.252274614698,
        "maxP29": 173,
        "bestC": "3209851851697318"
      },
      {
        "pairStart": "L|L",
        "Dmod30": 8,
        "rowCount": 128,
        "maxTrueK": 1.899884583643,
        "maxP29": 157,
        "bestC": "3912698353473108"
      },
      {
        "pairStart": "L|P",
        "Dmod30": 6,
        "rowCount": 127,
        "maxTrueK": 3.414527097912,
        "maxP29": 199,
        "bestC": "3209851851698860"
      },
      {
        "pairStart": "L|L",
        "Dmod30": 22,
        "rowCount": 127,
        "maxTrueK": 1.655884838891,
        "maxP29": 141,
        "bestC": "3209851851695802"
      },
      {
        "pairStart": "P|L",
        "Dmod30": 18,
        "rowCount": 119,
        "maxTrueK": 4.197605288964,
        "maxP29": 179,
        "bestC": "3889129261038092"
      },
      {
        "pairStart": "L|L",
        "Dmod30": 26,
        "rowCount": 119,
        "maxTrueK": 2.011596866226,
        "maxP29": 175,
        "bestC": "3912698353473516"
      },
      {
        "pairStart": "L|P",
        "Dmod30": 18,
        "rowCount": 118,
        "maxTrueK": 4.289286183325,
        "maxP29": 185,
        "bestC": "3912698353475902"
      },
      {
        "pairStart": "P|L",
        "Dmod30": 6,
        "rowCount": 116,
        "maxTrueK": 5.392697017961,
        "maxP29": 274,
        "bestC": "3194349700441186"
      },
      {
        "pairStart": "L|L",
        "Dmod30": 2,
        "rowCount": 112,
        "maxTrueK": 1.956399137267,
        "maxP29": 160,
        "bestC": "3889129261037382"
      }
    ]
  },
  {
    "laneNumber": 7,
    "laneName": "Echo Bridge vs Resident Test",
    "rowsTested": 11,
    "bestC": "3889129261038184",
    "bestTrueK": 2.022457782588,
    "bestP29": 582,
    "mainAnswer": "MIXED",
    "note": "echo visitors exist",
    "bossEndingShapeCount": 83,
    "exactBossSuffix2Count": 23,
    "outsideBossStateEcho": 60
  },
  {
    "laneNumber": 8,
    "laneName": "State-Specific Schema Expansion",
    "rowsTested": 185,
    "bestC": "3889129261038184",
    "bestTrueK": 13.4309400510447,
    "bestP29": 582,
    "mainAnswer": "MIXED",
    "note": "state schemas were separated",
    "schema": {
      "3|5": {
        "bestID": null,
        "topRow": null,
        "stateDrift": "NO_ROWS",
        "mainAnswer": "NO"
      },
      "3|17": {
        "bestID": null,
        "topRow": null,
        "stateDrift": "NO_ROWS",
        "mainAnswer": "NO"
      },
      "L|3": {
        "bestID": null,
        "topRow": null,
        "stateDrift": "NO_ROWS",
        "mainAnswer": "NO"
      },
      "L|L": {
        "bestID": "TAIL_STRONG/P|L,L|P/582",
        "topRow": {
          "C": "3889129261038184",
          "trueK": 13.4309400510447,
          "P29": 582,
          "Dmod30": 24,
          "DMV": "L|L/24/P29_BOSS/TAIL_STRONG/K13"
        },
        "stateDrift": "YES",
        "mainAnswer": "YES"
      }
    }
  },
  {
    "laneNumber": 9,
    "laneName": "Hotel Pressure Link",
    "rowsTested": 30,
    "bestC": "3889134139472909",
    "bestTrueK": 13.430940051045,
    "bestP29": 582,
    "mainAnswer": "MIXED",
    "note": "hotel signal is weaker than DMV/state buckets",
    "ranked": [
      {
        "hotelPattern": "EOEOEOEEEE",
        "mod30District": "24",
        "count": 9,
        "maxTrueK": 13.430940051045,
        "maxP29": 582,
        "stateCount": 4,
        "rows": [
          {
            "C": "3889134139472909",
            "trueK": 0.8008741644412644,
            "P29": 32,
            "pairStart": "L|41",
            "Dmod30": 24,
            "DMV": "L|41/24/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3889135730731414",
            "trueK": 1.2082955868306542,
            "P29": 51,
            "pairStart": "P|L",
            "Dmod30": 24,
            "DMV": "P|L/24/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3209851851698114",
            "trueK": 0.3035658136668724,
            "P29": 14,
            "pairStart": "L|L",
            "Dmod30": 24,
            "DMV": "L|L/24/P29_LOW/TAIL_OK/KLOW"
          },
          {
            "C": "3889129261038184",
            "trueK": 13.4309400510447,
            "P29": 582,
            "pairStart": "L|L",
            "Dmod30": 24,
            "DMV": "L|L/24/P29_BOSS/TAIL_STRONG/K13"
          },
          {
            "C": "3903970737307804",
            "trueK": 0.7657898610839526,
            "P29": 33,
            "pairStart": "L|L",
            "Dmod30": 24,
            "DMV": "L|L/24/P29_LOW/TAIL_STRONG/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "OEEOEOEEEE",
        "mod30District": "12",
        "count": 7,
        "maxTrueK": 10.323590888036,
        "maxP29": 441,
        "stateCount": 3,
        "rows": [
          {
            "C": "3209851851697528",
            "trueK": 10.323590888035527,
            "P29": 441,
            "pairStart": "L|23",
            "Dmod30": 12,
            "DMV": "L|23/12/P29_HIGH/TAIL_STRONG/K10"
          },
          {
            "C": "3209651291207398",
            "trueK": 2.816818223036119,
            "P29": 119,
            "pairStart": "P|23",
            "Dmod30": 12,
            "DMV": "P|23/12/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3889129261036982",
            "trueK": 1.6459827727662966,
            "P29": 73,
            "pairStart": "L|19",
            "Dmod30": 12,
            "DMV": "L|19/12/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3209845382004298",
            "trueK": 0.46358505460596,
            "P29": 19,
            "pairStart": "L|23",
            "Dmod30": 12,
            "DMV": "L|23/12/P29_LOW/TAIL_OK/KLOW"
          },
          {
            "C": "3912698353473872",
            "trueK": 0.1559317277714366,
            "P29": 8,
            "pairStart": "L|19",
            "Dmod30": 12,
            "DMV": "L|19/12/P29_LOW/TAIL_MID/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "EEEEEEEEEO",
        "mod30District": "0",
        "count": 26,
        "maxTrueK": 10.01919534412,
        "maxP29": 457,
        "stateCount": 4,
        "rows": [
          {
            "C": "3194349700441924",
            "trueK": 0.7650050331022289,
            "P29": 30,
            "pairStart": "P|L",
            "Dmod30": 0,
            "DMV": "P|L/0/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3889134139471229",
            "trueK": 1.9090605082611996,
            "P29": 88,
            "pairStart": "L|P",
            "Dmod30": 0,
            "DMV": "L|P/0/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3912698353475764",
            "trueK": 1.5476805816119783,
            "P29": 62,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3194349700441826",
            "trueK": 0.8356208823116671,
            "P29": 35,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3889129261038874",
            "trueK": 1.3386705719103185,
            "P29": 55,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_STRONG/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "EOEEEEEEOE",
        "mod30District": "0",
        "count": 24,
        "maxTrueK": 9.591986184282,
        "maxP29": 417,
        "stateCount": 10,
        "rows": [
          {
            "C": "3194349700443064",
            "trueK": 9.591986184281602,
            "P29": 417,
            "pairStart": "L|P",
            "Dmod30": 0,
            "DMV": "L|P/0/P29_HIGH/TAIL_STRONG/K8"
          },
          {
            "C": "3209191176712684",
            "trueK": 0.8118714210713334,
            "P29": 37,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3209851851695746",
            "trueK": 2.1767316096268883,
            "P29": 99,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3209851851696106",
            "trueK": 1.8943448062158208,
            "P29": 81,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3889134139473029",
            "trueK": 0.7915616741570621,
            "P29": 37,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_STRONG/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "EOEEEEOEOE",
        "mod30District": "0",
        "count": 4,
        "maxTrueK": 9.335771509911,
        "maxP29": 404,
        "stateCount": 4,
        "rows": [
          {
            "C": "3889535260452001",
            "trueK": 0.3724974709613383,
            "P29": 13,
            "pairStart": "31|L",
            "Dmod30": 0,
            "DMV": "31|L/0/P29_LOW/TAIL_MID/KLOW"
          },
          {
            "C": "3209851851695552",
            "trueK": 0.34121738745502683,
            "P29": 16,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_OK/KLOW"
          },
          {
            "C": "3889134139471741",
            "trueK": 9.335771509911405,
            "P29": 404,
            "pairStart": "31|P",
            "Dmod30": 0,
            "DMV": "31|P/0/P29_HIGH/TAIL_STRONG/K8"
          },
          {
            "C": "3889134139469843",
            "trueK": 1.8857792825507345,
            "P29": 86,
            "pairStart": "L|P",
            "Dmod30": 0,
            "DMV": "L|P/0/P29_LOW/TAIL_STRONG/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "EEEEEEEEOO",
        "mod30District": "12",
        "count": 7,
        "maxTrueK": 7.499722853925,
        "maxP29": 322,
        "stateCount": 2,
        "rows": [
          {
            "C": "3209851851696350",
            "trueK": 0.13413373162025008,
            "P29": 9,
            "pairStart": "L|L",
            "Dmod30": 12,
            "DMV": "L|L/12/P29_LOW/TAIL_MID/KLOW"
          },
          {
            "C": "3889134139473713",
            "trueK": 0.26074972795761797,
            "P29": 13,
            "pairStart": "L|L",
            "Dmod30": 12,
            "DMV": "L|L/12/P29_LOW/TAIL_MID/KLOW"
          },
          {
            "C": "3889134139472983",
            "trueK": 0.37715585651012984,
            "P29": 15,
            "pairStart": "L|L",
            "Dmod30": 12,
            "DMV": "L|L/12/P29_LOW/TAIL_OK/KLOW"
          },
          {
            "C": "3209851851696002",
            "trueK": 0.25179489970819025,
            "P29": 9,
            "pairStart": "L|L",
            "Dmod30": 12,
            "DMV": "L|L/12/P29_LOW/TAIL_MID/KLOW"
          },
          {
            "C": "3209851851696962",
            "trueK": 7.49972285392513,
            "P29": 322,
            "pairStart": "L|L",
            "Dmod30": 12,
            "DMV": "L|L/12/P29_MED/TAIL_STRONG/K5"
          }
        ]
      },
      {
        "hotelPattern": "OEEOOEOEEE",
        "mod30District": "18",
        "count": 1,
        "maxTrueK": 6.998030656655,
        "maxP29": 296,
        "stateCount": 1,
        "rows": [
          {
            "C": "3194349700444192",
            "trueK": 6.998030656654881,
            "P29": 296,
            "pairStart": "47|23",
            "Dmod30": 18,
            "DMV": "47|23/18/P29_MED/TAIL_STRONG/K5"
          }
        ]
      },
      {
        "hotelPattern": "EEEEEOEEEE",
        "mod30District": "18",
        "count": 15,
        "maxTrueK": 5.748924672777,
        "maxP29": 243,
        "stateCount": 8,
        "rows": [
          {
            "C": "3209851851698830",
            "trueK": 0.43063987520183683,
            "P29": 26,
            "pairStart": "L|P",
            "Dmod30": 18,
            "DMV": "L|P/18/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3912698353474408",
            "trueK": 0.49572325395993627,
            "P29": 25,
            "pairStart": "L|L",
            "Dmod30": 18,
            "DMV": "L|L/18/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3194349700441090",
            "trueK": 1.3487627199002572,
            "P29": 78,
            "pairStart": "L|L",
            "Dmod30": 18,
            "DMV": "L|L/18/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3209851851697732",
            "trueK": 5.748924672776545,
            "P29": 243,
            "pairStart": "41|P",
            "Dmod30": 18,
            "DMV": "41|P/18/P29_LOW/TAIL_STRONG/K5"
          },
          {
            "C": "3912698353474210",
            "trueK": 1.9386735706508367,
            "P29": 115,
            "pairStart": "P|43",
            "Dmod30": 18,
            "DMV": "P|43/18/P29_LOW/TAIL_STRONG/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "EEOEEEOOEO",
        "mod30District": "0",
        "count": 3,
        "maxTrueK": 5.692260084036,
        "maxP29": 241,
        "stateCount": 3,
        "rows": [
          {
            "C": "3912698353476698",
            "trueK": 1.3149466595650465,
            "P29": 55,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3889129261039808",
            "trueK": 5.692260084035972,
            "P29": 241,
            "pairStart": "43|L",
            "Dmod30": 0,
            "DMV": "43|L/0/P29_LOW/TAIL_STRONG/K5"
          },
          {
            "C": "3889129261036274",
            "trueK": 0.244452887044502,
            "P29": 12,
            "pairStart": "L|P",
            "Dmod30": 0,
            "DMV": "L|P/0/P29_LOW/TAIL_MID/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "EEEEOEEEEO",
        "mod30District": "12",
        "count": 11,
        "maxTrueK": 5.580510192816,
        "maxP29": 233,
        "stateCount": 6,
        "rows": [
          {
            "C": "3889129261039952",
            "trueK": 5.580510192815623,
            "P29": 233,
            "pairStart": "L|L",
            "Dmod30": 12,
            "DMV": "L|L/12/P29_LOW/TAIL_STRONG/K5"
          },
          {
            "C": "3889129261036502",
            "trueK": 1.7158264547790227,
            "P29": 90,
            "pairStart": "L|31",
            "Dmod30": 12,
            "DMV": "L|31/12/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3912698353473392",
            "trueK": 0.24902529659020636,
            "P29": 12,
            "pairStart": "L|L",
            "Dmod30": 12,
            "DMV": "L|L/12/P29_LOW/TAIL_MID/KLOW"
          },
          {
            "C": "3889129261038148",
            "trueK": 0.20254667783686764,
            "P29": 9,
            "pairStart": "L|L",
            "Dmod30": 12,
            "DMV": "L|L/12/P29_LOW/TAIL_MID/KLOW"
          },
          {
            "C": "3194349700443278",
            "trueK": 0.5107879759482454,
            "P29": 21,
            "pairStart": "P|31",
            "Dmod30": 12,
            "DMV": "P|31/12/P29_LOW/TAIL_OK/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "OOEEEEEEEE",
        "mod30District": "6",
        "count": 5,
        "maxTrueK": 5.426854092387,
        "maxP29": 232,
        "stateCount": 4,
        "rows": [
          {
            "C": "3889129261045384",
            "trueK": 5.426854092387235,
            "P29": 232,
            "pairStart": "29|L",
            "Dmod30": 6,
            "DMV": "29|L/6/P29_LOW/TAIL_STRONG/K5"
          },
          {
            "C": "3912698353476256",
            "trueK": 0.35142822229083764,
            "P29": 14,
            "pairStart": "29|P",
            "Dmod30": 6,
            "DMV": "29|P/6/P29_LOW/TAIL_OK/KLOW"
          },
          {
            "C": "3889129261039366",
            "trueK": 0.35154653279731585,
            "P29": 14,
            "pairStart": "29|L",
            "Dmod30": 6,
            "DMV": "29|L/6/P29_LOW/TAIL_OK/KLOW"
          },
          {
            "C": "3209851851698684",
            "trueK": 0.5435945965662545,
            "P29": 23,
            "pairStart": "L|23",
            "Dmod30": 6,
            "DMV": "L|23/6/P29_LOW/TAIL_OK/KLOW"
          },
          {
            "C": "3889129261039990",
            "trueK": 0.7473273975360094,
            "P29": 46,
            "pairStart": "29|19",
            "Dmod30": 6,
            "DMV": "29|19/6/P29_LOW/TAIL_STRONG/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "EEEOEEEEOE",
        "mod30District": "6",
        "count": 13,
        "maxTrueK": 5.392697017961,
        "maxP29": 274,
        "stateCount": 4,
        "rows": [
          {
            "C": "3889134139473149",
            "trueK": 0.1769373153998136,
            "P29": 10,
            "pairStart": "L|P",
            "Dmod30": 6,
            "DMV": "L|P/6/P29_LOW/TAIL_MID/KLOW"
          },
          {
            "C": "3912698353474244",
            "trueK": 0.3048814378814639,
            "P29": 10,
            "pairStart": "L|L",
            "Dmod30": 6,
            "DMV": "L|L/6/P29_LOW/TAIL_MID/KLOW"
          },
          {
            "C": "3194349700441186",
            "trueK": 5.392697017960706,
            "P29": 274,
            "pairStart": "P|L",
            "Dmod30": 6,
            "DMV": "P|L/6/P29_MED/TAIL_STRONG/K5"
          },
          {
            "C": "3194349700441546",
            "trueK": 2.497447200373755,
            "P29": 110,
            "pairStart": "L|L",
            "Dmod30": 6,
            "DMV": "L|L/6/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3194349700441774",
            "trueK": 2.2855996527454345,
            "P29": 123,
            "pairStart": "L|L",
            "Dmod30": 6,
            "DMV": "L|L/6/P29_LOW/TAIL_STRONG/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "OOEEEEEEEO",
        "mod30District": "6",
        "count": 2,
        "maxTrueK": 5.391931874552,
        "maxP29": 230,
        "stateCount": 2,
        "rows": [
          {
            "C": "3889134139471531",
            "trueK": 5.39193187455234,
            "P29": 230,
            "pairStart": "19|31",
            "Dmod30": 6,
            "DMV": "19|31/6/P29_LOW/TAIL_STRONG/K5"
          },
          {
            "C": "3912698353474774",
            "trueK": 0.2117878690626947,
            "P29": 7,
            "pairStart": "L|29",
            "Dmod30": 6,
            "DMV": "L|29/6/P29_LOW/TAIL_MID/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "EEOEEEEEEE",
        "mod30District": "18",
        "count": 12,
        "maxTrueK": 5.137086598719,
        "maxP29": 267,
        "stateCount": 7,
        "rows": [
          {
            "C": "3209851851698548",
            "trueK": 5.137086598719206,
            "P29": 267,
            "pairStart": "37|L",
            "Dmod30": 18,
            "DMV": "37|L/18/P29_MED/TAIL_STRONG/K5"
          },
          {
            "C": "3194349700441228",
            "trueK": 0.783835926224755,
            "P29": 40,
            "pairStart": "P|L",
            "Dmod30": 18,
            "DMV": "P|L/18/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3194349700442470",
            "trueK": 0.2895249817586869,
            "P29": 16,
            "pairStart": "P|L",
            "Dmod30": 18,
            "DMV": "P|L/18/P29_LOW/TAIL_OK/KLOW"
          },
          {
            "C": "3209851851696532",
            "trueK": 2.0543639948154024,
            "P29": 104,
            "pairStart": "L|L",
            "Dmod30": 18,
            "DMV": "L|L/18/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3912698353473952",
            "trueK": 1.5197525109663879,
            "P29": 77,
            "pairStart": "L|L",
            "Dmod30": 18,
            "DMV": "L|L/18/P29_LOW/TAIL_STRONG/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "EEEOOEOEEO",
        "mod30District": "18",
        "count": 2,
        "maxTrueK": 5.082291927792,
        "maxP29": 217,
        "stateCount": 2,
        "rows": [
          {
            "C": "3889129261037708",
            "trueK": 5.08229192779178,
            "P29": 217,
            "pairStart": "L|43",
            "Dmod30": 18,
            "DMV": "L|43/18/P29_LOW/TAIL_STRONG/K5"
          },
          {
            "C": "3912698353474598",
            "trueK": 0.3095361163224008,
            "P29": 11,
            "pairStart": "P|L",
            "Dmod30": 18,
            "DMV": "P|L/18/P29_LOW/TAIL_MID/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "EEOEEEEEEE",
        "mod30District": "0",
        "count": 13,
        "maxTrueK": 5.001955985668,
        "maxP29": 211,
        "stateCount": 6,
        "rows": [
          {
            "C": "3209851851698626",
            "trueK": 0.27062068660224814,
            "P29": 10,
            "pairStart": "L|47",
            "Dmod30": 0,
            "DMV": "L|47/0/P29_LOW/TAIL_MID/KLOW"
          },
          {
            "C": "3194349700444006",
            "trueK": 0.24715547223301887,
            "P29": 12,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_MID/KLOW"
          },
          {
            "C": "3889129261039916",
            "trueK": 0.7799211158086085,
            "P29": 33,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3889134139471973",
            "trueK": 1.2339049626566156,
            "P29": 61,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3912698353476448",
            "trueK": 0.5934715012196249,
            "P29": 24,
            "pairStart": "P|L",
            "Dmod30": 0,
            "DMV": "P|L/0/P29_LOW/TAIL_STRONG/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "OEOOEEEOEO",
        "mod30District": "0",
        "count": 1,
        "maxTrueK": 4.992142627906,
        "maxP29": 212,
        "stateCount": 1,
        "rows": [
          {
            "C": "3912698353475188",
            "trueK": 4.992142627906346,
            "P29": 212,
            "pairStart": "19|P",
            "Dmod30": 0,
            "DMV": "19|P/0/P29_LOW/TAIL_STRONG/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "EOEOEOEEEE",
        "mod30District": "0",
        "count": 9,
        "maxTrueK": 4.970014172398,
        "maxP29": 211,
        "stateCount": 3,
        "rows": [
          {
            "C": "3209851851696466",
            "trueK": 1.3766356666288795,
            "P29": 60,
            "pairStart": "L|41",
            "Dmod30": 0,
            "DMV": "L|41/0/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3881708522903374",
            "trueK": 0.1746277866482171,
            "P29": 7,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_MID/KLOW"
          },
          {
            "C": "3896549999172994",
            "trueK": 4.970014172397531,
            "P29": 211,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3209851851695992",
            "trueK": 1.5884257691871821,
            "P29": 61,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3888728140057924",
            "trueK": 0.5238306253827638,
            "P29": 23,
            "pairStart": "L|L",
            "Dmod30": 0,
            "DMV": "L|L/0/P29_LOW/TAIL_OK/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "OEEEEEEEEE",
        "mod30District": "24",
        "count": 15,
        "maxTrueK": 4.846601117408,
        "maxP29": 250,
        "stateCount": 6,
        "rows": [
          {
            "C": "3194349700442444",
            "trueK": 1.0333452600980781,
            "P29": 46,
            "pairStart": "19|L",
            "Dmod30": 24,
            "DMV": "19|L/24/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3194349700441526",
            "trueK": 1.033345260098095,
            "P29": 49,
            "pairStart": "23|L",
            "Dmod30": 24,
            "DMV": "23|L/24/P29_LOW/TAIL_STRONG/KLOW"
          },
          {
            "C": "3209851851695890",
            "trueK": 0.3976947481372358,
            "P29": 22,
            "pairStart": "29|23",
            "Dmod30": 24,
            "DMV": "29|23/24/P29_LOW/TAIL_OK/KLOW"
          },
          {
            "C": "3889129261039096",
            "trueK": 0.4400151966800859,
            "P29": 22,
            "pairStart": "19|L",
            "Dmod30": 24,
            "DMV": "19|L/24/P29_LOW/TAIL_OK/KLOW"
          },
          {
            "C": "3209851851698494",
            "trueK": 0.2800335800492835,
            "P29": 13,
            "pairStart": "L|29",
            "Dmod30": 24,
            "DMV": "L|29/24/P29_LOW/TAIL_MID/KLOW"
          }
        ]
      },
      {
        "hotelPattern": "EOEOEEOOEE",
        "mod30District": "0",
        "count": 1,
        "maxTrueK": 4.782682098064,
        "maxP29": 207,
        "stateCount": 1,
        "rows": [
          {
            "C": "3912698353476602",
            "trueK": 4.7826820980640266,
            "P29": 207,
            "pairStart": "L|P",
            "Dmod30": 0,
            "DMV": "L|P/0/P29_LOW/TAIL_STRONG/KLOW"
          }
        ]
      }
    ]
  },
  {
    "laneNumber": 10,
    "laneName": "Invisible Match Detector",
    "rowsTested": 205,
    "bestC": "3912698353474220",
    "bestTrueK": 2.022457782587727,
    "bestP29": 109,
    "mainAnswer": "MIXED",
    "note": "bridge visitors only",
    "invisibleMatches": [
      {
        "C": "3912698353474220",
        "trueK": 2.022457782587727,
        "homeState": "L|19",
        "matchedLayer": "suffix2+Dwidth+tail",
        "bossLikeFeature": "suffix2",
        "P29": 109,
        "tail": "27/56/107",
        "reasonVisibleNow": "bridge visitor"
      },
      {
        "C": "3889134138961231",
        "trueK": 0.84743661586848,
        "homeState": "P|37",
        "matchedLayer": "suffix2+Dwidth+tail",
        "bossLikeFeature": "suffix2",
        "P29": 38,
        "tail": "30/38/38",
        "reasonVisibleNow": "bridge visitor"
      }
    ]
  }
]
```

## Top 20 Rows

```json
[
  {
    "rank": 1,
    "sourceLane": "lane1,lane10,lane3,lane4,lane5,lane6,lane7,lane8",
    "C": "3889129261038184",
    "firstBothG": 17307,
    "D": 34614,
    "Dmod30": 24,
    "trueK": 13.4309400510447,
    "pairStart": "L|L",
    "P29": 582,
    "tail1": 31,
    "tail2": 60,
    "tail4": 118,
    "DMV": "L|L/24/P29_BOSS/TAIL_STRONG/K13",
    "reason": "boss anchor"
  },
  {
    "rank": 2,
    "sourceLane": "lane10,lane4,lane5,lane6,lane7,lane8",
    "C": "3209851851697528",
    "firstBothG": 13161,
    "D": 26322,
    "Dmod30": 12,
    "trueK": 10.323590888035527,
    "pairStart": "L|23",
    "P29": 441,
    "tail1": 29,
    "tail2": 56,
    "tail4": 111,
    "DMV": "L|23/12/P29_HIGH/TAIL_STRONG/K10",
    "reason": "hot/base"
  },
  {
    "rank": 3,
    "sourceLane": "lane10,lane4,lane5,lane6,lane7,lane8",
    "C": "3912698353475078",
    "firstBothG": 12915,
    "D": 25830,
    "Dmod30": 0,
    "trueK": 10.019195344119744,
    "pairStart": "L|L",
    "P29": 457,
    "tail1": 28,
    "tail2": 59,
    "tail4": 122,
    "DMV": "L|L/0/P29_HOT/TAIL_STRONG/K10",
    "reason": "corridor/base"
  },
  {
    "rank": 4,
    "sourceLane": "lane1,lane10,lane3,lane4,lane5,lane6,lane7,lane8",
    "C": "3194349700443064",
    "firstBothG": 12225,
    "D": 24450,
    "Dmod30": 0,
    "trueK": 9.591986184281602,
    "pairStart": "L|P",
    "P29": 417,
    "tail1": 28,
    "tail2": 57,
    "tail4": 114,
    "DMV": "L|P/0/P29_HIGH/TAIL_STRONG/K8",
    "reason": "fullCover anchor"
  },
  {
    "rank": 5,
    "sourceLane": "lane10,lane4,lane5,lane6,lane7,lane8",
    "C": "3889134139471741",
    "firstBothG": 12030,
    "D": 24060,
    "Dmod30": 0,
    "trueK": 9.335771509911405,
    "pairStart": "31|P",
    "P29": 404,
    "tail1": 28,
    "tail2": 56,
    "tail4": 114,
    "DMV": "31|P/0/P29_HIGH/TAIL_STRONG/K8",
    "reason": "tailWeak/base"
  },
  {
    "rank": 6,
    "sourceLane": "lane5",
    "C": "3209851851696962",
    "firstBothG": 9561,
    "D": 19122,
    "Dmod30": 12,
    "trueK": 7.49972285392513,
    "pairStart": "L|L",
    "P29": 322,
    "tail1": 29,
    "tail2": 55,
    "tail4": 110,
    "DMV": "L|L/12/P29_MED/TAIL_STRONG/K5",
    "reason": "hot/tail:-566"
  },
  {
    "rank": 7,
    "sourceLane": "lane1,lane5",
    "C": "3194349700444192",
    "firstBothG": 8919,
    "D": 17838,
    "Dmod30": 18,
    "trueK": 6.998030656654881,
    "pairStart": "47|23",
    "P29": 296,
    "tail1": 28,
    "tail2": 57,
    "tail4": 109,
    "DMV": "47|23/18/P29_MED/TAIL_STRONG/K5",
    "reason": "fullCover/local:--1128"
  },
  {
    "rank": 8,
    "sourceLane": "lane5,lane9",
    "C": "3209851851697732",
    "firstBothG": 7329,
    "D": 14658,
    "Dmod30": 18,
    "trueK": 5.748924672776545,
    "pairStart": "41|P",
    "P29": 243,
    "tail1": 26,
    "tail2": 56,
    "tail4": 112,
    "DMV": "41|P/18/P29_LOW/TAIL_STRONG/K5",
    "reason": "hot/tail:--204"
  },
  {
    "rank": 9,
    "sourceLane": "lane1,lane5",
    "C": "3889129261039808",
    "firstBothG": 7335,
    "D": 14670,
    "Dmod30": 0,
    "trueK": 5.692260084035972,
    "pairStart": "43|L",
    "P29": 241,
    "tail1": 27,
    "tail2": 57,
    "tail4": 110,
    "DMV": "43|L/0/P29_LOW/TAIL_STRONG/K5",
    "reason": "boss/local:--1624"
  },
  {
    "rank": 10,
    "sourceLane": "lane1,lane5",
    "C": "3889129261039952",
    "firstBothG": 7191,
    "D": 14382,
    "Dmod30": 12,
    "trueK": 5.580510192815623,
    "pairStart": "L|L",
    "P29": 233,
    "tail1": 26,
    "tail2": 54,
    "tail4": 111,
    "DMV": "L|L/12/P29_LOW/TAIL_STRONG/K5",
    "reason": "boss/local:--1768"
  },
  {
    "rank": 11,
    "sourceLane": "lane10,lane2,lane7,lane9",
    "C": "3889129261045384",
    "firstBothG": 6993,
    "D": 13986,
    "Dmod30": 6,
    "trueK": 5.426854092387235,
    "pairStart": "29|L",
    "P29": 232,
    "tail1": 29,
    "tail2": 52,
    "tail4": 106,
    "DMV": "29|L/6/P29_LOW/TAIL_STRONG/K5",
    "reason": "boss/stress:+7200"
  },
  {
    "rank": 12,
    "sourceLane": "lane1,lane5",
    "C": "3194349700441186",
    "firstBothG": 6873,
    "D": 13746,
    "Dmod30": 6,
    "trueK": 5.392697017960706,
    "pairStart": "P|L",
    "P29": 274,
    "tail1": 27,
    "tail2": 57,
    "tail4": 108,
    "DMV": "P|L/6/P29_MED/TAIL_STRONG/K5",
    "reason": "fullCover/local:-1878"
  },
  {
    "rank": 13,
    "sourceLane": "lane10,lane4,lane5,lane6,lane8",
    "C": "3889134139471531",
    "firstBothG": 6948,
    "D": 13896,
    "Dmod30": 6,
    "trueK": 5.39193187455234,
    "pairStart": "19|31",
    "P29": 230,
    "tail1": 29,
    "tail2": 58,
    "tail4": 115,
    "DMV": "19|31/6/P29_LOW/TAIL_STRONG/K5",
    "reason": "tailWeak/small:-210"
  },
  {
    "rank": 14,
    "sourceLane": "lane4,lane5",
    "C": "3209851851698548",
    "firstBothG": 6549,
    "D": 13098,
    "Dmod30": 18,
    "trueK": 5.137086598719206,
    "pairStart": "37|L",
    "P29": 267,
    "tail1": 28,
    "tail2": 55,
    "tail4": 116,
    "DMV": "37|L/18/P29_MED/TAIL_STRONG/K5",
    "reason": "hot/sweep:--1020"
  },
  {
    "rank": 15,
    "sourceLane": "lane1,lane5",
    "C": "3889129261037708",
    "firstBothG": 6549,
    "D": 13098,
    "Dmod30": 18,
    "trueK": 5.08229192779178,
    "pairStart": "L|43",
    "P29": 217,
    "tail1": 27,
    "tail2": 58,
    "tail4": 111,
    "DMV": "L|43/18/P29_LOW/TAIL_STRONG/K5",
    "reason": "boss/local:-476"
  },
  {
    "rank": 16,
    "sourceLane": "lane1,lane5",
    "C": "3194349700443574",
    "firstBothG": 6375,
    "D": 12750,
    "Dmod30": 0,
    "trueK": 5.0019559856682765,
    "pairStart": "41|47",
    "P29": 211,
    "tail1": 27,
    "tail2": 55,
    "tail4": 107,
    "DMV": "41|47/0/P29_LOW/TAIL_STRONG/K5",
    "reason": "fullCover/local:--510"
  },
  {
    "rank": 17,
    "sourceLane": "lane5",
    "C": "3912698353475188",
    "firstBothG": 6435,
    "D": 12870,
    "Dmod30": 0,
    "trueK": 4.992142627906346,
    "pairStart": "19|P",
    "P29": 212,
    "tail1": 26,
    "tail2": 52,
    "tail4": 108,
    "DMV": "19|P/0/P29_LOW/TAIL_STRONG/KLOW",
    "reason": "corridor/tail:--110"
  },
  {
    "rank": 18,
    "sourceLane": "lane1,lane10,lane2,lane4,lane6,lane8",
    "C": "3896549999172994",
    "firstBothG": 6405,
    "D": 12810,
    "Dmod30": 0,
    "trueK": 4.970014172397531,
    "pairStart": "L|L",
    "P29": 211,
    "tail1": 25,
    "tail2": 53,
    "tail4": 109,
    "DMV": "L|L/0/P29_LOW/TAIL_STRONG/KLOW",
    "reason": "boss/small:+7420738134810"
  },
  {
    "rank": 19,
    "sourceLane": "lane1,lane10,lane4,lane5,lane6,lane8",
    "C": "3194349700443034",
    "firstBothG": 6177,
    "D": 12354,
    "Dmod30": 24,
    "trueK": 4.846601117407564,
    "pairStart": "L|19",
    "P29": 250,
    "tail1": 30,
    "tail2": 58,
    "tail4": 115,
    "DMV": "L|19/24/P29_MED/TAIL_STRONG/KLOW",
    "reason": "fullCover/small:-30"
  },
  {
    "rank": 20,
    "sourceLane": "lane5",
    "C": "3912698353476602",
    "firstBothG": 6165,
    "D": 12330,
    "Dmod30": 0,
    "trueK": 4.7826820980640266,
    "pairStart": "L|P",
    "P29": 207,
    "tail1": 28,
    "tail2": 54,
    "tail4": 113,
    "DMV": "L|P/0/P29_LOW/TAIL_STRONG/KLOW",
    "reason": "corridor/tail:--1524"
  }
]
```

## Top State-Width Families

```json
[
  {
    "pairStart": "L|L",
    "Dmod30": 0,
    "rowCount": 685,
    "maxTrueK": 10.01919534412,
    "maxP29": 457,
    "bestC": "3912698353475078"
  },
  {
    "pairStart": "L|L",
    "Dmod30": 12,
    "rowCount": 473,
    "maxTrueK": 7.499722853925,
    "maxP29": 322,
    "bestC": "3209851851696962"
  },
  {
    "pairStart": "L|L",
    "Dmod30": 18,
    "rowCount": 468,
    "maxTrueK": 3.748684815282,
    "maxP29": 157,
    "bestC": "3209851851695782"
  },
  {
    "pairStart": "L|L",
    "Dmod30": 6,
    "rowCount": 462,
    "maxTrueK": 4.414120394711,
    "maxP29": 184,
    "bestC": "3889134139470571"
  },
  {
    "pairStart": "L|L",
    "Dmod30": 24,
    "rowCount": 459,
    "maxTrueK": 13.430940051045,
    "maxP29": 582,
    "bestC": "3889129261038184"
  },
  {
    "pairStart": "L|P",
    "Dmod30": 0,
    "rowCount": 174,
    "maxTrueK": 9.591986184282,
    "maxP29": 417,
    "bestC": "3194349700443064"
  },
  {
    "pairStart": "L|L",
    "Dmod30": 10,
    "rowCount": 171,
    "maxTrueK": 1.698242859403,
    "maxP29": 152,
    "bestC": "3209851851695562"
  },
  {
    "pairStart": "P|L",
    "Dmod30": 0,
    "rowCount": 154,
    "maxTrueK": 3.457262259629,
    "maxP29": 149,
    "bestC": "3889129261037288"
  },
  {
    "pairStart": "L|L",
    "Dmod30": 20,
    "rowCount": 151,
    "maxTrueK": 2.349938537581,
    "maxP29": 201,
    "bestC": "3194349700442388"
  },
  {
    "pairStart": "L|L",
    "Dmod30": 4,
    "rowCount": 137,
    "maxTrueK": 1.456628790421,
    "maxP29": 123,
    "bestC": "3889129261036836"
  },
  {
    "pairStart": "L|L",
    "Dmod30": 14,
    "rowCount": 132,
    "maxTrueK": 1.774208265738,
    "maxP29": 200,
    "bestC": "3912698353473756"
  },
  {
    "pairStart": "P|L",
    "Dmod30": 12,
    "rowCount": 129,
    "maxTrueK": 4.252274614698,
    "maxP29": 173,
    "bestC": "3209851851697318"
  },
  {
    "pairStart": "L|L",
    "Dmod30": 8,
    "rowCount": 128,
    "maxTrueK": 1.899884583643,
    "maxP29": 157,
    "bestC": "3912698353473108"
  },
  {
    "pairStart": "L|P",
    "Dmod30": 6,
    "rowCount": 127,
    "maxTrueK": 3.414527097912,
    "maxP29": 199,
    "bestC": "3209851851698860"
  },
  {
    "pairStart": "L|L",
    "Dmod30": 22,
    "rowCount": 127,
    "maxTrueK": 1.655884838891,
    "maxP29": 141,
    "bestC": "3209851851695802"
  },
  {
    "pairStart": "P|L",
    "Dmod30": 18,
    "rowCount": 119,
    "maxTrueK": 4.197605288964,
    "maxP29": 179,
    "bestC": "3889129261038092"
  },
  {
    "pairStart": "L|L",
    "Dmod30": 26,
    "rowCount": 119,
    "maxTrueK": 2.011596866226,
    "maxP29": 175,
    "bestC": "3912698353473516"
  },
  {
    "pairStart": "L|P",
    "Dmod30": 18,
    "rowCount": 118,
    "maxTrueK": 4.289286183325,
    "maxP29": 185,
    "bestC": "3912698353475902"
  },
  {
    "pairStart": "P|L",
    "Dmod30": 6,
    "rowCount": 116,
    "maxTrueK": 5.392697017961,
    "maxP29": 274,
    "bestC": "3194349700441186"
  },
  {
    "pairStart": "L|L",
    "Dmod30": 2,
    "rowCount": 112,
    "maxTrueK": 1.956399137267,
    "maxP29": 160,
    "bestC": "3889129261037382"
  }
]
```

## Invisible Matches

```json
[
  {
    "C": "3912698353474220",
    "trueK": 2.022457782587727,
    "homeState": "L|19",
    "matchedLayer": "suffix2+Dwidth+tail",
    "bossLikeFeature": "suffix2",
    "P29": 109,
    "tail": "27/56/107",
    "reasonVisibleNow": "bridge visitor"
  },
  {
    "C": "3889134138961231",
    "trueK": 0.84743661586848,
    "homeState": "P|37",
    "matchedLayer": "suffix2+Dwidth+tail",
    "bossLikeFeature": "suffix2",
    "P29": 38,
    "tail": "30/38/38",
    "reasonVisibleNow": "bridge visitor"
  }
]
```

## Next 3 Tests

- Rerun lane 1 and lane 2 with a tighter 3|5-only candidate filter and a longer local residue ladder around boss.
- Extend lane 3 with a 250-gap drift window and compare the split/reconnect map against one fresh non-anchor row.
- Probe lane 10 with fresh bridge-visitor seeds that match boss suffix2 but miss boss Dmod30 by one residue class.

FINITE EVIDENCE ONLY.
UNIVERSAL PROOF REMAINS OPEN.
PATTERN DOES NOT MEAN PROOF.