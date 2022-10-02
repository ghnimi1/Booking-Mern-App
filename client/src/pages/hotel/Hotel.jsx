import "./hotel.css";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleHotel } from "../../redux/actions/hotelActions";
import { SearchContext } from "../../context/SearchContext";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  const location=useLocation()
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
 const { dates, options } = useContext(SearchContext);
const dispatch=useDispatch()
const token=localStorage.getItem('token')
const id = location.pathname.split("/")[2];
const {hotel,loading}=useSelector(state=>state.hotel)
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
 
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const handleClick = () => { 
    if(token){
      setOpenModal(true);
    }else{
      alert('SignIn Please !!')
    }
      
  };

useEffect(()=>{
dispatch(fetchSingleHotel(id))
},[dispatch,id])

  return (
    <div style={{marginBottom:'5px'}}>
      <Header type="list" />
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={hotel?.photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="container">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">{hotel?.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotel?.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {hotel?.distance}m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${hotel?.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {hotel?.photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className='row'>
          <div className="col-12 col-md-6">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{hotel?.title}</h1>
              <p className="hotelDesc">
                {hotel?.desc}
              </p>
            </div>
            </div>
            <div className="col-12 col-md-6">
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
              <b>${days * hotel?.cheapestPrice * options.room}</b> ({days}{" "}
                  nights)
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      {token && openModal && <Reserve setOpen={setOpenModal} id={id}/> }
    </div>
  );
};

export default Hotel;
