define(function(require) {
  // Dependencies
  var $ = require('jquery');

  // Module level variables
  var visited = false;

  // Event handlers for determining which list
  // the item goes on
  $("#visited").click(function() {
    visited = true;
  });

  $("#wish-list").click(function() {
    visited = false;
  });

  // POST the data to Firebase when Add Location
  // button is clicked
  var newLocation = {
    location: $("#location").val(),
    location_type: $("#location-type").val(),
    visited: visited
  };

  $("#add-location").click(function() {
    var newLocation = {
      location: $("#location").val(),
      location_type: $("#location-type").val(),
      visited: visited
    };
    $.ajax({
      url: "https://tripping.firebaseio.com/trips.json",
      method: "POST",
      data: JSON.stringify(newLocation)
    })
    .done(function(newData) {
      console.log("newData", newData);
    })
    .fail(function(xhr, status, error) {
      console.log("error", error);
    });
  });
});