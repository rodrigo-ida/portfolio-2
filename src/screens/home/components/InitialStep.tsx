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



    // const [maskTransitionValues, setMaskTransitionValues] = useState([
    //     {
    //         "startingPoint": 0,
    //         "endingPoint": 3.3333333333333335
    //     },
    //     {
    //         "startingPoint": 3.3333333333333335,
    //         "endingPoint": 6.666666666666667
    //     },
    //     {
    //         "startingPoint": 6.666666666666667,
    //         "endingPoint": 10
    //     },
    //     {
    //         "startingPoint": 10,
    //         "endingPoint": 13.333333333333334
    //     },
    //     {
    //         "startingPoint": 13.333333333333334,
    //         "endingPoint": 16.666666666666668
    //     },
    //     {
    //         "startingPoint": 16.666666666666668,
    //         "endingPoint": 20
    //     },
    //     {
    //         "startingPoint": 20,
    //         "endingPoint": 23.333333333333336
    //     },
    //     {
    //         "startingPoint": 23.333333333333336,
    //         "endingPoint": 26.666666666666668
    //     },
    //     {
    //         "startingPoint": 26.666666666666668,
    //         "endingPoint": 30
    //     },
    //     {
    //         "startingPoint": 30,
    //         "endingPoint": 33.333333333333336
    //     },
    //     {
    //         "startingPoint": 33.333333333333336,
    //         "endingPoint": 36.66666666666667
    //     },
    //     {
    //         "startingPoint": 36.66666666666667,
    //         "endingPoint": 40
    //     },
    //     {
    //         "startingPoint": 40,
    //         "endingPoint": 43.333333333333336
    //     },
    //     {
    //         "startingPoint": 43.333333333333336,
    //         "endingPoint": 46.66666666666667
    //     },
    //     {
    //         "startingPoint": 46.66666666666667,
    //         "endingPoint": 50
    //     },
    //     {
    //         "startingPoint": 50,
    //         "endingPoint": 53.333333333333336
    //     },
    //     {
    //         "startingPoint": 53.333333333333336,
    //         "endingPoint": 56.66666666666667
    //     },
    //     {
    //         "startingPoint": 56.66666666666667,
    //         "endingPoint": 60
    //     },
    //     {
    //         "startingPoint": 60,
    //         "endingPoint": 63.333333333333336
    //     },
    //     {
    //         "startingPoint": 63.333333333333336,
    //         "endingPoint": 66.66666666666667
    //     },
    //     {
    //         "startingPoint": 66.66666666666667,
    //         "endingPoint": 70
    //     },
    //     {
    //         "startingPoint": 70,
    //         "endingPoint": 73.33333333333334
    //     },
    //     {
    //         "startingPoint": 73.33333333333334,
    //         "endingPoint": 76.66666666666667
    //     },
    //     {
    //         "startingPoint": 76.66666666666667,
    //         "endingPoint": 80
    //     },
    //     {
    //         "startingPoint": 80,
    //         "endingPoint": 83.33333333333334
    //     },
    //     {
    //         "startingPoint": 83.33333333333334,
    //         "endingPoint": 86.66666666666667
    //     },
    //     {
    //         "startingPoint": 86.66666666666667,
    //         "endingPoint": 90
    //     },
    //     {
    //         "startingPoint": 90,
    //         "endingPoint": 93.33333333333334
    //     },
    //     {
    //         "startingPoint": 93.33333333333334,
    //         "endingPoint": 96.66666666666667
    //     },
    //     {
    //         "startingPoint": 96.66666666666667,
    //         "endingPoint": 100
    //     },
    //     {
    //         "startingPoint": 100,
    //         "endingPoint": 120
    //     }
    // ]);

    const [maskTransitionValues, setMaskTransitionValues] = useState([
        {
            "startingPoint": 0,
            "endingPoint": 20
        },
        {
            "startingPoint": 20,
            "endingPoint": 40
        },
        {
            "startingPoint": 40,
            "endingPoint": 60
        },
        {
            "startingPoint": 60,
            "endingPoint": 80
        },
        {
            "startingPoint": 80,
            "endingPoint": 100
        }
    
    ])

    const handleScroll = (event) => {
        aa = aa + 1
        console.log('aaa', aa)
        const verticalWheel =  event.deltaY
        const valueToBeAdded = (verticalWheel/100)*-1
       // black 80% 83.33333333333334%, transparent 83.33333333333334% 83.33333333333334%,
            // black 83.33333333333334% 86.66666666666667%, transparent 87.666667% 86.66666666666667%,
            // black 86.66666666666667% 90%, transparent 90% 90%,
            // black 90% 93.33333333333334%, transparent 93.33333333333334% 93.33333333333334%,
            // black 93.33333333333334% 96.66666666666667%, transparent 96.66666666666667% 96.66666666666667%,
            // black 96.66666666666667% 100%, transparent 100% 100%

            // depois

            // black 80% 81.84468666666668%, transparent 81.84468666666668% 83.33333333333334%,
            // black 83.33333333333334% 84.97802%, transparent 84.97802% 86.66666666666667%,
            // black 86.66666666666667% 88.11135333333333%, transparent 88.11135333333333% 90%, 
            // black 90% 91.24468666666668%, transparent 91.24468666666668% 93.33333333333334%, 
            // black 93.33333333333334% 94.37802%, transparent 94.37802% 96.66666666666667%,
            // black 96.66666666666667% 97.51135333333333%, transparent 97.51135333333333% 100%


            // de inicio o valor do transparente deve ser inicio e final iguais ao final de de black anterior
            // e black deve ter inicio x e final x + 3

            // apos

            // transparente inicial deve subtrair, ficando no mesmo valor que black final que tb subtrai
            // black inicial se mantem sempre o mesmo
            // transparente final se mantem sempre o mesmo

            // BI = x 
            // BF = y 
            // TI = y 
            // TF = y

            // BI = nao muda 
            // BF = subtrai ficando z
            // TI = subtrai ficando = BF 
            // TF = nao muda
        
        setMaskTransitionValues( prev => prev.map( (value, index) => {

            const blackGradient = index % 2
            
            if(blackGradient) {
                return ({ startingPoint: value.startingPoint + valueToBeAdded, endingPoint: value.endingPoint + valueToBeAdded})
            }
            return ({ startingPoint: value.startingPoint + valueToBeAdded, endingPoint: value.endingPoint})
        
        }))
        
        console.log("valueToBeAdded", valueToBeAdded); // Valor de deslocamento do scroll vertical
        console.log(`AAAAAAAA`, maskTransitionValues)
    };
    
    const maskImageTransitioner = () => {
        
        console.log(`maskImageTransitioner`, maskTransitionValues)


        const values = maskTransitionValues.map( (value, index, arr) => {

            // black 96.66666666666667% 99.02421666666666%, transparent 99.02421666666666% 100%;

         



            const blackGradient = index % 2

            // if(blackGradient) {
            //     return `black ${value.startingPoint}% ${value.endingPoint}%`
            // }
            // return `transparent ${value.startingPoint}% ${value.endingPoint}%`
            return `black ${value.startingPoint}% ${value.endingPoint}%, transparent ${value.endingPoint}% ${arr[index + 1] && arr[index + 1].endingPoint || 100}%`
        }
        ).join(',')

        console.log(' coisaaaaaaa', values)

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