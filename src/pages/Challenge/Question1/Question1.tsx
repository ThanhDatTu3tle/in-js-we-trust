import * as React from 'react';
import { useState, useEffect } from 'react';
import classNames from "classnames/bind";

import styles from './Question1.module.scss';
import Button from '../../../components/Button';
import Header from '../../../layouts/components/Header';
import Footer from '../../../layouts/components/Footer';
import About from '../../../layouts/components/About';
import Question from '../../../layouts/components/Question';
import QuestionPalette from '../../../layouts/components/QuestionPalette';

const cx = classNames.bind(styles)

const Question1: React.FC<any> = () => {

    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}question`)
          .then((response) => response.json())
          .then((data) => {
            setQuestions(data)
          });
    }, []);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}question/63e54093f8c965ae12e13c3c`)
          .then((response) => response.json())
          .then((data) => {
            setQuestion(data)
          });
    }, []);

    const handleSubmit = () => {
        window.location.href = "/result"
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>

            <div className={cx('main')}>
                <div className={cx('question-palette')}>
                    <h4>Question Palette</h4>

                    <div className={cx('btns')}>
                        {questions !== null ? (
                            <>      
                                {questions.map((data) => (
                                    <QuestionPalette key={data} data={data} />
                                ))}                                                                                                           
                            </>
                            ) : (
                            <></>
                            )
                        }
                    </div>
                    
                    <Button outline onClick={handleSubmit}>Submit!</Button>
                </div>

                <div className={cx('question')}>
                    {question !== null ? (
                        <>        
                            <Question key={question} data={question} />                                                                                                                      
                        </>
                        ) : (
                        <></>
                        )
                    }
                </div>

                <About />
            </div>

            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    )
}

export default Question1;
