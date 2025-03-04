import validatingURL from './validUrl.js';
import initView from './view.js';

export default () => {
  const state = {
    statusUrl: null,
    rssList: [],
  };

  const watchedState = initView(state);

  const handle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const url = formData.get('url');

    validatingURL(watchedState, url)
      .then((res) => {
        watchedState.statusUrl = res;
        if (res === 'valid') {
          watchedState.rssList.push(url);
          e.target.reset();
        }
      });
  };

  const form = document.querySelector('.rss-form.text-body');
  form.addEventListener('submit', handle);
};
