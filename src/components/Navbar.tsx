import React from "react";
import { NAVBAR_HEIGHT } from "../constants.js";


export const Navbar = () => {

    return (
        <div style={styles.navbarWrapper}>
            <BackToHomeButton />
            <NavbarList />
        </div>
    )
}

const BackToHomeButton = () => {

    return (
        <div style={styles.homeBtn}>
            <button>Rodrigo</button>
        </div>
    )
}

const NavbarList = () => {

    const screens = [
        {name: 'Trabalhos', url: 'trabalho.com'},
        {name: 'Sobre mim', url: 'sobre.com'},
        {name: 'contato', url: 'contato.com'},
    ]

    const ScreensList = screens.map( screen => (
        <NavbarItems url={screen.url} name={screen.name} key={screen.url}/>
    ))

    return (
        <div style={styles.navbarListWrapper}>{ScreensList}</div>
    )
}

const NavbarItems = props => {

    return (
        <div>
            <button onClick={() => goToScreen(props.url)}>{props.name}</button>
        </div>
    )
}

const goToScreen = screen => {
    console.log(screen)
}

const styles = {
    navbarWrapper: {
        backgroundColor: 'red',
        display: 'flex',
        height: `${NAVBAR_HEIGHT}px`
    },
    homeBtn: {
        width: '50%',
        backgroundColor: 'green',
    },
    navbarListWrapper: {
        display: 'flex',
        backgroundColor: 'blue',
        justifySelf: 'end'

    }
}