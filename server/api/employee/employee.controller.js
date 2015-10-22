/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Employee = require('./employee.model');

// Get list of employees
exports.index = function(req, res) {
  Employee.find(function (err, employees) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(employees);
  });
};

// Get a single employee
exports.show = function(req, res) {
  Employee.findById(req.params.id, function (err, employee) {
    if(err) { return handleError(res, err); }
    if(!employee) { return res.status(404).send('Not Found'); }
    return res.json(employee);
  });
};

// Creates a new employee in the DB.
exports.create = function(req, res) {
  Employee.create(req.body, function(err, employee) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(employee);
  });
};

// Updates an existing employee in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Employee.findById(req.params.id, function (err, employee) {
    if (err) { return handleError(res, err); }
    if(!employee) { return res.status(404).send('Not Found'); }
    var updated = _.merge(employee, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(employee);
    });
  });
};

// Deletes a employee from the DB.
exports.destroy = function(req, res) {
  Employee.findById(req.params.id, function (err, employee) {
    if(err) { return handleError(res, err); }
    if(!employee) { return res.status(404).send('Not Found'); }
    employee.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}