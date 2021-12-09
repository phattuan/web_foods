"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

/**
 * Created by trungquandev.com's author.
 */
var app = (0, _express["default"])();
app.set('view engine', 'ejs');
app.set('views', _path["default"].resolve(__dirname, '../src/views'));
app.get('/', function (req, res) {
  res.render('home');
}).listen('4400');