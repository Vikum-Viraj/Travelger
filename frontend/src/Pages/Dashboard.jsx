import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import './page.css'

export default function AccessibleTable() {
  return (
    <>
      <div className='secondContainer'>
        <div className='maindiv'>
          <div className='addplace'>
            <Link to='/addplace'>
              <Button variant='outlined'
                style={{
                  color: 'black',
                  borderWidth: '2px',
                  borderBlockColor: '#00e6e6'
                }} >Add place</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='tableContainer'>

        <TableContainer sx={{ width: '80%', marginTop: '2rem' }} component={Paper}>
          <Table >
            <TableHead >
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Desservin</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="right">Calories</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="right">Fat</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="right">Carbs</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="right">Protein</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} >Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">owname</TableCell>
                <TableCell align="right">calories</TableCell>
                <TableCell align="right">rowfat</TableCell>
                <TableCell align="right">row.carbs</TableCell>
                <TableCell align="right">owprotein</TableCell>
                <TableCell><IconButton><EditIcon /></IconButton>&nbsp;<IconButton><DeleteIcon /></IconButton></TableCell>

              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}