import React, {Component} from 'react';
import style from './DropList.module.scss';

interface DropListProps{
    onChange?:(data:any)=>void;
    arrayToggleCity?:Array<string>;  
}

class DropList extends Component<DropListProps> {

    render() {
        return (
            <div className={style.DropList}>
                <select className={style.DropListInput}
                        onClick={this.props.onChange!}
                        >{this.props.arrayToggleCity!.map((item, index) => <option
                    key={index}>{item}</option>)}</select>
            </div>
        )
    }
}

export default DropList;