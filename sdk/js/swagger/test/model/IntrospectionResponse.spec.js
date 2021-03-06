/**
 * ORY Oathkeeper
 * ORY Oathkeeper is a reverse proxy that checks the HTTP Authorization for validity against a set of rules. This service uses Hydra to validate access tokens and policies.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OryOathkeeper);
  }
}(this, function(expect, OryOathkeeper) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OryOathkeeper.IntrospectionResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('IntrospectionResponse', function() {
    it('should create an instance of IntrospectionResponse', function() {
      // uncomment below and update the code to test IntrospectionResponse
      //var instane = new OryOathkeeper.IntrospectionResponse();
      //expect(instance).to.be.a(OryOathkeeper.IntrospectionResponse);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new OryOathkeeper.IntrospectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property aud (base name: "aud")', function() {
      // uncomment below and update the code to test the property aud
      //var instane = new OryOathkeeper.IntrospectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new OryOathkeeper.IntrospectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property exp (base name: "exp")', function() {
      // uncomment below and update the code to test the property exp
      //var instane = new OryOathkeeper.IntrospectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property ext (base name: "ext")', function() {
      // uncomment below and update the code to test the property ext
      //var instane = new OryOathkeeper.IntrospectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property iat (base name: "iat")', function() {
      // uncomment below and update the code to test the property iat
      //var instane = new OryOathkeeper.IntrospectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property iss (base name: "iss")', function() {
      // uncomment below and update the code to test the property iss
      //var instane = new OryOathkeeper.IntrospectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property nbf (base name: "nbf")', function() {
      // uncomment below and update the code to test the property nbf
      //var instane = new OryOathkeeper.IntrospectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instane = new OryOathkeeper.IntrospectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property sub (base name: "sub")', function() {
      // uncomment below and update the code to test the property sub
      //var instane = new OryOathkeeper.IntrospectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property tokenType (base name: "token_type")', function() {
      // uncomment below and update the code to test the property tokenType
      //var instane = new OryOathkeeper.IntrospectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new OryOathkeeper.IntrospectionResponse();
      //expect(instance).to.be();
    });

  });

}));
