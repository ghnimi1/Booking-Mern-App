import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Sidebar from '../../../components/sidebar/Sidebar';
import AlertMessage from '../../../components/alert/AlertMessage';
import { register } from '../../../redux/actions/authActions';
import './newUser.scss'
import { useNavigate } from 'react-router';

function NewUser(props) {
    const navigate = useNavigate()
    const [file, setFile] = useState("");
    const [info, setInfo] = useState({});
    const dispatch = useDispatch()
    const { error, success } = useSelector(state => state.userRegister)
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("file", file);
        formdata.append("upload_preset", "upload");
        await fetch("https://api.cloudinary.com/v1_1/dnw7or6mq/image/upload", {
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
                dispatch(register(newUser))
            }).catch(err => console.log(err))
        if (success) { navigate(-1) }

    };
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                {error && <AlertMessage error={error} />}
                <div className="top">
                    <h1>Add New User</h1>
                </div>
                <div className="bottom">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="left">
                                <img
                                    src={
                                        file
                                            ? URL.createObjectURL(file)
                                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-9">
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
                                            onChange={handleChange}
                                            type='text'
                                            placeholder="Enter UserName"
                                            id='userName'
                                        />
                                    </div>
                                    <div className="formInput" >
                                        <label>Email</label>
                                        <input
                                            onChange={handleChange}
                                            type='email'
                                            placeholder="Enter Email"
                                            id='email'
                                        />
                                    </div>
                                    <div className="formInput" >
                                        <label>Password</label>
                                        <input
                                            onChange={handleChange}
                                            type='password'
                                            placeholder="Enter Password"
                                            id='password'
                                        />
                                    </div>
                                    <div className="formInput" >
                                        <label>Phone</label>
                                        <input
                                            onChange={handleChange}
                                            type='text'
                                            placeholder="Enter Phone"
                                            id='phone'
                                        />
                                    </div>
                                    <div className="formInput" >
                                        <label>Country</label>
                                        <input
                                            onChange={handleChange}
                                            type='text'
                                            placeholder="Enter Country"
                                            id='country'
                                        />
                                    </div>
                                    <div className="formInput" >
                                        <label>City</label>
                                        <input
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
            </div>
        </div>
    );
}

export default NewUser;