const checkboxes = document.querySelectorAll('input');
const darkMode = document.querySelector('#dark-mode');
const deleteBtn = document.querySelector('#delete');
const modal = document.querySelector('.modal');
const cancelBtn = document.querySelector('#cancel');
const confirmBtn = document.querySelector('#confirm');
const container = document.querySelector('.container');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      checkbox.setAttribute('checked', 'checked');
      localStorage.setItem(checkbox.name, 'checked');
    } else {
      checkbox.removeAttribute('checked');
      localStorage.setItem(checkbox.name, 'unchecked');
    }
  });
});

window.addEventListener('load', function() {
  checkboxes.forEach(checkbox => {
    if (localStorage.getItem(checkbox.name) === 'checked') {
      checkbox.setAttribute('checked', 'checked');
    }
  });
  if (localStorage.getItem('dark-mode') === 'checked') {
    darkMode.setAttribute('checked', 'checked');
    document.body.classList.add('dark-mode');
  }
});

darkMode.addEventListener('change', function() {
  if (darkMode.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

deleteBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

cancelBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

confirmBtn.addEventListener('click', function() {
  checkboxes.forEach(checkbox => {
    checkbox.removeAttribute('checked');
    localStorage.removeItem(checkbox.name);
  });
  localStorage.removeItem('dark-mode');
  darkMode.removeAttribute('checked');
  document.body.classList.remove('dark-mode');
  modal.style.display = 'none';
  container.innerHTML = `
    <h1>Success - Account Deleted</h1>
    <p>Your account has been successfully deleted. If you would like to create a new account click the button below.</p>
    <button id="create">Create Account</button>`;
});