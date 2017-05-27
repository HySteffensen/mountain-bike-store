(function() {
  "use strict";

  var addition = require("./addition.js");

  describe("addition", function() {
    it("adds", function() {
      assertEqual(addition.add(3, 4), 7);
    });
  });

  function assertEqual(actual, expected) {
    if (actual !== expected) throw new Error("expected " + expected + " but was " + actual);
  }

}());
