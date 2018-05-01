console.log("Test 2");
var mapboxgl = require('mapbox-gl');


mapboxgl.accessToken = 'pk.eyJ1IjoiY29keWhlc2xlcCIsImEiOiJjamdvM3RlNTcwZ3o1MnhxdnB4NTl6eWF2In0.zKbEaWv0q-Uqq07ucr_WBA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// mapboxgl.accessToken = 'pk.eyJ1IjoiY29keWhlc2xlcCIsImEiOiJjamdvM3RlNTcwZ3o1MnhxdnB4NTl6eWF2In0.zKbEaWv0q-Uqq07ucr_WBA';
// var map = new mapboxgl.Map({
//   container: 'map',
//   center: [-87.6354, 41.8885],
//   zoom: 12,
//   style: 'mapbox://styles/mapbox/streets-v10'
// });
