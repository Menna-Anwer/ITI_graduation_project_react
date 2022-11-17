import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getEvents } from '../../Store/Actions/eventAction';

export default function EventsCard(props) {
    const events = useSelector(((state) => state.event.list))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEvents())
    }, [])
    console.log(events)
    return (
        <>
            <div className="row">
                {events.map((event, index) => {
                    return (
                        <>
                            <Card sx={{ maxWidth: 600 }} className="col-5 ms-5">
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={`http://localhost:8080/${event.image}`}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {event.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {event.date}
                                    </Typography>
                                    <Typography gutterBottom variant="p" component="div">
                                        {event.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small"><Link className='link btn btn-success' to={event.location.url}> <LocationOnIcon style={{ fontSize: "24px", marginRight: "10px" }} />Event Location</Link></Button>
                                </CardActions>
                            </Card>


                        </>
                    )
                })}
            </div>

        </>

    );
}