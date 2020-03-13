import React from 'react';
import style from './Clock.module.scss';


export class Clock extends React.Component {

    public state = {
        timeNew: {
            hours: 0,
            minutes: 0,
            seconds: 0,
        },
        date: this.getDay(),
        timerID: setInterval(() =>
            this.getTime(), 50
        )
    };

    componentDidMount() {
        clearInterval();
    };

    //time update
    getTime() {
        const time = new Date();
        //set time hours, minutes and second
        let hours = this.checkNumber(time.getHours());
        let minutes = this.checkNumber(time.getMinutes());
        let seconds = this.checkNumber(time.getSeconds());
        const timeNew = { hours, minutes, seconds };
        this.setState({
            timeNew
        })
    };

    //get day today
    getDay() {
        const newDate = new Date();
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        const date = { day, month, year };
        return date
    };


    private forDate = () => {
        const monthsArr = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
            "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
        let day = this.state.date.day;
        let month = this.state.date.month;
        let dataNew = `${day}-е ${monthsArr[month]}`;
        return dataNew;
    };

    checkNumber = (number: number) => {
        if (number < 10) {
            return `0${number}`;
        } else {
            return `${number}`;
        }
    };

    private renderTable() {
        const { timeNew } = this.state;
        return <div>
            <span>{`${timeNew.hours}:${timeNew.minutes}:${timeNew.seconds}`}</span>
            <span>{`${this.forDate()} `}</span>
        </div>
    }


    render() {
        return (
            <div className={style.ClockContainer}>
                {this.renderTable()}
            </div>
        );
    };

};