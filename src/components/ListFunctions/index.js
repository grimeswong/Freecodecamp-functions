import React from 'react';
import Data from '../../data/data.js';

const ListFunctions = (props) => {

  return(
    <div className="component--wrapper">
      <ul>List of JS functions ({Data.length})
        {Data.map((utility, index) => {
          // only return list of valid title
          return utility.title!=="" ? <li onClick={()=>props.onFunctionSelect(utility.title)} key={index}>{utility.title}</li> : null
        })}
      </ul>
    </div>
  )
}

export default ListFunctions;
