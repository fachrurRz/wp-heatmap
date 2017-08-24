function initheatmap(targetDom) {
  const h337 = require('heatmap.js');
  const config = {
    radius: 40,
    maxOpacity: 0.4,
    visible: true,
    container: targetDom,
  };

  return h337.create(config);
}

function addHeatMapDataPoint(coord, weight, data, addX, addY) {
  data.push({ x: coord.x + addX, y: coord.y + addY, value: weight });
}

function renderShape(elemen, weight, data, addX, addY) {
  for (let x = elemen.bounds.x + 20; x < elemen.bounds.x + elemen.bounds.width - 20; x += 10) {
    for (let y = elemen.bounds.y + 16; y < elemen.bounds.y + elemen.bounds.height - 16; y += 10) {
      y = parseInt(y, 10);
      x = parseInt(x, 10);
      addHeatMapDataPoint({ x: x, y: y }, weight / 10, data, addX, addY);
    }
  }
}

function render(element, bpmnElements, diagram, data) {
  const targetDom = element;
  const HeatmapService = initheatmap(targetDom);
  const heatMapData = [];
  let maxWeight = 0;
  const addX = diagram.x;
  const addY = diagram.y;
  const statsElemente = {};
  if (data) {
    for (let i = 0; i < data.length; i++) {
      const statsElement = data[i];
      statsElemente[statsElement.sourceNodeId] = statsElement.count;
    }
    Object.keys(bpmnElements).forEach(function iterate(key) {
      const elem = bpmnElements[key];
      if (elem.id.toLowerCase().indexOf('sequenceflow') === 0) {
        for (let i = 0; i < data.length; i++) {
          const statsElement = data[i];

          if (elem.targetRef === statsElement.sourceNodeId) {
            if (!statsElemente[elem.sourceRef]) {
              return;
            }
            const weight = Math.min(statsElemente[elem.sourceRef], statsElement.count);
            if (weight > maxWeight) {
              maxWeight = weight;
            }
            const startElement = bpmnElements[elem.sourceRef];
            renderShape(startElement, weight, heatMapData, addX, addY);
            const endElement = bpmnElements[elem.targetRef];
            renderShape(endElement, weight, heatMapData, addX, addY);
            const waypoints = elem.waypoints;
            for (let i = 0; i < waypoints.length - 1; i++) {
              const coordA = waypoints[i];
              const coordB = waypoints[i + 1];
              const steps = Math.sqrt(((coordA.x - coordB.x) * (coordA.x - coordB.x)) + ((coordA.y - coordB.y) * (coordA.y - coordB.y))) / 10;
              const h_step = -(coordA.x - coordB.x) / steps;
              const v_step = -(coordA.y - coordB.y) / steps;
              let actualx = coordA.x + h_step;
              let actualy = coordA.y + v_step;
              for (let int = 0; int < steps - 1; int++) {
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

  HeatmapService.setData({
    max: 2 * maxWeight,
    data: heatMapData,
  });
}
export default render;
