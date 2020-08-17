import React from 'react'
import cx from 'classnames';
import styles from './Header.module.css'

import { useDataLayerValue } from '../../../../services/DataLayer';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Avatar } from '@material-ui/core';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue()
    return (
        <div className={cx(styles.header)}>
            <div className={cx(styles.header_left)}>
                <SearchOutlinedIcon className={cx(styles.search_icon)} />
                <input placeholder="Search for Artists, Songs or Albums"
                    type="text" />
            </div>
            <div className={cx(styles.header_right)}>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>

        </div>
    )
}

export default Header
