export function parseDiagram(diagram) {
  const elements = diagram.elements[0].elements;
  // searching for index
  let processIndex = 0;
  let diagramIndex = 0;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].name === 'bpmn:process') {
      processIndex = i;
    }
    if (elements[i].name === 'bpmndi:BPMNDiagram') {
      diagramIndex = i;
    }
  }
  const els = diagram.elements[0].elements[diagramIndex].elements[0].elements;
  const bpmnElements = {};

  for (let i = 0; i < els.length; i++) {
    const attr = els[i].attributes;
    const id = attr.bpmnElement;
    const elem = {
      id: id,
    };
    // if (els[i].name.includes('BPMNEdge')) {
    //   elem.sourceRef = attr.sourceElement;
    //   elem.targetRef = attr.targetElement;
    // }

    if (els[i].name.includes('BPMNShape')) {
      const bounds = els[i].elements[0].attributes;
      elem.bounds = {
        x: parseInt(bounds.x, 10),
        y: parseInt(bounds.y, 10),
        height: parseInt(bounds.height, 10),
        width: parseInt(bounds.width, 10),
      };
    }

    if (els[i].name.includes('BPMNEdge')) {
      const waypointsData = els[i].elements;
      const waypoints = [];
      for (let i = 0; i < waypointsData.length; i++) {
        if (waypointsData[i].name === 'di:waypoint') {
          const point = waypointsData[i].attributes;
          waypoints.push({ x: parseInt(point.x, 10), y: parseInt(point.y, 10) });
        }
      }
      elem.waypoints = waypoints;
    }
    bpmnElements[id] = elem;
  }

  const elsProcess = diagram.elements[0].elements[processIndex].elements;

  for (let i = 0; i < elsProcess.length; i++) {
    if (elsProcess[i].name === 'bpmn:sequenceFlow') {
      bpmnElements[elsProcess[i].attributes.id].sourceRef = elsProcess[i].attributes.sourceRef;
      bpmnElements[elsProcess[i].attributes.id].targetRef = elsProcess[i].attributes.targetRef;
    }
  }
  return bpmnElements;
}
