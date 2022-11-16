import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function SubTeachCard(props) {

    return (
        <Card sx={{ display: 'flex' }} className="col-4 ms-3 mb-4">
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto', width: "300px" }}>
                    <Typography component="div" variant="h4">
                        {props.subject}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.about}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: "60%", height: "100%" }}
                image="https://thedailyguardian.com/wp-content/uploads/2022/04/Why-Teacher-Performance-Evaluations-Are-Important.jpg"
                alt="teacher"
            />
        </Card>
    );
}