import onChange from 'on-change';
import i18nextInstance from './locales/initInternationalization.js';

export default (state) => {
  const render = () => {
    let text = '';
    const errorMessage = document.querySelector('.feedback');
    const input = document.getElementById('url-input');

    const status = {
      alreadyExist: () => {
        text = i18nextInstance.t('validate.alreadyExistUrl');
        errorMessage.classList.remove('text-success');
        errorMessage.classList.add('text-danger');
        input.classList.add('is-invalid');
      },
      invalid: () => {
        text = i18nextInstance.t('validate.invalidUrl');
        errorMessage.classList.remove('text-success');
        errorMessage.classList.add('text-danger');
        input.classList.add('is-invalid');
      },
      valid: () => {
        text = i18nextInstance.t('validate.validUrl');
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
