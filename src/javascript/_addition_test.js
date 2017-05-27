(function() {
  "use strict";

  var addition = require("./addition.js");
  var assert = require("../vendor/chai-4.0.0.js").assert;

  describe("addition", function() {
    it("adds", function() {
      assert.equal(addition.add(3, 4), 7);
    });
  });

}());
