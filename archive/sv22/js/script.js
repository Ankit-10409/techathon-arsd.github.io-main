let titleEle = document.querySelector('#event-title');
let titleEngEle = document.querySelector('#event-title-eng');
let i = false;
setInterval(() => {
  if (i) {
    titleEngEle.style.display = 'none';
    titleEle.style.display = 'inline-block';
  }
  else {
    titleEle.style.display = 'none';
    titleEngEle.style.display = 'inline-block';
  }
  i = !i;
}, 1e4);
