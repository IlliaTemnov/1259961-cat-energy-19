function initMap() {
  // The location of the Office
  var office = { lat: 59.938564, lng: 30.323716 };
  // The map, centered at Office
  var map = new google.maps.Map(
    document.getElementById("map"), { zoom: 17, center: office });
  // The marker, positioned at Office
  var marker = new google.maps.Marker({
    position: office, map: map,
    icon: "./img/map-pin.png"
  });
}
