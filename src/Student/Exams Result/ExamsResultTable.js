import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGrades } from '../Store/Actions/gradesAction';

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

// function createData(subjectName, mark, fullMark, status) {
//     return { subjectName, mark, fullMark, status };
// }

// const rows = [
//     createData('Arabic', 85, 100, "sucess"),
//     createData('English', 45, 100, "failed"),
//     createData('Mathematics', 80, 100, "sucess"),

// ];

export default function ExamsResultTable() {

    const grades = useSelector ((state) => state.grades.list)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getGrades())
    },[])


    return (
        <TableContainer component={Paper} sx={{ maxWidth: 900 }}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Subject</StyledTableCell>
                        <StyledTableCell align="right">Mark</StyledTableCell>
                        <StyledTableCell align="right">Full Mark</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {grades.map((row) => (
                        <StyledTableRow key={row.subjectName}>
                            <StyledTableCell component="th" scope="row">
                                {row.subjectName}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.mark}</StyledTableCell>
                            <StyledTableCell align="right">{row.fullMark}</StyledTableCell>
                            <StyledTableCell align="right">{row.status}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}