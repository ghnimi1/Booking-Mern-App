import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HotelOutlined from "@mui/icons-material/HotelOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useSelector } from "react-redux";

const Widget = ({ type }) => {
    let data;
    const { users } = useSelector(state => state.users)
    const { hotels } = useSelector(state => state.hotels)
    const { rooms } = useSelector(state => state.rooms)
    const { reservations } = useSelector(state => state.reservations)

    switch (type) {
        case "users":
            data = {
                title: "USERS",
                link: "See all users",
                amount: users?.length,
                diff: users?.length / 100,
                icon: (
                    <PersonOutlinedIcon
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
        case "hotels":
            data = {
                title: "HOTELS",
                isMoney: false,
                link: "View all hotels",
                amount: hotels?.length,
                diff: hotels?.length / 100,
                icon: (
                    <HotelOutlined
                        className="icon"
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
            break;
        case "rooms":
            data = {
                title: "ROOMS",
                isMoney: true,
                link: "View all rooms",
                amount: rooms?.length,
                diff: rooms?.length / 100,
                icon: (
                    <MeetingRoomOutlinedIcon
                        className="icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                ),
            };
            break;
        case "reservations":
            data = {
                title: "RESERVATIONS",
                isMoney: true,
                link: "View all reservations",
                amount: reservations?.length,
                diff: reservations?.length / 100,
                icon: (
                    <EventAvailableIcon
                        className="icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "red" }}
                    />
                ),
            };
            break;
        default:
            break;
    }

    return (
        <div className=" col-10 col-sm-6 col-md-3 ">
            <div className="widget">
                <div className="left">
                    <span className="title">{data.title}</span>
                    <span className="counter">
                        {data.isMoney && "$"} {data?.amount && data.amount}
                    </span>
                    <span className="link">{data.link}</span>
                </div>
                <div className="right">
                    <div className="percentage positive">
                        <KeyboardArrowUpIcon />
                        {data?.diff} %
                    </div>
                    {data.icon}
                </div>
            </div>
        </div>
    );
};

export default Widget;
