define(function(require) {
  var firebase = require('firebase');
  var templates = require('get-templates');
  
  var myFirebaseRef = new Firebase("https://tripping.firebaseio.com/");

  //Listen for when anything changes on the "trips" key
  myFirebaseRef.child("location_types").on("value", function(snapshot) {
    var location_types = snapshot.val();
  
    console.log("location_types", location_types);
 

    var populatedTemplate = templates.locTypeTpl(location_types);

    $("#location-type").html(populatedTemplate);
  });
  //Listen for when anything changes on the "trips" key
  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    console.log("trips",trips);

    //This will hold the complete DOM string of trips
    var populatedTemplate = templates.tripTpl(trips);
    

    //Insert the DOM string into the appropriate element
    $("#list-of-trips").html(populatedTemplate);

    

  });
  $(document).on("click", "#visited", function() {

    myFirebaseRef.child("trips").on("value", function(snapshot) {
      var trips = snapshot.val();
      var populatedTemplate = templates.tripVisitedTpl(trips);
      $("#list-of-trips").html(populatedTemplate);
    });
  });

  $(document).on("click", "#wish-list", function() {

    myFirebaseRef.child("trips").on("value", function(snapshot) {
      var trips = snapshot.val();
      var populatedTemplate = templates.tripWishTpl(trips);
      $("#list-of-trips").html(populatedTemplate);
    });
  });
});