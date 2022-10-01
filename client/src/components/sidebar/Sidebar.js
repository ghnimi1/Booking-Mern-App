import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import HotelOutlined from "@mui/icons-material/HotelOutlined";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <span className="logo">admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/dashboard/hotels" style={{ textDecoration: "none" }}>
                        <li>
                            <HotelOutlined className="icon" />
                            <span>Hotels</span>
                        </li>
                    </Link>
                    <Link to="/dashboard/rooms" style={{ textDecoration: "none" }}>
                        <li>
                            <MeetingRoomOutlinedIcon className="icon" />
                            <span>Rooms</span>
                        </li>
                    </Link>
                    <Link to="/dashboard/reservations" style={{ textDecoration: "none" }}>
                        <li>
                            <EventAvailableIcon className="icon" />
                            <span>Reservations</span>
                        </li>
                    </Link>

                    <p className="title">USER</p>
                    <Link to="/profile" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>Profile</span>
                        </li>
                    </Link>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span onClick={() => {
                            localStorage.removeItem('token')
                            window.location.replace('/signin')
                        }}>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
            </div>
        </div>
    );
};

export default Sidebar;
