# A simple Tasker script to update APRSIS

You must have an amateur radio license to use this script.


Installation:
1.  Install [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=en_US).
1.  Install `post-aprs.php` on a server with PHP somewhere. You can use my instance for test purposes, but be advised that I do not guarantee uptime at all.
1. Configure a task profile with praramaters for when you want to update APRS. For example, my profile updates it every five minutes from the time I'm up in the morning until I'm likely to go to bed, like this:
   - Time: From 7:00AM every 5m Till 11:00PM
1. Configure `update-aprs.js` as follows:
   - Set `url` to the URL where you've installed `post-aprs.php`.
   - Set `callsign` the callsign and SSID of the station you'd like to have positions updated.
   - Set `passcode` to the passcode for your callsign. (This script will not work without a valid passcode!)
1. Add the following tasks to your profile:
   - A1. Get Location - Source Any - Timeout 20 - Continue Task Immediately Off - Keep Tracking Off
   - A2. JavaScriptlet - Code should be the contents of your modified update-aprs.js - No libraries - Exit Off - Timeout (Seconds) 45 - Continue Task after Error On
