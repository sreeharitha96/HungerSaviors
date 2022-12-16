import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/search',
    params: {
        addChildren: 'true',
        minProteinPercent: '5',
        maxProteinPercent: '50',
        minFatPercent: '1',
        maxFatPercent: '10',
        minCarbsPercent: '5',
        maxCarbsPercent: '30',
        metaInformation: 'false',
        sort: 'calories',
        sortDirection: 'asc',
        offset: '0',
        number: '10'
    },
    headers: {
        'X-RapidAPI-Key': '8c2ebc1983mshed1db33194bd6efp1d0284jsn279cc61abba0',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
};

export const findItems = async (item) => {
    axios.request(newOptions).then(function (response) {
}).catch(function (error) {
    console.error(error);
});
}