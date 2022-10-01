import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import './edit.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { updateUserProfile } from '../../redux/actions/userActions';

function EditProfile({ setOpen }) {
    const [file, setFile] = useState("");
    const [info, setInfo] = useState({});
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.currentUser)

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("file", file);
        formdata.append("upload_preset", "upload");
        await fetch("  https://api.cloudinary.com/v1_1/dnw7or6mq/image/upload", {
            method: "post",
            body: formdata
        })
            .then(resp => resp.json())
            .then(data => {
                const url = data.url
                const newUser = {
                    ...info,
                    img: url
                }
                dispatch(updateUserProfile(newUser))
            })
            .catch(err => console.log(err))
        setOpen(false)
    };

    return (
        <div className='container'>
            <div className="reserve">
                <div className="rContainer">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="rClose"
                        onClick={() => setOpen(false)}
                    />
                    <div className="top">
                        <h1>Edit Profile</h1>
                    </div>
                    <div className="bottom">
                        <div className='row'>
                            <div className="col-12 col-md-3">
                                <div className="left">
                                    <img
                                        src={
                                            file
                                                ? URL.createObjectURL(file)
                                                : currentUser?.img
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-9">
                                <div className="right">
                                    <form>
                                        <div className="row">
                                            <div className="col-12 col-md-6 mb-5">
                                                <div className="formInput ">
                                                    <label htmlFor="file">
                                                        Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="file"
                                                        onChange={(e) => setFile(e.target.files[0])}
                                                        style={{ display: "none" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="formInput">
                                                    <label>UserName: </label>
                                                    <input
                                                        defaultValue={currentUser?.userName}
                                                        onChange={handleChange}
                                                        type='text'
                                                        placeholder="Enter UserName"
                                                        id='userName'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div className="formInput" >
                                                    <label>Email: </label>
                                                    <input
                                                        defaultValue={currentUser?.email}
                                                        onChange={handleChange}
                                                        type='email'
                                                        placeholder="Enter Email"
                                                        id='email'
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="formInput" >
                                                    <label>Phone: </label>
                                                    <input
                                                        defaultValue={currentUser?.phone}
                                                        onChange={handleChange}
                                                        type='text'
                                                        placeholder="Enter Phone"
                                                        id='phone'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div className="formInput" >
                                                    <label>Country: </label>
                                                    <input
                                                        defaultValue={currentUser?.country}
                                                        onChange={handleChange}
                                                        type='text'
                                                        placeholder="Enter Country"
                                                        id='country'
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="formInput" >
                                                    <label>City: </label>
                                                    <input
                                                        defaultValue={currentUser?.city}
                                                        onChange={handleChange}
                                                        type='text'
                                                        placeholder="Enter City"
                                                        id='city'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={handleClick}>Send</button>
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

export default EditProfile;