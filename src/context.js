import React, { useState, useEffect, useContext } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [search, setSearch] = useState('');
   const [drinks, setDrinks] = useState([]);

   const fetchDrinks = async() => {

      setLoading(true);
      try{
         const response = await fetch(`${url}${search}`);
         const data = await response.json();
         console.log(data);

         //grab drinks objects from the resulting object from search
         const { drinks } = data;
         if (drinks){
            const newDrinks = drinks.map(item => {
               const { 
                  idDrink: id, 
                  strDrink: name, 
                  strDrinkThumb: image,
                  strAlcoholic: alcoholic, 
                  strGlass : glass
               } = item;
               return {id, name, image, alcoholic, glass};
            })
            setDrinks(newDrinks);
         } else {
            setDrinks([]);
         }
         setLoading(false);
      } catch(error){
         console.log(error);
         setLoading(false);
      }

   }

   useEffect(() => {
      fetchDrinks();
   },[search])

   return <AppContext.Provider value={{loading, search, drinks, setSearch}}>
      { children }
   </AppContext.Provider>
}

export const useGlobalContext = () => {
   return useContext(AppContext);
}

export { AppProvider, AppContext};
