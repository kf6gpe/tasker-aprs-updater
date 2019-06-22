<?php

$packet = file_get_contents('php://input');

$fp = fsockopen("noam.aprs2.net", 14580, $errno, $errstr, 30);
if (!$fp) {
   echo "$errstr ($errno)<br/>\n";
} else {
  echo fgets($fp, 128);
  sleep(8);
  fwrite($fp, $packet);
  echo fgets($fp, 1024);
  fclose($fp);
}?>