import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const mapped = {
  1: 'Arabic',
  2: 'English',
  3: 'Math',
  4: 'Sience',
  5: 'Social studies',
  6: 'Computer',
  7: 'Frinsh'
}
export default function MediaCard(props) {
  const { title, video, subject, grade, ele, handleClickOpen, handleDelete,hidden} = props

  const Video = () => {
    return (
      <video controls width="100%">
        <source src={`http://localhost:8080/${video}`} type="video/mp4" />
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
            {mapped[subject]}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {grade}
          </Typography>
        </CardContent>
        <CardActions hidden={hidden}>
          <Button variant="outlined" onClick={() => {
            handleDelete(ele._id)
          }} color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" onClick={() => {
            handleClickOpen(ele)
          }} endIcon={<EditIcon />}>
            Edit
          </Button>
        </CardActions>
      </Card>
    </div>

  );
}
