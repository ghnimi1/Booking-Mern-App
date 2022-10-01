import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import './edit.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { fetchSingleUser, updateUser } from '../../redux/actions/userActions';

function EditUser({ setOpen, id }) {
    const [file, setFile] = useState("");
    const [info, setInfo] = useState({});
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    useEffect(() => {
        dispatch(fetchSingleUser(id))
    }, [dispatch, id])
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
                dispatch(updateUser(id, newUser))
            })
            .catch(err => console.log(err))
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
                    <h1>Edit User</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : user?.img
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
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

                            <div className="formInput">
                                <label>UserName</label>
                                <input
                                    defaultValue={user?.userName}
                                    onChange={handleChange}
                                    type='text'
                                    placeholder="Enter UserName"
                                    id='userName'
                                />
                            </div>
                            <div className="formInput" >
                                <label>Email</label>
                                <input
                                    defaultValue={user?.email}
                                    onChange={handleChange}
                                    type='email'
                                    placeholder="Enter Email"
                                    id='email'
                                />
                            </div>
                            <div className="formInput" >
                                <label>Phone</label>
                                <input
                                    defaultValue={user?.phone}
                                    onChange={handleChange}
                                    type='text'
                                    placeholder="Enter Phone"
                                    id='phone'
                                />
                            </div>
                            <div className="formInput" >
                                <label>Country</label>
                                <input
                                    defaultValue={user?.country}
                                    onChange={handleChange}
                                    type='text'
                                    placeholder="Enter Country"
                                    id='country'
                                />
                            </div>
                            <div className="formInput" >
                                <label>City</label>
                                <input
                                    defaultValue={user?.city}
                                    onChange={handleChange}
                                    type='text'
                                    placeholder="Enter City"
                                    id='city'
                                />
                            </div>
                            <button onClick={handleClick}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditUser;