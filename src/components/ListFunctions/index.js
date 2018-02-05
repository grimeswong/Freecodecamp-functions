import React from 'react';

const ListFunctions = (props) => {

  const functionList = ['DiffTwoArrays','SumAllNumberInRange', 'RomanNumeralConverter'];


  return(
    <div>
      <ul>
        {functionList.map((name, index) => {
            return <li onClick={()=>props.onFunctionSelect(name)} key={index}>{name}</li>
        })}
      </ul>
    </div>
  )
}

export default ListFunctions;