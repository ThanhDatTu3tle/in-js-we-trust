import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Home.module.scss';
// import config from '../../config';
import Header from '../../layouts/components/Header';
import Footer from '../../layouts/components/Footer';
import Button from '../../components/Button';

const cx = classNames.bind(styles)

const Home: React.FC<any> = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>

            <div className={cx('main')}>
                <div className={cx('title')}>
                    <h1>In --------</h1>
                    <h1>JavaScript</h1>
                    <h1>We Trust</h1>
                </div>

                <div className={cx('introduce')}>
                    <span>"In JS we trust - The best way to learn is by building/coding and teaching. I create the challenges to help my friends learn JavaScript and in return it helps me embrace the language in much deeper level. Feel free to clone, fork and pull."</span>
                    <h3>- Made by Vuong Nguyen</h3>
                    <br/ >
                    <br />
                    <span>This site is the place to test your coding skills - with JavaScript, of course. All questions are written by Vuong Nguyen, and interfaced by me - Thanh Dat Nguyen, with the desire to help coders be more approachable and more interested in testing themselves.</span>
                    <br />
                    <br />

                    <div className={cx('btn')}>
                        <Button primary href="/question1">Just challenge yourself!!!</Button>
                    </div>
                </div>
            </div>

            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    )
}

export default Home;
