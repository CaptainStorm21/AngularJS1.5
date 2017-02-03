<!DOCTYPE html>
<html ng-app>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>currency</title>
</head>
<body>
  
<div ng-init="amount = 125.00">
<p> {{ amount | currency}} </p>
<p> {{ amount | currency: "E" }} </p>
</div>
  
  
  
  
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>

</body>
</html>
