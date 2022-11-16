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
import { getStudent } from '../../Components/Store/Actions/studentAction';


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

// function createData(day, subject1, subject2, subject3, subject4, subject5, subject6, subject7) {
//     return { day, subject1, subject2, subject3, subject4, subject5, subject6, subject7 };
// }

// const rows = [
//     createData('Sunday', "Arabic", "English", "Math", "Sience", "Social", "Computer", "French"),
//     createData('Monday', "English", "Arabic", "Sience", "Math", "Computer", "Social", "French"),
//     createData('Tuesday', "Math", "Sience", "Arabic", "English", "French", "Social", "Computer"),
//     createData('Wednesday', "Arabic", "Computer", "English", "French", "Math", "Social", "Sience"),
//     createData('Thursday', "French", "Social", "Computer", "Sience", "English", "Arabic", "Math"),


// ];

export default function TimeTable() {

    const timeTable = useSelector((state)=> state.student.list)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudent())
    },[])

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
                        <StyledTableCell align="center">12:45 - 1:30</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {timeTable.map((row) => (

                        <StyledTableRow key={row.day}>
                            <StyledTableCell component="th" scope="row">
                                {row.day}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.subject1}</StyledTableCell>
                            <StyledTableCell align="center">{row.subject2}</StyledTableCell>
                            <StyledTableCell align="center">{row.subject3}</StyledTableCell>
                            <StyledTableCell align="center">{row.subject4}</StyledTableCell>
                            <StyledTableCell align="center">{row.subject5}</StyledTableCell>
                            <StyledTableCell align="center">{row.subject6}</StyledTableCell>
                            <StyledTableCell align="center">{row.subject7}</StyledTableCell>


                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}