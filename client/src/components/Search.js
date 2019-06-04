import React, { Component} from 'react';
import RecipeList from './RecipeList';
import Bob from './Bob';

class Search extends Component {

   state = {
     searchString: ''
   }

   handleChange = (e) => {
     this.setState({
       searchString:e.target.value
     });
   }

   render() {

     let recipes = this.props.apiData;
     let searchString = this.state.searchString.trim().toLowerCase();

     if (searchString.length > 0) {
       recipes = recipes.filter(function(i) {
         return i.title.toLowerCase().match( searchString );
       });
     }

     return (
       <div>

         <div className="recipe-search">
            <div className="container">
              <div className="row">
                <div className=" col-md-12">
                     <h1>Show me the recipes!</h1>
                     <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Start your search!"/>
                 </div>
              </div>
            </div>
         </div>

         <div className="results-bg">
             <div className="container results">
                 <div className="row">
                    <div className=" col-md-12">
                      <RecipeList recipes={recipes}/>
                      <Bob recipes={recipes} searchString={this.state.searchString}/>
                  </div>
               </div>
             </div>
         </div>

       </div>

     );
   }
}

export default Search
