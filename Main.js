/**
 * 
 *//*global includeCommonConfig, require, _BM_USER_LANGUAGE */

var _perfPageLoaded = Date.now();
includeCommonConfig();

require([
    'jquery',
    'underscore',
    'knockout',
    'ojs/ojcore',
    'OTM/viewModels/Visual',
    'common/routingFactory',

    'OTM/kotemplates/loader',
    // Required JET components
    'ojs/ojknockout',
], function($, _, ko, oj, Visual, routingFactory) {
    ko.options.deferUpdates = true;


    oj.Config.setLocale(_BM_USER_LANGUAGE);
    

    // Set error messages to display in notewindow by default
    oj.Components.setDefaultOptions({
        'editableValue': {
            'displayOptions': {
                'messages': ['notewindow']
            }
        }
    });


    // Initialize knockout bindings
    var visual = new Visual();
    ko.applyBindings(visual, $('#visual')[0]);

    // Setup routing
    var basePath = '/OTM/';
    routingFactory.initialize(basePath, [
        {
            pattern: '',
            handler: loadDocument
        }
    ], {
        skipInitialHistory: true
    });


    // Called by router to load the document related to the URL
    function loadDocument() {
        visual.loadDocument();
    }

    // TODO - only for testing purposes, we should remove this before production
    window.dataFor = function(el) {
        return ko.dataFor(el);
    };
});
