function initMap() {
  let map = new google.maps.Map(document.querySelector("#map"), {
    center: { lat: 53.89213, lng: 27.573265 },
    scrollwheel: false,
    zoom: 15
  });
}
