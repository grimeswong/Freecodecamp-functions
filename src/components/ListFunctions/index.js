import React from 'react';
import Data from '../../data/data.js';

const ListFunctions = (props) => {

  return(
    <div className="list--wrapper component--wrapper">
      <p className="list--title">List of JS functions ({Data.length})</p>
      <ul>
        {Data.map((utility, index) => {
          // only return list of valid title
          return utility.title!=="" ? <li onClick={()=>props.onFunctionSelect(utility.title)} key={index}>{utility.title}</li> : null
        })}
      </ul>
    </div>
  )
}

export default ListFunctions;
