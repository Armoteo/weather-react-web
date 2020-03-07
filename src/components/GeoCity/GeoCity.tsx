import React, { Component } from 'react';
import style from './GeoCity.module.scss';
import { CityWeather } from '../CityWeather';

interface GeoCityProps {
  longitude?:string;
  latitude?:string;
}

export class GeoCity extends Component<GeoCityProps> {

  public state={
    longitude:'',
    latitude:''
  }

componentDidMount(){
this.findMyLocation();
}

private findMyLocation(){
  if (!navigator.geolocation) {
   this.error();
  } else {
    navigator.geolocation.getCurrentPosition(this.success, this.error);
  }
}
private success =async (position:any) =>{
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  await this.setState({longitude:longitude, latitude:latitude});
}
private error() {
  console.log('error');
}
    render() {
      let location = {longitude:this.state.longitude, latitude:this.state.latitude};
        return (
            <div className={style.GeoCity}>
             {this.state.longitude !== ''?<CityWeather location={location}/>:null}
            </div>
        )
    }
};





  