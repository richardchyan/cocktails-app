import React from 'react';
import { useGlobalContext } from '../context';
import Loading from './Loading';
import Drink from './Drink';
import { Button, Container, Grid, Typography, Card, CardMedia, CardContent, CardActions, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
 drinkList : {
    
 }

});

const DrinkList = () => {

   const classes = useStyles();

   const { loading, drinks } = useGlobalContext();

   if(loading){
      return <Loading />;
   }

   // if cocktails don't get returned, then add an error aka the array is less than 1, aka it's empty

   if(drinks.length < 1){
      return <h1> No drinks matched your search</h1>
   }

   return ( 
      <>
         <h1 className="drinks-heading">
            List of drinks
         </h1>
         <div className={classes.drinkList}>
            <Drink drinks={drinks} />
         </div>
      </>
    );
}
 
export default DrinkList;