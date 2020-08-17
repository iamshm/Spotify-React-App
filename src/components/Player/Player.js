import React from 'react'
import cx from 'classnames';
import styles from './Player.module.css'

import SideBar from './SideBar/SideBar';
import Body from './Body/Body';
import Footer from './Footer/Footer';


function Player({ spotify }) {
    return (
        <div className={cx(styles.player)}>
            <div className={cx(styles.main)}>
                <SideBar />
                <Body spotify={spotify} />
            </div>
            <div className={cx(styles.footer)}>
                <Footer />
            </div>
        </div>
    )
}

export default Player
