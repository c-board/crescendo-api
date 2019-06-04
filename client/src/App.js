import React, { Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Search from './components/Search';

class App extends Component {

    state = {
        apiData: []
    };

    // fetch api data and move it into state
    fetchApiData = () => {

        // snag specific URI key
        const recipeKey = require('./config/keys').recipeApiURI;

        // call error handling
        const handleErrors = response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }  else {
                response.json().then(data => ({
                    data: data,
                    status: response.status
                })).then(res => {
                        this.setState({
                          apiData: res.data
                        });
                    })
                }
            return response;
        }

        // fetch data
        fetch(recipeKey)
            .then(handleErrors)
            .then(response => console.log("API response status code | " + response.status))
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.fetchApiData();
    }

    render() {
        return (
          <div className="App" >
              <header className="App-header" >
                    <Search apiData={this.state.apiData} />
              </header>
          </div>
        );
    }
}

export default App;
