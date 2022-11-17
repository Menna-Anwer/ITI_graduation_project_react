import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function CardForLessons(props) {
    const Video = () => {
        return (
            <video controls width="100%">
                <source src={`http://localhost:8080/${props.url}`} type="video/mp4" />
            </video>
        )
    }
    return (
        <Card sx={{ maxWidth: 380 }} className="col-3 ms-5 mb-5">
            <CardMedia
                component={Video}
                height="140 "

            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    Subject : {props.subject}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Title : {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade : Primary {props.grade}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><a className='link btn btn-primary' href={`http://localhost:8080/${props.url}`}>Download now </a></Button>
            </CardActions>
        </Card>
    );
}