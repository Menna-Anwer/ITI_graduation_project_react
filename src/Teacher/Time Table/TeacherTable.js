import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTimeTable } from '../../Store/Actions/gradesAction'
import { getTeacherTable } from '../../Store/Actions/teachertableAction';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function TeacherTable() {

    const teacherTable = useSelector((state) => state.teacherTimeTable.list)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeacherTable())
    }, [])

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
            <Table sx={{ maxWidth: 1200 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Day</StyledTableCell>
                        <StyledTableCell align="center">8:00 - 8:45</StyledTableCell>
                        <StyledTableCell align="center">8:45 - 9:30</StyledTableCell>
                        <StyledTableCell align="center">9:30 - 10:15</StyledTableCell>
                        <StyledTableCell align="center">10:15 - 11:00</StyledTableCell>
                        <StyledTableCell align="center">11:15 - 12:00</StyledTableCell>
                        <StyledTableCell align="center">12:00 - 12:45</StyledTableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {teacherTable.timeTable.map((row) => (
                        <StyledTableRow key={row.day}>
                            <StyledTableCell component="th" scope="row">
                                {row.day}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.classes["1"]}</StyledTableCell>
                            <StyledTableCell align="center">{row.classes["2"]}</StyledTableCell>
                            <StyledTableCell align="center">{row.classes["3"]}</StyledTableCell>
                            <StyledTableCell align="center">{row.classes["4"]}</StyledTableCell>
                            <StyledTableCell align="center">{row.classes["5"]}</StyledTableCell>
                            <StyledTableCell align="center">{row.classes["6"]}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}