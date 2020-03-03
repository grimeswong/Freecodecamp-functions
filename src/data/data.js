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
  //   description:"",
  //   argument: [],
  //   test: {
  //     argument: [],
  //   }
  // },

const Data = [
  {
    title:"Difference of Two Arrays",
    funcName: "diffTwoArrays",
    description:"Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.",
    argument: [["Array 1 = [\"diorite\", \"andesite\", \"grass\", \"dirt\", \"pink wool\", \"dead shrub\"]"],["Array 2 = [\"diorite\", \"andesite\", \"grass\", \"dirt\", \"dead shrub\"]"]],
    test: {
      argument: [["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]]
    }
  },
  {
    title: "Caesar Ciper",
    funcName: "caesarCipher",
    description:  "function which shifts 13 ciphers to encode string as input and returns a decoded string.",
    argument: ["GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."],
    test: {
      argument: ["GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."]
    }
  },
  {
    title:"Check For Palindromes",
    funcName: "checkForPalindromes",
    description:"A palindrome is a word or sentence that's spelled the same way both forward",
    argument: ["A man, a plan, a canal. Panama"],
    test: {
      argument: ["A man, a plan, a canal. Panama"]
    }
  },
  {
    title:"Chunk Monkey",
    funcName: "chunkyMonkey",
    description:"A function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.",
    argument: ["[\"a\", \"b\", \"c\", \"d\"], 2"],
    test: {
      argument: [["a", "b", "c", "d"], 2],
    }
  },
]

export default Data;
