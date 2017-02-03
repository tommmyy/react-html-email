'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailAttributes = exports._DOMProperty = undefined;
exports.default = injectReactEmailAttributes;

require('react-dom');

// FIXME: implement without relying on unstable import locations
var DOMProperty = require('react-dom/lib/DOMProperty'); // ensure base DOM properties are already injected
exports._DOMProperty = DOMProperty;
var emailAttributes = exports.emailAttributes = {
  Properties: {
    'xmlns': 0,
    'align': 0,
    'valign': 0,
    'bgcolor': 0,
    'border': 0
  }
};

var injected = false;

function injectReactEmailAttributes() {
  if (injected) {
    return;
  }

  if (DOMProperty.properties.hasOwnProperty('xmlns')) {
    // already exists in React 15.3.0
    delete emailAttributes.Properties.xmlns;
  }

  // make React accept some HTML attributes useful to emails
  DOMProperty.injection.injectDOMPropertyConfig(emailAttributes);

  injected = true;
}