import * as React from 'react';
// import { useState } from 'react';
import classNames from "classnames/bind";

import styles from './QuestionPaletteForResult.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

const QuestionPaletteForResult: React.FC<any> = ({ data }) => {

    const currentQuesState = localStorage.getItem(`${data.number}`)
    const rightQuesState = data.answer

    const btnState = currentQuesState === rightQuesState ? rightQuesState : null
    // const [btnState, setBtnState] = useState(currentQuesState === rightQuesState ? rightQuesState : null)

    const handleLinkToCurrQues = () => {
        const currNumberQues = data.number
        window.location.href = `https://in-js-we-trust.vercel.app/result#${currNumberQues}`
    }

    return (
        <div className={cx('wrapper')}>
            {btnState !== null ? (
                <>
                    {btnState !== null ? (
                        <><Button tinyActiveGreen onClick={handleLinkToCurrQues} key={data} data={data}>{data.number}</Button></>
                    ) : (
                        <><Button tinyActiveRed onClick={handleLinkToCurrQues} key={data} data={data}>{data.number}</Button></>
                    )}
                </>
            ) : (
                <><Button tinyActiveRed onClick={handleLinkToCurrQues}>{data.number}</Button></>
            )}
        </div>
    )
}

export default QuestionPaletteForResult;
