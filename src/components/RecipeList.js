import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';


export default class RecipeList extends Component {


    render() {
        const {recipes} = this.props;
        console.log(recipes);
        return (
            <React.Fragment>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
                        <h1 className='text-slanted'>recipe list </h1>
                    </div>
                </div>
            </div>
            <div className="row"></div>
            {
                recipes.map(recipe => {
                    return(
                        <Recipe
                        key={recipe.recipe_id}
                        recipe={recipe}  />
                    )
                })
            }
            <RecipeSearch />

            </React.Fragment>
        );
    }
}
