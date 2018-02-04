import React from 'react';
import diffTwoArrays from '../../utils/diffTwoArrays.js';

const DiffTwoArrays = () => {

    return (
      <div>
        <h2>Difference of Two Arrays</h2>
        <p> Array 1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"] </p>
        <p> Array 2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"] </p>
        <h3>Answer = {diffTwoArrays(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])}</h3>
        <h3>Source Code: </h3> <p>{diffTwoArrays.toString()}</p>
      </div>
    );
}

export default DiffTwoArrays;
