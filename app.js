require.config({
	baseUrl: "libs",
	paths: {
		"jquery": "jquery/dist/jquery.min",
		"moment": "moment/moment"
	}
});

requirejs(["jquery", "moment"], function($, moment) {
	console.log($, moment);
});