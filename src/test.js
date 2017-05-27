(function() {
  "use strict";



  describe("addition", function() {
    it("adds", function() {
      assertEqual(add(3, 4), 7);
    });
  });

  function add(a, b) {
    return a + b;
  }

  function assertEqual(actual, expected) {
    if (actual !== expected) throw new Error("expected " + expected + " but was " + actual);
  }

}());
