import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import classNames from "classnames/bind";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from './Question.module.scss';
import Image from '../../../components/Image';
import Button from '../../../components/Button';

import { RootState } from '../../../redux/store/store';
import { active, inactive } from '../../../redux/features/checkedSlice';
import { act } from 'react-dom/test-utils';

// import { QuestionContext } from '../../../App';

const cx = classNames.bind(styles)

const Question: React.FC<any> = ({ data }) => {

    const check = useSelector((state: RootState) => state.checked.value)
    console.log(check)
    const dispatch = useDispatch()

    const MySwal = withReactContent(Swal);
    // const { state } = useContext(QuestionContext)

    // const [questionState, setQuestionState] = useState(state)
    // console.log(`Question ${data.number} `, questionState)

    const currChoice = localStorage.getItem(`${data.number}`)

    const [checkboxA, setCheckboxA] = useState(currChoice || '')
    const [checkboxB, setCheckboxB] = useState(currChoice || '')
    const [checkboxC, setCheckboxC] = useState(currChoice || '')
    const [checkboxD, setCheckboxD] = useState(currChoice || '')

    const [stateAnswer, setStateAnswer] = useState(false)

    const handleActiveA = () => {
        if (checkboxA === '') {
            setCheckboxA('A')
            dispatch(active)
            localStorage.setItem(`${data.number}`, 'A')
            setCheckboxB('')
            setCheckboxC('')
            setCheckboxD('')
        } else if (checkboxA === 'A') {
            setCheckboxA('')
            dispatch(inactive)
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
        } else if (checkboxB === 'B') {
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
        } else if (checkboxC === 'C') {
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
        } else if (checkboxD === 'D') {
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

    const handleNextQues = async () => {
        const currNumberQues = data.number
        const nextNumberQues = currNumberQues + 1

        if (nextNumberQues === 8) {
            await MySwal.fire({
                title: "Please wait a moment...",
                icon: "success",
                didOpen: () => {
                  MySwal.showLoading();
                },
                timer: 1000,
            });
            window.location.href = `${process.env.REACT_APP_BASE_URL}apologize`
        } else {
            await MySwal.fire({
                title: "Please wait a moment...",
                icon: "success",
                didOpen: () => {
                  MySwal.showLoading();
                },
                timer: 1000,
            });
            window.location.href = `${process.env.REACT_APP_BASE_URL}question${nextNumberQues}`
        }
    }

    return (
        <div className={cx('wrapper')}>
            <h3>{data.number}. {data.question}</h3>
            <br />
            <div className={cx('img-ques-choices')}>
                <Image src={data.image} className={cx('img-ques')}/>
                <div className={cx('multi-choices')}>
                    <div className={cx('choice')}  onClick={handleActiveA}>
                        <div className={cx('checkbox-container')}>
                            {checkboxA === 'A' ? (
                                <><div className={cx('checkbox-active-a')}></div></>                              
                            ) : (
                                <><div className={cx('checkbox')}></div></>
                            )}
                        </div>
                        <h3>A. </h3>
                        <p> {data.choiceA}</p>
                    </div>
                    <div className={cx('choice')} onClick={handleActiveB}>
                        <div className={cx('checkbox-container')}>
                            {checkboxB === 'B' ? (
                                <><div className={cx('checkbox-active-b')}></div></>                            
                            ) : (
                                <><div className={cx('checkbox')}></div></>
                            )}
                        </div>
                        <h3>B. </h3>
                        <p> {data.choiceB}</p>
                    </div>
                    <div className={cx('choice')} onClick={handleActiveC}>
                        <div className={cx('checkbox-container')}>
                            {checkboxC === 'C' ? (
                                <><div className={cx('checkbox-active-c')}></div></>                  
                            ) : (
                                <><div className={cx('checkbox')}></div></>
                            )}
                        </div>
                        <h3>C. </h3>
                        <p> {data.choiceC}</p>
                    </div>
                    <div className={cx('choice')} onClick={handleActiveD}>
                        <div className={cx('checkbox-container')}>
                            {checkboxD === 'D' ? (
                                <><div className={cx('checkbox-active-d')}></div></>                             
                            ) : (
                                <><div className={cx('checkbox')}></div></>
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
