export default function Todos({
  $target,
  initialState,
  onSubmit,
  handleDetailBtn,
  handleRemoveBtn,
}) {
  this.state = initialState;
  this.onSubmit = onSubmit;
  this.handleDetailBtn = handleDetailBtn;
  this.handleRemoveBtn = handleRemoveBtn;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $element = document.createElement('ul');
  $target.appendChild($element);

  this.render = () => {
    if (this.state.todos && !this.state.isDetail) {
      const todoTemplate = this.state.todos
        .map(
          (todo) =>
            `<li data-todo-id=${todo.id}><span class="todo" style="cursor:pointer">${todo.text}</span><button class="remove_btn">❌</button></li>`
        )
        .join('');

      $element.innerHTML = `<form><input type="text" placeholder="할일을 입력하고 Enter를 누르세요" required/></form><ul>${todoTemplate}</ul>`;
    }
    $element
      .querySelectorAll('.todo')
      .forEach((item) => item.addEventListener('click', handleDetailBtn));
    $element
      .querySelectorAll('.remove_btn')
      .forEach((btn) => btn.addEventListener('click', handleRemoveBtn));
    $element.querySelector('form').addEventListener('submit', onSubmit);
  };

  this.render();
}
