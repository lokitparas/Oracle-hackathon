/*global define*/
define([
    'ojs/ojcore',
    'ojs/ojknockout',
    'knockout',
    'text!./visual.html'
], function(oj, x, ko,
        visual
) {
    /*jshint sub:true*/
    oj.koStringTemplateEngine.install();
    ko.templates['visual.html'] = visual;
});
