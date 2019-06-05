import React, { Component} from 'react';

class Bob extends Component {

  state = {
    isShow: false,
    recipes: []
  }

  static getDerivedStateFromProps(nextProps, prevState){
     if(nextProps.recipes !== prevState.recipes){
       return { recipes: nextProps.recipes};
    }
    else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.recipes !== this.props.recipes){
      this.setState({recipes: this.props.recipes});
      this.toggleBob();
    }
  }

  toggleBob = () => {
     if (this.state.recipes.length === 0) {
       this.setState({
         isShow: true
       });
     }
     else {
       this.setState({
         isShow: false
       });
     }
  }

   render() {
      const isShow = this.state.isShow;
         return (
           <div className={isShow ? "show bob" : "hide bob"}>
             <img alt="Bob" src="https://media.tenor.com/images/37e7ba80fe626f018286054d6d7dde83/tenor.gif" />
             <p>Sorry partner we don't serve <span>{this.props.searchString}</span> here.</p>
           </div>
         );
   }

}

export default Bob
