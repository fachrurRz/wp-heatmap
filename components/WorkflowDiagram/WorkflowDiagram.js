/* eslint-env browser */
import React, { Component } from 'react';
import autobind from 'react-autobind';
import styles from './WorkflowDiagram.module.css';
import render from '../HeatmapRenderer/HeatmapRenderer';
import { importXML, parseXmlToJson } from '../../utils/DiagramXMLParser';
import { parseDiagram } from '../../utils/DiagramElementsParser';

class WorkflowDiagram extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = { intervalId: 0,
      workflowDefinition: props.workflowDefinition,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.pushDateTime) {
      window.location.replace(`/details?id=${this.state.workflowDefinition.id}&dateTime=${this.props.pushDateTime}`);
    }
    if (this.state.diagram) {
      render(this.state.targetDom, this.state.bpmnElements, this.state.diagram, this.props.data);
    }
  }

  componentDidMount() {
    this.BpmnModeler = require('bpmn-js');
    this.getModeler();
    const intervalId = setInterval(this.checkDiagramDidMount, 1000);
    this.setState({ intervalId: intervalId });
  }

  checkDiagramDidMount() {
    let diagram = null;
    let bpmnElements = null;
    if (this.state.xmlData) {
      diagram = parseXmlToJson(this.state.xmlData);
    }
    if (diagram) {
      bpmnElements = parseDiagram(diagram);
    }
    if (bpmnElements) {
      clearInterval(this.state.intervalId);
      const targetDom = document.getElementById('heatmap-container');
      const BPMNDiagram = diagram.elements[0].elements[diagram.elements[0].elements.length - 1];
      const BPMNContainer = BPMNDiagram.elements[0].elements[0].elements[0].attributes;
      let width = parseInt(BPMNContainer.width, 10);
      let height = parseInt(BPMNContainer.height, 10);
      let x = parseInt(BPMNContainer.x, 10);
      let y = parseInt(BPMNContainer.y, 10);
      x = Math.abs(x) + 100;
      y = Math.abs(y) + 100;
      width += x;
      height += y;
      this.setState({ bpmnElements: bpmnElements, targetDom: targetDom });
      this.setState({ diagram: { height: height, width: width, x: x, y: y } });
      this.changeDiagramProperty();
      // render(targetDom, bpmnElements, this.state.diagram, this.props.dateTime);
    }
  }

  changeDiagramProperty() {
    document.getElementsByClassName('bjs-powered-by')[0].style.display = 'none';
    document.getElementsByTagName('svg')[0].style.overflow = 'visible';
    document.getElementsByClassName('djs-container')[0].style.left = `${this.state.diagram.x}px`;
    document.getElementsByClassName('djs-container')[0].style.top = `${this.state.diagram.y}px`;
    document.getElementsByClassName('djs-container')[0].style.overflow = 'visible';
    document.getElementById('diagram-container').style.height = `${this.state.diagram.height}px`;
    document.getElementById('diagram-container').style.width = `${this.state.diagram.width}px`;
  }

  getModeler() {
    const xmlFile = `${this.state.workflowDefinition.key}-${this.state.workflowDefinition.version}.bpmn`;
    const xml = importXML(xmlFile);
    this.setState({ xmlData: xml });
    const diagramContainer = document.getElementById('diagram-container');
    const bpmnModeler = new this.BpmnModeler({
      container: diagramContainer,
    });

    bpmnModeler.importXML(xml);
  }

  render() {
    return (
      <div className={styles.bodyContainer} style={{ overflow: 'scroll' }}>
        <div>
          <div id='heatmap-container' className={styles.heatmapContainer}></div>
        </div>
        <div id='diagram-container' className={styles.container}></div>
      </div>
    );
  }
}

export default WorkflowDiagram;
