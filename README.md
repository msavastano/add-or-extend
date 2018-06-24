## Description
 - Just adds or extends an object depending on whenther the key exists
## Usage

```
npm install add-or-extend --save
var addOrExtend = require('add-or-extend');
```

```
var targetObject = {
  theKey: [
    'hello', 
    'world'
  ]
};
```

```
var key = 'theKey';
var sourceObject = {
  any: 'thing'
}
// requires all params or will throw an error
var after = addOrExtend(targetObject, key, sourceObject)
console.log(after);
// { theKey: [ 'hello', 'world', { any: 'thing' } ] }
```

```
var key = 'anotherKey';
var sourceObject = {
    any: 'thing'
}
var after = addOrExtend(targetObject, key, sourceObject);
console.log(after);
//  { theKey: [ 'hello', 'world', { any: 'thing' } ], anotherKey: { any: 'thing' } }
```