import React from 'react'
// , { useState, useEffect }
import cx from 'classnames';
import styles from './Login.module.css'
import { loginUrl } from '../../services/spotify';
function Login() {
    return (
        <div className={cx(styles.login)}>
            <img
                className={cx(styles.logo)}
                src=
                "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />
            <a className={cx(styles.login_button)} href={loginUrl} >
                LOGIN WITH SPOTIFY
            </a>
        </div>
    )
}

export default Login;

