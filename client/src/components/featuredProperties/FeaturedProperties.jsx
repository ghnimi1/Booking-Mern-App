import { useSelector } from "react-redux";
import Loader from "../loader/Loader";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  
  const {featuredProp,loading}=useSelector(state=>state.featuredProp)
  
  return (
    <div className='container'>
    <div className="fp">
      {loading ? (
       <Loader/>
      ) : (
        <div className='row'>
          {featuredProp?.map((item) => (
            <div className="col-6 col-md-4">
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default FeaturedProperties;
