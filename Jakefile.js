(function() {
	"use strict";

	desc("Default build");
	task("default", [ "lint" ], function() {
		console.log("\n\nBUILD OK");
	});

  desc("Lint JavaScript code");
  task("lint", function() {
    console.log("Linting JavaScript: .");

    jake.exec("node_modules/jshint/bin/jshint Jakefile.js", { interactive: true }, complete);
  }, { async: true });

}());
