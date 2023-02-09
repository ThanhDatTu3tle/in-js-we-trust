import * as React from 'react';
import classNames from "classnames/bind";

import styles from './QuestionPalette.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

const QuestionPalette: React.FC<any> = ({ data }) => {

    return (
        <div className={cx('wrapper')}>
            <Button tiny>{data.number}</Button>
        </div>
    )
}

export default QuestionPalette;
