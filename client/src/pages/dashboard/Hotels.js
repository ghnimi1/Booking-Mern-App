import React, { useEffect, useState } from "react";
import "./style.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Sidebar from "../../components/sidebar/Sidebar";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from 'react-redux';
import { deleteHotel, fetchHotels } from "../../redux/actions/hotelActions";
import { Link, useNavigate } from "react-router-dom";
import EditHotel from "../../components/Modal/EditHotel";
import Loader from "../../components/loader/Loader";

const Hotels = () => {
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)
    const [id, setId] = useState(null)
    const { hotels, loading } = useSelector(state => state.hotels)
    const { success: successCreate } = useSelector(state => state.createHotel)
    const { success: successDelete } = useSelector(state => state.deleteHotel)
    const { success: successUpdate } = useSelector(state => state.updateHotel)

    useEffect(() => {
        dispatch(fetchHotels())
    }, [dispatch, successCreate, successDelete, successUpdate]);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteHotel(id))
        }
    }
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <div className="datatableTitle">
                    <div className="listTitle">Hotels</div>
                    <Link to={`newHotel`} className="link">
                        Add New Hotel
                    </Link>
                </div>
                {loading ? (
                    <Loader />
                ) : (
                    <TableContainer component={Paper} className="table">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="tableCell">Tracking ID</TableCell>
                                    <TableCell className="tableCell">Name</TableCell>
                                    <TableCell className="tableCell">Title</TableCell>
                                    <TableCell className="tableCell">Type</TableCell>
                                    <TableCell className="tableCell">City</TableCell>
                                    <TableCell className="tableCell">Address</TableCell>
                                    <TableCell className="tableCell">Distanace</TableCell>
                                    <TableCell className="tableCell">cheapestPrice</TableCell>
                                    <TableCell className="tableCell">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {hotels?.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell className="tableCell">{row._id}</TableCell>
                                        <TableCell className="tableCell">
                                            {row.name}
                                        </TableCell>
                                        <TableCell className="tableCell">{row.title}</TableCell>
                                        <TableCell className="tableCell">{row.type}</TableCell>
                                        <TableCell className="tableCell">{row.city}</TableCell>
                                        <TableCell className="tableCell">{row.address}</TableCell>
                                        <TableCell className="tableCell">{row.distance}</TableCell>
                                        <TableCell className="tableCell">{row.cheapestPrice}</TableCell>
                                        <TableCell className="tableCell">
                                            <div className='action'>
                                                <div className="updateButton"
                                                    onClick={() => {
                                                        setOpenModal(true)
                                                        setId(row._id)
                                                    }}
                                                >
                                                    Update
                                                </div>
                                                <div className="deleteButton"
                                                    onClick={() => handleDelete(row._id)}>
                                                    Delete
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
                {openModal && <EditHotel setOpen={setOpenModal} id={id} />}
            </div>
        </div>
    );
};

export default Hotels;
