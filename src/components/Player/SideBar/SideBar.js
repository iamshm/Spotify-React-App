import React from 'react'
import styles from './SideBar.module.css'
import cx from 'classnames';
import SideBarOptions from './SideBarOptions/SideBarOptions';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useDataLayerValue } from '../../../services/DataLayer';

function SideBar() {
    const [{ playlist }, dispatch] = useDataLayerValue()
    return (
        <div className={cx(styles.sidebar)}>
            <img className={cx(styles.sidebar_logo)} src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" />
            <SideBarOptions title="Home" Icon={HomeOutlinedIcon} />
            <SideBarOptions title="Search" Icon={SearchOutlinedIcon} />
            <SideBarOptions title="Your Library" Icon={LibraryMusicOutlinedIcon} />
            <strong className={cx(styles.playlists)}>
                PLAYLISTS
           </strong>
            <hr className={cx(styles.line)} />
            {
                playlist?.items?.map(list =>
                    (
                        <SideBarOptions title={list.name} />
                    )
                )
            }


        </div>
    )
}

export default SideBar
