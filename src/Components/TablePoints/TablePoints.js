import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function TablePoints(props) {
  const { rows, handleClickOpen } = props;
  return (
    <div className='container' style={{height: '80vh'}} >
      <div className='h-100 w-100 d-flex justify-content-center align-items-center'>


        <TableContainer component={Paper} style={{ height: 450, width: '80%'}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Student Name</TableCell>
                <TableCell align="right">Primary</TableCell>
                <TableCell align="right">Subject</TableCell>
                <TableCell align="right">Points</TableCell>
                <TableCell align="right">Feadback</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                  <TableCell component="th" scope="row" onDoubleClick={() => { handleClickOpen(row) }} >
                    {row.name}
                  </TableCell>
                  <TableCell align="right">Primary {row.grade}</TableCell>
                  <TableCell align="right">{row.results[0].subject}</TableCell>
                  <TableCell align="right">{row.results[0].points}</TableCell>
                  <TableCell align="right">{row.results[0].feadback}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
    </div>
  );
}

