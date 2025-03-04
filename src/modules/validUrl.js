import * as yup from 'yup';

export default (state, url) => {
  if (state.rssList.includes(url)) {
    return Promise.resolve('alreadyExist');
  }
  const urlSchema = yup.string().url().required();
  return urlSchema.validate(url)
    .then(() => 'valid')
    .catch(() => 'invalid');
};
