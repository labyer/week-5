/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */

/*
//function to get and parse data
var getData = function(urlInput){
  $.ajax(urlInput).done(function(result){
    return JSON.parse(result);
  });
};

//function to make markers
var makeMarkers = function(data) {
  return _.map(data, function(i){
    return L.marker([i[lat], i[lng]]);
  });
};

//function to plot markers
var plotMarkers = function(data) {
  return _.each(data, function(i){
    i.addTo(map);
  });
};

//function to remove markers (from nathan's code)
var resetMap = function() {
  _.each(markers, function(marker, i) {
    map.removeLayer(marker);
  });
  markers = [];
};
*/


/*
//the datasets
var phillySolarInstallationDataUrl = "https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-solar-installations.json";
var phillyBikeCrashesDataUrl = "https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-bike-crashes-snippet.json";
*/


$(document).ready(function() {
  $('#button').on('click', function(){
    /*  // this section of code uses the functions defined above, but it doesn't work. I feel like it should be able to work without all the functions within the button click action by just calling the pre-defined functions above
    var url   = $('#url-input').val();
        lat   = $('#lat-input').val();
        lng   = $('#lng-input').val();
    //resetMap();
    var data = getData(url);
    var markers = makeMarkers(data, lat, lng);
    plotMarkers(markers);
    */
    var url  = $.ajax($('#url-input').val());
        lat  = $('#lat-input').val();
        lng  = $('#lng-input').val();
    //function to remove markers...not working at the moment...
    var resetMap = function() {
      markers = [];
      return _.each(markers, function(marker, i) {
        map.removeLayer(marker);
      });
    };
    //function to get and parse data
    var getData = function(data){
      return JSON.parse(data);
    };
    //function to make markers
    var makeMarkers = function(data) {
      return _.map(data, function(i){
        return L.marker([i[lat], i[lng]]);
      });
    };
    //function to plot markers
    var plotMarkers = function(data) {
      return _.each(data, function(i){
        i.addTo(map);
      });
    };
    url.done(function(data){
      //resetMap();     //not working...
      var dataset = getData(data);
      markers = makeMarkers(dataset);
      plotMarkers(markers);
    });
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
