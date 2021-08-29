import React from 'react'
import deactivimg1 from '../img/discover-img5.jpg'
import s from '../css/hot.module.css'
import avatar from '../img/avatar.jpg'
import imgBidElementUser from '../img/creators-img4.jpg'

let ChildHot =()=>{
    return <div className={s.hotIndex}>
            <div  className={s.activimg}>
                <img src={deactivimg1} alt="" />
            </div>
            <div className={s.imgZap}>
                <img src={deactivimg1} alt="" />
                <img src={deactivimg1} alt="" />
                <img src={deactivimg1} alt="" />
            </div>
            <div className={s.text}>
                <a>Awesome collection</a> 
                <p>
                    <img src={imgBidElementUser} alt="" />
                    By Kennith Olson
                    <a>28 ITEMS</a>
                </p>
            </div>
    </div>
}

let Hot =()=>{
    return <div> 
    <div className={s.logoText}>Hot collections   </div>
    <div className={s.conteiner}>
        <ChildHot/>
        <ChildHot/>
        <ChildHot/>
    </div>
    </div>
}

export default Hot