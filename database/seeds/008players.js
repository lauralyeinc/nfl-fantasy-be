exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("players")
    .then(function () { 
      // Inserts seed entries
      return knex("players").insert([
        {
          playerID: "BK-1050",
          playerFirst: "Ben",
          playerLast: "Koyack",
          playerFull: "Ben Koyack",
          position: "TE",
          startYear: 2015,
          currentTeam: "JAC",
          height: 77,
          weight: 255,
          dob: "4/9/93",
          forty: 4.79,
          bench: 16,
          vertical: 30.0,
          broad: 116,
          shuttle: 4.52,
          cone: 7.32,
          arm: 32.63,
          hand: 10.75,
          dpos: 229.0,
          col: "Notre Dame",
          dv: "FBS Independents",
          jnum: 83,
          dcp: 1,
        },
        {
          playerID: "BW-0700",
          playerFirst: "Benjamin",
          playerLast: "Watson",
          playerFull: "Benjamin Watson",
          position: "TE",
          startYear: 2004,
          currentTeam: "NE",
          height: 75,
          weight: 255,
          dob: "12/18/80",
          forty: 4.57,
          bench: 34,
          vertical: 35.5,
          broad: 123,
          shuttle: 4.15,
          cone: 7.39,
          arm: 33.0,
          hand: 10.0,
          dpos: 32.0,
          col: "Georgia",
          dv: "Southeastern (SEC)",
          jnum: 84,
          dcp: 1,
        },
        {
          playerID: "CB-2775",
          playerFirst: "Cameron",
          playerLast: "Brate",
          playerFull: "Cameron Brate",
          position: "TE",
          startYear: 2014,
          currentTeam: "TB",
          height: 76,
          weight: 245,
          dob: "7/3/91",
          forty: 4.79,
          bench: 24,
          vertical: 33.5,
          broad: 117,
          shuttle: 4.48,
          cone: 7.16,
          arm: 31.75,
          hand: 9.88,
          dpos: 0.0,
          col: "Harvard",
          dv: "Ivy League",
          jnum: 84,
          dcp: 1,
        },
        {
          playerID: "CC-0775",
          playerFirst: "Cethan",
          playerLast: "Carter",
          playerFull: "Cethan Carter",
          position: "TE",
          startYear: 2017,
          currentTeam: "CIN",
          height: 75,
          weight: 237,
          dob: "9/5/93",
          forty: 4.68,
          bench: 21,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.38,
          hand: 9.0,
          dpos: 0.0,
          col: "Nebraska",
          dv: "Big Ten",
          jnum: 82,
          dcp: 3,
        },
        {
          playerID: "CC-2100",
          playerFirst: "Charles",
          playerLast: "Clay",
          playerFull: "Charles Clay",
          position: "TE",
          startYear: 2011,
          currentTeam: "ARI",
          height: 75,
          weight: 250,
          dob: "2/13/89",
          forty: 4.69,
          bench: 18,
          vertical: 33.5,
          broad: 118,
          shuttle: 4.15,
          cone: 7.07,
          arm: 33.0,
          hand: 9.5,
          dpos: 174.0,
          col: "Tulsa",
          dv: "Conference USA (C-USA)",
          jnum: 85,
          dcp: 1,
        },
        {
          playerID: "CH-2950",
          playerFirst: "Chris",
          playerLast: "Herndon",
          playerFull: "Chris Herndon",
          position: "TE",
          startYear: 2018,
          currentTeam: "NYJ",
          height: 76,
          weight: 253,
          dob: "2/23/96",
          forty: 4.78,
          bench: 21,
          vertical: 34.0,
          broad: 116,
          shuttle: 4.59,
          cone: 7.38,
          arm: 32.88,
          hand: 9.25,
          dpos: 107.0,
          col: "Miami (FL)",
          dv: "Atlantic Coast (ACC)",
          jnum: 89,
          dcp: 4,
        },
        {
          playerID: "CJ-2075",
          playerFirst: "Charles",
          playerLast: "Jones",
          playerFull: "Charles Jones",
          position: "TE",
          startYear: 2019,
          currentTeam: "JAC",
          height: 75,
          weight: 254,
          dob: "8/5/96",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Tulane",
          dv: "American Athletic",
          jnum: 85,
          dcp: 2,
        },
        {
          playerID: "CM-0175",
          playerFirst: "Chris",
          playerLast: "Manhertz",
          playerFull: "Chris Manhertz",
          position: "TE",
          startYear: 2014,
          currentTeam: "CAR",
          height: 78,
          weight: 255,
          dob: "4/10/92",
          forty: 4.86,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Canisius",
          dv: "N/A",
          jnum: 82,
          dcp: 3,
        },
        {
          playerID: "CU-0150",
          playerFirst: "C.J.",
          playerLast: "Uzomah",
          playerFull: "C.J. Uzomah",
          position: "TE",
          startYear: 2015,
          currentTeam: "CIN",
          height: 78,
          weight: 262,
          dob: "1/14/93",
          forty: 4.62,
          bench: 19,
          vertical: 31.0,
          broad: 118,
          shuttle: 4.57,
          cone: 7.22,
          arm: 34.13,
          hand: 9.38,
          dpos: 157.0,
          col: "Auburn",
          dv: "Southeastern (SEC)",
          jnum: 87,
          dcp: 1,
        },
        {
          playerID: "CW-0225",
          playerFirst: "Clive",
          playerLast: "Walford",
          playerFull: "Clive Walford",
          position: "TE",
          startYear: 2015,
          currentTeam: "MIA",
          height: 76,
          weight: 251,
          dob: "10/1/91",
          forty: 4.7,
          bench: 20,
          vertical: 35.0,
          broad: 120,
          shuttle: 4.57,
          cone: 7.32,
          arm: 34.0,
          hand: 10.25,
          dpos: 68.0,
          col: "Miami (FL)",
          dv: "Atlantic Coast (ACC)",
          jnum: 87,
          dcp: 3,
        },
        {
          playerID: "DA-1650",
          playerFirst: "Dan",
          playerLast: "Arnold",
          playerFull: "Dan Arnold",
          position: "TE",
          startYear: 2017,
          currentTeam: "ARI",
          height: 77,
          weight: 225,
          dob: "3/15/95",
          forty: 4.63,
          bench: 12,
          vertical: 39.5,
          broad: 127,
          shuttle: 4.3,
          cone: 6.81,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Wisconsin-Platteville",
          dv: "N/A",
          jnum: 82,
          dcp: 2,
        },
        {
          playerID: "DB-4387",
          playerFirst: "Daniel",
          playerLast: "Brown",
          playerFull: "Daniel Brown",
          position: "TE",
          startYear: 2015,
          currentTeam: "NYJ",
          height: 77,
          weight: 225,
          dob: "5/26/92",
          forty: 4.6,
          bench: 11,
          vertical: 31.5,
          broad: 116,
          shuttle: 4.18,
          cone: 6.86,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "James Madison",
          dv: "Colonial Athletic (CAA)",
          jnum: 87,
          dcp: 1,
        },
        {
          playerID: "DC-0775",
          playerFirst: "Derek",
          playerLast: "Carrier",
          playerFull: "Derek Carrier",
          position: "TE",
          startYear: 2012,
          currentTeam: "OAK",
          height: 76,
          weight: 238,
          dob: "7/25/90",
          forty: 4.51,
          bench: 15,
          vertical: 38.0,
          broad: 122,
          shuttle: 4.08,
          cone: 6.65,
          arm: 32.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Wisconsin-Beloit",
          dv: "N/A",
          jnum: 85,
          dcp: 2,
        },
        {
          playerID: "DD-0075",
          playerFirst: "Darrell",
          playerLast: "Daniels",
          playerFull: "Darrell Daniels",
          position: "TE",
          startYear: 2017,
          currentTeam: "ARI",
          height: 75,
          weight: 235,
          dob: "11/22/94",
          forty: 4.55,
          bench: 17,
          vertical: 32.0,
          broad: 115,
          shuttle: 4.47,
          cone: 7.09,
          arm: 34.5,
          hand: 10.25,
          dpos: 0.0,
          col: "Washington",
          dv: "Pacific 12",
          jnum: 81,
          dcp: 3,
        },
        {
          playerID: "DF-0550",
          playerFirst: "Darren",
          playerLast: "Fells",
          playerFull: "Darren Fells",
          position: "TE",
          startYear: 2013,
          currentTeam: "HOU",
          height: 79,
          weight: 281,
          dob: "4/22/86",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "California-Davis",
          dv: "Big Sky",
          jnum: 87,
          dcp: 1,
        },
        {
          playerID: "DG-1287",
          playerFirst: "Dallas",
          playerLast: "Goedert",
          playerFull: "Dallas Goedert",
          position: "TE",
          startYear: 2018,
          currentTeam: "PHI",
          height: 77,
          weight: 256,
          dob: "1/3/95",
          forty: 4.67,
          bench: 23,
          vertical: 35.0,
          broad: 121,
          shuttle: 4.31,
          cone: 7.02,
          arm: 34.88,
          hand: 10.25,
          dpos: 49.0,
          col: "South Dakota State",
          dv: "Missouri Valley",
          jnum: 88,
          dcp: 2,
        },
        {
          playerID: "DH-1450",
          playerFirst: "Demetrius",
          playerLast: "Harris",
          playerFull: "Demetrius Harris",
          position: "TE",
          startYear: 2013,
          currentTeam: "CLE",
          height: 79,
          weight: 230,
          dob: "7/29/91",
          forty: 4.56,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 34.25,
          hand: 0.0,
          dpos: 0.0,
          col: "Wisconsin-Milwaukee",
          dv: "N/A",
          jnum: 88,
          dcp: 1,
        },
        {
          playerID: "DK-0950",
          playerFirst: "Dawson",
          playerLast: "Knox",
          playerFull: "Dawson Knox",
          position: "TE",
          startYear: 2019,
          currentTeam: "BUF",
          height: 76,
          weight: 254,
          dob: "11/14/96",
          forty: 4.59,
          bench: 16,
          vertical: 34.5,
          broad: 122,
          shuttle: 4.27,
          cone: 7.12,
          arm: 33.5,
          hand: 9.75,
          dpos: 96.0,
          col: "Mississippi",
          dv: "Southeastern (SEC)",
          jnum: 88,
          dcp: 1,
        },
        {
          playerID: "DN-1225",
          playerFirst: "David",
          playerLast: "Njoku",
          playerFull: "David Njoku",
          position: "TE",
          startYear: 2017,
          currentTeam: "CLE",
          height: 76,
          weight: 246,
          dob: "7/10/96",
          forty: 4.64,
          bench: 21,
          vertical: 40.0,
          broad: 133,
          shuttle: 4.34,
          cone: 6.97,
          arm: 35.25,
          hand: 10.0,
          dpos: 29.0,
          col: "Miami (FL)",
          dv: "Atlantic Coast (ACC)",
          jnum: 85,
          dcp: 1,
        },
        {
          playerID: "DS-0050",
          playerFirst: "Drew",
          playerLast: "Sample",
          playerFull: "Drew Sample",
          position: "TE",
          startYear: 2019,
          currentTeam: "CIN",
          height: 77,
          weight: 255,
          dob: "4/16/96",
          forty: 4.71,
          bench: 0,
          vertical: 33.5,
          broad: 115,
          shuttle: 4.31,
          cone: 7.15,
          arm: 33.38,
          hand: 9.63,
          dpos: 52.0,
          col: "Washington",
          dv: "Pacific 12",
          jnum: 89,
          dcp: 5,
        },
        {
          playerID: "DS-0850",
          playerFirst: "Dalton",
          playerLast: "Schultz",
          playerFull: "Dalton Schultz",
          position: "TE",
          startYear: 2018,
          currentTeam: "DAL",
          height: 77,
          weight: 244,
          dob: "7/11/96",
          forty: 4.75,
          bench: 20,
          vertical: 32.0,
          broad: 120,
          shuttle: 4.4,
          cone: 7.0,
          arm: 31.25,
          hand: 9.5,
          dpos: 137.0,
          col: "Stanford",
          dv: "Pacific 12",
          jnum: 86,
          dcp: 3,
        },
        {
          playerID: "DS-3137",
          playerFirst: "Durham",
          playerLast: "Smythe",
          playerFull: "Durham Smythe",
          position: "TE",
          startYear: 2018,
          currentTeam: "MIA",
          height: 77,
          weight: 253,
          dob: "8/9/95",
          forty: 4.81,
          bench: 18,
          vertical: 31.0,
          broad: 110,
          shuttle: 4.23,
          cone: 7.17,
          arm: 31.75,
          hand: 9.25,
          dpos: 123.0,
          col: "Notre Dame",
          dv: "FBS Independents",
          jnum: 81,
          dcp: 2,
        },
        {
          playerID: "DW-0500",
          playerFirst: "Delanie",
          playerLast: "Walker",
          playerFull: "Delanie Walker",
          position: "TE",
          startYear: 2006,
          currentTeam: "TEN",
          height: 73,
          weight: 242,
          dob: "8/12/84",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.0,
          hand: 0.0,
          dpos: 175.0,
          col: "Central Missouri State",
          dv: "N/A",
          jnum: 82,
          dcp: 1,
        },
        {
          playerID: "DW-0675",
          playerFirst: "Darren",
          playerLast: "Waller",
          playerFull: "Darren Waller",
          position: "TE",
          startYear: 2015,
          currentTeam: "OAK",
          height: 78,
          weight: 238,
          dob: "9/13/92",
          forty: 4.43,
          bench: 12,
          vertical: 37.0,
          broad: 125,
          shuttle: 4.25,
          cone: 7.07,
          arm: 33.25,
          hand: 9.0,
          dpos: 204.0,
          col: "Georgia Tech",
          dv: "Atlantic Coast (ACC)",
          jnum: 83,
          dcp: 1,
        },
        {
          playerID: "DY-0075",
          playerFirst: "Deon",
          playerLast: "Yelder",
          playerFull: "Deon Yelder",
          position: "TE",
          startYear: 2018,
          currentTeam: "KC",
          height: 75,
          weight: 249,
          dob: "3/6/95",
          forty: 4.79,
          bench: 18,
          vertical: 33.0,
          broad: 120,
          shuttle: 4.64,
          cone: 7.32,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Western Kentucky",
          dv: "Conference USA (C-USA)",
          jnum: 82,
          dcp: 3,
        },
        {
          playerID: "EE-0050",
          playerFirst: "Eric",
          playerLast: "Ebron",
          playerFull: "Eric Ebron",
          position: "TE",
          startYear: 2014,
          currentTeam: "IND",
          height: 76,
          weight: 250,
          dob: "4/10/93",
          forty: 4.56,
          bench: 24,
          vertical: 32.0,
          broad: 120,
          shuttle: 4.45,
          cone: 7.49,
          arm: 33.25,
          hand: 10.0,
          dpos: 10.0,
          col: "North Carolina",
          dv: "Atlantic Coast (ACC)",
          jnum: 85,
          dcp: 5,
        },
        {
          playerID: "EE-0400",
          playerFirst: "Evan",
          playerLast: "Engram",
          playerFull: "Evan Engram",
          position: "TE",
          startYear: 2017,
          currentTeam: "NYG",
          height: 75,
          weight: 234,
          dob: "9/2/94",
          forty: 4.42,
          bench: 19,
          vertical: 36.0,
          broad: 124,
          shuttle: 4.23,
          cone: 6.92,
          arm: 33.5,
          hand: 10.0,
          dpos: 23.0,
          col: "Mississippi",
          dv: "Southeastern (SEC)",
          jnum: 88,
          dcp: 2,
        },
        {
          playerID: "ES-0250",
          playerFirst: "Eric",
          playerLast: "Saubert",
          playerFull: "Eric Saubert",
          position: "TE",
          startYear: 2017,
          currentTeam: "CHI",
          height: 77,
          weight: 253,
          dob: "5/1/94",
          forty: 4.69,
          bench: 22,
          vertical: 35.5,
          broad: 121,
          shuttle: 4.59,
          cone: 7.34,
          arm: 33.5,
          hand: 10.38,
          dpos: 174.0,
          col: "Drake",
          dv: "N/A",
          jnum: 43,
          dcp: 4,
        },
        {
          playerID: "ET-0375",
          playerFirst: "Eric",
          playerLast: "Tomlinson",
          playerFull: "Eric Tomlinson",
          position: "TE",
          startYear: 2015,
          currentTeam: "OAK",
          height: 78,
          weight: 261,
          dob: "4/22/92",
          forty: 4.77,
          bench: 23,
          vertical: 31.0,
          broad: 110,
          shuttle: 4.54,
          cone: 7.46,
          arm: 32.88,
          hand: 10.0,
          dpos: 0.0,
          col: "Texas-El Paso",
          dv: "Conference USA (C-USA)",
          jnum: 82,
          dcp: 3,
        },
        {
          playerID: "FM-0675",
          playerFirst: "Foster",
          playerLast: "Moreau",
          playerFull: "Foster Moreau",
          position: "TE",
          startYear: 2019,
          currentTeam: "OAK",
          height: 76,
          weight: 253,
          dob: "5/6/97",
          forty: 4.66,
          bench: 22,
          vertical: 36.5,
          broad: 121,
          shuttle: 4.11,
          cone: 7.16,
          arm: 33.5,
          hand: 9.63,
          dpos: 137.0,
          col: "LSU",
          dv: "Southeastern (SEC)",
          jnum: 87,
          dcp: 1,
        },
        {
          playerID: "GC-0350",
          playerFirst: "Garrett",
          playerLast: "Celek",
          playerFull: "Garrett Celek",
          position: "TE",
          startYear: 2012,
          currentTeam: "SF",
          height: 77,
          weight: 252,
          dob: "5/29/88",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 31.13,
          hand: 0.0,
          dpos: 0.0,
          col: "Michigan State",
          dv: "Big Ten",
          jnum: 88,
          dcp: 2,
        },
        {
          playerID: "GE-0400",
          playerFirst: "Gerald",
          playerLast: "Everett",
          playerFull: "Gerald Everett",
          position: "TE",
          startYear: 2017,
          currentTeam: "LA",
          height: 75,
          weight: 239,
          dob: "6/25/94",
          forty: 4.62,
          bench: 22,
          vertical: 37.5,
          broad: 125,
          shuttle: 4.33,
          cone: 6.99,
          arm: 33.0,
          hand: 8.5,
          dpos: 44.0,
          col: "South Alabama",
          dv: "Sun Belt",
          jnum: 81,
          dcp: 2,
        },
        {
          playerID: "GK-0075",
          playerFirst: "George",
          playerLast: "Kittle",
          playerFull: "George Kittle",
          position: "TE",
          startYear: 2017,
          currentTeam: "SF",
          height: 76,
          weight: 247,
          dob: "10/9/93",
          forty: 4.52,
          bench: 18,
          vertical: 38.5,
          broad: 132,
          shuttle: 0.0,
          cone: 7.0,
          arm: 33.13,
          hand: 9.25,
          dpos: 146.0,
          col: "Iowa",
          dv: "Big Ten",
          jnum: 85,
          dcp: 1,
        },
        {
          playerID: "GO-0100",
          playerFirst: "Greg",
          playerLast: "Olsen",
          playerFull: "Greg Olsen",
          position: "TE",
          startYear: 2007,
          currentTeam: "CAR",
          height: 78,
          weight: 255,
          dob: "3/11/85",
          forty: 4.51,
          bench: 23,
          vertical: 35.5,
          broad: 114,
          shuttle: 4.48,
          cone: 7.04,
          arm: 32.38,
          hand: 9.63,
          dpos: 31.0,
          col: "Miami (FL)",
          dv: "Atlantic Coast (ACC)",
          jnum: 88,
          dcp: 1,
        },
        {
          playerID: "GS-1400",
          playerFirst: "Geoff",
          playerLast: "Swaim",
          playerFull: "Geoff Swaim",
          position: "TE",
          startYear: 2015,
          currentTeam: "JAC",
          height: 76,
          weight: 252,
          dob: "3/19/91",
          forty: 4.71,
          bench: 0,
          vertical: 35.5,
          broad: 124,
          shuttle: 4.58,
          cone: 7.28,
          arm: 33.63,
          hand: 10.0,
          dpos: 246.0,
          col: "Texas",
          dv: "Big 12",
          jnum: 87,
          dcp: 1,
        },
        {
          playerID: "HH-0225",
          playerFirst: "Hunter",
          playerLast: "Henry",
          playerFull: "Hunter Henry",
          position: "TE",
          startYear: 2016,
          currentTeam: "LAC",
          height: 77,
          weight: 250,
          dob: "12/7/94",
          forty: 4.68,
          bench: 21,
          vertical: 31.5,
          broad: 113,
          shuttle: 4.41,
          cone: 7.16,
          arm: 32.75,
          hand: 9.25,
          dpos: 35.0,
          col: "Arkansas",
          dv: "Southeastern (SEC)",
          jnum: 86,
          dcp: 1,
        },
        {
          playerID: "HH-0237",
          playerFirst: "Hale",
          playerLast: "Hentges",
          playerFull: "Hale Hentges",
          position: "TE",
          startYear: 2019,
          currentTeam: "WAS",
          height: 76,
          weight: 246,
          dob: "8/19/96",
          forty: 5.04,
          bench: 12,
          vertical: 33.5,
          broad: 107,
          shuttle: 4.53,
          cone: 7.39,
          arm: 33.25,
          hand: 9.25,
          dpos: 0.0,
          col: "Alabama",
          dv: "Southeastern (SEC)",
          jnum: 88,
          dcp: 2,
        },
        {
          playerID: "HH-0350",
          playerFirst: "Hayden",
          playerLast: "Hurst",
          playerFull: "Hayden Hurst",
          position: "TE",
          startYear: 2018,
          currentTeam: "BAL",
          height: 76,
          weight: 250,
          dob: "8/24/93",
          forty: 4.67,
          bench: 16,
          vertical: 32.0,
          broad: 120,
          shuttle: 4.37,
          cone: 7.19,
          arm: 32.75,
          hand: 9.75,
          dpos: 25.0,
          col: "South Carolina",
          dv: "Southeastern (SEC)",
          jnum: 81,
          dcp: 3,
        },
        {
          playerID: "IN-0050",
          playerFirst: "Isaac",
          playerLast: "Nauta",
          playerFull: "Isaac Nauta",
          position: "TE",
          startYear: 2019,
          currentTeam: "DET",
          height: 75,
          weight: 244,
          dob: "5/21/97",
          forty: 4.86,
          bench: 19,
          vertical: 28.0,
          broad: 114,
          shuttle: 4.43,
          cone: 7.45,
          arm: 31.88,
          hand: 9.38,
          dpos: 224.0,
          col: "Georgia",
          dv: "Southeastern (SEC)",
          jnum: 89,
          dcp: 3,
        },
        {
          playerID: "IS-0275",
          playerFirst: "Irv",
          playerLast: "Smith Jr.",
          playerFull: "Irv Smith Jr.",
          position: "TE",
          startYear: 2019,
          currentTeam: "MIN",
          height: 74,
          weight: 242,
          dob: "8/9/98",
          forty: 4.63,
          bench: 19,
          vertical: 32.5,
          broad: 110,
          shuttle: 4.33,
          cone: 7.32,
          arm: 31.5,
          hand: 9.5,
          dpos: 50.0,
          col: "Alabama",
          dv: "Southeastern (SEC)",
          jnum: 84,
          dcp: 2,
        },
      ]);
    });
};
