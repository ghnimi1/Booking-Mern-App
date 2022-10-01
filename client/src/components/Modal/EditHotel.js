import "./edit.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { fetchSingleHotel, updateHotel } from "../../redux/actions/hotelActions";

const EditHotel = ({ setOpen, id }) => {
    const dispatch = useDispatch()
    const [info, setInfo] = useState({});
    const [files, setFiles] = useState("");
    const [rooms, setRooms] = useState([]);
    const [list, setList] = useState([]);
    const data = useSelector(state => state.rooms.rooms)
    const { hotel } = useSelector(state => state.hotel)

    useEffect(() => {
        dispatch(fetchSingleHotel(id))
    }, [id])
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
    const handleSelect = (e) => {
        const value = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setRooms(value);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        await Promise.all(
            Object.values(files).map(async (file) => {
                const formdata = new FormData();
                formdata.append("file", file);
                formdata.append("upload_preset", "upload");
                await fetch("https://api.cloudinary.com/v1_1/dnw7or6mq/image/upload", {
                    method: "post",
                    body: formdata
                }).then(resp => resp.json())
                    .then(data => {
                        const url = data.url
                        list.push(url)
                        const newhotel = {
                            ...info,
                            rooms,
                            photos: list,
                        };
                        dispatch(updateHotel(id, newhotel))
                        setOpen(false)
                    })
            })
        );
    }
    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="rClose"
                    onClick={() => setOpen(false)}
                />
                <div className="top">
                    <h1>Edit Hotel</h1>
                </div>
                <div className="bottom">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="left">
                                <img
                                    src={
                                        files
                                            ? URL.createObjectURL(files[0])
                                            : hotel?.photos[0]
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="right">
                                <form>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="formInput">
                                                <label htmlFor="file">
                                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                                </label>
                                                <input
                                                    type="file"
                                                    id="file"
                                                    multiple
                                                    onChange={(e) => setFiles(e.target.files)}
                                                    style={{ display: "none" }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="formInput">
                                                <label>Name: </label>
                                                <input
                                                    defaultValue={hotel?.name}
                                                    id="name"
                                                    onChange={handleChange}
                                                    type="text"
                                                    placholder="My Hotel"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="formInput">
                                                <label>Type: </label>
                                                <input
                                                    defaultValue={hotel?.type}
                                                    id="type"
                                                    onChange={handleChange}
                                                    type="text"
                                                    placholder="Hotel"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="formInput">
                                                <label>City: </label>
                                                <input
                                                    defaultValue={hotel?.city}
                                                    id="city"
                                                    onChange={handleChange}
                                                    type="text"
                                                    placholder="Tunisia"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="formInput">
                                                <label>Address: </label>
                                                <input
                                                    defaultValue={hotel?.address}
                                                    id="address"
                                                    onChange={handleChange}
                                                    type="text"
                                                    placholder="Cité ElManar.."
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="formInput">
                                                <label>Distance from City Center: </label>
                                                <input
                                                    defaultValue={hotel?.distance}
                                                    id="distance"
                                                    onChange={handleChange}
                                                    type="text"
                                                    placholder="500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="formInput">
                                                <label>Title: </label>
                                                <input
                                                    defaultValue={hotel?.title}
                                                    id="title"
                                                    onChange={handleChange}
                                                    type="text"
                                                    placholder="The best Hotel"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="formInput">
                                                <label>Description: </label>
                                                <input
                                                    defaultValue={hotel?.desc}
                                                    id="desc"
                                                    onChange={handleChange}
                                                    type="text"
                                                    placholder="description"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="formInput">
                                                <label>Price: </label>
                                                <input
                                                    defaultValue={hotel?.cheapestPrice}
                                                    id="cheapestPrice"
                                                    onChange={handleChange}
                                                    type="text"
                                                    placholder="100"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="formInput">
                                                <label>Featured: </label>
                                                <select id="featured" defaultValue={hotel?.featured} onChange={handleChange}>
                                                    <option value={false}>No</option>
                                                    <option value={true}>Yes</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="selectRooms">
                                                <label>Rooms: </label>
                                                <select id="rooms" multiple onChange={handleSelect}>
                                                    {data &&
                                                        data?.map((room) => (
                                                            <option key={room._id} value={room._id}>
                                                                {room.title}
                                                            </option>
                                                        ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <button onClick={handleClick}>Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div >
    );
}
export default EditHotel
