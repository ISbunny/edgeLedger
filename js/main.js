// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344427, lng: 131.036880};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.querySelector('.map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
// STICKY MENU BACKGROUND
window.addEventListener('scroll',function(){
    if(window.scrollY > 150){
    document.querySelector('#navbar').style.opacity = 0.9;
}else{
    document.querySelector('#navbar').style.opacity = 1;
}
});
// SMOOTH SCROLLING

$('#navbar a,.btn').on('click',function(Event){
    
    if(this.hash !== ''){
        Event.preventDefault();
        const hash = this.hash;
        $('html,body').animate({
            scrollTop:$(hash).offset().top - 100
        },600);
    };
    
});