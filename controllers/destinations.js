const Flight = require('../models/flight');

module.exports = {
  create
};

function create(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    // We can push subdocs into Mongoose arrays
    flight.destinations.push(req.body);
    // Save the flight doc, don't call save on subdocs
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}