(function() {
  "use strict";

  var addition = require("./addition.js");
  var assert = require("./assert.js");

  describe("addition", function() {
    it("adds", function() {
      assert.equal(addition.add(3, 4), 7);
    });
  });

}());
