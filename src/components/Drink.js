import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Typography, Card, CardMedia, CardContent, CardActions, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   cardMedia: {
      height: '1',
      maxWidth: '1',
      justifyContent: 'center',
   },
   detailsButton: {
      justifyContent: 'center',
   },
   card: {
      justifyContent: 'center',
   }, 

});

const Drink = ({ drinks }) => {

   const classes = useStyles();

   return (
      <React.Fragment> 
         
         <Container className={classes.cardGrid} maxWidth='lg'>
            <Grid container spacing={5} justify="space-around">
               {drinks.map(drink => (
                  <Grid item xs={10} sm={6} md={4}>
                     <Card className={classes.card}>
                        <CardMedia 
                           component="img"
                           className={classes.cardMedia} 
                           image={drink.image}
                           title={drink.name}
                        />
                        <CardContent className={classes.cardContent}>
                           <Typography gutterBottom variant="h3">
                              {drink.name}
                           </Typography>
                           <Typography variant="h10">
                              {drink.alcoholic}
                           </Typography>
                           <Typography variant="h6">
                              {drink.glass}
                           </Typography>
                        </CardContent>
                        <CardActions>
                           <Button className={classes.detailsButton} alignItems="center" justify="center" variant="contained" size="large" color="primary">
                              Details
                           </Button>
                        </CardActions>
                     </Card>
               </Grid>
               ))}
            </Grid>
         </Container>
      </React.Fragment>

      
    );
}
 
export default Drink;