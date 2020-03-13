import React from 'react';
import style from './Header.module.scss';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { Link } from 'react-router-dom';


interface HeaderProps {
    city?: string;
    value?: string;
    statusHeader?: boolean;
    toggleText?: (data: any) => void;
    toggleCityName?: (data: any) => void;
    addCity?: (data: any) => void;
    clearStorage?: (data: any) => void;
}


export class Header extends React.Component<HeaderProps>{

    private renderHeader = () => {
        const { statusHeader } = this.props;
        return statusHeader ? this.mainHeader() : this.nextPageHeader();
    };

    private mainHeader = () => {
        const { toggleText, toggleCityName, addCity, clearStorage, value } = this.props;
        return <div className={style.HeaderContent}>
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
    };

    private nextPageHeader = () =>
        <div className={style.HeaderContent}>
            <Link to='/'><i className="fas fa-reply"> На главную</i></Link>
           <div className={style.Clock}>
            </div>
        </div>;

    render() {
        return (
            <div className={style.Header}>
                {this.renderHeader()}
            </div>
        )
    }
}