document.getElementById('year').textContent = new Date().getFullYear();

var items = [
  {src:"images/aviation-fa18-super-hornet.jpg",caption:'F/A-18 Super Hornet'},
  {src:"images/aviation-hawker-hurricane.jpg",caption:'Hawker Hurricane'},
  {src:"images/aviation-f35-lightning.jpg",caption:'F-35 Lightning II'},
  {src:"images/aviation-blue-angels.jpg",caption:'Blue Angels'},
  {src:"images/aviation-b17-flying-fortress.jpg",caption:'B-17 Flying Fortress'},
  {src:"images/aviation-spirit-of-st-louis.jpg",caption:'Forest Park, St. Louis'},
  {src:"images/architecture-ut-tower-austin.jpg",caption:'The Tower, Austin, TX'},
  {src:"images/architecture-forest-park-fountain.jpg",caption:'Forest Park, St. Louis'},
  {src:"images/architecture-rome-ceiling.jpg",caption:'Rome, Italy'},
  {src:"images/architecture-trevi-fountain.jpg",caption:'Trevi Fountain, Rome'},
  {src:"images/architecture-theater-interior.jpg",caption:'Theater Interior'},
  {src:"images/architecture-texas-capitol.jpg",caption:'Texas State Capitol, Austin, TX'},
  {src:"images/landscape-mushroom-study.jpg",caption:'Mushroom Study'},
  {src:"images/hero-grand-teton.jpg",caption:'Grand Teton, WY'},
  {src:"images/landscape-oregon-coast-1.jpg",caption:'Oregon Coast'},
  {src:"images/landscape-oregon-coast-2.jpg",caption:'Oregon Coast'},
  {src:"images/landscape-glacier.jpg",caption:'Glacier'},
  {src:"images/landscape-historic-mill.jpg",caption:'Historic Mill'},
  {src:"images/landscape-waterfall.jpg",caption:'Waterfall'},
  {src:"images/landscape-lunar-eclipse.jpg",caption:'Lunar Eclipse'},
  {src:"images/landscape-whale-watching-alaska.jpg",caption:'Whale Watching, Alaska'}
];

var lb = document.getElementById('lightbox');
var lbImage = document.getElementById('lbImage');
var lbCaption = document.getElementById('lbCaption');
var current = 0;

function openLightbox(i){
  current = i;
  lbImage.src = items[i].src;
  lbImage.alt = items[i].caption;
  lbCaption.textContent = items[i].caption;
  lb.classList.add('open');
}
function closeLightbox(){
  lb.classList.remove('open');
  lbImage.src = '';
}
function show(delta){
  current = (current + delta + items.length) % items.length;
  lbImage.src = items[current].src;
  lbImage.alt = items[current].caption;
  lbCaption.textContent = items[current].caption;
}

document.querySelectorAll('.g-item').forEach(function(el){
  var idx = parseInt(el.getAttribute('data-index'), 10);
  el.addEventListener('click', function(){ openLightbox(idx); });
  el.addEventListener('keydown', function(e){
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openLightbox(idx); }
  });
});

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', function(){ show(-1); });
document.getElementById('lbNext').addEventListener('click', function(){ show(1); });
lb.addEventListener('click', function(e){ if(e.target === lb){ closeLightbox(); } });
document.addEventListener('keydown', function(e){
  if(!lb.classList.contains('open')) return;
  if(e.key === 'Escape') closeLightbox();
  if(e.key === 'ArrowLeft') show(-1);
  if(e.key === 'ArrowRight') show(1);
});
