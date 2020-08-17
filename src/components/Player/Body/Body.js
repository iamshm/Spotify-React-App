import React from 'react'
import styles from './Body.module.css'
import cx from 'classnames';
import Header from './Header/Header';

function Body({ spotify }) {
    return (
        <div className={cx(styles.body)}>
            <Header spotify={spotify} />
            <div className={cx(styles.body_info)}>
                <img src="https://i.scdn.co/image/ab67616d00001e028a3f0a3ca7929dea23cd274c" alt="AlbumArt" />
                <div className={cx(styles.body_infotext)}>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>Description...</p>
                </div>

            </div>
        </div>
    )
}

export default Body
