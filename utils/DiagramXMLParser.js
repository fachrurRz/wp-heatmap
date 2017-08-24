export function importXML(filename) {
  const $ = require('jquery');
  let xml = null;
  $.ajax({
    url: `static/Diagram/${filename}`,
    async: false,
    success: function success(data) {
      xml = data;
    },
  });
  return xml;
}

export function parseXmlToJson(xmlFile) {
  const converter = require('xml-js');
  const options = { compact: false };
  return converter.xml2js(xmlFile, options);
}

