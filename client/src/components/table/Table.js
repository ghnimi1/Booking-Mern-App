import React, { useEffect } from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "../../redux/actions/userActions";

const List = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    return (
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users?.map((row) => (
                        <TableRow key={row.id}>
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;
