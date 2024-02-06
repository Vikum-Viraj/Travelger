import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlaceIcon from '@mui/icons-material/Place';
import './main.css'
import { IconButton } from '@mui/material';

const TravelCard = ({id,tittle,image,description}) => {
    return (
        <div>
            <Card sx={{ maxWidth: 270 }} key={id} style={{borderRadius:'8px'}}>
                <CardMedia
                    sx={{ height: 160,cursor:'pointer' }}
                    image={image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography  variant="h6" >
                        {tittle}
                    </Typography>
                    <div className='location'>
                    <PlaceIcon sx={{color:'#696969'}}/>
                    <Typography fontSize='body2' sx={{color:'#696969'}} >
                        Galle
                    </Typography>
                    </div>
                    <hr/>
                    <div className='price'>
                        <Typography fontSize='body2'>
                            Rental Price
                        </Typography>
                        <Typography fontSize='body2'>
                                $120
                        </Typography>
                    </div>
                    <hr/>
                    <div className='description' style={{marginTop:'0.5rem'}}>
                    <Typography variant='small' fontSize={"16px"} color="text.secondary">
                        {description}
                    </Typography>
                    </div>
                </CardContent>
                <CardActions sx={{marginLeft:'0.5rem'}}>
                    <Button size="small"  sx={{ borderBlockColor: '#00e6e6',color:'#476b6b'}} variant='outlined'>Add to cart</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default TravelCard
