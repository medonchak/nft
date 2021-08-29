import React from 'react'
import s from '../css/slider.module.css'
import imgBidElementUser from '../img/creators-img4.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

let Comp = (props)=>{
    return <div key={props.key} className={s.comp}>
        <div  className={s.index}>
                <div className={s.titel}>
                    <div className={s.hash}>{props.hash}</div>
                    <div className={s.link}></div>
                </div>
                <div className={s.podpis}>
                    <img src={imgBidElementUser} alt="" />
                    <p className={s.name}>{props.name}</p>
                    <p className={s.price}>{props.price}</p>
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
      let arrayComp=[{name:'Edd Haris',price:'2.456 ETH',hash:'#1'},{name:'Odell Hane',price:'2.456 ETH',hash:'#2'},
      {name:'Marlee Kuphal',price:'2.456 ETH',hash:'#3'},{name:'Payton Kunde',price:'2.456 ETH',hash:'#4'},
      {name:'Edd Haris',price:'2.456 ETH',hash:'#5'},{name:'Edd Haris',price:'2.456 ETH',hash:'#6'},
      {name:'Edd Haris',price:'2.456 ETH',hash:'#7'},{name:'Edd Haris',price:'2.456 ETH',hash:'#8'}]
      return (
        <div className={s.slider}>
            <div className={s.but}> <IoIosArrowRoundBack onClick={this.previous} style={{width:"20px", height:"20px"}}/> </div>
            <div className={s.sl}>    
                <Slider  ref={c => (this.slider = c)} {...settings}>
                    {arrayComp.map(c=><Comp hash={c.hash} name={c.name} price={c.price} key={c}/>)}
                </Slider>
            </div>
            <div className={s.but}>    <IoIosArrowRoundForward onClick={this.next} style={{width:"20px", height:"20px"}}/> </div>
        </div>
      );
    }
  }


let Salers = ()=>{
    return <div className={s.indexSalares}>
        <div className={s.titelSalares}>
           <div>
           <p className={s.textpopular}>Popular</p>
            <select className={s.select} name=""  id="">
                <option value=""> Sellers </option>
            </select>
            </div>
            <div>
            <select className={s.today} name="" id="">
                <option value="">Today</option></select>    
            </div> 
        </div>
        <div> <SimpleSlider/> </div>
        
    </div>
}
export default Salers