import * as React from 'react';
import { useState, useEffect } from 'react';
import classNames from "classnames/bind";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from '../QuestionChallenge.module.scss';
import Button from '../../../components/Button';
import Header from '../../../layouts/components/Header';
import Footer from '../../../layouts/components/Footer';
import About from '../../../layouts/components/About';
import Question from '../../../layouts/components/Question';
import QuestionPalette from '../../../layouts/components/QuestionPalette';

const cx = classNames.bind(styles)

const Question5: React.FC<any> = () => {

    const MySwal = withReactContent(Swal);

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
        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}question/63ea270f449ada507024a4ad`)
          .then((response) => response.json())
          .then((data) => {
            setQuestion(data)
          });
      }, []);

    const handleSubmit = async () => {
        await MySwal.fire({
            title: "The system is grading your work!",
            icon: "success",
            didOpen: () => {
              MySwal.showLoading();
            },
            timer: 3000,
          });
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

export default Question5;
