<!DOCTYPE html>
<html ng-app>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<div ng-init="number = 19">
<input type = "text" ng-model="guess">
<p ng-hide="guess != number"> Correct </p>
<p ng-show="guess != number"> Not Correct </p>
</div>
  
</body>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>
</html>
