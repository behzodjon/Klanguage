const g1=new Glide('#g1',{
    type: 'carousel',
  startAt: 0,
  perView: 1
}).mount()
const g2=new Glide('#g2',{
    type: 'carousel',
  startAt: 0,
  perView: 1
}).mount()
g1.on('run', (e) => {
  g2.go(e.direction);
})

var nextButton = document.querySelector('#right');
var prevButton = document.querySelector('#left');
var glide = new Glide('#g1');

nextButton.addEventListener('click', function (event) {
  event.preventDefault();

  glide.go('>');
})

prevButton.addEventListener('click', function (event) {
  event.preventDefault();

  glide.go('<');
})

glide.mount();
var glide2 = new Glide('#g2');

nextButton.addEventListener('click', function (event) {
  event.preventDefault();

  glide2.go('>');
})

prevButton.addEventListener('click', function (event) {
  event.preventDefault();

  glide2.go('<');
})

glide2.mount();