const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const instructions = button.previousElementSibling;
    if (instructions.style.display === 'none') {
      instructions.style.display = 'block';
      button.textContent = 'Hide Instructions';
    } else {
      instructions.style.display = 'none';
      button.textContent = 'Show Instructions';
    }
  });
});
