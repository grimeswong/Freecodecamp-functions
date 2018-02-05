import React from 'react';

const ListFunctions = (props) => {

  const functionList = ['DiffTwoArrays','SumAllNumberInRange'];

  return(
    <div>
      <ul>
        {functionList.map((name, index) => {
            return <li key={index}> {name}</li>;
        })}
      </ul>
    </div>
  )
}

export default ListFunctions;
