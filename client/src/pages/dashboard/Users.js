import React, { useEffect, useState } from "react";
import "./style.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Sidebar from "../../components/sidebar/Sidebar";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from "../../redux/actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import EditUser from "../../components/Modal/EditUser";
import Loader from "../../components/loader/Loader";

const Users = () => {
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)
    const [id, setId] = useState(null)
    const { users, loading } = useSelector(state => state.users)
    const { success } = useSelector(state => state.userRegister)
    const { success: successDelete } = useSelector(state => state.deleteUser)
    const { success: successUpdate } = useSelector(state => state.updateUser)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch, success, successDelete, successUpdate]);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteUser(id))
        }
    }

    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <div className="datatableTitle">
                    <div className="listTitle">Users</div>
                    <Link to={`newUser`} className="link">
                        Add New User
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
                                    <TableCell className="tableCell">UserName</TableCell>
                                    <TableCell className="tableCell">Email</TableCell>
                                    <TableCell className="tableCell">Country</TableCell>
                                    <TableCell className="tableCell">City</TableCell>
                                    <TableCell className="tableCell">Phone</TableCell>
                                    <TableCell className="tableCell">Status</TableCell>
                                    <TableCell className="tableCell">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users?.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell className="tableCell">{row._id}</TableCell>
                                        <TableCell className="tableCell">
                                            {row.userName}
                                        </TableCell>
                                        <TableCell className="tableCell">{row.email}</TableCell>
                                        <TableCell className="tableCell">{row.country}</TableCell>
                                        <TableCell className="tableCell">{row.city}</TableCell>
                                        <TableCell className="tableCell">{row.phone}</TableCell>
                                        <TableCell className="tableCell">
                                            <span className={`status ${row.isAdmin}`}>{row.isAdmin ? <CheckCircleOutlineIcon /> : <HighlightOffIcon />}</span>
                                        </TableCell>
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
                {openModal && <EditUser setOpen={setOpenModal} id={id} />}
            </div>
        </div >
    );
};

export default Users;
