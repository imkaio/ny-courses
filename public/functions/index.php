<?php
$request = $_SERVER['REDIRECT_URL'];

switch ($request) {
  case '/' :
    require __DIR__ . '/posts.php';
    break;
  default:
    require __DIR__ . '/info.php';

    break;
}

?>