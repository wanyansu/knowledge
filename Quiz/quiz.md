# Script loading order 

* async script once downloaded, will execute immediately and interrupt HTML parsing.

* defer script once runs after HTML parsing is completed.

## Key points

1. if `<script async defer></script>`, async takes precedence.

# Compositing in a browser

* Process: DOM Tree -> CSSOM Tree -> Render Tree (only visible elements) -> Layout -> Paint -> Composit (merge all together into one bitmap)

* The compositing process happens on the compositor thread

# DNS Resolving

* Browser (request IP for "www.website.com"?) -> DNS Resolver (Request Root name IP for ".com") -> Root Name Server (return ".com" IP address) -> DNS Resolver (Request TLD IP for "website.com") -> Top Level Domain Name Server (return "website.com" IP address) -> DNS Resolver (request Authoritative name IP for "www.website.com") -> Authoritative Name Server (return IP for the full DNS record) -> DNS Resolver (fullt IP) -> Browser

# Call stack

* A new Promise returns a promise, but its code (the function will be called **the executor**) will run syncronously (not get passed to task Queue). For example: `new Promise(() => console.log(4))` will not be passed to the web API.
* A default setTimeout function will send the function that get passed as a parameter to the Web API.
* `Promise.resolve()` will pass its callbacks to the microtask queue.

## Web API

1. DOM manipulation
2. Timers (setTime0ut) (*setTimeout* is not available by default JavaScript) 
3. Networking (fetch)

## Macrotask Queue (normal queue)

1. setTimeout callbacks
2. setInterval callbacks
3. UI rendering tasks
4. User input events
5. Network events

## Microtask queue

1. Promise callbacks
2. queueMicrotask callbacks
3. async/await
4. MutationObserver callbacks

## Event loop

* Will ensure tasks in microtask queue get run first.

# Resource hints

* Default https secure network request: DNS - TCP - TLS - Request - Response

1. `<link src="{resource}" rel="dns-prefetch">`: perform DNS resolution before requesting for resources: TCP - TLS - Req - Res.
2. `<link src="{resource}" rel="preconnect">`: perform DNS resolution, TCP and TLS before requesting for resources: Req - Res.
3. `<link src="{resource}" rel="prefetch">`: e.g. prefetch an image file when browser is idle. Whenever it is needed, it is available in cache.
4. `<link src="{resource}" rel="preload">`: e.g. the preload scanner in the browser will action at the same time with browser parsing the HTML. This will tell the scanner we know scanner doesn't know about the prioritised asset. So please preload the asset.

# Pass by reference

```JavaScript
member = { name: "Jane" }
```

# PerformanceNavigationTimer API

*DNS* - domainLookupStart -> domainLookupEnd -> *TCP* -> connectStart -> *TLS* -> secureConnectionStart -> connectEnd -> *HTTP Request* -> requestStart -> *HTTP Response* -> responseStart -> responseEnd -> *Processing* -> domLoading -> domInteractive(some resources not loaded yet) -> domContentLoadedEventStart(scripts) -> domContentLoadedEventEnd -> domComplete -> *Load* -> loadEventStart -> loadEventEnd

# Caching directives

In the response received from a server, there is a Key 'Cache-Control'. Its values can be:

1. no-cache: also returns a 'ETag' as an identifier to indicate if contents are changed. The contents will get cached, but every time a request is made, the server will compare the ETag. If not changed, then server will return a 304 Not Modified. If changed, will send the new contents with a new ETag.

2. must-revalidate: a parameter of max-age is also returned in the initial response, indicated the maximum amount of time a resources is refreshed. So even if ETag is changed, it still doesn't send contents until max-age time has passed (becomes staled).

3. no-store: doesn't cache at all (financial, user-specific)

4. private: in cases of CDN/Proxy, this ensures contents only get cached in users' HTTP cache, not on proxies.

5. stale-while-revalidate: after max-age, even when the resources are stale, at the time of loading fresh contents, stale contents still get served.
