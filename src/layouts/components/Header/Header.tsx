import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Header.module.scss';

const cx = classNames.bind(styles)

const Header: React.FC<any> = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <h2>TU3TLE</h2>
                <span>In JavaScript we trust - made by Vuong Nguyen</span>
            </div>

            <div className={cx('Shout-out')}>
                <h3>All question made by Vuong Nguyen</h3>
                <span>Made by Thanh Dat with love</span>
            </div>
        </div>
    )
}

export default Header;
