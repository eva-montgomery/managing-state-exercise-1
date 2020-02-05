import React from 'react';
import logo from './logo.svg';
import './App.css';


import Input from './Input';
import Output from './Output';
import Reset from './Reset';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textValue: `this is the text value in state`
    }
  }
  render () {
    return (
      <div>
     <Input
     textValue = {this.state.textValue}
     updateText = {this._updateText}
     />
     <Output
      textValue = {this.state.textValue}
     />
     <Reset
      resetText = {this._resetText}
     />
     </div>
    );
  }

  _updateText = (event) => {
    this.setState({
      textValue: event.target.value
    })
  }
  _resetText = () => {
    this.setState({
      textValue: ""
    })
}
}


export default App;
