function createSidebar(e){initialized=!0,_.each(e,function(e){var a=$("<div class='pointer'>"+e.name+"</div>");a.appendTo("#sidebar_container"),a.on("click",function(){create(e)})})}function find(e){e.setMap(handler.getMap()),e.panTo(),google.maps.event.trigger(e.getServiceObject(),"click")}function create(e){var a=handler.addMarker(e);return a.setMap(map),find(a),markers.push(a),a}function destroyAll(){for(var e=0;e<markers.length;e++)destroy(markers[e]);markers=[]}function destroy(e){e.setMap(null)}var json_array=[{lat:42.364018,lng:-71.260718,name:"Ridgewood",infowindow:"Here is Ridgewood Quad."},{lat:42.36961,lng:-71.255711,name:"North",infowindow:"Here is North Quad."},{lat:42.367565,lng:-71.255646,name:"Castle",infowindow:"Here is a beautiful Castle."}],initialized=!1,Gmaps,handler=Gmaps.build("Google"),markers=[],map=handler.buildMap({internal:{id:"map"}},function(){initialized||createSidebar(json_array)});navigator.geolocation&&navigator.geolocation.getCurrentPosition(displayOnMap);var kids;$("#search").on("input",function(e){kids=$("#sidebar_container div");for(var a=$("#search").val().toLowerCase(),n=0;n<kids.length;n++){var i=-1!=kids[n].textContent.toLowerCase().indexOf(a);kids[n].style.display=i?"block":"none"}}),$("body > #sidebar_container").remove();