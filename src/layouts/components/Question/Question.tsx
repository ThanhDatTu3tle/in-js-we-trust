import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Question.module.scss';
import Image from '../../../components/Image';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

const Question: React.FC<any> = ({ data }) => {

    const handleActive = ():any => {
        console.log('Ngu')
    }

    return (
        <div className={cx('wrapper')}>
            <h3>{data.number}. {data.question}</h3>
            <br />
            <div className={cx('img-ques-choices')}>
                <Image src={data.image} className={cx('img-ques')}/>
                <div className={cx('multi-choices')}>
                    <div className={cx('choice')}>
                        <div className={cx('checkbox')}></div>
                        <h3>A. </h3>
                        <p> {data.choiceA}</p>
                    </div>
                    <div className={cx('choice')}>
                        <div className={cx('checkbox')}></div>
                        <h3>B. </h3>
                        <p> {data.choiceB}</p>
                    </div>
                    <div className={cx('choice')}>
                        <div className={cx('checkbox')}></div>
                        <h3>C. </h3>
                        <p> {data.choiceC}</p>
                    </div>
                    <div className={cx('choice')}>
                        <div className={cx('checkbox')} onClick={handleActive}></div>
                        <h3>D. </h3>
                        <p> {data.choiceD}</p>
                    </div>
                </div>
            </div>
            
            <div className={cx('answer')}>
                <Button primary><p>Check your choice!!!</p></Button>
                <br />
                <h3>Answer: {data.answer}</h3>
                <Image src={data.explain} className={cx('img-ans')}/>
            </div>

            <div className={cx('line')}></div>
        </div>
    )
}

export default Question;
