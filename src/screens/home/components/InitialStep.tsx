import React, {useState, useEffect} from "react";
import { NAVBAR_HEIGHT, INITIAL_STEP_MASK_VALUE, INITIAL_STEP_BREAKPOINT } from "../../../constants";
import { FirstStep } from "./FirstStep.tsx";
import { SecondStep } from "./SecondStep.tsx";


let aa = 0

export const InitialStep = () => {

    useEffect(() => {
        aa = aa + 1
        window.addEventListener("wheel", handleScroll);

    },[])

    const [maskTransitionValues, setMaskTransitionValues] = useState(INITIAL_STEP_MASK_VALUE);

    const [scrollValue, setscrollValue] = useState(0)

    const handleScroll = (event) => {

        const verticalWheel = event.deltaY;
    
        setscrollValue((prevScrollValue) => {
            const newScrollValue = prevScrollValue + verticalWheel;
    
            const valueToBeAdded = (verticalWheel / 200) * -1;
    
            setMaskTransitionValuesWrapper(newScrollValue, valueToBeAdded)
    
            return newScrollValue
        });
    };

    const setMaskTransitionValuesWrapper = (newScrollValue, valueToBeAdded) =>{
        
        return setMaskTransitionValues((prevMaskValueList) => {

            return prevMaskValueList.map((oldMaskValue, maskValueIndex, arr) => {

                let newMaskValue

                INITIAL_STEP_BREAKPOINT.forEach( (breakPoint, breakIndex) => {
                    if(newScrollValue > breakPoint && maskValueIndex === arr.length - (breakIndex + 1)) {
                        newMaskValue = maskTransitionValuesConstructor(oldMaskValue, valueToBeAdded)
                    } else if ( newScrollValue < breakPoint && maskValueIndex === arr.length - (breakIndex + 1)) {
                      newMaskValue = resetMaskValue(maskValueIndex)

                    }
                })

                return newMaskValue || oldMaskValue

            })
        });
    }
    
    const maskImageTransitioner = () => {
        
        const values = maskTransitionValues.map( (value, index) => {
            return `black ${value.bi}% ${value.bf}%, transparent ${value.ti}% ${value.tf}%`
        }
        ).join(',')

        return {
            maskImage: `linear-gradient(90deg, ${values})`,
        }
      }

    const resetMaskValue = maskIndex => INITIAL_STEP_MASK_VALUE[maskIndex]
    
    const maskValues = maskImageTransitioner()

    return (
        <div style={{...styles.wrapper, right: `${scrollValue/100}%`}}
          onScroll={handleScroll}
        >
            <FirstStep maskValues={maskValues}/>
            <SecondStep scrollValue={scrollValue}/>
        </div>
    )
}


const styles = {
    wrapper: {
        display: 'flex',
        // flexDirection: 'row' as const,
        height: `calc(100% - ${NAVBAR_HEIGHT}px)`,
        width: '200vw',
        position: 'relative' as const


    },
    
}


const maskTransitionValuesConstructor = (e, valueToBeAdded) => {
    const bi = e.bi;
    const bf = e.bf + valueToBeAdded;
    const ti = bf;
    const tf = e.tf;
    return {
        bi,
        bf,
        ti,
        tf,
    };
}