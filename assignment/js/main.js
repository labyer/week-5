/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */


//function to get and parse data
var getData = function(urlInput){
  $.ajax(urlInput).done(function(result){
    return JSON.parse(result);
  });
};

//function to make markers
var makeMarkers = function(data, inputLat, inputLng) {
  return _.map(data, function(i){
    var latitude = i[inputLat];
    var longitude = i[inputLng];
    return L.marker([latitude, longitude]);
  });
};

//function to plot markers
var plotMarkers = function(data) {
  return _.each(data, function(i){
    i.addTo(map);
  });
};


//name the three datasets
var phillySolarInstallationDataUrl = "https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-solar-installations.json";
var phillyBikeCrashesDataUrl = "https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-bike-crashes-snippet.json";


$(document).ready(function() {
  $('#button').on('click', function(){
    //var jsonObj = jsonObj || [];
    var url   = $('#url-input').val();
        lat   = $('#lat-input').val();
        lng   = $('#lng-input').val();
    var data = getData(url);
    var markers = makeMarkers(data, lat, lng);
    plotMarkers(markers);
  });
});






//make map
var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
