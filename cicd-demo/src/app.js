import { greeting, headline } from './message.js';

document.querySelector('#headline').textContent = headline;
document.querySelector('#greeting').textContent = greeting('');
document.querySelector('#greeting-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#greeting').textContent = greeting(document.querySelector('#name').value);
});

fetch('./build-info.json')
  .then((response) => {
    if (!response.ok) throw new Error('Build information unavailable');
    return response.json();
  })
  .then((info) => {
    document.querySelector('#build-info').textContent =
      `Commit ${info.commit.slice(0, 7)} · Built ${info.builtAt}`;
  })
  .catch(() => {
    document.querySelector('#build-info').textContent = 'Build information unavailable';
  });
