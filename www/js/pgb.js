function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
}
function startAcc() {
    var options = { frequency: 3000 };  // Update every 3 seconds

    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}
function stopAcc() {
    navigator.accelerometer.clearWatch(watchID);
}


function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function personaldata() {

	info =  'Karol' + '\n' +
			'Cichoń' + '\n' +
			'e-mail: karol.cichon17@gmail.com ';

	navigator.notification.alert(info);
	
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';

    navigator.notification.alert('Connection type: ' + states[networkState]);
}
function onOnline() {
    navigator.notification.alert("Online");
}
function onOffline() {
    navigator.notification.alert("Offline");
}
function onSuccess(acceleration) {

    var p = document.querySelector('#accText');

    p.innerHTML='Acceleration X: ' +
        acceleration.x +
        '<br/>' +
        'Acceleration Y: ' +
        acceleration.y +
        '<br/>' +
        'Acceleration Z: ' +
        acceleration.z +
        '<br/>' +
        'Timestamp: ' +
        acceleration.timestamp +
        '<br/>';
}

function onError() {
    navigator.notification.alert('onError!');
}
function showSplash() {
    navigator.splashscreen.show();
}

