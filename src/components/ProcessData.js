import React, {useContext} from 'react';
import Data from '../data/data.js'
import DisplayBlock from './DisplayBlock.js';
import * as util from '../utils/utilList.js'; // loaded all the functions from the utilities list

const ProcessData = (props) => {

  const getIndex = Data.findIndex((element) => {  // get the index compared with the props selected function
      return element.title === props.selectedFunction;
  });

  const getFuncName = Data[getIndex].funcName;  // get the function according to its index of Data

  console.log(Data[getIndex].test.argument)

  return (
      <DisplayBlock
        title={Data[getIndex].title}
        description={Data[getIndex].description}
        arguments={Data[getIndex].argument}
        funcName={Data[getIndex].functName}
        result={JSON.stringify(util[getFuncName](...Data[getIndex].test.argument))}
        source={util[getFuncName].toString()}
      />
  )
}

export default ProcessData
