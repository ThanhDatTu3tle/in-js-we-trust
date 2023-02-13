import * as React from 'react';

import classNames from "classnames/bind";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from './Apologize.module.scss';
import Header from '../../layouts/components/Header';
import Footer from '../../layouts/components/Footer';
import Button from '../../components/Button';

const cx = classNames.bind(styles)

const Apologize: React.FC<any> = () => {

    const MySwal = withReactContent(Swal);

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
                <div className={cx('title')}>
                    <h1>I am very</h1>
                    <h1>apologize!</h1>
                    <h1>:(((((</h1>
                </div>

                <div className={cx('introduce')}>
                    <br/ >
                    <br />
                    <h2>Sincerely apologize, because, at the moment, the question system has only been completed by me to question 7.</h2>
                    <br />
                    <br />
                    <h2>Don't worry, because the question system will be completed as soon as possible, you can try submitting it now to test how well your JavaScript mastery is.</h2>
                    <br />
                    <br />

                    <div className={cx('btn')}>
                        <Button primary onClick={handleSubmit}>Let submit your test!!!</Button>
                    </div>
                </div>
            </div>

            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    )
}

export default Apologize;
