/* globals jake:false, desc:false, task:false, complete:false, fail:false */

(function() {
	"use strict";

  var jshint = require("simplebuild-jshint");

	desc("Default build");
	task("default", [ "lint" ], function() {
		console.log("\n\nBUILD OK");
	});

	desc("Run a localhost server");
	task("run", function() {
		jake.exec("node node_modules/http-server/bin/http-server src", { interactive: true }, complete);
	});

  desc("Lint JavaScript code");
  task("lint", function() {
    process.stdout.write("Linting JavaScript: ");

    jshint.checkFiles({
      files: [ "Jakefile.js", "src/**/*.js" ],
      options: {
        bitwise: true,
				eqeqeq: true,
				forin: true,
				freeze: true,
				futurehostile: true,
				latedef: "nofunc",
				noarg: true,
				nocomma: true,
				nonbsp: true,
				nonew: true,
				strict: true,
				undef: true,

				node: true,
				browser: true
      },
      globals: {}
    }, complete, fail);
  }, { async: true });

}());
