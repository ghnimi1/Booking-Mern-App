import "./edit.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { fetchSingleRoom, updateRoom } from "../../redux/actions/roomActions";

const EditRoom = ({ setOpen, id }) => {
    const dispatch = useDispatch()
    const [info, setInfo] = useState({});
    const [rooms, setRooms] = useState([]);
    const [hotelId, setHotelId] = useState(undefined);
    const { hotels } = useSelector(state => state.hotels)
    const { room } = useSelector(state => state.room)
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    useEffect(() => {
        dispatch(fetchSingleRoom(id))
    }, [id])
    const handleClick = async (e) => {
        e.preventDefault();
        const roomNumbers = rooms?.toString().split(",").map((room) => ({ number: room }));
        dispatch(updateRoom(id, { ...info, roomNumbers }));
        setOpen(false)
    };

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="rClose"
                    onClick={() => setOpen(false)}
                />
                <div className="top">
                    <h1>Edit Room</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label>Title: </label>
                                <input
                                    defaultValue={room?.title}
                                    id="title"
                                    onChange={handleChange}
                                    type="text"
                                    placholder="2 bed room"
                                />
                            </div>
                            <div className="formInput">
                                <label>Description: </label>
                                <input
                                    defaultValue={room?.desc}
                                    id="desc"
                                    onChange={handleChange}
                                    type="text"
                                    placholder="King size bed, 1 bathroom"
                                />
                            </div>
                            <div className="formInput">
                                <label>Price: </label>
                                <input
                                    defaultValue={room?.price}
                                    id="price"
                                    onChange={handleChange}
                                    type="number"
                                    placholder="100"
                                />
                            </div>
                            <div className="formInput">
                                <label>Max People: </label>
                                <input
                                    defaultValue={room?.maxPeople}
                                    id="maxPeople"
                                    onChange={handleChange}
                                    type="number"
                                    placholder="2"
                                />
                            </div>

                            <div className="formInput">
                                <label>Rooms: </label>
                                <textarea
                                    onChange={(e) => setRooms(e.target.value)}
                                    placeholder="give comma between room numbers."
                                />
                            </div>
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
                            <button onClick={handleClick}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditRoom;
