import Todos from './components/Todos.js';

const LOCAL_STORAGE_KEY = 'todos';

export default function App({ $target }) {
  this.state = {
    todos: [],
  };

  const todos = new Todos({
    $target,
    initialState: this.state.todos,
    onSubmit: (e) => {
      e.preventDefault();
      const newTodo = { id: Date.now(), text: e.target[0].value };
      this.setState({
        todos: [...this.state.todos, newTodo],
      });
    },
    onClick: (e) => {
      e.preventDefault();
      const removeId = parseInt(e.target.parentNode.dataset.todoId);
      const newTodos = this.state.todos.filter((todo) => todo.id !== removeId);
      this.setState({
        todos: newTodos,
      });
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    todos.setState(this.state.todos);
    // window.localStorage.setItem(LOCAL_STORAGE_KEY, this.state.todos)
  };

  // const init = () => {
  //   try {
  //     const load = window.localStorage.getItem(LOCAL_STORAGE_KEY)
  //   } catch (error) {
  //     throw new Error(`할일 목록 로딩에 실패하였습니다${error}`)
  //   }
  // }
}
