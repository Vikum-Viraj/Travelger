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
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './page.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function AccessibleTable() {

  const navigate = useNavigate()
  const [places, setPlace] = useState([])

  const deletePlace = async(id) => {
    const res = await axios.delete(`http://localhost:5001/post/delete/${id}`)
    if(res.status == 200){
      getAllPlaces()
    }else{
      console.log('error deleting')
    }

  }
  const getAllPlaces = async () => {
    const response = await axios.get('http://localhost:5001/post/all')
    const place = await response.data
    setPlace(place)
  }

  useEffect(() => {
    getAllPlaces()
  }, [])

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
                <TableCell sx={{ fontWeight: 'bold' }}>Place Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} >Location</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} >Price</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} >Description</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} >Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                places.map((place, index) => (
                  <TableRow key={index}>
                    <TableCell >{place.place}</TableCell>
                    <TableCell >{place.location}</TableCell>
                    <TableCell >Rs .{place.price}</TableCell>
                    <TableCell >{place.description}</TableCell>
                    <TableCell sx={{ width: '140px', height: '50px'}}><img style={{borderRadius:'5px'}} src={place.img}></img></TableCell>
                    <TableCell >
                      <NavLink to={`/updateplace/${place._id}`}><IconButton><EditIcon /></IconButton></NavLink>
                      &nbsp;
                      <IconButton onClick={() => deletePlace(place._id)}><DeleteIcon /></IconButton>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}