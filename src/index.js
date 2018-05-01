console.log("Test 2");
var mapboxgl = require('mapbox-gl');
var createMarker = require('./marker.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiY29keWhlc2xlcCIsImEiOiJjamdvM3RlNTcwZ3o1MnhxdnB4NTl6eWF2In0.zKbEaWv0q-Uqq07ucr_WBA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const image = document.createElement("div");
image.style.height = "20px";
image.style.width = "20px";
image.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";



new mapboxgl.Marker(image).setLngLat([-87.6354, 41.8885]).addTo(map);
const marker = createMarker("hotel", [-97.6354, 42.8885]);

  console.log("checkpoint 3 ");
marker.addTo(map);
