var _ = require("lodash"); 

module.exports = function(targetObject, key, sourceObject, multipleSourceobjects) {
  
  if (arguments.length < 3) {
    throw(new Error('targetObject, key, sourceObject required'));
  };
  
  var multiSource = multipleSourceobjects === true && Array.isArray(sourceObject) && sourceObject.length == 2
 
  var keyExiststObject = multiSource ? sourceObject[0] : sourceObject;
   
  var keyDoesNotExistObject = multiSource ? sourceObject[1] : sourceObject;
 
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