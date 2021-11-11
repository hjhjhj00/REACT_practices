import React, { createElement } from 'react';

class App extends React.Component {
  state={value: ""};

  componentDidMount(){
    const form = window.document.querySelector("form");
    form.addEventListener("submit",(event) => {
      event.preventDefault();
      console.log(this.state.value);
      //const span = React.createElement("span");
      //span.innerText=this.state.value;
    })
  }

  onChange = (event) =>{
    this.setState({value: event.target.value})
    //console.log(this.state.value);
  }

  enter = (event) => {
    //this.setState({value: "hi"});
    console.log(this.state.value);
    console.log("enter");
    let span = document.createElement("span");
    span.innterText= this.state.value;

  };

  render(){
    return(
      //<form onsubmit={input.value}>
        //<input></input>
      //</form>
   
      <>
      <form>
      <input value={this.state.value} onChange={this.onChange}></input>
      </form>
      <button onClick={this.enter}>enter</button>
      </>
    );
  }

  }

export default App;