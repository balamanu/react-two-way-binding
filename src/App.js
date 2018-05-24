import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name:'BalaKrishna'
  }

  changeName = (newName) =>{
    this.setState({
      name:newName
    })
  }
  changeNamefromInput = (event) =>{
    this.setState({
      name:event.target.value
    })
  }
  render() {
    return (
      <div className="App">
      <br/><br/>
      <button onClick={() => this.changeName('Awesome Balakrishna')}>change state Anonimous Function</button>
      <button onClick={this.changeName.bind(this,'Awesome Balakrishna Bind')}>change state Bind Function</button>
      <br/><br/>
      <input type="text" onChange={this.changeNamefromInput} value={this.state.name}/>
      <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
