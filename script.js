const toggle = document.getElementById('toggle')
const Close = document.getElementById('close')
const Open = document.getElementById('open')
const modal = document.getElementById('modal')

// Toggle
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

// Modal
Open.addEventListener('click', () => modal.classList.add('show-modal'));

// Close Model
Close.addEventListener('click', () => modal.classList.remove('show-modal'));

//hide modal on outside click

window.addEventListener('click', e => e.target == model ? modal.classList.remove('show-modal') : false
);