import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function MediaCard(props) { 
  const {title,video,subject,grade}= props
  
  const Video = () => {
    return(
      <video controls width="100%"> 
        <source src={`http://localhost:8080/${video}`} type="video/mp4"/>
      </video>
    )
  }
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-4">
         <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component={Video}
        height="140"
      />
      <CardContent>
      <Typography gutterBottom variant="h6" component="div">
           {subject}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {grade}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined"  color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<EditIcon/>}>
        Edit
      </Button>
      </CardActions>
    </Card>
    </div>
   
  );
}
