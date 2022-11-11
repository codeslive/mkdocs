document.querySelectorAll('.zoom').forEach(item => {
  item.addEventListener('click', function () {
      this.classList.toggle('image-zoom-large');
  })
});

const addMeta = (name, content) => {
  const meta = document.createElement('meta');
  meta.content = content;
  meta.name = name;
  document.getElementsByTagName('head')[0].appendChild(meta);  
};

addMeta('noreferrer' , 'no-referrer');





