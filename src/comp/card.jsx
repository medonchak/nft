import React from 'react'
import s from '../css/card.module.css'
import logo from "../img/favicon.png"
import { Input, Space } from 'antd';
import { BellOutlined,SearchOutlined } from '@ant-design/icons';
const { Search } = Input;

let CardInfo =(props)=>{
    return <div className={s.card}>
                <div className={s.img}> <img src={props.img} alt="" /> </div>
                <div className={s.opis}> 
                    <div>{props.textone}</div>
                    <div>{props.texttwo}</div>
                </div>
            </div>
}

export default CardInfo; 