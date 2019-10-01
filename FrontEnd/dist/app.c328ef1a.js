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
  return "\n    <periodlabel><pl></pl><pl id=\"pl1\">1</pl><pl id=\"pl2\">2</pl><pl id=\"pl3\">3</pl><pl id=\"pl4\">4</pl><pl id=\"pl5\">5</pl><pl id=\"pl6\">6</pl><pl id=\"pl7\">7</pl><pl id=\"pl8\">8</pl><pl id=\"pl9\">9</pl><pl id=\"pl10\">10</pl><pl id=\"pl11\">11</pl><pl id=\"pl12\">12</pl><pl id=\"pl13\">13</pl><pl id=\"pl14\">14</pl><pl id=\"pl15\">15</pl><pl id=\"pl16\">16</pl><pl id=\"pl17\">17</pl><pl id=\"pl18\">18</pl></periodlabel>\n    <elementpage>\n    <grouplabel><groupnum></groupnum><groupnum id=\"g1\">1</groupnum><groupnum id=\"g2\">2</groupnum><groupnum id=\"g3\">3</groupnum><groupnum id=\"g4\">4</groupnum><groupnum id=\"g5\">5</groupnum><groupnum id=\"g6\">6</groupnum><groupnum id=\"g7\">7</groupnum></grouplabel>\n    <elements>  \n        ".concat(elementlist.map(function (element) {
    if (element.class != "NON") {
      var select = "select_element_by_id";
    }

    ;

    if (element.class == "NON") {
      var select = "add_element";
    }

    ;
    return "          \n                <ele class=\"ele ".concat(element.class, " Group").concat(element.groupId, " Period").concat(element.periodId, "\">\n                    <atomn class=\"").concat(select, "\">").concat(element.atomicNumber, "</atomn>\n                    <sym class=\"").concat(select, "\">").concat(element.symbol, "</sym>\n                    <atomw class=\"").concat(select, "\">").concat(element.atomicWeight, "</atomw>\n                    <elename class=\"").concat(select, "\">").concat(element.name, "\n                    <input class='select_element_by_id_value' type='hidden' value=\"").concat(element.elementId, "\">\n                    </elename>\n                    <input class='select_element_by_id_value' type='hidden' value=\"").concat(element.elementId, "\">\n                    <input class='groupnum' type='hidden' value=\"").concat(element.groupId, "\">\n                    <input class='periodnum' type='hidden' value=\"").concat(element.periodId, "\">\n                </ele>\n                ");
  }).join(""), "\n<label class=\"switch\">\n  <input class=\"darktheme\" id=\"darktheme\"  type=\"checkbox\">\n  <span class=\"slider\"></span>\n</label>\n        \n<label class=\"switch\">\n  <input class=\"HideNON\" id=\"HideNON\"  type=\"checkbox\">\n  <span class=\"slider\"></span>\n</label>\n\n<label class=\"switch\">\n  <input class=\"InfoView\" id=\"InfoView\"  type=\"checkbox\">\n  <span class=\"slider\"></span>\n</label>\n    </elements>\n    <div id=\"InfoBox\" style=\"display: none;\">\n    </div>\n    </elementpage>\n    ");
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
  return "\n        <div class=\"fixedseleheader\">\n        <sele2 class=\"".concat(selement.class, " Group").concat(selement.groupId, " Period").concat(selement.periodId, " sele\">\n            <sele2class>").concat(selement.class, "</sele2class>\n        </sele2>\n            <h2 style=\"border-bottom: 1px black solid; background-color: rgb(41, 41, 41);\">").concat(selement.name, "</h2>\n            </div>\n            <selement>\n            <subsele>\n            <selementd>\n                <seld>").concat(selement.description, "<seld>\n                </br>\n                </br>\n                </br>\n                Periodic Properties of ").concat(selement.name, "\n                <hr>\n                Atomic Number: ").concat(selement.atomicNumber, "\n                </br>\n                Atomic Weight: ").concat(selement.atomicWeight, "\n                </br>\n                Class: ").concat(selement.class, "\n                </br>\n                Group: ").concat(selement.groupId, "\n                </br>\n                Period: ").concat(selement.periodId, "\n                </br>\n                </br>\n                Chemical Properties of ").concat(selement.name, "\n                <hr>\n                Phase at STP: ").concat(selement.phase, "\n                </br>\n                Melting Point: -200\xB0F\n                </br>\n                Boiling Point: -150\xB0F\n                </br>\n                Density: 0.08988 g/L\n                </br>\n                </br>\n                Atomic Properties of ").concat(selement.name, "\n                <hr>\n                Electronegativity: \n                </br>\n                Covalent radius:\n                </br>\n                Van der Waals radius:\n\n                <selebuttons>\n                <button class=\"delele\">DELETE\n     \n                <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\">\n                <input class='add_element_name' type='hidden' value=\"").concat(selement.name, "\">\n                <input class='add_element_symbol' type='hidden' value=\"").concat(selement.symbol, "\">\n                <input class='add_element_atomic_number' type='hidden' value=\"").concat(selement.atomicNumber, "\">\n                <input class='add_element_atomic_weight' type='hidden' value=\"").concat(selement.atomicWeight, "\">\n                <input class='add_element_class' type='hidden' value=\"").concat(selement.class, "\"></button>\n                <button class=\"geteditele\">EDIT\n                <input class='select_element_by_id_value' type='hidden' value=\"").concat(selement.elementId, "\">\n                <input class='select_element_by_period_value' type='hidden' value=\"").concat(selement.periodId, "\">\n                <input class='select_element_by_group_value' type='hidden' value=\"").concat(selement.groupId, "\">\n                <input class='add_element_name' type='hidden' value=\"").concat(selement.name, "\">\n                <input class='add_element_symbol' type='hidden' value=\"").concat(selement.symbol, "\">\n                <input class='add_element_atomic_number' type='hidden' value=\"").concat(selement.atomicNumber, "\">\n                <input class='add_element_atomic_weight' type='hidden' value=\"").concat(selement.atomicWeight, "\">\n                <input class='add_element_class' type='hidden' value=\"").concat(selement.class, "\"></button>\n            </selebuttons>\n            </selementd>\n            <asp>\n            <img src=\"").concat(selement.image, "\">\n            <img src=\"").concat(selement.image2, "\">\n           \n            </asp>\n            </subsele>\n            </selement>\n            <selement2>\n            </br>\n            </br>\n           \n            </selement2>\n                ");
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
},{}],"js/components/InfoBox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InfoBox;

function InfoBox(selement) {
  return "\n            </br>\n            <img style=\"width: 25vw; height:30vh;\" src=\"".concat(selement.image, "\">\n            </br>\n            </br>\n            <h3>").concat(selement.name, "</h3>\n            </br>\n            </br>\n            <img style=\"width: 25vw; height:30vh;\" src=\"").concat(selement.image2, "\">\n    ");
}
},{}],"node_modules/constants-browserify/constants.json":[function(require,module,exports) {
module.exports = {
  "O_RDONLY": 0,
  "O_WRONLY": 1,
  "O_RDWR": 2,
  "S_IFMT": 61440,
  "S_IFREG": 32768,
  "S_IFDIR": 16384,
  "S_IFCHR": 8192,
  "S_IFBLK": 24576,
  "S_IFIFO": 4096,
  "S_IFLNK": 40960,
  "S_IFSOCK": 49152,
  "O_CREAT": 512,
  "O_EXCL": 2048,
  "O_NOCTTY": 131072,
  "O_TRUNC": 1024,
  "O_APPEND": 8,
  "O_DIRECTORY": 1048576,
  "O_NOFOLLOW": 256,
  "O_SYNC": 128,
  "O_SYMLINK": 2097152,
  "O_NONBLOCK": 4,
  "S_IRWXU": 448,
  "S_IRUSR": 256,
  "S_IWUSR": 128,
  "S_IXUSR": 64,
  "S_IRWXG": 56,
  "S_IRGRP": 32,
  "S_IWGRP": 16,
  "S_IXGRP": 8,
  "S_IRWXO": 7,
  "S_IROTH": 4,
  "S_IWOTH": 2,
  "S_IXOTH": 1,
  "E2BIG": 7,
  "EACCES": 13,
  "EADDRINUSE": 48,
  "EADDRNOTAVAIL": 49,
  "EAFNOSUPPORT": 47,
  "EAGAIN": 35,
  "EALREADY": 37,
  "EBADF": 9,
  "EBADMSG": 94,
  "EBUSY": 16,
  "ECANCELED": 89,
  "ECHILD": 10,
  "ECONNABORTED": 53,
  "ECONNREFUSED": 61,
  "ECONNRESET": 54,
  "EDEADLK": 11,
  "EDESTADDRREQ": 39,
  "EDOM": 33,
  "EDQUOT": 69,
  "EEXIST": 17,
  "EFAULT": 14,
  "EFBIG": 27,
  "EHOSTUNREACH": 65,
  "EIDRM": 90,
  "EILSEQ": 92,
  "EINPROGRESS": 36,
  "EINTR": 4,
  "EINVAL": 22,
  "EIO": 5,
  "EISCONN": 56,
  "EISDIR": 21,
  "ELOOP": 62,
  "EMFILE": 24,
  "EMLINK": 31,
  "EMSGSIZE": 40,
  "EMULTIHOP": 95,
  "ENAMETOOLONG": 63,
  "ENETDOWN": 50,
  "ENETRESET": 52,
  "ENETUNREACH": 51,
  "ENFILE": 23,
  "ENOBUFS": 55,
  "ENODATA": 96,
  "ENODEV": 19,
  "ENOENT": 2,
  "ENOEXEC": 8,
  "ENOLCK": 77,
  "ENOLINK": 97,
  "ENOMEM": 12,
  "ENOMSG": 91,
  "ENOPROTOOPT": 42,
  "ENOSPC": 28,
  "ENOSR": 98,
  "ENOSTR": 99,
  "ENOSYS": 78,
  "ENOTCONN": 57,
  "ENOTDIR": 20,
  "ENOTEMPTY": 66,
  "ENOTSOCK": 38,
  "ENOTSUP": 45,
  "ENOTTY": 25,
  "ENXIO": 6,
  "EOPNOTSUPP": 102,
  "EOVERFLOW": 84,
  "EPERM": 1,
  "EPIPE": 32,
  "EPROTO": 100,
  "EPROTONOSUPPORT": 43,
  "EPROTOTYPE": 41,
  "ERANGE": 34,
  "EROFS": 30,
  "ESPIPE": 29,
  "ESRCH": 3,
  "ESTALE": 70,
  "ETIME": 101,
  "ETIMEDOUT": 60,
  "ETXTBSY": 26,
  "EWOULDBLOCK": 35,
  "EXDEV": 18,
  "SIGHUP": 1,
  "SIGINT": 2,
  "SIGQUIT": 3,
  "SIGILL": 4,
  "SIGTRAP": 5,
  "SIGABRT": 6,
  "SIGIOT": 6,
  "SIGBUS": 10,
  "SIGFPE": 8,
  "SIGKILL": 9,
  "SIGUSR1": 30,
  "SIGSEGV": 11,
  "SIGUSR2": 31,
  "SIGPIPE": 13,
  "SIGALRM": 14,
  "SIGTERM": 15,
  "SIGCHLD": 20,
  "SIGCONT": 19,
  "SIGSTOP": 17,
  "SIGTSTP": 18,
  "SIGTTIN": 21,
  "SIGTTOU": 22,
  "SIGURG": 16,
  "SIGXCPU": 24,
  "SIGXFSZ": 25,
  "SIGVTALRM": 26,
  "SIGPROF": 27,
  "SIGWINCH": 28,
  "SIGIO": 23,
  "SIGSYS": 12,
  "SSL_OP_ALL": 2147486719,
  "SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION": 262144,
  "SSL_OP_CIPHER_SERVER_PREFERENCE": 4194304,
  "SSL_OP_CISCO_ANYCONNECT": 32768,
  "SSL_OP_COOKIE_EXCHANGE": 8192,
  "SSL_OP_CRYPTOPRO_TLSEXT_BUG": 2147483648,
  "SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS": 2048,
  "SSL_OP_EPHEMERAL_RSA": 0,
  "SSL_OP_LEGACY_SERVER_CONNECT": 4,
  "SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER": 32,
  "SSL_OP_MICROSOFT_SESS_ID_BUG": 1,
  "SSL_OP_MSIE_SSLV2_RSA_PADDING": 0,
  "SSL_OP_NETSCAPE_CA_DN_BUG": 536870912,
  "SSL_OP_NETSCAPE_CHALLENGE_BUG": 2,
  "SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG": 1073741824,
  "SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG": 8,
  "SSL_OP_NO_COMPRESSION": 131072,
  "SSL_OP_NO_QUERY_MTU": 4096,
  "SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION": 65536,
  "SSL_OP_NO_SSLv2": 16777216,
  "SSL_OP_NO_SSLv3": 33554432,
  "SSL_OP_NO_TICKET": 16384,
  "SSL_OP_NO_TLSv1": 67108864,
  "SSL_OP_NO_TLSv1_1": 268435456,
  "SSL_OP_NO_TLSv1_2": 134217728,
  "SSL_OP_PKCS1_CHECK_1": 0,
  "SSL_OP_PKCS1_CHECK_2": 0,
  "SSL_OP_SINGLE_DH_USE": 1048576,
  "SSL_OP_SINGLE_ECDH_USE": 524288,
  "SSL_OP_SSLEAY_080_CLIENT_DH_BUG": 128,
  "SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG": 0,
  "SSL_OP_TLS_BLOCK_PADDING_BUG": 512,
  "SSL_OP_TLS_D5_BUG": 256,
  "SSL_OP_TLS_ROLLBACK_BUG": 8388608,
  "ENGINE_METHOD_DSA": 2,
  "ENGINE_METHOD_DH": 4,
  "ENGINE_METHOD_RAND": 8,
  "ENGINE_METHOD_ECDH": 16,
  "ENGINE_METHOD_ECDSA": 32,
  "ENGINE_METHOD_CIPHERS": 64,
  "ENGINE_METHOD_DIGESTS": 128,
  "ENGINE_METHOD_STORE": 256,
  "ENGINE_METHOD_PKEY_METHS": 512,
  "ENGINE_METHOD_PKEY_ASN1_METHS": 1024,
  "ENGINE_METHOD_ALL": 65535,
  "ENGINE_METHOD_NONE": 0,
  "DH_CHECK_P_NOT_SAFE_PRIME": 2,
  "DH_CHECK_P_NOT_PRIME": 1,
  "DH_UNABLE_TO_CHECK_GENERATOR": 4,
  "DH_NOT_SUITABLE_GENERATOR": 8,
  "NPN_ENABLED": 1,
  "RSA_PKCS1_PADDING": 1,
  "RSA_SSLV23_PADDING": 2,
  "RSA_NO_PADDING": 3,
  "RSA_PKCS1_OAEP_PADDING": 4,
  "RSA_X931_PADDING": 5,
  "RSA_PKCS1_PSS_PADDING": 6,
  "POINT_CONVERSION_COMPRESSED": 2,
  "POINT_CONVERSION_UNCOMPRESSED": 4,
  "POINT_CONVERSION_HYBRID": 6,
  "F_OK": 0,
  "R_OK": 4,
  "W_OK": 2,
  "X_OK": 1,
  "UV_UDP_REUSEADDR": 4
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

var _InfoBox3 = _interopRequireDefault(require("./js/components/InfoBox"));

var _constants = require("constants");

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
  infoBox();
}

; //About Nav

function about() {
  document.getElementById('navAbout').addEventListener('click', function () {
    document.getElementById('component1').innerHTML = "<h2>About Page Coming Soon</h2>";
  });
} //Display InfoBox


function infoBox() {
  document.getElementById('component1').addEventListener('mouseover', function () {
    if (event.target.classList.contains("ele")) {
      var elementId = event.target.querySelector(".select_element_by_id_value").value;
      console.log(elementId);

      _apiActions.default.getRequest("https://localhost:44330/api/elements/element/" + elementId, function (selement) {
        document.getElementById('InfoBox').innerHTML = (0, _InfoBox3.default)(selement);
      });
    }
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
} //Highlights the group and period numbers on hover


document.querySelector('#component1').addEventListener("mouseover", function () {
  if (event.target.parentElement.classList.contains("ele")) {
    var group = event.target.parentElement.querySelector(".groupnum").value;
    var period = event.target.parentElement.querySelector(".periodnum").value;
    var grouphighlight = document.getElementById("pl".concat(+group));
    var periodhighlight = document.getElementById("g".concat(+period));
    grouphighlight.style.color = "orange";
    periodhighlight.style.color = "orange";
  }
});
document.querySelector('#component1').addEventListener("mouseout", function () {
  if (event.target.parentElement.classList.contains("ele")) {
    var group = event.target.parentElement.querySelector(".groupnum").value;
    var period = event.target.parentElement.querySelector(".periodnum").value;
    var grouphighlight = document.getElementById("pl".concat(+group));
    var periodhighlight = document.getElementById("g".concat(+period));
    grouphighlight.style.color = "white";
    periodhighlight.style.color = "white";
  }
});
document.querySelector('#component1').addEventListener("mouseover", function () {
  if (event.target.classList.contains("ele")) {
    var group = event.target.querySelector(".groupnum").value;
    var period = event.target.querySelector(".periodnum").value;
    var grouphighlight = document.getElementById("pl".concat(+group));
    var periodhighlight = document.getElementById("g".concat(+period));
    grouphighlight.style.color = "orange";
    periodhighlight.style.color = "orange";
  }
});
document.querySelector('#component1').addEventListener("mouseout", function () {
  if (event.target.classList.contains("ele")) {
    var group = event.target.querySelector(".groupnum").value;
    var period = event.target.querySelector(".periodnum").value;
    var grouphighlight = document.getElementById("pl".concat(+group));
    var periodhighlight = document.getElementById("g".concat(+period));
    grouphighlight.style.color = "white";
    periodhighlight.style.color = "white";
  }
});
var app = document.getElementById('component1');
var elements = document.getElementById('enter__Elements');
elements.addEventListener('click', function () {
  _apiActions.default.getRequest("https://localhost:44330/api/elements", function (elementlist) {
    app.innerHTML = (0, _Elements.default)(elementlist);
    document.querySelector('.navbar').style.display = "flex";
  });
}); //DarkTheme

app.addEventListener('click', function () {
  if (event.target.classList.contains("darktheme")) {
    var darktheme = document.getElementById('darktheme');

    if (darktheme.checked == true) {
      document.querySelector('elements').style.backgroundColor = 'black';
      var elecolor = document.querySelectorAll('ele');
      elecolor.forEach(function (element) {
        element.style.backgroundColor = 'black';
      });
      var AM = document.querySelectorAll('.Alkaline-Metal');
      AM.forEach(function (element) {
        element.style.outline = '2px solid red';
        element.style.outlineOffset = '-2px';
      });
      var AEM = document.querySelectorAll('.AEM');
      AEM.forEach(function (element) {
        element.style.outline = '2px solid rgb(255, 115, 0)';
        element.style.outlineOffset = '-2px';
      });
      var TM = document.querySelectorAll('.TM');
      TM.forEach(function (element) {
        element.style.outline = '2px solid rgb(255, 187, 0)';
        element.style.outlineOffset = '-2px';
      });
      var PTM = document.querySelectorAll('.PTM');
      PTM.forEach(function (element) {
        element.style.outline = '2px solid rgb(238, 234, 1)';
        element.style.outlineOffset = '-2px';
      });
      var M = document.querySelectorAll('.M');
      M.forEach(function (element) {
        element.style.outline = '2px solid rgb(138, 224, 9)';
        element.style.outlineOffset = '-2px';
      });
      var PolyatomicNonmetal = document.querySelectorAll('.Polyatomic-Nonmetal');
      PolyatomicNonmetal.forEach(function (element) {
        element.style.outline = '2px solid rgb(1, 202, 135)';
        element.style.outlineOffset = '-2px';
      });
      var DN = document.querySelectorAll('.DN');
      DN.forEach(function (element) {
        element.style.outline = '2px solid rgb(79, 117, 241)';
        element.style.outlineOffset = '-2px';
      });
      var NG = document.querySelectorAll('.Noble-Gas');
      NG.forEach(function (element) {
        element.style.outline = '2px solid purple';
        element.style.outlineOffset = '-2px';
      });
      var L = document.querySelectorAll('.L');
      L.forEach(function (element) {
        element.style.outline = '2px solid rgb(247, 201, 146)';
        element.style.outlineOffset = '-2px';
      });
      var A = document.querySelectorAll('.A');
      A.forEach(function (element) {
        element.style.outline = '2px solid rgb(176, 176, 245)';
        element.style.outlineOffset = '-2px';
      });
      var UP = document.querySelectorAll('.UP');
      UP.forEach(function (element) {
        element.style.outline = '2px solid rgb(78, 129, 78)';
        element.style.outlineOffset = '-2px';
      });
    }

    if (darktheme.checked == false) {
      document.querySelector('elements').style.backgroundColor = 'white';

      var _elecolor = document.querySelectorAll('ele');

      _elecolor.forEach(function (element) {
        element.style.backgroundColor = null;
      });
    }
  }
}); //Hide NON Elements

app.addEventListener('click', function () {
  if (event.target.classList.contains("HideNON")) {
    var HideNON = document.getElementById('HideNON');
    console.log(HideNON.value);

    if (HideNON.checked == true) {
      var NON = document.querySelectorAll('.NON');
      NON.forEach(function (element) {
        element.style.visibility = 'hidden';
      });
    }

    if (HideNON.checked == false) {
      var _NON = document.querySelectorAll('.NON');

      _NON.forEach(function (element) {
        element.style.visibility = 'visible';
      });
    }

    console.log(HideNON.value);
  }
}); //Info View

app.addEventListener('click', function () {
  if (event.target.classList.contains("InfoView")) {
    var InfoView = document.getElementById('InfoView');

    if (InfoView.checked == true) {
      var ElementsInfo = document.querySelector('elements');
      ElementsInfo.style.width = '69vw';
      ElementsInfo.style.height = '50.5vh';
      ElementsInfo.style.gridTemplateRows = '7vh 7vh 7vh 7vh 7vh 7vh 7vh';
      ElementsInfo.style.gridTemplateColumns = '3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw';
      ElementsInfo.style.gridRowGap = '.7vh';
      ElementsInfo.style.gridColumnGap = '.406vw';
      var EleInfo = document.querySelectorAll('ele');
      EleInfo.forEach(function (element) {
        element.style.width = '3.5vw';
        element.style.height = '7vh';
      });
      var atomn = document.querySelectorAll('atomn');
      atomn.forEach(function (element) {
        element.style.visibility = 'hidden';
      });
      var elename = document.querySelectorAll('elename');
      elename.forEach(function (element) {
        element.style.visibility = 'hidden';
      });
      var atomw = document.querySelectorAll('atomw');
      atomw.forEach(function (element) {
        element.style.visibility = 'hidden';
      });

      var _InfoBox = document.getElementById('InfoBox');

      _InfoBox.style.display = null;
    }

    if (InfoView.checked == false) {
      var _ElementsInfo = document.querySelector('elements');

      _ElementsInfo.style.width = '100vw';
      _ElementsInfo.style.height = null;
      _ElementsInfo.style.gridTemplateRows = '10vh 10vh 10vh 10vh 10vh 10vh 10vh';
      _ElementsInfo.style.gridTemplateColumns = '4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw';
      _ElementsInfo.style.gridRowGap = '1vh';
      _ElementsInfo.style.gridColumnGap = '.580vw';

      var _EleInfo = document.querySelectorAll('ele');

      _EleInfo.forEach(function (element) {
        element.style.width = '5vw';
        element.style.height = '10vh';
      });

      var _atomn = document.querySelectorAll('atomn');

      _atomn.forEach(function (element) {
        element.style.visibility = null;
      });

      var _elename = document.querySelectorAll('elename');

      _elename.forEach(function (element) {
        element.style.visibility = null;
      });

      var _atomw = document.querySelectorAll('atomw');

      _atomw.forEach(function (element) {
        element.style.visibility = null;
      });

      var _InfoBox2 = document.getElementById('InfoBox');

      _InfoBox2.style.display = 'none';
    }
  }
});
},{"./js/components/Elements":"js/components/Elements.js","./js/api/api-actions":"js/api/api-actions.js","./js/components/ElementByClass":"js/components/ElementByClass.js","./js/components/Element":"js/components/Element.js","./js/components/AddElement":"js/components/AddElement.js","./js/components/AddElement2":"js/components/AddElement2.js","./js/components/AddElement3":"js/components/AddElement3.js","./js/components/AddElement4":"js/components/AddElement4.js","./js/components/EditElement":"js/components/EditElement.js","./js/components/InfoBox":"js/components/InfoBox.js","constants":"node_modules/constants-browserify/constants.json"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50879" + '/');

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