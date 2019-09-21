// Endpoint to post the APRS packet.
// Use this one for testing; no guarantees it will always be up.
var url = 'http://www.lothlorien.com/post-aprs.php';

// Configure these for your callsign, SSID, passcode, and optional status message.
var callsign = 'KF6GPE-9'; // Replace with your call & SSID
var passcode = '-1';       // Replace with your passcode

// Replace the following with an optional status string.
var info = 'Internet | @kf6gpe / kf6gpe.org';

var symbol = 'p/';

// 
// Remainder of script follows
//
// Get the location from Tasker
var locationString = global('LOC');
// Uncomment the following line and comment out the previous line to test in node.js.
// var locationString = '37.17680931,-122.14647146';

// Take these from Tasker eventually
var latitude = parseFloat(locationString.split(',')[0]);
var longitude = parseFloat(locationString.split(',')[1]);

var latDeg = Math.floor(Math.abs(latitude));
var latMin = (Math.abs(latitude) - latDeg) * 60;
var lonDeg = Math.floor(Math.abs(longitude));
var lonMin = (Math.abs(longitude) - lonDeg) * 60;

var leadingLatDegDigits = '';
if (Math.abs(latDeg) < 10.0) leadingLatDegDigits = '0';
var leadingLonDegDigits = '';
if (Math.abs(lonDeg) < 10.0) leadingLonDegDigits = '00'; 
else if (Math.abs(lonDeg) < 100.0) leadingLonDegDigits = '0';

var leadingLatMinDigits = '';
if (Math.abs(latMin) < 10.0) leadingLatMinDigits = '0';
var leadingLonMinDigits = '';
if (Math.abs(lonMin) < 10.0) leadingLonMinDigits = '0'; 


// Compute our APRS packet
var latString = leadingLatDegDigits + Math.abs(latDeg).toString() + 
    leadingLatMinDigits + latMin.toFixed(2) + 
    (latitude < 0 ? 'S' : 'N');
var lonString = leadingLonDegDigits + Math.abs(lonDeg).toString() + 
    leadingLonMinDigits + lonMin.toFixed(2) + 
    (longitude < 0 ? 'W' : 'E');
var body = 'user ' + callsign + ' pass ' + passcode + ' vers KF6GPE-HTTP-Gateway 0.1\n' + 
    callsign + '>APDR15,TCPIP*:=' + latString + '/' + lonString + symbol + info + '\n';


// Do the POST to our gateway server
var method = 'POST';
var url = 'http://www.lothlorien.com/post-aprs.php';
// uncomment out the next line to test in node.js.
// var XMLHttpRequest = new require("xmlhttprequest").XMLHttpRequest;
var xhttp = new XMLHttpRequest();

xhttp.open(method, url, false);
xhttp.send(body);
if (xhttp.status == 200) {
    var response = xhttp.responseText;

    console.log(response);
}
