import "./navbar.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const NavbarAdmin = () => {
    const { currentUser } = useSelector(state => state.currentUser)
    const token = localStorage.getItem('token')
    return (
        <div className="navbaradmin">
            <div className="wrapper">
                <Link to={'/'} style={{ textDecoration: "none" }}>
                    <div className="logo">
                        Booking
                    </div>
                </Link>
                <div className="items">
                    {!token && (
                        <>
                            <Link to={'register'} style={{ textDecoration: "none", marginRight: '5px' }}>
                                <Button variant="contained" color="secondary">Register</Button>
                            </Link>
                            <Link to={'signin'} style={{ textDecoration: "none" }}>
                                <Button variant="contained">Login</Button>
                            </Link>
                        </>
                    )}

                    <div className="item">
                        {token && !currentUser?.isAdmin && (
                            <div className='logout' onClick={() => {
                                localStorage.removeItem('token')
                                window.location.replace('/signin')
                            }}>Logout</div>
                        )}

                        {token && (<Link to='/profile' style={{ display: 'flex', textDecoration: 'none' }}>
                            <img
                                src={currentUser ?
                                    currentUser?.img :
                                    "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                                alt=""
                                className="avatar"
                            />
                            <div style={{ fontWeight: "700", marginLeft: "10px", color: 'black' }}>{currentUser?.userName}</div>
                        </Link>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarAdmin;
