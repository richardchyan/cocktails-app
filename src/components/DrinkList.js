import React from 'react';
import { useGlobalContext } from '../context';
import Loading from './Loading';
import Drink from './Drink';
// import SearchForm from './SearchForm';
import { Button, Container, Grid, Typography, Card, CardMedia, CardContent, CardActions, CssBaseline } from '@material-ui/core';

const DrinkList = () => {

   const { loading, drinks } = useGlobalContext();

   if(loading){
      return <Loading />;
   }

   // if cocktails don't get returned, then add an error aka the array is less than 1, aka it's empty

   if(drinks.length < 1){
      return <h1> No drinks matched your search</h1>
   }

   return ( 
      <React.Fragment>
         <div className="drinks-heading">
            <Drink drinks={drinks} />
         </div>
      </React.Fragment>
    );
}
 
export default DrinkList;