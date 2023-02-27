import * as React from 'react';
import { useState, useEffect } from 'react';
import classNames from "classnames/bind";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from './Challenges.module.scss';
import Button from '../../../components/Button';
import Footer from '../../../layouts/components/Footer';
import About from '../../../layouts/components/About';
import Question from '../../../layouts/components/Question';
import QuestionPalette from '../../../layouts/components/QuestionPalette';

const cx = classNames.bind(styles)

const Challenges: React.FC<any> = () => {

    const MySwal = withReactContent(Swal);

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}question`)
          .then((response) => response.json())
          .then((data) => {
            setQuestions(data)
          });
    }, []);

    const handleTryAgain = async () => {
        localStorage.clear();
        await MySwal.fire({
            title: "No pain no gain!!!",
            icon: "success",
            didOpen: () => {
              MySwal.showLoading();
            },
            timer: 3000,
        });
        window.location.href = `${process.env.REACT_APP_BASE_URL}question1`
    }

    return (
            <div className={cx('wrapper')}>
                <div className={cx('main')}>
                    <div className={cx('question-palette')}>
                        <h4>Question Palette</h4>

                        <div className={cx('btns')}>
                            {questions !== null ? (
                                <>      
                                    {questions.map((data, state) => (
                                        <QuestionPalette key={data} data={data} state={state} />
                                    ))}                                                                                                           
                                </>
                                ) : (
                                <></>
                                )
                            }
                        </div>

                        <Button outline onClick={handleTryAgain}>Try again!!!</Button>
                    </div>

                    <div className={cx('question')}>
                        {questions !== null ? (
                            <>       
                                {questions.map((data, state) => ( 
                                    <Question key={data} data={data} state={state} />  
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

export default Challenges;
