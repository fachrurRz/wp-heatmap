'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initheatmap(targetDom) {
  var h337 = require('heatmap.js');
  var config = {
    radius: 40,
    maxOpacity: 0.4,
    visible: true,
    container: targetDom
  };

  return h337.create(config);
}

function addHeatMapDataPoint(coord, weight, data, addX, addY) {
  data.push({ x: coord.x + addX, y: coord.y + addY, value: weight });
}

function renderShape(elemen, weight, data, addX, addY, canvas, type) {
  if (canvas) {
    var ctx = canvas.getContext('2d');
    ctx.font = '16px Arial';
    ctx.fillStyle = 'red';
    if (type === 'input') {
      ctx.textAlign = 'left';
      ctx.fillText('' + weight, elemen.bounds.x + addX - 10, elemen.bounds.y - 5 + addY);
    } else {
      ctx.textAlign = 'right';
      ctx.fillText('' + weight, elemen.bounds.x + addX + elemen.bounds.width + 10, elemen.bounds.y - 5 + addY);
    }
  }
  for (var x = elemen.bounds.x + 20; x < elemen.bounds.x + elemen.bounds.width - 20; x += 10) {
    for (var y = elemen.bounds.y + 16; y < elemen.bounds.y + elemen.bounds.height - 16; y += 10) {
      y = parseInt(y, 10);
      x = parseInt(x, 10);
      addHeatMapDataPoint({ x: x, y: y }, weight / 10, data, addX, addY);
    }
  }
}

function render(element, canvas, bpmnElements, diagram, data) {
  var targetDom = element;
  var HeatmapService = initheatmap(targetDom);
  var heatMapData = [];
  var maxWeight = 0;
  var addX = diagram.x;
  var addY = diagram.y;
  var statsElemente = {};
  if (data && canvas) {
    for (var i = 0; i < data.length; i++) {
      var statsElement = data[i];
      statsElemente[statsElement.sourceNodeId] = statsElement.count;
    }
    console.log(bpmnElements, statsElemente);
    (0, _keys2.default)(bpmnElements).forEach(function iterate(key) {
      var elem = bpmnElements[key];
      if (elem.id.toLowerCase().indexOf('sequenceflow') === 0) {
        for (var _i = 0; _i < data.length; _i++) {
          var _statsElement = data[_i];

          if (elem.targetRef === _statsElement.sourceNodeId) {
            if (!statsElemente[elem.sourceRef]) {
              return;
            }
            var weight = Math.min(statsElemente[elem.sourceRef], _statsElement.count);
            if (weight > maxWeight) {
              maxWeight = weight;
            }
            var startElement = bpmnElements[elem.sourceRef];
            renderShape(startElement, weight, heatMapData, addX, addY, canvas, 'output');

            var endElement = bpmnElements[elem.targetRef];
            renderShape(endElement, weight, heatMapData, addX, addY, canvas, 'input');
            var waypoints = elem.waypoints;
            for (var _i2 = 0; _i2 < waypoints.length - 1; _i2++) {
              var coordA = waypoints[_i2];
              var coordB = waypoints[_i2 + 1];
              var steps = Math.sqrt((coordA.x - coordB.x) * (coordA.x - coordB.x) + (coordA.y - coordB.y) * (coordA.y - coordB.y)) / 10;
              var h_step = -(coordA.x - coordB.x) / steps;
              var v_step = -(coordA.y - coordB.y) / steps;
              var actualx = coordA.x + h_step;
              var actualy = coordA.y + v_step;
              for (var int = 0; int < steps - 1; int++) {
                addHeatMapDataPoint({ x: actualx, y: actualy }, weight, heatMapData, addX, addY);
                actualx = actualx + h_step;
                actualy = actualy + v_step;
              }
            }
          }
        }
      }
    });
  }

  console.log(heatMapData);
  HeatmapService.setData({
    max: 2 * maxWeight,
    data: heatMapData
  });
}
exports.default = render;