import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CustomNavLink } from './Utils/customStyledComponents'
import theme from '../theme';

export const HomeCard = ({
    disableCard=true, 
    imgLink="/static/cards/question_mark.jpeg", 
    link,
    title="Nothing yet...", 
    desc="I'll get here eventually"
  }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, paddingTop:'5%' }}
        image={imgLink}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" disabled={disableCard} sx={{ "&:hover": { backgroundColor: `${theme.palette.secondary.main}`} }}>
          <CustomNavLink to={link}>
            View
          </CustomNavLink>
        </Button>
        <Button size="small" disabled={disableCard} sx={{ "&:hover": { backgroundColor: `${theme.palette.secondary.main}`} }}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}