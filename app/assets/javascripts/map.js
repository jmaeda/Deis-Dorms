
var json_array = [
  { lat: 42.364018, lng: -71.260718, name: 'Ridgewood', infowindow: "Here is Ridgewood Quad." },
  { lat: 42.369610, lng: -71.255711, name: 'North', infowindow: "Here is North Quad." },
  { lat: 42.367565, lng: -71.255646, name: 'Castle', infowindow: "Here is a beautiful Castle." }
];
var initialized = false;
var Gmaps;
var handler = Gmaps.build('Google');
var markers = [];
var map = handler.buildMap({ internal: {id: 'map'} }, function(){
  markers = handler.addMarkers([
    {
      "lat": 42.366719,
      "lng": -71.258604,
      "picture": {
        "url" : "/assets/brandeis_logo.png",
        "width":  32,
        "height": 32
      },
      "infowindow": "Here is Brandeis"
    }
  ]);
  handler.bounds.extendWith(markers);
  handler.fitMapToBounds();
  handler.getMap().setZoom(16); //control zoom level (0-21)
  if(!initialized) createSidebar(json_array);
});

if(navigator.geolocation)
   navigator.geolocation.getCurrentPosition(displayOnMap);

function createSidebar(json_array){
  initialized = true;
  _.each(json_array, function(json){
    var $li = $("<div class='pointer'>" + json.name + "</div>");
    $li.appendTo('#sidebar_container');
    $li.on('click', function(){
      create(json);
    })
  });
};


function find(marker){
  // move to marker
  marker.setMap(handler.getMap()); //because clusterer removes map property from marker

  marker.panTo();
  google.maps.event.trigger(marker.getServiceObject(), 'click');
}

function create(obj){
  // create marker
  var marker=handler.addMarker(obj);
  marker.setMap(map);
  find(marker);
  markers.push(marker);
  return marker;
}

function destroyAll(){
  for(var i=0;i<markers.length;i++){
    destroy(markers[i]);
  }
  markers=[];
}

function destroy(marker){
  marker.setMap(null);
}

// search functionality
var kids;
$("#search").on("input",function(ev){
  kids=$("#sidebar_container div");
  var query=$("#search").val().toLowerCase();
  for(var i=0;i<kids.length;i++){
    var match=(kids[i].textContent.toLowerCase().indexOf(query)!=-1);
    kids[i].style.display=match?"block":"none";
  }
});

$("body > #sidebar_container").remove();// clean up after Google
