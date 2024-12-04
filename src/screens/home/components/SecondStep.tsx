import React, {useEffect} from "react"


export const SecondStep = ({scrollValue}) => {

    useEffect(() => {
        // scrollValue2 = scrollValue
    },[scrollValue])



    console.log(' scrollValueeeeee', scrollValue)
    return (
        <div style={{...styles.wrapper}}>

        </div>
    )
}


const styles = {
    wrapper: {
        backgroundColor: 'black',
        width: '100vw',
        height: '80vh',
    },
    
}