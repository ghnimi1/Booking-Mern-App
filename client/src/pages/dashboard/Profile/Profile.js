import "./profile.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Chart from "../../../components/chart/Chart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import EditProfile from "../../../components/Modal/EditProfile";
import { fetchProfile, updatePasswordProfile } from "../../../redux/actions/userActions";
import { Button } from "@mui/material";
import TableReservation from "../../../components/table/TableReservation";
import { fetchMyReservations } from "../../../redux/actions/reservationActions";

const Profile = () => {
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)
    const [password, setPassword] = useState("")
    const { currentUser } = useSelector(state => state.currentUser)
    const { success } = useSelector(state => state.updateUserProfile)

    const { myReservations } = useSelector(state => state.myReservations)

    useEffect(() => {
        dispatch(fetchMyReservations())
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchProfile())
    }, [dispatch, success, openModal])

    return (
        <div className="single">
            {currentUser?.isAdmin && <Sidebar />}
            <div className="container">
                <div className="singleContainer">
                    <div className="top">
                        <div className='row'>
                            <div className="col-12 col-md-6">
                                <div className="left">
                                    <div className="editButton"
                                        onClick={() => {
                                            setOpenModal(true)
                                        }}
                                    >Edit</div>
                                    <h1 className="title">Information</h1>
                                    <div className="item">
                                        <img
                                            src={currentUser ?
                                                currentUser?.img :
                                                "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                                            alt=""
                                            className="itemImg"
                                        />
                                        <div className="details">
                                            <h1 className="itemTitle">{currentUser?.userName}</h1>
                                            <div className="detailItem">
                                                <span className="itemKey">Email:</span>
                                                <span className="itemValue">{currentUser?.email}</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">Phone:</span>
                                                <span className="itemValue">{currentUser?.phone}</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">City:</span>
                                                <span className="itemValue">
                                                    {currentUser?.city}
                                                </span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">Country:</span>
                                                <span className="itemValue">{currentUser?.country}</span>
                                            </div>
                                            <div className="detailItem">
                                                <div className="formInput" >
                                                    <span className="itemKey">Pass:</span>
                                                    <input
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        type='password'
                                                        placeholder="Enter Password"
                                                        id='password'
                                                    />
                                                    <Button
                                                        onClick={() => {
                                                            dispatch(updatePasswordProfile({ password }))
                                                            setPassword('')
                                                        }}>Ok</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="right">
                                    <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <h1 className="title">Last Reservations</h1>
                        <TableReservation data={myReservations} />
                    </div>
                </div>
                {openModal && <EditProfile setOpen={setOpenModal} />}
            </div>
        </div>
    );
};

export default Profile;
