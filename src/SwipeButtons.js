import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons_repeat'>
                <ReplayIcon />
            </IconButton>
            <IconButton className='swipeButtons_left'>
                <CloseIcon  />
            </IconButton>
            <IconButton className='swipeButtons_star'>
                <StarRateIcon />
            </IconButton>
            <IconButton className='swipeButtons_right'>
                <FavoriteIcon />
            </IconButton>
            <IconButton className='swipeButtons_lightning'>
                <FlashOnIcon />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
