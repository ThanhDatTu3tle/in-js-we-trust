import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Question.module.scss';
import Image from '../../../components/Image';

const cx = classNames.bind(styles)

const Question: React.FC<any> = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <Image src={data.image}/>
            <p>{data.question}</p>
        </div>
    )
}

export default Question;
