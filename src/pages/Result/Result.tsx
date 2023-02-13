import * as React from 'react';
import { useState, useEffect } from 'react';
import classNames from "classnames/bind";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from './Result.module.scss';
import Button from '../../components/Button/Button';
import Statistical from '../../layouts/components/Statistical/Statistical';
import Footer from '../../layouts/components/Footer';
import QuestionPaletteForResult from '../../layouts/components/QuestionPaletteForResult/QuestionPaletteForResult';
import QuestionForResult from '../../layouts/components/QuestionForResult';
import About from '../../layouts/components/About';

const cx = classNames.bind(styles)

const Result: React.FC<any> = () => {

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
                                    <QuestionPaletteForResult key={data} data={data} />
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
                    {/* <Statistical></Statistical>
                    <br /> */}

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
