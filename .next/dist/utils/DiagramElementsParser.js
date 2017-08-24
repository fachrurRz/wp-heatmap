'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDiagram = parseDiagram;
function parseDiagram(diagram) {
  var elements = diagram.elements[0].elements;
  // searching for index
  var processIndex = 0;
  var diagramIndex = 0;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].name === 'bpmn:process') {
      processIndex = i;
    }
    if (elements[i].name === 'bpmndi:BPMNDiagram') {
      diagramIndex = i;
    }
  }
  var els = diagram.elements[0].elements[diagramIndex].elements[0].elements;
  var bpmnElements = {};

  for (var _i = 0; _i < els.length; _i++) {
    var attr = els[_i].attributes;
    var id = attr.bpmnElement;
    var elem = {
      id: id
    };
    // if (els[i].name.includes('BPMNEdge')) {
    //   elem.sourceRef = attr.sourceElement;
    //   elem.targetRef = attr.targetElement;
    // }

    if (els[_i].name.includes('BPMNShape')) {
      var bounds = els[_i].elements[0].attributes;
      elem.bounds = {
        x: parseInt(bounds.x, 10),
        y: parseInt(bounds.y, 10),
        height: parseInt(bounds.height, 10),
        width: parseInt(bounds.width, 10)
      };
    }

    if (els[_i].name.includes('BPMNEdge')) {
      var waypointsData = els[_i].elements;
      var waypoints = [];
      for (var _i2 = 0; _i2 < waypointsData.length; _i2++) {
        if (waypointsData[_i2].name === 'di:waypoint') {
          var point = waypointsData[_i2].attributes;
          waypoints.push({ x: parseInt(point.x, 10), y: parseInt(point.y, 10) });
        }
      }
      elem.waypoints = waypoints;
    }
    bpmnElements[id] = elem;
  }

  var elsProcess = diagram.elements[0].elements[processIndex].elements;

  for (var _i3 = 0; _i3 < elsProcess.length; _i3++) {
    if (elsProcess[_i3].name === 'bpmn:sequenceFlow') {
      bpmnElements[elsProcess[_i3].attributes.id].sourceRef = elsProcess[_i3].attributes.sourceRef;
      bpmnElements[elsProcess[_i3].attributes.id].targetRef = elsProcess[_i3].attributes.targetRef;
    }
  }
  return bpmnElements;
}