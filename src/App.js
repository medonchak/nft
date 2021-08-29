import logo from './logo.svg';
import './App.css';
import Header from './comp/header';
import TextHeader from './comp/textHeader';
import Baner from './comp/baner';
import Bid from './comp/bid';
import Salers from './comp/slider';
import HotBit from './comp/hotbit';
import Hot from './comp/Hotcollections';
import Discaver from './comp/discaver';
import Earnfree from './comp/Earnfree';
import Footer from './comp/footer';

let state = {
    globaltext:"the create network",
    textopis:"Once describe as a multidisciplinary visual artist whose works explore imagination and reality through narrative-driven, layered compositions.",
    textElement:"Current Bid",
    kilkist:"1.00 ETH",
    price:"$3,618.36",
    time:"19 24 19",
    timeText:"Hrs mins secs"

}

let  App =() => {
  return (
    <div className="App">
      <Header/>
      <TextHeader/>
      <Baner globaltext={state.globaltext} textopis={state.textopis} textElement={state.textElement} kilkist={state.kilkist} price={state.price} time={state.time}/> 
      <Bid/>
      <Salers/>
      <HotBit/>
      <Hot/>  
      <Discaver/>  
      <Earnfree/>  
      <Footer/>
     </div>
  );
}

export default App;
