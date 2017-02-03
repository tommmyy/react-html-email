// ensure base DOM properties are already injected
import 'react-dom'

// FIXME: implement without relying on unstable import locations
let DOMProperty = require('react-dom/lib/DOMProperty');

export { DOMProperty as _DOMProperty }

export const emailAttributes = {
  Properties: {
    'xmlns': 0,
    'align': 0,
    'valign': 0,
    'bgcolor': 0,
    'border': 0,
  },
}

let injected = false

export default function injectReactEmailAttributes() {
  if (injected) {
    return
  }

  if (DOMProperty.properties.hasOwnProperty('xmlns')) {
    // already exists in React 15.3.0
    delete emailAttributes.Properties.xmlns
  }

  // make React accept some HTML attributes useful to emails
  DOMProperty.injection.injectDOMPropertyConfig(emailAttributes)

  injected = true
}
