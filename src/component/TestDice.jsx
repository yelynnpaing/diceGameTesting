import React, { useState } from 'react';
import Show from './Show';


const TestDice = (side) => {
    const [state, setState] = useState({
        di1 : "one",
        di2 : "four",
        rolling : false,
        total : 5
    });
    console.log(state);
    // const [di1, di2, rolling, total] = state;
    

  return (
    
    <div>
        <Show face = 'two'/>
        <Show face = "four"/>
    </div>
  )
};
TestDice.defaultProps = {
    side : [
        {one : 1},
        {two : 2},
        {three : 3},
        {four : 4},
        {five : 5},
        {six : 6},
    ]
}
export default TestDice