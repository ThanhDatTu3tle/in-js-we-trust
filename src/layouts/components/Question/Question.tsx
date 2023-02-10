import * as React from 'react';
import { useState } from 'react';
import classNames from "classnames/bind";

import styles from './Question.module.scss';
import Image from '../../../components/Image';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

const Question: React.FC<any> = ({ data }) => {

    const [checkboxA, setCheckboxA] = useState('')
    const [checkboxB, setCheckboxB] = useState('')
    const [checkboxC, setCheckboxC] = useState('')
    const [checkboxD, setCheckboxD] = useState('')

    const [stateAnswer, setStateAnswer] = useState(false)

    const handleActiveA = () => {
        if (checkboxA === '') {
            setCheckboxA('A')
            localStorage.setItem(`${data.number}`, 'A')
            setCheckboxB('')
            setCheckboxC('')
            setCheckboxD('')
        } else if (checkboxA !== '') {
            setCheckboxA('')
            localStorage.setItem(`${data.number}`, '')
        }
    }

    const handleActiveB = () => {
        if (checkboxB === '') {
            setCheckboxA('')
            setCheckboxB('B')
            localStorage.setItem(`${data.number}`, 'B')
            setCheckboxC('')
            setCheckboxD('')
        } else if (checkboxB !== '') {
            setCheckboxB('')
            localStorage.setItem(`${data.number}`, '')
        }
    }

    const handleActiveC = () => {
        if (checkboxC === '') {
            setCheckboxA('')
            setCheckboxB('')
            setCheckboxC('C')
            localStorage.setItem(`${data.number}`, 'C')
            setCheckboxD('')
        } else if (checkboxC !== '') {
            setCheckboxC('')
            localStorage.setItem(`${data.number}`, '')
        }
    }

    const handleActiveD = () => {
        if (checkboxD === '') {
            setCheckboxA('')
            setCheckboxB('')
            setCheckboxC('')
            setCheckboxD('D')
            localStorage.setItem(`${data.number}`, 'D')
        } else if (checkboxD !== '') {
            setCheckboxD('')
            localStorage.setItem(`${data.number}`, '')
        }
    }

    const handleShowAnswer = () => {
        if (stateAnswer === false) {
            setStateAnswer(true)
        } else if (stateAnswer === true) {
            setStateAnswer(false)
        }
    }

    const handleNextQues = () => {
        const currNumberQues = data.number
        const nextNumberQues = currNumberQues + 1
        console.log(nextNumberQues)
        window.location.href = `${process.env.REACT_APP_BASE_URL}question${nextNumberQues}`
    }

    return (
        <div className={cx('wrapper')}>
            <h3>{data.number}. {data.question}</h3>
            <br />
            <div className={cx('img-ques-choices')}>
                <Image src={data.image} className={cx('img-ques')}/>
                <div className={cx('multi-choices')}>
                    <div className={cx('choice')}>
                        <div className={cx('checkbox-container')} onClick={handleActiveA}>
                            {checkboxA === '' ? (
                                <><div className={cx('checkbox')}></div></>
                            ) : (
                                <><div className={cx('checkbox-active-a')}></div></>
                            )}
                        </div>
                        <h3>A. </h3>
                        <p> {data.choiceA}</p>
                    </div>
                    <div className={cx('choice')}>
                        <div className={cx('checkbox-container')} onClick={handleActiveB}>
                            {checkboxB === '' ? (
                                <><div className={cx('checkbox')}></div></>
                            ) : (
                                <><div className={cx('checkbox-active-b')}></div></>
                            )}
                        </div>
                        <h3>B. </h3>
                        <p> {data.choiceB}</p>
                    </div>
                    <div className={cx('choice')}>
                        <div className={cx('checkbox-container')} onClick={handleActiveC}>
                            {checkboxC === '' ? (
                                <><div className={cx('checkbox')}></div></>
                            ) : (
                                <><div className={cx('checkbox-active-c')}></div></>
                            )}
                        </div>
                        <h3>C. </h3>
                        <p> {data.choiceC}</p>
                    </div>
                    <div className={cx('choice')}>
                        <div className={cx('checkbox-container')} onClick={handleActiveD}>
                            {checkboxD === '' ? (
                                <><div className={cx('checkbox')}></div></>
                            ) : (
                                <><div className={cx('checkbox-active-d')}></div></>
                            )}
                        </div>
                        <h3>D. </h3>
                        <p> {data.choiceD}</p>
                    </div>
                </div>
            </div>
            
            <div className={cx('answer')}>
                <div className={cx('btn-answer')}>
                    <Button primary onClick={handleShowAnswer}><p>Check your choice!!!</p></Button>
                    <Button outline onClick={handleNextQues}><p>Next Question</p></Button>
                </div>
                

                {stateAnswer === false ? (
                    <></>
                ) : (
                    <>
                        <br />
                        <h3>Answer: {data.answer}</h3>
                        <Image src={data.explain} className={cx('img-ans')}/>
                    </>
                )}             
            </div>
        </div>
    )
}

export default Question;
