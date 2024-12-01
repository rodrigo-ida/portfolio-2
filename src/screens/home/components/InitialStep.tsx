import React, {useState, useEffect} from "react";
import { NAVBAR_HEIGHT } from "../../../constants";

let aa = 0




export const InitialStep = () => {

    useEffect(() => {
        aa = aa + 1
        console.log('aaaaaaaa', aa)
        window.addEventListener("wheel", handleScroll);

        const coisa = [0, 3.3333333333333335, 6.666666666666667, 10, 13.333333333333334, 16.666666666666668, 20, 23.333333333333336, 26.666666666666668, 30, 33.333333333333336, 36.66666666666667, 40, 43.333333333333336, 46.66666666666667, 50, 53.333333333333336, 56.66666666666667, 60, 63.333333333333336, 66.66666666666667, 70, 73.33333333333334, 76.66666666666667, 80, 83.33333333333334, 86.66666666666667, 90, 93.33333333333334, 96.66666666666667, 100]

        const coisa2 = coisa.map((e, i, arr) => {

            return ({
                
                    startingPoint:e,
                    endingPoint:arr[i + 1] 
            })
        })
        // console.log(' **** ' ,coisa2)

    },[])



    const [maskTransitionValues, setMaskTransitionValues] = useState([
    {
        bi: 0,
        bf: 3.3333333333333335,
        ti: 3.3333333333333335,
        tf: 3.3333333333333335 
      },
      {
        bi: 3.3333333333333335,
        bf: 6.666666666666667,
        ti: 6.666666666666667,
        tf: 6.666666666666667
      },
      { bi: 6.666666666666667, bf: 10, ti: 10, tf: 10 },
      {
        bi: 10,
        bf: 13.333333333333334,
        ti: 13.333333333333334,
        tf: 13.333333333333334
      },
      {
        bi: 13.333333333333334,
        bf: 16.666666666666668,
        ti: 16.666666666666668,
        tf: 16.666666666666668
      },
      { bi: 16.666666666666668, bf: 20, ti: 20, tf: 20 },
      {
        bi: 20,
        bf: 23.333333333333336,
        ti: 23.333333333333336,
        tf: 23.333333333333336
      },
      {
        bi: 23.333333333333336,
        bf: 26.666666666666668,
        ti: 26.666666666666668,
        tf: 26.666666666666668
      },
      { bi: 26.666666666666668, bf: 30, ti: 30, tf: 30 },
      {
        bi: 30,
        bf: 33.333333333333336,
        ti: 33.333333333333336,
        tf: 33.333333333333336
      },
      {
        bi: 33.333333333333336,
        bf: 36.66666666666667,
        ti: 36.66666666666667,
        tf: 36.66666666666667
      },
      { bi: 36.66666666666667, bf: 40, ti: 40, tf: 40 },
      {
        bi: 40,
        bf: 43.333333333333336,
        ti: 43.333333333333336,
        tf: 43.333333333333336
      },
      {
        bi: 43.333333333333336,
        bf: 46.66666666666667,
        ti: 46.66666666666667,
        tf: 46.66666666666667
      },
      { bi: 46.66666666666667, bf: 50, ti: 50, tf: 50 },
      {
        bi: 50,
        bf: 53.333333333333336,
        ti: 53.333333333333336,
        tf: 53.333333333333336
      },
      {
        bi: 53.333333333333336,
        bf: 56.66666666666667,
        ti: 56.66666666666667,
        tf: 56.66666666666667
      },
      { bi: 56.66666666666667, bf: 60, ti: 60, tf: 60 },
      {
        bi: 60,
        bf: 63.333333333333336,
        ti: 63.333333333333336,
        tf: 63.333333333333336
      },
      {
        bi: 63.333333333333336,
        bf: 66.66666666666667,
        ti: 66.66666666666667,
        tf: 66.66666666666667
      },
      { bi: 66.66666666666667, bf: 70, ti: 70, tf: 70 },
      {
        bi: 70,
        bf: 73.33333333333334,
        ti: 73.33333333333334,
        tf: 73.33333333333334
      },
      {
        bi: 73.33333333333334,
        bf: 76.66666666666667,
        ti: 76.66666666666667,
        tf: 76.66666666666667
      },
      { bi: 76.66666666666667, bf: 80, ti: 80, tf: 80 },
      {
        bi: 80,
        bf: 83.33333333333334,
        ti: 83.33333333333334,
        tf: 83.33333333333334
      },
      {
        bi: 83.33333333333334,
        bf: 86.66666666666667,
        ti: 86.66666666666667,
        tf: 86.66666666666667
      },
      { bi: 86.66666666666667, bf: 90, ti: 90, tf: 90 },
      {
        bi: 90,
        bf: 93.33333333333334,
        ti: 93.33333333333334,
        tf: 93.33333333333334
      },
      {
        bi: 93.33333333333334,
        bf: 96.66666666666667,
        ti: 96.66666666666667,
        tf: 96.66666666666667
      },
      { bi: 96.66666666666667, bf: 100, ti: 100, tf: 100 },
      { bi: 100, bf: 120, ti: 120, tf: 120 }
    ]);

    // const [maskTransitionValues, setMaskTransitionValues] = useState([
    //     { bi: 0, bf: 20, ti: 20, tf: 20 },
    //     { bi: 20, bf: 40, ti: 40, tf: 40 },
    //     { bi: 40, bf: 60, ti: 60, tf: 60 },
    //     { bi: 60, bf: 80, ti: 80, tf: 80 },
    //     { bi: 80, bf: 100, ti: 100, tf: 100 }
    // ])
    const [scrollValue, setscrollValue] = useState(0)

    const handleScroll = (event) => {

        const verticalWheel = event.deltaY;
    
        setscrollValue((prevScrollValue) => {
            const newScrollValue = prevScrollValue + verticalWheel;
    
            const valueToBeAdded = (verticalWheel / 300) * -1;
    
            setMaskTransitionValuesWrapper(newScrollValue, valueToBeAdded)
    
            return newScrollValue
        });
    };

    const setMaskTransitionValuesWrapper = (newScrollValue, valueToBeAdded) =>{
        console.log(' newScrollValue99999', valueToBeAdded)
        
        return setMaskTransitionValues((prevMaskValueList) => {
            
            const breakPoints = [
                0,
                200,
                400,
                600,
                800,
                1000,
                1200,
                1400,
                1600,
                1800,
                2000,
                2200,
                2400,
                2600,
                2800,
                3000,
                3200,
                3400,
                3600,
                3800,
                4000,
                4200,
                4400,
                4600,
                4800,
                5000,
                5200,
                5400,
                5600,
                5800,
                6000,
            ]

            return prevMaskValueList.map((oldMaskValue, maskValueIndex, arr) => {

                console.log('coisaaaaaaaaaaa', 200 * maskValueIndex)

                let newMaskValue

                breakPoints.forEach( (breakPoint, breakIndex) => {
                    if(newScrollValue > breakPoint && maskValueIndex === arr.length - (breakIndex + 1)) {
                        console.log('coisa33333',newScrollValue, breakPoint, maskValueIndex, arr.length - (breakIndex + 1))
                        newMaskValue = maskTransitionValuesConstructor(oldMaskValue, valueToBeAdded)
                    } 
                })

                return newMaskValue || oldMaskValue

                // if (newScrollValue > 400 && index === arr.length - 1) {
                //     return maskTransitionValuesConstructor(e, valueToBeAdded)
                // }
                // else if (newScrollValue > 800 && index === arr.length - 2) {
                //     return maskTransitionValuesConstructor(e, valueToBeAdded)
                // }
                // else if (newScrollValue > 1200 && index === arr.length - 3) {
                //     return maskTransitionValuesConstructor(e, valueToBeAdded)
                // } else return e


                // if (newScrollValue > 400 && newScrollValue < 800) {
                //     if (index === arr.length - 1) {
                //         return maskTransitionValuesConstructor(e, valueToBeAdded)
                //     } else return e
                // } else if (newScrollValue > 800 && newScrollValue < 1200) {
                //     if (index === arr.length - 2 || index === arr.length - 1) {
                //         return maskTransitionValuesConstructor(e, valueToBeAdded)
                //     } else {
                //         return e;
                //     }
                // } else if (newScrollValue > 1200) {
                //     if (
                //         index === arr.length - 3 ||
                //         index === arr.length - 2 ||
                //         index === arr.length - 1
                //     ) {
                //         return maskTransitionValuesConstructor(e, valueToBeAdded)
                //     } else {
                //         return e;
                //     }
                // } else {
                //     return e;
                // }
            })
        });
    }
    
    const maskImageTransitioner = () => {
        
        console.log(`scrollValueeeeeeeeee2`, scrollValue)

        console.log(`maskImageTransitioner`, maskTransitionValues)


        const values = maskTransitionValues.map( (value, index) => {
            return `black ${value.bi}% ${value.bf}%, transparent ${value.ti}% ${value.tf}%`
        }
        ).join(',')

        return {
            maskImage: `linear-gradient(90deg, ${values})`,
        }
      }


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
        flexDirection: 'column',

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