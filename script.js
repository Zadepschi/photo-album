window.addEventListener('scroll', () => {
  const rocket = document.getElementById('rocket');
  const scrollTop = window.scrollY + window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  // Показываем ракету за 100px до самого низа
  if (scrollTop >= docHeight - 100) {
    rocket.classList.add('visible');
    setTimeout(() => {
      rocket.classList.add('lift-off');
    }, 500); // задержка перед взлётом
  }
});