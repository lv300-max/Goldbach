# GOLDBACH_FILTERED_NO_ESCAPE_VALIDATOR

Finite conversion evidence only. Universal proof remains open.

## Summary

```json
{
  "suiteName": "GOLDBACH_FILTERED_NO_ESCAPE_VALIDATOR",
  "inputPath": "/Users/joannie/Downloads/goldbach_total_classification_validator_records.csv",
  "runtimeSeconds": 0.199,
  "records": 1265,
  "convention": "FILTERED_NO_ESCAPE_DMV",
  "proofScaleMinC": "100000",
  "proofScaleRows": 65,
  "K13_431Misses": 2,
  "proofScaleK13_431Misses": 0,
  "fullCoverageBeforeRescueRows": 2,
  "proofScaleFullCoverageBeforeRescueRows": 0,
  "returnAddressMismatches": 0,
  "changedDmvRows": 1265,
  "duplicateFilteredDmvCount": 75,
  "topDuplicateFilteredDmvs": [
    [
      "OPEN_AT_FIRST_SURVIVOR / D6 / P29_LOW / TAIL_WEAK / KLOW",
      148
    ],
    [
      "OPEN_AT_FIRST_SURVIVOR / D18 / P29_LOW / TAIL_WEAK / KLOW",
      126
    ],
    [
      "OPEN_AT_FIRST_SURVIVOR / D12 / P29_LOW / TAIL_WEAK / KLOW",
      125
    ],
    [
      "OPEN_AT_FIRST_SURVIVOR / D24 / P29_LOW / TAIL_WEAK / KLOW",
      114
    ],
    [
      "OPEN_AT_FIRST_SURVIVOR / D0 / P29_LOW / TAIL_WEAK / KLOW",
      110
    ],
    [
      "OPEN_AT_FIRST_SURVIVOR / D10 / P29_LOW / TAIL_WEAK / KLOW",
      53
    ],
    [
      "OPEN_AT_FIRST_SURVIVOR / D4 / P29_LOW / TAIL_WEAK / KLOW",
      48
    ],
    [
      "OPEN_AT_FIRST_SURVIVOR / D2 / P29_LOW / TAIL_WEAK / KLOW",
      46
    ],
    [
      "OPEN_AT_FIRST_SURVIVOR / D8 / P29_LOW / TAIL_WEAK / KLOW",
      42
    ],
    [
      "OPEN_AT_FIRST_SURVIVOR / D14 / P29_LOW / TAIL_WEAK / KLOW",
      32
    ]
  ],
  "topFilteredPairStarts": [
    [
      "OPEN_AT_FIRST_SURVIVOR",
      938
    ],
    [
      "P|19",
      63
    ],
    [
      "19|P",
      57
    ],
    [
      "P|23",
      34
    ],
    [
      "23|P",
      34
    ],
    [
      "29|P",
      24
    ],
    [
      "L|L",
      18
    ],
    [
      "P|29",
      17
    ],
    [
      "31|P",
      12
    ],
    [
      "P|31",
      12
    ],
    [
      "L|P",
      10
    ],
    [
      "P|L",
      7
    ]
  ],
  "topP29Buckets": [
    [
      "P29_LOW",
      1260
    ],
    [
      "P29_HIGH",
      3
    ],
    [
      "P29_BOSS",
      1
    ],
    [
      "P29_HOT",
      1
    ]
  ],
  "topTailBuckets": [
    [
      "TAIL_WEAK",
      1202
    ],
    [
      "TAIL_STRONG",
      37
    ],
    [
      "TAIL_MID",
      20
    ],
    [
      "TAIL_OK",
      6
    ]
  ],
  "topKBuckets": [
    [
      "KLOW",
      1260
    ],
    [
      "K10",
      2
    ],
    [
      "K8",
      2
    ],
    [
      "K13",
      1
    ]
  ],
  "anchors": [
    {
      "label": "boss",
      "C": "3889129261038184",
      "firstBothG": 17307,
      "D": 34614,
      "Dmod30": 24,
      "trueK": 13.4309400510447,
      "pairStart": "L|L",
      "P29Survivors": 582,
      "S17Survivors": 757,
      "tail": "31/60/118",
      "filteredDmvId": "L|L / D24 / P29_BOSS / TAIL_STRONG / K13",
      "blockerCounts": {
        "bothComposite": 543,
        "leftPrimeOnly": 109,
        "rightPrimeOnly": 105,
        "unresolvedLargeCompositeRows": 669,
        "leftLargeComposite": 478,
        "rightLargeComposite": 477
      },
      "verdict": "BOSS_ROW"
    },
    {
      "label": "hot",
      "C": "3209851851697528",
      "firstBothG": 13161,
      "D": 26322,
      "Dmod30": 12,
      "trueK": 10.323590888035527,
      "pairStart": "L|23",
      "P29Survivors": 441,
      "S17Survivors": 575,
      "tail": "29/56/111",
      "filteredDmvId": "L|23 / D12 / P29_HIGH / TAIL_STRONG / K10",
      "blockerCounts": {
        "bothComposite": 435,
        "leftPrimeOnly": 75,
        "rightPrimeOnly": 65,
        "unresolvedLargeCompositeRows": 511,
        "leftLargeComposite": 365,
        "rightLargeComposite": 377
      },
      "verdict": "RESCUED"
    },
    {
      "label": "fullCover",
      "C": "3194349700443064",
      "firstBothG": 12225,
      "D": 24450,
      "Dmod30": 0,
      "trueK": 9.591986184281602,
      "pairStart": "L|P",
      "P29Survivors": 417,
      "S17Survivors": 534,
      "tail": "28/57/114",
      "filteredDmvId": "L|P / D0 / P29_HIGH / TAIL_STRONG / K8",
      "blockerCounts": {
        "bothComposite": 390,
        "leftPrimeOnly": 69,
        "rightPrimeOnly": 75,
        "unresolvedLargeCompositeRows": 462,
        "leftLargeComposite": 349,
        "rightLargeComposite": 333
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak",
      "C": "3889134139471741",
      "firstBothG": 12030,
      "D": 24060,
      "Dmod30": 0,
      "trueK": 9.335771509911405,
      "pairStart": "31|P",
      "P29Survivors": 404,
      "S17Survivors": 527,
      "tail": "28/56/114",
      "filteredDmvId": "31|P / D0 / P29_HIGH / TAIL_STRONG / K8",
      "blockerCounts": {
        "bothComposite": 390,
        "leftPrimeOnly": 70,
        "rightPrimeOnly": 67,
        "unresolvedLargeCompositeRows": 466,
        "leftLargeComposite": 337,
        "rightLargeComposite": 345
      },
      "verdict": "RESCUED"
    },
    {
      "label": "corridor",
      "C": "3912698353475078",
      "firstBothG": 12915,
      "D": 25830,
      "Dmod30": 0,
      "trueK": 10.019195344119744,
      "pairStart": "L|L",
      "P29Survivors": 457,
      "S17Survivors": 561,
      "tail": "28/59/122",
      "filteredDmvId": "L|L / D0 / P29_HOT / TAIL_STRONG / K10",
      "blockerCounts": {
        "bothComposite": 389,
        "leftPrimeOnly": 88,
        "rightPrimeOnly": 84,
        "unresolvedLargeCompositeRows": 479,
        "leftLargeComposite": 346,
        "rightLargeComposite": 348
      },
      "verdict": "RESCUED"
    }
  ],
  "topTrueK": [
    {
      "label": "boss",
      "C": "3889129261038184",
      "firstBothG": 17307,
      "D": 34614,
      "Dmod30": 24,
      "trueK": 13.4309400510447,
      "pairStart": "L|L",
      "P29Survivors": 582,
      "S17Survivors": 757,
      "tail": "31/60/118",
      "filteredDmvId": "L|L / D24 / P29_BOSS / TAIL_STRONG / K13",
      "blockerCounts": {
        "bothComposite": 543,
        "leftPrimeOnly": 109,
        "rightPrimeOnly": 105,
        "unresolvedLargeCompositeRows": 669,
        "leftLargeComposite": 478,
        "rightLargeComposite": 477
      },
      "verdict": "BOSS_ROW"
    },
    {
      "label": "hot",
      "C": "3209851851697528",
      "firstBothG": 13161,
      "D": 26322,
      "Dmod30": 12,
      "trueK": 10.323590888035527,
      "pairStart": "L|23",
      "P29Survivors": 441,
      "S17Survivors": 575,
      "tail": "29/56/111",
      "filteredDmvId": "L|23 / D12 / P29_HIGH / TAIL_STRONG / K10",
      "blockerCounts": {
        "bothComposite": 435,
        "leftPrimeOnly": 75,
        "rightPrimeOnly": 65,
        "unresolvedLargeCompositeRows": 511,
        "leftLargeComposite": 365,
        "rightLargeComposite": 377
      },
      "verdict": "RESCUED"
    },
    {
      "label": "corridor",
      "C": "3912698353475078",
      "firstBothG": 12915,
      "D": 25830,
      "Dmod30": 0,
      "trueK": 10.019195344119744,
      "pairStart": "L|L",
      "P29Survivors": 457,
      "S17Survivors": 561,
      "tail": "28/59/122",
      "filteredDmvId": "L|L / D0 / P29_HOT / TAIL_STRONG / K10",
      "blockerCounts": {
        "bothComposite": 389,
        "leftPrimeOnly": 88,
        "rightPrimeOnly": 84,
        "unresolvedLargeCompositeRows": 479,
        "leftLargeComposite": 346,
        "rightLargeComposite": 348
      },
      "verdict": "RESCUED"
    },
    {
      "label": "fullCover",
      "C": "3194349700443064",
      "firstBothG": 12225,
      "D": 24450,
      "Dmod30": 0,
      "trueK": 9.591986184281602,
      "pairStart": "L|P",
      "P29Survivors": 417,
      "S17Survivors": 534,
      "tail": "28/57/114",
      "filteredDmvId": "L|P / D0 / P29_HIGH / TAIL_STRONG / K8",
      "blockerCounts": {
        "bothComposite": 390,
        "leftPrimeOnly": 69,
        "rightPrimeOnly": 75,
        "unresolvedLargeCompositeRows": 462,
        "leftLargeComposite": 349,
        "rightLargeComposite": 333
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak",
      "C": "3889134139471741",
      "firstBothG": 12030,
      "D": 24060,
      "Dmod30": 0,
      "trueK": 9.335771509911405,
      "pairStart": "31|P",
      "P29Survivors": 404,
      "S17Survivors": 527,
      "tail": "28/56/114",
      "filteredDmvId": "31|P / D0 / P29_HIGH / TAIL_STRONG / K8",
      "blockerCounts": {
        "bothComposite": 390,
        "leftPrimeOnly": 70,
        "rightPrimeOnly": 67,
        "unresolvedLargeCompositeRows": 466,
        "leftLargeComposite": 337,
        "rightLargeComposite": 345
      },
      "verdict": "RESCUED"
    },
    {
      "label": "corridor-12",
      "C": "3912698353475066",
      "firstBothG": 3825,
      "D": 7650,
      "Dmod30": 0,
      "trueK": 2.967357506098183,
      "pairStart": "L|L",
      "P29Survivors": 120,
      "S17Survivors": 166,
      "tail": "26/54/104",
      "filteredDmvId": "L|L / D0 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 129,
        "leftPrimeOnly": 18,
        "rightPrimeOnly": 19,
        "unresolvedLargeCompositeRows": 144,
        "leftLargeComposite": 103,
        "rightLargeComposite": 108
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak-12",
      "C": "3889134139471729",
      "firstBothG": 2880,
      "D": 5760,
      "Dmod30": 0,
      "trueK": 2.2349976682082167,
      "pairStart": "L|L",
      "P29Survivors": 92,
      "S17Survivors": 120,
      "tail": "27/57/92",
      "filteredDmvId": "L|L / D0 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 82,
        "leftPrimeOnly": 25,
        "rightPrimeOnly": 13,
        "unresolvedLargeCompositeRows": 99,
        "leftLargeComposite": 66,
        "rightLargeComposite": 74
      },
      "verdict": "RESCUED"
    },
    {
      "label": "hot-20",
      "C": "3209851851697508",
      "firstBothG": 2199,
      "D": 4398,
      "Dmod30": 18,
      "trueK": 1.7249127241691455,
      "pairStart": "L|L",
      "P29Survivors": 71,
      "S17Survivors": 95,
      "tail": "29/53/71",
      "filteredDmvId": "L|L / D18 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 69,
        "leftPrimeOnly": 10,
        "rightPrimeOnly": 16,
        "unresolvedLargeCompositeRows": 86,
        "leftLargeComposite": 62,
        "rightLargeComposite": 57
      },
      "verdict": "RESCUED"
    },
    {
      "label": "fullCover-12",
      "C": "3194349700443052",
      "firstBothG": 1839,
      "D": 3678,
      "Dmod30": 18,
      "trueK": 1.4429171855127911,
      "pairStart": "47|L",
      "P29Survivors": 61,
      "S17Survivors": 78,
      "tail": "29/56/61",
      "filteredDmvId": "47|L / D18 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 55,
        "leftPrimeOnly": 11,
        "rightPrimeOnly": 12,
        "unresolvedLargeCompositeRows": 67,
        "leftLargeComposite": 49,
        "rightLargeComposite": 48
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak-6",
      "C": "3889134139471735",
      "firstBothG": 1704,
      "D": 3408,
      "Dmod30": 18,
      "trueK": 1.3223736203565282,
      "pairStart": "31|L",
      "P29Survivors": 98,
      "S17Survivors": 132,
      "tail": "27/55/98",
      "filteredDmvId": "31|L / D18 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 95,
        "leftPrimeOnly": 24,
        "rightPrimeOnly": 13,
        "unresolvedLargeCompositeRows": 114,
        "leftLargeComposite": 77,
        "rightLargeComposite": 84
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak-2",
      "C": "3889134139471739",
      "firstBothG": 1482,
      "D": 2964,
      "Dmod30": 24,
      "trueK": 1.1500925500988115,
      "pairStart": "P|L",
      "P29Survivors": 51,
      "S17Survivors": 65,
      "tail": "29/51/51",
      "filteredDmvId": "P|L / D24 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 49,
        "leftPrimeOnly": 10,
        "rightPrimeOnly": 6,
        "unresolvedLargeCompositeRows": 59,
        "leftLargeComposite": 42,
        "rightLargeComposite": 43
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak+6",
      "C": "3889134139471747",
      "firstBothG": 1404,
      "D": 2808,
      "Dmod30": 18,
      "trueK": 1.0895613632515055,
      "pairStart": "L|P",
      "P29Survivors": 45,
      "S17Survivors": 60,
      "tail": "28/45/45",
      "filteredDmvId": "L|P / D18 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 46,
        "leftPrimeOnly": 9,
        "rightPrimeOnly": 5,
        "unresolvedLargeCompositeRows": 50,
        "leftLargeComposite": 29,
        "rightLargeComposite": 40
      },
      "verdict": "RESCUED"
    },
    {
      "label": "corridor+6",
      "C": "3912698353475084",
      "firstBothG": 1347,
      "D": 2694,
      "Dmod30": 24,
      "trueK": 1.044975309990654,
      "pairStart": "L|L",
      "P29Survivors": 44,
      "S17Survivors": 58,
      "tail": "26/44/44",
      "filteredDmvId": "L|L / D24 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 47,
        "leftPrimeOnly": 9,
        "rightPrimeOnly": 2,
        "unresolvedLargeCompositeRows": 49,
        "leftLargeComposite": 36,
        "rightLargeComposite": 39
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak-20",
      "C": "3889134139471721",
      "firstBothG": 1338,
      "D": 2676,
      "Dmod30": 6,
      "trueK": 1.0383426666884013,
      "pairStart": "19|L",
      "P29Survivors": 58,
      "S17Survivors": 76,
      "tail": "29/56/58",
      "filteredDmvId": "19|L / D6 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 50,
        "leftPrimeOnly": 13,
        "rightPrimeOnly": 13,
        "unresolvedLargeCompositeRows": 67,
        "leftLargeComposite": 49,
        "rightLargeComposite": 44
      },
      "verdict": "RESCUED"
    },
    {
      "label": "hot+12",
      "C": "3209851851697540",
      "firstBothG": 1221,
      "D": 2442,
      "Dmod30": 12,
      "trueK": 0.9577619082358009,
      "pairStart": "L|23",
      "P29Survivors": 68,
      "S17Survivors": 84,
      "tail": "30/60/68",
      "filteredDmvId": "L|23 / D12 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 62,
        "leftPrimeOnly": 10,
        "rightPrimeOnly": 12,
        "unresolvedLargeCompositeRows": 75,
        "leftLargeComposite": 54,
        "rightLargeComposite": 52
      },
      "verdict": "RESCUED"
    },
    {
      "label": "corridor+12",
      "C": "3912698353475090",
      "firstBothG": 1077,
      "D": 2154,
      "Dmod30": 24,
      "trueK": 0.8355147801484294,
      "pairStart": "31|L",
      "P29Survivors": 46,
      "S17Survivors": 61,
      "tail": "26/46/46",
      "filteredDmvId": "31|L / D24 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 44,
        "leftPrimeOnly": 10,
        "rightPrimeOnly": 7,
        "unresolvedLargeCompositeRows": 55,
        "leftLargeComposite": 38,
        "rightLargeComposite": 40
      },
      "verdict": "RESCUED"
    },
    {
      "label": "fullCover+12",
      "C": "3194349700443076",
      "firstBothG": 993,
      "D": 1986,
      "Dmod30": 6,
      "trueK": 0.7791282029441003,
      "pairStart": "L|29",
      "P29Survivors": 42,
      "S17Survivors": 53,
      "tail": "28/42/42",
      "filteredDmvId": "L|29 / D6 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 42,
        "leftPrimeOnly": 8,
        "rightPrimeOnly": 3,
        "unresolvedLargeCompositeRows": 50,
        "leftLargeComposite": 36,
        "rightLargeComposite": 40
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak-10",
      "C": "3889134139471731",
      "firstBothG": 992,
      "D": 1984,
      "Dmod30": 4,
      "trueK": 0.7698325301606079,
      "pairStart": "31|L",
      "P29Survivors": 67,
      "S17Survivors": 87,
      "tail": "31/57/67",
      "filteredDmvId": "31|L / D4 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 68,
        "leftPrimeOnly": 10,
        "rightPrimeOnly": 9,
        "unresolvedLargeCompositeRows": 76,
        "leftLargeComposite": 56,
        "rightLargeComposite": 60
      },
      "verdict": "RESCUED"
    },
    {
      "label": "boss+4",
      "C": "3889129261038188",
      "firstBothG": 975,
      "D": 1950,
      "Dmod30": 0,
      "trueK": 0.756639888471057,
      "pairStart": "L|L",
      "P29Survivors": 34,
      "S17Survivors": 41,
      "tail": "29/34/34",
      "filteredDmvId": "L|L / D0 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 31,
        "leftPrimeOnly": 5,
        "rightPrimeOnly": 5,
        "unresolvedLargeCompositeRows": 35,
        "leftLargeComposite": 29,
        "rightLargeComposite": 26
      },
      "verdict": "RESCUED"
    },
    {
      "label": "fullCover-2",
      "C": "3194349700443062",
      "firstBothG": 885,
      "D": 1770,
      "Dmod30": 0,
      "trueK": 0.6943891838927786,
      "pairStart": "L|L",
      "P29Survivors": 36,
      "S17Survivors": 46,
      "tail": "29/36/36",
      "filteredDmvId": "L|L / D0 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 32,
        "leftPrimeOnly": 6,
        "rightPrimeOnly": 8,
        "unresolvedLargeCompositeRows": 39,
        "leftLargeComposite": 28,
        "rightLargeComposite": 27
      },
      "verdict": "RESCUED"
    }
  ],
  "topP29": [
    {
      "label": "boss",
      "C": "3889129261038184",
      "firstBothG": 17307,
      "D": 34614,
      "Dmod30": 24,
      "trueK": 13.4309400510447,
      "pairStart": "L|L",
      "P29Survivors": 582,
      "S17Survivors": 757,
      "tail": "31/60/118",
      "filteredDmvId": "L|L / D24 / P29_BOSS / TAIL_STRONG / K13",
      "blockerCounts": {
        "bothComposite": 543,
        "leftPrimeOnly": 109,
        "rightPrimeOnly": 105,
        "unresolvedLargeCompositeRows": 669,
        "leftLargeComposite": 478,
        "rightLargeComposite": 477
      },
      "verdict": "BOSS_ROW"
    },
    {
      "label": "corridor",
      "C": "3912698353475078",
      "firstBothG": 12915,
      "D": 25830,
      "Dmod30": 0,
      "trueK": 10.019195344119744,
      "pairStart": "L|L",
      "P29Survivors": 457,
      "S17Survivors": 561,
      "tail": "28/59/122",
      "filteredDmvId": "L|L / D0 / P29_HOT / TAIL_STRONG / K10",
      "blockerCounts": {
        "bothComposite": 389,
        "leftPrimeOnly": 88,
        "rightPrimeOnly": 84,
        "unresolvedLargeCompositeRows": 479,
        "leftLargeComposite": 346,
        "rightLargeComposite": 348
      },
      "verdict": "RESCUED"
    },
    {
      "label": "hot",
      "C": "3209851851697528",
      "firstBothG": 13161,
      "D": 26322,
      "Dmod30": 12,
      "trueK": 10.323590888035527,
      "pairStart": "L|23",
      "P29Survivors": 441,
      "S17Survivors": 575,
      "tail": "29/56/111",
      "filteredDmvId": "L|23 / D12 / P29_HIGH / TAIL_STRONG / K10",
      "blockerCounts": {
        "bothComposite": 435,
        "leftPrimeOnly": 75,
        "rightPrimeOnly": 65,
        "unresolvedLargeCompositeRows": 511,
        "leftLargeComposite": 365,
        "rightLargeComposite": 377
      },
      "verdict": "RESCUED"
    },
    {
      "label": "fullCover",
      "C": "3194349700443064",
      "firstBothG": 12225,
      "D": 24450,
      "Dmod30": 0,
      "trueK": 9.591986184281602,
      "pairStart": "L|P",
      "P29Survivors": 417,
      "S17Survivors": 534,
      "tail": "28/57/114",
      "filteredDmvId": "L|P / D0 / P29_HIGH / TAIL_STRONG / K8",
      "blockerCounts": {
        "bothComposite": 390,
        "leftPrimeOnly": 69,
        "rightPrimeOnly": 75,
        "unresolvedLargeCompositeRows": 462,
        "leftLargeComposite": 349,
        "rightLargeComposite": 333
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak",
      "C": "3889134139471741",
      "firstBothG": 12030,
      "D": 24060,
      "Dmod30": 0,
      "trueK": 9.335771509911405,
      "pairStart": "31|P",
      "P29Survivors": 404,
      "S17Survivors": 527,
      "tail": "28/56/114",
      "filteredDmvId": "31|P / D0 / P29_HIGH / TAIL_STRONG / K8",
      "blockerCounts": {
        "bothComposite": 390,
        "leftPrimeOnly": 70,
        "rightPrimeOnly": 67,
        "unresolvedLargeCompositeRows": 466,
        "leftLargeComposite": 337,
        "rightLargeComposite": 345
      },
      "verdict": "RESCUED"
    },
    {
      "label": "corridor-12",
      "C": "3912698353475066",
      "firstBothG": 3825,
      "D": 7650,
      "Dmod30": 0,
      "trueK": 2.967357506098183,
      "pairStart": "L|L",
      "P29Survivors": 120,
      "S17Survivors": 166,
      "tail": "26/54/104",
      "filteredDmvId": "L|L / D0 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 129,
        "leftPrimeOnly": 18,
        "rightPrimeOnly": 19,
        "unresolvedLargeCompositeRows": 144,
        "leftLargeComposite": 103,
        "rightLargeComposite": 108
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak-6",
      "C": "3889134139471735",
      "firstBothG": 1704,
      "D": 3408,
      "Dmod30": 18,
      "trueK": 1.3223736203565282,
      "pairStart": "31|L",
      "P29Survivors": 98,
      "S17Survivors": 132,
      "tail": "27/55/98",
      "filteredDmvId": "31|L / D18 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 95,
        "leftPrimeOnly": 24,
        "rightPrimeOnly": 13,
        "unresolvedLargeCompositeRows": 114,
        "leftLargeComposite": 77,
        "rightLargeComposite": 84
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak-12",
      "C": "3889134139471729",
      "firstBothG": 2880,
      "D": 5760,
      "Dmod30": 0,
      "trueK": 2.2349976682082167,
      "pairStart": "L|L",
      "P29Survivors": 92,
      "S17Survivors": 120,
      "tail": "27/57/92",
      "filteredDmvId": "L|L / D0 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 82,
        "leftPrimeOnly": 25,
        "rightPrimeOnly": 13,
        "unresolvedLargeCompositeRows": 99,
        "leftLargeComposite": 66,
        "rightLargeComposite": 74
      },
      "verdict": "RESCUED"
    },
    {
      "label": "hot-20",
      "C": "3209851851697508",
      "firstBothG": 2199,
      "D": 4398,
      "Dmod30": 18,
      "trueK": 1.7249127241691455,
      "pairStart": "L|L",
      "P29Survivors": 71,
      "S17Survivors": 95,
      "tail": "29/53/71",
      "filteredDmvId": "L|L / D18 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 69,
        "leftPrimeOnly": 10,
        "rightPrimeOnly": 16,
        "unresolvedLargeCompositeRows": 86,
        "leftLargeComposite": 62,
        "rightLargeComposite": 57
      },
      "verdict": "RESCUED"
    },
    {
      "label": "hot+12",
      "C": "3209851851697540",
      "firstBothG": 1221,
      "D": 2442,
      "Dmod30": 12,
      "trueK": 0.9577619082358009,
      "pairStart": "L|23",
      "P29Survivors": 68,
      "S17Survivors": 84,
      "tail": "30/60/68",
      "filteredDmvId": "L|23 / D12 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 62,
        "leftPrimeOnly": 10,
        "rightPrimeOnly": 12,
        "unresolvedLargeCompositeRows": 75,
        "leftLargeComposite": 54,
        "rightLargeComposite": 52
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak-10",
      "C": "3889134139471731",
      "firstBothG": 992,
      "D": 1984,
      "Dmod30": 4,
      "trueK": 0.7698325301606079,
      "pairStart": "31|L",
      "P29Survivors": 67,
      "S17Survivors": 87,
      "tail": "31/57/67",
      "filteredDmvId": "31|L / D4 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 68,
        "leftPrimeOnly": 10,
        "rightPrimeOnly": 9,
        "unresolvedLargeCompositeRows": 76,
        "leftLargeComposite": 56,
        "rightLargeComposite": 60
      },
      "verdict": "RESCUED"
    },
    {
      "label": "fullCover-12",
      "C": "3194349700443052",
      "firstBothG": 1839,
      "D": 3678,
      "Dmod30": 18,
      "trueK": 1.4429171855127911,
      "pairStart": "47|L",
      "P29Survivors": 61,
      "S17Survivors": 78,
      "tail": "29/56/61",
      "filteredDmvId": "47|L / D18 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 55,
        "leftPrimeOnly": 11,
        "rightPrimeOnly": 12,
        "unresolvedLargeCompositeRows": 67,
        "leftLargeComposite": 49,
        "rightLargeComposite": 48
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak-20",
      "C": "3889134139471721",
      "firstBothG": 1338,
      "D": 2676,
      "Dmod30": 6,
      "trueK": 1.0383426666884013,
      "pairStart": "19|L",
      "P29Survivors": 58,
      "S17Survivors": 76,
      "tail": "29/56/58",
      "filteredDmvId": "19|L / D6 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 50,
        "leftPrimeOnly": 13,
        "rightPrimeOnly": 13,
        "unresolvedLargeCompositeRows": 67,
        "leftLargeComposite": 49,
        "rightLargeComposite": 44
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak-2",
      "C": "3889134139471739",
      "firstBothG": 1482,
      "D": 2964,
      "Dmod30": 24,
      "trueK": 1.1500925500988115,
      "pairStart": "P|L",
      "P29Survivors": 51,
      "S17Survivors": 65,
      "tail": "29/51/51",
      "filteredDmvId": "P|L / D24 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 49,
        "leftPrimeOnly": 10,
        "rightPrimeOnly": 6,
        "unresolvedLargeCompositeRows": 59,
        "leftLargeComposite": 42,
        "rightLargeComposite": 43
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak+2",
      "C": "3889134139471743",
      "firstBothG": 710,
      "D": 1420,
      "Dmod30": 10,
      "trueK": 0.5509890084818868,
      "pairStart": "L|19",
      "P29Survivors": 46,
      "S17Survivors": 62,
      "tail": "26/46/46",
      "filteredDmvId": "L|19 / D10 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 46,
        "leftPrimeOnly": 9,
        "rightPrimeOnly": 7,
        "unresolvedLargeCompositeRows": 56,
        "leftLargeComposite": 40,
        "rightLargeComposite": 35
      },
      "verdict": "RESCUED"
    },
    {
      "label": "corridor-2",
      "C": "3912698353475076",
      "firstBothG": 595,
      "D": 1190,
      "Dmod30": 20,
      "trueK": 0.46158894539305056,
      "pairStart": "P|31",
      "P29Survivors": 46,
      "S17Survivors": 56,
      "tail": "28/46/46",
      "filteredDmvId": "P|31 / D20 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 40,
        "leftPrimeOnly": 6,
        "rightPrimeOnly": 10,
        "unresolvedLargeCompositeRows": 52,
        "leftLargeComposite": 38,
        "rightLargeComposite": 36
      },
      "verdict": "RESCUED"
    },
    {
      "label": "corridor+12",
      "C": "3912698353475090",
      "firstBothG": 1077,
      "D": 2154,
      "Dmod30": 24,
      "trueK": 0.8355147801484294,
      "pairStart": "31|L",
      "P29Survivors": 46,
      "S17Survivors": 61,
      "tail": "26/46/46",
      "filteredDmvId": "31|L / D24 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 44,
        "leftPrimeOnly": 10,
        "rightPrimeOnly": 7,
        "unresolvedLargeCompositeRows": 55,
        "leftLargeComposite": 38,
        "rightLargeComposite": 40
      },
      "verdict": "RESCUED"
    },
    {
      "label": "hot+2",
      "C": "3209851851697530",
      "firstBothG": 497,
      "D": 994,
      "Dmod30": 4,
      "trueK": 0.38985067026469533,
      "pairStart": "L|P",
      "P29Survivors": 45,
      "S17Survivors": 60,
      "tail": "26/45/45",
      "filteredDmvId": "L|P / D4 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 43,
        "leftPrimeOnly": 8,
        "rightPrimeOnly": 9,
        "unresolvedLargeCompositeRows": 49,
        "leftLargeComposite": 32,
        "rightLargeComposite": 37
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak+6",
      "C": "3889134139471747",
      "firstBothG": 1404,
      "D": 2808,
      "Dmod30": 18,
      "trueK": 1.0895613632515055,
      "pairStart": "L|P",
      "P29Survivors": 45,
      "S17Survivors": 60,
      "tail": "28/45/45",
      "filteredDmvId": "L|P / D18 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 46,
        "leftPrimeOnly": 9,
        "rightPrimeOnly": 5,
        "unresolvedLargeCompositeRows": 50,
        "leftLargeComposite": 29,
        "rightLargeComposite": 40
      },
      "verdict": "RESCUED"
    },
    {
      "label": "tailWeak+20",
      "C": "3889134139471761",
      "firstBothG": 692,
      "D": 1384,
      "Dmod30": 4,
      "trueK": 0.5370202730555852,
      "pairStart": "P|37",
      "P29Survivors": 44,
      "S17Survivors": 63,
      "tail": "25/44/44",
      "filteredDmvId": "P|37 / D4 / P29_LOW / TAIL_STRONG / KLOW",
      "blockerCounts": {
        "bothComposite": 47,
        "leftPrimeOnly": 11,
        "rightPrimeOnly": 5,
        "unresolvedLargeCompositeRows": 50,
        "leftLargeComposite": 34,
        "rightLargeComposite": 41
      },
      "verdict": "RESCUED"
    }
  ],
  "reportRule": {
    "requiredQuestion": "Did blockers fully cover all survivor rooms?",
    "requiredOutputs": [
      "center C",
      "even number E = 2C",
      "window W",
      "total parity-valid rooms",
      "small-prime killed rooms",
      "survivor rooms",
      "both-prime rescue found",
      "firstBothG",
      "trueK",
      "P29 survivors",
      "tail1",
      "tail2",
      "tail4",
      "fullCoverageBeforeRescue",
      "verdict"
    ],
    "verdicts": {
      "RESCUED": "At least one both-prime room was found.",
      "FULL_COVERAGE_FOUND": "Every survivor room was blocked before rescue.",
      "PRESSURE_HELD": "No full coverage found in this finite test.",
      "BOSS_ROW": "High survivor mass plus late rescue.",
      "WEAK_ROW": "Low survivor mass or early rescue."
    }
  },
  "finalVerdict": "FILTERED_VALIDATOR_CONVERTED_NO_PROOF_SCALE_K13_431_MISS",
  "next3": [
    "Use FILTERED_NO_ESCAPE_DMV as the canonical DMV in future reports.",
    "Retire RAW_START_DMV to archive/control status only.",
    "Run a focused large-prime closure audit on the converted top P29 and top trueK rows."
  ]
}
```

## Anchor Rows

```json
[
  {
    "label": "boss",
    "C": "3889129261038184",
    "firstBothG": 17307,
    "D": 34614,
    "Dmod30": 24,
    "trueK": 13.4309400510447,
    "pairStart": "L|L",
    "P29Survivors": 582,
    "S17Survivors": 757,
    "tail": "31/60/118",
    "filteredDmvId": "L|L / D24 / P29_BOSS / TAIL_STRONG / K13",
    "blockerCounts": {
      "bothComposite": 543,
      "leftPrimeOnly": 109,
      "rightPrimeOnly": 105,
      "unresolvedLargeCompositeRows": 669,
      "leftLargeComposite": 478,
      "rightLargeComposite": 477
    },
    "verdict": "BOSS_ROW"
  },
  {
    "label": "hot",
    "C": "3209851851697528",
    "firstBothG": 13161,
    "D": 26322,
    "Dmod30": 12,
    "trueK": 10.323590888035527,
    "pairStart": "L|23",
    "P29Survivors": 441,
    "S17Survivors": 575,
    "tail": "29/56/111",
    "filteredDmvId": "L|23 / D12 / P29_HIGH / TAIL_STRONG / K10",
    "blockerCounts": {
      "bothComposite": 435,
      "leftPrimeOnly": 75,
      "rightPrimeOnly": 65,
      "unresolvedLargeCompositeRows": 511,
      "leftLargeComposite": 365,
      "rightLargeComposite": 377
    },
    "verdict": "RESCUED"
  },
  {
    "label": "fullCover",
    "C": "3194349700443064",
    "firstBothG": 12225,
    "D": 24450,
    "Dmod30": 0,
    "trueK": 9.591986184281602,
    "pairStart": "L|P",
    "P29Survivors": 417,
    "S17Survivors": 534,
    "tail": "28/57/114",
    "filteredDmvId": "L|P / D0 / P29_HIGH / TAIL_STRONG / K8",
    "blockerCounts": {
      "bothComposite": 390,
      "leftPrimeOnly": 69,
      "rightPrimeOnly": 75,
      "unresolvedLargeCompositeRows": 462,
      "leftLargeComposite": 349,
      "rightLargeComposite": 333
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak",
    "C": "3889134139471741",
    "firstBothG": 12030,
    "D": 24060,
    "Dmod30": 0,
    "trueK": 9.335771509911405,
    "pairStart": "31|P",
    "P29Survivors": 404,
    "S17Survivors": 527,
    "tail": "28/56/114",
    "filteredDmvId": "31|P / D0 / P29_HIGH / TAIL_STRONG / K8",
    "blockerCounts": {
      "bothComposite": 390,
      "leftPrimeOnly": 70,
      "rightPrimeOnly": 67,
      "unresolvedLargeCompositeRows": 466,
      "leftLargeComposite": 337,
      "rightLargeComposite": 345
    },
    "verdict": "RESCUED"
  },
  {
    "label": "corridor",
    "C": "3912698353475078",
    "firstBothG": 12915,
    "D": 25830,
    "Dmod30": 0,
    "trueK": 10.019195344119744,
    "pairStart": "L|L",
    "P29Survivors": 457,
    "S17Survivors": 561,
    "tail": "28/59/122",
    "filteredDmvId": "L|L / D0 / P29_HOT / TAIL_STRONG / K10",
    "blockerCounts": {
      "bothComposite": 389,
      "leftPrimeOnly": 88,
      "rightPrimeOnly": 84,
      "unresolvedLargeCompositeRows": 479,
      "leftLargeComposite": 346,
      "rightLargeComposite": 348
    },
    "verdict": "RESCUED"
  }
]
```

## Top TrueK Rows

```json
[
  {
    "label": "boss",
    "C": "3889129261038184",
    "firstBothG": 17307,
    "D": 34614,
    "Dmod30": 24,
    "trueK": 13.4309400510447,
    "pairStart": "L|L",
    "P29Survivors": 582,
    "S17Survivors": 757,
    "tail": "31/60/118",
    "filteredDmvId": "L|L / D24 / P29_BOSS / TAIL_STRONG / K13",
    "blockerCounts": {
      "bothComposite": 543,
      "leftPrimeOnly": 109,
      "rightPrimeOnly": 105,
      "unresolvedLargeCompositeRows": 669,
      "leftLargeComposite": 478,
      "rightLargeComposite": 477
    },
    "verdict": "BOSS_ROW"
  },
  {
    "label": "hot",
    "C": "3209851851697528",
    "firstBothG": 13161,
    "D": 26322,
    "Dmod30": 12,
    "trueK": 10.323590888035527,
    "pairStart": "L|23",
    "P29Survivors": 441,
    "S17Survivors": 575,
    "tail": "29/56/111",
    "filteredDmvId": "L|23 / D12 / P29_HIGH / TAIL_STRONG / K10",
    "blockerCounts": {
      "bothComposite": 435,
      "leftPrimeOnly": 75,
      "rightPrimeOnly": 65,
      "unresolvedLargeCompositeRows": 511,
      "leftLargeComposite": 365,
      "rightLargeComposite": 377
    },
    "verdict": "RESCUED"
  },
  {
    "label": "corridor",
    "C": "3912698353475078",
    "firstBothG": 12915,
    "D": 25830,
    "Dmod30": 0,
    "trueK": 10.019195344119744,
    "pairStart": "L|L",
    "P29Survivors": 457,
    "S17Survivors": 561,
    "tail": "28/59/122",
    "filteredDmvId": "L|L / D0 / P29_HOT / TAIL_STRONG / K10",
    "blockerCounts": {
      "bothComposite": 389,
      "leftPrimeOnly": 88,
      "rightPrimeOnly": 84,
      "unresolvedLargeCompositeRows": 479,
      "leftLargeComposite": 346,
      "rightLargeComposite": 348
    },
    "verdict": "RESCUED"
  },
  {
    "label": "fullCover",
    "C": "3194349700443064",
    "firstBothG": 12225,
    "D": 24450,
    "Dmod30": 0,
    "trueK": 9.591986184281602,
    "pairStart": "L|P",
    "P29Survivors": 417,
    "S17Survivors": 534,
    "tail": "28/57/114",
    "filteredDmvId": "L|P / D0 / P29_HIGH / TAIL_STRONG / K8",
    "blockerCounts": {
      "bothComposite": 390,
      "leftPrimeOnly": 69,
      "rightPrimeOnly": 75,
      "unresolvedLargeCompositeRows": 462,
      "leftLargeComposite": 349,
      "rightLargeComposite": 333
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak",
    "C": "3889134139471741",
    "firstBothG": 12030,
    "D": 24060,
    "Dmod30": 0,
    "trueK": 9.335771509911405,
    "pairStart": "31|P",
    "P29Survivors": 404,
    "S17Survivors": 527,
    "tail": "28/56/114",
    "filteredDmvId": "31|P / D0 / P29_HIGH / TAIL_STRONG / K8",
    "blockerCounts": {
      "bothComposite": 390,
      "leftPrimeOnly": 70,
      "rightPrimeOnly": 67,
      "unresolvedLargeCompositeRows": 466,
      "leftLargeComposite": 337,
      "rightLargeComposite": 345
    },
    "verdict": "RESCUED"
  },
  {
    "label": "corridor-12",
    "C": "3912698353475066",
    "firstBothG": 3825,
    "D": 7650,
    "Dmod30": 0,
    "trueK": 2.967357506098183,
    "pairStart": "L|L",
    "P29Survivors": 120,
    "S17Survivors": 166,
    "tail": "26/54/104",
    "filteredDmvId": "L|L / D0 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 129,
      "leftPrimeOnly": 18,
      "rightPrimeOnly": 19,
      "unresolvedLargeCompositeRows": 144,
      "leftLargeComposite": 103,
      "rightLargeComposite": 108
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak-12",
    "C": "3889134139471729",
    "firstBothG": 2880,
    "D": 5760,
    "Dmod30": 0,
    "trueK": 2.2349976682082167,
    "pairStart": "L|L",
    "P29Survivors": 92,
    "S17Survivors": 120,
    "tail": "27/57/92",
    "filteredDmvId": "L|L / D0 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 82,
      "leftPrimeOnly": 25,
      "rightPrimeOnly": 13,
      "unresolvedLargeCompositeRows": 99,
      "leftLargeComposite": 66,
      "rightLargeComposite": 74
    },
    "verdict": "RESCUED"
  },
  {
    "label": "hot-20",
    "C": "3209851851697508",
    "firstBothG": 2199,
    "D": 4398,
    "Dmod30": 18,
    "trueK": 1.7249127241691455,
    "pairStart": "L|L",
    "P29Survivors": 71,
    "S17Survivors": 95,
    "tail": "29/53/71",
    "filteredDmvId": "L|L / D18 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 69,
      "leftPrimeOnly": 10,
      "rightPrimeOnly": 16,
      "unresolvedLargeCompositeRows": 86,
      "leftLargeComposite": 62,
      "rightLargeComposite": 57
    },
    "verdict": "RESCUED"
  },
  {
    "label": "fullCover-12",
    "C": "3194349700443052",
    "firstBothG": 1839,
    "D": 3678,
    "Dmod30": 18,
    "trueK": 1.4429171855127911,
    "pairStart": "47|L",
    "P29Survivors": 61,
    "S17Survivors": 78,
    "tail": "29/56/61",
    "filteredDmvId": "47|L / D18 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 55,
      "leftPrimeOnly": 11,
      "rightPrimeOnly": 12,
      "unresolvedLargeCompositeRows": 67,
      "leftLargeComposite": 49,
      "rightLargeComposite": 48
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak-6",
    "C": "3889134139471735",
    "firstBothG": 1704,
    "D": 3408,
    "Dmod30": 18,
    "trueK": 1.3223736203565282,
    "pairStart": "31|L",
    "P29Survivors": 98,
    "S17Survivors": 132,
    "tail": "27/55/98",
    "filteredDmvId": "31|L / D18 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 95,
      "leftPrimeOnly": 24,
      "rightPrimeOnly": 13,
      "unresolvedLargeCompositeRows": 114,
      "leftLargeComposite": 77,
      "rightLargeComposite": 84
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak-2",
    "C": "3889134139471739",
    "firstBothG": 1482,
    "D": 2964,
    "Dmod30": 24,
    "trueK": 1.1500925500988115,
    "pairStart": "P|L",
    "P29Survivors": 51,
    "S17Survivors": 65,
    "tail": "29/51/51",
    "filteredDmvId": "P|L / D24 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 49,
      "leftPrimeOnly": 10,
      "rightPrimeOnly": 6,
      "unresolvedLargeCompositeRows": 59,
      "leftLargeComposite": 42,
      "rightLargeComposite": 43
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak+6",
    "C": "3889134139471747",
    "firstBothG": 1404,
    "D": 2808,
    "Dmod30": 18,
    "trueK": 1.0895613632515055,
    "pairStart": "L|P",
    "P29Survivors": 45,
    "S17Survivors": 60,
    "tail": "28/45/45",
    "filteredDmvId": "L|P / D18 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 46,
      "leftPrimeOnly": 9,
      "rightPrimeOnly": 5,
      "unresolvedLargeCompositeRows": 50,
      "leftLargeComposite": 29,
      "rightLargeComposite": 40
    },
    "verdict": "RESCUED"
  },
  {
    "label": "corridor+6",
    "C": "3912698353475084",
    "firstBothG": 1347,
    "D": 2694,
    "Dmod30": 24,
    "trueK": 1.044975309990654,
    "pairStart": "L|L",
    "P29Survivors": 44,
    "S17Survivors": 58,
    "tail": "26/44/44",
    "filteredDmvId": "L|L / D24 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 47,
      "leftPrimeOnly": 9,
      "rightPrimeOnly": 2,
      "unresolvedLargeCompositeRows": 49,
      "leftLargeComposite": 36,
      "rightLargeComposite": 39
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak-20",
    "C": "3889134139471721",
    "firstBothG": 1338,
    "D": 2676,
    "Dmod30": 6,
    "trueK": 1.0383426666884013,
    "pairStart": "19|L",
    "P29Survivors": 58,
    "S17Survivors": 76,
    "tail": "29/56/58",
    "filteredDmvId": "19|L / D6 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 50,
      "leftPrimeOnly": 13,
      "rightPrimeOnly": 13,
      "unresolvedLargeCompositeRows": 67,
      "leftLargeComposite": 49,
      "rightLargeComposite": 44
    },
    "verdict": "RESCUED"
  },
  {
    "label": "hot+12",
    "C": "3209851851697540",
    "firstBothG": 1221,
    "D": 2442,
    "Dmod30": 12,
    "trueK": 0.9577619082358009,
    "pairStart": "L|23",
    "P29Survivors": 68,
    "S17Survivors": 84,
    "tail": "30/60/68",
    "filteredDmvId": "L|23 / D12 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 62,
      "leftPrimeOnly": 10,
      "rightPrimeOnly": 12,
      "unresolvedLargeCompositeRows": 75,
      "leftLargeComposite": 54,
      "rightLargeComposite": 52
    },
    "verdict": "RESCUED"
  },
  {
    "label": "corridor+12",
    "C": "3912698353475090",
    "firstBothG": 1077,
    "D": 2154,
    "Dmod30": 24,
    "trueK": 0.8355147801484294,
    "pairStart": "31|L",
    "P29Survivors": 46,
    "S17Survivors": 61,
    "tail": "26/46/46",
    "filteredDmvId": "31|L / D24 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 44,
      "leftPrimeOnly": 10,
      "rightPrimeOnly": 7,
      "unresolvedLargeCompositeRows": 55,
      "leftLargeComposite": 38,
      "rightLargeComposite": 40
    },
    "verdict": "RESCUED"
  },
  {
    "label": "fullCover+12",
    "C": "3194349700443076",
    "firstBothG": 993,
    "D": 1986,
    "Dmod30": 6,
    "trueK": 0.7791282029441003,
    "pairStart": "L|29",
    "P29Survivors": 42,
    "S17Survivors": 53,
    "tail": "28/42/42",
    "filteredDmvId": "L|29 / D6 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 42,
      "leftPrimeOnly": 8,
      "rightPrimeOnly": 3,
      "unresolvedLargeCompositeRows": 50,
      "leftLargeComposite": 36,
      "rightLargeComposite": 40
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak-10",
    "C": "3889134139471731",
    "firstBothG": 992,
    "D": 1984,
    "Dmod30": 4,
    "trueK": 0.7698325301606079,
    "pairStart": "31|L",
    "P29Survivors": 67,
    "S17Survivors": 87,
    "tail": "31/57/67",
    "filteredDmvId": "31|L / D4 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 68,
      "leftPrimeOnly": 10,
      "rightPrimeOnly": 9,
      "unresolvedLargeCompositeRows": 76,
      "leftLargeComposite": 56,
      "rightLargeComposite": 60
    },
    "verdict": "RESCUED"
  },
  {
    "label": "boss+4",
    "C": "3889129261038188",
    "firstBothG": 975,
    "D": 1950,
    "Dmod30": 0,
    "trueK": 0.756639888471057,
    "pairStart": "L|L",
    "P29Survivors": 34,
    "S17Survivors": 41,
    "tail": "29/34/34",
    "filteredDmvId": "L|L / D0 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 31,
      "leftPrimeOnly": 5,
      "rightPrimeOnly": 5,
      "unresolvedLargeCompositeRows": 35,
      "leftLargeComposite": 29,
      "rightLargeComposite": 26
    },
    "verdict": "RESCUED"
  },
  {
    "label": "fullCover-2",
    "C": "3194349700443062",
    "firstBothG": 885,
    "D": 1770,
    "Dmod30": 0,
    "trueK": 0.6943891838927786,
    "pairStart": "L|L",
    "P29Survivors": 36,
    "S17Survivors": 46,
    "tail": "29/36/36",
    "filteredDmvId": "L|L / D0 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 32,
      "leftPrimeOnly": 6,
      "rightPrimeOnly": 8,
      "unresolvedLargeCompositeRows": 39,
      "leftLargeComposite": 28,
      "rightLargeComposite": 27
    },
    "verdict": "RESCUED"
  }
]
```

## Top P29 Rows

```json
[
  {
    "label": "boss",
    "C": "3889129261038184",
    "firstBothG": 17307,
    "D": 34614,
    "Dmod30": 24,
    "trueK": 13.4309400510447,
    "pairStart": "L|L",
    "P29Survivors": 582,
    "S17Survivors": 757,
    "tail": "31/60/118",
    "filteredDmvId": "L|L / D24 / P29_BOSS / TAIL_STRONG / K13",
    "blockerCounts": {
      "bothComposite": 543,
      "leftPrimeOnly": 109,
      "rightPrimeOnly": 105,
      "unresolvedLargeCompositeRows": 669,
      "leftLargeComposite": 478,
      "rightLargeComposite": 477
    },
    "verdict": "BOSS_ROW"
  },
  {
    "label": "corridor",
    "C": "3912698353475078",
    "firstBothG": 12915,
    "D": 25830,
    "Dmod30": 0,
    "trueK": 10.019195344119744,
    "pairStart": "L|L",
    "P29Survivors": 457,
    "S17Survivors": 561,
    "tail": "28/59/122",
    "filteredDmvId": "L|L / D0 / P29_HOT / TAIL_STRONG / K10",
    "blockerCounts": {
      "bothComposite": 389,
      "leftPrimeOnly": 88,
      "rightPrimeOnly": 84,
      "unresolvedLargeCompositeRows": 479,
      "leftLargeComposite": 346,
      "rightLargeComposite": 348
    },
    "verdict": "RESCUED"
  },
  {
    "label": "hot",
    "C": "3209851851697528",
    "firstBothG": 13161,
    "D": 26322,
    "Dmod30": 12,
    "trueK": 10.323590888035527,
    "pairStart": "L|23",
    "P29Survivors": 441,
    "S17Survivors": 575,
    "tail": "29/56/111",
    "filteredDmvId": "L|23 / D12 / P29_HIGH / TAIL_STRONG / K10",
    "blockerCounts": {
      "bothComposite": 435,
      "leftPrimeOnly": 75,
      "rightPrimeOnly": 65,
      "unresolvedLargeCompositeRows": 511,
      "leftLargeComposite": 365,
      "rightLargeComposite": 377
    },
    "verdict": "RESCUED"
  },
  {
    "label": "fullCover",
    "C": "3194349700443064",
    "firstBothG": 12225,
    "D": 24450,
    "Dmod30": 0,
    "trueK": 9.591986184281602,
    "pairStart": "L|P",
    "P29Survivors": 417,
    "S17Survivors": 534,
    "tail": "28/57/114",
    "filteredDmvId": "L|P / D0 / P29_HIGH / TAIL_STRONG / K8",
    "blockerCounts": {
      "bothComposite": 390,
      "leftPrimeOnly": 69,
      "rightPrimeOnly": 75,
      "unresolvedLargeCompositeRows": 462,
      "leftLargeComposite": 349,
      "rightLargeComposite": 333
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak",
    "C": "3889134139471741",
    "firstBothG": 12030,
    "D": 24060,
    "Dmod30": 0,
    "trueK": 9.335771509911405,
    "pairStart": "31|P",
    "P29Survivors": 404,
    "S17Survivors": 527,
    "tail": "28/56/114",
    "filteredDmvId": "31|P / D0 / P29_HIGH / TAIL_STRONG / K8",
    "blockerCounts": {
      "bothComposite": 390,
      "leftPrimeOnly": 70,
      "rightPrimeOnly": 67,
      "unresolvedLargeCompositeRows": 466,
      "leftLargeComposite": 337,
      "rightLargeComposite": 345
    },
    "verdict": "RESCUED"
  },
  {
    "label": "corridor-12",
    "C": "3912698353475066",
    "firstBothG": 3825,
    "D": 7650,
    "Dmod30": 0,
    "trueK": 2.967357506098183,
    "pairStart": "L|L",
    "P29Survivors": 120,
    "S17Survivors": 166,
    "tail": "26/54/104",
    "filteredDmvId": "L|L / D0 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 129,
      "leftPrimeOnly": 18,
      "rightPrimeOnly": 19,
      "unresolvedLargeCompositeRows": 144,
      "leftLargeComposite": 103,
      "rightLargeComposite": 108
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak-6",
    "C": "3889134139471735",
    "firstBothG": 1704,
    "D": 3408,
    "Dmod30": 18,
    "trueK": 1.3223736203565282,
    "pairStart": "31|L",
    "P29Survivors": 98,
    "S17Survivors": 132,
    "tail": "27/55/98",
    "filteredDmvId": "31|L / D18 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 95,
      "leftPrimeOnly": 24,
      "rightPrimeOnly": 13,
      "unresolvedLargeCompositeRows": 114,
      "leftLargeComposite": 77,
      "rightLargeComposite": 84
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak-12",
    "C": "3889134139471729",
    "firstBothG": 2880,
    "D": 5760,
    "Dmod30": 0,
    "trueK": 2.2349976682082167,
    "pairStart": "L|L",
    "P29Survivors": 92,
    "S17Survivors": 120,
    "tail": "27/57/92",
    "filteredDmvId": "L|L / D0 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 82,
      "leftPrimeOnly": 25,
      "rightPrimeOnly": 13,
      "unresolvedLargeCompositeRows": 99,
      "leftLargeComposite": 66,
      "rightLargeComposite": 74
    },
    "verdict": "RESCUED"
  },
  {
    "label": "hot-20",
    "C": "3209851851697508",
    "firstBothG": 2199,
    "D": 4398,
    "Dmod30": 18,
    "trueK": 1.7249127241691455,
    "pairStart": "L|L",
    "P29Survivors": 71,
    "S17Survivors": 95,
    "tail": "29/53/71",
    "filteredDmvId": "L|L / D18 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 69,
      "leftPrimeOnly": 10,
      "rightPrimeOnly": 16,
      "unresolvedLargeCompositeRows": 86,
      "leftLargeComposite": 62,
      "rightLargeComposite": 57
    },
    "verdict": "RESCUED"
  },
  {
    "label": "hot+12",
    "C": "3209851851697540",
    "firstBothG": 1221,
    "D": 2442,
    "Dmod30": 12,
    "trueK": 0.9577619082358009,
    "pairStart": "L|23",
    "P29Survivors": 68,
    "S17Survivors": 84,
    "tail": "30/60/68",
    "filteredDmvId": "L|23 / D12 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 62,
      "leftPrimeOnly": 10,
      "rightPrimeOnly": 12,
      "unresolvedLargeCompositeRows": 75,
      "leftLargeComposite": 54,
      "rightLargeComposite": 52
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak-10",
    "C": "3889134139471731",
    "firstBothG": 992,
    "D": 1984,
    "Dmod30": 4,
    "trueK": 0.7698325301606079,
    "pairStart": "31|L",
    "P29Survivors": 67,
    "S17Survivors": 87,
    "tail": "31/57/67",
    "filteredDmvId": "31|L / D4 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 68,
      "leftPrimeOnly": 10,
      "rightPrimeOnly": 9,
      "unresolvedLargeCompositeRows": 76,
      "leftLargeComposite": 56,
      "rightLargeComposite": 60
    },
    "verdict": "RESCUED"
  },
  {
    "label": "fullCover-12",
    "C": "3194349700443052",
    "firstBothG": 1839,
    "D": 3678,
    "Dmod30": 18,
    "trueK": 1.4429171855127911,
    "pairStart": "47|L",
    "P29Survivors": 61,
    "S17Survivors": 78,
    "tail": "29/56/61",
    "filteredDmvId": "47|L / D18 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 55,
      "leftPrimeOnly": 11,
      "rightPrimeOnly": 12,
      "unresolvedLargeCompositeRows": 67,
      "leftLargeComposite": 49,
      "rightLargeComposite": 48
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak-20",
    "C": "3889134139471721",
    "firstBothG": 1338,
    "D": 2676,
    "Dmod30": 6,
    "trueK": 1.0383426666884013,
    "pairStart": "19|L",
    "P29Survivors": 58,
    "S17Survivors": 76,
    "tail": "29/56/58",
    "filteredDmvId": "19|L / D6 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 50,
      "leftPrimeOnly": 13,
      "rightPrimeOnly": 13,
      "unresolvedLargeCompositeRows": 67,
      "leftLargeComposite": 49,
      "rightLargeComposite": 44
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak-2",
    "C": "3889134139471739",
    "firstBothG": 1482,
    "D": 2964,
    "Dmod30": 24,
    "trueK": 1.1500925500988115,
    "pairStart": "P|L",
    "P29Survivors": 51,
    "S17Survivors": 65,
    "tail": "29/51/51",
    "filteredDmvId": "P|L / D24 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 49,
      "leftPrimeOnly": 10,
      "rightPrimeOnly": 6,
      "unresolvedLargeCompositeRows": 59,
      "leftLargeComposite": 42,
      "rightLargeComposite": 43
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak+2",
    "C": "3889134139471743",
    "firstBothG": 710,
    "D": 1420,
    "Dmod30": 10,
    "trueK": 0.5509890084818868,
    "pairStart": "L|19",
    "P29Survivors": 46,
    "S17Survivors": 62,
    "tail": "26/46/46",
    "filteredDmvId": "L|19 / D10 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 46,
      "leftPrimeOnly": 9,
      "rightPrimeOnly": 7,
      "unresolvedLargeCompositeRows": 56,
      "leftLargeComposite": 40,
      "rightLargeComposite": 35
    },
    "verdict": "RESCUED"
  },
  {
    "label": "corridor-2",
    "C": "3912698353475076",
    "firstBothG": 595,
    "D": 1190,
    "Dmod30": 20,
    "trueK": 0.46158894539305056,
    "pairStart": "P|31",
    "P29Survivors": 46,
    "S17Survivors": 56,
    "tail": "28/46/46",
    "filteredDmvId": "P|31 / D20 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 40,
      "leftPrimeOnly": 6,
      "rightPrimeOnly": 10,
      "unresolvedLargeCompositeRows": 52,
      "leftLargeComposite": 38,
      "rightLargeComposite": 36
    },
    "verdict": "RESCUED"
  },
  {
    "label": "corridor+12",
    "C": "3912698353475090",
    "firstBothG": 1077,
    "D": 2154,
    "Dmod30": 24,
    "trueK": 0.8355147801484294,
    "pairStart": "31|L",
    "P29Survivors": 46,
    "S17Survivors": 61,
    "tail": "26/46/46",
    "filteredDmvId": "31|L / D24 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 44,
      "leftPrimeOnly": 10,
      "rightPrimeOnly": 7,
      "unresolvedLargeCompositeRows": 55,
      "leftLargeComposite": 38,
      "rightLargeComposite": 40
    },
    "verdict": "RESCUED"
  },
  {
    "label": "hot+2",
    "C": "3209851851697530",
    "firstBothG": 497,
    "D": 994,
    "Dmod30": 4,
    "trueK": 0.38985067026469533,
    "pairStart": "L|P",
    "P29Survivors": 45,
    "S17Survivors": 60,
    "tail": "26/45/45",
    "filteredDmvId": "L|P / D4 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 43,
      "leftPrimeOnly": 8,
      "rightPrimeOnly": 9,
      "unresolvedLargeCompositeRows": 49,
      "leftLargeComposite": 32,
      "rightLargeComposite": 37
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak+6",
    "C": "3889134139471747",
    "firstBothG": 1404,
    "D": 2808,
    "Dmod30": 18,
    "trueK": 1.0895613632515055,
    "pairStart": "L|P",
    "P29Survivors": 45,
    "S17Survivors": 60,
    "tail": "28/45/45",
    "filteredDmvId": "L|P / D18 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 46,
      "leftPrimeOnly": 9,
      "rightPrimeOnly": 5,
      "unresolvedLargeCompositeRows": 50,
      "leftLargeComposite": 29,
      "rightLargeComposite": 40
    },
    "verdict": "RESCUED"
  },
  {
    "label": "tailWeak+20",
    "C": "3889134139471761",
    "firstBothG": 692,
    "D": 1384,
    "Dmod30": 4,
    "trueK": 0.5370202730555852,
    "pairStart": "P|37",
    "P29Survivors": 44,
    "S17Survivors": 63,
    "tail": "25/44/44",
    "filteredDmvId": "P|37 / D4 / P29_LOW / TAIL_STRONG / KLOW",
    "blockerCounts": {
      "bothComposite": 47,
      "leftPrimeOnly": 11,
      "rightPrimeOnly": 5,
      "unresolvedLargeCompositeRows": 50,
      "leftLargeComposite": 34,
      "rightLargeComposite": 41
    },
    "verdict": "RESCUED"
  }
]
```