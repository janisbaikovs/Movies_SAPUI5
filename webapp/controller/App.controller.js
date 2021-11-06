sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/base/Log"
], function (Controller, Log) {
	"use strict";

	return Controller.extend("opensap.movies.controller.App", {
		
		onInit: function () {
			Log.info("Controller has been initialized.");
		},

		onBeforeRendering: function () {
			Log.info("The view will shortly be rendered.");
		},

		onAfterRendering: function () {
			Log.info("The view has been rendered.");
		},

		onExit: function () {
			Log.info("Controller will shortly be destroyed.");
		}
	});
});