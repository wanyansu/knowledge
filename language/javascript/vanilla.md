# Vanilla JavaScript

## Find elements

* Always check for null when finding element:

```JavaScript
const element = document.querySelector('section>header a');

if (element != null) {
    // element found
}
```

* When using methods to return multiple elements, it could return an empty list:

```JavaScript
const elements = document.querySelectorAll("#nav-menu li");

if (elements.length > 0) {
    // elements found
    const firstElement = elements[0];
    // It is not an Array, but has the property 'length'
}
```

* HTMLCollections don't have all the modern Array interface such as 'filter, map, reduce or forEach', except for `querySelectorAll`, as it returns a Static Collection. To tackle this, use `Array.from(collection)`.

## Modifying the DOM

* 'class' is `className` and 'for' is `htmlFor` for DOMs

* All kebab syntax (-) are changed to camel case syntax in js.

## Event bindings

* Difference between DOM and HTML elements, e.g. html, body and head tags are implicit for DOM. Therefore, the browser can add stuff to the DOM (elements in the devtool). They are different from the source code.

* The browser will recognise the first whatever visible elements as the starting point for body tag, if html, body tags are not specified.

* `let nav = document.querySelector("nav"); nav.querySelector("span");` are also applicable.

* When a browser sees a script tag, it stops parsing the rest of the html, and runs the js file. Hence a lot of people a saying to always put script tags at the bottom of the body tag. Nowadays, `defer` and `async` syntax are used to help with that. Preferreably use `defer`. `defer` will ensure browser continue to parse the html until finishes, then run the script. `async` will ensure js get run once finish downloading (good for analytics).

**best practice for 'app.js':**

```JavaScript
window.addEventListener("DOMContentLoaded", () => {
    let nav = document.querySelector("nav");
    console.log(nav);
    nav.innerHTML = `
        <h2>Hello DOM</h2>
        <p>This is an HTML injected by scripts</p>
    `
})
```

* There are two types of event bindings, 'onevent' and 'addEventListener'. The big difference is, event listener can have mulitiple subscribers and each of them will not interfere. Whereas for 'onevent' the last subscriber will replace the ones before it. e.g, `element.onload = (event) => {};` (onclick, onchange).

* `const options = { once: true, passive: true }; element.addEventListener("load", eventHandler, options);`. `removeEventListener` is mostly used in a SPA. 

* __How to mimic Jquery: (make js less verbose)__

```JavaScript
const $ = () => document.querySelector.call(this, arguments);
const $$ = () => document.querySelectorAll.call(this, arguments);
HTMLElement.prototype.on = (a, b, c) => this.addEventListener{a, b, c};
HTMLElement.prototype.off = (a, b) => this.removeEventListener{a, b};
HTMLElement.prototype.$ = (s) => this.querySelector(s);
HTMLElement.prototype.$$ = (a, b, c) => this.querySelectorAll(s);
```

## Coffee shop project

### Modularity

* To change the scripts to be run as ECMAScripts, go with `<script src="./app.js" defer type="module"></script>`. Everything is global by default in js. Only until we add ECMA module, files can import and export from other files.

### Routing

To create a SPA, there are two ways to achieve via Vanilla js:

1. Remove page and add new page when interacted.

2. Hide page and show new page when interacted.

e.g. `<section id="section1" hidden></section>`
__note__

In modern devs, the History API will help fake the URL after the main domain, so that it doesn't really load another page from the server. Example:

```JavaScript
// pushing a new URL; the second argument is unused;
history.pushState(optional_state, null, "/new-url");

// to listen for changes in URL within the same page navigation
window.addEventListener("popstate", event => {
    let url = location.href;
})
```

Popstate won't be fired if the user clicks on an external link or changes the URL manually.

### Reactivity

__Proxy__

Proxy is a special object that wraps a js object and provide special functions:

```JavaScript
const original = {
  name: "John Doe",
  age: 30
};

const s = new Proxy(original, handler);

const handler = {
  get: function(target, prop) {
    if (prop === 'age') {
      return target[prop] + " years old";
    } else {
      return target[prop];
    }
  }
};

console.log(s.age);
```

_Another good example use case for proxy is type checker._

