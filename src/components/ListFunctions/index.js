import React from 'react';
import Data from '../../data/data.js';

const ListFunctions = (props) => {

  return(
    <div>
      <ul>
        {Data.map((utility, index) => {
          console.log(utility);
          return <li onClick={()=>props.onFunctionSelect(utility.title)} key={index}>{utility.title}</li>
        })}
      </ul>
    </div>
  )
}

export default ListFunctions;
