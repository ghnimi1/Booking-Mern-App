import "./newRoom.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import AlertMessage from '../../../components/alert/AlertMessage'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRoom } from "../../../redux/actions/roomActions";
import { useNavigate } from "react-router";

const NewRoom = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [info, setInfo] = useState({});
    const [hotelId, setHotelId] = useState(undefined);
    const [rooms, setRooms] = useState([]);

    const { hotels } = useSelector(state => state.hotels)
    const { error, success } = useSelector(state => state.createRoom)

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const roomNumbers = rooms?.toString().split(",").map((room) => ({ number: room }));
        dispatch(createRoom(hotelId, { ...info, roomNumbers }));
        if (success) { navigate(-1) }
    };

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <div className="top">
                    <h1>Add New Room</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="formInput">
                                        <label>Title: </label>
                                        <input
                                            id="title"
                                            onChange={handleChange}
                                            type="text"
                                            placholder="2 bed room"
                                        />
                                    </div>
                                    {error?.title && <AlertMessage error={error.title} />}
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="formInput">
                                        <label>Description: </label>
                                        <input
                                            id="desc"
                                            onChange={handleChange}
                                            type="text"
                                            placholder="King size bed, 1 bathroom"
                                        />
                                    </div>
                                    {error?.desc && <AlertMessage error={error.desc} />}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="formInput">
                                        <label>Price: </label>
                                        <input
                                            id="price"
                                            onChange={handleChange}
                                            type="number"
                                            placholder="100"
                                        />
                                    </div>
                                    {error?.price && <AlertMessage error={error.price} />}
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="formInput">
                                        <label>Max People: </label>
                                        <input
                                            id="maxPeople"
                                            onChange={handleChange}
                                            type="number"
                                            placholder="2"
                                        />
                                    </div>
                                    {error?.maxPeople && <AlertMessage error={error.maxPeople} />}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="formInput">
                                        <label>Rooms: </label>
                                        <textarea
                                            onChange={(e) => setRooms(e.target.value)}
                                            placeholder="give comma between room numbers."
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="formInput">
                                        <label>Choose a hotel: </label>
                                        <select
                                            id="hotelId"
                                            onChange={(e) => setHotelId(e.target.value)}
                                        >
                                            {hotels && hotels?.map((hotel) => (
                                                <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleClick}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewRoom;
