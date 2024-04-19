let name = document.getElementById('name');
let paragraph = document.getElementById('paragraph');

name.addEventListener('hover', () => {
    paragraph.style.display = 'block';
  });
  
  name.addEventListener('mouseout', () => {
    paragraph.style.display = 'none';
  });







