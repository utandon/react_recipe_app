import React, {Component} from 'react';
import './RecipeComponent.css';

class RecipeComponent extends Component {
  render() {
    const {title, instructions, image} = this.props;
    const ingredients = this.props.ingredients.map((item, index) => {
      return <li key={index}>{item}</li>
    });

    return (
      <div className="card">
        <div className="card-container">
          <img src={image} alt={title}/>
          <div className="card-content">
            <h3>Recipe {title}</h3>
            <h4>Ingredients:</h4>
            <ul>{ingredients}</ul>
            <h4>Instructions:</h4>
            <p>{instructions}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeComponent;
