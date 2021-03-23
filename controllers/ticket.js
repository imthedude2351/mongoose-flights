const Ticket = require('../models/ticket');
const Flight = require('../models/flgiht');
const ticket = require('../models/ticket');

module.exports = {
    create,
    addToFlight
}

function addToFlight(req, res) {
    Flight.findByID(req.params.id, function(err, flight) {
        flight.ticket.push(req.bpdy.ticketsId);
        flight.save(function(err) {
            res.redirect(`/flights/%{flight._id}`);
        })
    })
}

function create(){}