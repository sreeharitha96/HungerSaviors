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

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

export const findItems = async (item) => {
    console.log(item)
    const newOptions = {...options, query: item}
    console.log(newOptions)
    // const response = await axios.request(newOptions);
    // const items = response.data;
    // console.log("service " + items);
    // return items;
    axios.request(newOptions).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
}