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
import '../../Pages/page.css'
import { Link, NavLink } from 'react-router-dom';

const Cart = () => {
  return (
    <>
        <>
      <div className='secondContainer'>
        <div className='maindiv'>
          <div className='addplace'>
            <Link to='/'>
              <Button variant='outlined'
                style={{
                  color: 'black',
                  borderWidth: '2px',
                  borderBlockColor: '#00e6e6'
                }} >Go back</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='tableContainer'>
        <TableContainer sx={{ width: '80%', marginTop: '2rem' }} component={Paper}>
          <Table >
            <TableHead >
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Place Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} >Location</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} >Price</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} >Description</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} >Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                  <TableRow >
                    <TableCell >place.place</TableCell>
                    <TableCell >place.location</TableCell>
                    <TableCell >Rs .place.price</TableCell>
                    <TableCell >place.description</TableCell>
                    <TableCell sx={{ width: '140px', height: '50px'}}><img style={{borderRadius:'5px'}} ></img></TableCell>
                    <TableCell >
                      <IconButton><DeleteIcon /></IconButton>
                    </TableCell>
                  </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <h3 style={{display:'flex',marginLeft:'4rem',marginTop:'2rem'}}>Total is Rs.789</h3>
    </>
    </>
  )
}

export default Cart
