import React from 'react'
import {CompHotBit} from './hotbit'
import s from '../css/discaver.module.css'

let Discaver = ()=>{
    return <div className={s.indexDiscaver}>
        <h1>Discover</h1>
        <div className={s.navMenu}> 
            <select name="" id="">
            <option value="">Recently added</option>
            <option value="">Recently added</option>
            <option value="">Recently added</option>
            <option value="">Recently added</option>
            </select> 
            <div >
                <a>All items</a>
                <a>Art</a>
                <a>Game</a>
                <a>Photography</a>
                <a>Music</a>
                <a>Video</a>
            </div>
            <div className={s.but}>Filter</div>     
            </div>
       
        <div></div>
        <div className={s.gridDiscaver}> 
                <CompHotBit/>  
                <CompHotBit/> 
                <CompHotBit/> 
                <CompHotBit/>
                <CompHotBit/> 
                <CompHotBit/> 
                <CompHotBit/> 
                <CompHotBit/> 
        </div>
        <div> <button className={s.load}>Load more</button> </div>
    </div>
}

export default Discaver