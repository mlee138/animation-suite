import { useState, useEffect, useMemo } from 'react';

function useMousePos(){
    const [mousex, setMousex] = useState();
    const [mousey, setMousey] = useState();
    useEffect(()=>{
    
        const updateMouse = (e)=>{
            setMousex(e.x);
            setMousey(e.y)
        }
        window.addEventListener('mousemove', updateMouse);

        return ()=>{
            window.removeEventListener('mousemove', updateMouse);
        }
    },[]);

    return [ mousex, mousey ];
}

export default useMousePos;