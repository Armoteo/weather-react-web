import React from 'react';
import style from './CityBoard.module.scss';
import { AppState } from '../../store';
import { fetchWeather } from '../../store/CityBoard';
import { connect } from 'react-redux';


interface CityBoardProps {
    id?: any;
    city?: string;
    temp?: string;
    icon?: string;
    listWeather?:any;
    fetchWeather?: (data: any) => void;
}

class CityBoard extends React.Component<CityBoardProps>{

    componentDidMount() {
        this.props.fetchWeather!(this.props.city);
    }

    render() {
       
        const {id, city, listWeather} = this.props;

        console.log(listWeather.listWeather[id]);

        return (
            <div className={style.CityBoard}>
                <h2>{id} {city}</h2>
                <div className={style.Content}>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        listWeather: state.listWeather,
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