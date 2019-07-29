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
},{}],"node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/path-browserify/index.js":[function(require,module,exports) {
var process = require("process");
// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

},{"process":"node_modules/process/browser.js"}],"app.js":[function(require,module,exports) {
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

var _path = require("path");

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
    if (event.target.classList.contains("geteditele")) {
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
},{"./js/components/Elements":"js/components/Elements.js","./js/api/api-actions":"js/api/api-actions.js","./js/components/ElementByClass":"js/components/ElementByClass.js","./js/components/Element":"js/components/Element.js","./js/components/AddElement":"js/components/AddElement.js","./js/components/AddElement2":"js/components/AddElement2.js","./js/components/AddElement3":"js/components/AddElement3.js","./js/components/AddElement4":"js/components/AddElement4.js","./js/components/EditElement":"js/components/EditElement.js","path":"node_modules/path-browserify/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58311" + '/');

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