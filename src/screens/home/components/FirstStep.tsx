import React from "react"


export const FirstStep = ({maskValues}) => {


    return (
        <div style={{...styles.wrapper, ...maskValues}}>

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
        width: '100vw',
        backgroundColor: '#A6A999',
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
        flexDirection: 'column' as const
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