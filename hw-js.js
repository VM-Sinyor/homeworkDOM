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

    buttonColor.addEventListener('click', () => {
    paragraph.style.color = 'red';
  });

//  Task 3
    const titleText = document.querySelector('#myTitle');
    const btnTitle = document.querySelector('.titleText');

    btnTitle.addEventListener('click', () => {
    title.textContent = 'Привет, мир!';
    });

// Task 4

    const descriptions = document.querySelectorAll('.description');

    descriptions.forEach((element) => {
    element.textContent = 'Измененный текст';
    });

// Task 5

    const description = document.querySelectorAll('.description');

    descriptions.forEach((element) => {
  element.textContent = 'Новый текст';
});

// Task 6

const addButton = document.querySelector('#addBtn');

addButton.addEventListener('click', () => {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'Новый абзац';          
  document.body.appendChild(newParagraph);  
});


// Task 7

const deleteButton = document.querySelector('.btnDelete');

deleteButton.addEventListener('click', () => {
  const firstDescription = document.querySelector('.description'); 
  if (firstDescription) {
    firstDescription.remove();
  }
});
