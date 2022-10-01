import "./listhotels.scss";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import { useDispatch, useSelector } from "react-redux";
import { searchHotel } from "../../redux/actions/hotelActions";
import Loader from "../../components/loader/Loader";

const ListHotels = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [dates, setDates] = useState(location.state.dates);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const { searchHotels, loading } = useSelector(state => state.searchHotels)

    const handleSearch = () => {
        dispatch(searchHotel(destination.replace(/^./, destination[0].toUpperCase()), min, max))
    }
    return (
        <div>
            <Header type="list" />
            <div className='container'>
                <div className="listWrapper">
                    <div className='row'>
                        <div className="col-12 col-md-6">
                            <div className="listSearch mt-3">
                                <h1 className="lsTitle">Search</h1>
                                <div className="lsItem">
                                    <label>Destination</label>
                                    <input
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        placeholder={destination} type="text" />
                                </div>
                                <div className="lsItem">
                                    <label>Check-in Date</label>
                                    <span onClick={() => setOpenDate(!openDate)}>{`${format(
                                        dates[0].startDate,
                                        "MM/dd/yyyy"
                                    )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                                    {openDate && (
                                        <DateRange
                                            onChange={(item) => setDates([item.selection])}
                                            minDate={new Date()}
                                            ranges={dates}
                                        />
                                    )}
                                </div>
                                <div className="lsItem">
                                    <label>Options</label>
                                    <div className="lsOptions">
                                        <div className="lsOptionItem">
                                            <span className="lsOptionText">
                                                Min price <small>per night</small>
                                            </span>
                                            <input type="number"
                                                onChange={(e) => setMin(e.target.value)}
                                                className="lsOptionInput" />
                                        </div>
                                        <div className="lsOptionItem">
                                            <span className="lsOptionText">
                                                Max price <small>per night</small>
                                            </span>
                                            <input type="number"
                                                onChange={(e) => setMax(e.target.value)}
                                                className="lsOptionInput" />
                                        </div>
                                        <div className="lsOptionItem">
                                            <span className="lsOptionText">Adult</span>
                                            <input
                                                type="number"
                                                min={1}
                                                className="lsOptionInput"
                                                placeholder={options.adult}
                                            />
                                        </div>
                                        <div className="lsOptionItem">
                                            <span className="lsOptionText">Children</span>
                                            <input
                                                type="number"
                                                min={0}
                                                className="lsOptionInput"
                                                placeholder={options.children}
                                            />
                                        </div>
                                        <div className="lsOptionItem">
                                            <span className="lsOptionText">Room</span>
                                            <input
                                                type="number"
                                                min={1}
                                                className="lsOptionInput"
                                                placeholder={options.room}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="listResult mt-3">
                                {loading ? (
                                    <Loader />
                                ) : (
                                    <>
                                        {searchHotels?.map((item) => (
                                            <SearchItem item={item} key={item._id} />
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListHotels;