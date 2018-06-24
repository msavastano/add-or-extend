var addOrExtend = require('../../add-or-extend');
var chai = require('chai');
var expect = chai.expect;

var targetObject = {
  theKey: [
    'hello', 
    'world'
  ]
};

var sourceObject = {
  any: 'thing'
}

describe('add and extend objects', function () {
  it('adds to an array', function (done) {
    var key = 'theKey';
    var sourceObject = {
      any: 'thing'
    }
    var after = addOrExtend(targetObject, key, sourceObject)
    expect(after).to.have.property('theKey');
    expect(after.theKey).to.be.an('array').to.deep.include({any:'thing'});
    done();
  });

  it('extends an object', function(done){
    var key = 'anotherKey';
    var after = addOrExtend(targetObject, key, sourceObject);
    expect(after).to.have.property('anotherKey');
    expect(after.anotherKey).to.deep.include({any:'thing'});
    done();
  });

  it('adds to an object', function(done){
    var targetObject = {
      theKey: {
        hello: 'world'
      }
    };
    var key = 'theKey';
    var after = addOrExtend(targetObject, key, sourceObject);
    expect(after).to.have.property('theKey');
    expect(after.theKey).to.property('hello');
    done();
  });
});