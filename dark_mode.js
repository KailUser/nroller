document.getElementById('darkModeToggle').addEventListener('click', function() {
  const currentLink = document.querySelector('link[rel="stylesheet"]');
  const currentButton = document.querySelector('#darkModeToggle');
  if (currentLink.href === 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' && currentButton.textContent === 'Disable Dark Mode') {
    currentLink.remove();
    document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">');
    document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="style.css">');
    const styleLink = document.querySelector('link[href="style_dark.css"]');
    styleLink.remove();
    currentButton.textContent = 'Enable Dark Mode';
  } else {
    currentLink.remove();
    document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">');
    document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="style_dark.css">');
    currentButton.textContent = 'Disable Dark Mode';
  }
});

