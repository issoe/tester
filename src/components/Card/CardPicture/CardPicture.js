import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import '../../../assets/img/search/paella.jpg';

import './style.css';
import { isMetaProperty } from 'typescript';
// import myPicture from 'assert/img/avatar.jpg'

export default function CardPicture({ imageName, imageUrl }) {
    console.log(imageUrl)

    return (
        <div >
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    style={{ height: 0, paddingTop: '56.25%' }}
                    sx={{ height: 140 }}
                    image={require(`../../../${imageUrl}`)}
                    title="green iguana"
                />
                <CardContent className='my-card-content'>
                    <div className='my-card-text-content'>{imageName}</div>
                </CardContent>
                <CardActions className='my-footer-action'>
                    <Button size="small"><ShareIcon /></Button>
                    <Button size="small"><FavoriteBorderIcon /></Button>
                </CardActions>
            </Card>
        </div>
    );
}