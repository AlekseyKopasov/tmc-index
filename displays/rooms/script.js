
const items = document.querySelectorAll('.tmc__rooms-item');
const form = document.querySelector('[data-filter]');
const emptyText = document.querySelector('.tmc__filter-empty');

function filter(value) {
  return Array.from(items).map(item => {
    const text = item.querySelector('span').textContent.toLocaleLowerCase();
    
    if (text.includes(value)) {
      item.classList.remove('is-hidden');
      return item;
    } else {
      item.classList.add('is-hidden');
    }
  })
}

function debounce(callback, wait) {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
    console.log(42);
  };
  
};

function inputHandler(evt) {

  const value = evt.target.value;  
  const result = filter(value.toLocaleLowerCase()).filter(Boolean);

  emptyText && result.length ? emptyText.classList.remove('is-visible') : emptyText.classList.add('is-visible');
}

function resetForm() {
  Array.from(items).map(item => {
    item.classList.remove('is-hidden');
  });

  emptyText && emptyText.classList.remove('is-visible');
}

function initFilter() {
  if (!form || !items.length) {
    return;
  }
  
  const input = form.querySelector('input');
  input.addEventListener('input', debounce(inputHandler, 300));
  form.addEventListener('reset', resetForm);
}

initFilter();