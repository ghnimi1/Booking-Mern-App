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
import { deleteRoom, fetchRooms } from "../../redux/actions/roomActions";
import { Link, useNavigate } from "react-router-dom";
import EditRoom from "../../components/Modal/EditRoom";
import Loader from "../../components/loader/Loader";

const Rooms = () => {
    const dispatch = useDispatch()
    const { rooms, loading } = useSelector(state => state.rooms)
    const [openModal, setOpenModal] = useState(false);
    const [id, setId] = useState(null);
    const { success: successCreate } = useSelector(state => state.createRoom)
    const { success: successDelete } = useSelector(state => state.deleteRoom)
    const { success: successUpdate } = useSelector(state => state.updateRoom)

    useEffect(() => {
        dispatch(fetchRooms())
    }, [dispatch, successCreate, successDelete, successUpdate]);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteRoom(id))
        }
    }

    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <div className="datatableTitle">
                    <div className="listTitle">Rooms</div>
                    <Link to={`newRoom`} className="link">
                        Add New Room
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
                                    <TableCell className="tableCell">Title</TableCell>
                                    <TableCell className="tableCell">Price</TableCell>
                                    <TableCell className="tableCell">Max People</TableCell>
                                    <TableCell className="tableCell">Description</TableCell>
                                    <TableCell className="tableCell">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rooms?.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell className="tableCell">{row._id}</TableCell>
                                        <TableCell className="tableCell">{row.title}</TableCell>
                                        <TableCell className="tableCell">{row.price}</TableCell>
                                        <TableCell className="tableCell">{row.maxPeople}</TableCell>
                                        <TableCell className="tableCell">{row.desc}</TableCell>
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
                                                    onClick={() => handleDelete(row._id)}
                                                >
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
                {openModal && <EditRoom setOpen={setOpenModal} id={id} />}
            </div>
        </div>
    );
};

export default Rooms;
