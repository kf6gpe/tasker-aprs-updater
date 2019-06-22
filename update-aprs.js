
// Configure these for your callsign, SSID, passcode, and optional status message.
var callsign = 'KF6GPE-9';
var passcode = '-1';
var info = 'Internet | @kf6gpe / kf6gpe.org';


// Take these from Tasker eventually
var latitude = 37.11;
var longitude = -122.09;

// Compute our APRS packet
var lat = (Math.abs(latitude) * 100).toFixed(2) + (latitude < 0 ? 'S' : 'N');
var lon = (Math.abs(longitude) * 100).toFixed(2) + (longitude < 0 ? 'W' : 'E');
var body = 'user ' + callsign + ' pass ' + passcode + ' vers KF6GPE-HTTP-Gateway 0.1\n' + 
    callsign + '>APDR15,TCPIP*:=' + lat + '/' + lon + 'I ' + info + '\n';

console.log(body);


// Do the POST to our gateway server
var method = 'POST';
var url = 'http://www.lothlorien.com/post-aprs.php';
var XMLHttpRequest = new require("xmlhttprequest").XMLHttpRequest;
var xhttp = new XMLHttpRequest();

xhttp.open(method, url, false);
xhttp.send(body);
if (xhttp.status == 200) {
    var response = xhttp.responseText;

    console.log(response);
}
