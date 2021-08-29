import React from 'react'
import s from '../css/header.module.css'
import logo from "../img/favicon.png"
import { Input, Space } from 'antd';
import { BellOutlined,SearchOutlined } from '@ant-design/icons';
const { Search } = Input;

let Header =(props)=>{
    return <div className={s.index}>
            <div className={s.logoblock}> <img src={logo} alt="" /> </div>
            <div className={s.link}>
                <div className={s.itemLink}> <a href="#">Discover</a>  </div>
                <div className={s.itemLink}> <a href="#">How it work</a> </div>
            </div>
            <div className={s.searchblock}><input className={s.search} placeholder="Search" type="text" /> </div>
            <div >  <SearchOutlined style={{fontSize:30,color:'silver',marginTop:'30px'}}/></div>
            <div>  <BellOutlined style={{fontSize:30,color:'silver',margin:'30px'}}/></div>
            <div className={s.upload}> <button>Upload +</button></div>
            <div className={s.connect}> <button>CONNECT WALLET</button></div>
        </div>
}

export default Header; 