var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([37.41, 8.82]),
    zoom: 4
  })
});

var mapGradient = document.getElementById("mapGradient");
mapGradient.onmouseover = function() {
  mapGradient.style.display = "none";
};

mapGradient.onmouseout = function() {
  mapGradient.style.display = "block";
};