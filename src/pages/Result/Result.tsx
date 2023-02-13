import * as React from 'react';
import { useState, useEffect } from 'react';
import classNames from "classnames/bind";

import styles from './Result.module.scss';
import Header from '../../layouts/components/Header';
import Footer from '../../layouts/components/Footer';
import QuestionPalette from '../../layouts/components/QuestionPalette';
import QuestionForResult from '../../layouts/components/QuestionForResult';
import About from '../../layouts/components/About';

const cx = classNames.bind(styles)

const Result: React.FC<any> = () => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}question`)
          .then((response) => response.json())
          .then((data) => {
            setQuestions(data)
          });
    }, []);

    return (
        <div className={cx('wrapper')}>
            {/* <div className={cx('header')}>
                <Header />
            </div> */}

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
                            {questions.map((data) => ( 
                                <QuestionForResult key={data} data={data} />  
                            ))}                                                                                                                     
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

export default Result;
