import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MediaCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }} className="col-3 ms-5">
            <CardMedia
                component="img"
                height="300"
                image={props.img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.about}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><Link className='link' to={props.link}>Show All Lessons </Link></Button>
            </CardActions>
        </Card>
    );
}