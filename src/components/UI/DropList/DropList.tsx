import React, {Component} from 'react';
import style from './DropList.module.scss';

interface DropListProps{
    cityName?:string;
    onChange?:(data:any)=>void;
    arrayToggleCity?:Array<string>;  
}

class DropList extends Component<DropListProps> {


    private renderList = ()=>{
        const {cityName, onChange, arrayToggleCity }=this.props;
        let city = arrayToggleCity?.filter((item:any)=>item === cityName);
        if(cityName !== city![0]){
            let newArrayCity = arrayToggleCity!.length >10? arrayToggleCity!.slice(0, 9): arrayToggleCity!;
            return cityName !== ''? newArrayCity!.map((item, index)=>
                <li onClick={onChange!} key={index} >{item}</li>
            ):null;
        }else{
            return null;
        }
        
    };
        
    render() {
        return (
            <div className={style.DropList}>
                <ul className={style.List}>
                {this.renderList()}
                </ul>
            </div>
        )
    }
}

export default DropList;