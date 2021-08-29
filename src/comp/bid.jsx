import React from 'react'
import s from '../css/bid.module.css'
import imgBidElementUser from '../img/creators-img4.jpg'
import imgbBidElement from '../img/gallery-img1.jpg'
import img from '../img/discover-img10.jpg'
let BidElement =()=>{
    return <div className={s.bidelement}>
        <div className={s.imgbBidElement}> <img src={imgbBidElement} alt="" /> </div>
        <div className={s.info}>
            <div>Future coming soon</div>
            
            <div className={s.textInfo}>
                <img src={imgBidElementUser} alt="" />
                <text className={s.textBut}>0.27 ETH</text>
                <text className={s.text}>1 of 3</text>   
            </div>
            <div className={s.button}><button>PLACE A BID</button></div>
        </div>
    </div>
}

let Bid =(props)=>{
    return <div className={s.bid}>
            <div className={s.bidimg}> <img src={img} alt="" /> </div>
            <div className={s.BidElement}>
                {[1,2,3].map(c=><BidElement key={c}/>)}
            </div>
    </div>
}

export default Bid