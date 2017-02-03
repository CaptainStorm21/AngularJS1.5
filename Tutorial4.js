<!DOCTYPE html>
<html ng-app>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <style>
    .red {
      background-color: red;
    }
    .green {
      background-color: green;
    }
  </style>
  
</head>
<body>

<div ng-init="number = 19">
<input type = "type" ng-model = "guess" ng-class="{red: guess !=number, green: guess == number}">
</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>
</html>
