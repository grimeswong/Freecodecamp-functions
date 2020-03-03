/***
  * This file contains all the data about the FreeCodeCamp Javacript Challenge
  * Type: Javacript Object
  **/

const Data = [
  {
    title:"Difference of Two Arrays",
    funcName: "diffTwoArrays",
    description:"Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.",
    test: {
      argument: [["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]],
      result: "JSON.stringify(diffTwoArrays([\"diorite\", \"andesite\", \"grass\", \"dirt\", \"pink wool\", \"dead shrub\"], [\"diorite\", \"andesite\", \"grass\", \"dirt\", \"dead shrub\"]))"
    }
  },
  {
    title: "Caesar Ciper",
    funcName: "caesarCipher",
    description:  "function which shifts 13 ciphers to encode string as input and returns a decoded string.",
    test: {
      argument: "GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.",
      result: "caesarCipher(\"GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.\")"
    },
    sourcetitle: ""
  }
]

export default Data;
