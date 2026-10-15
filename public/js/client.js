document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.getElementById('avatar');
  const dropdown = document.getElementById('avatar-dropdown');
  if (avatar) {
    avatar.addEventListener('click', () => dropdown.classList.toggle('show'));
  }
});
