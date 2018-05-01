var mapboxgl = require('mapbox-gl');


const createMarker = function(type, coordinates){
  const retObj = {};
  if(type === "hotel"){
    retObj.imgUrl = "url(http://i.imgur.com/D9574Cu.png)";
  }
  if(type === "restaurant"){
    retObj.imgUrl = "url(http://i.imgur.com/cqR6pUI.png)";
  }
  if(type === "activity"){
    retObj.imgUrl = "url(http://i.imgur.com/WbMOfMl.png)";
  }

  const image = document.createElement("div");
  image.style.height = "20px";
  image.style.width = "20px";
  image.style.backgroundImage = retObj.imgUrl;
  console.log(coordinates);
  const mapboxMarker = new mapboxgl.Marker(image).setLngLat(coordinates);
  console.log("img url : " + retObj.imgUrl);
  return mapboxMarker;
}

module.exports = createMarker;