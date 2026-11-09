import type { Beatmap, HitObject } from '../../types/index.ts';

// Handcrafted true-rhythm medium-difficulty beatmap for "Unopar, Me Deixa em Paz!"
// Every circle and slider head is strictly locked to real vocal and percussion onsets of the audio.
// Balanced Medium/Normal difficulty (3.2★) with comfortable circle size (CS 52), generous approach time (AR 700ms), and smooth melodic sliders.

export const allNotes: HitObject[] = [
  {
    "id": 1,
    "type": "circle",
    "x": 311,
    "y": 246,
    "timeMs": 160,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 2,
    "type": "slider",
    "x": 311,
    "y": 246,
    "timeMs": 430,
    "durationMs": 580,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 311,
        "y": 246
      },
      {
        "x": 251,
        "y": 310
      },
      {
        "x": 154,
        "y": 275
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
    "id": 3,
    "type": "circle",
    "x": 354,
    "y": 140,
    "timeMs": 1170,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 4,
    "type": "slider",
    "x": 354,
    "y": 140,
    "timeMs": 1540,
    "durationMs": 330,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 354,
        "y": 140
      },
      {
        "x": 395,
        "y": 168
      },
      {
        "x": 381,
        "y": 227
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
    "id": 5,
    "type": "circle",
    "x": 249,
    "y": 188,
    "timeMs": 1970,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 6,
    "type": "circle",
    "x": 333,
    "y": 140,
    "timeMs": 2270,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 7,
    "type": "circle",
    "x": 223,
    "y": 190,
    "timeMs": 2530,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 8,
    "type": "circle",
    "x": 217,
    "y": 140,
    "timeMs": 2870,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 9,
    "type": "circle",
    "x": 140,
    "y": 140,
    "timeMs": 3250,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 10,
    "type": "circle",
    "x": 152,
    "y": 419,
    "timeMs": 3560,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 11,
    "type": "circle",
    "x": 130,
    "y": 302,
    "timeMs": 3800,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 12,
    "type": "circle",
    "x": 262,
    "y": 340,
    "timeMs": 4220,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 13,
    "type": "circle",
    "x": 177,
    "y": 433,
    "timeMs": 4530,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 14,
    "type": "circle",
    "x": 151,
    "y": 317,
    "timeMs": 4770,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 15,
    "type": "circle",
    "x": 272,
    "y": 343,
    "timeMs": 5050,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 16,
    "type": "circle",
    "x": 180,
    "y": 448,
    "timeMs": 5490,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 17,
    "type": "circle",
    "x": 363,
    "y": 297,
    "timeMs": 5780,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 18,
    "type": "circle",
    "x": 482,
    "y": 309,
    "timeMs": 6030,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 19,
    "type": "circle",
    "x": 420,
    "y": 422,
    "timeMs": 6370,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 20,
    "type": "circle",
    "x": 341,
    "y": 316,
    "timeMs": 6740,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 21,
    "type": "circle",
    "x": 459,
    "y": 302,
    "timeMs": 6980,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 22,
    "type": "slider",
    "x": 459,
    "y": 302,
    "timeMs": 7310,
    "durationMs": 470,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 459,
        "y": 302
      },
      {
        "x": 517,
        "y": 261
      },
      {
        "x": 588,
        "y": 301
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
    "id": 23,
    "type": "circle",
    "x": 494,
    "y": 421,
    "timeMs": 7880,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 24,
    "type": "circle",
    "x": 482,
    "y": 220,
    "timeMs": 8250,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 25,
    "type": "circle",
    "x": 611,
    "y": 198,
    "timeMs": 8610,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 26,
    "type": "circle",
    "x": 572,
    "y": 322,
    "timeMs": 8960,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 27,
    "type": "circle",
    "x": 483,
    "y": 239,
    "timeMs": 9230,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 28,
    "type": "slider",
    "x": 483,
    "y": 239,
    "timeMs": 9470,
    "durationMs": 390,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 483,
        "y": 239
      },
      {
        "x": 426,
        "y": 224
      },
      {
        "x": 401,
        "y": 169
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
    "id": 29,
    "type": "circle",
    "x": 545,
    "y": 178,
    "timeMs": 9960,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 30,
    "type": "circle",
    "x": 469,
    "y": 273,
    "timeMs": 10230,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 31,
    "type": "slider",
    "x": 497,
    "y": 213,
    "timeMs": 10490,
    "durationMs": 460,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 497,
        "y": 213
      },
      {
        "x": 433,
        "y": 240
      },
      {
        "x": 436,
        "y": 324
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
    "id": 32,
    "type": "circle",
    "x": 418,
    "y": 174,
    "timeMs": 11050,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 33,
    "type": "circle",
    "x": 530,
    "y": 234,
    "timeMs": 11370,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 34,
    "type": "circle",
    "x": 438,
    "y": 309,
    "timeMs": 11610,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 35,
    "type": "circle",
    "x": 413,
    "y": 188,
    "timeMs": 11890,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 36,
    "type": "circle",
    "x": 527,
    "y": 235,
    "timeMs": 12170,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 37,
    "type": "circle",
    "x": 434,
    "y": 313,
    "timeMs": 12440,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 38,
    "type": "circle",
    "x": 291,
    "y": 140,
    "timeMs": 12850,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 39,
    "type": "circle",
    "x": 190,
    "y": 140,
    "timeMs": 13110,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 40,
    "type": "circle",
    "x": 168,
    "y": 140,
    "timeMs": 13420,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 41,
    "type": "circle",
    "x": 140,
    "y": 140,
    "timeMs": 13660,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 42,
    "type": "circle",
    "x": 140,
    "y": 212,
    "timeMs": 13980,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 43,
    "type": "circle",
    "x": 140,
    "y": 292,
    "timeMs": 14370,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 44,
    "type": "circle",
    "x": 140,
    "y": 361,
    "timeMs": 14660,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 45,
    "type": "circle",
    "x": 126,
    "y": 377,
    "timeMs": 15010,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 46,
    "type": "slider",
    "x": 126,
    "y": 377,
    "timeMs": 15270,
    "durationMs": 580,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 126,
        "y": 377
      },
      {
        "x": 214,
        "y": 374
      },
      {
        "x": 269,
        "y": 423
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
    "id": 47,
    "type": "circle",
    "x": 219,
    "y": 448,
    "timeMs": 16030,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 48,
    "type": "circle",
    "x": 248,
    "y": 317,
    "timeMs": 16420,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 49,
    "type": "circle",
    "x": 358,
    "y": 384,
    "timeMs": 16760,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 50,
    "type": "circle",
    "x": 237,
    "y": 439,
    "timeMs": 17140,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 51,
    "type": "circle",
    "x": 248,
    "y": 301,
    "timeMs": 17580,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 52,
    "type": "circle",
    "x": 344,
    "y": 376,
    "timeMs": 17860,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 53,
    "type": "circle",
    "x": 222,
    "y": 436,
    "timeMs": 18270,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 54,
    "type": "circle",
    "x": 526,
    "y": 236,
    "timeMs": 18550,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 55,
    "type": "circle",
    "x": 629,
    "y": 298,
    "timeMs": 18800,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 56,
    "type": "circle",
    "x": 516,
    "y": 350,
    "timeMs": 19090,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 57,
    "type": "circle",
    "x": 531,
    "y": 231,
    "timeMs": 19340,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 58,
    "type": "circle",
    "x": 653,
    "y": 293,
    "timeMs": 19760,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 59,
    "type": "circle",
    "x": 548,
    "y": 364,
    "timeMs": 20080,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 60,
    "type": "circle",
    "x": 531,
    "y": 246,
    "timeMs": 20320,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 61,
    "type": "circle",
    "x": 647,
    "y": 279,
    "timeMs": 20630,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 62,
    "type": "circle",
    "x": 553,
    "y": 377,
    "timeMs": 21030,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 63,
    "type": "circle",
    "x": 498,
    "y": 268,
    "timeMs": 21300,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 64,
    "type": "circle",
    "x": 620,
    "y": 283,
    "timeMs": 21580,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 65,
    "type": "circle",
    "x": 557,
    "y": 385,
    "timeMs": 21830,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 66,
    "type": "circle",
    "x": 485,
    "y": 262,
    "timeMs": 22300,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 67,
    "type": "circle",
    "x": 605,
    "y": 263,
    "timeMs": 22550,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 68,
    "type": "circle",
    "x": 307,
    "y": 311,
    "timeMs": 22880,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 69,
    "type": "circle",
    "x": 226,
    "y": 206,
    "timeMs": 23250,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 70,
    "type": "circle",
    "x": 349,
    "y": 193,
    "timeMs": 23540,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 71,
    "type": "circle",
    "x": 309,
    "y": 306,
    "timeMs": 23790,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 72,
    "type": "circle",
    "x": 229,
    "y": 203,
    "timeMs": 24140,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 73,
    "type": "slider",
    "x": 229,
    "y": 203,
    "timeMs": 24390,
    "durationMs": 580,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 229,
        "y": 203
      },
      {
        "x": 149,
        "y": 238
      },
      {
        "x": 157,
        "y": 329
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
    "id": 74,
    "type": "circle",
    "x": 156,
    "y": 174,
    "timeMs": 25070,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 75,
    "type": "circle",
    "x": 369,
    "y": 331,
    "timeMs": 25470,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 76,
    "type": "circle",
    "x": 272,
    "y": 406,
    "timeMs": 25750,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 77,
    "type": "circle",
    "x": 262,
    "y": 281,
    "timeMs": 26050,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 78,
    "type": "circle",
    "x": 390,
    "y": 326,
    "timeMs": 26450,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 79,
    "type": "circle",
    "x": 312,
    "y": 423,
    "timeMs": 26740,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 80,
    "type": "circle",
    "x": 261,
    "y": 315,
    "timeMs": 26990,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 81,
    "type": "circle",
    "x": 387,
    "y": 332,
    "timeMs": 27310,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 82,
    "type": "circle",
    "x": 245,
    "y": 460,
    "timeMs": 27700,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 83,
    "type": "circle",
    "x": 369,
    "y": 452,
    "timeMs": 27990,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 84,
    "type": "circle",
    "x": 322,
    "y": 460,
    "timeMs": 28420,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 85,
    "type": "circle",
    "x": 441,
    "y": 459,
    "timeMs": 28660,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 86,
    "type": "slider",
    "x": 441,
    "y": 459,
    "timeMs": 28990,
    "durationMs": 450,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 441,
        "y": 459
      },
      {
        "x": 500,
        "y": 426
      },
      {
        "x": 564,
        "y": 446
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 87,
    "type": "circle",
    "x": 454,
    "y": 460,
    "timeMs": 29540,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 88,
    "type": "circle",
    "x": 576,
    "y": 410,
    "timeMs": 29910,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 89,
    "type": "circle",
    "x": 502,
    "y": 460,
    "timeMs": 30200,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 90,
    "type": "circle",
    "x": 632,
    "y": 460,
    "timeMs": 30640,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 91,
    "type": "circle",
    "x": 632,
    "y": 460,
    "timeMs": 30890,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 92,
    "type": "circle",
    "x": 660,
    "y": 460,
    "timeMs": 31190,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 93,
    "type": "circle",
    "x": 660,
    "y": 381,
    "timeMs": 31440,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 94,
    "type": "slider",
    "x": 660,
    "y": 381,
    "timeMs": 31740,
    "durationMs": 460,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 660,
        "y": 381
      },
      {
        "x": 592,
        "y": 366
      },
      {
        "x": 578,
        "y": 285
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
    "id": 95,
    "type": "circle",
    "x": 660,
    "y": 279,
    "timeMs": 32300,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 96,
    "type": "circle",
    "x": 625,
    "y": 152,
    "timeMs": 32680,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 97,
    "type": "circle",
    "x": 660,
    "y": 263,
    "timeMs": 33120,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 98,
    "type": "circle",
    "x": 594,
    "y": 159,
    "timeMs": 33400,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 99,
    "type": "circle",
    "x": 660,
    "y": 145,
    "timeMs": 33680,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 100,
    "type": "circle",
    "x": 660,
    "y": 140,
    "timeMs": 33940,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 101,
    "type": "circle",
    "x": 608,
    "y": 140,
    "timeMs": 34230,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 102,
    "type": "slider",
    "x": 608,
    "y": 140,
    "timeMs": 34520,
    "durationMs": 450,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 608,
        "y": 140
      },
      {
        "x": 612,
        "y": 208
      },
      {
        "x": 568,
        "y": 257
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
    "id": 103,
    "type": "circle",
    "x": 354,
    "y": 140,
    "timeMs": 35070,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 104,
    "type": "circle",
    "x": 275,
    "y": 140,
    "timeMs": 35320,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 105,
    "type": "circle",
    "x": 243,
    "y": 140,
    "timeMs": 35620,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 106,
    "type": "circle",
    "x": 145,
    "y": 140,
    "timeMs": 35870,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 107,
    "type": "circle",
    "x": 120,
    "y": 140,
    "timeMs": 36170,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 108,
    "type": "circle",
    "x": 140,
    "y": 140,
    "timeMs": 36550,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 109,
    "type": "circle",
    "x": 140,
    "y": 211,
    "timeMs": 36850,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 110,
    "type": "circle",
    "x": 154,
    "y": 328,
    "timeMs": 37100,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 111,
    "type": "circle",
    "x": 131,
    "y": 193,
    "timeMs": 37520,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 112,
    "type": "circle",
    "x": 254,
    "y": 214,
    "timeMs": 37820,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 113,
    "type": "circle",
    "x": 183,
    "y": 330,
    "timeMs": 38230,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 114,
    "type": "circle",
    "x": 125,
    "y": 221,
    "timeMs": 38520,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 115,
    "type": "circle",
    "x": 245,
    "y": 235,
    "timeMs": 38780,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 116,
    "type": "circle",
    "x": 181,
    "y": 342,
    "timeMs": 39070,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 117,
    "type": "circle",
    "x": 216,
    "y": 263,
    "timeMs": 39500,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 118,
    "type": "circle",
    "x": 335,
    "y": 257,
    "timeMs": 39740,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 119,
    "type": "slider",
    "x": 335,
    "y": 257,
    "timeMs": 40050,
    "durationMs": 480,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 335,
        "y": 257
      },
      {
        "x": 400,
        "y": 289
      },
      {
        "x": 467,
        "y": 265
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
    "id": 120,
    "type": "circle",
    "x": 363,
    "y": 377,
    "timeMs": 40630,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 121,
    "type": "circle",
    "x": 332,
    "y": 250,
    "timeMs": 40990,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 122,
    "type": "circle",
    "x": 449,
    "y": 294,
    "timeMs": 41300,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 123,
    "type": "circle",
    "x": 335,
    "y": 374,
    "timeMs": 41740,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 124,
    "type": "circle",
    "x": 451,
    "y": 253,
    "timeMs": 42270,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 125,
    "type": "circle",
    "x": 566,
    "y": 290,
    "timeMs": 42530,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 126,
    "type": "circle",
    "x": 471,
    "y": 372,
    "timeMs": 42830,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 127,
    "type": "circle",
    "x": 430,
    "y": 244,
    "timeMs": 43220,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 128,
    "type": "circle",
    "x": 554,
    "y": 261,
    "timeMs": 43520,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 129,
    "type": "circle",
    "x": 483,
    "y": 358,
    "timeMs": 43770,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 130,
    "type": "circle",
    "x": 441,
    "y": 237,
    "timeMs": 44100,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 131,
    "type": "circle",
    "x": 660,
    "y": 326,
    "timeMs": 44500,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 132,
    "type": "circle",
    "x": 660,
    "y": 198,
    "timeMs": 44890,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 133,
    "type": "circle",
    "x": 660,
    "y": 206,
    "timeMs": 45190,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 134,
    "type": "circle",
    "x": 660,
    "y": 140,
    "timeMs": 45440,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 135,
    "type": "circle",
    "x": 563,
    "y": 140,
    "timeMs": 45720,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 136,
    "type": "slider",
    "x": 563,
    "y": 140,
    "timeMs": 45980,
    "durationMs": 330,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 563,
        "y": 140
      },
      {
        "x": 543,
        "y": 186
      },
      {
        "x": 483,
        "y": 184
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
    "id": 137,
    "type": "circle",
    "x": 506,
    "y": 140,
    "timeMs": 46410,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 138,
    "type": "circle",
    "x": 331,
    "y": 151,
    "timeMs": 46710,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 139,
    "type": "circle",
    "x": 413,
    "y": 140,
    "timeMs": 46980,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 140,
    "type": "circle",
    "x": 295,
    "y": 178,
    "timeMs": 47270,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 141,
    "type": "circle",
    "x": 316,
    "y": 140,
    "timeMs": 47660,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 142,
    "type": "circle",
    "x": 199,
    "y": 140,
    "timeMs": 47950,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 143,
    "type": "slider",
    "x": 199,
    "y": 140,
    "timeMs": 48220,
    "durationMs": 580,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 199,
        "y": 140
      },
      {
        "x": 256,
        "y": 206
      },
      {
        "x": 348,
        "y": 191
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
    "id": 144,
    "type": "circle",
    "x": 131,
    "y": 290,
    "timeMs": 48940,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 145,
    "type": "circle",
    "x": 134,
    "y": 170,
    "timeMs": 49190,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 146,
    "type": "circle",
    "x": 250,
    "y": 226,
    "timeMs": 49520,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 147,
    "type": "circle",
    "x": 146,
    "y": 306,
    "timeMs": 49880,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 148,
    "type": "circle",
    "x": 139,
    "y": 182,
    "timeMs": 50170,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 149,
    "type": "circle",
    "x": 256,
    "y": 216,
    "timeMs": 50440,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 150,
    "type": "circle",
    "x": 163,
    "y": 316,
    "timeMs": 50860,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 151,
    "type": "circle",
    "x": 236,
    "y": 234,
    "timeMs": 51150,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 152,
    "type": "circle",
    "x": 356,
    "y": 255,
    "timeMs": 51420,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 153,
    "type": "circle",
    "x": 293,
    "y": 363,
    "timeMs": 51720,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 154,
    "type": "circle",
    "x": 207,
    "y": 261,
    "timeMs": 52110,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 155,
    "type": "circle",
    "x": 327,
    "y": 226,
    "timeMs": 52410,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 156,
    "type": "circle",
    "x": 320,
    "y": 363,
    "timeMs": 52840,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 157,
    "type": "circle",
    "x": 220,
    "y": 292,
    "timeMs": 53110,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 158,
    "type": "circle",
    "x": 537,
    "y": 352,
    "timeMs": 53410,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 159,
    "type": "circle",
    "x": 556,
    "y": 460,
    "timeMs": 53950,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 160,
    "type": "circle",
    "x": 667,
    "y": 460,
    "timeMs": 54340,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 161,
    "type": "circle",
    "x": 660,
    "y": 460,
    "timeMs": 54630,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 162,
    "type": "circle",
    "x": 660,
    "y": 460,
    "timeMs": 54880,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 163,
    "type": "circle",
    "x": 660,
    "y": 360,
    "timeMs": 55310,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 164,
    "type": "circle",
    "x": 660,
    "y": 307,
    "timeMs": 55620,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 165,
    "type": "circle",
    "x": 658,
    "y": 260,
    "timeMs": 55870,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 166,
    "type": "circle",
    "x": 674,
    "y": 383,
    "timeMs": 56160,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 167,
    "type": "circle",
    "x": 544,
    "y": 347,
    "timeMs": 56560,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 168,
    "type": "circle",
    "x": 617,
    "y": 245,
    "timeMs": 56860,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 169,
    "type": "circle",
    "x": 660,
    "y": 364,
    "timeMs": 57290,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 170,
    "type": "circle",
    "x": 578,
    "y": 268,
    "timeMs": 57600,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 171,
    "type": "circle",
    "x": 660,
    "y": 240,
    "timeMs": 57840,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 172,
    "type": "circle",
    "x": 560,
    "y": 140,
    "timeMs": 58100,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 173,
    "type": "circle",
    "x": 436,
    "y": 156,
    "timeMs": 58400,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 174,
    "type": "circle",
    "x": 490,
    "y": 140,
    "timeMs": 58790,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 175,
    "type": "circle",
    "x": 365,
    "y": 137,
    "timeMs": 59090,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 176,
    "type": "circle",
    "x": 417,
    "y": 140,
    "timeMs": 59340,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 177,
    "type": "circle",
    "x": 281,
    "y": 142,
    "timeMs": 59760,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 178,
    "type": "slider",
    "x": 281,
    "y": 142,
    "timeMs": 60060,
    "durationMs": 480,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 281,
        "y": 142
      },
      {
        "x": 218,
        "y": 178
      },
      {
        "x": 150,
        "y": 127
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
    "id": 179,
    "type": "circle",
    "x": 430,
    "y": 140,
    "timeMs": 60640,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 180,
    "type": "circle",
    "x": 307,
    "y": 185,
    "timeMs": 61000,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 181,
    "type": "slider",
    "x": 307,
    "y": 185,
    "timeMs": 61310,
    "durationMs": 330,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 307,
        "y": 185
      },
      {
        "x": 258,
        "y": 178
      },
      {
        "x": 218,
        "y": 204
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
    "id": 182,
    "type": "circle",
    "x": 273,
    "y": 140,
    "timeMs": 61740,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 183,
    "type": "circle",
    "x": 153,
    "y": 141,
    "timeMs": 61990,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 184,
    "type": "slider",
    "x": 153,
    "y": 141,
    "timeMs": 62280,
    "durationMs": 470,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 153,
        "y": 141
      },
      {
        "x": 216,
        "y": 110
      },
      {
        "x": 282,
        "y": 130
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
    "id": 185,
    "type": "circle",
    "x": 183,
    "y": 246,
    "timeMs": 62850,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 186,
    "type": "circle",
    "x": 183,
    "y": 210,
    "timeMs": 63220,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 187,
    "type": "slider",
    "x": 183,
    "y": 210,
    "timeMs": 63540,
    "durationMs": 320,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 183,
        "y": 210
      },
      {
        "x": 184,
        "y": 161
      },
      {
        "x": 145,
        "y": 129
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
    "id": 188,
    "type": "circle",
    "x": 274,
    "y": 176,
    "timeMs": 63960,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 189,
    "type": "circle",
    "x": 197,
    "y": 270,
    "timeMs": 64220,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 190,
    "type": "circle",
    "x": 149,
    "y": 158,
    "timeMs": 64490,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 191,
    "type": "circle",
    "x": 271,
    "y": 150,
    "timeMs": 64760,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 192,
    "type": "circle",
    "x": 213,
    "y": 262,
    "timeMs": 65070,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 193,
    "type": "circle",
    "x": 288,
    "y": 315,
    "timeMs": 65440,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 194,
    "type": "circle",
    "x": 405,
    "y": 271,
    "timeMs": 65740,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 195,
    "type": "circle",
    "x": 398,
    "y": 391,
    "timeMs": 65990,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 196,
    "type": "slider",
    "x": 398,
    "y": 391,
    "timeMs": 66240,
    "durationMs": 380,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 398,
        "y": 391
      },
      {
        "x": 368,
        "y": 342
      },
      {
        "x": 395,
        "y": 287
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 197,
    "type": "circle",
    "x": 504,
    "y": 379,
    "timeMs": 66720,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 198,
    "type": "circle",
    "x": 388,
    "y": 412,
    "timeMs": 66980,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 199,
    "type": "circle",
    "x": 395,
    "y": 286,
    "timeMs": 67290,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 200,
    "type": "circle",
    "x": 649,
    "y": 401,
    "timeMs": 67530,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 201,
    "type": "circle",
    "x": 546,
    "y": 470,
    "timeMs": 67820,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 202,
    "type": "circle",
    "x": 536,
    "y": 338,
    "timeMs": 68200,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 203,
    "type": "circle",
    "x": 646,
    "y": 383,
    "timeMs": 68440,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 204,
    "type": "circle",
    "x": 552,
    "y": 460,
    "timeMs": 68930,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 205,
    "type": "circle",
    "x": 665,
    "y": 419,
    "timeMs": 69180,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 206,
    "type": "circle",
    "x": 660,
    "y": 460,
    "timeMs": 69500,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 207,
    "type": "circle",
    "x": 624,
    "y": 290,
    "timeMs": 69740,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 208,
    "type": "slider",
    "x": 624,
    "y": 290,
    "timeMs": 70030,
    "durationMs": 460,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 624,
        "y": 290
      },
      {
        "x": 589,
        "y": 350
      },
      {
        "x": 516,
        "y": 371
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
    "id": 209,
    "type": "circle",
    "x": 577,
    "y": 233,
    "timeMs": 70590,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 210,
    "type": "circle",
    "x": 664,
    "y": 316,
    "timeMs": 70840,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 211,
    "type": "circle",
    "x": 541,
    "y": 344,
    "timeMs": 71150,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 212,
    "type": "circle",
    "x": 556,
    "y": 211,
    "timeMs": 71540,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 213,
    "type": "circle",
    "x": 665,
    "y": 267,
    "timeMs": 71810,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 214,
    "type": "circle",
    "x": 245,
    "y": 261,
    "timeMs": 72070,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 215,
    "type": "circle",
    "x": 230,
    "y": 142,
    "timeMs": 72320,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 216,
    "type": "circle",
    "x": 373,
    "y": 175,
    "timeMs": 72840,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 217,
    "type": "slider",
    "x": 373,
    "y": 175,
    "timeMs": 73370,
    "durationMs": 490,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 373,
        "y": 175
      },
      {
        "x": 428,
        "y": 224
      },
      {
        "x": 506,
        "y": 199
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
    "id": 218,
    "type": "circle",
    "x": 379,
    "y": 287,
    "timeMs": 73960,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 219,
    "type": "circle",
    "x": 381,
    "y": 157,
    "timeMs": 74310,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 220,
    "type": "slider",
    "x": 381,
    "y": 157,
    "timeMs": 74620,
    "durationMs": 330,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 381,
        "y": 157
      },
      {
        "x": 405,
        "y": 201
      },
      {
        "x": 388,
        "y": 248
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 221,
    "type": "circle",
    "x": 155,
    "y": 187,
    "timeMs": 75050,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 222,
    "type": "circle",
    "x": 279,
    "y": 178,
    "timeMs": 75350,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 223,
    "type": "circle",
    "x": 248,
    "y": 292,
    "timeMs": 75590,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 224,
    "type": "circle",
    "x": 164,
    "y": 206,
    "timeMs": 75840,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 225,
    "type": "circle",
    "x": 279,
    "y": 153,
    "timeMs": 76150,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 226,
    "type": "circle",
    "x": 255,
    "y": 285,
    "timeMs": 76540,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 227,
    "type": "circle",
    "x": 158,
    "y": 208,
    "timeMs": 76830,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 228,
    "type": "circle",
    "x": 468,
    "y": 353,
    "timeMs": 77280,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 229,
    "type": "slider",
    "x": 468,
    "y": 353,
    "timeMs": 77650,
    "durationMs": 480,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 468,
        "y": 353
      },
      {
        "x": 540,
        "y": 364
      },
      {
        "x": 590,
        "y": 302
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 230,
    "type": "circle",
    "x": 516,
    "y": 436,
    "timeMs": 78230,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 231,
    "type": "circle",
    "x": 449,
    "y": 334,
    "timeMs": 78500,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 232,
    "type": "circle",
    "x": 572,
    "y": 338,
    "timeMs": 78780,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 233,
    "type": "circle",
    "x": 522,
    "y": 451,
    "timeMs": 79060,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 234,
    "type": "circle",
    "x": 447,
    "y": 337,
    "timeMs": 79470,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 235,
    "type": "circle",
    "x": 633,
    "y": 364,
    "timeMs": 79720,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 236,
    "type": "circle",
    "x": 589,
    "y": 460,
    "timeMs": 80030,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 237,
    "type": "circle",
    "x": 660,
    "y": 474,
    "timeMs": 80270,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 238,
    "type": "circle",
    "x": 660,
    "y": 353,
    "timeMs": 80580,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 239,
    "type": "circle",
    "x": 660,
    "y": 393,
    "timeMs": 80970,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 240,
    "type": "circle",
    "x": 660,
    "y": 271,
    "timeMs": 81260,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 241,
    "type": "circle",
    "x": 660,
    "y": 323,
    "timeMs": 81690,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 242,
    "type": "circle",
    "x": 541,
    "y": 133,
    "timeMs": 81960,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 243,
    "type": "slider",
    "x": 541,
    "y": 133,
    "timeMs": 82250,
    "durationMs": 470,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 541,
        "y": 133
      },
      {
        "x": 504,
        "y": 194
      },
      {
        "x": 544,
        "y": 262
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
    "id": 244,
    "type": "circle",
    "x": 433,
    "y": 158,
    "timeMs": 82820,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 245,
    "type": "circle",
    "x": 558,
    "y": 140,
    "timeMs": 83220,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 246,
    "type": "circle",
    "x": 473,
    "y": 225,
    "timeMs": 83470,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 247,
    "type": "slider",
    "x": 473,
    "y": 225,
    "timeMs": 83910,
    "durationMs": 580,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 473,
        "y": 225
      },
      {
        "x": 389,
        "y": 250
      },
      {
        "x": 344,
        "y": 318
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
    "id": 248,
    "type": "circle",
    "x": 418,
    "y": 140,
    "timeMs": 84620,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 249,
    "type": "circle",
    "x": 286,
    "y": 140,
    "timeMs": 85010,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 250,
    "type": "circle",
    "x": 318,
    "y": 140,
    "timeMs": 85280,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 251,
    "type": "slider",
    "x": 318,
    "y": 140,
    "timeMs": 85580,
    "durationMs": 450,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 318,
        "y": 140
      },
      {
        "x": 302,
        "y": 206
      },
      {
        "x": 333,
        "y": 263
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 252,
    "type": "circle",
    "x": 207,
    "y": 182,
    "timeMs": 86130,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 253,
    "type": "circle",
    "x": 314,
    "y": 126,
    "timeMs": 86380,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 254,
    "type": "circle",
    "x": 314,
    "y": 252,
    "timeMs": 86690,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 255,
    "type": "circle",
    "x": 138,
    "y": 219,
    "timeMs": 86940,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 256,
    "type": "circle",
    "x": 232,
    "y": 136,
    "timeMs": 87240,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 257,
    "type": "circle",
    "x": 275,
    "y": 264,
    "timeMs": 87640,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 258,
    "type": "circle",
    "x": 154,
    "y": 241,
    "timeMs": 87920,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 259,
    "type": "circle",
    "x": 246,
    "y": 137,
    "timeMs": 88360,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 260,
    "type": "circle",
    "x": 294,
    "y": 245,
    "timeMs": 88600,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 261,
    "type": "circle",
    "x": 168,
    "y": 247,
    "timeMs": 88910,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 262,
    "type": "circle",
    "x": 372,
    "y": 273,
    "timeMs": 89300,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 263,
    "type": "circle",
    "x": 444,
    "y": 368,
    "timeMs": 89540,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 264,
    "type": "circle",
    "x": 322,
    "y": 400,
    "timeMs": 89860,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 265,
    "type": "circle",
    "x": 357,
    "y": 281,
    "timeMs": 90150,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 266,
    "type": "circle",
    "x": 440,
    "y": 368,
    "timeMs": 90400,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 267,
    "type": "circle",
    "x": 318,
    "y": 387,
    "timeMs": 90680,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 268,
    "type": "circle",
    "x": 348,
    "y": 250,
    "timeMs": 91130,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 269,
    "type": "circle",
    "x": 580,
    "y": 460,
    "timeMs": 91520,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 270,
    "type": "circle",
    "x": 610,
    "y": 460,
    "timeMs": 91770,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 271,
    "type": "circle",
    "x": 660,
    "y": 460,
    "timeMs": 92080,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 272,
    "type": "circle",
    "x": 660,
    "y": 404,
    "timeMs": 92360,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 273,
    "type": "circle",
    "x": 660,
    "y": 321,
    "timeMs": 92620,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 274,
    "type": "circle",
    "x": 660,
    "y": 293,
    "timeMs": 93040,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 275,
    "type": "circle",
    "x": 660,
    "y": 194,
    "timeMs": 93350,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 276,
    "type": "circle",
    "x": 677,
    "y": 256,
    "timeMs": 93620,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 277,
    "type": "circle",
    "x": 631,
    "y": 372,
    "timeMs": 93910,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 278,
    "type": "circle",
    "x": 542,
    "y": 271,
    "timeMs": 94300,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 279,
    "type": "circle",
    "x": 662,
    "y": 246,
    "timeMs": 94580,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 280,
    "type": "slider",
    "x": 662,
    "y": 246,
    "timeMs": 95040,
    "durationMs": 420,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 662,
        "y": 246
      },
      {
        "x": 601,
        "y": 264
      },
      {
        "x": 549,
        "y": 204
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 281,
    "type": "circle",
    "x": 672,
    "y": 123,
    "timeMs": 95560,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 282,
    "type": "circle",
    "x": 669,
    "y": 260,
    "timeMs": 95980,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 283,
    "type": "circle",
    "x": 332,
    "y": 138,
    "timeMs": 96220,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 284,
    "type": "circle",
    "x": 423,
    "y": 140,
    "timeMs": 96520,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 285,
    "type": "circle",
    "x": 302,
    "y": 170,
    "timeMs": 96810,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 286,
    "type": "circle",
    "x": 317,
    "y": 140,
    "timeMs": 97070,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 287,
    "type": "circle",
    "x": 184,
    "y": 140,
    "timeMs": 97480,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 288,
    "type": "circle",
    "x": 233,
    "y": 140,
    "timeMs": 97790,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 289,
    "type": "circle",
    "x": 140,
    "y": 132,
    "timeMs": 98170,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 290,
    "type": "circle",
    "x": 219,
    "y": 348,
    "timeMs": 98430,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 291,
    "type": "circle",
    "x": 151,
    "y": 243,
    "timeMs": 98730,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 292,
    "type": "circle",
    "x": 271,
    "y": 219,
    "timeMs": 99010,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 293,
    "type": "circle",
    "x": 244,
    "y": 338,
    "timeMs": 99280,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 294,
    "type": "circle",
    "x": 144,
    "y": 265,
    "timeMs": 99560,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 295,
    "type": "circle",
    "x": 271,
    "y": 208,
    "timeMs": 100000,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 296,
    "type": "circle",
    "x": 280,
    "y": 329,
    "timeMs": 100260,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 297,
    "type": "circle",
    "x": 158,
    "y": 300,
    "timeMs": 100570,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 298,
    "type": "circle",
    "x": 268,
    "y": 224,
    "timeMs": 100950,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 299,
    "type": "circle",
    "x": 279,
    "y": 347,
    "timeMs": 101230,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 300,
    "type": "circle",
    "x": 162,
    "y": 318,
    "timeMs": 101490,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 301,
    "type": "slider",
    "x": 162,
    "y": 318,
    "timeMs": 101730,
    "durationMs": 370,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 162,
        "y": 318
      },
      {
        "x": 216,
        "y": 332
      },
      {
        "x": 261,
        "y": 275
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
    "id": 302,
    "type": "slider",
    "x": 261,
    "y": 275,
    "timeMs": 102200,
    "durationMs": 490,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 261,
        "y": 275
      },
      {
        "x": 330,
        "y": 247
      },
      {
        "x": 395,
        "y": 265
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
    "id": 303,
    "type": "circle",
    "x": 285,
    "y": 373,
    "timeMs": 102790,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 304,
    "type": "circle",
    "x": 396,
    "y": 295,
    "timeMs": 103030,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 305,
    "type": "circle",
    "x": 522,
    "y": 300,
    "timeMs": 103340,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 306,
    "type": "circle",
    "x": 450,
    "y": 410,
    "timeMs": 103710,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 307,
    "type": "slider",
    "x": 450,
    "y": 410,
    "timeMs": 104000,
    "durationMs": 330,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 450,
        "y": 410
      },
      {
        "x": 446,
        "y": 360
      },
      {
        "x": 410,
        "y": 334
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 308,
    "type": "circle",
    "x": 547,
    "y": 350,
    "timeMs": 104430,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 309,
    "type": "circle",
    "x": 487,
    "y": 455,
    "timeMs": 104690,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 310,
    "type": "circle",
    "x": 419,
    "y": 350,
    "timeMs": 104990,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 311,
    "type": "circle",
    "x": 660,
    "y": 286,
    "timeMs": 105390,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 312,
    "type": "circle",
    "x": 660,
    "y": 182,
    "timeMs": 105670,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 313,
    "type": "circle",
    "x": 660,
    "y": 183,
    "timeMs": 105930,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 314,
    "type": "circle",
    "x": 660,
    "y": 140,
    "timeMs": 106180,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 315,
    "type": "circle",
    "x": 586,
    "y": 140,
    "timeMs": 106650,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 316,
    "type": "circle",
    "x": 521,
    "y": 140,
    "timeMs": 106910,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 317,
    "type": "circle",
    "x": 452,
    "y": 140,
    "timeMs": 107220,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 318,
    "type": "circle",
    "x": 430,
    "y": 140,
    "timeMs": 107610,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 319,
    "type": "circle",
    "x": 347,
    "y": 140,
    "timeMs": 107890,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 320,
    "type": "circle",
    "x": 319,
    "y": 140,
    "timeMs": 108150,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 321,
    "type": "circle",
    "x": 224,
    "y": 140,
    "timeMs": 108390,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 322,
    "type": "circle",
    "x": 180,
    "y": 140,
    "timeMs": 108880,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 323,
    "type": "circle",
    "x": 140,
    "y": 140,
    "timeMs": 109120,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 324,
    "type": "circle",
    "x": 140,
    "y": 183,
    "timeMs": 109420,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 325,
    "type": "circle",
    "x": 212,
    "y": 320,
    "timeMs": 109830,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 326,
    "type": "circle",
    "x": 179,
    "y": 200,
    "timeMs": 110120,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 327,
    "type": "circle",
    "x": 293,
    "y": 239,
    "timeMs": 110370,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 328,
    "type": "circle",
    "x": 213,
    "y": 332,
    "timeMs": 110650,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 329,
    "type": "circle",
    "x": 160,
    "y": 219,
    "timeMs": 110950,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 330,
    "type": "circle",
    "x": 281,
    "y": 216,
    "timeMs": 111210,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 331,
    "type": "circle",
    "x": 220,
    "y": 323,
    "timeMs": 111490,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 332,
    "type": "circle",
    "x": 168,
    "y": 239,
    "timeMs": 111780,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 333,
    "type": "circle",
    "x": 300,
    "y": 202,
    "timeMs": 112210,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 334,
    "type": "slider",
    "x": 300,
    "y": 202,
    "timeMs": 112590,
    "durationMs": 320,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 300,
        "y": 202
      },
      {
        "x": 335,
        "y": 167
      },
      {
        "x": 387,
        "y": 180
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
    "id": 335,
    "type": "circle",
    "x": 302,
    "y": 287,
    "timeMs": 113010,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 336,
    "type": "circle",
    "x": 236,
    "y": 181,
    "timeMs": 113310,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 337,
    "type": "circle",
    "x": 370,
    "y": 180,
    "timeMs": 113700,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 338,
    "type": "circle",
    "x": 322,
    "y": 296,
    "timeMs": 114000,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 339,
    "type": "circle",
    "x": 299,
    "y": 331,
    "timeMs": 114260,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 340,
    "type": "circle",
    "x": 407,
    "y": 271,
    "timeMs": 114550,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 341,
    "type": "circle",
    "x": 408,
    "y": 392,
    "timeMs": 114810,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 342,
    "type": "circle",
    "x": 279,
    "y": 343,
    "timeMs": 115240,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 343,
    "type": "circle",
    "x": 374,
    "y": 264,
    "timeMs": 115530,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 344,
    "type": "circle",
    "x": 405,
    "y": 395,
    "timeMs": 115930,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 345,
    "type": "circle",
    "x": 289,
    "y": 349,
    "timeMs": 116220,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 346,
    "type": "circle",
    "x": 638,
    "y": 267,
    "timeMs": 116480,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 347,
    "type": "circle",
    "x": 671,
    "y": 387,
    "timeMs": 116770,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 348,
    "type": "circle",
    "x": 556,
    "y": 347,
    "timeMs": 117030,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 349,
    "type": "slider",
    "x": 556,
    "y": 347,
    "timeMs": 117270,
    "durationMs": 380,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 556,
        "y": 347
      },
      {
        "x": 517,
        "y": 305
      },
      {
        "x": 466,
        "y": 294
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
    "id": 350,
    "type": "circle",
    "x": 599,
    "y": 243,
    "timeMs": 117750,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 351,
    "type": "circle",
    "x": 586,
    "y": 362,
    "timeMs": 118000,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 352,
    "type": "circle",
    "x": 476,
    "y": 298,
    "timeMs": 118320,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 353,
    "type": "circle",
    "x": 631,
    "y": 158,
    "timeMs": 118700,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 354,
    "type": "circle",
    "x": 635,
    "y": 282,
    "timeMs": 118990,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 355,
    "type": "slider",
    "x": 635,
    "y": 282,
    "timeMs": 119250,
    "durationMs": 320,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 635,
        "y": 282
      },
      {
        "x": 613,
        "y": 326
      },
      {
        "x": 655,
        "y": 370
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
    "x": 562,
    "y": 270,
    "timeMs": 119670,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 357,
    "type": "circle",
    "x": 678,
    "y": 222,
    "timeMs": 119980,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 358,
    "type": "circle",
    "x": 673,
    "y": 340,
    "timeMs": 120220,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 359,
    "type": "circle",
    "x": 566,
    "y": 274,
    "timeMs": 120540,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 360,
    "type": "circle",
    "x": 455,
    "y": 139,
    "timeMs": 120910,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 361,
    "type": "circle",
    "x": 464,
    "y": 264,
    "timeMs": 121210,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 362,
    "type": "circle",
    "x": 349,
    "y": 230,
    "timeMs": 121460,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 363,
    "type": "circle",
    "x": 425,
    "y": 136,
    "timeMs": 121720,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 364,
    "type": "circle",
    "x": 469,
    "y": 272,
    "timeMs": 122200,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 365,
    "type": "circle",
    "x": 350,
    "y": 266,
    "timeMs": 122440,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 366,
    "type": "circle",
    "x": 427,
    "y": 165,
    "timeMs": 122760,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 367,
    "type": "circle",
    "x": 296,
    "y": 424,
    "timeMs": 123140,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 368,
    "type": "circle",
    "x": 174,
    "y": 413,
    "timeMs": 123420,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 369,
    "type": "circle",
    "x": 236,
    "y": 309,
    "timeMs": 123680,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 370,
    "type": "circle",
    "x": 311,
    "y": 424,
    "timeMs": 124100,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 371,
    "type": "circle",
    "x": 186,
    "y": 421,
    "timeMs": 124400,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 372,
    "type": "slider",
    "x": 186,
    "y": 421,
    "timeMs": 124800,
    "durationMs": 460,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 186,
        "y": 421
      },
      {
        "x": 246,
        "y": 386
      },
      {
        "x": 312,
        "y": 425
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
    "id": 373,
    "type": "circle",
    "x": 212,
    "y": 460,
    "timeMs": 125360,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 374,
    "type": "circle",
    "x": 465,
    "y": 366,
    "timeMs": 125650,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 375,
    "type": "circle",
    "x": 430,
    "y": 460,
    "timeMs": 125900,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 376,
    "type": "slider",
    "x": 430,
    "y": 460,
    "timeMs": 126150,
    "durationMs": 370,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 430,
        "y": 460
      },
      {
        "x": 390,
        "y": 421
      },
      {
        "x": 386,
        "y": 368
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
    "id": 377,
    "type": "circle",
    "x": 501,
    "y": 451,
    "timeMs": 126620,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 378,
    "type": "circle",
    "x": 383,
    "y": 460,
    "timeMs": 127020,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 379,
    "type": "circle",
    "x": 495,
    "y": 406,
    "timeMs": 127310,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 380,
    "type": "circle",
    "x": 483,
    "y": 460,
    "timeMs": 127570,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 381,
    "type": "circle",
    "x": 642,
    "y": 404,
    "timeMs": 127870,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 382,
    "type": "slider",
    "x": 642,
    "y": 404,
    "timeMs": 128120,
    "durationMs": 450,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 642,
        "y": 404
      },
      {
        "x": 593,
        "y": 451
      },
      {
        "x": 522,
        "y": 432
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
    "id": 383,
    "type": "circle",
    "x": 614,
    "y": 313,
    "timeMs": 128670,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 384,
    "type": "circle",
    "x": 665,
    "y": 442,
    "timeMs": 129100,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 385,
    "type": "circle",
    "x": 545,
    "y": 426,
    "timeMs": 129360,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 386,
    "type": "circle",
    "x": 611,
    "y": 319,
    "timeMs": 129660,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 387,
    "type": "circle",
    "x": 672,
    "y": 427,
    "timeMs": 129950,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 388,
    "type": "slider",
    "x": 541,
    "y": 248,
    "timeMs": 130330,
    "durationMs": 320,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 541,
        "y": 248
      },
      {
        "x": 583,
        "y": 274
      },
      {
        "x": 574,
        "y": 332
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
    "id": 389,
    "type": "circle",
    "x": 445,
    "y": 285,
    "timeMs": 130750,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 390,
    "type": "circle",
    "x": 531,
    "y": 194,
    "timeMs": 131050,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 391,
    "type": "circle",
    "x": 581,
    "y": 319,
    "timeMs": 131450,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 392,
    "type": "circle",
    "x": 455,
    "y": 308,
    "timeMs": 131760,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 393,
    "type": "circle",
    "x": 527,
    "y": 213,
    "timeMs": 132000,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 394,
    "type": "circle",
    "x": 580,
    "y": 325,
    "timeMs": 132290,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 395,
    "type": "circle",
    "x": 260,
    "y": 192,
    "timeMs": 132550,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 396,
    "type": "circle",
    "x": 303,
    "y": 140,
    "timeMs": 132970,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 397,
    "type": "circle",
    "x": 183,
    "y": 140,
    "timeMs": 133270,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 398,
    "type": "circle",
    "x": 203,
    "y": 140,
    "timeMs": 133520,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 399,
    "type": "circle",
    "x": 140,
    "y": 140,
    "timeMs": 133830,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 400,
    "type": "circle",
    "x": 140,
    "y": 229,
    "timeMs": 134220,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 401,
    "type": "circle",
    "x": 140,
    "y": 287,
    "timeMs": 134510,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 402,
    "type": "slider",
    "x": 245,
    "y": 273,
    "timeMs": 134760,
    "durationMs": 470,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 245,
        "y": 273
      },
      {
        "x": 316,
        "y": 272
      },
      {
        "x": 360,
        "y": 331
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
    "id": 403,
    "type": "circle",
    "x": 220,
    "y": 391,
    "timeMs": 135330,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 404,
    "type": "circle",
    "x": 222,
    "y": 255,
    "timeMs": 135740,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 405,
    "type": "circle",
    "x": 333,
    "y": 314,
    "timeMs": 136050,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 406,
    "type": "circle",
    "x": 214,
    "y": 376,
    "timeMs": 136440,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 407,
    "type": "circle",
    "x": 195,
    "y": 253,
    "timeMs": 136730,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 408,
    "type": "circle",
    "x": 311,
    "y": 289,
    "timeMs": 136990,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 409,
    "type": "circle",
    "x": 211,
    "y": 460,
    "timeMs": 137400,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 410,
    "type": "circle",
    "x": 329,
    "y": 416,
    "timeMs": 137710,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 411,
    "type": "circle",
    "x": 317,
    "y": 460,
    "timeMs": 137950,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 412,
    "type": "circle",
    "x": 440,
    "y": 460,
    "timeMs": 138270,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 413,
    "type": "circle",
    "x": 423,
    "y": 460,
    "timeMs": 138650,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 414,
    "type": "circle",
    "x": 541,
    "y": 460,
    "timeMs": 138950,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 415,
    "type": "slider",
    "x": 541,
    "y": 460,
    "timeMs": 139210,
    "durationMs": 580,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 541,
        "y": 460
      },
      {
        "x": 483,
        "y": 395
      },
      {
        "x": 391,
        "y": 419
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 416,
    "type": "circle",
    "x": 635,
    "y": 346,
    "timeMs": 139930,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 417,
    "type": "circle",
    "x": 617,
    "y": 463,
    "timeMs": 140170,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 418,
    "type": "circle",
    "x": 509,
    "y": 394,
    "timeMs": 140500,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 419,
    "type": "circle",
    "x": 627,
    "y": 334,
    "timeMs": 140870,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 420,
    "type": "circle",
    "x": 614,
    "y": 458,
    "timeMs": 141160,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 421,
    "type": "circle",
    "x": 507,
    "y": 404,
    "timeMs": 141410,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 422,
    "type": "circle",
    "x": 602,
    "y": 326,
    "timeMs": 141690,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 423,
    "type": "circle",
    "x": 573,
    "y": 416,
    "timeMs": 142140,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 424,
    "type": "circle",
    "x": 464,
    "y": 367,
    "timeMs": 142390,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 425,
    "type": "circle",
    "x": 572,
    "y": 302,
    "timeMs": 142700,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 426,
    "type": "circle",
    "x": 581,
    "y": 436,
    "timeMs": 143090,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 427,
    "type": "circle",
    "x": 463,
    "y": 403,
    "timeMs": 143370,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 428,
    "type": "circle",
    "x": 551,
    "y": 319,
    "timeMs": 143640,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 429,
    "type": "circle",
    "x": 597,
    "y": 431,
    "timeMs": 143900,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 430,
    "type": "circle",
    "x": 284,
    "y": 200,
    "timeMs": 144370,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 431,
    "type": "circle",
    "x": 338,
    "y": 140,
    "timeMs": 144750,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 432,
    "type": "circle",
    "x": 215,
    "y": 140,
    "timeMs": 145050,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 433,
    "type": "circle",
    "x": 249,
    "y": 140,
    "timeMs": 145300,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 434,
    "type": "circle",
    "x": 126,
    "y": 140,
    "timeMs": 145600,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 435,
    "type": "circle",
    "x": 153,
    "y": 140,
    "timeMs": 145850,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 436,
    "type": "circle",
    "x": 140,
    "y": 140,
    "timeMs": 146270,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 437,
    "type": "circle",
    "x": 192,
    "y": 347,
    "timeMs": 146570,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 438,
    "type": "circle",
    "x": 121,
    "y": 247,
    "timeMs": 146850,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 439,
    "type": "circle",
    "x": 245,
    "y": 232,
    "timeMs": 147150,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 440,
    "type": "circle",
    "x": 201,
    "y": 344,
    "timeMs": 147400,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 441,
    "type": "slider",
    "x": 201,
    "y": 344,
    "timeMs": 147670,
    "durationMs": 470,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 201,
        "y": 344
      },
      {
        "x": 147,
        "y": 390
      },
      {
        "x": 165,
        "y": 468
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
    "id": 442,
    "type": "circle",
    "x": 140,
    "y": 327,
    "timeMs": 148240,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 443,
    "type": "circle",
    "x": 230,
    "y": 405,
    "timeMs": 148480,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 444,
    "type": "slider",
    "x": 274,
    "y": 368,
    "timeMs": 148780,
    "durationMs": 470,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 274,
        "y": 368
      },
      {
        "x": 343,
        "y": 383
      },
      {
        "x": 370,
        "y": 455
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
    "id": 445,
    "type": "circle",
    "x": 218,
    "y": 451,
    "timeMs": 149350,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 446,
    "type": "circle",
    "x": 270,
    "y": 329,
    "timeMs": 149720,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 447,
    "type": "circle",
    "x": 349,
    "y": 425,
    "timeMs": 150010,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 448,
    "type": "circle",
    "x": 235,
    "y": 466,
    "timeMs": 150270,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 449,
    "type": "circle",
    "x": 246,
    "y": 344,
    "timeMs": 150540,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 450,
    "type": "circle",
    "x": 356,
    "y": 400,
    "timeMs": 150830,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 451,
    "type": "circle",
    "x": 337,
    "y": 460,
    "timeMs": 151250,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 452,
    "type": "circle",
    "x": 454,
    "y": 414,
    "timeMs": 151560,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 453,
    "type": "circle",
    "x": 460,
    "y": 460,
    "timeMs": 151970,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 454,
    "type": "circle",
    "x": 591,
    "y": 460,
    "timeMs": 152500,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 455,
    "type": "circle",
    "x": 608,
    "y": 460,
    "timeMs": 152750,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 456,
    "type": "slider",
    "x": 608,
    "y": 460,
    "timeMs": 153220,
    "durationMs": 450,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 608,
        "y": 460
      },
      {
        "x": 584,
        "y": 396
      },
      {
        "x": 615,
        "y": 336
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
    "id": 457,
    "type": "circle",
    "x": 660,
    "y": 452,
    "timeMs": 153770,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 458,
    "type": "circle",
    "x": 505,
    "y": 200,
    "timeMs": 154030,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 459,
    "type": "circle",
    "x": 626,
    "y": 187,
    "timeMs": 154300,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 460,
    "type": "slider",
    "x": 626,
    "y": 187,
    "timeMs": 154700,
    "durationMs": 340,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 626,
        "y": 187
      },
      {
        "x": 578,
        "y": 206
      },
      {
        "x": 533,
        "y": 173
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
    "id": 461,
    "type": "circle",
    "x": 653,
    "y": 140,
    "timeMs": 155140,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 462,
    "type": "slider",
    "x": 653,
    "y": 140,
    "timeMs": 155440,
    "durationMs": 450,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 653,
        "y": 140
      },
      {
        "x": 618,
        "y": 198
      },
      {
        "x": 546,
        "y": 198
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
    "id": 463,
    "type": "circle",
    "x": 603,
    "y": 140,
    "timeMs": 155990,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 464,
    "type": "circle",
    "x": 481,
    "y": 129,
    "timeMs": 156260,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 465,
    "type": "circle",
    "x": 547,
    "y": 140,
    "timeMs": 156530,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 466,
    "type": "circle",
    "x": 420,
    "y": 186,
    "timeMs": 156930,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 467,
    "type": "circle",
    "x": 418,
    "y": 140,
    "timeMs": 157170,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 468,
    "type": "circle",
    "x": 301,
    "y": 140,
    "timeMs": 157470,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 469,
    "type": "circle",
    "x": 323,
    "y": 140,
    "timeMs": 157900,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 470,
    "type": "circle",
    "x": 200,
    "y": 140,
    "timeMs": 158210,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 471,
    "type": "circle",
    "x": 227,
    "y": 140,
    "timeMs": 158600,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 472,
    "type": "circle",
    "x": 144,
    "y": 191,
    "timeMs": 159140,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 473,
    "type": "circle",
    "x": 227,
    "y": 140,
    "timeMs": 159380,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 474,
    "type": "circle",
    "x": 140,
    "y": 200,
    "timeMs": 159870,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 475,
    "type": "circle",
    "x": 140,
    "y": 282,
    "timeMs": 160250,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 476,
    "type": "circle",
    "x": 140,
    "y": 332,
    "timeMs": 160500,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 477,
    "type": "circle",
    "x": 140,
    "y": 413,
    "timeMs": 160820,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 478,
    "type": "circle",
    "x": 140,
    "y": 450,
    "timeMs": 161110,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 479,
    "type": "circle",
    "x": 163,
    "y": 422,
    "timeMs": 161360,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 480,
    "type": "circle",
    "x": 133,
    "y": 301,
    "timeMs": 161650,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 481,
    "type": "circle",
    "x": 267,
    "y": 329,
    "timeMs": 162070,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 482,
    "type": "circle",
    "x": 185,
    "y": 435,
    "timeMs": 162460,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 483,
    "type": "circle",
    "x": 138,
    "y": 324,
    "timeMs": 162710,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 484,
    "type": "slider",
    "x": 138,
    "y": 324,
    "timeMs": 163040,
    "durationMs": 430,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 138,
        "y": 324
      },
      {
        "x": 132,
        "y": 259
      },
      {
        "x": 185,
        "y": 209
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
    "id": 485,
    "type": "circle",
    "x": 255,
    "y": 339,
    "timeMs": 163570,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 486,
    "type": "circle",
    "x": 283,
    "y": 419,
    "timeMs": 163810,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 487,
    "type": "slider",
    "x": 283,
    "y": 419,
    "timeMs": 164150,
    "durationMs": 440,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 283,
        "y": 419
      },
      {
        "x": 222,
        "y": 391
      },
      {
        "x": 162,
        "y": 409
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
    "id": 488,
    "type": "circle",
    "x": 246,
    "y": 286,
    "timeMs": 164690,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 489,
    "type": "circle",
    "x": 296,
    "y": 398,
    "timeMs": 164970,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 490,
    "type": "circle",
    "x": 175,
    "y": 384,
    "timeMs": 165240,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 491,
    "type": "circle",
    "x": 250,
    "y": 285,
    "timeMs": 165530,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 492,
    "type": "circle",
    "x": 302,
    "y": 394,
    "timeMs": 165790,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 493,
    "type": "slider",
    "x": 550,
    "y": 339,
    "timeMs": 166060,
    "durationMs": 360,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 550,
        "y": 339
      },
      {
        "x": 547,
        "y": 393
      },
      {
        "x": 604,
        "y": 422
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
    "id": 494,
    "type": "circle",
    "x": 480,
    "y": 356,
    "timeMs": 166520,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 495,
    "type": "circle",
    "x": 569,
    "y": 277,
    "timeMs": 166760,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 496,
    "type": "circle",
    "x": 595,
    "y": 400,
    "timeMs": 167070,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 497,
    "type": "circle",
    "x": 467,
    "y": 364,
    "timeMs": 167450,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 498,
    "type": "circle",
    "x": 553,
    "y": 272,
    "timeMs": 167760,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 499,
    "type": "circle",
    "x": 591,
    "y": 386,
    "timeMs": 168010,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 500,
    "type": "circle",
    "x": 388,
    "y": 193,
    "timeMs": 168270,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 501,
    "type": "circle",
    "x": 491,
    "y": 140,
    "timeMs": 168720,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 502,
    "type": "circle",
    "x": 378,
    "y": 179,
    "timeMs": 168970,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 503,
    "type": "circle",
    "x": 407,
    "y": 140,
    "timeMs": 169310,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 504,
    "type": "circle",
    "x": 282,
    "y": 140,
    "timeMs": 169670,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 505,
    "type": "circle",
    "x": 284,
    "y": 140,
    "timeMs": 169950,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 506,
    "type": "circle",
    "x": 173,
    "y": 140,
    "timeMs": 170220,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 507,
    "type": "circle",
    "x": 350,
    "y": 140,
    "timeMs": 170520,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 508,
    "type": "circle",
    "x": 224,
    "y": 140,
    "timeMs": 170940,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 509,
    "type": "circle",
    "x": 241,
    "y": 140,
    "timeMs": 171190,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 510,
    "type": "circle",
    "x": 124,
    "y": 140,
    "timeMs": 171510,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 511,
    "type": "circle",
    "x": 128,
    "y": 140,
    "timeMs": 171770,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 512,
    "type": "circle",
    "x": 140,
    "y": 140,
    "timeMs": 172050,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 513,
    "type": "circle",
    "x": 140,
    "y": 214,
    "timeMs": 172430,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 514,
    "type": "slider",
    "x": 241,
    "y": 311,
    "timeMs": 172680,
    "durationMs": 370,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 241,
        "y": 311
      },
      {
        "x": 297,
        "y": 316
      },
      {
        "x": 330,
        "y": 360
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
    "id": 515,
    "type": "circle",
    "x": 189,
    "y": 374,
    "timeMs": 173150,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 516,
    "type": "circle",
    "x": 227,
    "y": 259,
    "timeMs": 173410,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 517,
    "type": "circle",
    "x": 324,
    "y": 342,
    "timeMs": 173730,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 518,
    "type": "circle",
    "x": 196,
    "y": 375,
    "timeMs": 174100,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 519,
    "type": "circle",
    "x": 212,
    "y": 251,
    "timeMs": 174400,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 520,
    "type": "circle",
    "x": 335,
    "y": 316,
    "timeMs": 174840,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 521,
    "type": "circle",
    "x": 257,
    "y": 475,
    "timeMs": 175110,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 522,
    "type": "circle",
    "x": 248,
    "y": 355,
    "timeMs": 175370,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 523,
    "type": "circle",
    "x": 353,
    "y": 411,
    "timeMs": 175610,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 524,
    "type": "circle",
    "x": 260,
    "y": 460,
    "timeMs": 175930,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 525,
    "type": "circle",
    "x": 382,
    "y": 408,
    "timeMs": 176310,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 526,
    "type": "circle",
    "x": 374,
    "y": 460,
    "timeMs": 176600,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 527,
    "type": "circle",
    "x": 486,
    "y": 460,
    "timeMs": 176860,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 528,
    "type": "circle",
    "x": 532,
    "y": 460,
    "timeMs": 177130,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 529,
    "type": "circle",
    "x": 659,
    "y": 460,
    "timeMs": 177590,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 530,
    "type": "circle",
    "x": 658,
    "y": 460,
    "timeMs": 177830,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 531,
    "type": "circle",
    "x": 660,
    "y": 460,
    "timeMs": 178140,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 532,
    "type": "circle",
    "x": 660,
    "y": 377,
    "timeMs": 178530,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 533,
    "type": "circle",
    "x": 660,
    "y": 342,
    "timeMs": 178810,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 534,
    "type": "circle",
    "x": 660,
    "y": 250,
    "timeMs": 179080,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 535,
    "type": "slider",
    "x": 536,
    "y": 242,
    "timeMs": 179320,
    "durationMs": 370,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 536,
        "y": 242
      },
      {
        "x": 524,
        "y": 187
      },
      {
        "x": 470,
        "y": 165
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 536,
    "type": "circle",
    "x": 607,
    "y": 201,
    "timeMs": 179790,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 537,
    "type": "circle",
    "x": 507,
    "y": 289,
    "timeMs": 180180,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 538,
    "type": "circle",
    "x": 480,
    "y": 173,
    "timeMs": 180430,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 539,
    "type": "circle",
    "x": 604,
    "y": 198,
    "timeMs": 180750,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 540,
    "type": "circle",
    "x": 519,
    "y": 287,
    "timeMs": 181030,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 541,
    "type": "circle",
    "x": 483,
    "y": 172,
    "timeMs": 181280,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 542,
    "type": "circle",
    "x": 486,
    "y": 221,
    "timeMs": 181530,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 543,
    "type": "circle",
    "x": 390,
    "y": 326,
    "timeMs": 182000,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 544,
    "type": "circle",
    "x": 326,
    "y": 209,
    "timeMs": 182390,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 545,
    "type": "circle",
    "x": 446,
    "y": 222,
    "timeMs": 182640,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 546,
    "type": "circle",
    "x": 364,
    "y": 318,
    "timeMs": 182950,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 547,
    "type": "circle",
    "x": 316,
    "y": 204,
    "timeMs": 183240,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 548,
    "type": "circle",
    "x": 436,
    "y": 198,
    "timeMs": 183490,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 549,
    "type": "circle",
    "x": 191,
    "y": 388,
    "timeMs": 183740,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 550,
    "type": "circle",
    "x": 140,
    "y": 268,
    "timeMs": 184220,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 551,
    "type": "circle",
    "x": 221,
    "y": 374,
    "timeMs": 184600,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 552,
    "type": "circle",
    "x": 140,
    "y": 382,
    "timeMs": 184840,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 553,
    "type": "circle",
    "x": 140,
    "y": 460,
    "timeMs": 185150,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 554,
    "type": "circle",
    "x": 195,
    "y": 460,
    "timeMs": 185450,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 555,
    "type": "circle",
    "x": 269,
    "y": 460,
    "timeMs": 185710,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 556,
    "type": "circle",
    "x": 356,
    "y": 460,
    "timeMs": 185970,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 557,
    "type": "circle",
    "x": 434,
    "y": 460,
    "timeMs": 186250,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 558,
    "type": "circle",
    "x": 497,
    "y": 460,
    "timeMs": 186670,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 559,
    "type": "circle",
    "x": 566,
    "y": 460,
    "timeMs": 186990,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 560,
    "type": "slider",
    "x": 566,
    "y": 460,
    "timeMs": 187360,
    "durationMs": 450,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 566,
        "y": 460
      },
      {
        "x": 571,
        "y": 392
      },
      {
        "x": 614,
        "y": 346
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 561,
    "type": "circle",
    "x": 659,
    "y": 460,
    "timeMs": 187910,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 562,
    "type": "circle",
    "x": 660,
    "y": 460,
    "timeMs": 188260,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 563,
    "type": "circle",
    "x": 626,
    "y": 364,
    "timeMs": 188630,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 564,
    "type": "slider",
    "x": 626,
    "y": 364,
    "timeMs": 189020,
    "durationMs": 450,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 626,
        "y": 364
      },
      {
        "x": 561,
        "y": 385
      },
      {
        "x": 504,
        "y": 327
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 565,
    "type": "circle",
    "x": 636,
    "y": 256,
    "timeMs": 189570,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 566,
    "type": "circle",
    "x": 643,
    "y": 380,
    "timeMs": 189860,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 567,
    "type": "circle",
    "x": 533,
    "y": 331,
    "timeMs": 190120,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 568,
    "type": "circle",
    "x": 642,
    "y": 249,
    "timeMs": 190540,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 569,
    "type": "circle",
    "x": 657,
    "y": 374,
    "timeMs": 190850,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 570,
    "type": "circle",
    "x": 436,
    "y": 207,
    "timeMs": 191240,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 571,
    "type": "circle",
    "x": 546,
    "y": 129,
    "timeMs": 191640,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 572,
    "type": "circle",
    "x": 571,
    "y": 252,
    "timeMs": 191950,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 573,
    "type": "circle",
    "x": 448,
    "y": 200,
    "timeMs": 192340,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 574,
    "type": "circle",
    "x": 541,
    "y": 140,
    "timeMs": 192770,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 575,
    "type": "circle",
    "x": 426,
    "y": 184,
    "timeMs": 193050,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 576,
    "type": "circle",
    "x": 429,
    "y": 140,
    "timeMs": 193290,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 577,
    "type": "circle",
    "x": 299,
    "y": 141,
    "timeMs": 193600,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 578,
    "type": "circle",
    "x": 406,
    "y": 140,
    "timeMs": 193990,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 579,
    "type": "circle",
    "x": 291,
    "y": 184,
    "timeMs": 194270,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 580,
    "type": "circle",
    "x": 316,
    "y": 140,
    "timeMs": 194530,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 581,
    "type": "circle",
    "x": 197,
    "y": 140,
    "timeMs": 194800,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 582,
    "type": "circle",
    "x": 236,
    "y": 140,
    "timeMs": 195080,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 583,
    "type": "circle",
    "x": 140,
    "y": 140,
    "timeMs": 195500,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 584,
    "type": "circle",
    "x": 191,
    "y": 357,
    "timeMs": 195800,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 585,
    "type": "circle",
    "x": 140,
    "y": 248,
    "timeMs": 196060,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 586,
    "type": "circle",
    "x": 264,
    "y": 257,
    "timeMs": 196360,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 587,
    "type": "circle",
    "x": 194,
    "y": 370,
    "timeMs": 196740,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 588,
    "type": "circle",
    "x": 140,
    "y": 274,
    "timeMs": 197020,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 589,
    "type": "circle",
    "x": 177,
    "y": 409,
    "timeMs": 197460,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 590,
    "type": "circle",
    "x": 140,
    "y": 382,
    "timeMs": 197700,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 591,
    "type": "circle",
    "x": 255,
    "y": 460,
    "timeMs": 198010,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 592,
    "type": "circle",
    "x": 375,
    "y": 479,
    "timeMs": 198280,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 593,
    "type": "circle",
    "x": 308,
    "y": 460,
    "timeMs": 198560,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 594,
    "type": "circle",
    "x": 438,
    "y": 440,
    "timeMs": 198930,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 595,
    "type": "slider",
    "x": 438,
    "y": 440,
    "timeMs": 199170,
    "durationMs": 380,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 438,
        "y": 440
      },
      {
        "x": 492,
        "y": 459
      },
      {
        "x": 538,
        "y": 410
      }
    ],
    "slides": 1,
    "ticks": [
      0.5
    ],
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 596,
    "type": "circle",
    "x": 435,
    "y": 460,
    "timeMs": 199650,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 597,
    "type": "circle",
    "x": 553,
    "y": 399,
    "timeMs": 200030,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 598,
    "type": "slider",
    "x": 457,
    "y": 403,
    "timeMs": 200310,
    "durationMs": 350,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 457,
        "y": 403
      },
      {
        "x": 487,
        "y": 359
      },
      {
        "x": 545,
        "y": 363
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
    "id": 599,
    "type": "circle",
    "x": 499,
    "y": 460,
    "timeMs": 200760,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 600,
    "type": "circle",
    "x": 631,
    "y": 473,
    "timeMs": 201130,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 601,
    "type": "circle",
    "x": 579,
    "y": 460,
    "timeMs": 201390,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 602,
    "type": "slider",
    "x": 579,
    "y": 460,
    "timeMs": 201690,
    "durationMs": 450,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 579,
        "y": 460
      },
      {
        "x": 524,
        "y": 420
      },
      {
        "x": 543,
        "y": 342
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
    "id": 603,
    "type": "circle",
    "x": 660,
    "y": 399,
    "timeMs": 202240,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 604,
    "type": "circle",
    "x": 657,
    "y": 263,
    "timeMs": 202650,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 605,
    "type": "circle",
    "x": 668,
    "y": 365,
    "timeMs": 202960,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 606,
    "type": "circle",
    "x": 557,
    "y": 440,
    "timeMs": 203350,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 607,
    "type": "slider",
    "x": 557,
    "y": 440,
    "timeMs": 203610,
    "durationMs": 350,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 557,
        "y": 440
      },
      {
        "x": 533,
        "y": 393
      },
      {
        "x": 485,
        "y": 386
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
    "id": 608,
    "type": "circle",
    "x": 625,
    "y": 385,
    "timeMs": 204060,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 609,
    "type": "circle",
    "x": 564,
    "y": 460,
    "timeMs": 204440,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 610,
    "type": "circle",
    "x": 660,
    "y": 470,
    "timeMs": 204850,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 611,
    "type": "circle",
    "x": 660,
    "y": 349,
    "timeMs": 205170,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 612,
    "type": "circle",
    "x": 590,
    "y": 219,
    "timeMs": 205550,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 613,
    "type": "slider",
    "x": 590,
    "y": 219,
    "timeMs": 205810,
    "durationMs": 350,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 590,
        "y": 219
      },
      {
        "x": 540,
        "y": 201
      },
      {
        "x": 495,
        "y": 235
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
    "id": 614,
    "type": "circle",
    "x": 579,
    "y": 123,
    "timeMs": 206260,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 615,
    "type": "circle",
    "x": 645,
    "y": 222,
    "timeMs": 206500,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 616,
    "type": "circle",
    "x": 519,
    "y": 219,
    "timeMs": 206810,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 617,
    "type": "circle",
    "x": 588,
    "y": 120,
    "timeMs": 207070,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 618,
    "type": "circle",
    "x": 642,
    "y": 231,
    "timeMs": 207360,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 619,
    "type": "circle",
    "x": 150,
    "y": 213,
    "timeMs": 207740,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 620,
    "type": "circle",
    "x": 216,
    "y": 140,
    "timeMs": 208020,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 621,
    "type": "slider",
    "x": 216,
    "y": 140,
    "timeMs": 208290,
    "durationMs": 450,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 216,
        "y": 140
      },
      {
        "x": 220,
        "y": 208
      },
      {
        "x": 297,
        "y": 234
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
    "id": 622,
    "type": "circle",
    "x": 156,
    "y": 183,
    "timeMs": 208840,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 623,
    "type": "circle",
    "x": 249,
    "y": 140,
    "timeMs": 209120,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 624,
    "type": "circle",
    "x": 140,
    "y": 187,
    "timeMs": 209560,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 625,
    "type": "circle",
    "x": 140,
    "y": 264,
    "timeMs": 209930,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 626,
    "type": "circle",
    "x": 151,
    "y": 408,
    "timeMs": 210190,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 627,
    "type": "circle",
    "x": 130,
    "y": 269,
    "timeMs": 210650,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 628,
    "type": "circle",
    "x": 245,
    "y": 302,
    "timeMs": 210900,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 629,
    "type": "circle",
    "x": 154,
    "y": 387,
    "timeMs": 211200,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 630,
    "type": "circle",
    "x": 123,
    "y": 269,
    "timeMs": 211470,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 631,
    "type": "circle",
    "x": 253,
    "y": 299,
    "timeMs": 211860,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 632,
    "type": "circle",
    "x": 164,
    "y": 384,
    "timeMs": 212140,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 633,
    "type": "circle",
    "x": 370,
    "y": 294,
    "timeMs": 212420,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 634,
    "type": "circle",
    "x": 504,
    "y": 317,
    "timeMs": 212830,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 635,
    "type": "circle",
    "x": 424,
    "y": 406,
    "timeMs": 213080,
    "comboNumber": 3,
    "comboColorIndex": 1
  }
];

export const unoparMeDeixaEmPazBeatmap: Beatmap = {
  id: 'unopar-me-deixa-em-paz',
  title: 'Unopar, Me Deixa em Paz!',
  artist: 'Desconhecido',
  bpm: 108,
  durationSec: 215,
  durationFormatted: '3:35',
  difficultyName: 'Normal',
  difficultyStars: 3.2,
  audioSourceType: 'file',
  audioUrl: './songs/unopar-me-deixa-em-paz.mp3',
  coverUrl: './covers/unopar-me-deixa-em-paz.jpg',
  previewStartSec: 25,
  offsetMs: 160,
  circleRadius: 52, // Comfortable medium size for relaxed, enjoyable aiming
  approachTimeMs: 700, // Readable, smooth reaction window
  notes: allNotes,
};
