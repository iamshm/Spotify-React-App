import React from 'react'
import styles from './SideBarOptions.module.css'
import cx from 'classnames';

function SideBarOptions({ title, Icon }) {
    return (
        <div className={cx(styles.sideBarOption)}>
            {Icon && <Icon className={cx(styles.sideBarOption_icon)} />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SideBarOptions
