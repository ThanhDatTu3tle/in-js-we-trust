import * as React from 'react';
import { useState } from 'react';
import classNames from "classnames/bind";

import styles from './QuestionForResult.module.scss';
import Image from '../../../components/Image';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

const QuestionForResult: React.FC<any> = ({ data }) => {

    const currChoice = localStorage.getItem(`${data.number}`)
    const rightAnswer = data.answer

    const [checkboxA, setCheckboxA] = useState(rightAnswer)
    const [checkboxB, setCheckboxB] = useState(rightAnswer)
    const [checkboxC, setCheckboxC] = useState(rightAnswer)
    const [checkboxD, setCheckboxD] = useState(rightAnswer)

    const [stateAnswer, setStateAnswer] = useState(false)

    const handleActiveA = () => {
        if (checkboxA === currChoice) {
            setCheckboxA('A')
        } else if (checkboxA !== currChoice) {
            setCheckboxA('')
        }
    }

    const handleActiveB = () => {
        if (checkboxB === currChoice) {
            setCheckboxB('B')
        } else if (checkboxB !== currChoice) {
            setCheckboxB('')
        }
    }

    const handleActiveC = () => {
        if (checkboxC === currChoice) {
            setCheckboxC('C')
        } else if (checkboxC !== currChoice) {
            setCheckboxC('')
        }
    }

    const handleActiveD = () => {
        if (checkboxD === currChoice) {
            setCheckboxD('D')
        } else if (checkboxD !== currChoice) {
            setCheckboxD('')
        }
    }

    const handleShowAnswer = () => {
        if (stateAnswer === false) {
            setStateAnswer(true)
        } else if (stateAnswer === true) {
            setStateAnswer(false)
        }
    }

    return (
        <div className={cx('wrapper')}>
            <h3>{data.number}. {data.question}</h3>
            <br />
            <div className={cx('img-ques-choices')}>
                <Image src={data.image} className={cx('img-ques')}/>
                <div className={cx('multi-choices')}>
                    <div className={cx('choice')}>
                        {checkboxA !== rightAnswer ? (
                            <>
                                <div className={cx('checkbox-container')} onClick={handleActiveA}>
                                    <><div className={cx('checkbox-fail')}></div></>                              
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={cx('checkbox-container')} onClick={handleActiveA}>
                                    {checkboxA === 'A' ? (
                                        <><div className={cx('checkbox-active-a')}></div></>                              
                                    ) : (
                                        <><div className={cx('checkbox')}></div></>
                                    )}
                                </div>
                            </>
                        )}
                        <h3>A. </h3>
                        <p> {data.choiceA}</p>
                    </div>
                    <div className={cx('choice')}>
                        {checkboxB !== rightAnswer ? (
                            <>
                                <div className={cx('checkbox-container')} onClick={handleActiveB}>
                                    <><div className={cx('checkbox-fail')}></div></>                              
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={cx('checkbox-container')} onClick={handleActiveB}>
                                    {checkboxB === 'B' ? (
                                        <><div className={cx('checkbox-active-b')}></div></>                              
                                    ) : (
                                        <><div className={cx('checkbox')}></div></>
                                    )}
                                </div>
                            </>
                        )}
                        <h3>B. </h3>
                        <p> {data.choiceB}</p>
                    </div>
                    <div className={cx('choice')}>
                        {checkboxC !== rightAnswer ? (
                            <>
                                <div className={cx('checkbox-container')} onClick={handleActiveC}>
                                    <><div className={cx('checkbox-fail')}></div></>                              
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={cx('checkbox-container')} onClick={handleActiveC}>
                                    {checkboxC === 'C' ? (
                                        <><div className={cx('checkbox-active-c')}></div></>                              
                                    ) : (
                                        <><div className={cx('checkbox')}></div></>
                                    )}
                                </div>
                            </>
                        )}
                        <h3>C. </h3>
                        <p> {data.choiceC}</p>
                    </div>
                    <div className={cx('choice')}>
                        {checkboxD !== rightAnswer ? (
                            <>
                                <div className={cx('checkbox-container')} onClick={handleActiveD}>
                                    <><div className={cx('checkbox-fail')}></div></>                              
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={cx('checkbox-container')} onClick={handleActiveD}>
                                    {checkboxD === 'D' ? (
                                        <><div className={cx('checkbox-active-d')}></div></>                              
                                    ) : (
                                        <><div className={cx('checkbox')}></div></>
                                    )}
                                </div>
                            </>
                        )}
                        <h3>D. </h3>
                        <p> {data.choiceD}</p>
                    </div>
                </div>
            </div>
            
            <div className={cx('answer')}>
                <div className={cx('btn-answer')}>
                    <Button primary onClick={handleShowAnswer}><p>Check your choice!!!</p></Button>
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

export default QuestionForResult;
