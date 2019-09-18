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
  return "\n    <periodlabel><pl></pl><pl>1</pl><pl>2</pl><pl>3</pl><pl>4</pl><pl>5</pl><pl>6</pl><pl>7</pl><pl>8</pl><pl>9</pl><pl>10</pl><pl>11</pl><pl>12</pl><pl>13</pl><pl>14</pl><pl>15</pl><pl>16</pl><pl>17</pl><pl>18</pl></periodlabel>\n    <elementpage>\n    <grouplabel><groupnum>1</groupnum><groupnum>2</groupnum><groupnum>3</groupnum><groupnum>4</groupnum><groupnum>5</groupnum><groupnum>6</groupnum><groupnum>7</groupnum></grouplabel>\n    <elements>  \n        ".concat(elementlist.map(function (element) {
    if (element.class != "NON") {
      var select = "select_element_by_id";
    }

    ;

    if (element.class == "NON") {
      var select = "add_element";
    }

    ;
    return "          \n                <ele class=\"".concat(element.class, " Group").concat(element.groupId, " Period").concat(element.periodId, "\">\n                    <atomn class=\"").concat(select, "\">").concat(element.atomicNumber, "</atomn>\n                    <sym class=\"").concat(select, "\">").concat(element.symbol, "</sym>\n                    <atomw class=\"").concat(select, "\">").concat(element.atomicWeight, "</atomw>\n                    <elename class=\"").concat(select, "\">").concat(element.name, "</elename>\n                    <input class='select_element_by_id_value' type='hidden' value=\"").concat(element.elementId, "\">\n                </ele>\n                ");
  }).join(""), "\n    </elements>\n    </elementpage>\n    ");
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

function putRequest(location, requestBody, callback) {
  fetch(location, {
    method: "PUT",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (jsonData) {
    return callback(jsonData);
  }).catch(function (err) {
    return console.log(err);
  });
}

var _default = {
  getRequest: getRequest,
  putRequest: putRequest
};
exports.default = _default;
},{}],"js/components/ElementByClass.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ElementByClass;

function ElementByClass(elementlist) {
  return "\n    ".concat(elementlist[0].class, "\n    <elements>  \n        ").concat(elementlist.map(function (element) {
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
  return "\n\n            <h2>".concat(selement.name, "</h2>\n            <selement>\n                <sele class=\"").concat(selement.class, " Group").concat(selement.groupId, " Period").concat(selement.periodId, " sele\">\n                    <atomn>").concat(selement.atomicNumber, "</atomn>\n                    <sym>").concat(selement.symbol, "</sym>\n                    <atomw>").concat(selement.atomicWeight, "</atomw>\n                    <elename>").concat(selement.name, "</elename>\n                </sele>\n            <img src=\"").concat(selement.image, "\">\n            </selement>\n            <selement2>\n            <selementd>\n                <seld>").concat(selement.description, "<seld>\n            </selementd>\n            </br>\n            </br>\n            <selebuttons>\n                <button class=\"delele\">DELETE\n                <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\">\n                <input class='add_element_name' type='hidden' value=\"").concat(selement.name, "\">\n                <input class='add_element_symbol' type='hidden' value=\"").concat(selement.symbol, "\">\n                <input class='add_element_atomic_number' type='hidden' value=\"").concat(selement.atomicNumber, "\">\n                <input class='add_element_atomic_weight' type='hidden' value=\"").concat(selement.atomicWeight, "\">\n                <input class='add_element_class' type='hidden' value=\"").concat(selement.class, "\"></button>\n                <button class=\"geteditele\">EDIT\n                <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\">\n                <input class='add_element_name' type='hidden' value=\"").concat(selement.name, "\">\n                <input class='add_element_symbol' type='hidden' value=\"").concat(selement.symbol, "\">\n                <input class='add_element_atomic_number' type='hidden' value=\"").concat(selement.atomicNumber, "\">\n                <input class='add_element_atomic_weight' type='hidden' value=\"").concat(selement.atomicWeight, "\">\n                <input class='add_element_class' type='hidden' value=\"").concat(selement.class, "\"></button>\n            </selebuttons>\n            </selement2>\n                ");
}

;
},{}],"js/components/AddElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddElement;

function AddElement(selement) {
  return "\n            <h1> Start by Choosing an Element Class From the List Below</h1>\n            <selement class=\"addele\">\n                <classbox>\n                    <class class=\"addele1\"><classcolor class=\"addele1\" style=\"background-color: red;\"></classcolor><classname class=\"addele1\">Alkali Metal\n                    <input class='add_element_class' type='hidden' value=\"AM\">\n                    <input class='select_element_by_id_value' type='hidden' value=\"".concat(selement.elementId, "\">\n                    <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                    <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\">\n                    </classname></class> \n                    <class class=\"addele1\"><classcolor class=\"addele1\" style=\"background-color: rgb(255, 115, 0);\"></classcolor><classname class=\"addele1\">Alkaline Earth Metal</classname>\n                    <input class='add_element_class' type='hidden' value=\"AEM\">\n                    <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                    <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                    <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\"></class>                   \n                    <class class=\"addele1\"><classcolor class=\"addele1\" style=\"background-color: rgb(255, 187, 0);\"></classcolor><classname class=\"addele1\">Transition Metal\n                    <input class='add_element_class' type='hidden' value=\"TM\">\n                    <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                    <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                    <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\"></classname></class>                   \n                    <class class=\"addele1\"><classcolor class=\"addele1\" style=\"background-color: rgb(238, 234, 1);\"></classcolor><classname class=\"addele1\">Post-Transition Metal\n                    <input class='add_element_class' type='hidden' value=\"PTM\">\n                    <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                    <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                    <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\"></classname></class>                   \n                    <class class=\"addele1\"><classcolor class=\"addele1\" style=\"background-color: rgb(138, 224, 9);\"></classcolor><classname class=\"addele1\">Metalloid\n                    <input class='add_element_class' type='hidden' value=\"M\">\n                    <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                    <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                    <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\"></classname></class>                   \n                    <class class=\"addele1\"><classcolor class=\"addele1\" style=\"background-color: rgb(1, 202, 135);\"></classcolor><classname class=\"addele1\">Polyatomic Nonmetal\n                    <input class='add_element_class' type='hidden' value=\"PN\">\n                    <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                    <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                    <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\"></classname></class>                   \n                    <class class=\"addele1\"><classcolor class=\"addele1\" style=\"background-color: rgb(79, 117, 241);\"></classcolor><classname class=\"addele1\">Diatomic Nonmetal\n                    <input class='add_element_class' type='hidden' value=\"DN\">\n                    <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                    <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                    <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\"></classname></class>                   \n                    <class class=\"addele1\"><classcolor class=\"addele1\" style=\"background-color: purple;\"></classcolor><classname class=\"addele1\">Noble Gas\n                    <input class='add_element_class' type='hidden' value=\"NG\">\n                    <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                    <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                    <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\"></classname></class>\n                    <class class=\"addele1\"><classcolor class=\"addele1\" style=\"background-color: rgb(247, 201, 146);\"></classcolor><classname class=\"addele1\">Lanthanide\n                    <input class='add_element_class' type='hidden' value=\"L\">\n                    <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                    <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                    <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\"></classname></class>                   \n                    <class class=\"addele1\"><classcolor class=\"addele1\" style=\"background-color: rgb(176, 176, 245);\"></classcolor><classname class=\"addele1\">Actinide\n                    <input class='add_element_class' type='hidden' value=\"A\">\n                    <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                    <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                    <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\"></classname></class>                   \n                    <class class=\"addele1\"><classcolor class=\"addele1\" style=\"background-color: rgb(78, 129, 78);\"></classcolor><classname class=\"addele1\">Unknown Properties\n                    <input class='add_element_class' type='hidden' value=\"UP\">\n                    <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                    <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                    <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\"></classname></class>                                      \n                </classbox>\n                <sele class=\"").concat(selement.class, " Group").concat(selement.groupId, " Period").concat(selement.periodId, "\">\n                    <p>A newly discovered element!</p>\n                </sele>\n            </selement>\n                ");
}

;
},{}],"js/components/AddElement2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddElement2;

function AddElement2(selement) {
  return "\n            <h1>Now, Choose a Name and a Smybol Tag for Your New Element</h1>\n            <selement class=\"addele\">\n                <classbox>\n                (Name should be 16 characters or less.)</br>\n                <strong>Name:</strong>\n                <input type=\"text\" class=\"add_element_name\" placeholder=\"Choose a Name\">\n                </br>\n                </br>\n                </br>\n                (Symbol value should be 4 characters or less.)</br>\n                <strong>Symbol:</strong>\n                <input type=\"text\" class=\"add_element_symbol\" placeholder=\"Choose a Symbol\">   \n                </br>\n                </br>  \n                <button class=\"addele2\">Continue\n                <input class='select_element_by_id_value' type='hidden' value=\"".concat(selement.elementId, "\">\n                <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\">\n                <input class='add_element_class' type='hidden' value=\"").concat(selement.class, "\">\n                </button>            \n                </classbox>\n                <sele class=\"").concat(selement.class, " Group").concat(selement.groupId, " Period").concat(selement.periodId, "\">\n                    <p>A newly discovered element!</p>\n                </sele>\n            </selement>\n                ");
}

;
},{}],"js/components/AddElement3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddElement3;

function AddElement3(selement) {
  return "\n            <h1>You're almost done, Choose an Atomic Number and an Atomic Mass.</h1>\n            <selement class=\"addele\">\n                <classbox>\n                (Atomic Number should be no greater than 1000.)</br>\n                <strong>Atomic Number:</strong>\n                <input type=\"text\" class=\"add_element_atomic_number\" placeholder=\"Choose a Name\">\n                </br>\n                </br>\n                </br>\n                (Atomic Mass should have 3 values after the decimal.)</br>\n                <strong>Atomic Mass:</strong>\n                <input type=\"text\" class=\"add_element_atomic_weight\" placeholder=\"Choose a Symbol\">   \n                </br>\n                </br>  \n                <button class=\"addele3\">Continue\n                <input class='select_element_by_id_value' type='hidden' value=\"".concat(selement.elementId, "\">\n                <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\">\n                <input class='add_element_name' type='hidden' value=\"").concat(selement.name, "\">\n                <input class='add_element_symbol' type='hidden' value=\"").concat(selement.symbol, "\">\n                <input class='add_element_class' type='hidden' value=\"").concat(selement.class, "\">\n                </button>            \n                </classbox>\n                <sele class=\"").concat(selement.class, " Group").concat(selement.groupId, " Period").concat(selement.periodId, "\">\n                    <sym>").concat(selement.symbol, "</sym>\n                    <elename>").concat(selement.name, "</elename>\n                </sele>\n            </selement>\n                ");
}

;
},{}],"js/components/AddElement4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddElement4;

function AddElement4(selement) {
  return "\n            <h1>Finally, add a Description and an Image for Your Element!</h1>\n            <selement class=\"addele\">\n                <classbox>\n                (Describe your discovered element)</br>\n                <strong>Description:</strong>\n                <input type=\"text\" class=\"add_element_description\" placeholder=\"Description\">\n                </br>\n                </br>\n                </br>\n                (Image must be a web URL)</br>\n                <strong>Image:</strong>\n                <input type=\"text\" class=\"add_element_image\" placeholder=\"Image URL\">   \n                </br>\n                </br>  \n                <button class=\"addele4\">Continue\n                <input class='select_element_by_id_value' type='hidden' value=\"".concat(selement.elementId, "\">\n                <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\">\n                <input class='add_element_name' type='hidden' value=\"").concat(selement.name, "\">\n                <input class='add_element_symbol' type='hidden' value=\"").concat(selement.symbol, "\">\n                <input class='add_element_atomic_number' type='hidden' value=\"").concat(selement.atomicNumber, "\">\n                <input class='add_element_atomic_weight' type='hidden' value=\"").concat(selement.atomicWeight, "\">\n                <input class='add_element_class' type='hidden' value=\"").concat(selement.class, "\">\n                </button>            \n                </classbox>\n                <sele class=\"").concat(selement.class, " Group").concat(selement.groupId, " Period").concat(selement.periodId, "\">\n                    <atomn>").concat(selement.atomicNumber, "</atomn>\n                    <sym>").concat(selement.symbol, "</sym>\n                    <elename>").concat(selement.name, "</elename>\n                    <atomw>").concat(selement.atomicWeight, "</atomw>\n                </sele>\n            </selement>\n                ");
}

;
},{}],"js/components/EditElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EditElement;

function EditElement(selement) {
  return "\n            <selement class=\"editele\">\n                <classbox>\n                <strong>Description</strong>\n                <input type=\"text\" class=\"edit_element_description\" value=\"".concat(selement.description, "\">\n                </br>\n                <strong>Image</strong>\n                <input type=\"text\" class=\"edit_element_image\" value=\"").concat(selement.image, "\">\n                </br>\n\n                <strong>Name</strong>\n                <input type=\"text\" class=\"edit_element_name\" value=\"").concat(selement.name, "\">\n                </br>\n\n                <strong>Symbol</strong>\n                <input type=\"text\" class=\"edit_element_symbol\" value=\"").concat(selement.symbol, "\">\n                </br>\n\n                <strong>Atomic Number</strong>\n                <input type=\"text\" class=\"edit_element_atomic_number\" value=\"").concat(selement.atomicNumber, "\">\n                </br>\n\n                <strong>Atomic Weight</strong>\n                <input type=\"text\" class=\"edit_element_atomic_weight\" value=\"").concat(selement.atomicWeight, "\">\n                </br>\n\n                <strong>Class</strong>\n                <input type=\"text\" class=\"edit_element_class\" value=\"").concat(selement.class, "\">    \n                </br>\n\n                <button class=\"editelement\">Edit\n                <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\">\n                </button>            \n                </classbox>\n                <sele class=\"").concat(selement.class, " Group").concat(selement.groupId, " Period").concat(selement.periodId, "\">\n                    <atomn>").concat(selement.atomicNumber, "</atomn>\n                    <sym>").concat(selement.symbol, "</sym>\n                    <elename>").concat(selement.name, "</elename>\n                    <atomw>").concat(selement.atomicWeight, "</atomw>\n                </sele>\n            </selement>\n                ");
}

;
},{}],"app.js":[function(require,module,exports) {
"use strict";

var _Elements = _interopRequireDefault(require("./js/components/Elements"));

var _apiActions = _interopRequireDefault(require("./js/api/api-actions"));

var _ElementByClass = _interopRequireDefault(require("./js/components/ElementByClass"));

var _Element = _interopRequireDefault(require("./js/components/Element"));

var _AddElement = _interopRequireDefault(require("./js/components/AddElement"));

var _AddElement2 = _interopRequireDefault(require("./js/components/AddElement2"));

var _AddElement3 = _interopRequireDefault(require("./js/components/AddElement3"));

var _AddElement4 = _interopRequireDefault(require("./js/components/AddElement4"));

var _EditElement = _interopRequireDefault(require("./js/components/EditElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

pageBuild();

function pageBuild() {
  elements();
  elementByClass();
  element();
  addElement();
  addElement2();
  addElement3();
  addElement4();
  createElement();
  deleteElement();
  getEditElement();
  editElement();
  about();
}

; //About Nav

function about() {
  document.getElementById('navAbout').addEventListener('click', function () {
    document.getElementById('component1').innerHTML = "<h2>About Page Coming Soon</h2>";
  });
} //Displays All Elements


function elements() {
  var app = document.getElementById('component1');
  var elements = document.getElementById('nav__Elements');
  elements.addEventListener('click', function () {
    _apiActions.default.getRequest("https://localhost:44330/api/elements", function (elementlist) {
      app.innerHTML = (0, _Elements.default)(elementlist);
    });
  });
}

; //Returns All Elements Upon Delete

function delReturnsElements() {
  var app = document.getElementById('component1');

  _apiActions.default.getRequest("https://localhost:44330/api/elements", function (elementlist) {
    app.innerHTML = (0, _Elements.default)(elementlist);
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
} //Get Request for Elements of Class "NON" from Table (Add New)


function addElement() {
  document.querySelector('#component1').addEventListener("click", function () {
    if (event.target.classList.contains("add_element")) {
      var elementId = event.target.parentElement.querySelector(".select_element_by_id_value").value;

      _apiActions.default.getRequest("https://localhost:44330/api/elements/element/" + elementId, function (selement) {
        document.getElementById('component1').innerHTML = (0, _AddElement.default)(selement);
      });
    }
  });
} //Put Request for Add Elements, Returns the Edited Element with the New Class


function addElement2() {
  document.querySelector('#component1').addEventListener("click", function () {
    if (event.target.classList.contains("addele1")) {
      var elementId = event.target.querySelector(".select_element_by_id_value").value;
      var selectedclass = event.target.querySelector(".add_element_class").value;
      var groupid = event.target.parentElement.querySelector(".select_element_by_group_value").value;
      var periodid = event.target.parentElement.querySelector(".select_element_by_period_value").value;
      var data = {
        elementId: elementId,
        class: selectedclass,
        groupId: groupid,
        periodId: periodid
      };

      _apiActions.default.putRequest("https://localhost:44330/api/Elements/" + elementId, data, function (selement) {
        document.getElementById('component1').innerHTML = (0, _AddElement2.default)(selement);
      });
    }
  });
} //Add Element 3 Component


function addElement3() {
  document.querySelector('#component1').addEventListener("click", function () {
    if (event.target.classList.contains("addele2")) {
      var elementId = event.target.querySelector(".select_element_by_id_value").value;
      var groupid = event.target.parentElement.querySelector(".select_element_by_group_value").value;
      var periodid = event.target.parentElement.querySelector(".select_element_by_period_value").value;
      var selectedclass = event.target.querySelector(".add_element_class").value;
      var name = document.querySelector(".add_element_name").value;
      var sym = document.querySelector(".add_element_symbol").value;
      var data = {
        elementId: elementId,
        class: selectedclass,
        groupId: groupid,
        periodId: periodid,
        symbol: sym,
        name: name
      };

      _apiActions.default.putRequest("https://localhost:44330/api/Elements/" + elementId, data, function (selement) {
        document.getElementById('component1').innerHTML = (0, _AddElement3.default)(selement);
      });
    }
  });
} //Add Element 4 Component


function addElement4() {
  document.querySelector('#component1').addEventListener("click", function () {
    if (event.target.classList.contains("addele3")) {
      var elementId = event.target.querySelector(".select_element_by_id_value").value;
      var groupid = event.target.parentElement.querySelector(".select_element_by_group_value").value;
      var periodid = event.target.parentElement.querySelector(".select_element_by_period_value").value;
      var selectedclass = event.target.querySelector(".add_element_class").value;
      var name = document.querySelector(".add_element_name").value;
      var sym = document.querySelector(".add_element_symbol").value;
      var atomnumber = document.querySelector(".add_element_atomic_number").value;
      var atomweight = document.querySelector(".add_element_atomic_weight").value;
      var data = {
        elementId: elementId,
        class: selectedclass,
        groupId: groupid,
        periodId: periodid,
        symbol: sym,
        name: name,
        atomicNumber: atomnumber,
        atomicWeight: atomweight
      };

      _apiActions.default.putRequest("https://localhost:44330/api/Elements/" + elementId, data, function (selement) {
        document.getElementById('component1').innerHTML = (0, _AddElement4.default)(selement);
      });
    }
  });
} //Creates The New Element And Returns The New Element


function createElement() {
  document.querySelector('#component1').addEventListener("click", function () {
    if (event.target.classList.contains("addele4")) {
      var elementId = event.target.querySelector(".select_element_by_id_value").value;
      var groupid = event.target.parentElement.querySelector(".select_element_by_group_value").value;
      var periodid = event.target.parentElement.querySelector(".select_element_by_period_value").value;
      var selectedclass = event.target.querySelector(".add_element_class").value;
      var name = document.querySelector(".add_element_name").value;
      var sym = document.querySelector(".add_element_symbol").value;
      var atomnumber = document.querySelector(".add_element_atomic_number").value;
      var atomweight = document.querySelector(".add_element_atomic_weight").value;
      var image = document.querySelector(".add_element_image").value;
      var description = document.querySelector(".add_element_description").value;
      var data = {
        elementId: elementId,
        class: selectedclass,
        groupId: groupid,
        periodId: periodid,
        symbol: sym,
        name: name,
        atomicNumber: atomnumber,
        atomicWeight: atomweight,
        description: description,
        image: image
      };

      _apiActions.default.putRequest("https://localhost:44330/api/Elements/" + elementId, data, function (selement) {
        document.getElementById('component1').innerHTML = (0, _Element.default)(selement);
      });
    }
  });
} //Deletes An ELement


function deleteElement() {
  document.querySelector('#component1').addEventListener("click", function () {
    if (event.target.classList.contains("delele")) {
      var elementId = event.target.querySelector(".select_element_by_id_value").value;
      var groupid = event.target.parentElement.querySelector(".select_element_by_group_value").value;
      var periodid = event.target.parentElement.querySelector(".select_element_by_period_value").value;
      var data = {
        elementId: elementId,
        class: "NON",
        groupId: groupid,
        periodId: periodid,
        symbol: "+",
        name: "Add New",
        atomicNumber: 1,
        atomicWeight: 0,
        description: "",
        image: ""
      };

      _apiActions.default.putRequest("https://localhost:44330/api/Elements/" + elementId, data, function (selement) {
        delReturnsElements();
      });
    }
  });
} //Gets Edit Component


function getEditElement() {
  document.querySelector('#component1').addEventListener("click", function () {
    if (event.tadrget.classList.contains("geteditele")) {
      var elementId = event.target.querySelector(".select_element_by_id_value").value;

      _apiActions.default.getRequest("https://localhost:44330/api/Elements/element/" + elementId, function (selement) {
        return document.getElementById('component1').innerHTML = (0, _EditElement.default)(selement);
      });
    }
  });
} //Element Edit Component


function editElement() {
  document.querySelector('#component1').addEventListener("click", function () {
    if (event.target.classList.contains("editelement")) {
      var elementId = event.target.querySelector(".select_element_by_id_value").value;
      var groupid = event.target.parentElement.querySelector(".select_element_by_group_value").value;
      var periodid = event.target.parentElement.querySelector(".select_element_by_period_value").value;
      var selectedclass = document.querySelector(".edit_element_class").value;
      var name = document.querySelector(".edit_element_name").value;
      var sym = document.querySelector(".edit_element_symbol").value;
      var atomnumber = document.querySelector(".edit_element_atomic_number").value;
      var atomweight = document.querySelector(".edit_element_atomic_weight").value;
      var image = document.querySelector(".edit_element_image").value;
      var description = document.querySelector(".edit_element_description").value;
      var data = {
        elementId: elementId,
        class: selectedclass,
        groupId: groupid,
        periodId: periodid,
        symbol: sym,
        name: name,
        atomicNumber: atomnumber,
        atomicWeight: atomweight,
        description: description,
        image: image
      };

      _apiActions.default.putRequest("https://localhost:44330/api/Elements/" + elementId, data, function (selement) {
        document.getElementById('component1').innerHTML = (0, _Element.default)(selement);
      });
    }
  });
}
},{"./js/components/Elements":"js/components/Elements.js","./js/api/api-actions":"js/api/api-actions.js","./js/components/ElementByClass":"js/components/ElementByClass.js","./js/components/Element":"js/components/Element.js","./js/components/AddElement":"js/components/AddElement.js","./js/components/AddElement2":"js/components/AddElement2.js","./js/components/AddElement3":"js/components/AddElement3.js","./js/components/AddElement4":"js/components/AddElement4.js","./js/components/EditElement":"js/components/EditElement.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60167" + '/');

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