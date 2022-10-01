import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./dashboard.scss";
import Featured from "../../components/featuredAdmin/Featured";
import Table from "../../components/table/Table";
import Chart from "../../components/chart/Chart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRooms } from "../../redux/actions/roomActions";
import { fetchHotels } from "../../redux/actions/hotelActions";
import { fetchReservations } from "../../redux/actions/reservationActions";

const Dashboard = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRooms())
        dispatch(fetchHotels())
        dispatch(fetchReservations())
    }, [dispatch]);

    return (
        <div className="home">
            <Sidebar />
            <div className="container">
                <div className="widgets">
                    <div className="row">
                        <Widget type="users" />
                        <Widget type="hotels" />
                        <Widget type="rooms" />
                        <Widget type="reservations" />
                    </div>
                </div>

                <div className="listContainer">
                    <div className="listTitle">Latest Users</div>
                    <Table />
                </div>
                <div className="charts">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Featured />
                        </div>
                        <div className="col-12 col-md-6">
                            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;
