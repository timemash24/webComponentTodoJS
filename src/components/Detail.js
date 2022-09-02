export default function Detail({ $target, initialState }) {
  this.state = initialState;

  const $element = document.createElement('ul');
  $target.appendChild($element);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (this.state.isDetail) {
      const todoDetail = this.state.todos.find(
        (todo) => todo.id === this.state.selectedTodo
      );
      $element.innerHTML = `<li>${todoDetail.id}</li><li>${todoDetail.text}</li>`;
    }
  };

  this.render();
}
