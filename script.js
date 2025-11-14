// Mobile menu (very simple demo)
document.getElementById('menuBtn')?.addEventListener('click', () => {
  alert('Menu: In this demo the menu is simple. Customize as needed.');
});

// Contact form demo: doesn't send emails, shows success message
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('formMsg').classList.remove('hidden');
    setTimeout(()=> document.getElementById('formMsg').classList.add('hidden'), 4000);
    form.reset();
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
