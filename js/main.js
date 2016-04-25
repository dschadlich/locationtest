$( document ).ready(function (){
// upDateLocation ();
alert ('document ready');
var id, target, options;

function success(pos) {
  console.log (pos);
  var crd = pos.coords;
  alert ('success');
  $("#location").html (crd.latitude+ "<br />" + crd.longitude+ "<br />" + crd.accuracy);



}

function error(err) {
  // console.warn('ERROR(' + err.code + '): ' + err.message);
  alert('ERROR(' + err.code + '): ' + err.message);
}



options = {
  enableHighAccuracy: true,
  timeout: 30000,
  maximumAge: Infinity
};



// if( navigator.geolocation) {
//    id = navigator.geolocation.watchPosition(success, error, options);
//    var timeout = setTimeout( function() { navigator.geolocation.clearWatch( id ); }, 15000 );
// } else {
//    alert ("Got error, no geolocation");
// }
 id = navigator.geolocation.watchPosition(success, error, options);


});
