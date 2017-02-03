<!DOCTYPE html>
<html ng-app>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <style>
    .red {
      color: red;
    }
    
    .green {
      color: green;
    }
  </style>
</head>
<body>
  
<div ng-init="numbers = [2,3,4,87,88, 09,33]">
<ul>
  <ol ng-repeat="number in numbers" ng-class="{red: $even, green: $odd}"> {{ number }} -- {{ $even }} -- {{ $odd }}</ol>
</ul>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>
</body>
</html>
