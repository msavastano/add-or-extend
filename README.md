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

```
var targetObject = {
  theKey: {
    hello: 'world'
  }
};
var sourceObject = {
    any: 'thing'
}
var key = 'theKey';
var after = addOrExtend(targetObject, key, sourceObject);
console.log(after);
//{ theKey: { hello: 'world', any: 'thing' } }
```

if multipleSourceobjects == true and sourceObject is an array of length 2,  sourceObject[0] will be used when the key exists in the targetObject and sourceObject[1] will be used if key does not exist in targetObject 
```
var targetObject = {
  theKey: {
    hello: 'world'
  }
};
var sourceObject = [
  { keyExists: 'addThis'},
  {keyDoesNot: { add: 'that'}}
]
var after = addOrExtend(targetObject, 'theKey', sourceObject, true);
console.log(after);
//{ theKey: { hello: 'world', keyExists: 'addThis' } }
var after = addOrExtend(targetObject, 'notTheKey', sourceObject, true);
console.log(after);
//{ theKey: { hello: 'world' }, notTheKey: { keyDoesNot: { add: 'that' } } }
```
