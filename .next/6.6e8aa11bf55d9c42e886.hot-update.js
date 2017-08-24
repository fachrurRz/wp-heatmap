webpackHotUpdate(6,{

/***/ 1278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(651);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactAutobind = __webpack_require__(1055);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _WorkflowDiagramModule = __webpack_require__(1279);

var _WorkflowDiagramModule2 = _interopRequireDefault(_WorkflowDiagramModule);

var _HeatmapRenderer = __webpack_require__(1280);

var _HeatmapRenderer2 = _interopRequireDefault(_HeatmapRenderer);

var _DiagramXMLParser = __webpack_require__(1282);

var _DiagramElementsParser = __webpack_require__(1301);

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
        (0, _HeatmapRenderer2.default)(this.state.targetDom, this.state.bpmnElements, this.state.diagram, this.props.data);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.BpmnModeler = __webpack_require__(1302);
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
          lineNumber: 87
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('div', { id: 'heatmap-container', className: _WorkflowDiagramModule2.default.heatmapContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })), _react2.default.createElement('div', { id: 'diagram-container', className: _WorkflowDiagramModule2.default.container, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })));
    }
  }]);

  return WorkflowDiagram;
}(_react.Component);

exports.default = WorkflowDiagram;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/components/WorkflowDiagram/WorkflowDiagram.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/components/WorkflowDiagram/WorkflowDiagram.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi42ZThhYTExYmY1NWQ5YzQyZTg4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Xb3JrZmxvd0RpYWdyYW0vV29ya2Zsb3dEaWFncmFtLmpzPzMxYWFmY2YiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ3JlYWN0LWF1dG9iaW5kJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Xb3JrZmxvd0RpYWdyYW0ubW9kdWxlLmNzcyc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4uL0hlYXRtYXBSZW5kZXJlci9IZWF0bWFwUmVuZGVyZXInO1xuaW1wb3J0IHsgaW1wb3J0WE1MLCBwYXJzZVhtbFRvSnNvbiB9IGZyb20gJy4uLy4uL3V0aWxzL0RpYWdyYW1YTUxQYXJzZXInO1xuaW1wb3J0IHsgcGFyc2VEaWFncmFtIH0gZnJvbSAnLi4vLi4vdXRpbHMvRGlhZ3JhbUVsZW1lbnRzUGFyc2VyJztcblxuY2xhc3MgV29ya2Zsb3dEaWFncmFtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgYXV0b2JpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaW50ZXJ2YWxJZDogMCxcbiAgICAgIHdvcmtmbG93RGVmaW5pdGlvbjogcHJvcHMud29ya2Zsb3dEZWZpbml0aW9uLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wdXNoRGF0ZVRpbWUpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAvZGV0YWlscz9pZD0ke3RoaXMuc3RhdGUud29ya2Zsb3dEZWZpbml0aW9uLmlkfSZkYXRlVGltZT0ke3RoaXMucHJvcHMucHVzaERhdGVUaW1lfWApO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5kaWFncmFtKSB7XG4gICAgICByZW5kZXIodGhpcy5zdGF0ZS50YXJnZXREb20sIHRoaXMuc3RhdGUuYnBtbkVsZW1lbnRzLCB0aGlzLnN0YXRlLmRpYWdyYW0sIHRoaXMucHJvcHMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5CcG1uTW9kZWxlciA9IHJlcXVpcmUoJ2JwbW4tanMnKTtcbiAgICB0aGlzLmdldE1vZGVsZXIoKTtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5jaGVja0RpYWdyYW1EaWRNb3VudCwgMTAwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGludGVydmFsSWQ6IGludGVydmFsSWQgfSk7XG4gIH1cblxuICBjaGVja0RpYWdyYW1EaWRNb3VudCgpIHtcbiAgICBsZXQgZGlhZ3JhbSA9IG51bGw7XG4gICAgbGV0IGJwbW5FbGVtZW50cyA9IG51bGw7XG4gICAgaWYgKHRoaXMuc3RhdGUueG1sRGF0YSkge1xuICAgICAgZGlhZ3JhbSA9IHBhcnNlWG1sVG9Kc29uKHRoaXMuc3RhdGUueG1sRGF0YSk7XG4gICAgfVxuICAgIGlmIChkaWFncmFtKSB7XG4gICAgICBicG1uRWxlbWVudHMgPSBwYXJzZURpYWdyYW0oZGlhZ3JhbSk7XG4gICAgfVxuICAgIGlmIChicG1uRWxlbWVudHMpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbElkKTtcbiAgICAgIGNvbnN0IHRhcmdldERvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWF0bWFwLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgQlBNTkRpYWdyYW0gPSBkaWFncmFtLmVsZW1lbnRzWzBdLmVsZW1lbnRzW2RpYWdyYW0uZWxlbWVudHNbMF0uZWxlbWVudHMubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBCUE1OQ29udGFpbmVyID0gQlBNTkRpYWdyYW0uZWxlbWVudHNbMF0uZWxlbWVudHNbMF0uZWxlbWVudHNbMF0uYXR0cmlidXRlcztcbiAgICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KEJQTU5Db250YWluZXIud2lkdGgsIDEwKTtcbiAgICAgIGxldCBoZWlnaHQgPSBwYXJzZUludChCUE1OQ29udGFpbmVyLmhlaWdodCwgMTApO1xuICAgICAgbGV0IHggPSBwYXJzZUludChCUE1OQ29udGFpbmVyLngsIDEwKTtcbiAgICAgIGxldCB5ID0gcGFyc2VJbnQoQlBNTkNvbnRhaW5lci55LCAxMCk7XG4gICAgICB4ID0gTWF0aC5hYnMoeCkgKyAxMDA7XG4gICAgICB5ID0gTWF0aC5hYnMoeSkgKyAxMDA7XG4gICAgICB3aWR0aCArPSB4O1xuICAgICAgaGVpZ2h0ICs9IHk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYnBtbkVsZW1lbnRzOiBicG1uRWxlbWVudHMsIHRhcmdldERvbTogdGFyZ2V0RG9tIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWdyYW06IHsgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCwgeDogeCwgeTogeSB9IH0pO1xuICAgICAgdGhpcy5jaGFuZ2VEaWFncmFtUHJvcGVydHkoKTtcbiAgICAgIC8vIHJlbmRlcih0YXJnZXREb20sIGJwbW5FbGVtZW50cywgdGhpcy5zdGF0ZS5kaWFncmFtLCB0aGlzLnByb3BzLmRhdGVUaW1lKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VEaWFncmFtUHJvcGVydHkoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmpzLXBvd2VyZWQtYnknKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdmcnKVswXS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkanMtY29udGFpbmVyJylbMF0uc3R5bGUubGVmdCA9IGAke3RoaXMuc3RhdGUuZGlhZ3JhbS54fXB4YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkanMtY29udGFpbmVyJylbMF0uc3R5bGUudG9wID0gYCR7dGhpcy5zdGF0ZS5kaWFncmFtLnl9cHhgO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rqcy1jb250YWluZXInKVswXS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhZ3JhbS1jb250YWluZXInKS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnN0YXRlLmRpYWdyYW0uaGVpZ2h0fXB4YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhZ3JhbS1jb250YWluZXInKS5zdHlsZS53aWR0aCA9IGAke3RoaXMuc3RhdGUuZGlhZ3JhbS53aWR0aH1weGA7XG4gIH1cblxuICBnZXRNb2RlbGVyKCkge1xuICAgIGNvbnN0IHhtbEZpbGUgPSBgJHt0aGlzLnN0YXRlLndvcmtmbG93RGVmaW5pdGlvbi5rZXl9LSR7dGhpcy5zdGF0ZS53b3JrZmxvd0RlZmluaXRpb24udmVyc2lvbn0uYnBtbmA7XG4gICAgY29uc3QgeG1sID0gaW1wb3J0WE1MKHhtbEZpbGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB4bWxEYXRhOiB4bWwgfSk7XG4gICAgY29uc3QgZGlhZ3JhbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFncmFtLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJwbW5Nb2RlbGVyID0gbmV3IHRoaXMuQnBtbk1vZGVsZXIoe1xuICAgICAgY29udGFpbmVyOiBkaWFncmFtQ29udGFpbmVyLFxuICAgIH0pO1xuXG4gICAgYnBtbk1vZGVsZXIuaW1wb3J0WE1MKHhtbCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keUNvbnRhaW5lcn0gc3R5bGU9e3sgb3ZlcmZsb3c6ICdzY3JvbGwnIH19PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9J2hlYXRtYXAtY29udGFpbmVyJyBjbGFzc05hbWU9e3N0eWxlcy5oZWF0bWFwQ29udGFpbmVyfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9J2RpYWdyYW0tY29udGFpbmVyJyBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrZmxvd0RpYWdyYW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1dvcmtmbG93RGlhZ3JhbS9Xb3JrZmxvd0RpYWdyYW0uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBUEE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSEE7QUFDQTtBQUVBOzs7O0FBSUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUdBO0FBSEE7Ozs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9