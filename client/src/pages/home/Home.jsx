import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import { fetchHotelsByCity,countHotelsByType, featuredProp } from "../../redux/actions/hotelActions";
import "./home.css";

const Home = () => {
  const dispatch=useDispatch()
useEffect(()=>{
     dispatch(fetchHotelsByCity())
    dispatch(countHotelsByType())
    dispatch(featuredProp())
},[dispatch])

  return (
    <div>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
