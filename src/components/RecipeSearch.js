import React, { Component } from 'react';

export default class RecipeSearch extends Component {


    render() {
        const {value, handleSubmit, handleChange} = this.props;
        return (
            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                        <h1 className="text-slanted text-capitalize">
                        <strong className="text-danger">
                        Food2Fork</strong>search for recipe with</h1>
                        <form onSubmit={handleSubmit} className="mt-4">
                            <label className="text-capitalize" htmlFor="search">type recipes separated by comma</label>
                            <div className="input-group">
                                <input type="text" name="search" placeholder="apples, seeds, quinoa"
                                onChange={handleChange} value={value} className="form-control"/>
                                <div className="input-group-append">
                                <button className="input-group-text bg-primary text-white" onClick={handleSubmit}>
                                <i className="fas fa-search"></i></button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </React.Fragment>
            );
    }
}
