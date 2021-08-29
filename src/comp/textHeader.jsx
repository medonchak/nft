import React from 'react'
import s from '../css/textHeader.module.css'

let TextHeader =(props)=>{
    return  <div className={s.index}>
                <div className={s.h1}> CREATE, EXPLORE, & COLLECT DIGITAL ART NFTS. </div>
                <div className={s.h2}> The new creative economy. </div>
                <div > <button className={s.buttonText}> START YOUR SEARCH </button>  </div>
            </div>
}

export default TextHeader; 