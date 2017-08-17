$(document).ready(function() {
// write your code here
    $.getJSON("data.json", function(data) {
        $.each(data, function() {
            var link = "<a href=https://www.google.com/maps?q="+this.location+">"+this.location+"</a>";
            $("#top-spots").append("<tr> <td>"+this.name+"</td>"+"<td>"+this.description+"</td>" + "<td>"+link+"</td> </tr>");
            var marker = addMarker(this.location);
            var infoContent = getContent(this);
            var infowindow = new google.maps.InfoWindow( {
                content:infoContent
            })
            marker.addListener('mouseover',function() {
                infowindow.open(map,marker);
            });
            marker.addListener('mouseout',function(){
                infowindow.close(map,marker);
            });
        });
    });
    // $.getJSON("https://app.ticketmaster.com/discovery/v2/events.json?apikey=cy4V7qOzI4Y5ZeAHKHcbeoEoummyWwTF&latlong=32.7370735,-117.097388", function(eventsData) {
    //     for (var i=0; i<eventsData.page.size; i++) {
    //         //console.log(eventsData._embedded.events[i].name);
    //         var e = document.getElementById("events");
    //         e.innerHTML = eventsData.page.totalElements + " events found.";
    //         //addTicketmasterMarker(eventsData._embedded.events[i]);
    //     }
    // });
})


var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.7370735, lng: -117.097388},
    zoom: 11
    });
}  

function addMarker(location) {
    var marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: {lat: location[0],lng:location[1]},
        map:map
    })
    return marker;
}

// function addTicketmasterMarker(event) {
//   var marker = new google.maps.Marker({
//     position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
//     map: map
//   });
//   var infowindow = new google.maps.InfoWindow( {
//     content: event._embedded.venues[0].name
//   })
//   marker.addListener('mouseover',function() {
//     infowindow.open(map,marker);
//   });
//   marker.addListener('mouseout',function(){
//     infowindow.close(map,marker);
//   });
// }