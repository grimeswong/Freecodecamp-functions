import React from 'react';
import Data from '../../data/data.js';

const ListFunctions = (props) => {
  console.log(Data.length)
  return(
    <div>
      <ul>List of JS function ({Data.length})
        {Data.map((utility, index) => {
          return <li onClick={()=>props.onFunctionSelect(utility.title)} key={index}>{utility.title}</li>
        })}
      </ul>
    </div>
  )
}

export default ListFunctions;
