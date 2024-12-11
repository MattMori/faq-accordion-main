document.querySelectorAll('.trigger').forEach(button => {
    button.addEventListener('click', () => {
      const acordeon = button.closest('.acordeon');
      acordeon.classList.toggle('active');
  
      // Atualiza o ícone do botão
      const icon = button.querySelector('img');
      if (acordeon.classList.contains('active')) {
        icon.src = 'assets/images/icon-minus.svg';  
        icon.alt = 'arrow up';  
      } else {
        icon.src = './assets/images/icon-plus.svg'; 
        icon.alt = 'arrow down';  
      }
    });
  });
  