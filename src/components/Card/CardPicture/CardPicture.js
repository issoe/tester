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
// import '../../../assets/img/search/pic1.jpg';

import './style.css';
import { isMetaProperty } from 'typescript';
// import myPicture from 'assert/img/avatar.jpg';

export default function CardPicture({ imgName, imgUrl }) {
    
    console.log()
    return (
        <div className='my-card-item'>

            hello
            {/* <img src='../../../assets/img/search/pic1.jpg' alt='Hello'/> */}
            <img src={require('assets/img/search/pic2.jpg')}/>

            {/* <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    className='my-card-photo'
                    sx={{ height: 140 }}
                    // image={require(`../../../${imageUrl}`)}
                    image={require('assets/img/search/pic1.jpg')}
                    title="Reptile"
                />

                <div className='my-image-name-outer'>
                    <div className='my-image-name'>{imageName}</div>
                </div>

                                
                <div className='my-action'>
                    <Button className='my-action-btn'><ShareIcon className='my-action-btn-doing' /></Button>
                    <Button className='my-action-btn'><FavoriteBorderIcon className='my-action-btn-doing' /></Button>
                </div>
            </Card> */}
        </div>
    );
}