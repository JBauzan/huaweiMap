var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    var mapOptions = {}; 
    mapOptions.center = {lat: 48.856613, lng: 2.352222}; 
    mapOptions.zoom = 8; 
    mapOptions.language='ENG'; 
    var map = new HWMapJsSDK.HWMap(document.getElementById('map'), mapOptions); 
    exec(success, error, 'huaweiMap', 'coolMethod', [arg0]);
};
