import * as React from 'react';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Challenge.module.scss';
// import config from '../../config';
import Button from '../../components/Button';
import Header from '../../layouts/components/Header';
import Footer from '../../layouts/components/Footer';
import About from '../../layouts/components/About';
import Question from '../../layouts/components/Question';
import QuestionPalette from '../../layouts/components/QuestionPalette';

const cx = classNames.bind(styles)

const Challenge: React.FC<any> = () => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/question`)
          .then((response) => response.json())
          .then((data) => {
            setQuestions(data);
          });
      }, []);

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
                    
                </div>

                <div className={cx('question')}>
                    {questions !== null ? (
                        <>
                            <div className={cx('questions')}>
                                {questions.map((data) => (
                                    <Question key={data} data={data} />
                                ))}
                            </div>
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

export default Challenge;
