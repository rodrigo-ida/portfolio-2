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
        backgroundColor: '#A6A999',
         height: '100vh',
    },
}

export { Home }