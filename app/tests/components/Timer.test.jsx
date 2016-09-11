var React = require ('react');
var ReactDOM = require ('react-dom');
var expect = require ('expect');
var $ = require ('jQuery');
var TestUtils = require ('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });
});
