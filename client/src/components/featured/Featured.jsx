import { useSelector } from "react-redux";
import Loader from "../loader/Loader";
import "./featured.css";

const Featured = () => {
  const {hotelsByCity,loading}=useSelector(state=>state.hotelsByCity)
  return (
    <div className="container">
    <div className="featured">
       {loading ? (
       <Loader/>
      ) : (
        <div className='row'>
          <div className="col-6 col-md-4">
      <div className="featuredItem">
        <img
          src="https://res.cloudinary.com/dnw7or6mq/image/upload/v1664651610/upload/1653224534672_njab8t.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tunis</h1>
          <h2>{hotelsByCity && hotelsByCity[0]} properties</h2>
        </div>
      </div>
      </div>
      <div className="col-6 col-md-4">
      <div className="featuredItem">
        <img
          src="https://res.cloudinary.com/dnw7or6mq/image/upload/v1664651755/upload/plage-sousse-boujaafar_oi30m8.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sousse</h1>
          <h2>{hotelsByCity && hotelsByCity[1]} properties</h2>
        </div>
      </div>
      </div>
      <div className="col-6 col-md-4">
      <div className="featuredItem">
        <img
          src="https://res.cloudinary.com/dnw7or6mq/image/upload/v1664651754/upload/img-20190813-193236-largejpg_rsrhbw.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sfax</h1>
          <h2>{hotelsByCity && hotelsByCity[2]} properties</h2>
        </div>
      </div>
      </div>
      </div>
      )}
    </div>
    </div>
  );
};

export default Featured;
