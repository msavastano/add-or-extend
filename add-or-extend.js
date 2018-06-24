var _ = require("lodash"); 

module.exports = function(targetObject, key, sourceObject) {
  
  if (arguments.length < 3) {
    throw(new Error('targetObject, key, sourceObject required'));
  };

  if(targetObject[key]) {
    targetObject[key].push(sourceObject);
  } else {
    var newOb = {}
    newOb[key] = sourceObject;
    _.extend(targetObject, newOb);
  }

  return targetObject;
}