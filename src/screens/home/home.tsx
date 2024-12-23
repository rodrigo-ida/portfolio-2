import React from "react"
import { Navbar } from "../../components/Navbar.tsx"
import { InitialStep } from "./components/InitialStep.tsx"

const  Home = () => {

    return (
        <div id='home' style={styles.main}>
            <Navbar />
            <InitialStep />
        </div>
    )
}

const styles = {
    main: {
         height: '100vh',
         overflowX: 'hidden',
    },
}

export { Home }