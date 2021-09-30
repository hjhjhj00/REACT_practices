import React from "react";

const localStorage = window.localStorage; // localStorage 전역변수 설정

class App extends React.Component {
  state = {
    toDos: [],
    input: "",
  };
  componentDidMount() {
    // 컴포넌트 생성시 this.state.toDos에 localStorage의 데이터 불러오기
    if (localStorage.getItem("toDos")) {
      // 투두가 존재 하는 경우
      this.setState({ toDos: JSON.parse(localStorage.getItem("toDos")) }); // string -> JSON
    }
  }
  onSubmit = (event) => {
    event.preventDefault();
    const newToDos = [
      ...this.state.toDos,
      { id: Date.now(), data: this.state.input }, // 각 toDo의 요소: id, data
    ];
    this.setState({
      // state에 업데이트
      toDos: newToDos,
      input: "",
    });
    localStorage.setItem("toDos", JSON.stringify(newToDos)); // localStorage에도 업데이트
  };
  deleteItem = (event) => {
    const parentId = event.target.parentNode.id;
    const deletedToDos = this.state.toDos.filter(
      // 해당 id를 가진 데이터를 제외한 나머지만 추출
      (toDo) => toDo.id !== parseInt(parentId) // Node에서 가지고 온 데이터는 string
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
          {toDos.map((toDo) => (
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
