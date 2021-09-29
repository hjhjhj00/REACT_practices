import React from "react";

const localStorage = window.localStorage;

class App extends React.Component {
  state = {
    toDos: [],
    input: "",
  };
  componentDidMount() {
    if (localStorage.getItem("toDos")) {
      this.setState({ toDos: JSON.parse(localStorage.getItem("toDos")) });
    }
  }
  onSubmit = (event) => {
    event.preventDefault();
    const newToDos = [
      ...this.state.toDos,
      { id: Date.now(), data: this.state.input },
    ];
    this.setState({
      toDos: newToDos,
      input: "",
    });
    localStorage.setItem("toDos", JSON.stringify(newToDos));
  };
  deleteItem = (event) => {
    const parentId = event.target.parentNode.id;
    const deletedToDos = this.state.toDos.filter(
      (toDo) => toDo.id !== parseInt(parentId)
    );
    this.setState({ toDos: deletedToDos });
    localStorage.setItem("toDos", JSON.stringify(deletedToDos));
  };
  render() {
    const { toDos, input } = this.state;
    return (
      <>
        <h1>To Do</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={input}
            onChange={(event) => {
              this.setState({ input: event.target.value });
            }}
          />
          <button>Add</button>
        </form>
        <ul>
          {toDos.map((toDo, index) => (
            <li key={toDo.id} id={toDo.id}>
              {toDo.data}
              <button onClick={this.deleteItem}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
