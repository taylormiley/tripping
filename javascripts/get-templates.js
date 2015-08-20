define(function(require) {
  return {
    tripTpl: require("hbs!../templates/list-trips"),
    locTypeTpl: require("hbs!../templates/location-types"),
    tripVisitedTpl: require("hbs!../templates/trips-visited"),
    tripWishTpl: require("hbs!../templates/trips-wish-list")
  };
});