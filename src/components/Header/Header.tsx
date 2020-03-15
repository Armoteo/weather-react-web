import React from 'react';
import style from './Header.module.scss';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { Link } from 'react-router-dom';
import DropList from '../UI/DropList/DropList';


interface HeaderProps {
    city?: string;
    value?: string;
    statusHeader?: boolean;
    arrayCity?:Array<string>;
    toggleText?: (data: any) => void;
    toggleCityName?: (data: any) => void;
    addCity?: (data: any) => void;
    clearStorage?: (data: any) => void;
}


export class Header extends React.Component<HeaderProps>{
public state = {
    cityName:'',
    arrayToggleCity:[]
}


    private toggleCityName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {arrayCity } = this.props;
      
        let newArr= arrayCity!.filter((el: any) => {
          let name = el.toLowerCase();
          return name.indexOf(e.target.value.toLowerCase()) !== -1;
        })
        this.setState({ arrayToggleCity: newArr });
        this.setState({ cityName: e.target.value });
      };

      private onChange=(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        this.setState({cityName:e.target.innerHTML})
      }

      private addCityName = ()=>{
          this.props.addCity!(this.state.cityName);
           this.setState({ cityName: '' });
      };

    private renderHeader = () => {
        const { statusHeader } = this.props;
        return statusHeader ? this.mainHeader() : this.nextPageHeader();
    };

    private mainHeader = () => {
        const { toggleText, clearStorage } = this.props;
        return <div className={style.HeaderContent}>
            <div className={style.AddForm}>
                <Button
                    onClick={this.addCityName}
                >Добавить город</Button>
                <div className={style.Seacrh}>
                <Input
                    toggleText={this.toggleCityName}
                    placeholder={'Enter city'}
                    value={this.state.cityName}
                />
               <DropList
               arrayToggleCity={this.state.arrayToggleCity}
               onChange={this.onChange}
               cityName={this.state.cityName}
               />
                </div>
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