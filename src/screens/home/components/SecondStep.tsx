import React from "react"

import photo from '../../../assets/photo.jpg'



export const SecondStep = () => {

    return (
        <div style={{...styles.wrapper}}>
            <div style={styles.photo}></div>
            <div style={styles.textWrapper}>
                <div style={styles.about}>
                    <div style={styles.aboutTitle}>about</div>
                    <div style={styles.aboutText}>Our team is driven by a passion for seeing our clients succeed and making an impact in the digital world.</div>
                </div>
                <div style={styles.secondaryTextWrapper}>

                    <div style={styles.secondarySubWrapper}>
                        <div style={styles.secondaryTextTitle}>Effective Communication</div>
                        <div style={styles.secondaryText}>As a global creative studio, we understand the importance of staying ahead of the game. That’s why we partner with some of the world's best talent to bring fresh ideas and perspectives to the table. We firmly believe that crafting strategic and captivating content is the secret ingredient to building a remarkable brand identity on social media. After all, strategy is key; content is useless without it.</div>
                    </div>
                    <div style={styles.secondarySubWrapper}>
                        <div style={styles.secondaryTextTitle}>Mutual Trust</div>
                        <div style={styles.secondaryText}>Think, do, try, repeat… There is no magic trick involved. We care about strategy just as much as we care about the craft. Our process focuses on defining a clear goal and dedicate as much time as possible working relentlessly to reach it.</div>
                    </div>
                </div>
            </div>

        </div>
    )
}


const styles = {
    wrapper: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: '100vw',
        fontFamily: 'GT America, sans-serif',
        display: 'flex',
        lineHeight: 1.2307692308,

    },
    photo: {
        backgroundImage: `url(${photo})`,
        height: '100%',
        width: '110%',
        backgroundColor: '#cccccc',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
textWrapper: {
    paddingLeft: '180px',
    paddingTop: '80px',


},
about: {
    paddingBottom: 70,
    fontSize: 30,
},
aboutTitle: {
    paddingBottom: 15,

},
aboutText: {

},
secondaryTextWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'

},
secondarySubWrapper: {
    width: '45%',
    fontSize: 11,
},
secondaryTextTitle: {
    paddingBottom: 12
},
secondaryText: {
    width: '90%'

},
    
}