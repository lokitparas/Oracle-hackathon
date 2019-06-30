/**
 *
 *//*global define, _BM_USER_LANGUAGE, _BM_USER_CURRENCY*/
define([
    'ojs/ojcore',
    'knockout',
    'underscore',
    'jquery',
    'common/msg',
    'ojs/ojaccordion',
    'ojs/ojtrain',
    'ojs/ojlabel'
], function(oj, ko, _, $, msg) {

    var Visual = function() {
        this.initialize();
    };


    ko.utils.extend(Visual.prototype, {

        initialize: function() {
            this.trials = [{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 1873973434","orders":[{"orderId":"ROSE.M-STOP-NE WELL_CHEY"}],"stops":[{"label":"ROSE.WELLINGTON SKI RESORT "},{"label":" ROSE.CHEYENNE LOC 1"}]},{"shipmentId":"Shipment 87919452","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 1365169199","orders":[{"orderId":"ROSE.M-STOP-NE_LONG1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.LONGMONT LOC 1"}]},{"shipmentId":"Shipment 2106310808","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER4"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 4"}]},{"shipmentId":"Shipment 910087522","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 1"}]},{"shipmentId":"Shipment 255706571","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER2"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 2"}]},{"shipmentId":"Shipment 1134024364","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER3"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 3"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 1873973434","orders":[{"orderId":"ROSE.M-STOP-NE WELL_CHEY"}],"stops":[{"label":"ROSE.WELLINGTON SKI RESORT "},{"label":" ROSE.CHEYENNE LOC 1"}]},{"shipmentId":"Shipment 87919452","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 1365169199","orders":[{"orderId":"ROSE.M-STOP-NE_LONG1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.LONGMONT LOC 1"}]},{"shipmentId":"Shipment 2106310808","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER4"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 4"}]},{"shipmentId":"Shipment 910087522","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 1"}]},{"shipmentId":"Shipment 255706571","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER2"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 2"}]},{"shipmentId":"Shipment 1134024364","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER3"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 3"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 87919452","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 1873973434","orders":[{"orderId":"ROSE.M-STOP-NE WELL_CHEY"}],"stops":[{"label":"ROSE.WELLINGTON SKI RESORT "},{"label":" ROSE.CHEYENNE LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 87919452","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 1365169199","orders":[{"orderId":"ROSE.M-STOP-NE_LONG1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.LONGMONT LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 87919452","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 910087522","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 1"}]}]},{"clusterlabel":"SUCCESS","Id":"SUCCESS","shipments":[{"shipmentId":"Shipment 87919452","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 2106310808","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER4"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 4"}]},{"shipmentId":"Shipment 87919452","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 2106310808","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER4"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 4"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 999404655","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 1873973434","orders":[{"orderId":"ROSE.M-STOP-NE WELL_CHEY"}],"stops":[{"label":"ROSE.WELLINGTON SKI RESORT "},{"label":" ROSE.CHEYENNE LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 999404655","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 1365169199","orders":[{"orderId":"ROSE.M-STOP-NE_LONG1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.LONGMONT LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 999404655","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 910087522","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 1"}]}]},{"clusterlabel":"SUCCESS","Id":"SUCCESS","shipments":[{"shipmentId":"Shipment 999404655","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 1134024364","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER3"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 3"}]},{"shipmentId":"Shipment 999404655","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 1134024364","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER3"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 3"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 838219672","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"},{"orderId":"ROSE.M-STOP-NE_BOULDER3"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 3 "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 1873973434","orders":[{"orderId":"ROSE.M-STOP-NE WELL_CHEY"}],"stops":[{"label":"ROSE.WELLINGTON SKI RESORT "},{"label":" ROSE.CHEYENNE LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 838219672","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"},{"orderId":"ROSE.M-STOP-NE_BOULDER3"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 3 "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 1365169199","orders":[{"orderId":"ROSE.M-STOP-NE_LONG1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.LONGMONT LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 838219672","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"},{"orderId":"ROSE.M-STOP-NE_BOULDER3"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 3 "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 910087522","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 1"}]}]},{"clusterlabel":"SUCCESS","Id":"SUCCESS","shipments":[{"shipmentId":"Shipment 838219672","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"},{"orderId":"ROSE.M-STOP-NE_BOULDER3"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 3 "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 255706571","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER2"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 2"}]},{"shipmentId":"Shipment 838219672","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"},{"orderId":"ROSE.M-STOP-NE_BOULDER3"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 3 "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 255706571","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER2"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 2"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 1259634492","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"},{"orderId":"ROSE.M-STOP-NE_BOULDER3"},{"orderId":"ROSE.M-STOP-NE_BOULDER2"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 2 "},{"label":" ROSE.BOULDER LOC 3 "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 1873973434","orders":[{"orderId":"ROSE.M-STOP-NE WELL_CHEY"}],"stops":[{"label":"ROSE.WELLINGTON SKI RESORT "},{"label":" ROSE.CHEYENNE LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 1259634492","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"},{"orderId":"ROSE.M-STOP-NE_BOULDER3"},{"orderId":"ROSE.M-STOP-NE_BOULDER2"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 2 "},{"label":" ROSE.BOULDER LOC 3 "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 1365169199","orders":[{"orderId":"ROSE.M-STOP-NE_LONG1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.LONGMONT LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 1259634492","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"},{"orderId":"ROSE.M-STOP-NE_BOULDER3"},{"orderId":"ROSE.M-STOP-NE_BOULDER2"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 2 "},{"label":" ROSE.BOULDER LOC 3 "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]},{"shipmentId":"Shipment 910087522","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 1873973434","orders":[{"orderId":"ROSE.M-STOP-NE WELL_CHEY"}],"stops":[{"label":"ROSE.WELLINGTON SKI RESORT "},{"label":" ROSE.CHEYENNE LOC 1"}]},{"shipmentId":"Shipment 1365169199","orders":[{"orderId":"ROSE.M-STOP-NE_LONG1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.LONGMONT LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 1873973434","orders":[{"orderId":"ROSE.M-STOP-NE WELL_CHEY"}],"stops":[{"label":"ROSE.WELLINGTON SKI RESORT "},{"label":" ROSE.CHEYENNE LOC 1"}]},{"shipmentId":"Shipment 910087522","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 1873973434","orders":[{"orderId":"ROSE.M-STOP-NE WELL_CHEY"}],"stops":[{"label":"ROSE.WELLINGTON SKI RESORT "},{"label":" ROSE.CHEYENNE LOC 1"}]},{"shipmentId":"Shipment 1259634492","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"},{"orderId":"ROSE.M-STOP-NE_BOULDER3"},{"orderId":"ROSE.M-STOP-NE_BOULDER2"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 2 "},{"label":" ROSE.BOULDER LOC 3 "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 1365169199","orders":[{"orderId":"ROSE.M-STOP-NE_LONG1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.LONGMONT LOC 1"}]},{"shipmentId":"Shipment 1873973434","orders":[{"orderId":"ROSE.M-STOP-NE WELL_CHEY"}],"stops":[{"label":"ROSE.WELLINGTON SKI RESORT "},{"label":" ROSE.CHEYENNE LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 1365169199","orders":[{"orderId":"ROSE.M-STOP-NE_LONG1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.LONGMONT LOC 1"}]},{"shipmentId":"Shipment 910087522","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 1365169199","orders":[{"orderId":"ROSE.M-STOP-NE_LONG1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.LONGMONT LOC 1"}]},{"shipmentId":"Shipment 1259634492","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"},{"orderId":"ROSE.M-STOP-NE_BOULDER3"},{"orderId":"ROSE.M-STOP-NE_BOULDER2"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 2 "},{"label":" ROSE.BOULDER LOC 3 "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 910087522","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 1"}]},{"shipmentId":"Shipment 1873973434","orders":[{"orderId":"ROSE.M-STOP-NE WELL_CHEY"}],"stops":[{"label":"ROSE.WELLINGTON SKI RESORT "},{"label":" ROSE.CHEYENNE LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 910087522","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 1"}]},{"shipmentId":"Shipment 1365169199","orders":[{"orderId":"ROSE.M-STOP-NE_LONG1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.LONGMONT LOC 1"}]}]},{"clusterlabel":"FAILURE","Id":"FAILURE","shipments":[{"shipmentId":"Shipment 910087522","orders":[{"orderId":"ROSE.M-STOP-NE_BOULDER1"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 1"}]},{"shipmentId":"Shipment 1259634492","orders":[{"orderId":"ROSE.M-STOP-NE_WIND1"},{"orderId":"ROSE.M-STOP-NE_BOULDER4"},{"orderId":"ROSE.M-STOP-NE_BOULDER3"},{"orderId":"ROSE.M-STOP-NE_BOULDER2"}],"stops":[{"label":"ROSE.NEDERLAND DIST CENTER "},{"label":" ROSE.BOULDER LOC 2 "},{"label":" ROSE.BOULDER LOC 3 "},{"label":" ROSE.BOULDER LOC 4 "},{"label":" ROSE.WINDSOR LOC 1"}]}]}]
;
        },

        loadDocument: function() {

        }
    });
    return Visual;
});
