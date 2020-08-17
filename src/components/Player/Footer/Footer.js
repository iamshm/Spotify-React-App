import React from 'react'
import styles from './Footer.module.css'
import cx from 'classnames';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

import { Grid, Slider } from '@material-ui/core';

function Footer() {
    return (
        <div className={cx(styles.footer)}>
            <div className={cx(styles.footer_left)}>
                <img className={cx(styles.albumArt)}
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Album Art" />
                <div className={cx(styles.songInfo)}>
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className={cx(styles.footer_center)}>
                <ShuffleIcon className={cx(styles.footer_green)} />
                <SkipPreviousIcon className={cx(styles.footer_icon)} />
                <PlayCircleOutlineIcon className={cx(styles.footer_large)} />
                <SkipNextIcon className={cx(styles.footer_icon)} />
                <RepeatIcon className={cx(styles.footer_green)} />
            </div>
            <div className={cx(styles.footer_right)}>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider className={cx(styles.slider)} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
