import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { Container, Grid, Card, CardContent, Typography, CardMedia, CardActionArea, CssBaseline } from '@material-ui/core';

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const DrinkDetails = () => {

   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [details, setDetails] = useState(null);

   useEffect(() => {
      setLoading(true);

      const getDrink = async() => {
         try {
            const response = await fetch(`${url}${id}`);
            const data = await response.json();
   
            if(data.drinks){
               const {
                  strAlcoholic: alcoholic,
                  strDrinkThumb: image,
                  strDrink: name,
                  strGlass: glass,
                  strIngredient1: firstIng,
                  strIngredient2: secondIng,
                  strIngredient3: thirdIng,
                  strIngredient4: fourthIng,
                  strInstructions: mixInstructions,
               } = data.drinks[0];
               
               const ingredients = [firstIng, secondIng, thirdIng, fourthIng];

               const drinkDetails = {alcoholic, name, image, glass, mixInstructions, ingredients};

               setDetails(drinkDetails);
            } else {
               setDetails(null);
            }
            setLoading(false);
         } catch(error) {
            console.log(error);
            setLoading(false);
         }
      }
      getDrink();
   },[id])

   if (loading){
      return <Loading />
   }

   if(!details){
      return <h2> There are no details to display</h2>
   }

   const { name, image, alcoholic, ingredients, mixInstructions } = details;

   console.log(image);

   return ( 
      <React.Fragment>
         <CssBaseline />
         <Container>
            <Grid container>
               <Grid item id="drink-image" xs={12} sm={8} md={8}>
                  <Card>
                     <CardMedia 
                        component="img"
                        image={image}
                        title={name}
                           />
                     <CardContent>
                        <Typography>
                           Hello
                        </Typography>
                     </CardContent>
                  </Card>
               </Grid>
               <Grid item xs={12} sm={4} md={4}>
                  <Card>
                     <CardContent>
                        <Typography variant="h3">
                           {name}
                        </Typography>
                        <Typography variant="h6" color="primary">
                           {alcoholic}
                        </Typography>
                        <Typography variant="h7" color="secondary">
                           Ingredients: {ingredients.join(' + ')}
                        </Typography>
                        <Typography variant="h6">
                           How to mix: {mixInstructions}
                        </Typography>
                     </CardContent>
                  </Card>
               </Grid>
            </Grid>
         </Container>
      </React.Fragment>
    );
}
 
export default DrinkDetails;