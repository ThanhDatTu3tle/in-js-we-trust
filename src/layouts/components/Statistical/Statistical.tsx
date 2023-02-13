import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Statistical.module.scss';
// import config from '../../config';

const cx = classNames.bind(styles)

const Statistical: React.FC<any> = () => {
    return (
        <div className={cx('wrapper')}>
            <h2>Statistical</h2>

            <div className={cx('main')}></div>
        </div>
    )
}

export default Statistical;
