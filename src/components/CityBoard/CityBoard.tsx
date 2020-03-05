import React from 'react';
import style from './CityBoard.module.scss';
import { AppState } from '../../store';
import { fetchWeather } from '../../store/CityBoard';
import { connect } from 'react-redux';


interface CityBoardProps {
    id?: string;
    city?: string;
    temp?: string;
    icon?: string;

    fetchWeather?: (data: any) => void;
}

class CityBoard extends React.Component<CityBoardProps>{

    componentDidMount() {
        this.props.fetchWeather!(this.props.city);
    }

    render() {
        console.log(this.props);
        const { id, city, temp, icon } = this.props;
        return (
            <div className={style.CityBoard}>
                <h2>{id} {city}</h2>
                <div className={style.Content}>
                    <span><img src={icon} alt='icon'></img></span>
                    <span>{temp}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        listsWeather: state.listWeather,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchWeather: (data: any) => dispatch(fetchWeather(data))
    };
};

const ConnectedCityBoard = connect(mapStateToProps,
    mapDispatchToProps)(CityBoard);

export { ConnectedCityBoard as CityBoard }