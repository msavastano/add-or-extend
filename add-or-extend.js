var _ = require("lodash"); 

module.exports = function(targetObject, key, sourceObject, multipleSourceobjects) {
  
  if (arguments.length < 3) {
    throw(new Error('targetObject, key, sourceObject required'));
  };
  var keyExiststObject;
  var keyDoesNotExistObject;
  if (multipleSourceobjects && Array.isArray(sourceObject) && sourceObject.length == 2) {
    keyExiststObject = sourceObject[0];
    keyDoesNotExistObject = sourceObject[1];
  } else {
    keyExiststObject = sourceObject;
    keyDoesNotExistObject = sourceObject;
  }

  if(targetObject[key]) {
    if(Array.isArray(targetObject[key])){
      targetObject[key].push(keyExiststObject);
    } else {
      _.extend(targetObject[key], keyExiststObject);
    }
  } else {
    var newOb = {}
    newOb[key] = keyDoesNotExistObject;
    _.extend(targetObject, newOb);
  }

  return targetObject;
}