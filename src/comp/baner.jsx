import React from 'react'
import s from '../css/baner.module.css'
import baner from "../img/banner-video.jpg"
import img5 from "../img/activity-img5.jpg"
import { Input, Space } from 'antd';
import { ArrowLeftOutlined,ArrowRightOutlined } from '@ant-design/icons';
import CardInfo from './card';
const { Search } = Input;

let Baner =(props)=>{
    return <div className={s.index}>
            <div className={s.img}> <img src={baner} alt="" /> </div>
            <div className={s.indexOpis}>
                <div className={s.opis}>  
                    <div> <CardInfo img={img5} textone={"Create"} texttwo={"Enrico"}/> </div>
                    <div> <CardInfo img={img5} textone={"Create"} texttwo={"Enrico"}/> </div>
                </div>
                <div> 
                    <p className={s.globaltext}>{props.globaltext}</p>
                    <p className={s.textopis}>{props.textopis}</p>
                    <p className={s.textElement}>{props.textElement}</p>
                    <p className={s.kilkist}>{props.kilkist}</p>
                    <p className={s.price}>{props.price}</p>
                    <p className={s.noName}>Auction ending in</p>
                    <p className={s.time}>{props.time}</p>
                </div>
                    <div className={s.but1}><button>PLACE A BID</button></div>
                    <div className={s.but2}><button>VIEW ITEM</button></div>
                    <div className={s.pagina}>
                         <div className={s.q}> <ArrowLeftOutlined   style={{fontSize:20,color:"silver", margin:"7px", position: "relative"}} /> </div>
                         <div className={s.q}> <ArrowRightOutlined  style={{fontSize:20,color:"silver",margin:"7px", position: "relative"}} /></div>
                    </div>
                    
               
              
            </div>
            
        </div>
}

export default Baner; 