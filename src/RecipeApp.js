import React, { Component } from 'react';
import RecipeListComponent from './RecipeListComponent';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <h2>A Webpage for Foodie coders..</h2>
        <RecipeListComponent />
      </div>
    );
  }
}

export default RecipeApp;
