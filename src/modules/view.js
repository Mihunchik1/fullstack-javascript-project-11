import onChange from 'on-change';

export default (state) => {
  const render = () => {
    let text = '';
    const errorMessage = document.querySelector('.feedback');
    const input = document.getElementById('url-input');

    const status = {
      alreadyExist: () => {
        text = 'RSS уже существует';
        errorMessage.classList.remove('text-success');
        errorMessage.classList.add('text-danger');
        input.classList.add('is-invalid');
      },
      invalid: () => {
        text = 'Ссылка должна быть валидным URL';
        errorMessage.classList.remove('text-success');
        errorMessage.classList.add('text-danger');
        input.classList.add('is-invalid');
      },
      valid: () => {
        text = 'RSS успешно загружен';
        errorMessage.classList.remove('text-danger');
        errorMessage.classList.add('text-success');
        input.classList.remove('is-invalid');
      },
    };

    status[state.statusUrl]();
    errorMessage.textContent = text;
    input.focus();
  };

  const watchedState = onChange(state, () => {
    render();
  });

  return watchedState;
};
