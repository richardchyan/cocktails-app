import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Container, Grid, Typography, Card, CardMedia, CardContent, CardActions, CssBaseline, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   cardMedia: {
      height: '1',
      maxWidth: '1',
      justifyContent: 'center',
   },
   detailsButton: {
      justifyContent: 'center',
      textAlign:'center',
   },
   card: {
      justifyContent: 'center',
   }, 

});

const Drink = ({ drinks }) => {

   const history = useHistory();
   const classes = useStyles();

   return (
      <React.Fragment> 
         
         <Container className={classes.cardGrid} maxWidth='lg'>
            <Grid container spacing={5} justify="center" >
               {drinks.map(drink => (
                  <Grid item key={drink.id} xs={10} sm={6} md={4}>
                     <Card className={classes.card}>
                        <CardMedia 
                           component="img"
                           className={classes.cardMedia} 
                           image={drink.image}
                           title={drink.name}
                        />
                        <CardContent className={classes.cardContent}>
                           <Typography gutterBottom variant="h4">
                              {drink.name}
                           </Typography>
                           <Typography variant="h8">
                              {drink.alcoholic}
                           </Typography>
                           <Typography variant="h6">
                              {drink.glass}
                           </Typography>
                        </CardContent>
                        <CardActions display="flex" justifyContent='center'>
                           <Box m="auto">
                              <Button 
                              className={classes.detailsButton} 
                              component={Link}
                              to={`/drink/${drink.id}`}
                              variant="contained" 
                              size="large" color="primary">
                                 Details
                              </Button>   
                           </Box>                                 
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