import React from 'react';

const DiffTwoArrays = () => {

  function diffArray(arr1, arr2) {
    var newArr = [];
    var result = [];
    newArr = arr1.concat(arr2).sort();

    while(newArr.length != 0) {
      if(newArr[0] == newArr[1]) {
        newArr = newArr.slice(2);
      } else {
        result.push(newArr[0]);
        newArr = newArr.slice(1);
      }
    }
    return result;
  }

    return (
      <div>
        <h2>Difference of two Arrays</h2>
        <p> Array 1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"] </p>
        <p> Array 2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"] </p>
        <h3>Answer = {diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])}</h3>
        <h3>Source Code: </h3> <p>{diffArray.toString()}</p>
      </div>
    );
}

export default DiffTwoArrays;
