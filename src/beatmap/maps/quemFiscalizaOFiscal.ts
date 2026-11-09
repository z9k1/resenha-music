import type { Beatmap, HitObject } from '../../types/index.ts';

// Handcrafted true-rhythm beatmap for "Quem Fiscaliza o Fiscal?"
// Every single circle and slider head is strictly locked to the actual vocal and percussion onsets of the track.
// High-energy Insane difficulty (4.6★) with rapid vocal streams, syncopated funk beats, and dynamic Bézier sliders.

export const allNotes: HitObject[] = [
  {
    "id": 1,
    "type": "circle",
    "x": 199,
    "y": 146,
    "timeMs": 220,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 2,
    "type": "circle",
    "x": 142,
    "y": 157,
    "timeMs": 390,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 3,
    "type": "circle",
    "x": 130,
    "y": 182,
    "timeMs": 570,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 4,
    "type": "slider",
    "x": 130,
    "y": 182,
    "timeMs": 890,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 130,
        "y": 182
      },
      {
        "x": 187,
        "y": 179
      },
      {
        "x": 219,
        "y": 235
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
    "id": 5,
    "type": "circle",
    "x": 130,
    "y": 169,
    "timeMs": 1230,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 6,
    "type": "circle",
    "x": 181,
    "y": 130,
    "timeMs": 1410,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 7,
    "type": "slider",
    "x": 181,
    "y": 130,
    "timeMs": 1570,
    "durationMs": 340,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 181,
        "y": 130
      },
      {
        "x": 205,
        "y": 201
      },
      {
        "x": 280,
        "y": 212
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
    "id": 8,
    "type": "circle",
    "x": 130,
    "y": 189,
    "timeMs": 1990,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 9,
    "type": "circle",
    "x": 326,
    "y": 234,
    "timeMs": 2180,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 10,
    "type": "circle",
    "x": 114,
    "y": 348,
    "timeMs": 2580,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 11,
    "type": "circle",
    "x": 130,
    "y": 356,
    "timeMs": 2760,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 12,
    "type": "circle",
    "x": 176,
    "y": 381,
    "timeMs": 2970,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 13,
    "type": "circle",
    "x": 213,
    "y": 423,
    "timeMs": 3160,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 14,
    "type": "circle",
    "x": 130,
    "y": 432,
    "timeMs": 3380,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 15,
    "type": "circle",
    "x": 130,
    "y": 470,
    "timeMs": 3780,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 16,
    "type": "circle",
    "x": 180,
    "y": 446,
    "timeMs": 3940,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 17,
    "type": "circle",
    "x": 281,
    "y": 309,
    "timeMs": 4090,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 18,
    "type": "circle",
    "x": 305,
    "y": 254,
    "timeMs": 4260,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 19,
    "type": "slider",
    "x": 305,
    "y": 254,
    "timeMs": 4440,
    "durationMs": 430,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 305,
        "y": 254
      },
      {
        "x": 288,
        "y": 347
      },
      {
        "x": 366,
        "y": 411
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
    "x": 186,
    "y": 213,
    "timeMs": 4950,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 21,
    "type": "circle",
    "x": 131,
    "y": 184,
    "timeMs": 5160,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 22,
    "type": "circle",
    "x": 130,
    "y": 176,
    "timeMs": 5310,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 23,
    "type": "circle",
    "x": 178,
    "y": 151,
    "timeMs": 5450,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 24,
    "type": "circle",
    "x": 221,
    "y": 130,
    "timeMs": 5660,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 25,
    "type": "circle",
    "x": 437,
    "y": 473,
    "timeMs": 5820,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 26,
    "type": "circle",
    "x": 439,
    "y": 470,
    "timeMs": 5970,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 27,
    "type": "circle",
    "x": 583,
    "y": 470,
    "timeMs": 6300,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 28,
    "type": "slider",
    "x": 583,
    "y": 470,
    "timeMs": 6480,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 583,
        "y": 470
      },
      {
        "x": 589,
        "y": 413
      },
      {
        "x": 644,
        "y": 386
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
    "id": 29,
    "type": "circle",
    "x": 566,
    "y": 470,
    "timeMs": 6820,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 30,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 7170,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 31,
    "type": "circle",
    "x": 634,
    "y": 418,
    "timeMs": 7370,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 32,
    "type": "circle",
    "x": 670,
    "y": 472,
    "timeMs": 7660,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 33,
    "type": "circle",
    "x": 523,
    "y": 369,
    "timeMs": 7840,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 34,
    "type": "circle",
    "x": 589,
    "y": 156,
    "timeMs": 8170,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 35,
    "type": "circle",
    "x": 670,
    "y": 317,
    "timeMs": 8390,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 36,
    "type": "circle",
    "x": 655,
    "y": 376,
    "timeMs": 8550,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 37,
    "type": "circle",
    "x": 661,
    "y": 438,
    "timeMs": 8710,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 38,
    "type": "circle",
    "x": 686,
    "y": 470,
    "timeMs": 8860,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 39,
    "type": "circle",
    "x": 670,
    "y": 421,
    "timeMs": 9020,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 40,
    "type": "circle",
    "x": 643,
    "y": 364,
    "timeMs": 9190,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 41,
    "type": "circle",
    "x": 504,
    "y": 143,
    "timeMs": 9360,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 42,
    "type": "circle",
    "x": 516,
    "y": 130,
    "timeMs": 9540,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 43,
    "type": "circle",
    "x": 511,
    "y": 185,
    "timeMs": 9680,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 44,
    "type": "circle",
    "x": 486,
    "y": 237,
    "timeMs": 9880,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 45,
    "type": "circle",
    "x": 444,
    "y": 278,
    "timeMs": 10050,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 46,
    "type": "circle",
    "x": 393,
    "y": 301,
    "timeMs": 10230,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 47,
    "type": "circle",
    "x": 337,
    "y": 306,
    "timeMs": 10410,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 48,
    "type": "circle",
    "x": 290,
    "y": 292,
    "timeMs": 10560,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 49,
    "type": "circle",
    "x": 249,
    "y": 202,
    "timeMs": 10740,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 50,
    "type": "circle",
    "x": 194,
    "y": 227,
    "timeMs": 10900,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 51,
    "type": "circle",
    "x": 237,
    "y": 130,
    "timeMs": 11120,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 52,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 11450,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 53,
    "type": "circle",
    "x": 130,
    "y": 164,
    "timeMs": 11750,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 54,
    "type": "circle",
    "x": 181,
    "y": 154,
    "timeMs": 11900,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 55,
    "type": "circle",
    "x": 130,
    "y": 341,
    "timeMs": 12150,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 56,
    "type": "circle",
    "x": 130,
    "y": 275,
    "timeMs": 12410,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 57,
    "type": "circle",
    "x": 157,
    "y": 470,
    "timeMs": 12660,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 58,
    "type": "circle",
    "x": 158,
    "y": 416,
    "timeMs": 12820,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 59,
    "type": "circle",
    "x": 284,
    "y": 470,
    "timeMs": 13080,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 60,
    "type": "circle",
    "x": 342,
    "y": 470,
    "timeMs": 13420,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 61,
    "type": "circle",
    "x": 376,
    "y": 421,
    "timeMs": 13590,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 62,
    "type": "slider",
    "x": 376,
    "y": 421,
    "timeMs": 13900,
    "durationMs": 480,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 376,
        "y": 421
      },
      {
        "x": 377,
        "y": 322
      },
      {
        "x": 504,
        "y": 294
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
    "id": 63,
    "type": "circle",
    "x": 326,
    "y": 470,
    "timeMs": 14600,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 64,
    "type": "slider",
    "x": 326,
    "y": 470,
    "timeMs": 14950,
    "durationMs": 270,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 326,
        "y": 470
      },
      {
        "x": 286,
        "y": 426
      },
      {
        "x": 321,
        "y": 362
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
    "id": 65,
    "type": "circle",
    "x": 429,
    "y": 470,
    "timeMs": 15300,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 66,
    "type": "circle",
    "x": 533,
    "y": 470,
    "timeMs": 15630,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 67,
    "type": "slider",
    "x": 533,
    "y": 470,
    "timeMs": 15960,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 533,
        "y": 470
      },
      {
        "x": 584,
        "y": 443
      },
      {
        "x": 585,
        "y": 380
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
    "id": 68,
    "type": "circle",
    "x": 548,
    "y": 470,
    "timeMs": 16300,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 69,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 16630,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 70,
    "type": "slider",
    "x": 670,
    "y": 470,
    "timeMs": 16980,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 670,
        "y": 470
      },
      {
        "x": 616,
        "y": 459
      },
      {
        "x": 585,
        "y": 417
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
    "id": 71,
    "type": "circle",
    "x": 670,
    "y": 485,
    "timeMs": 17310,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 72,
    "type": "circle",
    "x": 670,
    "y": 261,
    "timeMs": 17660,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 73,
    "type": "slider",
    "x": 670,
    "y": 261,
    "timeMs": 17980,
    "durationMs": 280,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 670,
        "y": 261
      },
      {
        "x": 694,
        "y": 204
      },
      {
        "x": 627,
        "y": 158
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
    "id": 74,
    "type": "circle",
    "x": 670,
    "y": 354,
    "timeMs": 18340,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 75,
    "type": "circle",
    "x": 630,
    "y": 385,
    "timeMs": 18510,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 76,
    "type": "circle",
    "x": 570,
    "y": 405,
    "timeMs": 18660,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 77,
    "type": "circle",
    "x": 509,
    "y": 403,
    "timeMs": 18860,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 78,
    "type": "circle",
    "x": 454,
    "y": 381,
    "timeMs": 19010,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 79,
    "type": "circle",
    "x": 670,
    "y": 148,
    "timeMs": 19340,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 80,
    "type": "circle",
    "x": 618,
    "y": 147,
    "timeMs": 19500,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 81,
    "type": "circle",
    "x": 572,
    "y": 163,
    "timeMs": 19690,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 82,
    "type": "circle",
    "x": 531,
    "y": 196,
    "timeMs": 19840,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 83,
    "type": "circle",
    "x": 501,
    "y": 246,
    "timeMs": 20020,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 84,
    "type": "circle",
    "x": 489,
    "y": 306,
    "timeMs": 20180,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 85,
    "type": "slider",
    "x": 489,
    "y": 306,
    "timeMs": 20360,
    "durationMs": 240,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 489,
        "y": 306
      },
      {
        "x": 451,
        "y": 343
      },
      {
        "x": 464,
        "y": 399
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
    "id": 86,
    "type": "circle",
    "x": 460,
    "y": 179,
    "timeMs": 20680,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 87,
    "type": "circle",
    "x": 541,
    "y": 316,
    "timeMs": 21040,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 88,
    "type": "circle",
    "x": 570,
    "y": 357,
    "timeMs": 21210,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 89,
    "type": "circle",
    "x": 583,
    "y": 406,
    "timeMs": 21360,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 90,
    "type": "circle",
    "x": 578,
    "y": 462,
    "timeMs": 21560,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 91,
    "type": "circle",
    "x": 554,
    "y": 470,
    "timeMs": 21720,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 92,
    "type": "circle",
    "x": 548,
    "y": 411,
    "timeMs": 21880,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 93,
    "type": "circle",
    "x": 564,
    "y": 353,
    "timeMs": 22040,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 94,
    "type": "slider",
    "x": 564,
    "y": 353,
    "timeMs": 22230,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 564,
        "y": 353
      },
      {
        "x": 545,
        "y": 299
      },
      {
        "x": 582,
        "y": 251
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
    "id": 95,
    "type": "circle",
    "x": 287,
    "y": 470,
    "timeMs": 22570,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 96,
    "type": "circle",
    "x": 284,
    "y": 411,
    "timeMs": 22720,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 97,
    "type": "circle",
    "x": 451,
    "y": 470,
    "timeMs": 23060,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 98,
    "type": "circle",
    "x": 475,
    "y": 423,
    "timeMs": 23240,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 99,
    "type": "circle",
    "x": 483,
    "y": 363,
    "timeMs": 23390,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 100,
    "type": "circle",
    "x": 471,
    "y": 308,
    "timeMs": 23570,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 101,
    "type": "circle",
    "x": 442,
    "y": 263,
    "timeMs": 23730,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 102,
    "type": "circle",
    "x": 402,
    "y": 232,
    "timeMs": 23920,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 103,
    "type": "circle",
    "x": 287,
    "y": 359,
    "timeMs": 24080,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 104,
    "type": "circle",
    "x": 276,
    "y": 310,
    "timeMs": 24260,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 105,
    "type": "circle",
    "x": 480,
    "y": 392,
    "timeMs": 24580,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 106,
    "type": "slider",
    "x": 480,
    "y": 392,
    "timeMs": 24750,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 480,
        "y": 392
      },
      {
        "x": 536,
        "y": 380
      },
      {
        "x": 580,
        "y": 419
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
    "id": 107,
    "type": "circle",
    "x": 355,
    "y": 415,
    "timeMs": 25090,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 108,
    "type": "circle",
    "x": 302,
    "y": 395,
    "timeMs": 25260,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 109,
    "type": "circle",
    "x": 254,
    "y": 353,
    "timeMs": 25440,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 110,
    "type": "circle",
    "x": 227,
    "y": 305,
    "timeMs": 25600,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 111,
    "type": "circle",
    "x": 479,
    "y": 355,
    "timeMs": 25780,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 112,
    "type": "circle",
    "x": 421,
    "y": 332,
    "timeMs": 25960,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 113,
    "type": "circle",
    "x": 365,
    "y": 332,
    "timeMs": 26110,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 114,
    "type": "circle",
    "x": 526,
    "y": 174,
    "timeMs": 26450,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 115,
    "type": "circle",
    "x": 543,
    "y": 396,
    "timeMs": 26780,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 116,
    "type": "circle",
    "x": 566,
    "y": 446,
    "timeMs": 26930,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 117,
    "type": "circle",
    "x": 600,
    "y": 481,
    "timeMs": 27130,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 118,
    "type": "circle",
    "x": 379,
    "y": 458,
    "timeMs": 27460,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 119,
    "type": "circle",
    "x": 518,
    "y": 234,
    "timeMs": 27640,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 120,
    "type": "circle",
    "x": 483,
    "y": 198,
    "timeMs": 27800,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 121,
    "type": "circle",
    "x": 458,
    "y": 143,
    "timeMs": 27970,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 122,
    "type": "circle",
    "x": 454,
    "y": 130,
    "timeMs": 28130,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 123,
    "type": "circle",
    "x": 304,
    "y": 130,
    "timeMs": 28500,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 124,
    "type": "circle",
    "x": 324,
    "y": 130,
    "timeMs": 28820,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 125,
    "type": "circle",
    "x": 311,
    "y": 181,
    "timeMs": 28990,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 126,
    "type": "circle",
    "x": 279,
    "y": 228,
    "timeMs": 29160,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 127,
    "type": "circle",
    "x": 391,
    "y": 227,
    "timeMs": 29320,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 128,
    "type": "circle",
    "x": 396,
    "y": 278,
    "timeMs": 29490,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 129,
    "type": "circle",
    "x": 420,
    "y": 328,
    "timeMs": 29680,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 130,
    "type": "circle",
    "x": 455,
    "y": 363,
    "timeMs": 29850,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 131,
    "type": "circle",
    "x": 239,
    "y": 343,
    "timeMs": 30160,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 132,
    "type": "circle",
    "x": 179,
    "y": 359,
    "timeMs": 30340,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 133,
    "type": "circle",
    "x": 137,
    "y": 389,
    "timeMs": 30510,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 134,
    "type": "circle",
    "x": 130,
    "y": 430,
    "timeMs": 30700,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 135,
    "type": "circle",
    "x": 248,
    "y": 307,
    "timeMs": 30850,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 136,
    "type": "circle",
    "x": 243,
    "y": 363,
    "timeMs": 31020,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 137,
    "type": "circle",
    "x": 216,
    "y": 420,
    "timeMs": 31190,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 138,
    "type": "circle",
    "x": 175,
    "y": 460,
    "timeMs": 31340,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 139,
    "type": "circle",
    "x": 128,
    "y": 482,
    "timeMs": 31520,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 140,
    "type": "circle",
    "x": 130,
    "y": 487,
    "timeMs": 31700,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 141,
    "type": "circle",
    "x": 182,
    "y": 470,
    "timeMs": 31870,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 142,
    "type": "circle",
    "x": 242,
    "y": 465,
    "timeMs": 32030,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 143,
    "type": "circle",
    "x": 333,
    "y": 361,
    "timeMs": 32200,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 144,
    "type": "circle",
    "x": 270,
    "y": 470,
    "timeMs": 32540,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 145,
    "type": "circle",
    "x": 236,
    "y": 424,
    "timeMs": 32710,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 146,
    "type": "circle",
    "x": 185,
    "y": 390,
    "timeMs": 32870,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 147,
    "type": "circle",
    "x": 133,
    "y": 378,
    "timeMs": 33050,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 148,
    "type": "circle",
    "x": 130,
    "y": 385,
    "timeMs": 33220,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 149,
    "type": "circle",
    "x": 182,
    "y": 372,
    "timeMs": 33410,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 150,
    "type": "circle",
    "x": 230,
    "y": 340,
    "timeMs": 33550,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 151,
    "type": "circle",
    "x": 537,
    "y": 394,
    "timeMs": 33740,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 152,
    "type": "circle",
    "x": 595,
    "y": 401,
    "timeMs": 33900,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 153,
    "type": "circle",
    "x": 651,
    "y": 428,
    "timeMs": 34050,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 154,
    "type": "circle",
    "x": 685,
    "y": 464,
    "timeMs": 34230,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 155,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 34410,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 156,
    "type": "circle",
    "x": 666,
    "y": 409,
    "timeMs": 34580,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 157,
    "type": "circle",
    "x": 682,
    "y": 359,
    "timeMs": 34770,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 158,
    "type": "circle",
    "x": 670,
    "y": 315,
    "timeMs": 34910,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 159,
    "type": "circle",
    "x": 539,
    "y": 265,
    "timeMs": 35090,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 160,
    "type": "circle",
    "x": 487,
    "y": 253,
    "timeMs": 35230,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 161,
    "type": "circle",
    "x": 637,
    "y": 129,
    "timeMs": 35450,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 162,
    "type": "circle",
    "x": 669,
    "y": 130,
    "timeMs": 35590,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 163,
    "type": "circle",
    "x": 670,
    "y": 162,
    "timeMs": 35760,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 164,
    "type": "circle",
    "x": 646,
    "y": 204,
    "timeMs": 35920,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 165,
    "type": "circle",
    "x": 636,
    "y": 255,
    "timeMs": 36090,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 166,
    "type": "circle",
    "x": 645,
    "y": 307,
    "timeMs": 36260,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 167,
    "type": "circle",
    "x": 443,
    "y": 243,
    "timeMs": 36450,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 168,
    "type": "circle",
    "x": 418,
    "y": 285,
    "timeMs": 36610,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 169,
    "type": "circle",
    "x": 381,
    "y": 316,
    "timeMs": 36770,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 170,
    "type": "circle",
    "x": 335,
    "y": 332,
    "timeMs": 36940,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 171,
    "type": "circle",
    "x": 272,
    "y": 331,
    "timeMs": 37090,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 172,
    "type": "circle",
    "x": 387,
    "y": 173,
    "timeMs": 37310,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 173,
    "type": "circle",
    "x": 428,
    "y": 145,
    "timeMs": 37450,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 174,
    "type": "circle",
    "x": 478,
    "y": 133,
    "timeMs": 37620,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 175,
    "type": "circle",
    "x": 311,
    "y": 191,
    "timeMs": 37770,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 176,
    "type": "circle",
    "x": 344,
    "y": 145,
    "timeMs": 37960,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 177,
    "type": "circle",
    "x": 359,
    "y": 130,
    "timeMs": 38160,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 178,
    "type": "circle",
    "x": 395,
    "y": 179,
    "timeMs": 38300,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 179,
    "type": "circle",
    "x": 440,
    "y": 209,
    "timeMs": 38470,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 180,
    "type": "circle",
    "x": 502,
    "y": 224,
    "timeMs": 38640,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 181,
    "type": "circle",
    "x": 563,
    "y": 218,
    "timeMs": 38810,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 182,
    "type": "circle",
    "x": 618,
    "y": 190,
    "timeMs": 38980,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 183,
    "type": "circle",
    "x": 308,
    "y": 353,
    "timeMs": 39150,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 184,
    "type": "slider",
    "x": 308,
    "y": 353,
    "timeMs": 39320,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 308,
        "y": 353
      },
      {
        "x": 350,
        "y": 317
      },
      {
        "x": 404,
        "y": 326
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
    "id": 185,
    "type": "circle",
    "x": 194,
    "y": 399,
    "timeMs": 39650,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 186,
    "type": "circle",
    "x": 143,
    "y": 398,
    "timeMs": 39820,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 187,
    "type": "circle",
    "x": 130,
    "y": 378,
    "timeMs": 40010,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 188,
    "type": "circle",
    "x": 186,
    "y": 377,
    "timeMs": 40200,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 189,
    "type": "circle",
    "x": 244,
    "y": 397,
    "timeMs": 40340,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 190,
    "type": "circle",
    "x": 289,
    "y": 434,
    "timeMs": 40530,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 191,
    "type": "circle",
    "x": 487,
    "y": 439,
    "timeMs": 40680,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 192,
    "type": "circle",
    "x": 296,
    "y": 470,
    "timeMs": 41010,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 193,
    "type": "circle",
    "x": 244,
    "y": 460,
    "timeMs": 41210,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 194,
    "type": "circle",
    "x": 186,
    "y": 470,
    "timeMs": 41360,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 195,
    "type": "circle",
    "x": 138,
    "y": 470,
    "timeMs": 41540,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 196,
    "type": "circle",
    "x": 130,
    "y": 461,
    "timeMs": 41690,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 197,
    "type": "circle",
    "x": 180,
    "y": 432,
    "timeMs": 41870,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 198,
    "type": "circle",
    "x": 215,
    "y": 391,
    "timeMs": 42030,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 199,
    "type": "circle",
    "x": 628,
    "y": 296,
    "timeMs": 42220,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 200,
    "type": "circle",
    "x": 678,
    "y": 287,
    "timeMs": 42370,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 201,
    "type": "circle",
    "x": 670,
    "y": 297,
    "timeMs": 42570,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 202,
    "type": "slider",
    "x": 670,
    "y": 297,
    "timeMs": 42710,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 670,
        "y": 297
      },
      {
        "x": 629,
        "y": 337
      },
      {
        "x": 566,
        "y": 305
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
    "id": 203,
    "type": "circle",
    "x": 670,
    "y": 200,
    "timeMs": 43050,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 204,
    "type": "circle",
    "x": 630,
    "y": 156,
    "timeMs": 43220,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 205,
    "type": "slider",
    "x": 630,
    "y": 156,
    "timeMs": 43390,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 630,
        "y": 156
      },
      {
        "x": 576,
        "y": 169
      },
      {
        "x": 582,
        "y": 230
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
    "id": 206,
    "type": "circle",
    "x": 664,
    "y": 130,
    "timeMs": 43720,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 207,
    "type": "circle",
    "x": 541,
    "y": 246,
    "timeMs": 43910,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 208,
    "type": "circle",
    "x": 590,
    "y": 273,
    "timeMs": 44070,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 209,
    "type": "circle",
    "x": 648,
    "y": 281,
    "timeMs": 44240,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 210,
    "type": "circle",
    "x": 670,
    "y": 270,
    "timeMs": 44400,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 211,
    "type": "circle",
    "x": 670,
    "y": 126,
    "timeMs": 44730,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 212,
    "type": "circle",
    "x": 614,
    "y": 130,
    "timeMs": 44930,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 213,
    "type": "circle",
    "x": 567,
    "y": 169,
    "timeMs": 45080,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 214,
    "type": "circle",
    "x": 537,
    "y": 223,
    "timeMs": 45280,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 215,
    "type": "circle",
    "x": 258,
    "y": 234,
    "timeMs": 45420,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 216,
    "type": "circle",
    "x": 321,
    "y": 130,
    "timeMs": 45760,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 217,
    "type": "circle",
    "x": 317,
    "y": 181,
    "timeMs": 45920,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 218,
    "type": "circle",
    "x": 297,
    "y": 227,
    "timeMs": 46110,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 219,
    "type": "circle",
    "x": 255,
    "y": 270,
    "timeMs": 46280,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 220,
    "type": "circle",
    "x": 210,
    "y": 292,
    "timeMs": 46430,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 221,
    "type": "circle",
    "x": 155,
    "y": 297,
    "timeMs": 46570,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 222,
    "type": "circle",
    "x": 130,
    "y": 284,
    "timeMs": 46780,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 223,
    "type": "circle",
    "x": 273,
    "y": 297,
    "timeMs": 46950,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 224,
    "type": "circle",
    "x": 302,
    "y": 256,
    "timeMs": 47120,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 225,
    "type": "circle",
    "x": 318,
    "y": 199,
    "timeMs": 47290,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 226,
    "type": "slider",
    "x": 318,
    "y": 199,
    "timeMs": 47490,
    "durationMs": 240,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 318,
        "y": 199
      },
      {
        "x": 358,
        "y": 233
      },
      {
        "x": 347,
        "y": 291
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
    "id": 227,
    "type": "circle",
    "x": 184,
    "y": 144,
    "timeMs": 47810,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 228,
    "type": "circle",
    "x": 138,
    "y": 125,
    "timeMs": 47980,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 229,
    "type": "circle",
    "x": 130,
    "y": 123,
    "timeMs": 48140,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 230,
    "type": "circle",
    "x": 176,
    "y": 130,
    "timeMs": 48320,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 231,
    "type": "circle",
    "x": 416,
    "y": 454,
    "timeMs": 48470,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 232,
    "type": "circle",
    "x": 441,
    "y": 470,
    "timeMs": 48650,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 233,
    "type": "circle",
    "x": 477,
    "y": 437,
    "timeMs": 48820,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 234,
    "type": "circle",
    "x": 510,
    "y": 470,
    "timeMs": 49150,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 235,
    "type": "circle",
    "x": 534,
    "y": 425,
    "timeMs": 49340,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 236,
    "type": "circle",
    "x": 573,
    "y": 390,
    "timeMs": 49490,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 237,
    "type": "circle",
    "x": 629,
    "y": 368,
    "timeMs": 49670,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 238,
    "type": "circle",
    "x": 670,
    "y": 367,
    "timeMs": 49830,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 239,
    "type": "circle",
    "x": 510,
    "y": 373,
    "timeMs": 50000,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 240,
    "type": "circle",
    "x": 472,
    "y": 404,
    "timeMs": 50190,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 241,
    "type": "circle",
    "x": 446,
    "y": 446,
    "timeMs": 50370,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 242,
    "type": "circle",
    "x": 436,
    "y": 470,
    "timeMs": 50520,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 243,
    "type": "circle",
    "x": 408,
    "y": 423,
    "timeMs": 50700,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 244,
    "type": "circle",
    "x": 365,
    "y": 390,
    "timeMs": 50860,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 245,
    "type": "circle",
    "x": 306,
    "y": 370,
    "timeMs": 51030,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 246,
    "type": "circle",
    "x": 250,
    "y": 371,
    "timeMs": 51190,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 247,
    "type": "circle",
    "x": 491,
    "y": 207,
    "timeMs": 51370,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 248,
    "type": "circle",
    "x": 445,
    "y": 170,
    "timeMs": 51530,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 249,
    "type": "circle",
    "x": 639,
    "y": 146,
    "timeMs": 51750,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 250,
    "type": "circle",
    "x": 477,
    "y": 292,
    "timeMs": 52060,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 251,
    "type": "circle",
    "x": 425,
    "y": 313,
    "timeMs": 52210,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 252,
    "type": "circle",
    "x": 375,
    "y": 315,
    "timeMs": 52390,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 253,
    "type": "circle",
    "x": 330,
    "y": 300,
    "timeMs": 52550,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 254,
    "type": "circle",
    "x": 284,
    "y": 265,
    "timeMs": 52730,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 255,
    "type": "circle",
    "x": 290,
    "y": 170,
    "timeMs": 52900,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 256,
    "type": "slider",
    "x": 290,
    "y": 170,
    "timeMs": 53230,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 290,
        "y": 170
      },
      {
        "x": 237,
        "y": 186
      },
      {
        "x": 191,
        "y": 160
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
    "id": 257,
    "type": "circle",
    "x": 413,
    "y": 154,
    "timeMs": 53560,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 258,
    "type": "circle",
    "x": 468,
    "y": 132,
    "timeMs": 53720,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 259,
    "type": "circle",
    "x": 507,
    "y": 130,
    "timeMs": 53900,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 260,
    "type": "circle",
    "x": 559,
    "y": 150,
    "timeMs": 54090,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 261,
    "type": "circle",
    "x": 614,
    "y": 152,
    "timeMs": 54240,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 262,
    "type": "circle",
    "x": 461,
    "y": 281,
    "timeMs": 54480,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 263,
    "type": "circle",
    "x": 253,
    "y": 130,
    "timeMs": 54770,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 264,
    "type": "circle",
    "x": 242,
    "y": 188,
    "timeMs": 54930,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 265,
    "type": "circle",
    "x": 154,
    "y": 130,
    "timeMs": 55260,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 266,
    "type": "circle",
    "x": 111,
    "y": 175,
    "timeMs": 55430,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 267,
    "type": "circle",
    "x": 130,
    "y": 202,
    "timeMs": 55600,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 268,
    "type": "circle",
    "x": 172,
    "y": 247,
    "timeMs": 55780,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 269,
    "type": "circle",
    "x": 193,
    "y": 295,
    "timeMs": 55940,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 270,
    "type": "circle",
    "x": 196,
    "y": 345,
    "timeMs": 56120,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 271,
    "type": "circle",
    "x": 348,
    "y": 456,
    "timeMs": 56290,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 272,
    "type": "circle",
    "x": 392,
    "y": 470,
    "timeMs": 56460,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 273,
    "type": "circle",
    "x": 417,
    "y": 412,
    "timeMs": 56630,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 274,
    "type": "circle",
    "x": 420,
    "y": 361,
    "timeMs": 56790,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 275,
    "type": "circle",
    "x": 404,
    "y": 308,
    "timeMs": 56970,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 276,
    "type": "circle",
    "x": 372,
    "y": 265,
    "timeMs": 57150,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 277,
    "type": "circle",
    "x": 320,
    "y": 231,
    "timeMs": 57310,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 278,
    "type": "circle",
    "x": 268,
    "y": 219,
    "timeMs": 57480,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 279,
    "type": "circle",
    "x": 485,
    "y": 356,
    "timeMs": 57660,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 280,
    "type": "circle",
    "x": 670,
    "y": 311,
    "timeMs": 57980,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 281,
    "type": "circle",
    "x": 621,
    "y": 280,
    "timeMs": 58160,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 282,
    "type": "circle",
    "x": 585,
    "y": 235,
    "timeMs": 58330,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 283,
    "type": "circle",
    "x": 670,
    "y": 283,
    "timeMs": 58570,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 284,
    "type": "circle",
    "x": 670,
    "y": 130,
    "timeMs": 58830,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 285,
    "type": "circle",
    "x": 631,
    "y": 164,
    "timeMs": 58990,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 286,
    "type": "slider",
    "x": 631,
    "y": 164,
    "timeMs": 59340,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 631,
        "y": 164
      },
      {
        "x": 617,
        "y": 219
      },
      {
        "x": 540,
        "y": 214
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
    "id": 287,
    "type": "circle",
    "x": 685,
    "y": 130,
    "timeMs": 59680,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 288,
    "type": "circle",
    "x": 465,
    "y": 130,
    "timeMs": 60020,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 289,
    "type": "circle",
    "x": 418,
    "y": 158,
    "timeMs": 60200,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 290,
    "type": "circle",
    "x": 378,
    "y": 208,
    "timeMs": 60360,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 291,
    "type": "circle",
    "x": 360,
    "y": 262,
    "timeMs": 60530,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 292,
    "type": "circle",
    "x": 361,
    "y": 317,
    "timeMs": 60700,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 293,
    "type": "circle",
    "x": 380,
    "y": 364,
    "timeMs": 60850,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 294,
    "type": "circle",
    "x": 182,
    "y": 295,
    "timeMs": 61130,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 295,
    "type": "circle",
    "x": 567,
    "y": 130,
    "timeMs": 61380,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 296,
    "type": "circle",
    "x": 609,
    "y": 178,
    "timeMs": 61570,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 297,
    "type": "circle",
    "x": 629,
    "y": 231,
    "timeMs": 61730,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 298,
    "type": "circle",
    "x": 629,
    "y": 282,
    "timeMs": 61880,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 299,
    "type": "circle",
    "x": 610,
    "y": 334,
    "timeMs": 62050,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 300,
    "type": "circle",
    "x": 580,
    "y": 371,
    "timeMs": 62240,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 301,
    "type": "slider",
    "x": 580,
    "y": 371,
    "timeMs": 62380,
    "durationMs": 270,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 580,
        "y": 371
      },
      {
        "x": 523,
        "y": 387
      },
      {
        "x": 494,
        "y": 436
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
    "id": 302,
    "type": "circle",
    "x": 546,
    "y": 215,
    "timeMs": 62730,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 303,
    "type": "circle",
    "x": 223,
    "y": 210,
    "timeMs": 62920,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 304,
    "type": "circle",
    "x": 197,
    "y": 158,
    "timeMs": 63060,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 305,
    "type": "circle",
    "x": 155,
    "y": 119,
    "timeMs": 63240,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 306,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 63400,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 307,
    "type": "circle",
    "x": 191,
    "y": 133,
    "timeMs": 63570,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 308,
    "type": "circle",
    "x": 241,
    "y": 118,
    "timeMs": 63750,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 309,
    "type": "circle",
    "x": 292,
    "y": 130,
    "timeMs": 63940,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 310,
    "type": "slider",
    "x": 292,
    "y": 130,
    "timeMs": 64080,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 292,
        "y": 130
      },
      {
        "x": 349,
        "y": 133
      },
      {
        "x": 368,
        "y": 200
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
    "id": 311,
    "type": "circle",
    "x": 130,
    "y": 299,
    "timeMs": 64420,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 312,
    "type": "circle",
    "x": 180,
    "y": 295,
    "timeMs": 64590,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 313,
    "type": "circle",
    "x": 235,
    "y": 310,
    "timeMs": 64750,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 314,
    "type": "circle",
    "x": 280,
    "y": 343,
    "timeMs": 64930,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 315,
    "type": "circle",
    "x": 311,
    "y": 389,
    "timeMs": 65110,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 316,
    "type": "circle",
    "x": 130,
    "y": 310,
    "timeMs": 65440,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 317,
    "type": "circle",
    "x": 181,
    "y": 310,
    "timeMs": 65590,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 318,
    "type": "circle",
    "x": 238,
    "y": 330,
    "timeMs": 65780,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 319,
    "type": "circle",
    "x": 301,
    "y": 470,
    "timeMs": 66120,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 320,
    "type": "circle",
    "x": 249,
    "y": 457,
    "timeMs": 66280,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 321,
    "type": "circle",
    "x": 201,
    "y": 463,
    "timeMs": 66450,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 322,
    "type": "circle",
    "x": 358,
    "y": 304,
    "timeMs": 66780,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 323,
    "type": "circle",
    "x": 381,
    "y": 253,
    "timeMs": 66960,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 324,
    "type": "circle",
    "x": 385,
    "y": 204,
    "timeMs": 67130,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 325,
    "type": "circle",
    "x": 554,
    "y": 349,
    "timeMs": 67460,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 326,
    "type": "circle",
    "x": 603,
    "y": 367,
    "timeMs": 67620,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 327,
    "type": "circle",
    "x": 617,
    "y": 316,
    "timeMs": 67810,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 328,
    "type": "circle",
    "x": 395,
    "y": 355,
    "timeMs": 68150,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 329,
    "type": "circle",
    "x": 333,
    "y": 344,
    "timeMs": 68330,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 330,
    "type": "circle",
    "x": 278,
    "y": 312,
    "timeMs": 68490,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 331,
    "type": "circle",
    "x": 246,
    "y": 274,
    "timeMs": 68670,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 332,
    "type": "circle",
    "x": 226,
    "y": 217,
    "timeMs": 68820,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 333,
    "type": "circle",
    "x": 417,
    "y": 337,
    "timeMs": 69160,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 334,
    "type": "slider",
    "x": 417,
    "y": 337,
    "timeMs": 69500,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 417,
        "y": 337
      },
      {
        "x": 472,
        "y": 335
      },
      {
        "x": 507,
        "y": 381
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
    "id": 335,
    "type": "circle",
    "x": 224,
    "y": 137,
    "timeMs": 69830,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 336,
    "type": "circle",
    "x": 163,
    "y": 146,
    "timeMs": 70020,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 337,
    "type": "slider",
    "x": 163,
    "y": 146,
    "timeMs": 70180,
    "durationMs": 270,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 163,
        "y": 146
      },
      {
        "x": 207,
        "y": 186
      },
      {
        "x": 270,
        "y": 136
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
    "id": 338,
    "type": "circle",
    "x": 130,
    "y": 158,
    "timeMs": 70530,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 339,
    "type": "circle",
    "x": 177,
    "y": 146,
    "timeMs": 70710,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 340,
    "type": "slider",
    "x": 177,
    "y": 146,
    "timeMs": 70860,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 177,
        "y": 146
      },
      {
        "x": 215,
        "y": 103
      },
      {
        "x": 278,
        "y": 122
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
    "id": 341,
    "type": "circle",
    "x": 121,
    "y": 283,
    "timeMs": 71200,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 342,
    "type": "circle",
    "x": 130,
    "y": 328,
    "timeMs": 71380,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 343,
    "type": "circle",
    "x": 256,
    "y": 292,
    "timeMs": 71540,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 344,
    "type": "circle",
    "x": 241,
    "y": 345,
    "timeMs": 71700,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 345,
    "type": "circle",
    "x": 206,
    "y": 393,
    "timeMs": 71900,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 346,
    "type": "circle",
    "x": 137,
    "y": 184,
    "timeMs": 72220,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 347,
    "type": "circle",
    "x": 139,
    "y": 128,
    "timeMs": 72400,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 348,
    "type": "circle",
    "x": 163,
    "y": 130,
    "timeMs": 72550,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 349,
    "type": "slider",
    "x": 163,
    "y": 130,
    "timeMs": 72900,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 163,
        "y": 130
      },
      {
        "x": 151,
        "y": 184
      },
      {
        "x": 205,
        "y": 221
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
    "id": 350,
    "type": "circle",
    "x": 130,
    "y": 130,
    "timeMs": 73230,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 351,
    "type": "circle",
    "x": 308,
    "y": 393,
    "timeMs": 73430,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 352,
    "type": "circle",
    "x": 356,
    "y": 397,
    "timeMs": 73570,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 353,
    "type": "circle",
    "x": 415,
    "y": 381,
    "timeMs": 73730,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 354,
    "type": "circle",
    "x": 465,
    "y": 345,
    "timeMs": 73920,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 355,
    "type": "circle",
    "x": 496,
    "y": 299,
    "timeMs": 74100,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 356,
    "type": "circle",
    "x": 510,
    "y": 246,
    "timeMs": 74250,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 357,
    "type": "circle",
    "x": 505,
    "y": 190,
    "timeMs": 74410,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 358,
    "type": "circle",
    "x": 477,
    "y": 133,
    "timeMs": 74590,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 359,
    "type": "circle",
    "x": 434,
    "y": 355,
    "timeMs": 74790,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 360,
    "type": "circle",
    "x": 448,
    "y": 302,
    "timeMs": 74930,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 361,
    "type": "circle",
    "x": 483,
    "y": 250,
    "timeMs": 75130,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 362,
    "type": "circle",
    "x": 531,
    "y": 216,
    "timeMs": 75270,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 363,
    "type": "circle",
    "x": 581,
    "y": 202,
    "timeMs": 75440,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 364,
    "type": "circle",
    "x": 640,
    "y": 207,
    "timeMs": 75600,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 365,
    "type": "circle",
    "x": 687,
    "y": 228,
    "timeMs": 75770,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 366,
    "type": "circle",
    "x": 670,
    "y": 268,
    "timeMs": 75940,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 367,
    "type": "circle",
    "x": 552,
    "y": 373,
    "timeMs": 76120,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 368,
    "type": "circle",
    "x": 546,
    "y": 431,
    "timeMs": 76280,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 369,
    "type": "circle",
    "x": 378,
    "y": 283,
    "timeMs": 76620,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 370,
    "type": "circle",
    "x": 331,
    "y": 264,
    "timeMs": 76780,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 371,
    "type": "circle",
    "x": 281,
    "y": 263,
    "timeMs": 76960,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 372,
    "type": "circle",
    "x": 234,
    "y": 279,
    "timeMs": 77160,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 373,
    "type": "slider",
    "x": 234,
    "y": 279,
    "timeMs": 77300,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 234,
        "y": 279
      },
      {
        "x": 179,
        "y": 264
      },
      {
        "x": 146,
        "y": 334
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
    "id": 374,
    "type": "circle",
    "x": 333,
    "y": 208,
    "timeMs": 77640,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 375,
    "type": "circle",
    "x": 550,
    "y": 180,
    "timeMs": 77810,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 376,
    "type": "circle",
    "x": 431,
    "y": 368,
    "timeMs": 78140,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 377,
    "type": "circle",
    "x": 383,
    "y": 405,
    "timeMs": 78310,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 378,
    "type": "circle",
    "x": 336,
    "y": 420,
    "timeMs": 78500,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 379,
    "type": "circle",
    "x": 283,
    "y": 418,
    "timeMs": 78660,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 380,
    "type": "circle",
    "x": 234,
    "y": 397,
    "timeMs": 78840,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 381,
    "type": "circle",
    "x": 189,
    "y": 356,
    "timeMs": 79000,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 382,
    "type": "circle",
    "x": 160,
    "y": 300,
    "timeMs": 79170,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 383,
    "type": "circle",
    "x": 241,
    "y": 165,
    "timeMs": 79360,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 384,
    "type": "circle",
    "x": 192,
    "y": 145,
    "timeMs": 79500,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 385,
    "type": "circle",
    "x": 132,
    "y": 142,
    "timeMs": 79670,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 386,
    "type": "circle",
    "x": 130,
    "y": 160,
    "timeMs": 79840,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 387,
    "type": "circle",
    "x": 130,
    "y": 290,
    "timeMs": 80170,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 388,
    "type": "circle",
    "x": 182,
    "y": 304,
    "timeMs": 80350,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 389,
    "type": "circle",
    "x": 237,
    "y": 300,
    "timeMs": 80520,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 390,
    "type": "circle",
    "x": 286,
    "y": 277,
    "timeMs": 80680,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 391,
    "type": "circle",
    "x": 277,
    "y": 333,
    "timeMs": 80860,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 392,
    "type": "circle",
    "x": 338,
    "y": 350,
    "timeMs": 81010,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 393,
    "type": "circle",
    "x": 177,
    "y": 469,
    "timeMs": 81250,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 394,
    "type": "circle",
    "x": 126,
    "y": 484,
    "timeMs": 81410,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 395,
    "type": "circle",
    "x": 191,
    "y": 280,
    "timeMs": 81710,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 396,
    "type": "circle",
    "x": 278,
    "y": 490,
    "timeMs": 82060,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 397,
    "type": "slider",
    "x": 278,
    "y": 490,
    "timeMs": 82380,
    "durationMs": 280,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 278,
        "y": 490
      },
      {
        "x": 330,
        "y": 456
      },
      {
        "x": 310,
        "y": 386
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
    "id": 398,
    "type": "circle",
    "x": 316,
    "y": 470,
    "timeMs": 82740,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 399,
    "type": "circle",
    "x": 374,
    "y": 374,
    "timeMs": 82920,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 400,
    "type": "slider",
    "x": 374,
    "y": 374,
    "timeMs": 83070,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 374,
        "y": 374
      },
      {
        "x": 330,
        "y": 341
      },
      {
        "x": 320,
        "y": 290
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
    "id": 401,
    "type": "circle",
    "x": 484,
    "y": 440,
    "timeMs": 83400,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 402,
    "type": "circle",
    "x": 260,
    "y": 463,
    "timeMs": 83740,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 403,
    "type": "slider",
    "x": 260,
    "y": 463,
    "timeMs": 84080,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 260,
        "y": 463
      },
      {
        "x": 210,
        "y": 436
      },
      {
        "x": 158,
        "y": 483
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
    "id": 404,
    "type": "circle",
    "x": 351,
    "y": 368,
    "timeMs": 84420,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 405,
    "type": "circle",
    "x": 296,
    "y": 470,
    "timeMs": 84760,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 406,
    "type": "slider",
    "x": 296,
    "y": 470,
    "timeMs": 85090,
    "durationMs": 270,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 296,
        "y": 470
      },
      {
        "x": 251,
        "y": 431
      },
      {
        "x": 251,
        "y": 372
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
    "id": 407,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 85440,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 408,
    "type": "circle",
    "x": 670,
    "y": 438,
    "timeMs": 85770,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 409,
    "type": "circle",
    "x": 614,
    "y": 408,
    "timeMs": 85950,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 410,
    "type": "circle",
    "x": 580,
    "y": 371,
    "timeMs": 86110,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 411,
    "type": "circle",
    "x": 670,
    "y": 359,
    "timeMs": 86460,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 412,
    "type": "circle",
    "x": 619,
    "y": 337,
    "timeMs": 86620,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 413,
    "type": "circle",
    "x": 583,
    "y": 303,
    "timeMs": 86790,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 414,
    "type": "circle",
    "x": 670,
    "y": 270,
    "timeMs": 87140,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 415,
    "type": "circle",
    "x": 477,
    "y": 227,
    "timeMs": 87280,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 416,
    "type": "circle",
    "x": 433,
    "y": 254,
    "timeMs": 87480,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 417,
    "type": "circle",
    "x": 462,
    "y": 130,
    "timeMs": 87810,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 418,
    "type": "slider",
    "x": 462,
    "y": 130,
    "timeMs": 88150,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 462,
        "y": 130
      },
      {
        "x": 500,
        "y": 173
      },
      {
        "x": 496,
        "y": 228
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
    "id": 419,
    "type": "circle",
    "x": 390,
    "y": 130,
    "timeMs": 88490,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 420,
    "type": "circle",
    "x": 324,
    "y": 130,
    "timeMs": 88820,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 421,
    "type": "circle",
    "x": 327,
    "y": 188,
    "timeMs": 89000,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 422,
    "type": "circle",
    "x": 352,
    "y": 247,
    "timeMs": 89170,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 423,
    "type": "circle",
    "x": 333,
    "y": 248,
    "timeMs": 89360,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 424,
    "type": "circle",
    "x": 316,
    "y": 301,
    "timeMs": 89510,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 425,
    "type": "circle",
    "x": 284,
    "y": 344,
    "timeMs": 89680,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 426,
    "type": "circle",
    "x": 242,
    "y": 371,
    "timeMs": 89850,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 427,
    "type": "slider",
    "x": 242,
    "y": 371,
    "timeMs": 90030,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 242,
        "y": 371
      },
      {
        "x": 185,
        "y": 369
      },
      {
        "x": 160,
        "y": 435
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
    "id": 428,
    "type": "circle",
    "x": 266,
    "y": 237,
    "timeMs": 90370,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 429,
    "type": "circle",
    "x": 305,
    "y": 202,
    "timeMs": 90530,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 430,
    "type": "circle",
    "x": 352,
    "y": 183,
    "timeMs": 90710,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 431,
    "type": "circle",
    "x": 259,
    "y": 269,
    "timeMs": 90860,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 432,
    "type": "circle",
    "x": 287,
    "y": 216,
    "timeMs": 91030,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 433,
    "type": "circle",
    "x": 294,
    "y": 166,
    "timeMs": 91200,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 434,
    "type": "circle",
    "x": 283,
    "y": 111,
    "timeMs": 91390,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 435,
    "type": "circle",
    "x": 249,
    "y": 130,
    "timeMs": 91550,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 436,
    "type": "circle",
    "x": 237,
    "y": 186,
    "timeMs": 91710,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 437,
    "type": "circle",
    "x": 245,
    "y": 241,
    "timeMs": 91900,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 438,
    "type": "circle",
    "x": 273,
    "y": 293,
    "timeMs": 92060,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 439,
    "type": "circle",
    "x": 349,
    "y": 472,
    "timeMs": 92230,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 440,
    "type": "circle",
    "x": 336,
    "y": 470,
    "timeMs": 92410,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 441,
    "type": "circle",
    "x": 343,
    "y": 420,
    "timeMs": 92570,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 442,
    "type": "slider",
    "x": 343,
    "y": 420,
    "timeMs": 92740,
    "durationMs": 280,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 343,
        "y": 420
      },
      {
        "x": 316,
        "y": 365
      },
      {
        "x": 352,
        "y": 308
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
    "id": 443,
    "type": "circle",
    "x": 371,
    "y": 470,
    "timeMs": 93100,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 444,
    "type": "circle",
    "x": 392,
    "y": 425,
    "timeMs": 93240,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 445,
    "type": "circle",
    "x": 425,
    "y": 470,
    "timeMs": 93460,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 446,
    "type": "circle",
    "x": 453,
    "y": 422,
    "timeMs": 93620,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 447,
    "type": "circle",
    "x": 546,
    "y": 321,
    "timeMs": 93760,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 448,
    "type": "circle",
    "x": 536,
    "y": 263,
    "timeMs": 93940,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 449,
    "type": "circle",
    "x": 510,
    "y": 218,
    "timeMs": 94090,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 450,
    "type": "circle",
    "x": 670,
    "y": 257,
    "timeMs": 94430,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 451,
    "type": "circle",
    "x": 618,
    "y": 287,
    "timeMs": 94600,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 452,
    "type": "circle",
    "x": 583,
    "y": 328,
    "timeMs": 94780,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 453,
    "type": "circle",
    "x": 563,
    "y": 381,
    "timeMs": 94940,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 454,
    "type": "circle",
    "x": 563,
    "y": 445,
    "timeMs": 95120,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 455,
    "type": "circle",
    "x": 539,
    "y": 297,
    "timeMs": 95280,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 456,
    "type": "circle",
    "x": 504,
    "y": 339,
    "timeMs": 95450,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 457,
    "type": "slider",
    "x": 504,
    "y": 339,
    "timeMs": 95620,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 504,
        "y": 339
      },
      {
        "x": 451,
        "y": 354
      },
      {
        "x": 457,
        "y": 427
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
    "id": 458,
    "type": "circle",
    "x": 506,
    "y": 210,
    "timeMs": 95950,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 459,
    "type": "circle",
    "x": 533,
    "y": 168,
    "timeMs": 96150,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 460,
    "type": "circle",
    "x": 573,
    "y": 138,
    "timeMs": 96330,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 461,
    "type": "circle",
    "x": 631,
    "y": 120,
    "timeMs": 96480,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 462,
    "type": "circle",
    "x": 670,
    "y": 123,
    "timeMs": 96630,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 463,
    "type": "circle",
    "x": 329,
    "y": 202,
    "timeMs": 96810,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 464,
    "type": "circle",
    "x": 288,
    "y": 240,
    "timeMs": 96980,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 465,
    "type": "circle",
    "x": 264,
    "y": 288,
    "timeMs": 97140,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 466,
    "type": "circle",
    "x": 258,
    "y": 335,
    "timeMs": 97320,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 467,
    "type": "circle",
    "x": 269,
    "y": 384,
    "timeMs": 97470,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 468,
    "type": "circle",
    "x": 296,
    "y": 425,
    "timeMs": 97670,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 469,
    "type": "circle",
    "x": 340,
    "y": 458,
    "timeMs": 97820,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 470,
    "type": "circle",
    "x": 389,
    "y": 473,
    "timeMs": 97990,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 471,
    "type": "circle",
    "x": 268,
    "y": 302,
    "timeMs": 98170,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 472,
    "type": "circle",
    "x": 302,
    "y": 353,
    "timeMs": 98340,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 473,
    "type": "circle",
    "x": 314,
    "y": 407,
    "timeMs": 98520,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 474,
    "type": "circle",
    "x": 308,
    "y": 457,
    "timeMs": 98670,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 475,
    "type": "circle",
    "x": 283,
    "y": 470,
    "timeMs": 98850,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 476,
    "type": "circle",
    "x": 277,
    "y": 421,
    "timeMs": 99020,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 477,
    "type": "circle",
    "x": 446,
    "y": 470,
    "timeMs": 99340,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 478,
    "type": "circle",
    "x": 504,
    "y": 449,
    "timeMs": 99530,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 479,
    "type": "circle",
    "x": 344,
    "y": 357,
    "timeMs": 99680,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 480,
    "type": "circle",
    "x": 375,
    "y": 304,
    "timeMs": 99860,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 481,
    "type": "circle",
    "x": 383,
    "y": 256,
    "timeMs": 100030,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 482,
    "type": "circle",
    "x": 373,
    "y": 200,
    "timeMs": 100220,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 483,
    "type": "circle",
    "x": 342,
    "y": 147,
    "timeMs": 100370,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 484,
    "type": "circle",
    "x": 297,
    "y": 130,
    "timeMs": 100550,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 485,
    "type": "circle",
    "x": 268,
    "y": 181,
    "timeMs": 100710,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 486,
    "type": "circle",
    "x": 257,
    "y": 243,
    "timeMs": 100880,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 487,
    "type": "circle",
    "x": 470,
    "y": 450,
    "timeMs": 101050,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 488,
    "type": "circle",
    "x": 429,
    "y": 484,
    "timeMs": 101220,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 489,
    "type": "circle",
    "x": 375,
    "y": 470,
    "timeMs": 101390,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 490,
    "type": "circle",
    "x": 330,
    "y": 432,
    "timeMs": 101530,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 491,
    "type": "circle",
    "x": 299,
    "y": 379,
    "timeMs": 101720,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 492,
    "type": "circle",
    "x": 289,
    "y": 322,
    "timeMs": 101890,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 493,
    "type": "circle",
    "x": 297,
    "y": 274,
    "timeMs": 102070,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 494,
    "type": "circle",
    "x": 323,
    "y": 229,
    "timeMs": 102230,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 495,
    "type": "circle",
    "x": 586,
    "y": 218,
    "timeMs": 102410,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 496,
    "type": "circle",
    "x": 577,
    "y": 169,
    "timeMs": 102570,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 497,
    "type": "circle",
    "x": 547,
    "y": 116,
    "timeMs": 102750,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 498,
    "type": "circle",
    "x": 506,
    "y": 130,
    "timeMs": 102920,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 499,
    "type": "slider",
    "x": 506,
    "y": 130,
    "timeMs": 103100,
    "durationMs": 240,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 506,
        "y": 130
      },
      {
        "x": 453,
        "y": 135
      },
      {
        "x": 422,
        "y": 176
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
    "id": 500,
    "type": "circle",
    "x": 560,
    "y": 130,
    "timeMs": 103420,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 501,
    "type": "circle",
    "x": 612,
    "y": 161,
    "timeMs": 103590,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 502,
    "type": "circle",
    "x": 670,
    "y": 173,
    "timeMs": 103760,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 503,
    "type": "circle",
    "x": 476,
    "y": 210,
    "timeMs": 103930,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 504,
    "type": "circle",
    "x": 509,
    "y": 251,
    "timeMs": 104100,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 505,
    "type": "circle",
    "x": 526,
    "y": 301,
    "timeMs": 104280,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 506,
    "type": "circle",
    "x": 525,
    "y": 351,
    "timeMs": 104440,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 507,
    "type": "circle",
    "x": 391,
    "y": 170,
    "timeMs": 104780,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 508,
    "type": "circle",
    "x": 376,
    "y": 121,
    "timeMs": 104950,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 509,
    "type": "circle",
    "x": 379,
    "y": 130,
    "timeMs": 105120,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 510,
    "type": "circle",
    "x": 362,
    "y": 189,
    "timeMs": 105310,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 511,
    "type": "circle",
    "x": 249,
    "y": 300,
    "timeMs": 105460,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 512,
    "type": "circle",
    "x": 274,
    "y": 357,
    "timeMs": 105640,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 513,
    "type": "circle",
    "x": 313,
    "y": 398,
    "timeMs": 105800,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 514,
    "type": "circle",
    "x": 363,
    "y": 423,
    "timeMs": 105990,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 515,
    "type": "circle",
    "x": 425,
    "y": 429,
    "timeMs": 106140,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 516,
    "type": "circle",
    "x": 475,
    "y": 417,
    "timeMs": 106320,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 517,
    "type": "circle",
    "x": 528,
    "y": 381,
    "timeMs": 106470,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 518,
    "type": "circle",
    "x": 561,
    "y": 336,
    "timeMs": 106650,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 519,
    "type": "circle",
    "x": 309,
    "y": 340,
    "timeMs": 106810,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 520,
    "type": "circle",
    "x": 359,
    "y": 328,
    "timeMs": 107000,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 521,
    "type": "circle",
    "x": 414,
    "y": 334,
    "timeMs": 107160,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 522,
    "type": "circle",
    "x": 468,
    "y": 360,
    "timeMs": 107330,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 523,
    "type": "circle",
    "x": 506,
    "y": 400,
    "timeMs": 107490,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 524,
    "type": "circle",
    "x": 531,
    "y": 458,
    "timeMs": 107660,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 525,
    "type": "circle",
    "x": 535,
    "y": 470,
    "timeMs": 107840,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 526,
    "type": "circle",
    "x": 558,
    "y": 416,
    "timeMs": 108000,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 527,
    "type": "circle",
    "x": 455,
    "y": 366,
    "timeMs": 108170,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 528,
    "type": "circle",
    "x": 439,
    "y": 309,
    "timeMs": 108370,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 529,
    "type": "slider",
    "x": 439,
    "y": 309,
    "timeMs": 108520,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 439,
        "y": 309
      },
      {
        "x": 456,
        "y": 257
      },
      {
        "x": 399,
        "y": 217
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
    "id": 530,
    "type": "circle",
    "x": 542,
    "y": 388,
    "timeMs": 108850,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 531,
    "type": "circle",
    "x": 583,
    "y": 412,
    "timeMs": 109020,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 532,
    "type": "circle",
    "x": 638,
    "y": 421,
    "timeMs": 109190,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 533,
    "type": "circle",
    "x": 670,
    "y": 412,
    "timeMs": 109370,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 534,
    "type": "circle",
    "x": 615,
    "y": 421,
    "timeMs": 109530,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 535,
    "type": "circle",
    "x": 529,
    "y": 300,
    "timeMs": 109700,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 536,
    "type": "circle",
    "x": 483,
    "y": 273,
    "timeMs": 109870,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 537,
    "type": "circle",
    "x": 449,
    "y": 233,
    "timeMs": 110040,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 538,
    "type": "circle",
    "x": 431,
    "y": 182,
    "timeMs": 110210,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 539,
    "type": "circle",
    "x": 431,
    "y": 132,
    "timeMs": 110370,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 540,
    "type": "circle",
    "x": 453,
    "y": 130,
    "timeMs": 110550,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 541,
    "type": "circle",
    "x": 454,
    "y": 191,
    "timeMs": 110720,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 542,
    "type": "circle",
    "x": 437,
    "y": 237,
    "timeMs": 110880,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 543,
    "type": "circle",
    "x": 478,
    "y": 250,
    "timeMs": 111060,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 544,
    "type": "slider",
    "x": 478,
    "y": 250,
    "timeMs": 111230,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 478,
        "y": 250
      },
      {
        "x": 511,
        "y": 297
      },
      {
        "x": 475,
        "y": 354
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
    "id": 545,
    "type": "circle",
    "x": 427,
    "y": 134,
    "timeMs": 111570,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 546,
    "type": "circle",
    "x": 399,
    "y": 130,
    "timeMs": 111740,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 547,
    "type": "circle",
    "x": 387,
    "y": 183,
    "timeMs": 111910,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 548,
    "type": "circle",
    "x": 395,
    "y": 235,
    "timeMs": 112080,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 549,
    "type": "circle",
    "x": 419,
    "y": 282,
    "timeMs": 112250,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 550,
    "type": "circle",
    "x": 457,
    "y": 316,
    "timeMs": 112420,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 551,
    "type": "circle",
    "x": 302,
    "y": 260,
    "timeMs": 112580,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 552,
    "type": "circle",
    "x": 310,
    "y": 319,
    "timeMs": 112760,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 553,
    "type": "circle",
    "x": 297,
    "y": 379,
    "timeMs": 112930,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 554,
    "type": "circle",
    "x": 266,
    "y": 429,
    "timeMs": 113110,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 555,
    "type": "circle",
    "x": 225,
    "y": 460,
    "timeMs": 113270,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 556,
    "type": "circle",
    "x": 172,
    "y": 477,
    "timeMs": 113440,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 557,
    "type": "circle",
    "x": 122,
    "y": 475,
    "timeMs": 113610,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 558,
    "type": "circle",
    "x": 130,
    "y": 455,
    "timeMs": 113790,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 559,
    "type": "slider",
    "x": 233,
    "y": 345,
    "timeMs": 113950,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 233,
        "y": 345
      },
      {
        "x": 289,
        "y": 357
      },
      {
        "x": 319,
        "y": 287
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
    "id": 560,
    "type": "circle",
    "x": 185,
    "y": 467,
    "timeMs": 114290,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 561,
    "type": "circle",
    "x": 169,
    "y": 470,
    "timeMs": 114490,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 562,
    "type": "slider",
    "x": 169,
    "y": 470,
    "timeMs": 114650,
    "durationMs": 240,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 169,
        "y": 470
      },
      {
        "x": 128,
        "y": 437
      },
      {
        "x": 149,
        "y": 376
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
    "id": 563,
    "type": "circle",
    "x": 282,
    "y": 470,
    "timeMs": 114970,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 564,
    "type": "circle",
    "x": 299,
    "y": 416,
    "timeMs": 115120,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 565,
    "type": "circle",
    "x": 296,
    "y": 363,
    "timeMs": 115330,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 566,
    "type": "circle",
    "x": 273,
    "y": 309,
    "timeMs": 115470,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 567,
    "type": "circle",
    "x": 399,
    "y": 359,
    "timeMs": 115660,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 568,
    "type": "circle",
    "x": 415,
    "y": 308,
    "timeMs": 115830,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 569,
    "type": "circle",
    "x": 450,
    "y": 261,
    "timeMs": 115990,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 570,
    "type": "circle",
    "x": 493,
    "y": 482,
    "timeMs": 116330,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 571,
    "type": "circle",
    "x": 485,
    "y": 470,
    "timeMs": 116520,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 572,
    "type": "circle",
    "x": 497,
    "y": 408,
    "timeMs": 116660,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 573,
    "type": "circle",
    "x": 530,
    "y": 354,
    "timeMs": 116860,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 574,
    "type": "circle",
    "x": 568,
    "y": 323,
    "timeMs": 117010,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 575,
    "type": "circle",
    "x": 597,
    "y": 294,
    "timeMs": 117200,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 576,
    "type": "circle",
    "x": 607,
    "y": 242,
    "timeMs": 117340,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 577,
    "type": "circle",
    "x": 598,
    "y": 185,
    "timeMs": 117540,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 578,
    "type": "circle",
    "x": 569,
    "y": 132,
    "timeMs": 117680,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 579,
    "type": "circle",
    "x": 526,
    "y": 130,
    "timeMs": 117870,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 580,
    "type": "circle",
    "x": 497,
    "y": 182,
    "timeMs": 118020,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 581,
    "type": "circle",
    "x": 487,
    "y": 244,
    "timeMs": 118210,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 582,
    "type": "circle",
    "x": 499,
    "y": 301,
    "timeMs": 118370,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 583,
    "type": "circle",
    "x": 511,
    "y": 268,
    "timeMs": 118530,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 584,
    "type": "circle",
    "x": 486,
    "y": 312,
    "timeMs": 118700,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 585,
    "type": "circle",
    "x": 446,
    "y": 346,
    "timeMs": 118890,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 586,
    "type": "circle",
    "x": 393,
    "y": 367,
    "timeMs": 119050,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 587,
    "type": "circle",
    "x": 334,
    "y": 367,
    "timeMs": 119200,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 588,
    "type": "circle",
    "x": 283,
    "y": 349,
    "timeMs": 119380,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 589,
    "type": "circle",
    "x": 237,
    "y": 312,
    "timeMs": 119560,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 590,
    "type": "circle",
    "x": 212,
    "y": 268,
    "timeMs": 119720,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 591,
    "type": "circle",
    "x": 273,
    "y": 156,
    "timeMs": 119900,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 592,
    "type": "circle",
    "x": 218,
    "y": 137,
    "timeMs": 120070,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 593,
    "type": "circle",
    "x": 160,
    "y": 137,
    "timeMs": 120250,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 594,
    "type": "circle",
    "x": 112,
    "y": 155,
    "timeMs": 120400,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 595,
    "type": "circle",
    "x": 130,
    "y": 192,
    "timeMs": 120590,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 596,
    "type": "circle",
    "x": 190,
    "y": 215,
    "timeMs": 120740,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 597,
    "type": "circle",
    "x": 240,
    "y": 215,
    "timeMs": 120910,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 598,
    "type": "circle",
    "x": 300,
    "y": 194,
    "timeMs": 121080,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 599,
    "type": "circle",
    "x": 274,
    "y": 313,
    "timeMs": 121270,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 600,
    "type": "circle",
    "x": 321,
    "y": 330,
    "timeMs": 121420,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 601,
    "type": "circle",
    "x": 361,
    "y": 365,
    "timeMs": 121610,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 602,
    "type": "circle",
    "x": 387,
    "y": 411,
    "timeMs": 121760,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 603,
    "type": "circle",
    "x": 396,
    "y": 469,
    "timeMs": 121940,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 604,
    "type": "slider",
    "x": 396,
    "y": 469,
    "timeMs": 122110,
    "durationMs": 240,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 396,
        "y": 469
      },
      {
        "x": 373,
        "y": 421
      },
      {
        "x": 402,
        "y": 374
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
    "id": 605,
    "type": "circle",
    "x": 414,
    "y": 470,
    "timeMs": 122430,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 606,
    "type": "circle",
    "x": 436,
    "y": 419,
    "timeMs": 122610,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 607,
    "type": "circle",
    "x": 355,
    "y": 360,
    "timeMs": 122800,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 608,
    "type": "circle",
    "x": 339,
    "y": 305,
    "timeMs": 122960,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 609,
    "type": "circle",
    "x": 308,
    "y": 265,
    "timeMs": 123120,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 610,
    "type": "circle",
    "x": 256,
    "y": 230,
    "timeMs": 123300,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 611,
    "type": "circle",
    "x": 199,
    "y": 217,
    "timeMs": 123460,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 612,
    "type": "circle",
    "x": 406,
    "y": 130,
    "timeMs": 123800,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 613,
    "type": "circle",
    "x": 452,
    "y": 130,
    "timeMs": 123970,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 614,
    "type": "circle",
    "x": 506,
    "y": 153,
    "timeMs": 124140,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 615,
    "type": "circle",
    "x": 584,
    "y": 409,
    "timeMs": 124310,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 616,
    "type": "circle",
    "x": 609,
    "y": 458,
    "timeMs": 124480,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 617,
    "type": "circle",
    "x": 616,
    "y": 470,
    "timeMs": 124660,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 618,
    "type": "circle",
    "x": 644,
    "y": 414,
    "timeMs": 124840,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 619,
    "type": "circle",
    "x": 682,
    "y": 379,
    "timeMs": 125000,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 620,
    "type": "circle",
    "x": 670,
    "y": 355,
    "timeMs": 125160,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 621,
    "type": "circle",
    "x": 626,
    "y": 314,
    "timeMs": 125340,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 622,
    "type": "circle",
    "x": 597,
    "y": 258,
    "timeMs": 125520,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 623,
    "type": "circle",
    "x": 515,
    "y": 202,
    "timeMs": 125670,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 624,
    "type": "circle",
    "x": 469,
    "y": 182,
    "timeMs": 125840,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 625,
    "type": "circle",
    "x": 689,
    "y": 135,
    "timeMs": 126180,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 626,
    "type": "circle",
    "x": 670,
    "y": 130,
    "timeMs": 126360,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 627,
    "type": "circle",
    "x": 635,
    "y": 175,
    "timeMs": 126520,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 628,
    "type": "circle",
    "x": 616,
    "y": 234,
    "timeMs": 126710,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 629,
    "type": "circle",
    "x": 618,
    "y": 298,
    "timeMs": 126890,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 630,
    "type": "circle",
    "x": 640,
    "y": 351,
    "timeMs": 127030,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 631,
    "type": "circle",
    "x": 368,
    "y": 236,
    "timeMs": 127190,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 632,
    "type": "circle",
    "x": 350,
    "y": 294,
    "timeMs": 127370,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 633,
    "type": "circle",
    "x": 312,
    "y": 343,
    "timeMs": 127540,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 634,
    "type": "circle",
    "x": 268,
    "y": 370,
    "timeMs": 127720,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 635,
    "type": "circle",
    "x": 216,
    "y": 381,
    "timeMs": 127870,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 636,
    "type": "circle",
    "x": 161,
    "y": 373,
    "timeMs": 128070,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 637,
    "type": "circle",
    "x": 111,
    "y": 346,
    "timeMs": 128210,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 638,
    "type": "circle",
    "x": 130,
    "y": 303,
    "timeMs": 128390,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 639,
    "type": "circle",
    "x": 244,
    "y": 225,
    "timeMs": 128560,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 640,
    "type": "circle",
    "x": 246,
    "y": 168,
    "timeMs": 128740,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 641,
    "type": "circle",
    "x": 227,
    "y": 130,
    "timeMs": 128900,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 642,
    "type": "circle",
    "x": 228,
    "y": 182,
    "timeMs": 129060,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 643,
    "type": "circle",
    "x": 247,
    "y": 229,
    "timeMs": 129240,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 644,
    "type": "circle",
    "x": 282,
    "y": 268,
    "timeMs": 129410,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 645,
    "type": "circle",
    "x": 330,
    "y": 294,
    "timeMs": 129610,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 646,
    "type": "circle",
    "x": 392,
    "y": 303,
    "timeMs": 129760,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 647,
    "type": "circle",
    "x": 356,
    "y": 429,
    "timeMs": 129920,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 648,
    "type": "circle",
    "x": 396,
    "y": 473,
    "timeMs": 130100,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 649,
    "type": "circle",
    "x": 417,
    "y": 470,
    "timeMs": 130260,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 650,
    "type": "circle",
    "x": 452,
    "y": 431,
    "timeMs": 130440,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 651,
    "type": "circle",
    "x": 508,
    "y": 401,
    "timeMs": 130600,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 652,
    "type": "circle",
    "x": 566,
    "y": 393,
    "timeMs": 130770,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 653,
    "type": "circle",
    "x": 622,
    "y": 404,
    "timeMs": 130930,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 654,
    "type": "circle",
    "x": 664,
    "y": 431,
    "timeMs": 131110,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 655,
    "type": "circle",
    "x": 559,
    "y": 406,
    "timeMs": 131290,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 656,
    "type": "circle",
    "x": 610,
    "y": 399,
    "timeMs": 131460,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 657,
    "type": "circle",
    "x": 654,
    "y": 376,
    "timeMs": 131620,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 658,
    "type": "circle",
    "x": 670,
    "y": 333,
    "timeMs": 131810,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 659,
    "type": "circle",
    "x": 618,
    "y": 305,
    "timeMs": 131960,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 660,
    "type": "circle",
    "x": 556,
    "y": 296,
    "timeMs": 132130,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 661,
    "type": "circle",
    "x": 496,
    "y": 308,
    "timeMs": 132290,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 662,
    "type": "circle",
    "x": 443,
    "y": 342,
    "timeMs": 132460,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 663,
    "type": "circle",
    "x": 519,
    "y": 279,
    "timeMs": 132630,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 664,
    "type": "circle",
    "x": 457,
    "y": 270,
    "timeMs": 132800,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 665,
    "type": "circle",
    "x": 405,
    "y": 242,
    "timeMs": 132980,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 666,
    "type": "circle",
    "x": 373,
    "y": 206,
    "timeMs": 133160,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 667,
    "type": "circle",
    "x": 351,
    "y": 150,
    "timeMs": 133320,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 668,
    "type": "circle",
    "x": 349,
    "y": 130,
    "timeMs": 133480,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 669,
    "type": "circle",
    "x": 330,
    "y": 178,
    "timeMs": 133660,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 670,
    "type": "circle",
    "x": 291,
    "y": 222,
    "timeMs": 133830,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 671,
    "type": "circle",
    "x": 395,
    "y": 236,
    "timeMs": 133990,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 672,
    "type": "circle",
    "x": 393,
    "y": 293,
    "timeMs": 134150,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 673,
    "type": "circle",
    "x": 408,
    "y": 339,
    "timeMs": 134330,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 674,
    "type": "circle",
    "x": 445,
    "y": 386,
    "timeMs": 134520,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 675,
    "type": "circle",
    "x": 495,
    "y": 416,
    "timeMs": 134670,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 676,
    "type": "circle",
    "x": 557,
    "y": 429,
    "timeMs": 134850,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 677,
    "type": "circle",
    "x": 611,
    "y": 421,
    "timeMs": 135030,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 678,
    "type": "circle",
    "x": 664,
    "y": 392,
    "timeMs": 135180,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 679,
    "type": "circle",
    "x": 299,
    "y": 237,
    "timeMs": 135350,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 680,
    "type": "circle",
    "x": 358,
    "y": 249,
    "timeMs": 135530,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 681,
    "type": "circle",
    "x": 409,
    "y": 281,
    "timeMs": 135700,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 682,
    "type": "circle",
    "x": 442,
    "y": 322,
    "timeMs": 135860,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 683,
    "type": "circle",
    "x": 460,
    "y": 377,
    "timeMs": 136030,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 684,
    "type": "circle",
    "x": 458,
    "y": 439,
    "timeMs": 136200,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 685,
    "type": "circle",
    "x": 440,
    "y": 485,
    "timeMs": 136380,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 686,
    "type": "circle",
    "x": 401,
    "y": 470,
    "timeMs": 136540,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 687,
    "type": "circle",
    "x": 223,
    "y": 357,
    "timeMs": 136710,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 688,
    "type": "circle",
    "x": 160,
    "y": 348,
    "timeMs": 136890,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 689,
    "type": "circle",
    "x": 111,
    "y": 359,
    "timeMs": 137060,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 690,
    "type": "circle",
    "x": 130,
    "y": 390,
    "timeMs": 137270,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 691,
    "type": "circle",
    "x": 185,
    "y": 401,
    "timeMs": 137420,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 692,
    "type": "circle",
    "x": 246,
    "y": 393,
    "timeMs": 137570,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 693,
    "type": "circle",
    "x": 297,
    "y": 365,
    "timeMs": 137770,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 694,
    "type": "circle",
    "x": 339,
    "y": 318,
    "timeMs": 137920,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 695,
    "type": "circle",
    "x": 519,
    "y": 383,
    "timeMs": 138090,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 696,
    "type": "circle",
    "x": 440,
    "y": 470,
    "timeMs": 138420,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 697,
    "type": "circle",
    "x": 439,
    "y": 411,
    "timeMs": 138620,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 698,
    "type": "circle",
    "x": 456,
    "y": 363,
    "timeMs": 138780,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 699,
    "type": "circle",
    "x": 496,
    "y": 314,
    "timeMs": 138940,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 700,
    "type": "circle",
    "x": 533,
    "y": 470,
    "timeMs": 139160,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 701,
    "type": "circle",
    "x": 658,
    "y": 470,
    "timeMs": 139460,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 702,
    "type": "circle",
    "x": 670,
    "y": 470,
    "timeMs": 139800,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 703,
    "type": "circle",
    "x": 549,
    "y": 256,
    "timeMs": 139980,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 704,
    "type": "circle",
    "x": 499,
    "y": 220,
    "timeMs": 140150,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 705,
    "type": "circle",
    "x": 446,
    "y": 206,
    "timeMs": 140320,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 706,
    "type": "circle",
    "x": 392,
    "y": 211,
    "timeMs": 140530,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 707,
    "type": "circle",
    "x": 343,
    "y": 234,
    "timeMs": 140680,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 708,
    "type": "circle",
    "x": 302,
    "y": 274,
    "timeMs": 140830,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 709,
    "type": "circle",
    "x": 276,
    "y": 329,
    "timeMs": 141030,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 710,
    "type": "circle",
    "x": 271,
    "y": 389,
    "timeMs": 141180,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 711,
    "type": "circle",
    "x": 441,
    "y": 242,
    "timeMs": 141360,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 712,
    "type": "circle",
    "x": 406,
    "y": 277,
    "timeMs": 141510,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 713,
    "type": "circle",
    "x": 359,
    "y": 299,
    "timeMs": 141690,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 714,
    "type": "circle",
    "x": 460,
    "y": 133,
    "timeMs": 141910,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 715,
    "type": "circle",
    "x": 505,
    "y": 130,
    "timeMs": 142050,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 716,
    "type": "circle",
    "x": 534,
    "y": 177,
    "timeMs": 142240,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 717,
    "type": "circle",
    "x": 321,
    "y": 121,
    "timeMs": 142560,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 718,
    "type": "circle",
    "x": 270,
    "y": 130,
    "timeMs": 142740,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 719,
    "type": "circle",
    "x": 236,
    "y": 263,
    "timeMs": 142920,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 720,
    "type": "circle",
    "x": 220,
    "y": 322,
    "timeMs": 143080,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 721,
    "type": "slider",
    "x": 220,
    "y": 322,
    "timeMs": 143250,
    "durationMs": 270,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 220,
        "y": 322
      },
      {
        "x": 175,
        "y": 361
      },
      {
        "x": 202,
        "y": 428
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
    "id": 722,
    "type": "circle",
    "x": 155,
    "y": 205,
    "timeMs": 143600,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 723,
    "type": "circle",
    "x": 122,
    "y": 153,
    "timeMs": 143770,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 724,
    "type": "circle",
    "x": 130,
    "y": 117,
    "timeMs": 143940,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 725,
    "type": "circle",
    "x": 114,
    "y": 312,
    "timeMs": 144160,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 726,
    "type": "circle",
    "x": 130,
    "y": 159,
    "timeMs": 144450,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 727,
    "type": "circle",
    "x": 241,
    "y": 470,
    "timeMs": 144800,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 728,
    "type": "circle",
    "x": 260,
    "y": 423,
    "timeMs": 144970,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 729,
    "type": "circle",
    "x": 296,
    "y": 381,
    "timeMs": 145140,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 730,
    "type": "circle",
    "x": 344,
    "y": 354,
    "timeMs": 145320,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 731,
    "type": "circle",
    "x": 405,
    "y": 345,
    "timeMs": 145500,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 732,
    "type": "circle",
    "x": 465,
    "y": 357,
    "timeMs": 145660,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 733,
    "type": "circle",
    "x": 511,
    "y": 385,
    "timeMs": 145830,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 734,
    "type": "circle",
    "x": 551,
    "y": 434,
    "timeMs": 146000,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 735,
    "type": "circle",
    "x": 463,
    "y": 449,
    "timeMs": 146170,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 736,
    "type": "circle",
    "x": 511,
    "y": 458,
    "timeMs": 146350,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 737,
    "type": "circle",
    "x": 563,
    "y": 450,
    "timeMs": 146520,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 738,
    "type": "circle",
    "x": 607,
    "y": 426,
    "timeMs": 146710,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 739,
    "type": "circle",
    "x": 642,
    "y": 385,
    "timeMs": 146860,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 740,
    "type": "circle",
    "x": 660,
    "y": 338,
    "timeMs": 147030,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 741,
    "type": "circle",
    "x": 661,
    "y": 278,
    "timeMs": 147200,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 742,
    "type": "circle",
    "x": 645,
    "y": 233,
    "timeMs": 147390,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 743,
    "type": "circle",
    "x": 573,
    "y": 279,
    "timeMs": 147550,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 744,
    "type": "circle",
    "x": 592,
    "y": 232,
    "timeMs": 147720,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 745,
    "type": "circle",
    "x": 628,
    "y": 190,
    "timeMs": 147890,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 746,
    "type": "circle",
    "x": 679,
    "y": 161,
    "timeMs": 148060,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 747,
    "type": "circle",
    "x": 670,
    "y": 152,
    "timeMs": 148240,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 748,
    "type": "circle",
    "x": 615,
    "y": 122,
    "timeMs": 148410,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 749,
    "type": "circle",
    "x": 575,
    "y": 130,
    "timeMs": 148580,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 750,
    "type": "circle",
    "x": 520,
    "y": 161,
    "timeMs": 148750,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 751,
    "type": "circle",
    "x": 479,
    "y": 242,
    "timeMs": 148920,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 752,
    "type": "circle",
    "x": 459,
    "y": 294,
    "timeMs": 149090,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 753,
    "type": "circle",
    "x": 458,
    "y": 355,
    "timeMs": 149270,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 754,
    "type": "circle",
    "x": 478,
    "y": 413,
    "timeMs": 149440,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 755,
    "type": "circle",
    "x": 278,
    "y": 360,
    "timeMs": 149710,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 756,
    "type": "circle",
    "x": 506,
    "y": 271,
    "timeMs": 150130,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 757,
    "type": "circle",
    "x": 413,
    "y": 476,
    "timeMs": 150470,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 758,
    "type": "circle",
    "x": 409,
    "y": 470,
    "timeMs": 150650,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 759,
    "type": "circle",
    "x": 321,
    "y": 149,
    "timeMs": 150840,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 760,
    "type": "circle",
    "x": 391,
    "y": 360,
    "timeMs": 151170,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 761,
    "type": "circle",
    "x": 390,
    "y": 412,
    "timeMs": 151370,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 762,
    "type": "circle",
    "x": 370,
    "y": 462,
    "timeMs": 151510,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 763,
    "type": "circle",
    "x": 269,
    "y": 261,
    "timeMs": 151850,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 764,
    "type": "circle",
    "x": 262,
    "y": 201,
    "timeMs": 152060,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 765,
    "type": "circle",
    "x": 275,
    "y": 142,
    "timeMs": 152210,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 766,
    "type": "slider",
    "x": 275,
    "y": 142,
    "timeMs": 152550,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 275,
        "y": 142
      },
      {
        "x": 317,
        "y": 181
      },
      {
        "x": 275,
        "y": 243
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
    "id": 767,
    "type": "circle",
    "x": 130,
    "y": 147,
    "timeMs": 152890,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 768,
    "type": "circle",
    "x": 178,
    "y": 366,
    "timeMs": 153230,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 769,
    "type": "circle",
    "x": 210,
    "y": 417,
    "timeMs": 153420,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 770,
    "type": "circle",
    "x": 249,
    "y": 447,
    "timeMs": 153580,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 771,
    "type": "circle",
    "x": 307,
    "y": 465,
    "timeMs": 153780,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 772,
    "type": "circle",
    "x": 357,
    "y": 463,
    "timeMs": 153930,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 773,
    "type": "circle",
    "x": 416,
    "y": 438,
    "timeMs": 154110,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 774,
    "type": "circle",
    "x": 461,
    "y": 396,
    "timeMs": 154280,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 775,
    "type": "circle",
    "x": 418,
    "y": 395,
    "timeMs": 154470,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 776,
    "type": "circle",
    "x": 471,
    "y": 393,
    "timeMs": 154620,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 777,
    "type": "circle",
    "x": 527,
    "y": 410,
    "timeMs": 154790,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 778,
    "type": "circle",
    "x": 570,
    "y": 444,
    "timeMs": 154960,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 779,
    "type": "circle",
    "x": 600,
    "y": 470,
    "timeMs": 155150,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 780,
    "type": "circle",
    "x": 641,
    "y": 439,
    "timeMs": 155310,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 781,
    "type": "circle",
    "x": 670,
    "y": 421,
    "timeMs": 155500,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 782,
    "type": "circle",
    "x": 632,
    "y": 391,
    "timeMs": 155650,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 783,
    "type": "circle",
    "x": 670,
    "y": 295,
    "timeMs": 156000,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 784,
    "type": "circle",
    "x": 612,
    "y": 297,
    "timeMs": 156180,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 785,
    "type": "circle",
    "x": 554,
    "y": 321,
    "timeMs": 156350,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 786,
    "type": "circle",
    "x": 515,
    "y": 356,
    "timeMs": 156550,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 787,
    "type": "circle",
    "x": 489,
    "y": 407,
    "timeMs": 156730,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 788,
    "type": "circle",
    "x": 481,
    "y": 465,
    "timeMs": 156910,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 789,
    "type": "circle",
    "x": 492,
    "y": 470,
    "timeMs": 157060,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 790,
    "type": "circle",
    "x": 624,
    "y": 470,
    "timeMs": 157390,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 791,
    "type": "circle",
    "x": 586,
    "y": 203,
    "timeMs": 157560,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 792,
    "type": "circle",
    "x": 638,
    "y": 190,
    "timeMs": 157730,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 793,
    "type": "circle",
    "x": 689,
    "y": 196,
    "timeMs": 157920,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 794,
    "type": "circle",
    "x": 670,
    "y": 219,
    "timeMs": 158080,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 795,
    "type": "circle",
    "x": 670,
    "y": 130,
    "timeMs": 158420,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 796,
    "type": "circle",
    "x": 635,
    "y": 181,
    "timeMs": 158600,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 797,
    "type": "circle",
    "x": 593,
    "y": 211,
    "timeMs": 158770,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 798,
    "type": "circle",
    "x": 543,
    "y": 225,
    "timeMs": 158950,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 799,
    "type": "circle",
    "x": 306,
    "y": 218,
    "timeMs": 159110,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 800,
    "type": "circle",
    "x": 271,
    "y": 269,
    "timeMs": 159300,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 801,
    "type": "circle",
    "x": 259,
    "y": 316,
    "timeMs": 159490,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 802,
    "type": "circle",
    "x": 265,
    "y": 375,
    "timeMs": 159640,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 803,
    "type": "circle",
    "x": 290,
    "y": 429,
    "timeMs": 159810,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 804,
    "type": "circle",
    "x": 330,
    "y": 467,
    "timeMs": 159980,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 805,
    "type": "circle",
    "x": 385,
    "y": 470,
    "timeMs": 160150,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 806,
    "type": "circle",
    "x": 421,
    "y": 435,
    "timeMs": 160320,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 807,
    "type": "circle",
    "x": 271,
    "y": 264,
    "timeMs": 160500,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 808,
    "type": "circle",
    "x": 330,
    "y": 259,
    "timeMs": 160670,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 809,
    "type": "circle",
    "x": 385,
    "y": 275,
    "timeMs": 160850,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 810,
    "type": "circle",
    "x": 430,
    "y": 307,
    "timeMs": 161030,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 811,
    "type": "slider",
    "x": 430,
    "y": 307,
    "timeMs": 161190,
    "durationMs": 290,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 430,
        "y": 307
      },
      {
        "x": 452,
        "y": 367
      },
      {
        "x": 507,
        "y": 394
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
    "id": 812,
    "type": "circle",
    "x": 292,
    "y": 304,
    "timeMs": 161560,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 813,
    "type": "circle",
    "x": 254,
    "y": 269,
    "timeMs": 161720,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 814,
    "type": "slider",
    "x": 254,
    "y": 269,
    "timeMs": 161880,
    "durationMs": 480,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 254,
        "y": 269
      },
      {
        "x": 156,
        "y": 255
      },
      {
        "x": 119,
        "y": 150
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
    "id": 815,
    "type": "circle",
    "x": 571,
    "y": 470,
    "timeMs": 162570,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 816,
    "type": "circle",
    "x": 616,
    "y": 432,
    "timeMs": 162750,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 817,
    "type": "circle",
    "x": 648,
    "y": 378,
    "timeMs": 162920,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 818,
    "type": "circle",
    "x": 658,
    "y": 324,
    "timeMs": 163100,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 819,
    "type": "circle",
    "x": 648,
    "y": 270,
    "timeMs": 163270,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 820,
    "type": "circle",
    "x": 624,
    "y": 229,
    "timeMs": 163450,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 821,
    "type": "circle",
    "x": 582,
    "y": 193,
    "timeMs": 163630,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 822,
    "type": "circle",
    "x": 522,
    "y": 171,
    "timeMs": 163790,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 823,
    "type": "circle",
    "x": 478,
    "y": 357,
    "timeMs": 164000,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 824,
    "type": "circle",
    "x": 670,
    "y": 309,
    "timeMs": 164310,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 825,
    "type": "circle",
    "x": 623,
    "y": 278,
    "timeMs": 164510,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 826,
    "type": "circle",
    "x": 589,
    "y": 234,
    "timeMs": 164660,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 827,
    "type": "circle",
    "x": 571,
    "y": 174,
    "timeMs": 164850,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 828,
    "type": "circle",
    "x": 670,
    "y": 266,
    "timeMs": 165070,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 829,
    "type": "circle",
    "x": 670,
    "y": 130,
    "timeMs": 165350,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 830,
    "type": "circle",
    "x": 642,
    "y": 175,
    "timeMs": 165520,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 831,
    "type": "circle",
    "x": 556,
    "y": 322,
    "timeMs": 165690,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 832,
    "type": "circle",
    "x": 563,
    "y": 375,
    "timeMs": 165870,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 833,
    "type": "circle",
    "x": 593,
    "y": 430,
    "timeMs": 166060,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 834,
    "type": "circle",
    "x": 633,
    "y": 467,
    "timeMs": 166220,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 835,
    "type": "circle",
    "x": 679,
    "y": 485,
    "timeMs": 166390,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 836,
    "type": "circle",
    "x": 670,
    "y": 487,
    "timeMs": 166530,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 837,
    "type": "circle",
    "x": 670,
    "y": 363,
    "timeMs": 166750,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 838,
    "type": "circle",
    "x": 611,
    "y": 343,
    "timeMs": 166900,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 839,
    "type": "circle",
    "x": 360,
    "y": 144,
    "timeMs": 167070,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 840,
    "type": "circle",
    "x": 335,
    "y": 130,
    "timeMs": 167280,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 841,
    "type": "circle",
    "x": 291,
    "y": 166,
    "timeMs": 167420,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 842,
    "type": "circle",
    "x": 238,
    "y": 184,
    "timeMs": 167610,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 843,
    "type": "circle",
    "x": 175,
    "y": 184,
    "timeMs": 167780,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 844,
    "type": "circle",
    "x": 123,
    "y": 164,
    "timeMs": 167940,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 845,
    "type": "circle",
    "x": 130,
    "y": 123,
    "timeMs": 168100,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 846,
    "type": "circle",
    "x": 189,
    "y": 130,
    "timeMs": 168260,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 847,
    "type": "circle",
    "x": 297,
    "y": 255,
    "timeMs": 168470,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 848,
    "type": "circle",
    "x": 354,
    "y": 235,
    "timeMs": 168640,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 849,
    "type": "circle",
    "x": 401,
    "y": 197,
    "timeMs": 168790,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 850,
    "type": "circle",
    "x": 426,
    "y": 153,
    "timeMs": 168990,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 851,
    "type": "circle",
    "x": 437,
    "y": 130,
    "timeMs": 169170,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 852,
    "type": "circle",
    "x": 467,
    "y": 179,
    "timeMs": 169340,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 853,
    "type": "circle",
    "x": 511,
    "y": 216,
    "timeMs": 169520,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 854,
    "type": "circle",
    "x": 566,
    "y": 235,
    "timeMs": 169680,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 855,
    "type": "circle",
    "x": 315,
    "y": 419,
    "timeMs": 169890,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 856,
    "type": "circle",
    "x": 346,
    "y": 472,
    "timeMs": 170040,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 857,
    "type": "circle",
    "x": 356,
    "y": 470,
    "timeMs": 170240,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 858,
    "type": "circle",
    "x": 388,
    "y": 416,
    "timeMs": 170390,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 859,
    "type": "circle",
    "x": 434,
    "y": 378,
    "timeMs": 170550,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 860,
    "type": "circle",
    "x": 492,
    "y": 358,
    "timeMs": 170710,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 861,
    "type": "circle",
    "x": 545,
    "y": 359,
    "timeMs": 170880,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 862,
    "type": "circle",
    "x": 602,
    "y": 380,
    "timeMs": 171050,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 863,
    "type": "circle",
    "x": 536,
    "y": 410,
    "timeMs": 171220,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 864,
    "type": "circle",
    "x": 588,
    "y": 392,
    "timeMs": 171420,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 865,
    "type": "circle",
    "x": 629,
    "y": 359,
    "timeMs": 171570,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 866,
    "type": "circle",
    "x": 654,
    "y": 316,
    "timeMs": 171750,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 867,
    "type": "circle",
    "x": 663,
    "y": 266,
    "timeMs": 171910,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 868,
    "type": "circle",
    "x": 654,
    "y": 210,
    "timeMs": 172090,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 869,
    "type": "circle",
    "x": 627,
    "y": 164,
    "timeMs": 172260,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 870,
    "type": "circle",
    "x": 589,
    "y": 131,
    "timeMs": 172430,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 871,
    "type": "circle",
    "x": 549,
    "y": 239,
    "timeMs": 172610,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 872,
    "type": "circle",
    "x": 539,
    "y": 176,
    "timeMs": 172780,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 873,
    "type": "circle",
    "x": 550,
    "y": 113,
    "timeMs": 172940,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 874,
    "type": "circle",
    "x": 578,
    "y": 130,
    "timeMs": 173120,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 875,
    "type": "circle",
    "x": 588,
    "y": 185,
    "timeMs": 173270,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 876,
    "type": "circle",
    "x": 579,
    "y": 236,
    "timeMs": 173460,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 877,
    "type": "circle",
    "x": 550,
    "y": 288,
    "timeMs": 173640,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 878,
    "type": "circle",
    "x": 503,
    "y": 328,
    "timeMs": 173830,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 879,
    "type": "circle",
    "x": 430,
    "y": 229,
    "timeMs": 173990,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 880,
    "type": "circle",
    "x": 420,
    "y": 288,
    "timeMs": 174150,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 881,
    "type": "circle",
    "x": 432,
    "y": 349,
    "timeMs": 174340,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 882,
    "type": "circle",
    "x": 462,
    "y": 401,
    "timeMs": 174500,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 883,
    "type": "circle",
    "x": 505,
    "y": 436,
    "timeMs": 174680,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 884,
    "type": "circle",
    "x": 556,
    "y": 454,
    "timeMs": 174850,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 885,
    "type": "circle",
    "x": 612,
    "y": 453,
    "timeMs": 175020,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 886,
    "type": "circle",
    "x": 667,
    "y": 433,
    "timeMs": 175190,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 887,
    "type": "circle",
    "x": 322,
    "y": 224,
    "timeMs": 175380,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 888,
    "type": "circle",
    "x": 368,
    "y": 240,
    "timeMs": 175540,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 889,
    "type": "circle",
    "x": 412,
    "y": 276,
    "timeMs": 175710,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 890,
    "type": "circle",
    "x": 441,
    "y": 325,
    "timeMs": 175880,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 891,
    "type": "circle",
    "x": 452,
    "y": 383,
    "timeMs": 176050,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 892,
    "type": "circle",
    "x": 442,
    "y": 441,
    "timeMs": 176230,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 893,
    "type": "circle",
    "x": 417,
    "y": 485,
    "timeMs": 176400,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 894,
    "type": "circle",
    "x": 380,
    "y": 470,
    "timeMs": 176570,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 895,
    "type": "circle",
    "x": 185,
    "y": 338,
    "timeMs": 176750,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 896,
    "type": "circle",
    "x": 129,
    "y": 338,
    "timeMs": 176920,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 897,
    "type": "circle",
    "x": 130,
    "y": 358,
    "timeMs": 177100,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 898,
    "type": "circle",
    "x": 180,
    "y": 357,
    "timeMs": 177260,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 899,
    "type": "circle",
    "x": 234,
    "y": 337,
    "timeMs": 177440,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 900,
    "type": "circle",
    "x": 275,
    "y": 302,
    "timeMs": 177620,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 901,
    "type": "circle",
    "x": 262,
    "y": 470,
    "timeMs": 177960,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 902,
    "type": "circle",
    "x": 243,
    "y": 426,
    "timeMs": 178120,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 903,
    "type": "circle",
    "x": 424,
    "y": 365,
    "timeMs": 178280,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 904,
    "type": "circle",
    "x": 438,
    "y": 318,
    "timeMs": 178470,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 905,
    "type": "circle",
    "x": 471,
    "y": 274,
    "timeMs": 178610,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 906,
    "type": "circle",
    "x": 522,
    "y": 240,
    "timeMs": 178810,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 907,
    "type": "circle",
    "x": 452,
    "y": 456,
    "timeMs": 179160,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 908,
    "type": "circle",
    "x": 412,
    "y": 470,
    "timeMs": 179310,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 909,
    "type": "circle",
    "x": 397,
    "y": 423,
    "timeMs": 179490,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 910,
    "type": "circle",
    "x": 399,
    "y": 369,
    "timeMs": 179640,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 911,
    "type": "circle",
    "x": 557,
    "y": 267,
    "timeMs": 179840,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 912,
    "type": "circle",
    "x": 519,
    "y": 219,
    "timeMs": 180030,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 913,
    "type": "circle",
    "x": 466,
    "y": 187,
    "timeMs": 180180,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 914,
    "type": "circle",
    "x": 415,
    "y": 176,
    "timeMs": 180350,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 915,
    "type": "circle",
    "x": 361,
    "y": 184,
    "timeMs": 180530,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 916,
    "type": "circle",
    "x": 312,
    "y": 210,
    "timeMs": 180710,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 917,
    "type": "circle",
    "x": 276,
    "y": 251,
    "timeMs": 180860,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 918,
    "type": "circle",
    "x": 257,
    "y": 297,
    "timeMs": 181050,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 919,
    "type": "slider",
    "x": 500,
    "y": 200,
    "timeMs": 181210,
    "durationMs": 260,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 500,
        "y": 200
      },
      {
        "x": 453,
        "y": 232
      },
      {
        "x": 456,
        "y": 294
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
    "id": 920,
    "type": "circle",
    "x": 456,
    "y": 130,
    "timeMs": 181550,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 921,
    "type": "circle",
    "x": 272,
    "y": 130,
    "timeMs": 181900,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 922,
    "type": "circle",
    "x": 214,
    "y": 147,
    "timeMs": 182070,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 923,
    "type": "circle",
    "x": 157,
    "y": 143,
    "timeMs": 182240,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 924,
    "type": "circle",
    "x": 324,
    "y": 130,
    "timeMs": 182490,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 925,
    "type": "circle",
    "x": 115,
    "y": 166,
    "timeMs": 182780,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 926,
    "type": "circle",
    "x": 130,
    "y": 155,
    "timeMs": 182920,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 927,
    "type": "circle",
    "x": 350,
    "y": 170,
    "timeMs": 183090,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 928,
    "type": "circle",
    "x": 383,
    "y": 130,
    "timeMs": 183270,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 929,
    "type": "circle",
    "x": 400,
    "y": 130,
    "timeMs": 183440,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 930,
    "type": "circle",
    "x": 438,
    "y": 176,
    "timeMs": 183610,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 931,
    "type": "circle",
    "x": 484,
    "y": 203,
    "timeMs": 183770,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 932,
    "type": "circle",
    "x": 539,
    "y": 213,
    "timeMs": 183960,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 933,
    "type": "circle",
    "x": 600,
    "y": 203,
    "timeMs": 184150,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 934,
    "type": "circle",
    "x": 652,
    "y": 173,
    "timeMs": 184290,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 935,
    "type": "circle",
    "x": 277,
    "y": 320,
    "timeMs": 184450,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 936,
    "type": "circle",
    "x": 333,
    "y": 330,
    "timeMs": 184640,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 937,
    "type": "circle",
    "x": 388,
    "y": 362,
    "timeMs": 184810,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 938,
    "type": "circle",
    "x": 424,
    "y": 406,
    "timeMs": 184980,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 939,
    "type": "circle",
    "x": 444,
    "y": 463,
    "timeMs": 185150,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 940,
    "type": "circle",
    "x": 444,
    "y": 470,
    "timeMs": 185330,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 941,
    "type": "circle",
    "x": 465,
    "y": 410,
    "timeMs": 185500,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 942,
    "type": "circle",
    "x": 502,
    "y": 366,
    "timeMs": 185660,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 943,
    "type": "circle",
    "x": 360,
    "y": 470,
    "timeMs": 185880,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 944,
    "type": "circle",
    "x": 337,
    "y": 420,
    "timeMs": 186020,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 945,
    "type": "circle",
    "x": 302,
    "y": 385,
    "timeMs": 186180,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 946,
    "type": "circle",
    "x": 252,
    "y": 361,
    "timeMs": 186350,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 947,
    "type": "circle",
    "x": 192,
    "y": 355,
    "timeMs": 186530,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 948,
    "type": "circle",
    "x": 135,
    "y": 371,
    "timeMs": 186690,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 949,
    "type": "circle",
    "x": 130,
    "y": 402,
    "timeMs": 186870,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 950,
    "type": "circle",
    "x": 178,
    "y": 415,
    "timeMs": 187030,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 951,
    "type": "circle",
    "x": 606,
    "y": 392,
    "timeMs": 187210,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 952,
    "type": "circle",
    "x": 635,
    "y": 432,
    "timeMs": 187380,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 953,
    "type": "circle",
    "x": 648,
    "y": 484,
    "timeMs": 187560,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 954,
    "type": "circle",
    "x": 644,
    "y": 470,
    "timeMs": 187720,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 955,
    "type": "circle",
    "x": 657,
    "y": 421,
    "timeMs": 187900,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 956,
    "type": "circle",
    "x": 670,
    "y": 369,
    "timeMs": 188070,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 957,
    "type": "circle",
    "x": 656,
    "y": 315,
    "timeMs": 188260,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 958,
    "type": "circle",
    "x": 661,
    "y": 260,
    "timeMs": 188410,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 959,
    "type": "circle",
    "x": 524,
    "y": 172,
    "timeMs": 188620,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 960,
    "type": "circle",
    "x": 495,
    "y": 130,
    "timeMs": 188760,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 961,
    "type": "circle",
    "x": 448,
    "y": 130,
    "timeMs": 188930,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 962,
    "type": "circle",
    "x": 415,
    "y": 177,
    "timeMs": 189100,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 963,
    "type": "circle",
    "x": 348,
    "y": 130,
    "timeMs": 189450,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 964,
    "type": "circle",
    "x": 352,
    "y": 191,
    "timeMs": 189630,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 965,
    "type": "circle",
    "x": 373,
    "y": 242,
    "timeMs": 189780,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 966,
    "type": "circle",
    "x": 410,
    "y": 281,
    "timeMs": 189960,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 967,
    "type": "circle",
    "x": 362,
    "y": 234,
    "timeMs": 190140,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 968,
    "type": "circle",
    "x": 366,
    "y": 296,
    "timeMs": 190300,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 969,
    "type": "circle",
    "x": 351,
    "y": 345,
    "timeMs": 190470,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 970,
    "type": "circle",
    "x": 318,
    "y": 389,
    "timeMs": 190640,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 971,
    "type": "circle",
    "x": 272,
    "y": 419,
    "timeMs": 190810,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 972,
    "type": "circle",
    "x": 214,
    "y": 432,
    "timeMs": 190980,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 973,
    "type": "circle",
    "x": 155,
    "y": 424,
    "timeMs": 191150,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 974,
    "type": "circle",
    "x": 130,
    "y": 396,
    "timeMs": 191350,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 975,
    "type": "circle",
    "x": 259,
    "y": 252,
    "timeMs": 191500,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 976,
    "type": "circle",
    "x": 280,
    "y": 204,
    "timeMs": 191670,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 977,
    "type": "circle",
    "x": 282,
    "y": 144,
    "timeMs": 191840,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 978,
    "type": "circle",
    "x": 465,
    "y": 279,
    "timeMs": 192190,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 979,
    "type": "circle",
    "x": 525,
    "y": 297,
    "timeMs": 192340,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 980,
    "type": "circle",
    "x": 579,
    "y": 294,
    "timeMs": 192520,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 981,
    "type": "circle",
    "x": 449,
    "y": 480,
    "timeMs": 192870,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 982,
    "type": "circle",
    "x": 433,
    "y": 470,
    "timeMs": 193040,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 983,
    "type": "circle",
    "x": 332,
    "y": 356,
    "timeMs": 193210,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 984,
    "type": "circle",
    "x": 356,
    "y": 306,
    "timeMs": 193380,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 985,
    "type": "circle",
    "x": 397,
    "y": 265,
    "timeMs": 193560,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 986,
    "type": "circle",
    "x": 452,
    "y": 240,
    "timeMs": 193710,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 987,
    "type": "circle",
    "x": 508,
    "y": 236,
    "timeMs": 193900,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 988,
    "type": "circle",
    "x": 386,
    "y": 431,
    "timeMs": 194260,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 989,
    "type": "circle",
    "x": 344,
    "y": 464,
    "timeMs": 194420,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 990,
    "type": "circle",
    "x": 297,
    "y": 479,
    "timeMs": 194580,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 991,
    "type": "circle",
    "x": 479,
    "y": 422,
    "timeMs": 194770,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 992,
    "type": "circle",
    "x": 453,
    "y": 465,
    "timeMs": 194930,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 993,
    "type": "circle",
    "x": 442,
    "y": 470,
    "timeMs": 195100,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 994,
    "type": "circle",
    "x": 415,
    "y": 427,
    "timeMs": 195270,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 995,
    "type": "circle",
    "x": 368,
    "y": 391,
    "timeMs": 195450,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 996,
    "type": "circle",
    "x": 316,
    "y": 374,
    "timeMs": 195630,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 997,
    "type": "circle",
    "x": 259,
    "y": 376,
    "timeMs": 195780,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 998,
    "type": "circle",
    "x": 209,
    "y": 396,
    "timeMs": 195950,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 999,
    "type": "circle",
    "x": 514,
    "y": 254,
    "timeMs": 196130,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 1000,
    "type": "circle",
    "x": 456,
    "y": 234,
    "timeMs": 196300,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 1001,
    "type": "circle",
    "x": 410,
    "y": 199,
    "timeMs": 196470,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 1002,
    "type": "circle",
    "x": 383,
    "y": 156,
    "timeMs": 196640,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 1003,
    "type": "circle",
    "x": 371,
    "y": 130,
    "timeMs": 196810,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 1004,
    "type": "circle",
    "x": 340,
    "y": 180,
    "timeMs": 196990,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 1005,
    "type": "circle",
    "x": 295,
    "y": 215,
    "timeMs": 197160,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 1006,
    "type": "circle",
    "x": 241,
    "y": 233,
    "timeMs": 197350,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 1007,
    "type": "circle",
    "x": 342,
    "y": 219,
    "timeMs": 197510,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 1008,
    "type": "circle",
    "x": 315,
    "y": 263,
    "timeMs": 197680,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 1009,
    "type": "circle",
    "x": 303,
    "y": 316,
    "timeMs": 197860,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 1010,
    "type": "circle",
    "x": 310,
    "y": 365,
    "timeMs": 198020,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 1011,
    "type": "circle",
    "x": 334,
    "y": 409,
    "timeMs": 198190,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 1012,
    "type": "circle",
    "x": 374,
    "y": 445,
    "timeMs": 198360,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 1013,
    "type": "circle",
    "x": 428,
    "y": 467,
    "timeMs": 198540,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 1014,
    "type": "circle",
    "x": 485,
    "y": 468,
    "timeMs": 198710,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 1015,
    "type": "circle",
    "x": 287,
    "y": 284,
    "timeMs": 198890,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 1016,
    "type": "circle",
    "x": 329,
    "y": 322,
    "timeMs": 199050,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 1017,
    "type": "circle",
    "x": 130,
    "y": 325,
    "timeMs": 199390,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 1018,
    "type": "circle",
    "x": 187,
    "y": 347,
    "timeMs": 199570,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 1019,
    "type": "circle",
    "x": 233,
    "y": 387,
    "timeMs": 199740,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 1020,
    "type": "circle",
    "x": 130,
    "y": 426,
    "timeMs": 200080,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 1021,
    "type": "slider",
    "x": 130,
    "y": 426,
    "timeMs": 200430,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 130,
        "y": 426
      },
      {
        "x": 169,
        "y": 465
      },
      {
        "x": 230,
        "y": 431
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
    "id": 1022,
    "type": "circle",
    "x": 130,
    "y": 467,
    "timeMs": 200760,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 1023,
    "type": "circle",
    "x": 130,
    "y": 470,
    "timeMs": 201110,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 1024,
    "type": "circle",
    "x": 171,
    "y": 422,
    "timeMs": 201290,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 1025,
    "type": "circle",
    "x": 192,
    "y": 366,
    "timeMs": 201450,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 1026,
    "type": "circle",
    "x": 282,
    "y": 470,
    "timeMs": 201800,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 1027,
    "type": "slider",
    "x": 282,
    "y": 470,
    "timeMs": 202140,
    "durationMs": 270,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 282,
        "y": 470
      },
      {
        "x": 332,
        "y": 438
      },
      {
        "x": 345,
        "y": 382
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
    "id": 1028,
    "type": "circle",
    "x": 347,
    "y": 470,
    "timeMs": 202490,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 1029,
    "type": "circle",
    "x": 524,
    "y": 470,
    "timeMs": 202840,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 1030,
    "type": "circle",
    "x": 549,
    "y": 428,
    "timeMs": 203030,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 1031,
    "type": "circle",
    "x": 526,
    "y": 373,
    "timeMs": 203180,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 1032,
    "type": "circle",
    "x": 580,
    "y": 355,
    "timeMs": 203350,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 1033,
    "type": "circle",
    "x": 635,
    "y": 356,
    "timeMs": 203510,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 1034,
    "type": "circle",
    "x": 670,
    "y": 378,
    "timeMs": 203690,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 1035,
    "type": "circle",
    "x": 621,
    "y": 379,
    "timeMs": 203890,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 1036,
    "type": "circle",
    "x": 570,
    "y": 362,
    "timeMs": 204030,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 1037,
    "type": "circle",
    "x": 532,
    "y": 330,
    "timeMs": 204200,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 1038,
    "type": "circle",
    "x": 503,
    "y": 283,
    "timeMs": 204370,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 1039,
    "type": "circle",
    "x": 530,
    "y": 245,
    "timeMs": 204560,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 1040,
    "type": "circle",
    "x": 473,
    "y": 226,
    "timeMs": 204740,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 1041,
    "type": "circle",
    "x": 417,
    "y": 227,
    "timeMs": 204890,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 1042,
    "type": "circle",
    "x": 371,
    "y": 245,
    "timeMs": 205050,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 1043,
    "type": "circle",
    "x": 334,
    "y": 277,
    "timeMs": 205250,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 1044,
    "type": "circle",
    "x": 307,
    "y": 327,
    "timeMs": 205420,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 1045,
    "type": "circle",
    "x": 298,
    "y": 385,
    "timeMs": 205580,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 1046,
    "type": "circle",
    "x": 311,
    "y": 447,
    "timeMs": 205760,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 1047,
    "type": "circle",
    "x": 434,
    "y": 241,
    "timeMs": 205940,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 1048,
    "type": "circle",
    "x": 405,
    "y": 293,
    "timeMs": 206130,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 1049,
    "type": "circle",
    "x": 358,
    "y": 335,
    "timeMs": 206270,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 1050,
    "type": "circle",
    "x": 305,
    "y": 355,
    "timeMs": 206460,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 1051,
    "type": "circle",
    "x": 245,
    "y": 357,
    "timeMs": 206620,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 1052,
    "type": "circle",
    "x": 191,
    "y": 338,
    "timeMs": 206790,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 1053,
    "type": "circle",
    "x": 151,
    "y": 305,
    "timeMs": 206950,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 1054,
    "type": "circle",
    "x": 124,
    "y": 261,
    "timeMs": 207120,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 1055,
    "type": "circle",
    "x": 213,
    "y": 200,
    "timeMs": 207300,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 1056,
    "type": "circle",
    "x": 159,
    "y": 181,
    "timeMs": 207490,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 1057,
    "type": "slider",
    "x": 159,
    "y": 181,
    "timeMs": 207640,
    "durationMs": 270,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 159,
        "y": 181
      },
      {
        "x": 216,
        "y": 197
      },
      {
        "x": 261,
        "y": 134
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
    "id": 1058,
    "type": "circle",
    "x": 130,
    "y": 275,
    "timeMs": 207990,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 1059,
    "type": "circle",
    "x": 185,
    "y": 293,
    "timeMs": 208160,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 1060,
    "type": "circle",
    "x": 240,
    "y": 291,
    "timeMs": 208330,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 1061,
    "type": "circle",
    "x": 291,
    "y": 271,
    "timeMs": 208510,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 1062,
    "type": "circle",
    "x": 332,
    "y": 235,
    "timeMs": 208660,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 1063,
    "type": "circle",
    "x": 304,
    "y": 345,
    "timeMs": 208850,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 1064,
    "type": "circle",
    "x": 355,
    "y": 344,
    "timeMs": 209010,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 1065,
    "type": "circle",
    "x": 414,
    "y": 363,
    "timeMs": 209190,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 1066,
    "type": "circle",
    "x": 461,
    "y": 400,
    "timeMs": 209360,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 1067,
    "type": "circle",
    "x": 486,
    "y": 442,
    "timeMs": 209530,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 1068,
    "type": "circle",
    "x": 499,
    "y": 470,
    "timeMs": 209690,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 1069,
    "type": "circle",
    "x": 532,
    "y": 417,
    "timeMs": 209880,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 1070,
    "type": "circle",
    "x": 576,
    "y": 382,
    "timeMs": 210050,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 1071,
    "type": "circle",
    "x": 437,
    "y": 470,
    "timeMs": 210390,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 1072,
    "type": "circle",
    "x": 418,
    "y": 418,
    "timeMs": 210570,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 1073,
    "type": "circle",
    "x": 386,
    "y": 381,
    "timeMs": 210750,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 1074,
    "type": "circle",
    "x": 334,
    "y": 351,
    "timeMs": 210900,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 1075,
    "type": "circle",
    "x": 274,
    "y": 342,
    "timeMs": 211090,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 1076,
    "type": "circle",
    "x": 219,
    "y": 352,
    "timeMs": 211250,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 1077,
    "type": "circle",
    "x": 170,
    "y": 381,
    "timeMs": 211430,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 1078,
    "type": "slider",
    "x": 170,
    "y": 381,
    "timeMs": 211760,
    "durationMs": 280,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 170,
        "y": 381
      },
      {
        "x": 231,
        "y": 377
      },
      {
        "x": 266,
        "y": 429
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
    "id": 1079,
    "type": "circle",
    "x": 358,
    "y": 251,
    "timeMs": 212120,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 1080,
    "type": "circle",
    "x": 315,
    "y": 219,
    "timeMs": 212290,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 1081,
    "type": "circle",
    "x": 280,
    "y": 165,
    "timeMs": 212450,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 1082,
    "type": "circle",
    "x": 269,
    "y": 117,
    "timeMs": 212630,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 1083,
    "type": "circle",
    "x": 277,
    "y": 130,
    "timeMs": 212800,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 1084,
    "type": "circle",
    "x": 264,
    "y": 185,
    "timeMs": 212960,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 1085,
    "type": "circle",
    "x": 238,
    "y": 226,
    "timeMs": 213150,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 1086,
    "type": "circle",
    "x": 161,
    "y": 130,
    "timeMs": 213390,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 1087,
    "type": "circle",
    "x": 374,
    "y": 130,
    "timeMs": 213690,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 1088,
    "type": "circle",
    "x": 361,
    "y": 187,
    "timeMs": 213860,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 1089,
    "type": "circle",
    "x": 368,
    "y": 240,
    "timeMs": 214020,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 1090,
    "type": "circle",
    "x": 397,
    "y": 296,
    "timeMs": 214170,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 1091,
    "type": "circle",
    "x": 439,
    "y": 335,
    "timeMs": 214350,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 1092,
    "type": "circle",
    "x": 489,
    "y": 355,
    "timeMs": 214510,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 1093,
    "type": "circle",
    "x": 539,
    "y": 357,
    "timeMs": 214700,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 1094,
    "type": "circle",
    "x": 595,
    "y": 339,
    "timeMs": 214860,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 1095,
    "type": "circle",
    "x": 349,
    "y": 209,
    "timeMs": 215040,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 1096,
    "type": "circle",
    "x": 400,
    "y": 230,
    "timeMs": 215210,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 1097,
    "type": "circle",
    "x": 440,
    "y": 267,
    "timeMs": 215390,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 1098,
    "type": "circle",
    "x": 468,
    "y": 319,
    "timeMs": 215570,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 1099,
    "type": "slider",
    "x": 468,
    "y": 319,
    "timeMs": 215900,
    "durationMs": 280,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 468,
        "y": 319
      },
      {
        "x": 461,
        "y": 380
      },
      {
        "x": 521,
        "y": 417
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
    "id": 1100,
    "type": "circle",
    "x": 321,
    "y": 304,
    "timeMs": 216260,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 1101,
    "type": "circle",
    "x": 285,
    "y": 263,
    "timeMs": 216430,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 1102,
    "type": "circle",
    "x": 264,
    "y": 207,
    "timeMs": 216590,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 1103,
    "type": "circle",
    "x": 195,
    "y": 297,
    "timeMs": 216760,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 1104,
    "type": "circle",
    "x": 142,
    "y": 267,
    "timeMs": 216940,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 1105,
    "type": "circle",
    "x": 130,
    "y": 257,
    "timeMs": 217090,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 1106,
    "type": "circle",
    "x": 183,
    "y": 227,
    "timeMs": 217280,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 1107,
    "type": "circle",
    "x": 223,
    "y": 181,
    "timeMs": 217460,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 1108,
    "type": "circle",
    "x": 240,
    "y": 135,
    "timeMs": 217630,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 1109,
    "type": "circle",
    "x": 241,
    "y": 130,
    "timeMs": 217800,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 1110,
    "type": "circle",
    "x": 260,
    "y": 182,
    "timeMs": 217970,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 1111,
    "type": "slider",
    "x": 389,
    "y": 420,
    "timeMs": 218330,
    "durationMs": 250,
    "curveType": "bezier",
    "controlPoints": [
      {
        "x": 389,
        "y": 420
      },
      {
        "x": 434,
        "y": 388
      },
      {
        "x": 439,
        "y": 326
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
    "id": 1112,
    "type": "circle",
    "x": 423,
    "y": 470,
    "timeMs": 218660,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 1113,
    "type": "circle",
    "x": 612,
    "y": 470,
    "timeMs": 219010,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 1114,
    "type": "circle",
    "x": 672,
    "y": 455,
    "timeMs": 219210,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 1115,
    "type": "circle",
    "x": 670,
    "y": 461,
    "timeMs": 219350,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 1116,
    "type": "circle",
    "x": 618,
    "y": 448,
    "timeMs": 219540,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 1117,
    "type": "circle",
    "x": 576,
    "y": 419,
    "timeMs": 219700,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 1118,
    "type": "circle",
    "x": 545,
    "y": 376,
    "timeMs": 219870,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 1119,
    "type": "circle",
    "x": 516,
    "y": 318,
    "timeMs": 220040,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 1120,
    "type": "circle",
    "x": 459,
    "y": 304,
    "timeMs": 220210,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 1121,
    "type": "circle",
    "x": 408,
    "y": 310,
    "timeMs": 220410,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 1122,
    "type": "circle",
    "x": 358,
    "y": 334,
    "timeMs": 220580,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 1123,
    "type": "circle",
    "x": 321,
    "y": 373,
    "timeMs": 220730,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 1124,
    "type": "circle",
    "x": 337,
    "y": 171,
    "timeMs": 220980,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 1125,
    "type": "circle",
    "x": 532,
    "y": 328,
    "timeMs": 221420,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 1126,
    "type": "circle",
    "x": 592,
    "y": 348,
    "timeMs": 221600,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 1127,
    "type": "circle",
    "x": 570,
    "y": 249,
    "timeMs": 221770,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 1128,
    "type": "circle",
    "x": 599,
    "y": 298,
    "timeMs": 221940,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 1129,
    "type": "circle",
    "x": 610,
    "y": 353,
    "timeMs": 222110,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 1130,
    "type": "circle",
    "x": 601,
    "y": 408,
    "timeMs": 222300,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 1131,
    "type": "circle",
    "x": 577,
    "y": 452,
    "timeMs": 222460,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 1132,
    "type": "circle",
    "x": 526,
    "y": 235,
    "timeMs": 222790,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 1133,
    "type": "circle",
    "x": 533,
    "y": 179,
    "timeMs": 222980,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 1134,
    "type": "circle",
    "x": 557,
    "y": 132,
    "timeMs": 223150,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 1135,
    "type": "circle",
    "x": 337,
    "y": 140,
    "timeMs": 223330,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 1136,
    "type": "circle",
    "x": 323,
    "y": 130,
    "timeMs": 223480,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 1137,
    "type": "circle",
    "x": 330,
    "y": 193,
    "timeMs": 223660,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 1138,
    "type": "circle",
    "x": 357,
    "y": 246,
    "timeMs": 223830,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 1139,
    "type": "circle",
    "x": 398,
    "y": 284,
    "timeMs": 224010,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 1140,
    "type": "circle",
    "x": 448,
    "y": 305,
    "timeMs": 224200,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 1141,
    "type": "circle",
    "x": 497,
    "y": 307,
    "timeMs": 224340,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 1142,
    "type": "circle",
    "x": 550,
    "y": 291,
    "timeMs": 224530,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 1143,
    "type": "circle",
    "x": 279,
    "y": 306,
    "timeMs": 224700,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 1144,
    "type": "circle",
    "x": 337,
    "y": 330,
    "timeMs": 224860,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 1145,
    "type": "circle",
    "x": 374,
    "y": 365,
    "timeMs": 225050,
    "comboNumber": 3,
    "comboColorIndex": 0
  },
  {
    "id": 1146,
    "type": "circle",
    "x": 400,
    "y": 416,
    "timeMs": 225220,
    "comboNumber": 4,
    "comboColorIndex": 0
  },
  {
    "id": 1147,
    "type": "circle",
    "x": 408,
    "y": 479,
    "timeMs": 225380,
    "comboNumber": 5,
    "comboColorIndex": 0
  },
  {
    "id": 1148,
    "type": "circle",
    "x": 396,
    "y": 470,
    "timeMs": 225570,
    "comboNumber": 6,
    "comboColorIndex": 0
  },
  {
    "id": 1149,
    "type": "circle",
    "x": 404,
    "y": 408,
    "timeMs": 225750,
    "comboNumber": 7,
    "comboColorIndex": 0
  },
  {
    "id": 1150,
    "type": "circle",
    "x": 432,
    "y": 351,
    "timeMs": 225890,
    "comboNumber": 8,
    "comboColorIndex": 0
  },
  {
    "id": 1151,
    "type": "circle",
    "x": 345,
    "y": 362,
    "timeMs": 226080,
    "comboNumber": 1,
    "comboColorIndex": 1
  },
  {
    "id": 1152,
    "type": "circle",
    "x": 333,
    "y": 311,
    "timeMs": 226240,
    "comboNumber": 2,
    "comboColorIndex": 1
  },
  {
    "id": 1153,
    "type": "circle",
    "x": 304,
    "y": 266,
    "timeMs": 226430,
    "comboNumber": 3,
    "comboColorIndex": 1
  },
  {
    "id": 1154,
    "type": "circle",
    "x": 259,
    "y": 233,
    "timeMs": 226590,
    "comboNumber": 4,
    "comboColorIndex": 1
  },
  {
    "id": 1155,
    "type": "circle",
    "x": 210,
    "y": 218,
    "timeMs": 226770,
    "comboNumber": 5,
    "comboColorIndex": 1
  },
  {
    "id": 1156,
    "type": "circle",
    "x": 149,
    "y": 222,
    "timeMs": 226940,
    "comboNumber": 6,
    "comboColorIndex": 1
  },
  {
    "id": 1157,
    "type": "circle",
    "x": 130,
    "y": 243,
    "timeMs": 227110,
    "comboNumber": 7,
    "comboColorIndex": 1
  },
  {
    "id": 1158,
    "type": "circle",
    "x": 185,
    "y": 246,
    "timeMs": 227290,
    "comboNumber": 8,
    "comboColorIndex": 1
  },
  {
    "id": 1159,
    "type": "circle",
    "x": 585,
    "y": 400,
    "timeMs": 227460,
    "comboNumber": 1,
    "comboColorIndex": 2
  },
  {
    "id": 1160,
    "type": "circle",
    "x": 626,
    "y": 439,
    "timeMs": 227620,
    "comboNumber": 2,
    "comboColorIndex": 2
  },
  {
    "id": 1161,
    "type": "circle",
    "x": 648,
    "y": 482,
    "timeMs": 227800,
    "comboNumber": 3,
    "comboColorIndex": 2
  },
  {
    "id": 1162,
    "type": "circle",
    "x": 654,
    "y": 470,
    "timeMs": 227960,
    "comboNumber": 4,
    "comboColorIndex": 2
  },
  {
    "id": 1163,
    "type": "circle",
    "x": 678,
    "y": 423,
    "timeMs": 228160,
    "comboNumber": 5,
    "comboColorIndex": 2
  },
  {
    "id": 1164,
    "type": "circle",
    "x": 670,
    "y": 380,
    "timeMs": 228340,
    "comboNumber": 6,
    "comboColorIndex": 2
  },
  {
    "id": 1165,
    "type": "circle",
    "x": 644,
    "y": 328,
    "timeMs": 228500,
    "comboNumber": 7,
    "comboColorIndex": 2
  },
  {
    "id": 1166,
    "type": "circle",
    "x": 638,
    "y": 274,
    "timeMs": 228660,
    "comboNumber": 8,
    "comboColorIndex": 2
  },
  {
    "id": 1167,
    "type": "circle",
    "x": 670,
    "y": 367,
    "timeMs": 229070,
    "comboNumber": 1,
    "comboColorIndex": 3
  },
  {
    "id": 1168,
    "type": "circle",
    "x": 631,
    "y": 414,
    "timeMs": 229240,
    "comboNumber": 2,
    "comboColorIndex": 3
  },
  {
    "id": 1169,
    "type": "circle",
    "x": 613,
    "y": 463,
    "timeMs": 229410,
    "comboNumber": 3,
    "comboColorIndex": 3
  },
  {
    "id": 1170,
    "type": "circle",
    "x": 551,
    "y": 273,
    "timeMs": 229650,
    "comboNumber": 4,
    "comboColorIndex": 3
  },
  {
    "id": 1171,
    "type": "circle",
    "x": 511,
    "y": 223,
    "timeMs": 229820,
    "comboNumber": 5,
    "comboColorIndex": 3
  },
  {
    "id": 1172,
    "type": "circle",
    "x": 460,
    "y": 191,
    "timeMs": 229990,
    "comboNumber": 6,
    "comboColorIndex": 3
  },
  {
    "id": 1173,
    "type": "circle",
    "x": 651,
    "y": 154,
    "timeMs": 230210,
    "comboNumber": 7,
    "comboColorIndex": 3
  },
  {
    "id": 1174,
    "type": "circle",
    "x": 670,
    "y": 123,
    "timeMs": 230400,
    "comboNumber": 8,
    "comboColorIndex": 3
  },
  {
    "id": 1175,
    "type": "circle",
    "x": 345,
    "y": 138,
    "timeMs": 230580,
    "comboNumber": 1,
    "comboColorIndex": 0
  },
  {
    "id": 1176,
    "type": "circle",
    "x": 325,
    "y": 130,
    "timeMs": 230760,
    "comboNumber": 2,
    "comboColorIndex": 0
  },
  {
    "id": 1177,
    "type": "circle",
    "x": 287,
    "y": 177,
    "timeMs": 230930,
    "comboNumber": 3,
    "comboColorIndex": 0
  }
];

export const quemFiscalizaOFiscalBeatmap: Beatmap = {
  id: 'quem-fiscaliza-o-fiscal',
  title: 'Quem Fiscaliza o Fiscal?',
  artist: 'Desconhecido',
  bpm: 176,
  durationSec: 232,
  durationFormatted: '3:52',
  difficultyName: 'Insane',
  difficultyStars: 4.6,
  audioSourceType: 'file',
  audioUrl: './songs/quem-fiscaliza-o-fiscal.mp3',
  coverUrl: './covers/quem-fiscaliza-o-fiscal.jpg',
  previewStartSec: 20,
  offsetMs: 220,
  circleRadius: 44, // Slightly smaller circles for crisper aim and higher skill ceiling
  approachTimeMs: 580, // Snappy approach for punchy rhythm response
  notes: allNotes,
};
