import * as React from 'react';
import { useState } from 'react';
import classNames from "classnames/bind";

import styles from './QuestionPalette.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

const QuestionPalette: React.FC<any> = ({ data }) => {

    const currentQuesState = localStorage.getItem(`${data.number}`)
    const [btnState, setBtnState] = useState(currentQuesState)

    const handleLinkToCurrQues = () => {
        const currNumberQues = data.number
        window.location.href = `${process.env.REACT_APP_BASE_URL}question${currNumberQues}`
    }

    return (
        <div className={cx('wrapper')}>
            {btnState === null ? (
                <><Button tiny onClick={handleLinkToCurrQues} key={data} data={data}>{data.number}</Button></>
            ) : (
                <><Button tinyActive onClick={handleLinkToCurrQues}>{data.number}</Button></>
            )}
        </div>
    )
}

export default QuestionPalette;
