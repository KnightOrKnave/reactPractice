import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Counter/>

    </React.Fragment>
  );
}

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={count:0}
  }


  handleClick=()=>{
    this.setState({count:this.state.count+1});
  }

  render(){

    return(
      <div>
        <h1>Counter:{this.state.count}</h1>
        <button onClick={this.handleClick}>push!</button>
      </div>
    )
  }

}

export default App;
