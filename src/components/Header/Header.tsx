import React from 'react';
import style from './Header.module.scss';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';


interface HeaderProps {
    city?: string;
    value?: string;
    toggleText?: (data: any) => void;
    toggleCityName?: (data: any) => void;
    addCity?: (data: any) => void;
    clearStorage?: (data: any) => void;
}

export class Header extends React.Component<HeaderProps>{
    render() {
        const { toggleText, toggleCityName, addCity, clearStorage, value } = this.props;
        return (
            <div className={style.Header}>
                <div className={style.AddForm}>
                    <Button
                        onClick={addCity}
                    >Добавить город</Button>
                    <Input
                        toggleText={toggleCityName}
                        placeholder={'Enter city'}
                        value={value}
                    />
                </div>
                <Button
                    onClick={clearStorage}
                >Очистить список</Button>
                <Input
                    toggleText={toggleText}
                    placeholder={'Search'}
                />
            </div>
        )
    }
}