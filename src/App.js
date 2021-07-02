import React from 'react';
import Autocomplete from './Autocomplete';
import './App.css';
// ej : pasar info de hijo a padre;
class App extends React.Component {

  constructor (props) {
    super(props) 

    this.state = {
      autocompleteValue : ''
    }
  }

  handleCallback(newValue) {
    this.setState({
      autocompleteValue : newValue
    })
  }

  render() {
    return(
      <div>
        < Autocomplete handleCallback={(newValue) => {this.handleCallback(newValue)}}/> 
      <p>{this.state.autocompleteValue}</p>
      </div>
    )
  }
}

export default App;
