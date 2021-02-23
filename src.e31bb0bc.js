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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\titan-one-v8-latin-regular.eot":[["titan-one-v8-latin-regular.5ecfba8a.eot","fonts/titan-one-v8-latin-regular.eot"],"fonts/titan-one-v8-latin-regular.eot"],"./..\\fonts\\titan-one-v8-latin-regular.woff2":[["titan-one-v8-latin-regular.c7773417.woff2","fonts/titan-one-v8-latin-regular.woff2"],"fonts/titan-one-v8-latin-regular.woff2"],"./..\\fonts\\titan-one-v8-latin-regular.woff":[["titan-one-v8-latin-regular.7f3e05d4.woff","fonts/titan-one-v8-latin-regular.woff"],"fonts/titan-one-v8-latin-regular.woff"],"./..\\fonts\\titan-one-v8-latin-regular.ttf":[["titan-one-v8-latin-regular.289eb43c.ttf","fonts/titan-one-v8-latin-regular.ttf"],"fonts/titan-one-v8-latin-regular.ttf"],"./..\\fonts\\titan-one-v8-latin-regular.svg":[["titan-one-v8-latin-regular.6dce54aa.svg","fonts/titan-one-v8-latin-regular.svg"],"fonts/titan-one-v8-latin-regular.svg"],"./..\\fonts\\dm-sans-v6-latin-regular.eot":[["dm-sans-v6-latin-regular.b8eca754.eot","fonts/dm-sans-v6-latin-regular.eot"],"fonts/dm-sans-v6-latin-regular.eot"],"./..\\fonts\\dm-sans-v6-latin-regular.woff2":[["dm-sans-v6-latin-regular.a45f7eae.woff2","fonts/dm-sans-v6-latin-regular.woff2"],"fonts/dm-sans-v6-latin-regular.woff2"],"./..\\fonts\\dm-sans-v6-latin-regular.woff":[["dm-sans-v6-latin-regular.951d2140.woff","fonts/dm-sans-v6-latin-regular.woff"],"fonts/dm-sans-v6-latin-regular.woff"],"./..\\fonts\\dm-sans-v6-latin-regular.ttf":[["dm-sans-v6-latin-regular.8114e003.ttf","fonts/dm-sans-v6-latin-regular.ttf"],"fonts/dm-sans-v6-latin-regular.ttf"],"./..\\fonts\\dm-sans-v6-latin-regular.svg":[["dm-sans-v6-latin-regular.8e9c9c54.svg","fonts/dm-sans-v6-latin-regular.svg"],"fonts/dm-sans-v6-latin-regular.svg"],"./..\\fonts\\dm-sans-v6-latin-500.eot":[["dm-sans-v6-latin-500.6760241d.eot","fonts/dm-sans-v6-latin-500.eot"],"fonts/dm-sans-v6-latin-500.eot"],"./..\\fonts\\dm-sans-v6-latin-500.woff2":[["dm-sans-v6-latin-500.01a97bb0.woff2","fonts/dm-sans-v6-latin-500.woff2"],"fonts/dm-sans-v6-latin-500.woff2"],"./..\\fonts\\dm-sans-v6-latin-500.woff":[["dm-sans-v6-latin-500.044febe0.woff","fonts/dm-sans-v6-latin-500.woff"],"fonts/dm-sans-v6-latin-500.woff"],"./..\\fonts\\dm-sans-v6-latin-500.ttf":[["dm-sans-v6-latin-500.9e53fdac.ttf","fonts/dm-sans-v6-latin-500.ttf"],"fonts/dm-sans-v6-latin-500.ttf"],"./..\\fonts\\dm-sans-v6-latin-500.svg":[["dm-sans-v6-latin-500.acfa4f65.svg","fonts/dm-sans-v6-latin-500.svg"],"fonts/dm-sans-v6-latin-500.svg"],"./..\\fonts\\dm-sans-v6-latin-700.eot":[["dm-sans-v6-latin-700.f08a1f3b.eot","fonts/dm-sans-v6-latin-700.eot"],"fonts/dm-sans-v6-latin-700.eot"],"./..\\fonts\\dm-sans-v6-latin-700.woff2":[["dm-sans-v6-latin-700.d929dea6.woff2","fonts/dm-sans-v6-latin-700.woff2"],"fonts/dm-sans-v6-latin-700.woff2"],"./..\\fonts\\dm-sans-v6-latin-700.woff":[["dm-sans-v6-latin-700.42c96a41.woff","fonts/dm-sans-v6-latin-700.woff"],"fonts/dm-sans-v6-latin-700.woff"],"./..\\fonts\\dm-sans-v6-latin-700.ttf":[["dm-sans-v6-latin-700.405f0335.ttf","fonts/dm-sans-v6-latin-700.ttf"],"fonts/dm-sans-v6-latin-700.ttf"],"./..\\fonts\\dm-sans-v6-latin-700.svg":[["dm-sans-v6-latin-700.b4c46e03.svg","fonts/dm-sans-v6-latin-700.svg"],"fonts/dm-sans-v6-latin-700.svg"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\products\\product-ice-cream.png":[["product-ice-cream.20ddf5f2.png","images/mobile/products/product-ice-cream.png"],"images/mobile/products/product-ice-cream.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\products\\product-ice-cream@2x.png":[["product-ice-cream@2x.497d1e56.png","images/mobile/products/product-ice-cream@2x.png"],"images/mobile/products/product-ice-cream@2x.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\tablet\\products\\product-ice-cream.png":[["product-ice-cream.c6064d98.png","images/tablet/products/product-ice-cream.png"],"images/tablet/products/product-ice-cream.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\tablet\\products\\product-ice-cream@2x.png":[["product-ice-cream@2x.32fb6b52.png","images/tablet/products/product-ice-cream@2x.png"],"images/tablet/products/product-ice-cream@2x.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\desktop\\products\\product-ice-cream.png":[["product-ice-cream.873b398f.png","images/desktop/products/product-ice-cream.png"],"images/desktop/products/product-ice-cream.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\desktop\\products\\product-ice-cream@2x.png":[["product-ice-cream@2x.0ac80b70.png","images/desktop/products/product-ice-cream@2x.png"],"images/desktop/products/product-ice-cream@2x.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\products\\product-shake.png":[["product-shake.ddd281e8.png","images/mobile/products/product-shake.png"],"images/mobile/products/product-shake.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\products\\product-shake@2x.png":[["product-shake@2x.ec866b8d.png","images/mobile/products/product-shake@2x.png"],"images/mobile/products/product-shake@2x.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\tablet\\products\\product-shake.png":[["product-shake.a09514bb.png","images/tablet/products/product-shake.png"],"images/tablet/products/product-shake.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\tablet\\products\\product-shake@2x.png":[["product-shake@2x.23c5b2c7.png","images/tablet/products/product-shake@2x.png"],"images/tablet/products/product-shake@2x.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\desktop\\products\\product-shake.png":[["product-shake.cabefd5a.png","images/desktop/products/product-shake.png"],"images/desktop/products/product-shake.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\desktop\\products\\product-shake@2x.png":[["product-shake@2x.85501bba.png","images/desktop/products/product-shake@2x.png"],"images/desktop/products/product-shake@2x.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\products\\product-shake-chokolate.png":[["product-shake-chokolate.aaea6ec8.png","images/mobile/products/product-shake-chokolate.png"],"images/mobile/products/product-shake-chokolate.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\products\\product-shake-chokolate@2x.png":[["product-shake-chokolate@2x.4f64238f.png","images/mobile/products/product-shake-chokolate@2x.png"],"images/mobile/products/product-shake-chokolate@2x.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\tablet\\products\\product-shake-chokolate.png":[["product-shake-chokolate.a4f854a8.png","images/tablet/products/product-shake-chokolate.png"],"images/tablet/products/product-shake-chokolate.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\tablet\\products\\product-shake-chokolate@2x.png":[["product-shake-chokolate@2x.15726d32.png","images/tablet/products/product-shake-chokolate@2x.png"],"images/tablet/products/product-shake-chokolate@2x.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\desktop\\products\\product-shake-chokolate.png":[["product-shake-chokolate.a3f5f3db.png","images/desktop/products/product-shake-chokolate.png"],"images/desktop/products/product-shake-chokolate.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\desktop\\products\\product-shake-chokolate@2x.png":[["product-shake-chokolate@2x.115f631e.png","images/desktop/products/product-shake-chokolate@2x.png"],"images/desktop/products/product-shake-chokolate@2x.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\products\\icon-triple.svg":[["icon-triple.c602e154.svg","images/mobile/products/icon-triple.svg"],"images/mobile/products/icon-triple.svg"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\about\\section-about-bg.png":[["section-about-bg.850ab03e.png","images/mobile/about/section-about-bg.png"],"images/mobile/about/section-about-bg.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\about\\section-about-bg@2x.png":[["section-about-bg@2x.98be6a58.png","images/mobile/about/section-about-bg@2x.png"],"images/mobile/about/section-about-bg@2x.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\desktop\\about\\section-about-bg.png":[["section-about-bg.aa6ec803.png","images/desktop/about/section-about-bg.png"],"images/desktop/about/section-about-bg.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\desktop\\about\\section-about-bg@2x.png":[["section-about-bg@2x.ee2b78f6.png","images/desktop/about/section-about-bg@2x.png"],"images/desktop/about/section-about-bg@2x.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\about\\vector-button.svg":[["vector-button.7838e72d.svg","images/mobile/about/vector-button.svg"],"images/mobile/about/vector-button.svg"],"./..\\images\\quotes.png":[["quotes.13d917a9.png","images/quotes.png"],"images/quotes.png"],"./..\\images\\home@2x.png":[["home@2x.c9b2b051.png","images/home@2x.png"],"images/home@2x.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\advantages\\advantages1.png":[["advantages1.a5c62a7f.png","images/mobile/advantages/advantages1.png"],"images/mobile/advantages/advantages1.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\advantages\\advantages1@2x.png":[["advantages1@2x.baac8f49.png","images/mobile/advantages/advantages1@2x.png"],"images/mobile/advantages/advantages1@2x.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\advantages\\advantages2.png":[["advantages2.77dbd730.png","images/mobile/advantages/advantages2.png"],"images/mobile/advantages/advantages2.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\advantages\\advantages2@2x.png":[["advantages2@2x.2690ee7e.png","images/mobile/advantages/advantages2@2x.png"],"images/mobile/advantages/advantages2@2x.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\advantages\\advantages3.png":[["advantages3.79016fd5.png","images/mobile/advantages/advantages3.png"],"images/mobile/advantages/advantages3.png"],"C:\\Users\\Александр\\Documents\\GitHub\\astro-project-ice_cream\\src\\images\\mobile\\advantages\\advantages3@2x.png":[["advantages3@2x.78bf9369.png","images/mobile/advantages/advantages3@2x.png"],"images/mobile/advantages/advantages3@2x.png"],"./..\\images\\desktop\\contacts\\milk-spray@1x.png":[["milk-spray@1x.0fd65da6.png","images/desktop/contacts/milk-spray@1x.png"],"images/desktop/contacts/milk-spray@1x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");

$(document).ready(function () {
  $('.reviews-list').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1
  });
});
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57916" + '/');

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
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map