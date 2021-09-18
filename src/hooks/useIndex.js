import { useState } from 'react';

function useIndex(defaultValue=0, maxValue) {
    const [value, setValue] = useState(defaultValue);

    const increment =()=>{
        (value + 1) >= maxValue ? 
            setValue(0)
            :
            setValue((prev)=> prev+1)
    }

    const decrement =()=>{
        (value - 1) < 0 ? 
            setValue(maxValue - 1)
            :
            setValue((prev)=> prev-1)
    }

    return [value, increment, decrement];
}

export default useIndex;