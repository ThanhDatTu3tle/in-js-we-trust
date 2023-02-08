import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Challenge.module.scss';
// import config from '../../config';
import Button from '../../components/Button';
import Header from '../../layouts/components/Header';
import Footer from '../../layouts/components/Footer';
import About from '../../layouts/components/About';

const cx = classNames.bind(styles)

const Challenge: React.FC<any> = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>

            <div className={cx('main')}>
                <div className={cx('question-palette')}>
                    <h4>Question Palette</h4>

                    <div className={cx('btns')}>
                        <Button tiny>1</Button>
                        <Button tiny>2</Button>
                        <Button tiny>3</Button>
                        <Button tiny>4</Button>
                        <Button tiny>5</Button>
                        <Button tiny>6</Button>
                        <Button tiny>7</Button>
                        <Button tiny>8</Button>
                        <Button tiny>9</Button>
                        <Button tiny>10</Button>
                        <Button tiny>11</Button>
                        <Button tiny>12</Button>
                        <Button tiny>13</Button>
                        <Button tiny>14</Button>
                        <Button tiny>15</Button>
                        <Button tiny>16</Button>
                    </div>
                    
                </div>

                <div className={cx('question')}>
                    Question 1
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
