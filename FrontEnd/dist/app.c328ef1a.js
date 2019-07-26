// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/components/Elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Elements;

function Elements(elementlist) {
  return "\n    <elements>  \n        ".concat(elementlist.map(function (element) {
    if (element.class != "NON") {
      var select = "select_element_by_id";
    }

    ;

    if (element.class == "NON") {
      var select = "add_element";
    }

    ;
    return "          \n                <ele class=\"".concat(element.class, " Group").concat(element.groupId, " Period").concat(element.periodId, "\">\n                    <atomn class=\"").concat(select, "\">").concat(element.atomicNumber, "</atomn>\n                    <sym class=\"").concat(select, "\">").concat(element.symbol, "</sym>\n                    <atomw class=\"").concat(select, "\">").concat(element.atomicWeight, "</atomw>\n                    <elename class=\"").concat(select, "\">").concat(element.name, "</elename>\n                    <input class='select_element_by_id_value' type='hidden' value=\"").concat(element.elementId, "\">\n                </ele>\n                ");
  }).join(""), "\n    </elements>\n    ");
}
},{}],"js/api/api-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getRequest(location, callback) {
  fetch(location).then(function (response) {
    return response.json();
  }).then(function (jsonData) {
    return callback(jsonData);
  }).catch(function (err) {
    return console.log(err);
  });
}

var _default = {
  getRequest: getRequest
};
exports.default = _default;
},{}],"js/components/ElementByClass.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ElementByClass;

function ElementByClass(elementlist) {
  return "\n    <elements>  \n        ".concat(elementlist.map(function (element) {
    return "\n                <ele class=\"".concat(element.class, " Group").concat(element.groupId, " Period").concat(element.periodId, "\">\n                    <atomn>").concat(element.atomicNumber, "</atomn>\n                    <sym>").concat(element.symbol, "</sym>\n                    <atomw>").concat(element.atomicWeight, "</atomw>\n                    <elename>").concat(element.name, "</elename>\n                </ele>\n                ");
  }).join(""), "\n    </elements>\n    ");
}
},{}],"js/components/Element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Element;

function Element(selement) {
  return "\n            <selement>\n                <sele class=\"".concat(selement.class, " Group").concat(selement.groupId, " Period").concat(selement.periodId, " sele\">\n                    <atomn>").concat(selement.atomicNumber, "</atomn>\n                    <sym>").concat(selement.symbol, "</sym>\n                    <atomw>").concat(selement.atomicWeight, "</atomw>\n                    <elename>").concat(selement.name, "</elename>\n                </sele>\n            <img src=\"").concat(selement.image, "\">\n            </selement>\n            <selementd>\n                <seld>").concat(selement.description, "<seld>\n            </selementd>\n                ");
}

;
},{}],"js/components/AddElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddElement;

function AddElement(selement) {
  return "\n            <h1> Start by Choosing an Element Class From the List Below</h1>\n            <selement class=\"addele\">\n                <classbox>\n                    <class><classcolor style=\"background-color: red;\"></classcolor><classname>Alkali Metal</classname></class> \n                    <class><classcolor style=\"background-color: rgb(255, 115, 0);\"></classcolor><classname>Alkaline Earth Metal</classname></class>                   \n                    <class><classcolor style=\"background-color: rgb(255, 187, 0);\"></classcolor><classname>Transition Metal</classname></class>                   \n                    <class><classcolor style=\"background-color: rgb(238, 234, 1);\"></classcolor><classname>Post-Transition Metal</classname></class>                   \n                    <class><classcolor style=\"background-color: rgb(138, 224, 9);\"></classcolor><classname>Metalloid</classname></class>                   \n                    <class><classcolor style=\"background-color: rgb(1, 202, 135);\"></classcolor><classname>Polyatomic Nonmetal</classname></class>                   \n                    <class><classcolor style=\"background-color: rgb(79, 117, 241);\"></classcolor><classname>Diatomic Nonmetal</classname></class>                   \n                    <class><classcolor style=\"background-color: purple;\"></classcolor><classname>Noble Gas</classname></class>\n                    <class><classcolor style=\"background-color: rgb(247, 201, 146);\"></classcolor><classname>Lanthanide</classname></class>                   \n                    <class><classcolor style=\"background-color: rgb(176, 176, 245);\"></classcolor><classname>Actinide</classname></class>                   \n                    <class><classcolor style=\"background-color: rgb(78, 129, 78);\"></classcolor><classname>Unknown Properties</classname></class>                                      \n                </classbox>\n                <sele class=\"".concat(selement.class, " Group").concat(selement.groupId, " Period").concat(selement.periodId, "\">\n                    <p>A newly discovered element!</p>\n                </sele>\n            </selement>\n                ");
}

;
},{}],"app.js":[function(require,module,exports) {
"use strict";

var _Elements = _interopRequireDefault(require("./js/components/Elements"));

var _apiActions = _interopRequireDefault(require("./js/api/api-actions"));

var _ElementByClass = _interopRequireDefault(require("./js/components/ElementByClass"));

var _Element = _interopRequireDefault(require("./js/components/Element"));

var _AddElement = _interopRequireDefault(require("./js/components/AddElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

pageBuild();

function pageBuild() {
  elements();
  elementByClass();
  element();
  addElement();
}

; //Displays All Elements

function elements() {
  var app = document.getElementById('component1');
  var elements = document.getElementById('nav__Elements');
  elements.addEventListener('click', function () {
    _apiActions.default.getRequest("https://localhost:44330/api/elements", function (elementlist) {
      app.innerHTML = (0, _Elements.default)(elementlist);
    });
  });
}

; //Displays Elements By Class

function elementByClass() {
  document.querySelector('.navbar').addEventListener("click", function () {
    if (event.target.classList.contains("select_element_by_class")) {
      var _element = event.target.querySelector(".select_element_by_class_value").value;
      console.log(_element);

      _apiActions.default.getRequest("https://localhost:44330/api/elements/" + _element, function (elementlist) {
        document.getElementById('component1').innerHTML = (0, _ElementByClass.default)(elementlist);
      });
    }
  });
}

; //Displays a Single Clicked Element From the Table

function element() {
  document.querySelector('#component1').addEventListener("click", function () {
    if (event.target.classList.contains("select_element_by_id")) {
      var elementId = event.target.parentElement.querySelector(".select_element_by_id_value").value;
      console.log(elementId);

      _apiActions.default.getRequest("https://localhost:44330/api/elements/element/" + elementId, function (selement) {
        document.getElementById('component1').innerHTML = (0, _Element.default)(selement);
      });
    }
  });
} //Put Request for Elements of Class "NON" from Table (Add New)


function addElement() {
  document.querySelector('#component1').addEventListener("click", function () {
    if (event.target.classList.contains("add_element")) {
      var elementId = event.target.parentElement.querySelector(".select_element_by_id_value").value;

      _apiActions.default.getRequest("https://localhost:44330/api/elements/element/" + elementId, function (selement) {
        document.getElementById('component1').innerHTML = (0, _AddElement.default)(selement);
      });
    }
  });
}
},{"./js/components/Elements":"js/components/Elements.js","./js/api/api-actions":"js/api/api-actions.js","./js/components/ElementByClass":"js/components/ElementByClass.js","./js/components/Element":"js/components/Element.js","./js/components/AddElement":"js/components/AddElement.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57100" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map