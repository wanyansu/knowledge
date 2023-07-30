# JS Patterns

## Web Bundler

* Modern web server already recognises imported JS files.

* One of the benefits of a web bundler are that it helps JS files to understand imported node packages.

## Singleton Patterns

**This ensures only one instance of an object/class is instantiated in the entire project**

* It is widely used in npm packages.

_Example:_

```JavaScript
/* class implementation */
class DBConnection {
  constructor(uri) {
    if (instance) { 
      throw Error("You can only create one single DB connection!");
    }
    this.uri = uri;
    instance = this;
  }

  connect() {
    console.log(`DB ${this.uri} has been connected!`);
  }

  disconnect() {
    console.log(`DB disconnected!`);
  }
}

const connection = Object.freeze(new DBConnection('mongodb://...'));

/* object implementation */
const dbConnection = uri => Object.freeze({
  uri,
  connect: () => console.log(`DB ${uri} has been connected!`),
  disconnect: () => console.log(`DB disconnected!`)
})

const connection = dbConnection('mongodb://...');
```

## Proxy Patterns


