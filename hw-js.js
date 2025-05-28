// Task 1
    const title = document.querySelector('#myTitle');
    const button = document.querySelector('#toggleBtn');

    button.addEventListener('click', () => {
      if (title.style.display === 'none') {
        title.style.display = 'block';
        button.textContent = 'Скрыть';
      } else {
        title.style.display = 'none';
        button.textContent = 'Показать';
      }
    });

// Task 2
    const paragraph = document.querySelector('.textColor');
    const buttonColor = document.querySelector('.btnColor');

    button.addEventListener('click', () => {
      paragraph.style.color = 'red';
    });