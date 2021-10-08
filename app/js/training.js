console.log('target');

function coolModule() {
  let something = "cool";
  let another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(' ! '));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother,
  }
}

const foo = coolModule();
foo.doSomething();
foo.doAnother();

function Manager() {
  var modules = {};

  function define(name, deps, impl) {
    for (var i=0; i<deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply( impl, deps );
  }
  function get(name) {
    return modules[name];
  }
  return {
    define: define,
    get: get
  };
}