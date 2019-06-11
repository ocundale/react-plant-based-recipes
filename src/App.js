import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

/*  */
export default class App extends Component {

  state = {
    recipes: recipes,
    url: 'https://www.food2fork.com/api/search?key=b4f84f65afed1b4eb3dba5a518533064',
    base_url:'https://www.food2fork.com/api/search?key=b4f84f65afed1b4eb3dba5a518533064',
    details_id:35381,
    pageIndex: 1,
    search: '',
    query: '&q=',
    error: ''
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      if(jsonData.error && jsonData.error.length) {
        this.setState(()=>{
          return {error: 'sorry, but there has been an api error.'}
        });
      } else if(jsonData.recipes.length === 0){
        this.setState(()=>{
          return {error: 'sorry, but your search did not return any results.'}
        });
      } else {
        this.setState(()=>{
          return {recipes: jsonData.recipes}
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = (nIndex) => {
    switch(nIndex) {
      default:
      case 1:
        return(
          <RecipeList
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            error={this.state.error}
          />)
      case 0:
        return(<RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex} />)
    }
  };

  handleIndex = nIndex => {
    this.setState({
      pageIndex: nIndex
    })
  };

  handleDetails = (nIndex, id) => {
    this.setState({
      pageIndex: nIndex,
      details_id: id
    });
  };

  handleChange = (e) => {
    this.setState({
      search:e.target.value
    })
  };

  //handle form submission
  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    console.log(search);
    this.setState(() => {
      return {url: `${base_url}${query}${search}`, search:""}
    }, ()=>{
      this.getRecipes();
    });
  };


  render() {
    // console.log(this.state.recipes);
    return (
        <React.Fragment>
         {this.displayPage(this.state.pageIndex)}
        </React.Fragment>
    );
  }
}

