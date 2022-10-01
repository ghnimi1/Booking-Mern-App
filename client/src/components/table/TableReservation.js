import React, { useEffect } from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableReservation = ({ data }) => {

    return (
        <TableContainer component={Paper} className="table" key={data?._id}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">RoomTitle</TableCell>
                        <TableCell className="tableCell">Max-People</TableCell>
                        <TableCell className="tableCell">Price</TableCell>
                        <TableCell className="tableCell">RoomNumber</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell className="tableCell">{row._id}</TableCell>
                            <TableCell className="tableCell">
                                {row.roomTitle}
                            </TableCell>
                            <TableCell className="tableCell">{row.maxPeople}</TableCell>
                            <TableCell className="tableCell">{row.price} $</TableCell>
                            <TableCell className="tableCell">{row.roomNumbers.map(r => `| ${r?.number}`)} |</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableReservation;
