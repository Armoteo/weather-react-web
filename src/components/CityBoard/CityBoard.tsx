import React from 'react';
import style from './CityBoard.module.scss';
import { AppState } from '../../store';
import { fetchWeather } from '../../store/CityBoard';
import { connect } from 'react-redux';
import { getCityWeather } from '../../store/CityBoard/selectors';


interface CityBoardProps {
    city?: string;
    temp?: string;
    icon?: string;
    listWeather?: any;
    fetchWeather?: (data: any) => void;
}

class CityBoard extends React.Component<CityBoardProps>{

    componentDidMount() {
        this.props.fetchWeather!(this.props.city);
    }

    render() {

        const { city, listWeather } = this.props;
        // console.log(listWeather.listWeather[id] ? listWeather.listWeather : 'err');
        return (
            <div className={style.CityBoard}>
                <h2>{city}</h2>
                <div className={style.Content}>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        listWeather: getCityWeather(state)
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