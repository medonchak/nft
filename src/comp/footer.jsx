import React from 'react'
import s from '../css/footer.module.css'
import fav from '../img/favicon.png'
let Footer =(props)=>{
    return <div>
        <div className={s.footerTop}>
            <div>
                <img src={fav} alt="" />
                <a>Ghost drive</a>
                <p className={s.newCret}>The New Creative Economy.</p> 
            </div>
            <div>
                <a>Crypter.</a>
                <p>Discover</p>
                <p>Connect wallet</p>
                <p>Create item</p>
            </div>
            <div>
             <a>Info</a>
            <p>Download </p>
             <p>Demos</p>
             <p>Support</p>
            </div>
            <div> 
                <a>Join Newsletter</a>
                <p>Subscribe our newsletter to get more </p>
                <p> free design course and resource</p>
                <input type="text" placeholder="Enter you email" />
            </div>
        </div>
        <div className={s.fotText}>
        <a>Copyright © 2021 Ghost Drive. All rights reserved</a> 
        <a>We use cookies for better service. Accept</a>

        </div>
           

    </div>
}
export default Footer