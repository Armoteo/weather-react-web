import React from 'react';
import style from './Header.module.scss';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';


interface HeaderProps {
    city?: string;
    toggleText?: (data: any) => void;
    addCity?: (data: any) => void;
}

export class Header extends React.Component<HeaderProps>{
    render() {
        const { toggleText, addCity } = this.props;
        return (
            <div className={style.Header}>
                <Button
                    onClick={addCity}
                >Добавить город</Button>
                <Input
                    toggleText={toggleText}
                />
            </div>
        )
    }
}