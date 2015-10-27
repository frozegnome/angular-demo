'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  firstName: String,
  lastName: String,
  middleName: String,
  age: Number,
  designation: String,
  salary: Number,
  isSelected: Boolean
});

module.exports = mongoose.model('Employee', EmployeeSchema);