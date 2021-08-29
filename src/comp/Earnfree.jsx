import React from 'react'
import saveyour from '../img/save-your.png'
import s from '../css/Earnfree.module.css'

let Earnfree =()=>{
        return <div className={s.Earnfree}>
            <div>
                <div>
                    <p className={s.txt1}>SAVE YOUR TIME WITH STACKS</p>
                    <h1 className={s.txt2}>
                        Earn free tokens <br/>
                        with Ghostdrive 
                    </h1>
                    <p className={s.txt3}>A creative agency that lead and inspire</p> 
                </div>
                <div className={s.text}>
                    <button className={s.but1}>EARN NOW</button>
                    <button className={s.but2}>DISCOVER MORE</button>
                </div>
            </div>
            <div>
                <img src={saveyour} alt="" />
            </div>
        </div>
}
export default Earnfree