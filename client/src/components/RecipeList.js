import React, { Component} from 'react';

class RecipeDetails extends Component {

  state = {
    isShow: false
  }

  handleClick = () => {
    const isShow = this.state.isShow
    this.setState({
      isShow: !isShow
    });
  }

   render() {

     let i = this.props;
     const {isShow} = this.state;

         return (

           <div className="singleRecipe row">

             <div className="col-md-4">
               <img className="product-shot" alt="recipe product shot" src={i.image}/>
             </div>

             <div className="col-md-4 col-sm-6">
               <p className="product-title"><span>{i.title}</span></p>
               <p>{i.description}</p>
             </div>

             <div className="col-md-4 col-sm-6">
               <p><span>Servings</span> | {i.servings}</p>
               <p><span>Prep Time</span> | {i.prepTime}</p>
               <p><span>Cook Time</span> | {i.cookTime}</p>
               <button className="detail-toggle" onClick={this.handleClick}>directions &amp; ingredients</button>
             </div>

             <div className={isShow ? "show col-md-6 recipe-details" : "hide col-md-6 recipe-details"}>
               <p><span>Directions:</span> </p>
               {i.directions.map((direction, index) =>
                 <ul key={index} className="recipe-directions">
                   <li>{index + 1 + " ) "}{direction.instructions}</li>
                 </ul>)}
             </div>

             <div className={isShow ? "show col-md-6 recipe-details" : "hide col-md-6 recipe-details"}>
               <p><span>Ingredients:</span></p>
               {i.ingredients.map(ingredient =>
                 <ul key={ingredient.uuid}>
                    <li>{ingredient.amount} {ingredient.measurement} {ingredient.name}</li>
                 </ul>)}
             </div>
           </div>
         );

   }
}

// run map() on RecipeDetails Component in order to maintain individual state on handleClick()
class RecipeList extends Component {
  render() {
    const listItem = this.props.recipes.map((item, d) => (
      <RecipeDetails
        key={d}
        image={item.images.small}
        title={item.title}
        description={item.description}
        servings={item.servings}
        prepTime={item.prepTime}
        cookTime={item.cookTime}
        directions={item.directions}
        ingredients={item.ingredients}
        />
    ));
    return <div>{listItem}</div>;
  }
}



export default RecipeList
