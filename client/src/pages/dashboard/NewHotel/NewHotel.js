import "./newHotel.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import AlertMessage from '../../../components/alert/AlertMessage'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createHotel } from "../../../redux/actions/hotelActions";
import { useNavigate } from "react-router";

const NewHotel = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [info, setInfo] = useState({});
    const [files, setFiles] = useState("");
    const [rooms, setRooms] = useState([]);
    const [list, setList] = useState([]);
    const { error, success } = useSelector(state => state.createHotel)
    const data = useSelector(state => state.rooms.rooms)
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
                    })

            })

        );
        const newhotel = {
            ...info,
            rooms,
            photos: list,
        };
        dispatch(createHotel(newhotel))
        if (success) { navigate(-1) }

    }
    return (
        <div className="new">
            <Sidebar />
            <div className="container">
                <div className="newContainer">
                    <div className="top">
                        <h1>Add New Hotel</h1>
                    </div>
                    <div className="bottom">
                        <div className="row">
                            <div className="col-12 col-md-3">
                                <div className="left">
                                    <img
                                        src={
                                            files
                                                ? URL.createObjectURL(files[0])
                                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-9">
                                <div className="right">
                                    <form>
                                        <div className="row">
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
                                                            id="name"
                                                            onChange={handleChange}
                                                            type="text"
                                                            placholder="My Hotel"
                                                        />
                                                    </div>
                                                    {error?.name && <AlertMessage error={error.name} />}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <div className="formInput">
                                                        <label>Type: </label>
                                                        <input
                                                            id="type"
                                                            onChange={handleChange}
                                                            type="text"
                                                            placholder="Hotel"
                                                        />
                                                    </div>
                                                    {error?.type && <AlertMessage error={error.type} />}
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="formInput">
                                                        <label>City: </label>
                                                        <input
                                                            id="city"
                                                            onChange={handleChange}
                                                            type="text"
                                                            placholder="Tunisia"
                                                        />
                                                    </div>
                                                    {error?.city && <AlertMessage error={error.city} />}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <div className="formInput">
                                                        <label>Address: </label>
                                                        <input
                                                            id="address"
                                                            onChange={handleChange}
                                                            type="text"
                                                            placholder="Cité ElManar.."
                                                        />
                                                    </div>
                                                    {error?.address && <AlertMessage error={error.address} />}
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="formInput">
                                                        <label>Distance from City Center: </label>
                                                        <input
                                                            id="distance"
                                                            onChange={handleChange}
                                                            type="text"
                                                            placholder="500"
                                                        />
                                                    </div>
                                                    {error?.distance && <AlertMessage error={error.distance} />}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <div className="formInput">
                                                        <label>Title: </label>
                                                        <input
                                                            id="title"
                                                            onChange={handleChange}
                                                            type="text"
                                                            placholder="The best Hotel"
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
                                                            placholder="description"
                                                        />
                                                    </div>
                                                    {error?.desc && <AlertMessage error={error.desc} />}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <div className="formInput">
                                                        <label>CheapestPrice: </label>
                                                        <input
                                                            id="cheapestPrice"
                                                            onChange={handleChange}
                                                            type="text"
                                                            placholder="100"
                                                        />
                                                    </div>
                                                    {error?.cheapestPrice && <AlertMessage error={error.cheapestPrice} />}
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="formInput">
                                                        <label>Featured: </label>
                                                        <select id="featured" onChange={handleChange}>
                                                            <option value={false}>No</option>
                                                            <option value={true}>Yes</option>
                                                        </select>
                                                    </div>
                                                    {error?.featured && <AlertMessage error={error.featured} />}
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
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default NewHotel
