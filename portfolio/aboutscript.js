const name = document.getElementById('name');
const paragraph = document.getElementById('paragraph');

name.addEventListener('mouseover', () => {
  paragraph.style.display = 'block';
});

name.addEventListener('mouseout', () => {
  paragraph.style.display = 'none';
});


