import React from 'react'
import s from '../css/sliderHot.module.css'
import imgBidElementUser from '../img/creators-img4.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import hotbitImg1 from '../img/hot-bid-img1.jpg'


export let CompHotBit = (props)=>{
    return <div key={props.key} className={s.comp}>
        <div  className={s.index}>
                <div className={s.imgSalersComp}>
                     <img src={hotbitImg1} alt="" />
                </div>
                <div>
                  <div className={s.styleindexopis}>
                      <div  className={s.textindexopis} >Amazing digital art</div>
                      <div className={s.priceSalersComp}> <a> 1.125 ETH</a></div>
                  </div>
                  <div className={s.styleindexopis}>
                      <div className={s.imgComp} > 
                            <img className={s.three} src={imgBidElementUser} alt="" /> 
                            <img className={s.seven} src={imgBidElementUser} alt="" />
                            <img className={s.ace} src={imgBidElementUser} alt="" />
                      </div>
                      <div>3 in stock</div>
                  </div>
                  <div className={s.styleindexopis}>
                      <div> <a >Highest bid</a>  0.001 ETH</div>
                      <div> <a> New bid</a> </div>
                  </div>
                </div>
            </div>
        </div>
}


export class SimpleSlider extends React.Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        useCSS:true,
        speed: 500,
        cssEase: "linear",
        arrows:false
      };
      let arrayComp=[1]
      return (
        <div className={s.sliderHobit}>
           
              <div className={s.podpisSalers}>
                    <div>
                        <h2>Hot bid</h2>
                    </div>
                    <div className={s.button}>
                        <div className={s.but}> <IoIosArrowRoundBack onClick={this.previous} style={{width:"30px", height:"30px"}}/> </div>
                        <div className={s.but}>    <IoIosArrowRoundForward onClick={this.next} style={{width:"30px", height:"30px"}}/> </div>
                    </div>
             </div> 
          
            <div className={s.sl}> 
            <Slider  ref={c => (this.slider = c)} {...settings}>
                    {[1,2,3,4,5,6].map(c=>  <CompHotBit key={c}/>)}
                </Slider>  
    
                
            </div>
           
        </div>
      );
    }
  }


let HotBit = ()=>{
   
    return <div className={s.indexHobit}>
                 <SimpleSlider/> 
            </div>
}
export default HotBit