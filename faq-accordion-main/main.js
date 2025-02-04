
document.querySelectorAll('.faq').forEach((faq) => {
    const btn = faq.querySelector('.toggle-btn');
    const content = faq.querySelector('.faq-content');
  
    btn.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');
      document.querySelectorAll('.faq-content').forEach((c) => c.classList.add('hidden'));
      document.querySelectorAll('.toggle-btn').forEach((b) => (b.textContent = '+'));
  
      if (!isOpen) {
        content.classList.remove('hidden');
        btn.textContent = '-';
      }
    });
  });
  