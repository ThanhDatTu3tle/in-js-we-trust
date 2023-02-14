import * as React from 'react';
import { useState } from 'react';
import classNames from "classnames/bind";

import styles from './QuestionForResult.module.scss';
import Image from '../../../components/Image';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

const QuestionForResult: React.FC<any> = ({ data }) => {

    // const score = localStorage.setItem(`Your score`, '0')
    const currChoice = localStorage.getItem(`${data.number}`)
    const rightAnswer = data.answer

    const currCheckboxA = currChoice === 'A' ? ('A') : (null)
    const currCheckboxB = currChoice === 'B' ? ('B') : (null)
    const currCheckboxC = currChoice === 'C' ? ('C') : (null)
    const currCheckboxD = currChoice === 'D' ? ('D') : (null)

    const rightCheckboxA = rightAnswer === 'A' ? ('A') : (null)
    const rightCheckboxB = rightAnswer === 'B' ? ('B') : (null)
    const rightCheckboxC = rightAnswer === 'C' ? ('C') : (null)
    const rightCheckboxD = rightAnswer === 'D' ? ('D') : (null)
    
    // const [currCheckboxA, setCurrCheckboxA] = useState(currChoice === 'A' ? ('A') : (null))
    // const [currCheckboxB, setCurrCheckboxB] = useState(currChoice === 'B' ? ('B') : (null))
    // const [currCheckboxC, setCurrCheckboxC] = useState(currChoice === 'C' ? ('C') : (null))
    // const [currCheckboxD, setCurrCheckboxD] = useState(currChoice === 'D' ? ('D') : (null))

    // const [rightCheckboxA, setRightCheckboxA] = useState(rightAnswer === 'A' ? ('A') : (null))
    // const [rightCheckboxB, setRightCheckboxB] = useState(rightAnswer === 'B' ? ('B') : (null))
    // const [rightCheckboxC, setRightCheckboxC] = useState(rightAnswer === 'C' ? ('C') : (null))
    // const [rightCheckboxD, setRightCheckboxD] = useState(rightAnswer === 'D' ? ('D') : (null))

    // const handleCountScore = () => {
    //     console.log('Ngu')
    // }

    const [stateAnswer, setStateAnswer] = useState(false)

    const handleShowAnswer = () => {
        if (stateAnswer === false) {
            setStateAnswer(true)
        } else if (stateAnswer === true) {
            setStateAnswer(false)
        }
    }

    return (
        <div className={cx('wrapper')}>
            <a id={`${data.number}`} className={cx('a-tag')}>
                <h3>{data.number}. {data.question}</h3>
            </a>
            <br />
            <div className={cx('img-ques-choices')}>
                <Image src={data.image} className={cx('img-ques')}/>
                <div className={cx('multi-choices')}>
                    <div className={cx('choice')}>
                        {currCheckboxA !== null ? (
                            <>
                                <div className={cx('checkbox-container')}>
                                    {currCheckboxA === rightCheckboxA ? (
                                        <><div className={cx('checkbox-active-a')}></div></>                              
                                    ) : (
                                        <><div className={cx('checkbox-fail')}></div></>
                                    )}                  
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={cx('checkbox-container')}>
                                    {currCheckboxA !== rightCheckboxA ? (
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
                        {currCheckboxB !== null ? (
                            <>
                                <div className={cx('checkbox-container')}>
                                    {currCheckboxB === rightCheckboxB ? (
                                        <><div className={cx('checkbox-active-b')}></div></>                              
                                    ) : (
                                        <><div className={cx('checkbox-fail')}></div></>
                                    )}                  
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={cx('checkbox-container')}>
                                    {currCheckboxB !== rightCheckboxB ? (
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
                        {currCheckboxC !== null ? (
                            <>
                                <div className={cx('checkbox-container')}>
                                    {currCheckboxC === rightCheckboxC ? (
                                        <><div className={cx('checkbox-active-c')}></div></>                              
                                    ) : (
                                        <><div className={cx('checkbox-fail')}></div></>
                                    )}                  
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={cx('checkbox-container')}>
                                    {currCheckboxC !== rightCheckboxC ? (
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
                        {currCheckboxD !== null ? (
                            <>
                                <div className={cx('checkbox-container')}>
                                    {currCheckboxD === rightCheckboxD ? (
                                        <><div className={cx('checkbox-active-d')}></div></>                              
                                    ) : (
                                        <><div className={cx('checkbox-fail')}></div></>
                                    )}                  
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={cx('checkbox-container')}>
                                    {currCheckboxD !== rightCheckboxD ? (
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
