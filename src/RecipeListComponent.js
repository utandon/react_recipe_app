import React, {Component} from 'react';
import RecipeComponent from './RecipeComponent';
import './RecipeListComponent.css';

class RecipeListComponent extends Component {
  static defaultProps = {
    recipes: [
      {
       title: "Shagetti",
       ingredients: ["pasta", "8 cups water", "1 box sphagetti"],
       instructions: "Open jar of Shagetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce",
       image: "spaghetti.jpg"
      },
      {
        title: "Milkshake",
        ingredients: ["2 Scoops Icecream", "8 ounces Milk"],
        instructions: "Combine ice cream and milk. Blend until creamy.",
        image: "milkshake.jpg"
      },
      {
        title: "Avocado Toast",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "pinch of salt", "pepper"],
        instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil and pepper to taste.",
        image: "avacadoToast.jpeg"
      }
    ]
  }
  render() {
    const recipes = this.props.recipes.map((recipe, index) =>(
      <RecipeComponent
        key={index}
        title={recipe.title}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
        image={recipe.image}/>
    ));
    return(
      <div className="recipe-list">
        {recipes}
      </div>
    );
  }

}

export default RecipeListComponent;
