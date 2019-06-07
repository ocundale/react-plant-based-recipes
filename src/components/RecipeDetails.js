import React, { Component } from 'react';
import { recipe } from '../tempDetails';
constructor (props) {
    super(props)

    this.state = {
        recipe:{}
    }
}
export default class RecipeDetails extends Component {
    render() {
        return (
            <React.Fragment>

            <h1>Hello from recipe details</h1>
            </React.Fragment>
        );
    }
}
