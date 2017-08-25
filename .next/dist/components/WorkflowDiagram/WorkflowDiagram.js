'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-modules/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAutobind = require('react-autobind');

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _WorkflowDiagramModule = require('./WorkflowDiagram.module.css');

var _WorkflowDiagramModule2 = _interopRequireDefault(_WorkflowDiagramModule);

var _HeatmapRenderer = require('../HeatmapRenderer/HeatmapRenderer');

var _HeatmapRenderer2 = _interopRequireDefault(_HeatmapRenderer);

var _DiagramXMLParser = require('../../utils/DiagramXMLParser');

var _DiagramElementsParser = require('../../utils/DiagramElementsParser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/traveloka/Work/wp-heatmap/components/WorkflowDiagram/WorkflowDiagram.js';
/* eslint-env browser */


var WorkflowDiagram = function (_Component) {
  (0, _inherits3.default)(WorkflowDiagram, _Component);

  function WorkflowDiagram(props) {
    (0, _classCallCheck3.default)(this, WorkflowDiagram);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WorkflowDiagram.__proto__ || (0, _getPrototypeOf2.default)(WorkflowDiagram)).call(this, props));

    (0, _reactAutobind2.default)(_this);
    _this.state = { intervalId: 0,
      workflowDefinition: props.workflowDefinition
    };
    return _this;
  }

  (0, _createClass3.default)(WorkflowDiagram, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.pushDateTime) {
        window.location.replace('/details?id=' + this.state.workflowDefinition.id + '&dateTime=' + this.props.pushDateTime);
      }
      if (this.state.diagram) {
        var canvas = document.getElementById('data-container');
        (0, _HeatmapRenderer2.default)(this.state.targetDom, canvas, this.state.bpmnElements, this.state.diagram, this.props.data);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.BpmnModeler = require('bpmn-js');
      this.getModeler();
      var intervalId = setInterval(this.checkDiagramDidMount, 1000);
      this.setState({ intervalId: intervalId });
    }
  }, {
    key: 'checkDiagramDidMount',
    value: function checkDiagramDidMount() {
      var diagram = null;
      var bpmnElements = null;
      if (this.state.xmlData) {
        diagram = (0, _DiagramXMLParser.parseXmlToJson)(this.state.xmlData);
      }
      if (diagram) {
        bpmnElements = (0, _DiagramElementsParser.parseDiagram)(diagram);
      }
      if (bpmnElements) {
        clearInterval(this.state.intervalId);
        var targetDom = document.getElementById('heatmap-container');
        var BPMNDiagram = diagram.elements[0].elements[diagram.elements[0].elements.length - 1];
        var BPMNContainer = BPMNDiagram.elements[0].elements[0].elements[0].attributes;
        var width = parseInt(BPMNContainer.width, 10);
        var height = parseInt(BPMNContainer.height, 10);
        var x = parseInt(BPMNContainer.x, 10);
        var y = parseInt(BPMNContainer.y, 10);
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
  }, {
    key: 'changeDiagramProperty',
    value: function changeDiagramProperty() {
      document.getElementsByClassName('bjs-powered-by')[0].style.display = 'none';
      document.getElementsByTagName('svg')[0].style.overflow = 'visible';
      document.getElementsByClassName('djs-container')[0].style.left = this.state.diagram.x + 'px';
      document.getElementsByClassName('djs-container')[0].style.top = this.state.diagram.y + 'px';
      document.getElementsByClassName('djs-container')[0].style.overflow = 'visible';
      document.getElementById('diagram-container').style.height = this.state.diagram.height + 'px';
      document.getElementById('diagram-container').style.width = this.state.diagram.width + 'px';
    }
  }, {
    key: 'getModeler',
    value: function getModeler() {
      var xmlFile = this.state.workflowDefinition.key + '-' + this.state.workflowDefinition.version + '.bpmn';
      var xml = (0, _DiagramXMLParser.importXML)(xmlFile);
      this.setState({ xmlData: xml });
      var diagramContainer = document.getElementById('diagram-container');
      var bpmnModeler = new this.BpmnModeler({
        container: diagramContainer
      });

      bpmnModeler.importXML(xml);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_style2.default, {
        styles: [{
          __hash: _WorkflowDiagramModule2.default.__hash,
          __css: _WorkflowDiagramModule2.default.__css
        }]
      }, _react2.default.createElement('div', { className: _WorkflowDiagramModule2.default.bodyContainer, style: { overflow: 'scroll' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('canvas', { id: 'data-container', width: '5000px', height: '5000px', className: _WorkflowDiagramModule2.default.canvasContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react2.default.createElement('div', { id: 'heatmap-container', className: _WorkflowDiagramModule2.default.heatmapContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), _react2.default.createElement('div', { id: 'diagram-container', className: _WorkflowDiagramModule2.default.container, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })));
    }
  }]);

  return WorkflowDiagram;
}(_react.Component);

exports.default = WorkflowDiagram;