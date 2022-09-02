export default function Todos({ $target, initialState, onSubmit, onClick }) {
  this.state = initialState;
  this.onSubmit = onSubmit;
  this.onClick = onClick;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $element = document.createElement('ul');
  $target.appendChild($element);

  this.render = () => {
    if (this.state) {
      const todoTemplate = this.state
        .map(
          (todo) =>
            `<li data-todo-id=${todo.id}>${todo.text}<button class="remove_btn">❌</button></li>`
        )
        .join('');

      $element.innerHTML = `<form><input type="text" placeholder="할일을 입력하세요"/></form>${todoTemplate}`;
    }

    $element
      .querySelectorAll('.remove_btn')
      .forEach((btn) => btn.addEventListener('click', onClick));
    $element.querySelector('form').addEventListener('submit', onSubmit);
  };

  this.render();
}
