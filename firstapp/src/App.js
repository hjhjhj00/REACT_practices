import React from 'react';

class App extends React.Component {
  state={value: ""};

  onChange = (event) =>{
    let val = event.target.value;
    console.log(val);
  }

  enter = (event) => {
    //this.setState({value: "hi"});
    console.log(this.state.value);
    console.log("enter");};

  render(){
    return(
      //<form onsubmit={input.value}>
        //<input></input>
      //</form>
      <>
      <input value={this.state.value} onChange={this.onChange}></input>
      <button onClick={this.enter}>enter</button>
      </>
    );
  }

  }

export default App;