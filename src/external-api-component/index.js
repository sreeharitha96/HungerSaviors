import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';
import {findDonorsByCitynameThunk} from "../services/search-thunk";
import {findItems} from "../services/nutrients-service";
import {findItemsThunk} from "../services/nutrients-thunks";

function ApiCall() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    const {items, itemsLoading} = useSelector(
        state => state.itemsData)
    const handlesearch = () => {
        console.log(input)
        // dispatch(findItemsThunk(input))
        // console.log("loading " + itemsLoading + " items :" + items)

        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/search',
            params: {
                query: 'yogurt',
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

        axios.request(options).then(function (response) {
            console.log(response.data);
            console.log(response.data.results[0].name)
            return (
                <>
                    <p>{response.data.results[0].name}</p>

                </>
                   )

        }).catch(function (error) {
            console.error(error);
        });
    }

    // const handlesearch = () => {
    //     return(
    //         <p>{list.results[0].name}</p>
    //           )
    //
    // }
    return (
        <>
            <div className="container pt-4">
                <div className="row">
                    <div className="col-12 col-md-8 d-inline-block">
                        <h3 className="float-start">Search Nutrition Information</h3>
                        <br/>
                        <nav className="navbar navbar-default float-start">
                            <div className="nav nav-justified navbar-nav ">

                                <form className="navbar-form navbar-search" role="search">
                                    <div className="input-group">

                                        <input type="text" className="form-control" name="city" id="city"
                                               onChange={(event) => setInput(event.target.value)}
                                               title="enter your phone number if any."/>

                                        <div className="input-group-btn">
                                            <button type="button" className="btn btn-search btn-info"
                                                onClick={handlesearch}>
                                                <span className="glyphicon glyphicon-search"></span>
                                                <span className="label-icon">Search</span>
                                            </button>
                                        </div>

                                    </div>
                                </form>

                            </div>
                        </nav>
                    </div>
                    <div className="d-none col-md-4">
                    </div>
                </div>

            </div>



        </>
    )
}

export default ApiCall