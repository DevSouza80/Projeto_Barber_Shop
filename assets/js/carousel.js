const carouselTrack = document.getElementById("carousel-wrapper");


let isDragging = false;
let startX = 0;
let scrollLeft = 0;

carouselTrack.addEventListener('mousedown',function(e){
   isDragging = true;
   startX = e.pageX - carouselTrack.offsetLeft;
   scrollLeft = carouselTrack.scrollLeft;
});

document.addEventListener('mousemove', function(e){
    if(!isDragging) return;


    const x = e.pageX - carouselTrack.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselTrack.scrollLeft = scrollLeft - walk;
});

document.addEventListener('mouseup', function(){
    isDragging = false;
});

carouselTrack.addEventListener('touchstart',function(e){
    startX = e.touches[0].pageX;
    scrollLeft = carouselTrack.scrollLeft;
});

carouselTrack.addEventListener('touchmove',function(e){
  const x = e.touches[0].pageX;
  const walk = (startX - x) * 1.5;
  carouselTrack.scrollLeft = scrollLeft + walk;
});
