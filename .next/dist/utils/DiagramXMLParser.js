'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importXML = importXML;
exports.parseXmlToJson = parseXmlToJson;
function importXML(filename) {
  var $ = require('jquery');
  var xml = null;
  $.ajax({
    url: 'static/Diagram/' + filename,
    async: false,
    success: function success(data) {
      xml = data;
    }
  });
  return xml;
}

function parseXmlToJson(xmlFile) {
  var converter = require('xml-js');
  var options = { compact: false };
  return converter.xml2js(xmlFile, options);
}