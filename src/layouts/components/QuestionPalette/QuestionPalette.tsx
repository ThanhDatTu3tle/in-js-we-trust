import * as React from 'react';
import { useState } from 'react';
import classNames from "classnames/bind";

import styles from './QuestionPalette.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

const QuestionPalette: React.FC<any> = ({ data }) => {

    const currentQuesState = localStorage.getItem(`${data.number}`)
    const [btnState, setBtnState] = useState(currentQuesState)
    
    // console.log(currentQuesState)

    // const handelChangeState = () => {
    //     if (currentQuesState !== '') {
    //         setBtnState(`${currentQuesState}`)
    //     } else if (currentQuesState === '') {
    //         setBtnState('')
    //     }
    // }

    return (
        <div className={cx('wrapper')}>
            {btnState === null ? (
                <><Button tiny key={data} data={data}>{data.number}</Button></>
            ) : (
                <><Button tinyActive>{data.number}</Button></>
            )}
        </div>
    )
}

export default QuestionPalette;
