import React, {useState, useEffect} from "react";
import { NAVBAR_HEIGHT, INITIAL_STEP_MASK_VALUE, INITIAL_STEP_BREAKPOINT } from "../../../constants";

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


    return (
        <div style={{...styles.wrapper, ...maskImageTransitioner()}}
          onScroll={handleScroll}
        >
            <div style={styles.firstHalf}>
                <div>
                    RODRIGAUM
                </div>
            </div>
            <div style={styles.secondHalf}>
                <div style={styles.secondHalfFirstText}>
                    A strategic social media and marketing studio
                    with a common vision of using social media to connect
                    clients with their audiences.
                </div>
                <div style={styles.secondHalfSecondTexWrapper}>
                    <div style={styles.secondHalfSecondText}>
                        A gentle rebellious studio who believes content
                        is fire but social media is gasoline
                    </div>
                </div>
            </div>
        </div>
    )
}


const styles = {
    wrapper: {
        display: 'flex',
        height: `calc(100% - ${NAVBAR_HEIGHT}px)`,
        // height: `4000px`,
        backgroundColor: 'purple',
    },
    firstHalf: {
        width: '50%',
        // backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'flex-end',
        fontSize: '75px',
        fontFamily: 'fantasy',
    },
    secondHalf: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column'
    },
    secondHalfFirstText: {
        // backgroundColor: 'purple',
        paddingTop: '30%'
        
    },
    secondHalfSecondTexWrapper: {
        // backgroundColor: 'brown',
        marginTop: 'auto',
    },
    secondHalfSecondText: {
    }
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