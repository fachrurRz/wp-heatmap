
          window.__NEXT_REGISTER_PAGE('/details', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 1051:
/***/ (function(module, exports) {

module.exports = { "title": "WorkflowDashboardHeader-module__title--Rzpv4" };
module.exports.__hash = 983577378;
module.exports.__css = ".WorkflowDashboardHeader-module__title--Rzpv4 {\n    color: white;\n    margin: 2vh;\n}\n/*# sourceURL=/home/traveloka/Work/wp-heatmap/components/WorkflowDashboardHeader/WorkflowDashboardHeader.module.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZlbG9rYS9Xb3JrL3dwLWhlYXRtYXAvY29tcG9uZW50cy9Xb3JrZmxvd0Rhc2hib2FyZEhlYWRlci9Xb3JrZmxvd0Rhc2hib2FyZEhlYWRlci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7Q0FDZiIsImZpbGUiOiJXb3JrZmxvd0Rhc2hib2FyZEhlYWRlci5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAydmg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */";

/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWorkflowDefinitionList = getWorkflowDefinitionList;
exports.getWorkflowDefinitionDetail = getWorkflowDefinitionDetail;

var _Loader = __webpack_require__(1073);

function getWorkflowDefinitionList(fileData) {
  return (0, _Loader.get)(fileData).then(function (response) {
    var workflowDefinition = [];
    for (var key in response) {
      workflowDefinition.push({ key: response[key].key, version: response[key].version, id: key });
    }
    return workflowDefinition;
  }).catch(function (error) {
    return error;
  });
}

function getWorkflowDefinitionDetail(fileData, id) {
  return (0, _Loader.get)(fileData).then(function (response) {
    return response[id];
  }).catch(function (error) {
    return error;
  });
}

exports.default = {
  getWorkflowDefinitionList: getWorkflowDefinitionList,
  getWorkflowDefinitionDetail: getWorkflowDefinitionDetail
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/loader/DataAggregateLoader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/loader/DataAggregateLoader.js"); } } })();

/***/ }),

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

var _promise = __webpack_require__(44);

var _promise2 = _interopRequireDefault(_promise);

var _jquery = __webpack_require__(1074);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(fileData) {
  return new _promise2.default(function (resolve, reject) {
    _jquery2.default.ajax({
      url: 'static/' + fileData,
      async: true
    }).done(function (data) {
      resolve(data);
    }).fail(function (err) {
      console.log(err);
      reject(err);
    });
  });
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/loader/Loader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/loader/Loader.js"); } } })();

/***/ }),

/***/ 1075:
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

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(571);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/traveloka/Work/wp-heatmap/components/LoadingBar/LoadingBar.js';


var LoadingBar = function (_Component) {
  (0, _inherits3.default)(LoadingBar, _Component);

  function LoadingBar(props) {
    (0, _classCallCheck3.default)(this, LoadingBar);

    return (0, _possibleConstructorReturn3.default)(this, (LoadingBar.__proto__ || (0, _getPrototypeOf2.default)(LoadingBar)).call(this, props));
  }

  (0, _createClass3.default)(LoadingBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: true, inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_semanticUiReact.Loader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      })));
    }
  }]);

  return LoadingBar;
}(_react.Component);

exports.default = LoadingBar;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/components/LoadingBar/LoadingBar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/components/LoadingBar/LoadingBar.js"); } } })();

/***/ }),

/***/ 1174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var id = 'workflowDefinition';
/** FLOW **/
var STATE_NAME = exports.STATE_NAME = id;
var FETCH_DATA_FAILED = exports.FETCH_DATA_FAILED = id + '.FETCH_DATA_FAILED';
var FETCH_DATA_START = exports.FETCH_DATA_START = id + '.FETCH_DATA_START';
var FETCH_DATA_SUCCESS = exports.FETCH_DATA_SUCCESS = id + '.FETCH_DATA_SUCCESS';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/constant/WorkflowDefinitionDetailConstant.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/constant/WorkflowDefinitionDetailConstant.js"); } } })();

/***/ }),

/***/ 1271:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1272);


/***/ }),

/***/ 1272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(227);

var _head2 = _interopRequireDefault(_head);

var _soyaNext = __webpack_require__(790);

var _propTypes = __webpack_require__(49);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WorkflowDashboardHeader = __webpack_require__(838);

var _WorkflowDashboardHeader2 = _interopRequireDefault(_WorkflowDashboardHeader);

var _DetailPageSidebar = __webpack_require__(1273);

var _DetailPageSidebar2 = _interopRequireDefault(_DetailPageSidebar);

var _reactAutobind = __webpack_require__(1055);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _WorkflowDefinitionDetail = __webpack_require__(1275);

var _WorkflowDefinitionDetail2 = _interopRequireDefault(_WorkflowDefinitionDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/traveloka/Work/wp-heatmap/pages/details.js?entry';


var DetailsPage = function (_Component) {
  (0, _inherits3.default)(DetailsPage, _Component);

  function DetailsPage(props) {
    (0, _classCallCheck3.default)(this, DetailsPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DetailsPage.__proto__ || (0, _getPrototypeOf2.default)(DetailsPage)).call(this, props));

    var url = _this.props.url;
    (0, _reactAutobind2.default)(_this);
    _this.state = { workflowDefinitionId: url.query.id, dateTime: url.query.dateTime };
    return _this;
  }

  (0, _createClass3.default)(DetailsPage, [{
    key: 'render',
    value: function render() {
      if (!this.state.workflowDefinitionId) {
        return _react2.default.createElement(_DetailPageSidebar2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, _react2.default.createElement(_head2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/favicon.ico', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        })), _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, 'Detail Not Found'))));
      }
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/favicon.ico', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })), _react2.default.createElement(_WorkflowDashboardHeader2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement(_WorkflowDefinitionDetail2.default, { workflowDefinitionId: this.state.workflowDefinitionId, dateTime: this.state.dateTime, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }));
    }
  }]);

  return DetailsPage;
}(_react.Component);

DetailsPage.propTypes = {
  url: _propTypes2.default.object
};

exports.default = (0, _soyaNext.createPage)()(DetailsPage);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/pages/details.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/pages/details.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(70)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/details")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 1273:
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

var _semanticUiReact = __webpack_require__(571);

var _reactAutobind = __webpack_require__(1055);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _DetailPageSideBarModule = __webpack_require__(1274);

var _DetailPageSideBarModule2 = _interopRequireDefault(_DetailPageSideBarModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/traveloka/Work/wp-heatmap/components/DetailPageSideBar/DetailPageSidebar.js';


var DetailPageSidebar = function (_Component) {
  (0, _inherits3.default)(DetailPageSidebar, _Component);

  function DetailPageSidebar(props) {
    (0, _classCallCheck3.default)(this, DetailPageSidebar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DetailPageSidebar.__proto__ || (0, _getPrototypeOf2.default)(DetailPageSidebar)).call(this, props));

    (0, _reactAutobind2.default)(_this);
    _this.state = { visible: false };
    return _this;
  }

  (0, _createClass3.default)(DetailPageSidebar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_style2.default, {
        styles: [{
          __hash: _DetailPageSideBarModule2.default.__hash,
          __css: _DetailPageSideBarModule2.default.__css
        }]
      }, _react2.default.createElement(_semanticUiReact.Sidebar.Pushable, { as: _semanticUiReact.Segment, className: _DetailPageSideBarModule2.default.body, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_semanticUiReact.Sidebar, { as: _semanticUiReact.Menu, animation: 'push', width: 'wide', visible: this.state.visible, icon: 'labeled', vertical: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement(_semanticUiReact.Sidebar.Pusher, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, this.props.children))));
    }
  }]);

  return DetailPageSidebar;
}(_react.Component);

exports.default = DetailPageSidebar;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/components/DetailPageSideBar/DetailPageSidebar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/components/DetailPageSideBar/DetailPageSidebar.js"); } } })();

/***/ }),

/***/ 1274:
/***/ (function(module, exports) {

module.exports = { "body": "DetailPageSideBar-module__body--2tdIp", "sidebar": "DetailPageSideBar-module__sidebar--h7QPC" };
module.exports.__hash = 4114469968;
module.exports.__css = ".DetailPageSideBar-module__body--2tdIp {\n    height: 93vh;\n}\n\n.DetailPageSideBar-module__sidebar--h7QPC {\n    width: 10em;\n}\n/*# sourceURL=/home/traveloka/Work/wp-heatmap/components/DetailPageSideBar/DetailPageSideBar.module.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZlbG9rYS9Xb3JrL3dwLWhlYXRtYXAvY29tcG9uZW50cy9EZXRhaWxQYWdlU2lkZUJhci9EZXRhaWxQYWdlU2lkZUJhci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZiIsImZpbGUiOiJEZXRhaWxQYWdlU2lkZUJhci5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICAgIGhlaWdodDogOTN2aDtcbn1cblxuLnNpZGViYXIge1xuICAgIHdpZHRoOiAxMGVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */";

/***/ }),

/***/ 1275:
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

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(567);

var _redux = __webpack_require__(1053);

var _WorkflowDefinitionDetailReducer = __webpack_require__(1276);

var _WorkflowDefinitionDetailReducer2 = _interopRequireDefault(_WorkflowDefinitionDetailReducer);

var _redux2 = __webpack_require__(558);

var _reactAutobind = __webpack_require__(1055);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _propTypes = __webpack_require__(49);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WorkflowDefinitionDetailAction = __webpack_require__(1277);

var _semanticUiReact = __webpack_require__(571);

var _LoadingBar = __webpack_require__(1075);

var _LoadingBar2 = _interopRequireDefault(_LoadingBar);

var _WorkflowDiagram = __webpack_require__(1278);

var _WorkflowDiagram2 = _interopRequireDefault(_WorkflowDiagram);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/traveloka/Work/wp-heatmap/containers/WorkflowDefinitionDetail/WorkflowDefinitionDetail.js';


var WorkflowDefinitionDetail = function (_React$Component) {
  (0, _inherits3.default)(WorkflowDefinitionDetail, _React$Component);

  function WorkflowDefinitionDetail(props) {
    (0, _classCallCheck3.default)(this, WorkflowDefinitionDetail);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WorkflowDefinitionDetail.__proto__ || (0, _getPrototypeOf2.default)(WorkflowDefinitionDetail)).call(this, props));

    _this.state = { workflowDefinitionId: props.workflowDefinitionId, dateTime: props.dateTime, pushDateTime: null };
    (0, _reactAutobind2.default)(_this);
    return _this;
  }

  (0, _createClass3.default)(WorkflowDefinitionDetail, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.getDetailData('AggregateData/agg.count.wdate7.json', this.state.workflowDefinitionId);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event, data) {
      this.setState({ pushDateTime: data.value });
    }
  }, {
    key: 'handleChange1',
    value: function handleChange1(event) {
      this.setState({ text: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var definition = this.props.workflowDefinition;
      if (definition.loading) {
        return _react2.default.createElement(_LoadingBar2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        });
      }
      var workflowDefinition = definition.data.workflowDefinition;
      var dateTimeList = [];
      for (var key in workflowDefinition) {
        if (key !== 'version' && key !== 'key') {
          dateTimeList.push({ key: key, value: key, text: key });
        }
      }
      var data = workflowDefinition[this.state.dateTime];
      var definitionData = { id: this.state.workflowDefinitionId, key: workflowDefinition.key, version: workflowDefinition.version };
      return _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.List, { horizontal: true, divided: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.List.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Id : ' + this.props.workflowDefinitionId))), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.List.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Key : ' + workflowDefinition.key))), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.List.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Version : ' + workflowDefinition.version)))), _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'State', search: true, selection: true, options: dateTimeList, onChange: this.handleChange, value: this.state.dateTime, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_WorkflowDiagram2.default, { workflowDefinition: definitionData, data: data, dateTime: this.state.dateTime, pushDateTime: this.state.pushDateTime, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })))));
    }
  }]);

  return WorkflowDefinitionDetail;
}(_react2.default.Component);

WorkflowDefinitionDetail.propTypes = {
  workflowDefinition: _propTypes2.default.object,
  workflowDefinitionKey: _propTypes2.default.string,
  getDetailData: _propTypes2.default.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    workflowDefinition: state.workflowDefinition
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getDetailData: function getDetailData(fileData, id) {
      dispatch((0, _WorkflowDefinitionDetailAction.getDetailData)(fileData, id));
    }
  };
};

exports.default = (0, _redux2.compose)((0, _redux.applyReducers)(_WorkflowDefinitionDetailReducer2.default), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(WorkflowDefinitionDetail);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/containers/WorkflowDefinitionDetail/WorkflowDefinitionDetail.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/containers/WorkflowDefinitionDetail/WorkflowDefinitionDetail.js"); } } })();

/***/ }),

/***/ 1276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(706);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(75);

var _extends3 = _interopRequireDefault(_extends2);

var _WorkflowDefinitionDetailConstant = __webpack_require__(1174);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  loading: true
};

exports.default = (0, _defineProperty3.default)({}, _WorkflowDefinitionDetailConstant.STATE_NAME, function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _WorkflowDefinitionDetailConstant.FETCH_DATA_START:
      {
        return (0, _extends3.default)({}, state, {
          loading: true
        });
      }
    case _WorkflowDefinitionDetailConstant.FETCH_DATA_SUCCESS:
      {
        return (0, _extends3.default)({}, state, {
          loading: false,
          data: (0, _extends3.default)({}, state.data, {
            workflowDefinition: action.payload.data
          })
        });
      }
    case _WorkflowDefinitionDetailConstant.FETCH_DATA_FAILED:
      {
        return (0, _extends3.default)({}, state, {
          loading: false,
          data: action.payload.error
        });
      }
    default:
      {
        return state;
      }
  }
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/reducers/WorkflowDefinitionDetailReducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/reducers/WorkflowDefinitionDetailReducer.js"); } } })();

/***/ }),

/***/ 1277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchDataStart = fetchDataStart;
exports.fetchDataSuccess = fetchDataSuccess;
exports.fetchDataFailed = fetchDataFailed;
exports.getDetailData = getDetailData;

var _WorkflowDefinitionDetailConstant = __webpack_require__(1174);

var _DataAggregateLoader = __webpack_require__(1072);

function fetchDataStart() {
  return {
    type: _WorkflowDefinitionDetailConstant.FETCH_DATA_START
  };
}

function fetchDataSuccess(data) {
  return {
    type: _WorkflowDefinitionDetailConstant.FETCH_DATA_SUCCESS,
    payload: {
      data: data
    }
  };
}

function fetchDataFailed(error) {
  return {
    type: _WorkflowDefinitionDetailConstant.FETCH_DATA_FAILED,
    payload: {
      error: error
    }
  };
}

function getDetailData(fileData, id) {
  return function (dispatch) {
    dispatch(fetchDataStart());
    (0, _DataAggregateLoader.getWorkflowDefinitionDetail)(fileData, id).then(function (data) {
      dispatch(fetchDataSuccess(data));
    }).catch(function (err) {
      console.log(err);
    });
  };
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/actions/WorkflowDefinitionDetailAction.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/actions/WorkflowDefinitionDetailAction.js"); } } })();

/***/ }),

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
        var canvas = document.getElementById('data-container');
        (0, _HeatmapRenderer2.default)(this.state.targetDom, canvas, this.state.bpmnElements, this.state.diagram, this.props.data);
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/components/WorkflowDiagram/WorkflowDiagram.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/components/WorkflowDiagram/WorkflowDiagram.js"); } } })();

/***/ }),

/***/ 1279:
/***/ (function(module, exports) {

module.exports = { "bodyContainer": "WorkflowDiagram-module__bodyContainer--TlsnE", "diagramContainer": "WorkflowDiagram-module__diagramContainer--otDys", "heatmapContainer": "WorkflowDiagram-module__heatmapContainer--1s0tu", "canvasContainer": "WorkflowDiagram-module__canvasContainer--W6CF8" };
module.exports.__hash = 2940093574;
module.exports.__css = ".WorkflowDiagram-module__bodyContainer--TlsnE {\n    position: relative;\n    height: 75vh;\n}\n\n.WorkflowDiagram-module__diagramContainer--otDys {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0,0,0,0.5);\n    z-index: 10;\n}\n.WorkflowDiagram-module__heatmapContainer--1s0tu {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 2;\n    cursor: pointer;\n}\n\n.WorkflowDiagram-module__canvasContainer--W6CF8 {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    cursor: pointer;\n}\n\n\n/*# sourceURL=/home/traveloka/Work/wp-heatmap/components/WorkflowDiagram/WorkflowDiagram.module.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZlbG9rYS9Xb3JrL3dwLWhlYXRtYXAvY29tcG9uZW50cy9Xb3JrZmxvd0RpYWdyYW0vV29ya2Zsb3dEaWFncmFtLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtJQUNSLGFBQWE7SUFDYixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6IldvcmtmbG93RGlhZ3JhbS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHlDb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDc1dmg7XG59XG5cbi5kaWFncmFtQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcbiAgICB6LWluZGV4OiAxMDtcbn1cbi5oZWF0bWFwQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FudmFzQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */";

/***/ }),

/***/ 1280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(238);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initheatmap(targetDom) {
  var h337 = __webpack_require__(1281);
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/components/HeatmapRenderer/HeatmapRenderer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/components/HeatmapRenderer/HeatmapRenderer.js"); } } })();

/***/ }),

/***/ 1282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importXML = importXML;
exports.parseXmlToJson = parseXmlToJson;
function importXML(filename) {
  var $ = __webpack_require__(1074);
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
  var converter = __webpack_require__(1283);
  var options = { compact: false };
  return converter.xml2js(xmlFile, options);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/utils/DiagramXMLParser.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/utils/DiagramXMLParser.js"); } } })();

/***/ }),

/***/ 1289:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/utils/DiagramElementsParser.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/utils/DiagramElementsParser.js"); } } })();

/***/ }),

/***/ 838:
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

var _semanticUiReact = __webpack_require__(571);

var _WorkflowDashboardHeaderModule = __webpack_require__(1051);

var _WorkflowDashboardHeaderModule2 = _interopRequireDefault(_WorkflowDashboardHeaderModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/traveloka/Work/wp-heatmap/components/WorkflowDashboardHeader/WorkflowDashboardHeader.js';


var WorkflowDashboardHeader = function (_Component) {
  (0, _inherits3.default)(WorkflowDashboardHeader, _Component);

  function WorkflowDashboardHeader(props) {
    (0, _classCallCheck3.default)(this, WorkflowDashboardHeader);

    return (0, _possibleConstructorReturn3.default)(this, (WorkflowDashboardHeader.__proto__ || (0, _getPrototypeOf2.default)(WorkflowDashboardHeader)).call(this, props));
  }

  (0, _createClass3.default)(WorkflowDashboardHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_style2.default, {
        styles: [{
          __hash: _WorkflowDashboardHeaderModule2.default.__hash,
          __css: _WorkflowDashboardHeaderModule2.default.__css
        }]
      }, _react2.default.createElement(_semanticUiReact.Menu, { inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('h3', { className: _WorkflowDashboardHeaderModule2.default.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'WP Heatmap'))));
    }
  }]);

  return WorkflowDashboardHeader;
}(_react.Component);

exports.default = WorkflowDashboardHeader;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/traveloka/Work/wp-heatmap/components/WorkflowDashboardHeader/WorkflowDashboardHeader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/traveloka/Work/wp-heatmap/components/WorkflowDashboardHeader/WorkflowDashboardHeader.js"); } } })();

/***/ })

},[1271]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9kZXRhaWxzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvV29ya2Zsb3dEYXNoYm9hcmRIZWFkZXIvV29ya2Zsb3dEYXNoYm9hcmRIZWFkZXIubW9kdWxlLmNzcz82YmRmOTQwIiwid2VicGFjazovLy8uL2xvYWRlci9EYXRhQWdncmVnYXRlTG9hZGVyLmpzPzZiZGY5NDAiLCJ3ZWJwYWNrOi8vLy4vbG9hZGVyL0xvYWRlci5qcz82YmRmOTQwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGluZ0Jhci9Mb2FkaW5nQmFyLmpzPzZiZGY5NDAiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnQvV29ya2Zsb3dEZWZpbml0aW9uRGV0YWlsQ29uc3RhbnQuanM/NmJkZjk0MCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxzLmpzPzZiZGY5NDAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWxQYWdlU2lkZUJhci9EZXRhaWxQYWdlU2lkZWJhci5qcz9iMGU3ZGViIiwid2VicGFjazovLy9jb21wb25lbnRzL0RldGFpbFBhZ2VTaWRlQmFyL0RldGFpbFBhZ2VTaWRlQmFyLm1vZHVsZS5jc3M/YjBlN2RlYiIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1dvcmtmbG93RGVmaW5pdGlvbkRldGFpbC9Xb3JrZmxvd0RlZmluaXRpb25EZXRhaWwuanM/YjBlN2RlYiIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9Xb3JrZmxvd0RlZmluaXRpb25EZXRhaWxSZWR1Y2VyLmpzP2IwZTdkZWIiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9Xb3JrZmxvd0RlZmluaXRpb25EZXRhaWxBY3Rpb24uanM/YjBlN2RlYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtmbG93RGlhZ3JhbS9Xb3JrZmxvd0RpYWdyYW0uanM/YjBlN2RlYiIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Xb3JrZmxvd0RpYWdyYW0vV29ya2Zsb3dEaWFncmFtLm1vZHVsZS5jc3M/YjBlN2RlYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYXRtYXBSZW5kZXJlci9IZWF0bWFwUmVuZGVyZXIuanM/YjBlN2RlYiIsIndlYnBhY2s6Ly8vLi91dGlscy9EaWFncmFtWE1MUGFyc2VyLmpzP2IwZTdkZWIiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpP2IwZTdkZWIiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvRGlhZ3JhbUVsZW1lbnRzUGFyc2VyLmpzP2IwZTdkZWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Xb3JrZmxvd0Rhc2hib2FyZEhlYWRlci9Xb3JrZmxvd0Rhc2hib2FyZEhlYWRlci5qcz9iMGU3ZGViIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1widGl0bGVcIjpcIldvcmtmbG93RGFzaGJvYXJkSGVhZGVyLW1vZHVsZV9fdGl0bGUtLVJ6cHY0XCJ9O1xubW9kdWxlLmV4cG9ydHMuX19oYXNoID0gOTgzNTc3Mzc4O1xubW9kdWxlLmV4cG9ydHMuX19jc3MgPSBcIi5Xb3JrZmxvd0Rhc2hib2FyZEhlYWRlci1tb2R1bGVfX3RpdGxlLS1SenB2NCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAydmg7XFxufVxcbi8qIyBzb3VyY2VVUkw9L2hvbWUvdHJhdmVsb2thL1dvcmsvd3AtaGVhdG1hcC9jb21wb25lbnRzL1dvcmtmbG93RGFzaGJvYXJkSGVhZGVyL1dvcmtmbG93RGFzaGJvYXJkSGVhZGVyLm1vZHVsZS5jc3MgKi9cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTlvYjIxbEwzUnlZWFpsYkc5cllTOVhiM0pyTDNkd0xXaGxZWFJ0WVhBdlkyOXRjRzl1Wlc1MGN5OVhiM0pyWm14dmQwUmhjMmhpYjJGeVpFaGxZV1JsY2k5WGIzSnJabXh2ZDBSaGMyaGliMkZ5WkVobFlXUmxjaTV0YjJSMWJHVXVZM056SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wbEJRMGtzWVVGQllUdEpRVU5pTEZsQlFWazdRMEZEWmlJc0ltWnBiR1VpT2lKWGIzSnJabXh2ZDBSaGMyaGliMkZ5WkVobFlXUmxjaTV0YjJSMWJHVXVZM056SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUxuUnBkR3hsSUh0Y2JpQWdJQ0JqYjJ4dmNqb2dkMmhwZEdVN1hHNGdJQ0FnYldGeVoybHVPaUF5ZG1nN1hHNTlJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09ICovXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvV29ya2Zsb3dEYXNoYm9hcmRIZWFkZXIvV29ya2Zsb3dEYXNoYm9hcmRIZWFkZXIubW9kdWxlLmNzcyIsImltcG9ydCB7IGdldCB9IGZyb20gJy4vTG9hZGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdvcmtmbG93RGVmaW5pdGlvbkxpc3QoZmlsZURhdGEpIHtcbiAgcmV0dXJuIGdldChmaWxlRGF0YSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCB3b3JrZmxvd0RlZmluaXRpb24gPSBbXTtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3BvbnNlKSB7XG4gICAgICAgIHdvcmtmbG93RGVmaW5pdGlvbi5wdXNoKHsga2V5OiByZXNwb25zZVtrZXldLmtleSwgdmVyc2lvbjogcmVzcG9uc2Vba2V5XS52ZXJzaW9uLCBpZDoga2V5IH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdvcmtmbG93RGVmaW5pdGlvbjtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXb3JrZmxvd0RlZmluaXRpb25EZXRhaWwoZmlsZURhdGEsIGlkKSB7XG4gIHJldHVybiBnZXQoZmlsZURhdGEpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlW2lkXTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0V29ya2Zsb3dEZWZpbml0aW9uTGlzdCxcbiAgZ2V0V29ya2Zsb3dEZWZpbml0aW9uRGV0YWlsLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xvYWRlci9EYXRhQWdncmVnYXRlTG9hZGVyLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChmaWxlRGF0YSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IGBzdGF0aWMvJHtmaWxlRGF0YX1gLFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgfSkuZG9uZShkYXRhID0+IHtcbiAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgfSkuZmFpbChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xvYWRlci9Mb2FkZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGltbWVyLCBMb2FkZXIsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmNsYXNzIExvYWRpbmdCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlZ21lbnQ+XG4gICAgICAgIDxEaW1tZXIgYWN0aXZlIGludmVydGVkPlxuICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgPC9EaW1tZXI+XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nQmFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Mb2FkaW5nQmFyL0xvYWRpbmdCYXIuanMiLCJjb25zdCBpZCA9ICd3b3JrZmxvd0RlZmluaXRpb24nO1xuLyoqIEZMT1cgKiovXG5leHBvcnQgY29uc3QgU1RBVEVfTkFNRSA9IGlkO1xuZXhwb3J0IGNvbnN0IEZFVENIX0RBVEFfRkFJTEVEID0gYCR7aWR9LkZFVENIX0RBVEFfRkFJTEVEYDtcbmV4cG9ydCBjb25zdCBGRVRDSF9EQVRBX1NUQVJUID0gYCR7aWR9LkZFVENIX0RBVEFfU1RBUlRgO1xuZXhwb3J0IGNvbnN0IEZFVENIX0RBVEFfU1VDQ0VTUyA9IGAke2lkfS5GRVRDSF9EQVRBX1NVQ0NFU1NgO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uc3RhbnQvV29ya2Zsb3dEZWZpbml0aW9uRGV0YWlsQ29uc3RhbnQuanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgY3JlYXRlUGFnZSB9IGZyb20gJ3NveWEtbmV4dCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgV29ya2Zsb3dEYXNoYm9hcmRIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JrZmxvd0Rhc2hib2FyZEhlYWRlci9Xb3JrZmxvd0Rhc2hib2FyZEhlYWRlcic7XG5pbXBvcnQgRGV0YWlsUGFnZVNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9EZXRhaWxQYWdlU2lkZUJhci9EZXRhaWxQYWdlU2lkZWJhcic7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAncmVhY3QtYXV0b2JpbmQnO1xuaW1wb3J0IFdvcmtmbG93RGVmaW5pdGlvbkRldGFpbCBmcm9tICcuLi9jb250YWluZXJzL1dvcmtmbG93RGVmaW5pdGlvbkRldGFpbC9Xb3JrZmxvd0RlZmluaXRpb25EZXRhaWwnO1xuXG5jbGFzcyBEZXRhaWxzUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHVybCA9IHRoaXMucHJvcHMudXJsO1xuICAgIGF1dG9iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHdvcmtmbG93RGVmaW5pdGlvbklkOiB1cmwucXVlcnkuaWQsIGRhdGVUaW1lOiB1cmwucXVlcnkuZGF0ZVRpbWUgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUud29ya2Zsb3dEZWZpbml0aW9uSWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxEZXRhaWxQYWdlU2lkZWJhcj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgIDxsaW5rIHJlbD0nc2hvcnRjdXQgaWNvbicgaHJlZj0nL3N0YXRpYy9mYXZpY29uLmljbycgLz5cbiAgICAgICAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMTEvc2VtYW50aWMubWluLmNzcycgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPnsgJ0RldGFpbCBOb3QgRm91bmQnIH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EZXRhaWxQYWdlU2lkZWJhcj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayByZWw9J3Nob3J0Y3V0IGljb24nIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi5pY28nIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMTEvc2VtYW50aWMubWluLmNzcycgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8V29ya2Zsb3dEYXNoYm9hcmRIZWFkZXIgLz5cbiAgICAgICAgPFdvcmtmbG93RGVmaW5pdGlvbkRldGFpbCB3b3JrZmxvd0RlZmluaXRpb25JZD17dGhpcy5zdGF0ZS53b3JrZmxvd0RlZmluaXRpb25JZH0gZGF0ZVRpbWU9e3RoaXMuc3RhdGUuZGF0ZVRpbWV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkRldGFpbHNQYWdlLnByb3BUeXBlcyA9IHtcbiAgdXJsOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZSgpKERldGFpbHNQYWdlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2RldGFpbHMuanM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2lkZWJhciwgU2VnbWVudCwgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdyZWFjdC1hdXRvYmluZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGV0YWlsUGFnZVNpZGVCYXIubW9kdWxlLmNzcyc7XG5cbmNsYXNzIERldGFpbFBhZ2VTaWRlYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgYXV0b2JpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgdmlzaWJsZTogZmFsc2UgfTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyLlB1c2hhYmxlIGFzPXtTZWdtZW50fSBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgICAgPFNpZGViYXIgYXM9e01lbnV9IGFuaW1hdGlvbj0ncHVzaCcgd2lkdGg9J3dpZGUnIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX0gaWNvbj0nbGFiZWxlZCcgdmVydGljYWw+XG5cbiAgICAgICAgPC9TaWRlYmFyPlxuICAgICAgICA8U2lkZWJhci5QdXNoZXI+XG4gICAgICAgICAgPFNlZ21lbnQgYmFzaWM+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgIDwvU2lkZWJhci5QdXNoZXI+XG4gICAgICA8L1NpZGViYXIuUHVzaGFibGU+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxQYWdlU2lkZWJhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRGV0YWlsUGFnZVNpZGVCYXIvRGV0YWlsUGFnZVNpZGViYXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImJvZHlcIjpcIkRldGFpbFBhZ2VTaWRlQmFyLW1vZHVsZV9fYm9keS0tMnRkSXBcIixcInNpZGViYXJcIjpcIkRldGFpbFBhZ2VTaWRlQmFyLW1vZHVsZV9fc2lkZWJhci0taDdRUENcIn07XG5tb2R1bGUuZXhwb3J0cy5fX2hhc2ggPSA0MTE0NDY5OTY4O1xubW9kdWxlLmV4cG9ydHMuX19jc3MgPSBcIi5EZXRhaWxQYWdlU2lkZUJhci1tb2R1bGVfX2JvZHktLTJ0ZElwIHtcXG4gICAgaGVpZ2h0OiA5M3ZoO1xcbn1cXG5cXG4uRGV0YWlsUGFnZVNpZGVCYXItbW9kdWxlX19zaWRlYmFyLS1oN1FQQyB7XFxuICAgIHdpZHRoOiAxMGVtO1xcbn1cXG4vKiMgc291cmNlVVJMPS9ob21lL3RyYXZlbG9rYS9Xb3JrL3dwLWhlYXRtYXAvY29tcG9uZW50cy9EZXRhaWxQYWdlU2lkZUJhci9EZXRhaWxQYWdlU2lkZUJhci5tb2R1bGUuY3NzICovXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk5b2IyMWxMM1J5WVhabGJHOXJZUzlYYjNKckwzZHdMV2hsWVhSdFlYQXZZMjl0Y0c5dVpXNTBjeTlFWlhSaGFXeFFZV2RsVTJsa1pVSmhjaTlFWlhSaGFXeFFZV2RsVTJsa1pVSmhjaTV0YjJSMWJHVXVZM056SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wbEJRMGtzWVVGQllUdERRVU5vUWpzN1FVRkZSRHRKUVVOSkxGbEJRVms3UTBGRFppSXNJbVpwYkdVaU9pSkVaWFJoYVd4UVlXZGxVMmxrWlVKaGNpNXRiMlIxYkdVdVkzTnpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTG1KdlpIa2dlMXh1SUNBZ0lHaGxhV2RvZERvZ09UTjJhRHRjYm4xY2JseHVMbk5wWkdWaVlYSWdlMXh1SUNBZ0lIZHBaSFJvT2lBeE1HVnRPMXh1ZlNKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPSAqL1wiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0RldGFpbFBhZ2VTaWRlQmFyL0RldGFpbFBhZ2VTaWRlQmFyLm1vZHVsZS5jc3MiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGFwcGx5UmVkdWNlcnMgfSBmcm9tICdzb3lhLW5leHQvcmVkdXgnO1xuaW1wb3J0IFdvcmtmbG93RGVmaW5pdGlvbkRldGFpbFJlZHVjZXIgZnJvbSAnLi4vLi4vcmVkdWNlcnMvV29ya2Zsb3dEZWZpbml0aW9uRGV0YWlsUmVkdWNlcic7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ3JlYWN0LWF1dG9iaW5kJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXREZXRhaWxEYXRhIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9Xb3JrZmxvd0RlZmluaXRpb25EZXRhaWxBY3Rpb24nO1xuaW1wb3J0IHsgU2VnbWVudCwgTGlzdCwgR3JpZCwgRHJvcGRvd24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdCYXIvTG9hZGluZ0Jhcic7XG5pbXBvcnQgV29ya2Zsb3dEaWFncmFtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV29ya2Zsb3dEaWFncmFtL1dvcmtmbG93RGlhZ3JhbSc7XG5cblxuY2xhc3MgV29ya2Zsb3dEZWZpbml0aW9uRGV0YWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgd29ya2Zsb3dEZWZpbml0aW9uSWQ6IHByb3BzLndvcmtmbG93RGVmaW5pdGlvbklkLCBkYXRlVGltZTogcHJvcHMuZGF0ZVRpbWUsIHB1c2hEYXRlVGltZTogbnVsbCB9O1xuICAgIGF1dG9iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZ2V0RGV0YWlsRGF0YSgnQWdncmVnYXRlRGF0YS9hZ2cuY291bnQud2RhdGU3Lmpzb24nLCB0aGlzLnN0YXRlLndvcmtmbG93RGVmaW5pdGlvbklkKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCwgZGF0YSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwdXNoRGF0ZVRpbWU6IGRhdGEudmFsdWUgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UxKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5wcm9wcy53b3JrZmxvd0RlZmluaXRpb247XG4gICAgaWYgKGRlZmluaXRpb24ubG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExvYWRpbmdCYXIgLz5cbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHdvcmtmbG93RGVmaW5pdGlvbiA9IGRlZmluaXRpb24uZGF0YS53b3JrZmxvd0RlZmluaXRpb247XG4gICAgY29uc3QgZGF0ZVRpbWVMaXN0ID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgaW4gd29ya2Zsb3dEZWZpbml0aW9uKSB7XG4gICAgICBpZiAoa2V5ICE9PSAndmVyc2lvbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBkYXRlVGltZUxpc3QucHVzaCh7IGtleToga2V5LCB2YWx1ZToga2V5LCB0ZXh0OiBrZXkgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSB3b3JrZmxvd0RlZmluaXRpb25bdGhpcy5zdGF0ZS5kYXRlVGltZV07XG4gICAgY29uc3QgZGVmaW5pdGlvbkRhdGEgPSB7IGlkOiB0aGlzLnN0YXRlLndvcmtmbG93RGVmaW5pdGlvbklkLCBrZXk6IHdvcmtmbG93RGVmaW5pdGlvbi5rZXksIHZlcnNpb246IHdvcmtmbG93RGVmaW5pdGlvbi52ZXJzaW9uIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxHcmlkPlxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxNn0+XG4gICAgICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICAgICAgPExpc3QgaG9yaXpvbnRhbCBkaXZpZGVkPlxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PjxMaXN0LkhlYWRlcj57YElkIDogJHt0aGlzLnByb3BzLndvcmtmbG93RGVmaW5pdGlvbklkfWB9PC9MaXN0LkhlYWRlcj48L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD48TGlzdC5IZWFkZXI+e2BLZXkgOiAke3dvcmtmbG93RGVmaW5pdGlvbi5rZXl9YH08L0xpc3QuSGVhZGVyPjwvTGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PjxMaXN0LkhlYWRlcj57YFZlcnNpb24gOiAke3dvcmtmbG93RGVmaW5pdGlvbi52ZXJzaW9ufWB9PC9MaXN0LkhlYWRlcj48L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICA8RHJvcGRvd24gcGxhY2Vob2xkZXI9J1N0YXRlJyBzZWFyY2ggc2VsZWN0aW9uIG9wdGlvbnM9e2RhdGVUaW1lTGlzdH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRlVGltZX0gLz5cbiAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxNn0+XG4gICAgICAgICAgICA8U2VnbWVudD48V29ya2Zsb3dEaWFncmFtIHdvcmtmbG93RGVmaW5pdGlvbj17ZGVmaW5pdGlvbkRhdGF9IGRhdGE9e2RhdGF9IGRhdGVUaW1lPXt0aGlzLnN0YXRlLmRhdGVUaW1lfSBwdXNoRGF0ZVRpbWU9e3RoaXMuc3RhdGUucHVzaERhdGVUaW1lfSAvPjwvU2VnbWVudD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgPC9HcmlkPlxuICAgICk7XG4gIH1cbn1cblxuV29ya2Zsb3dEZWZpbml0aW9uRGV0YWlsLnByb3BUeXBlcyA9IHtcbiAgd29ya2Zsb3dEZWZpbml0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICB3b3JrZmxvd0RlZmluaXRpb25LZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdldERldGFpbERhdGE6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICB3b3JrZmxvd0RlZmluaXRpb246IHN0YXRlLndvcmtmbG93RGVmaW5pdGlvbixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXREZXRhaWxEYXRhKGZpbGVEYXRhLCBpZCkge1xuICAgIGRpc3BhdGNoKGdldERldGFpbERhdGEoZmlsZURhdGEsIGlkKSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgYXBwbHlSZWR1Y2VycyhXb3JrZmxvd0RlZmluaXRpb25EZXRhaWxSZWR1Y2VyKSxcbiAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcbikoV29ya2Zsb3dEZWZpbml0aW9uRGV0YWlsKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvV29ya2Zsb3dEZWZpbml0aW9uRGV0YWlsL1dvcmtmbG93RGVmaW5pdGlvbkRldGFpbC5qcyIsImltcG9ydCB7XG4gIEZFVENIX0RBVEFfU1RBUlQsXG4gIEZFVENIX0RBVEFfU1VDQ0VTUyxcbiAgRkVUQ0hfREFUQV9GQUlMRUQsXG4gIFNUQVRFX05BTUUsXG59IGZyb20gJy4uL2NvbnN0YW50L1dvcmtmbG93RGVmaW5pdGlvbkRldGFpbENvbnN0YW50JztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsb2FkaW5nOiB0cnVlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbU1RBVEVfTkFNRV0oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgRkVUQ0hfREFUQV9TVEFSVDoge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjYXNlIEZFVENIX0RBVEFfU1VDQ0VTUzoge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLmRhdGEsXG4gICAgICAgICAgICB3b3JrZmxvd0RlZmluaXRpb246IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNhc2UgRkVUQ0hfREFUQV9GQUlMRUQ6IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5lcnJvcixcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9Xb3JrZmxvd0RlZmluaXRpb25EZXRhaWxSZWR1Y2VyLmpzIiwiaW1wb3J0IHtcbiAgRkVUQ0hfREFUQV9TVUNDRVNTLFxuICBGRVRDSF9EQVRBX0ZBSUxFRCxcbiAgRkVUQ0hfREFUQV9TVEFSVCxcbn0gZnJvbSAnLi4vY29uc3RhbnQvV29ya2Zsb3dEZWZpbml0aW9uRGV0YWlsQ29uc3RhbnQnO1xuXG5pbXBvcnQgeyBnZXRXb3JrZmxvd0RlZmluaXRpb25EZXRhaWwgfSBmcm9tICcuLi9sb2FkZXIvRGF0YUFnZ3JlZ2F0ZUxvYWRlcic7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRGF0YVN0YXJ0KCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX0RBVEFfU1RBUlQsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERhdGFTdWNjZXNzKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9EQVRBX1NVQ0NFU1MsXG4gICAgcGF5bG9hZDoge1xuICAgICAgZGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEYXRhRmFpbGVkKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfREFUQV9GQUlMRUQsXG4gICAgcGF5bG9hZDoge1xuICAgICAgZXJyb3IsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERldGFpbERhdGEoZmlsZURhdGEsIGlkKSB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hEYXRhU3RhcnQoKSk7XG4gICAgZ2V0V29ya2Zsb3dEZWZpbml0aW9uRGV0YWlsKGZpbGVEYXRhLCBpZClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaERhdGFTdWNjZXNzKGRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWN0aW9ucy9Xb3JrZmxvd0RlZmluaXRpb25EZXRhaWxBY3Rpb24uanMiLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAncmVhY3QtYXV0b2JpbmQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1dvcmtmbG93RGlhZ3JhbS5tb2R1bGUuY3NzJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi4vSGVhdG1hcFJlbmRlcmVyL0hlYXRtYXBSZW5kZXJlcic7XG5pbXBvcnQgeyBpbXBvcnRYTUwsIHBhcnNlWG1sVG9Kc29uIH0gZnJvbSAnLi4vLi4vdXRpbHMvRGlhZ3JhbVhNTFBhcnNlcic7XG5pbXBvcnQgeyBwYXJzZURpYWdyYW0gfSBmcm9tICcuLi8uLi91dGlscy9EaWFncmFtRWxlbWVudHNQYXJzZXInO1xuXG5jbGFzcyBXb3JrZmxvd0RpYWdyYW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBhdXRvYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpbnRlcnZhbElkOiAwLFxuICAgICAgd29ya2Zsb3dEZWZpbml0aW9uOiBwcm9wcy53b3JrZmxvd0RlZmluaXRpb24sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLnB1c2hEYXRlVGltZSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYC9kZXRhaWxzP2lkPSR7dGhpcy5zdGF0ZS53b3JrZmxvd0RlZmluaXRpb24uaWR9JmRhdGVUaW1lPSR7dGhpcy5wcm9wcy5wdXNoRGF0ZVRpbWV9YCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmRpYWdyYW0pIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhLWNvbnRhaW5lcicpO1xuICAgICAgcmVuZGVyKHRoaXMuc3RhdGUudGFyZ2V0RG9tLCBjYW52YXMsIHRoaXMuc3RhdGUuYnBtbkVsZW1lbnRzLCB0aGlzLnN0YXRlLmRpYWdyYW0sIHRoaXMucHJvcHMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5CcG1uTW9kZWxlciA9IHJlcXVpcmUoJ2JwbW4tanMnKTtcbiAgICB0aGlzLmdldE1vZGVsZXIoKTtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5jaGVja0RpYWdyYW1EaWRNb3VudCwgMTAwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGludGVydmFsSWQ6IGludGVydmFsSWQgfSk7XG4gIH1cblxuICBjaGVja0RpYWdyYW1EaWRNb3VudCgpIHtcbiAgICBsZXQgZGlhZ3JhbSA9IG51bGw7XG4gICAgbGV0IGJwbW5FbGVtZW50cyA9IG51bGw7XG4gICAgaWYgKHRoaXMuc3RhdGUueG1sRGF0YSkge1xuICAgICAgZGlhZ3JhbSA9IHBhcnNlWG1sVG9Kc29uKHRoaXMuc3RhdGUueG1sRGF0YSk7XG4gICAgfVxuICAgIGlmIChkaWFncmFtKSB7XG4gICAgICBicG1uRWxlbWVudHMgPSBwYXJzZURpYWdyYW0oZGlhZ3JhbSk7XG4gICAgfVxuICAgIGlmIChicG1uRWxlbWVudHMpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbElkKTtcbiAgICAgIGNvbnN0IHRhcmdldERvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWF0bWFwLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgQlBNTkRpYWdyYW0gPSBkaWFncmFtLmVsZW1lbnRzWzBdLmVsZW1lbnRzW2RpYWdyYW0uZWxlbWVudHNbMF0uZWxlbWVudHMubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBCUE1OQ29udGFpbmVyID0gQlBNTkRpYWdyYW0uZWxlbWVudHNbMF0uZWxlbWVudHNbMF0uZWxlbWVudHNbMF0uYXR0cmlidXRlcztcbiAgICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KEJQTU5Db250YWluZXIud2lkdGgsIDEwKTtcbiAgICAgIGxldCBoZWlnaHQgPSBwYXJzZUludChCUE1OQ29udGFpbmVyLmhlaWdodCwgMTApO1xuICAgICAgbGV0IHggPSBwYXJzZUludChCUE1OQ29udGFpbmVyLngsIDEwKTtcbiAgICAgIGxldCB5ID0gcGFyc2VJbnQoQlBNTkNvbnRhaW5lci55LCAxMCk7XG4gICAgICB4ID0gTWF0aC5hYnMoeCkgKyAxMDA7XG4gICAgICB5ID0gTWF0aC5hYnMoeSkgKyAxMDA7XG4gICAgICB3aWR0aCArPSB4O1xuICAgICAgaGVpZ2h0ICs9IHk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYnBtbkVsZW1lbnRzOiBicG1uRWxlbWVudHMsIHRhcmdldERvbTogdGFyZ2V0RG9tIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWdyYW06IHsgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCwgeDogeCwgeTogeSB9IH0pO1xuICAgICAgdGhpcy5jaGFuZ2VEaWFncmFtUHJvcGVydHkoKTtcbiAgICAgIC8vIHJlbmRlcih0YXJnZXREb20sIGJwbW5FbGVtZW50cywgdGhpcy5zdGF0ZS5kaWFncmFtLCB0aGlzLnByb3BzLmRhdGVUaW1lKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VEaWFncmFtUHJvcGVydHkoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmpzLXBvd2VyZWQtYnknKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdmcnKVswXS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkanMtY29udGFpbmVyJylbMF0uc3R5bGUubGVmdCA9IGAke3RoaXMuc3RhdGUuZGlhZ3JhbS54fXB4YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkanMtY29udGFpbmVyJylbMF0uc3R5bGUudG9wID0gYCR7dGhpcy5zdGF0ZS5kaWFncmFtLnl9cHhgO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rqcy1jb250YWluZXInKVswXS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhZ3JhbS1jb250YWluZXInKS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnN0YXRlLmRpYWdyYW0uaGVpZ2h0fXB4YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhZ3JhbS1jb250YWluZXInKS5zdHlsZS53aWR0aCA9IGAke3RoaXMuc3RhdGUuZGlhZ3JhbS53aWR0aH1weGA7XG4gIH1cblxuICBnZXRNb2RlbGVyKCkge1xuICAgIGNvbnN0IHhtbEZpbGUgPSBgJHt0aGlzLnN0YXRlLndvcmtmbG93RGVmaW5pdGlvbi5rZXl9LSR7dGhpcy5zdGF0ZS53b3JrZmxvd0RlZmluaXRpb24udmVyc2lvbn0uYnBtbmA7XG4gICAgY29uc3QgeG1sID0gaW1wb3J0WE1MKHhtbEZpbGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB4bWxEYXRhOiB4bWwgfSk7XG4gICAgY29uc3QgZGlhZ3JhbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFncmFtLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJwbW5Nb2RlbGVyID0gbmV3IHRoaXMuQnBtbk1vZGVsZXIoe1xuICAgICAgY29udGFpbmVyOiBkaWFncmFtQ29udGFpbmVyLFxuICAgIH0pO1xuXG4gICAgYnBtbk1vZGVsZXIuaW1wb3J0WE1MKHhtbCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keUNvbnRhaW5lcn0gc3R5bGU9e3sgb3ZlcmZsb3c6ICdzY3JvbGwnIH19PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxjYW52YXMgaWQ9J2RhdGEtY29udGFpbmVyJyB3aWR0aD17JzUwMDBweCd9IGhlaWdodD17JzUwMDBweCd9IGNsYXNzTmFtZT17c3R5bGVzLmNhbnZhc0NvbnRhaW5lcn0+PC9jYW52YXM+XG4gICAgICAgICAgPGRpdiBpZD0naGVhdG1hcC1jb250YWluZXInIGNsYXNzTmFtZT17c3R5bGVzLmhlYXRtYXBDb250YWluZXJ9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD0nZGlhZ3JhbS1jb250YWluZXInIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtmbG93RGlhZ3JhbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvV29ya2Zsb3dEaWFncmFtL1dvcmtmbG93RGlhZ3JhbS5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1wiYm9keUNvbnRhaW5lclwiOlwiV29ya2Zsb3dEaWFncmFtLW1vZHVsZV9fYm9keUNvbnRhaW5lci0tVGxzbkVcIixcImRpYWdyYW1Db250YWluZXJcIjpcIldvcmtmbG93RGlhZ3JhbS1tb2R1bGVfX2RpYWdyYW1Db250YWluZXItLW90RHlzXCIsXCJoZWF0bWFwQ29udGFpbmVyXCI6XCJXb3JrZmxvd0RpYWdyYW0tbW9kdWxlX19oZWF0bWFwQ29udGFpbmVyLS0xczB0dVwiLFwiY2FudmFzQ29udGFpbmVyXCI6XCJXb3JrZmxvd0RpYWdyYW0tbW9kdWxlX19jYW52YXNDb250YWluZXItLVc2Q0Y4XCJ9O1xubW9kdWxlLmV4cG9ydHMuX19oYXNoID0gMjk0MDA5MzU3NDtcbm1vZHVsZS5leHBvcnRzLl9fY3NzID0gXCIuV29ya2Zsb3dEaWFncmFtLW1vZHVsZV9fYm9keUNvbnRhaW5lci0tVGxzbkUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogNzV2aDtcXG59XFxuXFxuLldvcmtmbG93RGlhZ3JhbS1tb2R1bGVfX2RpYWdyYW1Db250YWluZXItLW90RHlzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgei1pbmRleDogMTA7XFxufVxcbi5Xb3JrZmxvd0RpYWdyYW0tbW9kdWxlX19oZWF0bWFwQ29udGFpbmVyLS0xczB0dSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5Xb3JrZmxvd0RpYWdyYW0tbW9kdWxlX19jYW52YXNDb250YWluZXItLVc2Q0Y4IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyojIHNvdXJjZVVSTD0vaG9tZS90cmF2ZWxva2EvV29yay93cC1oZWF0bWFwL2NvbXBvbmVudHMvV29ya2Zsb3dEaWFncmFtL1dvcmtmbG93RGlhZ3JhbS5tb2R1bGUuY3NzICovXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk5b2IyMWxMM1J5WVhabGJHOXJZUzlYYjNKckwzZHdMV2hsWVhSdFlYQXZZMjl0Y0c5dVpXNTBjeTlYYjNKclpteHZkMFJwWVdkeVlXMHZWMjl5YTJac2IzZEVhV0ZuY21GdExtMXZaSFZzWlM1amMzTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3U1VGRFNTeHRRa0ZCYlVJN1NVRkRia0lzWVVGQllUdERRVU5vUWpzN1FVRkZSRHRKUVVOSkxHMUNRVUZ0UWp0SlFVTnVRaXhQUVVGUE8wbEJRMUFzVVVGQlVUdEpRVU5TTEdGQlFXRTdTVUZEWWl4WlFVRlpPMGxCUTFvc2EwTkJRV3RETzBsQlEyeERMRmxCUVZrN1EwRkRaanRCUVVORU8wbEJRMGtzYlVKQlFXMUNPMGxCUTI1Q0xFOUJRVTg3U1VGRFVDeFJRVUZSTzBsQlExSXNVMEZCVXp0SlFVTlVMRlZCUVZVN1NVRkRWaXhYUVVGWE8wbEJRMWdzWjBKQlFXZENPME5CUTI1Q096dEJRVVZFTzBsQlEwa3NiVUpCUVcxQ08wbEJRMjVDTEU5QlFVODdTVUZEVUN4UlFVRlJPMGxCUTFJc1UwRkJVenRKUVVOVUxGVkJRVlU3U1VGRFZpeFhRVUZYTzBsQlExZ3NaMEpCUVdkQ08wTkJRMjVDSWl3aVptbHNaU0k2SWxkdmNtdG1iRzkzUkdsaFozSmhiUzV0YjJSMWJHVXVZM056SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUxtSnZaSGxEYjI1MFlXbHVaWElnZTF4dUlDQWdJSEJ2YzJsMGFXOXVPaUJ5Wld4aGRHbDJaVHRjYmlBZ0lDQm9aV2xuYUhRNklEYzFkbWc3WEc1OVhHNWNiaTVrYVdGbmNtRnRRMjl1ZEdGcGJtVnlJSHRjYmlBZ0lDQndiM05wZEdsdmJqb2dZV0p6YjJ4MWRHVTdYRzRnSUNBZ2RHOXdPaUF3TzF4dUlDQWdJR3hsWm5RNklEQTdYRzRnSUNBZ2FHVnBaMmgwT2lBeE1EQWxPMXh1SUNBZ0lIZHBaSFJvT2lBeE1EQWxPMXh1SUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklISm5ZbUVvTUN3d0xEQXNNQzQxS1R0Y2JpQWdJQ0I2TFdsdVpHVjRPaUF4TUR0Y2JuMWNiaTVvWldGMGJXRndRMjl1ZEdGcGJtVnlJSHRjYmlBZ0lDQndiM05wZEdsdmJqb2dZV0p6YjJ4MWRHVTdYRzRnSUNBZ2RHOXdPaUF3TzF4dUlDQWdJR3hsWm5RNklEQTdYRzRnSUNBZ2NtbG5hSFE2SURBN1hHNGdJQ0FnWW05MGRHOXRPaUF3TzF4dUlDQWdJSG90YVc1a1pYZzZJREk3WEc0Z0lDQWdZM1Z5YzI5eU9pQndiMmx1ZEdWeU8xeHVmVnh1WEc0dVkyRnVkbUZ6UTI5dWRHRnBibVZ5SUh0Y2JpQWdJQ0J3YjNOcGRHbHZiam9nWVdKemIyeDFkR1U3WEc0Z0lDQWdkRzl3T2lBd08xeHVJQ0FnSUd4bFpuUTZJREE3WEc0Z0lDQWdjbWxuYUhRNklEQTdYRzRnSUNBZ1ltOTBkRzl0T2lBd08xeHVJQ0FnSUhvdGFXNWtaWGc2SURNN1hHNGdJQ0FnWTNWeWMyOXlPaUJ3YjJsdWRHVnlPMXh1ZlZ4dVhHNGlYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjkgKi9cIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Xb3JrZmxvd0RpYWdyYW0vV29ya2Zsb3dEaWFncmFtLm1vZHVsZS5jc3MiLCJmdW5jdGlvbiBpbml0aGVhdG1hcCh0YXJnZXREb20pIHtcbiAgY29uc3QgaDMzNyA9IHJlcXVpcmUoJ2hlYXRtYXAuanMnKTtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIHJhZGl1czogNDAsXG4gICAgbWF4T3BhY2l0eTogMC40LFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgY29udGFpbmVyOiB0YXJnZXREb20sXG4gIH07XG5cbiAgcmV0dXJuIGgzMzcuY3JlYXRlKGNvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIGFkZEhlYXRNYXBEYXRhUG9pbnQoY29vcmQsIHdlaWdodCwgZGF0YSwgYWRkWCwgYWRkWSkge1xuICBkYXRhLnB1c2goeyB4OiBjb29yZC54ICsgYWRkWCwgeTogY29vcmQueSArIGFkZFksIHZhbHVlOiB3ZWlnaHQgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNoYXBlKGVsZW1lbiwgd2VpZ2h0LCBkYXRhLCBhZGRYLCBhZGRZLCBjYW52YXMsIHR5cGUpIHtcbiAgaWYgKGNhbnZhcykge1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5mb250ID0gJzE2cHggQXJpYWwnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgICBpZiAodHlwZSA9PT0gJ2lucHV0Jykge1xuICAgICAgY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICAgIGN0eC5maWxsVGV4dChgJHt3ZWlnaHR9YCwgZWxlbWVuLmJvdW5kcy54ICsgYWRkWCAtIDEwLCBlbGVtZW4uYm91bmRzLnkgLSA1ICsgYWRkWSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC50ZXh0QWxpZ24gPSAncmlnaHQnO1xuICAgICAgY3R4LmZpbGxUZXh0KGAke3dlaWdodH1gLCBlbGVtZW4uYm91bmRzLnggKyBhZGRYICsgZWxlbWVuLmJvdW5kcy53aWR0aCArIDEwLCBlbGVtZW4uYm91bmRzLnkgLSA1ICsgYWRkWSk7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IHggPSBlbGVtZW4uYm91bmRzLnggKyAyMDsgeCA8IGVsZW1lbi5ib3VuZHMueCArIGVsZW1lbi5ib3VuZHMud2lkdGggLSAyMDsgeCArPSAxMCkge1xuICAgIGZvciAobGV0IHkgPSBlbGVtZW4uYm91bmRzLnkgKyAxNjsgeSA8IGVsZW1lbi5ib3VuZHMueSArIGVsZW1lbi5ib3VuZHMuaGVpZ2h0IC0gMTY7IHkgKz0gMTApIHtcbiAgICAgIHkgPSBwYXJzZUludCh5LCAxMCk7XG4gICAgICB4ID0gcGFyc2VJbnQoeCwgMTApO1xuICAgICAgYWRkSGVhdE1hcERhdGFQb2ludCh7IHg6IHgsIHk6IHkgfSwgd2VpZ2h0IC8gMTAsIGRhdGEsIGFkZFgsIGFkZFkpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXIoZWxlbWVudCwgY2FudmFzLCBicG1uRWxlbWVudHMsIGRpYWdyYW0sIGRhdGEpIHtcbiAgY29uc3QgdGFyZ2V0RG9tID0gZWxlbWVudDtcbiAgY29uc3QgSGVhdG1hcFNlcnZpY2UgPSBpbml0aGVhdG1hcCh0YXJnZXREb20pO1xuICBjb25zdCBoZWF0TWFwRGF0YSA9IFtdO1xuICBsZXQgbWF4V2VpZ2h0ID0gMDtcbiAgY29uc3QgYWRkWCA9IGRpYWdyYW0ueDtcbiAgY29uc3QgYWRkWSA9IGRpYWdyYW0ueTtcbiAgY29uc3Qgc3RhdHNFbGVtZW50ZSA9IHt9O1xuICBpZiAoZGF0YSAmJiBjYW52YXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0YXRzRWxlbWVudCA9IGRhdGFbaV07XG4gICAgICBzdGF0c0VsZW1lbnRlW3N0YXRzRWxlbWVudC5zb3VyY2VOb2RlSWRdID0gc3RhdHNFbGVtZW50LmNvdW50O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhicG1uRWxlbWVudHMsIHN0YXRzRWxlbWVudGUpO1xuICAgIE9iamVjdC5rZXlzKGJwbW5FbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiBpdGVyYXRlKGtleSkge1xuICAgICAgY29uc3QgZWxlbSA9IGJwbW5FbGVtZW50c1trZXldO1xuICAgICAgaWYgKGVsZW0uaWQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZXF1ZW5jZWZsb3cnKSA9PT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzdGF0c0VsZW1lbnQgPSBkYXRhW2ldO1xuXG4gICAgICAgICAgaWYgKGVsZW0udGFyZ2V0UmVmID09PSBzdGF0c0VsZW1lbnQuc291cmNlTm9kZUlkKSB7XG4gICAgICAgICAgICBpZiAoIXN0YXRzRWxlbWVudGVbZWxlbS5zb3VyY2VSZWZdKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHdlaWdodCA9IE1hdGgubWluKHN0YXRzRWxlbWVudGVbZWxlbS5zb3VyY2VSZWZdLCBzdGF0c0VsZW1lbnQuY291bnQpO1xuICAgICAgICAgICAgaWYgKHdlaWdodCA+IG1heFdlaWdodCkge1xuICAgICAgICAgICAgICBtYXhXZWlnaHQgPSB3ZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdGFydEVsZW1lbnQgPSBicG1uRWxlbWVudHNbZWxlbS5zb3VyY2VSZWZdO1xuICAgICAgICAgICAgcmVuZGVyU2hhcGUoc3RhcnRFbGVtZW50LCB3ZWlnaHQsIGhlYXRNYXBEYXRhLCBhZGRYLCBhZGRZLCBjYW52YXMsICdvdXRwdXQnKTtcblxuICAgICAgICAgICAgY29uc3QgZW5kRWxlbWVudCA9IGJwbW5FbGVtZW50c1tlbGVtLnRhcmdldFJlZl07XG4gICAgICAgICAgICByZW5kZXJTaGFwZShlbmRFbGVtZW50LCB3ZWlnaHQsIGhlYXRNYXBEYXRhLCBhZGRYLCBhZGRZLCBjYW52YXMsICdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3Qgd2F5cG9pbnRzID0gZWxlbS53YXlwb2ludHM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdheXBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgY29vcmRBID0gd2F5cG9pbnRzW2ldO1xuICAgICAgICAgICAgICBjb25zdCBjb29yZEIgPSB3YXlwb2ludHNbaSArIDFdO1xuICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IE1hdGguc3FydCgoKGNvb3JkQS54IC0gY29vcmRCLngpICogKGNvb3JkQS54IC0gY29vcmRCLngpKSArICgoY29vcmRBLnkgLSBjb29yZEIueSkgKiAoY29vcmRBLnkgLSBjb29yZEIueSkpKSAvIDEwO1xuICAgICAgICAgICAgICBjb25zdCBoX3N0ZXAgPSAtKGNvb3JkQS54IC0gY29vcmRCLngpIC8gc3RlcHM7XG4gICAgICAgICAgICAgIGNvbnN0IHZfc3RlcCA9IC0oY29vcmRBLnkgLSBjb29yZEIueSkgLyBzdGVwcztcbiAgICAgICAgICAgICAgbGV0IGFjdHVhbHggPSBjb29yZEEueCArIGhfc3RlcDtcbiAgICAgICAgICAgICAgbGV0IGFjdHVhbHkgPSBjb29yZEEueSArIHZfc3RlcDtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaW50ID0gMDsgaW50IDwgc3RlcHMgLSAxOyBpbnQrKykge1xuICAgICAgICAgICAgICAgIGFkZEhlYXRNYXBEYXRhUG9pbnQoeyB4OiBhY3R1YWx4LCB5OiBhY3R1YWx5IH0sIHdlaWdodCwgaGVhdE1hcERhdGEsIGFkZFgsIGFkZFkpO1xuICAgICAgICAgICAgICAgIGFjdHVhbHggPSBhY3R1YWx4ICsgaF9zdGVwO1xuICAgICAgICAgICAgICAgIGFjdHVhbHkgPSBhY3R1YWx5ICsgdl9zdGVwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zb2xlLmxvZyhoZWF0TWFwRGF0YSk7XG4gIEhlYXRtYXBTZXJ2aWNlLnNldERhdGEoe1xuICAgIG1heDogMiAqIG1heFdlaWdodCxcbiAgICBkYXRhOiBoZWF0TWFwRGF0YSxcbiAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYXRtYXBSZW5kZXJlci9IZWF0bWFwUmVuZGVyZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gaW1wb3J0WE1MKGZpbGVuYW1lKSB7XG4gIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbiAgbGV0IHhtbCA9IG51bGw7XG4gICQuYWpheCh7XG4gICAgdXJsOiBgc3RhdGljL0RpYWdyYW0vJHtmaWxlbmFtZX1gLFxuICAgIGFzeW5jOiBmYWxzZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgIHhtbCA9IGRhdGE7XG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiB4bWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVhtbFRvSnNvbih4bWxGaWxlKSB7XG4gIGNvbnN0IGNvbnZlcnRlciA9IHJlcXVpcmUoJ3htbC1qcycpO1xuICBjb25zdCBvcHRpb25zID0geyBjb21wYWN0OiBmYWxzZSB9O1xuICByZXR1cm4gY29udmVydGVyLnhtbDJqcyh4bWxGaWxlLCBvcHRpb25zKTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvRGlhZ3JhbVhNTFBhcnNlci5qcyIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIHV0aWwgKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSAxMjg5XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsImV4cG9ydCBmdW5jdGlvbiBwYXJzZURpYWdyYW0oZGlhZ3JhbSkge1xuICBjb25zdCBlbGVtZW50cyA9IGRpYWdyYW0uZWxlbWVudHNbMF0uZWxlbWVudHM7XG4gIC8vIHNlYXJjaGluZyBmb3IgaW5kZXhcbiAgbGV0IHByb2Nlc3NJbmRleCA9IDA7XG4gIGxldCBkaWFncmFtSW5kZXggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnRzW2ldLm5hbWUgPT09ICdicG1uOnByb2Nlc3MnKSB7XG4gICAgICBwcm9jZXNzSW5kZXggPSBpO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudHNbaV0ubmFtZSA9PT0gJ2JwbW5kaTpCUE1ORGlhZ3JhbScpIHtcbiAgICAgIGRpYWdyYW1JbmRleCA9IGk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGVscyA9IGRpYWdyYW0uZWxlbWVudHNbMF0uZWxlbWVudHNbZGlhZ3JhbUluZGV4XS5lbGVtZW50c1swXS5lbGVtZW50cztcbiAgY29uc3QgYnBtbkVsZW1lbnRzID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhdHRyID0gZWxzW2ldLmF0dHJpYnV0ZXM7XG4gICAgY29uc3QgaWQgPSBhdHRyLmJwbW5FbGVtZW50O1xuICAgIGNvbnN0IGVsZW0gPSB7XG4gICAgICBpZDogaWQsXG4gICAgfTtcbiAgICAvLyBpZiAoZWxzW2ldLm5hbWUuaW5jbHVkZXMoJ0JQTU5FZGdlJykpIHtcbiAgICAvLyAgIGVsZW0uc291cmNlUmVmID0gYXR0ci5zb3VyY2VFbGVtZW50O1xuICAgIC8vICAgZWxlbS50YXJnZXRSZWYgPSBhdHRyLnRhcmdldEVsZW1lbnQ7XG4gICAgLy8gfVxuXG4gICAgaWYgKGVsc1tpXS5uYW1lLmluY2x1ZGVzKCdCUE1OU2hhcGUnKSkge1xuICAgICAgY29uc3QgYm91bmRzID0gZWxzW2ldLmVsZW1lbnRzWzBdLmF0dHJpYnV0ZXM7XG4gICAgICBlbGVtLmJvdW5kcyA9IHtcbiAgICAgICAgeDogcGFyc2VJbnQoYm91bmRzLngsIDEwKSxcbiAgICAgICAgeTogcGFyc2VJbnQoYm91bmRzLnksIDEwKSxcbiAgICAgICAgaGVpZ2h0OiBwYXJzZUludChib3VuZHMuaGVpZ2h0LCAxMCksXG4gICAgICAgIHdpZHRoOiBwYXJzZUludChib3VuZHMud2lkdGgsIDEwKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGVsc1tpXS5uYW1lLmluY2x1ZGVzKCdCUE1ORWRnZScpKSB7XG4gICAgICBjb25zdCB3YXlwb2ludHNEYXRhID0gZWxzW2ldLmVsZW1lbnRzO1xuICAgICAgY29uc3Qgd2F5cG9pbnRzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdheXBvaW50c0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHdheXBvaW50c0RhdGFbaV0ubmFtZSA9PT0gJ2RpOndheXBvaW50Jykge1xuICAgICAgICAgIGNvbnN0IHBvaW50ID0gd2F5cG9pbnRzRGF0YVtpXS5hdHRyaWJ1dGVzO1xuICAgICAgICAgIHdheXBvaW50cy5wdXNoKHsgeDogcGFyc2VJbnQocG9pbnQueCwgMTApLCB5OiBwYXJzZUludChwb2ludC55LCAxMCkgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsZW0ud2F5cG9pbnRzID0gd2F5cG9pbnRzO1xuICAgIH1cbiAgICBicG1uRWxlbWVudHNbaWRdID0gZWxlbTtcbiAgfVxuXG4gIGNvbnN0IGVsc1Byb2Nlc3MgPSBkaWFncmFtLmVsZW1lbnRzWzBdLmVsZW1lbnRzW3Byb2Nlc3NJbmRleF0uZWxlbWVudHM7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbHNQcm9jZXNzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsc1Byb2Nlc3NbaV0ubmFtZSA9PT0gJ2JwbW46c2VxdWVuY2VGbG93Jykge1xuICAgICAgYnBtbkVsZW1lbnRzW2Vsc1Byb2Nlc3NbaV0uYXR0cmlidXRlcy5pZF0uc291cmNlUmVmID0gZWxzUHJvY2Vzc1tpXS5hdHRyaWJ1dGVzLnNvdXJjZVJlZjtcbiAgICAgIGJwbW5FbGVtZW50c1tlbHNQcm9jZXNzW2ldLmF0dHJpYnV0ZXMuaWRdLnRhcmdldFJlZiA9IGVsc1Byb2Nlc3NbaV0uYXR0cmlidXRlcy50YXJnZXRSZWY7XG4gICAgfVxuICB9XG4gIHJldHVybiBicG1uRWxlbWVudHM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9EaWFncmFtRWxlbWVudHNQYXJzZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Xb3JrZmxvd0Rhc2hib2FyZEhlYWRlci5tb2R1bGUuY3NzJztcblxuY2xhc3MgV29ya2Zsb3dEYXNoYm9hcmRIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1lbnUgaW52ZXJ0ZWQ+XG4gICAgICAgIDxNZW51LkhlYWRlcj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PnsnV1AgSGVhdG1hcCd9PC9oMz5cbiAgICAgICAgPC9NZW51LkhlYWRlcj5cbiAgICAgIDwvTWVudT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtmbG93RGFzaGJvYXJkSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Xb3JrZmxvd0Rhc2hib2FyZEhlYWRlci9Xb3JrZmxvd0Rhc2hib2FyZEhlYWRlci5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBY0E7QUFDQTtBQWZBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBOzs7OztBQURBO0FBQ0E7Ozs7O0FBREE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQURBO0FBSUE7QUFMQTtBQU1BO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBSUE7QUFKQTtBQUFBOzs7OztBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTs7Ozs7QUFHQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBSEE7Ozs7OztBQS9CQTtBQUNBO0FBb0NBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBSUE7Ozs7O0FBR0E7QUFBQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSUE7QUFKQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBTEE7Ozs7OztBQXpEQTtBQUNBO0FBZ0VBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUtBOztBQUNBO0FBQUE7QUFEQTtBQUNBO0FBR0E7O0FBQUE7QUFFQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RkE7QUFDQTs7O0FBRUE7QUFJQTtBQUhBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFGQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUE5QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU1BO0FBU0E7QUFTQTtBQUNBO0FBL0JBO0FBQ0E7QUFLQTtBQUNBO0FBREE7O0FBSUE7QUFGQTtBQUlBO0FBQ0E7QUFEQTs7QUFHQTs7QUFJQTtBQUhBO0FBRkE7QUFPQTtBQUNBO0FBREE7O0FBR0E7O0FBSUE7QUFIQTtBQUZBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUtBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFQQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUhBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUdBO0FBSEE7Ozs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBSEE7QUFJQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkdBO0FBYUE7QUFiQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFOQTtBQU9BO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaEJBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUdBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBOzs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        