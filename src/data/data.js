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
]

export default Data;
