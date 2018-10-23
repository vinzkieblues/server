const Event = require('../models/event.model');

exports.event_create = function (req, res, next) {
    let event = new Event(
        {
            id: req.body.id,
            name: req.body.name
        }
    );

    event.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Events Created successfully')
    })
};

exports.event_details = function (req, res) {
    Event.findById(req.params.id, function (err, event) {
        if (err) return next(err);
        res.send(event);
    })
};

exports.event_update = function (req, res) {
    Event.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, event) {
        if (err) return next(err);
        res.send('Event udpated.');
    });
};

exports.event_delete = function (req, res) {
    Event.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};