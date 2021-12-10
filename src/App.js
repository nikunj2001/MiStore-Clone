import './App.css';
import Nav from './components/Nav';
import Navbar from './components/Navbar';
import Slider from './components/Slider.js';
import Offers from './components/Offers.js';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import ProductReviews from './components/ProductReviews.js';
import HotAccessories from './components/HotAccessories';
import Videos from './components/Videos.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
import data from "./data/data.json"
function App() {
  return (
    <Router>
      <>
        <Nav/>
        <Navbar/>
        <Slider start={data.banner.start} />
        <Offers offer={data.offer}/>
        <Heading text="STAR PRODUCTS" />
        <StarProduct starProduct={data.starProduct} />
        <Heading text="HOT ACCESSORIES"/>
        <HotAccessoriesMenu/>
        <Switch>
        <Route path="/music" exact    >
          <HotAccessories  music={data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music} />
          </Route>
        <Route path="/smartDevice" exact>
          <HotAccessories  smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
          </Route>
          
       <Route exact path="/home">
       <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />
       </Route>

       <Route exact path="/lifestyle">
       <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />
       </Route>


       <Route exact path="/mobileAccessories">
       <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />
       </Route>

      
        </Switch>
         <Heading  text="PRODUCT REVIEWS" />
       <ProductReviews productReviews={data.productReviews}  />
        <Heading text="VIDEOS" />
        <Videos videos={data.videos} />
        <Banner banner={data.banner} />
        <Footer footer={data.footer} />
      </>
          
    </Router>
  );
}
export default App;
