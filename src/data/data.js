/***
  * This file contains all the data about the FreeCodeCamp Javacript Challenge
  * Type: Javacript Object
  *
  * argument must store as Array, otherwise the component can't read it properly
  *
  **/

  // Copy Data temple and filled the details
  // {
  //   title:"",
  //   funcName: "",
  //   description: "",
  //   argument: [],
  //   test: {
  //     argument: [],
  //   }
  // },

const Data = [
  {
    title:"Difference of Two Arrays",
    funcName: "diffTwoArrays",
    description: "Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.",
    argument: [["Array 1 = [\"diorite\", \"andesite\", \"grass\", \"dirt\", \"pink wool\", \"dead shrub\"]"],["Array 2 = [\"diorite\", \"andesite\", \"grass\", \"dirt\", \"dead shrub\"]"]],
    test: {
      argument: [["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]]
    }
  },
  {
    title: "Caesar Ciper",
    funcName: "caesarCipher",
    description: "function which shifts 13 ciphers to encode string as input and returns a decoded string.",
    argument: ["(\"GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.\")"],
    test: {
      argument: ["GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."]
    }
  },
  {
    title:"Check For Palindromes",
    funcName: "checkForPalindromes",
    description: "A palindrome is a word or sentence that's spelled the same way both forward",
    argument: ["(\"A man, a plan, a canal. Panama\")"],
    test: {
      argument: ["A man, a plan, a canal. Panama"]
    }
  },
  {
    title:"Chunky Monkey",
    funcName: "chunkyMonkey",
    description: "A function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.",
    argument: ["([\"a\", \"b\", \"c\", \"d\"], 2)"],
    test: {
      argument: [["a", "b", "c", "d"], 2],
    }
  },
  {
    title:"Confirm The Ending",
    funcName: "confirmTheEnding",
    description: "Check if a string (first argument, str) ends with the given target string (second argument, target).",
    argument: ["(\"If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing\", \"mountain\")"],
    test: {
      argument: ["If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"],
    }
  },
  {
    title:"Falsy Bouncer",
    funcName: "falsyBouncer",
    description: "Remove all falsy values from an array like false, null, 0, \"\", undefined, and NaN.",
    argument: ["([1, null, NaN, 2, undefined])"],
    test: {
      argument: [[1, null, NaN, 2, undefined]],
    }
  },
  {
    title:"Find The Longest Word In A String",
    funcName: "findTheLongestWordInAString",
    description: "Return the length of the longest word in the provided sentence.",
    argument: ["(\"What is the average airspeed velocity of an unladen swallow\")"],
    test: {
      argument: ["What is the average airspeed velocity of an unladen swallow"],
    }
  },
  {
    title:"Largest Numbers In Arrays",
    funcName: "largestNumbersInArrays",
    description:"Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.",
    argument: ["[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]"],
    test: {
      argument: [[[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]],
    }
  },
  {
    title:"Mutations",
    funcName: "mutations",
    description: "Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.\n eg. [\"hello\", \"Hello\"], should return true because all of the letters in the second string are present in the first, ignoring case.",
    argument: ["([\"zyxwvutsrqponmlkjihgfedcba\", \"qrstu\"])"],
    test: {
      argument: [["zyxwvutsrqponmlkjihgfedcba", "qrstu"]],
    }
  },
  {
    title:"Repeat A String",
    funcName: "repeatAString",
    description: "Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.",
    argument: ["(\"*\", 8)"],
    test: {
      argument: ["*", 8],
    }
  },
  {
    title:"Roman Numeral Converter",
    funcName: "romanNumeralConverter",
    description: "Convert the given number into a roman numeral.",
    argument: ["(44)"],
    test: {
      argument: [44],
    }
  },
  {
    title:"Search And Replace",
    funcName: "searchAndReplace",
    description: "Perform a search and replace on the sentence using the arguments provided and return the new sentence.\n First argument is the sentence to perform the search and replace on.\n Second argument is the word that you will be replacing (before).\n Third argument is what you will be replacing the second argument with (after).",
    argument: ["(\"He is Sleeping on the couch\", \"Sleeping\", \"sitting\")"],
    test: {
      argument: ["He is Sleeping on the couch", "Sleeping", "sitting"],
    }
  },
  {
    title:"Seek And Destroy",
    funcName: "seekAndDestroy",
    description: "Remove all elements from the initial array that are of the same value as these arguments. \n eg. [1,2,3,1,2,3] 2,3] return [1,1]",
    argument: ["([1, 2, 3, 5, 1, 2, 3], 2, 3)"],
    test: {
      argument: [[1, 2, 3, 5, 1, 2, 3], 2, 3],
    }
  },
  {
    title:"Sum All Number In Range",
    funcName: "sumAllNumberInRange",
    description: "Return the sum of those two numbers and all numbers between them (two numbers - lowest numbers can come last).",
    argument: ["([1, 4])"],
    test: {
      argument: [[1, 4]],
    }
  },
  {
    title:"Title Case A Sentence",
    funcName: "titleCaseASentence",
    description: "Return the provided string with the first letter of each word capitalized. And rest of the word is in lower case.",
    argument: ["(\"I'm a little tea pot\")"],
    test: {
      argument: ["I'm a little tea pot"],
    }
  },
  {
    title:"Truncate A String",
    funcName: "truncateAString",
    description: "Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. /n Note that inserting the three dots to the end will add to the string length.\n However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.",
    argument: ["(\"Absolutely Longer\", 2)"],
    test: {
      argument: ["Absolutely Longer", 2],
    }
  },
  {
    title:"Where Do I Belong",
    funcName: "whereDoIBelong",
    description: "Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.",
    argument: ["([10, 20, 30, 40, 50], 35)"],
    test: {
      argument: [[10, 20, 30, 40, 50], 35],
    }
  },
  {
    title:"Wherefore Art Thou",
    funcName: "whereforeArtThou",
    description: "Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). ",
    argument: ["([{ \"apple\": 1, \"bat\": 2 }, { \"apple\": 1 }, { \"apple\": 1, \"bat\": 2, \"cookie\": 2 }, { \"bat\":2 }], { \"apple\": 1, \"bat\": 2 })"],
    test: {
      argument: [[{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }],
    }
  },
]

export default Data;
