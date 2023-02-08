import * as React from 'react';
import classNames from "classnames/bind";

import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

const Footer: React.FC<any> = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <h2>TU3TLE</h2>
                <span>In JavaScript we trust - made by Vuong Nguyen</span>
            </div>

            <div className={cx('yeungon-info')}>
                <h3>About me</h3> 
                <a className={cx('a-tag')} href='https://github.com/ThanhDatTu3tle'>GitHub</a>
                <a className={cx('a-tag')} href='https://www.facebook.com/dattu3tle/'>Facebook</a>
            </div>
        </div>
    )
}

export default Footer;
