import type { Beatmap, HitObject } from '../../types/index.ts';

// Handcrafted true-rhythm beatmap for "Mapeamento"
// Every circle and slider head is strictly locked to real vocal and percussion onsets of the audio.
// Insane difficulty (4.4★) with syncopated flows, sharp jumps, and curved Bézier sliders.

export const allNotes: HitObject[] = [
  {
    "id": 1,
    "type": "slider",
    "x": 465,
    "y": 188,
    "timeMs": 430,
    "durationMs": 230,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 465,
        "y": 188
      },
      {
        "x": 474,
        "y": 238
      },
      {
        "x": 536,
        "y": 247
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 2,
    "type": "circle",
    "x": 338,
    "y": 158,
    "timeMs": 740,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 3,
    "type": "circle",
    "x": 529,
    "y": 130,
    "timeMs": 1020,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 4,
    "type": "circle",
    "x": 324,
    "y": 175,
    "timeMs": 1300,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 5,
    "type": "circle",
    "x": 411,
    "y": 130,
    "timeMs": 1590,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 6,
    "type": "circle",
    "x": 224,
    "y": 130,
    "timeMs": 1860,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 7,
    "type": "circle",
    "x": 277,
    "y": 130,
    "timeMs": 2180,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 8,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 2460,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 9,
    "type": "circle",
    "x": 130,
    "y": 290,
    "timeMs": 2750,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 10,
    "type": "circle",
    "x": 130,
    "y": 376,
    "timeMs": 3040,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 11,
    "type": "circle",
    "x": 130,
    "y": 484,
    "timeMs": 3320,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 12,
    "type": "circle",
    "x": 130,
    "y": 470,
    "timeMs": 3600,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 13,
    "type": "circle",
    "x": 130,
    "y": 470,
    "timeMs": 3910,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 14,
    "type": "circle",
    "x": 200,
    "y": 470,
    "timeMs": 4190,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 15,
    "type": "circle",
    "x": 298,
    "y": 470,
    "timeMs": 4470,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 16,
    "type": "circle",
    "x": 373,
    "y": 470,
    "timeMs": 4770,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 17,
    "type": "circle",
    "x": 301,
    "y": 470,
    "timeMs": 5050,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 18,
    "type": "circle",
    "x": 299,
    "y": 420,
    "timeMs": 5260,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 19,
    "type": "slider",
    "x": 299,
    "y": 420,
    "timeMs": 5520,
    "durationMs": 280,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 299,
        "y": 420
      },
      {
        "x": 331,
        "y": 368
      },
      {
        "x": 318,
        "y": 310
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 20,
    "type": "circle",
    "x": 406,
    "y": 470,
    "timeMs": 5880,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 21,
    "type": "circle",
    "x": 496,
    "y": 470,
    "timeMs": 6180,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 22,
    "type": "circle",
    "x": 500,
    "y": 417,
    "timeMs": 6320,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 23,
    "type": "circle",
    "x": 487,
    "y": 370,
    "timeMs": 6470,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 24,
    "type": "circle",
    "x": 661,
    "y": 487,
    "timeMs": 6750,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 25,
    "type": "circle",
    "x": 218,
    "y": 450,
    "timeMs": 6990,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 26,
    "type": "circle",
    "x": 164,
    "y": 440,
    "timeMs": 7140,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 27,
    "type": "circle",
    "x": 120,
    "y": 413,
    "timeMs": 7320,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 28,
    "type": "circle",
    "x": 324,
    "y": 365,
    "timeMs": 7600,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 29,
    "type": "circle",
    "x": 387,
    "y": 372,
    "timeMs": 7740,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 30,
    "type": "circle",
    "x": 437,
    "y": 397,
    "timeMs": 7880,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 31,
    "type": "slider",
    "x": 437,
    "y": 397,
    "timeMs": 8150,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 437,
        "y": 397
      },
      {
        "x": 460,
        "y": 439
      },
      {
        "x": 504,
        "y": 454
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 32,
    "type": "circle",
    "x": 291,
    "y": 426,
    "timeMs": 8450,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 33,
    "type": "circle",
    "x": 670,
    "y": 229,
    "timeMs": 8720,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 34,
    "type": "circle",
    "x": 670,
    "y": 199,
    "timeMs": 9020,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 35,
    "type": "circle",
    "x": 670,
    "y": 113,
    "timeMs": 9240,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 36,
    "type": "circle",
    "x": 670,
    "y": 130,
    "timeMs": 9590,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 37,
    "type": "circle",
    "x": 620,
    "y": 170,
    "timeMs": 9750,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 38,
    "type": "circle",
    "x": 592,
    "y": 216,
    "timeMs": 9890,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 39,
    "type": "circle",
    "x": 511,
    "y": 130,
    "timeMs": 10120,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 40,
    "type": "slider",
    "x": 511,
    "y": 130,
    "timeMs": 10430,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 511,
        "y": 130
      },
      {
        "x": 519,
        "y": 178
      },
      {
        "x": 469,
        "y": 207
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 41,
    "type": "circle",
    "x": 492,
    "y": 130,
    "timeMs": 10730,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 42,
    "type": "circle",
    "x": 342,
    "y": 130,
    "timeMs": 11080,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 43,
    "type": "slider",
    "x": 342,
    "y": 130,
    "timeMs": 11300,
    "durationMs": 460,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 342,
        "y": 130
      },
      {
        "x": 246,
        "y": 155
      },
      {
        "x": 236,
        "y": 275
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 44,
    "type": "circle",
    "x": 335,
    "y": 130,
    "timeMs": 11840,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 45,
    "type": "circle",
    "x": 150,
    "y": 130,
    "timeMs": 12090,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 46,
    "type": "circle",
    "x": 225,
    "y": 130,
    "timeMs": 12420,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 47,
    "type": "circle",
    "x": 224,
    "y": 185,
    "timeMs": 12620,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 48,
    "type": "circle",
    "x": 203,
    "y": 242,
    "timeMs": 12790,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 49,
    "type": "circle",
    "x": 306,
    "y": 256,
    "timeMs": 12980,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 50,
    "type": "circle",
    "x": 177,
    "y": 130,
    "timeMs": 13250,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 51,
    "type": "circle",
    "x": 155,
    "y": 130,
    "timeMs": 13540,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 52,
    "type": "slider",
    "x": 155,
    "y": 130,
    "timeMs": 13790,
    "durationMs": 270,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 155,
        "y": 130
      },
      {
        "x": 183,
        "y": 182
      },
      {
        "x": 123,
        "y": 233
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 53,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 14140,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 54,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 14470,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 55,
    "type": "circle",
    "x": 130,
    "y": 158,
    "timeMs": 14690,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 56,
    "type": "circle",
    "x": 130,
    "y": 289,
    "timeMs": 14950,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 57,
    "type": "circle",
    "x": 130,
    "y": 382,
    "timeMs": 15260,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 58,
    "type": "slider",
    "x": 130,
    "y": 382,
    "timeMs": 15520,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 130,
        "y": 382
      },
      {
        "x": 176,
        "y": 367
      },
      {
        "x": 216,
        "y": 400
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 59,
    "type": "circle",
    "x": 130,
    "y": 388,
    "timeMs": 15820,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 60,
    "type": "circle",
    "x": 130,
    "y": 470,
    "timeMs": 16200,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 61,
    "type": "circle",
    "x": 176,
    "y": 438,
    "timeMs": 16390,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 62,
    "type": "circle",
    "x": 153,
    "y": 470,
    "timeMs": 16670,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 63,
    "type": "circle",
    "x": 289,
    "y": 470,
    "timeMs": 16930,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 64,
    "type": "slider",
    "x": 289,
    "y": 470,
    "timeMs": 17220,
    "durationMs": 240,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 289,
        "y": 470
      },
      {
        "x": 295,
        "y": 418
      },
      {
        "x": 365,
        "y": 412
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 65,
    "type": "circle",
    "x": 274,
    "y": 470,
    "timeMs": 17540,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 66,
    "type": "circle",
    "x": 479,
    "y": 470,
    "timeMs": 17810,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 67,
    "type": "circle",
    "x": 357,
    "y": 470,
    "timeMs": 18090,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 68,
    "type": "circle",
    "x": 567,
    "y": 472,
    "timeMs": 18370,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 69,
    "type": "circle",
    "x": 442,
    "y": 470,
    "timeMs": 18660,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 70,
    "type": "circle",
    "x": 643,
    "y": 470,
    "timeMs": 18910,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 71,
    "type": "circle",
    "x": 670,
    "y": 444,
    "timeMs": 19060,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 72,
    "type": "circle",
    "x": 618,
    "y": 437,
    "timeMs": 19200,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 73,
    "type": "slider",
    "x": 552,
    "y": 364,
    "timeMs": 19480,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 552,
        "y": 364
      },
      {
        "x": 516,
        "y": 331
      },
      {
        "x": 467,
        "y": 341
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 74,
    "type": "circle",
    "x": 675,
    "y": 285,
    "timeMs": 19780,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 75,
    "type": "circle",
    "x": 562,
    "y": 462,
    "timeMs": 20060,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 76,
    "type": "circle",
    "x": 553,
    "y": 252,
    "timeMs": 20340,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 77,
    "type": "circle",
    "x": 670,
    "y": 392,
    "timeMs": 20610,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 78,
    "type": "circle",
    "x": 670,
    "y": 174,
    "timeMs": 20930,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 79,
    "type": "circle",
    "x": 670,
    "y": 295,
    "timeMs": 21190,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 80,
    "type": "circle",
    "x": 666,
    "y": 130,
    "timeMs": 21470,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 81,
    "type": "circle",
    "x": 387,
    "y": 130,
    "timeMs": 21740,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 82,
    "type": "circle",
    "x": 398,
    "y": 130,
    "timeMs": 22050,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 83,
    "type": "circle",
    "x": 266,
    "y": 130,
    "timeMs": 22280,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 84,
    "type": "circle",
    "x": 256,
    "y": 130,
    "timeMs": 22610,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 85,
    "type": "circle",
    "x": 132,
    "y": 130,
    "timeMs": 22870,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 86,
    "type": "circle",
    "x": 117,
    "y": 180,
    "timeMs": 23020,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 87,
    "type": "circle",
    "x": 120,
    "y": 235,
    "timeMs": 23180,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 88,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 23580,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 89,
    "type": "circle",
    "x": 370,
    "y": 240,
    "timeMs": 23720,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 90,
    "type": "circle",
    "x": 169,
    "y": 162,
    "timeMs": 24020,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 91,
    "type": "circle",
    "x": 378,
    "y": 130,
    "timeMs": 24340,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 92,
    "type": "circle",
    "x": 426,
    "y": 169,
    "timeMs": 24500,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 93,
    "type": "circle",
    "x": 194,
    "y": 158,
    "timeMs": 24870,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 94,
    "type": "slider",
    "x": 194,
    "y": 158,
    "timeMs": 25020,
    "durationMs": 340,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 194,
        "y": 158
      },
      {
        "x": 254,
        "y": 113
      },
      {
        "x": 330,
        "y": 136
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 95,
    "type": "slider",
    "x": 330,
    "y": 136,
    "timeMs": 25440,
    "durationMs": 460,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 330,
        "y": 136
      },
      {
        "x": 387,
        "y": 217
      },
      {
        "x": 489,
        "y": 219
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 96,
    "type": "circle",
    "x": 222,
    "y": 261,
    "timeMs": 25980,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 97,
    "type": "slider",
    "x": 221,
    "y": 287,
    "timeMs": 26280,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 221,
        "y": 287
      },
      {
        "x": 177,
        "y": 266
      },
      {
        "x": 133,
        "y": 296
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 98,
    "type": "circle",
    "x": 321,
    "y": 193,
    "timeMs": 26580,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 99,
    "type": "circle",
    "x": 253,
    "y": 394,
    "timeMs": 26870,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 100,
    "type": "circle",
    "x": 185,
    "y": 195,
    "timeMs": 27150,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 101,
    "type": "circle",
    "x": 362,
    "y": 288,
    "timeMs": 27390,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 102,
    "type": "slider",
    "x": 362,
    "y": 288,
    "timeMs": 27700,
    "durationMs": 480,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 362,
        "y": 288
      },
      {
        "x": 460,
        "y": 277
      },
      {
        "x": 524,
        "y": 367
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 103,
    "type": "circle",
    "x": 256,
    "y": 331,
    "timeMs": 28260,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 104,
    "type": "circle",
    "x": 403,
    "y": 181,
    "timeMs": 28540,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 105,
    "type": "circle",
    "x": 301,
    "y": 470,
    "timeMs": 28840,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 106,
    "type": "circle",
    "x": 434,
    "y": 470,
    "timeMs": 29120,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 107,
    "type": "circle",
    "x": 418,
    "y": 470,
    "timeMs": 29410,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 108,
    "type": "circle",
    "x": 431,
    "y": 422,
    "timeMs": 29590,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 109,
    "type": "circle",
    "x": 462,
    "y": 379,
    "timeMs": 29760,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 110,
    "type": "circle",
    "x": 502,
    "y": 352,
    "timeMs": 29970,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 111,
    "type": "circle",
    "x": 503,
    "y": 470,
    "timeMs": 30240,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 112,
    "type": "slider",
    "x": 503,
    "y": 470,
    "timeMs": 30470,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 503,
        "y": 470
      },
      {
        "x": 471,
        "y": 423
      },
      {
        "x": 517,
        "y": 367
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 113,
    "type": "circle",
    "x": 631,
    "y": 470,
    "timeMs": 30810,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 114,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 31100,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 115,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 31360,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 116,
    "type": "circle",
    "x": 613,
    "y": 465,
    "timeMs": 31500,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 117,
    "type": "circle",
    "x": 554,
    "y": 481,
    "timeMs": 31670,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 118,
    "type": "slider",
    "x": 554,
    "y": 481,
    "timeMs": 31930,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 554,
        "y": 481
      },
      {
        "x": 508,
        "y": 497
      },
      {
        "x": 473,
        "y": 458
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 119,
    "type": "circle",
    "x": 688,
    "y": 468,
    "timeMs": 32230,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 120,
    "type": "circle",
    "x": 501,
    "y": 470,
    "timeMs": 32580,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 121,
    "type": "slider",
    "x": 569,
    "y": 259,
    "timeMs": 32760,
    "durationMs": 230,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 569,
        "y": 259
      },
      {
        "x": 551,
        "y": 212
      },
      {
        "x": 501,
        "y": 197
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 122,
    "type": "circle",
    "x": 670,
    "y": 274,
    "timeMs": 33070,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 123,
    "type": "circle",
    "x": 670,
    "y": 130,
    "timeMs": 33370,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 124,
    "type": "circle",
    "x": 552,
    "y": 130,
    "timeMs": 33680,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 125,
    "type": "circle",
    "x": 518,
    "y": 130,
    "timeMs": 33940,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 126,
    "type": "circle",
    "x": 373,
    "y": 130,
    "timeMs": 34250,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 127,
    "type": "circle",
    "x": 362,
    "y": 130,
    "timeMs": 34510,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 128,
    "type": "circle",
    "x": 229,
    "y": 130,
    "timeMs": 34750,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 129,
    "type": "circle",
    "x": 418,
    "y": 130,
    "timeMs": 35050,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 130,
    "type": "slider",
    "x": 418,
    "y": 130,
    "timeMs": 35320,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 418,
        "y": 130
      },
      {
        "x": 448,
        "y": 168
      },
      {
        "x": 430,
        "y": 217
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 131,
    "type": "circle",
    "x": 321,
    "y": 130,
    "timeMs": 35620,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 132,
    "type": "circle",
    "x": 305,
    "y": 130,
    "timeMs": 35840,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 133,
    "type": "circle",
    "x": 152,
    "y": 130,
    "timeMs": 36180,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 134,
    "type": "circle",
    "x": 139,
    "y": 130,
    "timeMs": 36450,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 135,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 36740,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 136,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 37000,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 137,
    "type": "circle",
    "x": 130,
    "y": 360,
    "timeMs": 37230,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 138,
    "type": "circle",
    "x": 161,
    "y": 400,
    "timeMs": 37380,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 139,
    "type": "slider",
    "x": 161,
    "y": 400,
    "timeMs": 37580,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 161,
        "y": 400
      },
      {
        "x": 164,
        "y": 448
      },
      {
        "x": 226,
        "y": 459
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 140,
    "type": "circle",
    "x": 130,
    "y": 356,
    "timeMs": 37880,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 141,
    "type": "circle",
    "x": 186,
    "y": 347,
    "timeMs": 38070,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 142,
    "type": "circle",
    "x": 242,
    "y": 359,
    "timeMs": 38270,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 143,
    "type": "circle",
    "x": 285,
    "y": 386,
    "timeMs": 38440,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 144,
    "type": "circle",
    "x": 324,
    "y": 434,
    "timeMs": 38620,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 145,
    "type": "circle",
    "x": 130,
    "y": 393,
    "timeMs": 39010,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 146,
    "type": "circle",
    "x": 130,
    "y": 470,
    "timeMs": 39270,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 147,
    "type": "circle",
    "x": 142,
    "y": 470,
    "timeMs": 39570,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 148,
    "type": "slider",
    "x": 142,
    "y": 470,
    "timeMs": 39840,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 142,
        "y": 470
      },
      {
        "x": 117,
        "y": 429
      },
      {
        "x": 140,
        "y": 382
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 149,
    "type": "circle",
    "x": 235,
    "y": 470,
    "timeMs": 40140,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 150,
    "type": "circle",
    "x": 310,
    "y": 470,
    "timeMs": 40440,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 151,
    "type": "circle",
    "x": 410,
    "y": 470,
    "timeMs": 40710,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 152,
    "type": "circle",
    "x": 482,
    "y": 470,
    "timeMs": 40950,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 153,
    "type": "circle",
    "x": 525,
    "y": 470,
    "timeMs": 41260,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 154,
    "type": "circle",
    "x": 651,
    "y": 470,
    "timeMs": 41550,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 155,
    "type": "circle",
    "x": 654,
    "y": 470,
    "timeMs": 41810,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 156,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 42110,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 157,
    "type": "slider",
    "x": 670,
    "y": 470,
    "timeMs": 42410,
    "durationMs": 230,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 670,
        "y": 470
      },
      {
        "x": 658,
        "y": 421
      },
      {
        "x": 605,
        "y": 405
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 158,
    "type": "circle",
    "x": 670,
    "y": 478,
    "timeMs": 42720,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 159,
    "type": "circle",
    "x": 670,
    "y": 311,
    "timeMs": 42980,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 160,
    "type": "circle",
    "x": 654,
    "y": 253,
    "timeMs": 43140,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 161,
    "type": "circle",
    "x": 550,
    "y": 250,
    "timeMs": 43340,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 162,
    "type": "circle",
    "x": 507,
    "y": 220,
    "timeMs": 43540,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 163,
    "type": "circle",
    "x": 460,
    "y": 208,
    "timeMs": 43710,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 164,
    "type": "circle",
    "x": 398,
    "y": 214,
    "timeMs": 43890,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 165,
    "type": "circle",
    "x": 351,
    "y": 236,
    "timeMs": 44090,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 166,
    "type": "slider",
    "x": 351,
    "y": 236,
    "timeMs": 44370,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 351,
        "y": 236
      },
      {
        "x": 327,
        "y": 278
      },
      {
        "x": 266,
        "y": 260
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 167,
    "type": "circle",
    "x": 425,
    "y": 115,
    "timeMs": 44670,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 168,
    "type": "circle",
    "x": 453,
    "y": 130,
    "timeMs": 44870,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 169,
    "type": "circle",
    "x": 236,
    "y": 110,
    "timeMs": 45230,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 170,
    "type": "circle",
    "x": 412,
    "y": 130,
    "timeMs": 45490,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 171,
    "type": "circle",
    "x": 451,
    "y": 179,
    "timeMs": 45640,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 172,
    "type": "circle",
    "x": 469,
    "y": 231,
    "timeMs": 45790,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 173,
    "type": "circle",
    "x": 283,
    "y": 138,
    "timeMs": 46060,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 174,
    "type": "circle",
    "x": 488,
    "y": 130,
    "timeMs": 46340,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 175,
    "type": "circle",
    "x": 319,
    "y": 254,
    "timeMs": 46620,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 176,
    "type": "circle",
    "x": 266,
    "y": 270,
    "timeMs": 46770,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 177,
    "type": "circle",
    "x": 210,
    "y": 261,
    "timeMs": 46930,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 178,
    "type": "circle",
    "x": 240,
    "y": 130,
    "timeMs": 47200,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 179,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 47490,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 180,
    "type": "circle",
    "x": 130,
    "y": 214,
    "timeMs": 47740,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 181,
    "type": "circle",
    "x": 130,
    "y": 249,
    "timeMs": 48060,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 182,
    "type": "circle",
    "x": 130,
    "y": 377,
    "timeMs": 48290,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 183,
    "type": "circle",
    "x": 130,
    "y": 363,
    "timeMs": 48610,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 184,
    "type": "slider",
    "x": 130,
    "y": 363,
    "timeMs": 48890,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 130,
        "y": 363
      },
      {
        "x": 168,
        "y": 333
      },
      {
        "x": 216,
        "y": 344
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 185,
    "type": "circle",
    "x": 130,
    "y": 487,
    "timeMs": 49190,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 186,
    "type": "circle",
    "x": 130,
    "y": 470,
    "timeMs": 49450,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 187,
    "type": "circle",
    "x": 130,
    "y": 470,
    "timeMs": 49750,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 188,
    "type": "circle",
    "x": 209,
    "y": 470,
    "timeMs": 49990,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 189,
    "type": "circle",
    "x": 326,
    "y": 470,
    "timeMs": 50300,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 190,
    "type": "circle",
    "x": 398,
    "y": 470,
    "timeMs": 50600,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 191,
    "type": "circle",
    "x": 494,
    "y": 470,
    "timeMs": 50880,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 192,
    "type": "circle",
    "x": 594,
    "y": 470,
    "timeMs": 51150,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 193,
    "type": "circle",
    "x": 513,
    "y": 470,
    "timeMs": 51440,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 194,
    "type": "circle",
    "x": 553,
    "y": 470,
    "timeMs": 51690,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 195,
    "type": "circle",
    "x": 683,
    "y": 470,
    "timeMs": 52000,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 196,
    "type": "circle",
    "x": 680,
    "y": 470,
    "timeMs": 52320,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 197,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 52560,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 198,
    "type": "circle",
    "x": 670,
    "y": 415,
    "timeMs": 52830,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 199,
    "type": "circle",
    "x": 670,
    "y": 293,
    "timeMs": 53140,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 200,
    "type": "circle",
    "x": 670,
    "y": 289,
    "timeMs": 53390,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 201,
    "type": "circle",
    "x": 670,
    "y": 177,
    "timeMs": 53680,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 202,
    "type": "slider",
    "x": 670,
    "y": 177,
    "timeMs": 53890,
    "durationMs": 270,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 670,
        "y": 177
      },
      {
        "x": 658,
        "y": 235
      },
      {
        "x": 600,
        "y": 252
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 203,
    "type": "circle",
    "x": 670,
    "y": 130,
    "timeMs": 54240,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 204,
    "type": "circle",
    "x": 651,
    "y": 130,
    "timeMs": 54490,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 205,
    "type": "circle",
    "x": 488,
    "y": 130,
    "timeMs": 54810,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 206,
    "type": "circle",
    "x": 524,
    "y": 130,
    "timeMs": 55080,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 207,
    "type": "circle",
    "x": 352,
    "y": 130,
    "timeMs": 55360,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 208,
    "type": "circle",
    "x": 385,
    "y": 130,
    "timeMs": 55650,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 209,
    "type": "circle",
    "x": 333,
    "y": 130,
    "timeMs": 55940,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 210,
    "type": "circle",
    "x": 347,
    "y": 130,
    "timeMs": 56180,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 211,
    "type": "circle",
    "x": 199,
    "y": 130,
    "timeMs": 56490,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 212,
    "type": "circle",
    "x": 178,
    "y": 181,
    "timeMs": 56680,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 213,
    "type": "circle",
    "x": 175,
    "y": 242,
    "timeMs": 56820,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 214,
    "type": "circle",
    "x": 130,
    "y": 112,
    "timeMs": 57050,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 215,
    "type": "circle",
    "x": 142,
    "y": 314,
    "timeMs": 57300,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 216,
    "type": "circle",
    "x": 130,
    "y": 170,
    "timeMs": 57610,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 217,
    "type": "slider",
    "x": 296,
    "y": 202,
    "timeMs": 57890,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 296,
        "y": 202
      },
      {
        "x": 344,
        "y": 196
      },
      {
        "x": 354,
        "y": 136
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 218,
    "type": "circle",
    "x": 226,
    "y": 309,
    "timeMs": 58190,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 219,
    "type": "circle",
    "x": 217,
    "y": 130,
    "timeMs": 58450,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 220,
    "type": "slider",
    "x": 217,
    "y": 130,
    "timeMs": 58750,
    "durationMs": 230,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 217,
        "y": 130
      },
      {
        "x": 244,
        "y": 173
      },
      {
        "x": 200,
        "y": 220
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 221,
    "type": "circle",
    "x": 167,
    "y": 130,
    "timeMs": 59060,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 222,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 59310,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 223,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 59550,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 224,
    "type": "circle",
    "x": 130,
    "y": 241,
    "timeMs": 59840,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 225,
    "type": "circle",
    "x": 130,
    "y": 369,
    "timeMs": 60130,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 226,
    "type": "circle",
    "x": 130,
    "y": 470,
    "timeMs": 60410,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 227,
    "type": "circle",
    "x": 122,
    "y": 470,
    "timeMs": 60650,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 228,
    "type": "circle",
    "x": 255,
    "y": 470,
    "timeMs": 60970,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 229,
    "type": "circle",
    "x": 324,
    "y": 470,
    "timeMs": 61280,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 230,
    "type": "circle",
    "x": 415,
    "y": 470,
    "timeMs": 61520,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 231,
    "type": "circle",
    "x": 483,
    "y": 470,
    "timeMs": 61820,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 232,
    "type": "circle",
    "x": 481,
    "y": 411,
    "timeMs": 62020,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 233,
    "type": "circle",
    "x": 396,
    "y": 362,
    "timeMs": 62160,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 234,
    "type": "circle",
    "x": 430,
    "y": 320,
    "timeMs": 62350,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 235,
    "type": "slider",
    "x": 430,
    "y": 320,
    "timeMs": 62650,
    "durationMs": 230,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 430,
        "y": 320
      },
      {
        "x": 478,
        "y": 305
      },
      {
        "x": 471,
        "y": 238
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 236,
    "type": "circle",
    "x": 423,
    "y": 450,
    "timeMs": 62960,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 237,
    "type": "circle",
    "x": 324,
    "y": 279,
    "timeMs": 63190,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 238,
    "type": "circle",
    "x": 522,
    "y": 351,
    "timeMs": 63470,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 239,
    "type": "circle",
    "x": 340,
    "y": 461,
    "timeMs": 63760,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 240,
    "type": "circle",
    "x": 349,
    "y": 251,
    "timeMs": 64040,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 241,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 64310,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 242,
    "type": "circle",
    "x": 670,
    "y": 450,
    "timeMs": 64580,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 243,
    "type": "circle",
    "x": 670,
    "y": 309,
    "timeMs": 64880,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 244,
    "type": "slider",
    "x": 670,
    "y": 309,
    "timeMs": 65120,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 670,
        "y": 309
      },
      {
        "x": 615,
        "y": 303
      },
      {
        "x": 608,
        "y": 231
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 245,
    "type": "circle",
    "x": 670,
    "y": 312,
    "timeMs": 65450,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 246,
    "type": "circle",
    "x": 670,
    "y": 121,
    "timeMs": 65710,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 247,
    "type": "circle",
    "x": 670,
    "y": 202,
    "timeMs": 65960,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 248,
    "type": "circle",
    "x": 670,
    "y": 130,
    "timeMs": 66240,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 249,
    "type": "circle",
    "x": 494,
    "y": 130,
    "timeMs": 66520,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 250,
    "type": "circle",
    "x": 378,
    "y": 130,
    "timeMs": 66790,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 251,
    "type": "circle",
    "x": 351,
    "y": 130,
    "timeMs": 67070,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 252,
    "type": "circle",
    "x": 237,
    "y": 130,
    "timeMs": 67350,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 253,
    "type": "slider",
    "x": 237,
    "y": 130,
    "timeMs": 67630,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 237,
        "y": 130
      },
      {
        "x": 192,
        "y": 149
      },
      {
        "x": 204,
        "y": 211
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 254,
    "type": "circle",
    "x": 205,
    "y": 130,
    "timeMs": 67930,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 255,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 68200,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 256,
    "type": "circle",
    "x": 162,
    "y": 185,
    "timeMs": 68390,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 257,
    "type": "circle",
    "x": 131,
    "y": 156,
    "timeMs": 68680,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 258,
    "type": "circle",
    "x": 130,
    "y": 167,
    "timeMs": 68820,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 259,
    "type": "slider",
    "x": 130,
    "y": 167,
    "timeMs": 69010,
    "durationMs": 240,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 130,
        "y": 167
      },
      {
        "x": 167,
        "y": 205
      },
      {
        "x": 218,
        "y": 206
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 260,
    "type": "circle",
    "x": 130,
    "y": 239,
    "timeMs": 69330,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 261,
    "type": "circle",
    "x": 130,
    "y": 370,
    "timeMs": 69580,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 262,
    "type": "slider",
    "x": 130,
    "y": 370,
    "timeMs": 69870,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 130,
        "y": 370
      },
      {
        "x": 187,
        "y": 376
      },
      {
        "x": 216,
        "y": 428
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 263,
    "type": "circle",
    "x": 130,
    "y": 360,
    "timeMs": 70210,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 264,
    "type": "circle",
    "x": 181,
    "y": 321,
    "timeMs": 70420,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 265,
    "type": "circle",
    "x": 221,
    "y": 470,
    "timeMs": 70710,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 266,
    "type": "circle",
    "x": 365,
    "y": 470,
    "timeMs": 70980,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 267,
    "type": "circle",
    "x": 338,
    "y": 470,
    "timeMs": 71230,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 268,
    "type": "circle",
    "x": 488,
    "y": 470,
    "timeMs": 71540,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 269,
    "type": "circle",
    "x": 494,
    "y": 470,
    "timeMs": 71800,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 270,
    "type": "circle",
    "x": 623,
    "y": 470,
    "timeMs": 72100,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 271,
    "type": "slider",
    "x": 623,
    "y": 470,
    "timeMs": 72300,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 623,
        "y": 470
      },
      {
        "x": 621,
        "y": 413
      },
      {
        "x": 561,
        "y": 396
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 272,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 72640,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 273,
    "type": "circle",
    "x": 523,
    "y": 379,
    "timeMs": 72870,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 274,
    "type": "circle",
    "x": 385,
    "y": 470,
    "timeMs": 73170,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 275,
    "type": "circle",
    "x": 594,
    "y": 449,
    "timeMs": 73450,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 276,
    "type": "circle",
    "x": 647,
    "y": 423,
    "timeMs": 73590,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 277,
    "type": "circle",
    "x": 670,
    "y": 378,
    "timeMs": 73760,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 278,
    "type": "circle",
    "x": 670,
    "y": 395,
    "timeMs": 74050,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 279,
    "type": "circle",
    "x": 670,
    "y": 220,
    "timeMs": 74300,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 280,
    "type": "slider",
    "x": 670,
    "y": 220,
    "timeMs": 74510,
    "durationMs": 290,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 670,
        "y": 220
      },
      {
        "x": 612,
        "y": 192
      },
      {
        "x": 620,
        "y": 115
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 281,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 74880,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 282,
    "type": "circle",
    "x": 670,
    "y": 401,
    "timeMs": 75160,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 283,
    "type": "circle",
    "x": 670,
    "y": 305,
    "timeMs": 75410,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 284,
    "type": "circle",
    "x": 670,
    "y": 223,
    "timeMs": 75690,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 285,
    "type": "circle",
    "x": 670,
    "y": 151,
    "timeMs": 75990,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 286,
    "type": "slider",
    "x": 670,
    "y": 151,
    "timeMs": 76220,
    "durationMs": 230,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 670,
        "y": 151
      },
      {
        "x": 621,
        "y": 164
      },
      {
        "x": 583,
        "y": 122
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 287,
    "type": "circle",
    "x": 670,
    "y": 120,
    "timeMs": 76530,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 288,
    "type": "circle",
    "x": 670,
    "y": 130,
    "timeMs": 76810,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 289,
    "type": "circle",
    "x": 542,
    "y": 130,
    "timeMs": 77100,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 290,
    "type": "circle",
    "x": 434,
    "y": 130,
    "timeMs": 77340,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 291,
    "type": "circle",
    "x": 413,
    "y": 130,
    "timeMs": 77620,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 292,
    "type": "slider",
    "x": 413,
    "y": 130,
    "timeMs": 77910,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 413,
        "y": 130
      },
      {
        "x": 436,
        "y": 172
      },
      {
        "x": 405,
        "y": 218
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 293,
    "type": "circle",
    "x": 330,
    "y": 130,
    "timeMs": 78210,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 294,
    "type": "circle",
    "x": 221,
    "y": 130,
    "timeMs": 78470,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 295,
    "type": "circle",
    "x": 201,
    "y": 130,
    "timeMs": 78740,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 296,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 79030,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 297,
    "type": "circle",
    "x": 189,
    "y": 212,
    "timeMs": 79290,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 298,
    "type": "circle",
    "x": 339,
    "y": 130,
    "timeMs": 79580,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 299,
    "type": "circle",
    "x": 136,
    "y": 138,
    "timeMs": 79830,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 300,
    "type": "circle",
    "x": 258,
    "y": 130,
    "timeMs": 80120,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 301,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 80400,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 302,
    "type": "circle",
    "x": 130,
    "y": 251,
    "timeMs": 80660,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 303,
    "type": "circle",
    "x": 130,
    "y": 294,
    "timeMs": 80960,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 304,
    "type": "slider",
    "x": 130,
    "y": 294,
    "timeMs": 81220,
    "durationMs": 230,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 130,
        "y": 294
      },
      {
        "x": 177,
        "y": 274
      },
      {
        "x": 221,
        "y": 305
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 305,
    "type": "circle",
    "x": 130,
    "y": 327,
    "timeMs": 81530,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 306,
    "type": "circle",
    "x": 130,
    "y": 408,
    "timeMs": 81800,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 307,
    "type": "slider",
    "x": 130,
    "y": 408,
    "timeMs": 82040,
    "durationMs": 230,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 130,
        "y": 408
      },
      {
        "x": 157,
        "y": 451
      },
      {
        "x": 211,
        "y": 451
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 308,
    "type": "circle",
    "x": 130,
    "y": 481,
    "timeMs": 82350,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 309,
    "type": "circle",
    "x": 130,
    "y": 470,
    "timeMs": 82640,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 310,
    "type": "slider",
    "x": 130,
    "y": 470,
    "timeMs": 82870,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 130,
        "y": 470
      },
      {
        "x": 144,
        "y": 415
      },
      {
        "x": 215,
        "y": 410
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 311,
    "type": "circle",
    "x": 130,
    "y": 470,
    "timeMs": 83210,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 312,
    "type": "circle",
    "x": 141,
    "y": 419,
    "timeMs": 83400,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 313,
    "type": "circle",
    "x": 312,
    "y": 351,
    "timeMs": 83540,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 314,
    "type": "circle",
    "x": 326,
    "y": 470,
    "timeMs": 83770,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 315,
    "type": "circle",
    "x": 495,
    "y": 470,
    "timeMs": 84120,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 316,
    "type": "circle",
    "x": 549,
    "y": 448,
    "timeMs": 84300,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 317,
    "type": "circle",
    "x": 492,
    "y": 470,
    "timeMs": 84590,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 318,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 84870,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 319,
    "type": "circle",
    "x": 670,
    "y": 354,
    "timeMs": 85150,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 320,
    "type": "circle",
    "x": 670,
    "y": 337,
    "timeMs": 85430,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 321,
    "type": "circle",
    "x": 432,
    "y": 420,
    "timeMs": 85590,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 322,
    "type": "circle",
    "x": 523,
    "y": 196,
    "timeMs": 86000,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 323,
    "type": "circle",
    "x": 526,
    "y": 136,
    "timeMs": 86150,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 324,
    "type": "circle",
    "x": 510,
    "y": 130,
    "timeMs": 86340,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 325,
    "type": "circle",
    "x": 512,
    "y": 185,
    "timeMs": 86530,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 326,
    "type": "circle",
    "x": 342,
    "y": 130,
    "timeMs": 86800,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 327,
    "type": "circle",
    "x": 381,
    "y": 130,
    "timeMs": 87120,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 328,
    "type": "slider",
    "x": 381,
    "y": 130,
    "timeMs": 87360,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 381,
        "y": 130
      },
      {
        "x": 420,
        "y": 169
      },
      {
        "x": 393,
        "y": 229
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 329,
    "type": "circle",
    "x": 493,
    "y": 130,
    "timeMs": 87690,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 330,
    "type": "circle",
    "x": 450,
    "y": 177,
    "timeMs": 87890,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 331,
    "type": "circle",
    "x": 474,
    "y": 130,
    "timeMs": 88230,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 332,
    "type": "circle",
    "x": 315,
    "y": 130,
    "timeMs": 88520,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 333,
    "type": "circle",
    "x": 327,
    "y": 130,
    "timeMs": 88800,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 334,
    "type": "slider",
    "x": 327,
    "y": 130,
    "timeMs": 89040,
    "durationMs": 230,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 327,
        "y": 130
      },
      {
        "x": 358,
        "y": 170
      },
      {
        "x": 348,
        "y": 220
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 335,
    "type": "circle",
    "x": 274,
    "y": 130,
    "timeMs": 89350,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 336,
    "type": "circle",
    "x": 216,
    "y": 130,
    "timeMs": 89620,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 337,
    "type": "circle",
    "x": 371,
    "y": 130,
    "timeMs": 89910,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 338,
    "type": "circle",
    "x": 372,
    "y": 192,
    "timeMs": 90070,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 339,
    "type": "circle",
    "x": 391,
    "y": 243,
    "timeMs": 90230,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 340,
    "type": "slider",
    "x": 391,
    "y": 243,
    "timeMs": 90440,
    "durationMs": 230,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 391,
        "y": 243
      },
      {
        "x": 432,
        "y": 272
      },
      {
        "x": 419,
        "y": 331
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 341,
    "type": "circle",
    "x": 297,
    "y": 151,
    "timeMs": 90750,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 342,
    "type": "circle",
    "x": 501,
    "y": 200,
    "timeMs": 91030,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 343,
    "type": "slider",
    "x": 501,
    "y": 200,
    "timeMs": 91310,
    "durationMs": 240,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 501,
        "y": 200
      },
      {
        "x": 536,
        "y": 239
      },
      {
        "x": 594,
        "y": 223
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 344,
    "type": "circle",
    "x": 374,
    "y": 225,
    "timeMs": 91630,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 345,
    "type": "circle",
    "x": 395,
    "y": 130,
    "timeMs": 91870,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 346,
    "type": "circle",
    "x": 423,
    "y": 187,
    "timeMs": 92040,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 347,
    "type": "circle",
    "x": 427,
    "y": 236,
    "timeMs": 92200,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 348,
    "type": "circle",
    "x": 259,
    "y": 115,
    "timeMs": 92470,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 349,
    "type": "circle",
    "x": 454,
    "y": 130,
    "timeMs": 92690,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 350,
    "type": "circle",
    "x": 279,
    "y": 251,
    "timeMs": 92980,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 351,
    "type": "circle",
    "x": 278,
    "y": 130,
    "timeMs": 93260,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 352,
    "type": "slider",
    "x": 278,
    "y": 130,
    "timeMs": 93520,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 278,
        "y": 130
      },
      {
        "x": 305,
        "y": 170
      },
      {
        "x": 285,
        "y": 218
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 353,
    "type": "circle",
    "x": 170,
    "y": 168,
    "timeMs": 93820,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 354,
    "type": "circle",
    "x": 348,
    "y": 265,
    "timeMs": 94070,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 355,
    "type": "slider",
    "x": 348,
    "y": 265,
    "timeMs": 94350,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 348,
        "y": 265
      },
      {
        "x": 374,
        "y": 316
      },
      {
        "x": 448,
        "y": 292
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 356,
    "type": "circle",
    "x": 227,
    "y": 248,
    "timeMs": 94690,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 357,
    "type": "circle",
    "x": 412,
    "y": 170,
    "timeMs": 94930,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 358,
    "type": "circle",
    "x": 343,
    "y": 366,
    "timeMs": 95200,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 359,
    "type": "circle",
    "x": 244,
    "y": 184,
    "timeMs": 95470,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 360,
    "type": "circle",
    "x": 453,
    "y": 207,
    "timeMs": 95750,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 361,
    "type": "circle",
    "x": 255,
    "y": 470,
    "timeMs": 96030,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 362,
    "type": "circle",
    "x": 464,
    "y": 448,
    "timeMs": 96310,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 363,
    "type": "circle",
    "x": 363,
    "y": 470,
    "timeMs": 96620,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 364,
    "type": "circle",
    "x": 551,
    "y": 470,
    "timeMs": 96880,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 365,
    "type": "circle",
    "x": 451,
    "y": 470,
    "timeMs": 97170,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 366,
    "type": "circle",
    "x": 443,
    "y": 411,
    "timeMs": 97360,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 367,
    "type": "circle",
    "x": 455,
    "y": 356,
    "timeMs": 97560,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 368,
    "type": "circle",
    "x": 481,
    "y": 315,
    "timeMs": 97700,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 369,
    "type": "circle",
    "x": 590,
    "y": 470,
    "timeMs": 97980,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 370,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 98270,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 371,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 98490,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 372,
    "type": "circle",
    "x": 670,
    "y": 364,
    "timeMs": 98850,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 373,
    "type": "circle",
    "x": 670,
    "y": 272,
    "timeMs": 99100,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 374,
    "type": "circle",
    "x": 670,
    "y": 214,
    "timeMs": 99390,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 375,
    "type": "circle",
    "x": 670,
    "y": 122,
    "timeMs": 99670,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 376,
    "type": "circle",
    "x": 670,
    "y": 130,
    "timeMs": 99940,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 377,
    "type": "circle",
    "x": 613,
    "y": 130,
    "timeMs": 100210,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 378,
    "type": "circle",
    "x": 404,
    "y": 130,
    "timeMs": 100510,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 379,
    "type": "slider",
    "x": 404,
    "y": 130,
    "timeMs": 100770,
    "durationMs": 220,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 404,
        "y": 130
      },
      {
        "x": 359,
        "y": 112
      },
      {
        "x": 320,
        "y": 157
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 380,
    "type": "circle",
    "x": 470,
    "y": 130,
    "timeMs": 101070,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 381,
    "type": "circle",
    "x": 262,
    "y": 134,
    "timeMs": 101340,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 382,
    "type": "slider",
    "x": 262,
    "y": 134,
    "timeMs": 101620,
    "durationMs": 230,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 262,
        "y": 134
      },
      {
        "x": 221,
        "y": 163
      },
      {
        "x": 171,
        "y": 146
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 383,
    "type": "circle",
    "x": 370,
    "y": 130,
    "timeMs": 101930,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 384,
    "type": "circle",
    "x": 197,
    "y": 236,
    "timeMs": 102180,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 385,
    "type": "slider",
    "x": 286,
    "y": 207,
    "timeMs": 102440,
    "durationMs": 230,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 286,
        "y": 207
      },
      {
        "x": 235,
        "y": 205
      },
      {
        "x": 217,
        "y": 268
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 386,
    "type": "circle",
    "x": 320,
    "y": 130,
    "timeMs": 102750,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 387,
    "type": "circle",
    "x": 116,
    "y": 130,
    "timeMs": 103010,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 388,
    "type": "circle",
    "x": 267,
    "y": 130,
    "timeMs": 103300,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 389,
    "type": "circle",
    "x": 130,
    "y": 132,
    "timeMs": 103560,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 390,
    "type": "circle",
    "x": 130,
    "y": 290,
    "timeMs": 103850,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 391,
    "type": "circle",
    "x": 174,
    "y": 313,
    "timeMs": 104060,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 392,
    "type": "circle",
    "x": 231,
    "y": 322,
    "timeMs": 104230,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 393,
    "type": "circle",
    "x": 285,
    "y": 367,
    "timeMs": 104400,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 394,
    "type": "circle",
    "x": 130,
    "y": 452,
    "timeMs": 104670,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 395,
    "type": "circle",
    "x": 130,
    "y": 470,
    "timeMs": 104960,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 396,
    "type": "circle",
    "x": 130,
    "y": 470,
    "timeMs": 105240,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 397,
    "type": "circle",
    "x": 129,
    "y": 470,
    "timeMs": 105540,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 398,
    "type": "circle",
    "x": 282,
    "y": 470,
    "timeMs": 105790,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 399,
    "type": "circle",
    "x": 241,
    "y": 470,
    "timeMs": 106070,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 400,
    "type": "slider",
    "x": 241,
    "y": 470,
    "timeMs": 106270,
    "durationMs": 280,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 241,
        "y": 470
      },
      {
        "x": 197,
        "y": 427
      },
      {
        "x": 193,
        "y": 369
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 401,
    "type": "circle",
    "x": 486,
    "y": 470,
    "timeMs": 106630,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 402,
    "type": "circle",
    "x": 564,
    "y": 470,
    "timeMs": 106900,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 403,
    "type": "circle",
    "x": 683,
    "y": 470,
    "timeMs": 107220,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 404,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 107470,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 405,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 107750,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 406,
    "type": "circle",
    "x": 670,
    "y": 380,
    "timeMs": 108030,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 407,
    "type": "circle",
    "x": 670,
    "y": 346,
    "timeMs": 108310,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 408,
    "type": "circle",
    "x": 670,
    "y": 222,
    "timeMs": 108600,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 409,
    "type": "circle",
    "x": 670,
    "y": 318,
    "timeMs": 108880,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 410,
    "type": "circle",
    "x": 670,
    "y": 217,
    "timeMs": 109140,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 411,
    "type": "circle",
    "x": 670,
    "y": 164,
    "timeMs": 109440,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 412,
    "type": "slider",
    "x": 670,
    "y": 164,
    "timeMs": 109650,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 670,
        "y": 164
      },
      {
        "x": 618,
        "y": 183
      },
      {
        "x": 582,
        "y": 117
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 413,
    "type": "circle",
    "x": 670,
    "y": 130,
    "timeMs": 109980,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 414,
    "type": "circle",
    "x": 670,
    "y": 130,
    "timeMs": 110270,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 415,
    "type": "circle",
    "x": 690,
    "y": 130,
    "timeMs": 110550,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 416,
    "type": "circle",
    "x": 526,
    "y": 130,
    "timeMs": 110810,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 417,
    "type": "circle",
    "x": 571,
    "y": 130,
    "timeMs": 111110,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 418,
    "type": "slider",
    "x": 571,
    "y": 130,
    "timeMs": 111400,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 571,
        "y": 130
      },
      {
        "x": 610,
        "y": 168
      },
      {
        "x": 583,
        "y": 229
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 419,
    "type": "circle",
    "x": 458,
    "y": 130,
    "timeMs": 111730,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 420,
    "type": "circle",
    "x": 394,
    "y": 130,
    "timeMs": 111950,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 421,
    "type": "slider",
    "x": 394,
    "y": 130,
    "timeMs": 112110,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 394,
        "y": 130
      },
      {
        "x": 350,
        "y": 163
      },
      {
        "x": 354,
        "y": 222
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 422,
    "type": "circle",
    "x": 307,
    "y": 130,
    "timeMs": 112440,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 423,
    "type": "circle",
    "x": 314,
    "y": 185,
    "timeMs": 112640,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 424,
    "type": "circle",
    "x": 342,
    "y": 237,
    "timeMs": 112820,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 425,
    "type": "circle",
    "x": 337,
    "y": 244,
    "timeMs": 112970,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 426,
    "type": "circle",
    "x": 325,
    "y": 299,
    "timeMs": 113130,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 427,
    "type": "circle",
    "x": 299,
    "y": 339,
    "timeMs": 113330,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 428,
    "type": "circle",
    "x": 250,
    "y": 377,
    "timeMs": 113500,
    "comboNumber": 4,
    "comboColorIndex": 2
  }
];

export const mapeamentoBeatmap: Beatmap = {
  id: 'mapeamento',
  title: 'Mapeamento',
  artist: 'Desconhecido',
  bpm: 106,
  durationSec: 115,
  durationFormatted: '1:55',
  difficultyName: 'Insane',
  difficultyStars: 4.4,
  audioSourceType: 'file',
  audioUrl: './songs/mapeamento.mp3',
  coverUrl: './covers/mapeamento.jpg',
  previewStartSec: 15,
  offsetMs: 430,
  circleRadius: 46,
  approachTimeMs: 600,
  notes: allNotes,
};
