import React, { useEffect } from "react";
import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { fetchReservations } from "../../redux/actions/reservationActions";
import TableReservation from "../../components/table/TableReservation";

const Reservations = () => {
    const dispatch = useDispatch()
    const { reservations, loading } = useSelector(state => state.reservations)

    useEffect(() => {
        dispatch(fetchReservations())
    }, [dispatch]);

    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <div className="datatableTitle">
                    <div className="listTitle">Reservations</div>
                </div>
                {loading ? (
                    <Loader />
                ) : (
                    <TableReservation data={reservations} />
                )}
            </div>
        </div >
    );
};

export default Reservations;
