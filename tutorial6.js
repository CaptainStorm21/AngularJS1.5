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

  <b> this won't work </b>
<div ng-init="names = ['smith', 'smith']">
<ul>
<ol ng-repeat="name in names"> {{ name }} </ol>
</ul>
</div>

  
<h2> solution </h2>
<div ng-init="names = [{surname: 'Smith', firstname: 'Joe'}, {surname: 'Smith', firstname: 'Sue'}]">
<ul>
<ol ng-repeat="name in names"> {{name.surname}}, {{name.firstname}} </ol>
</ul>
</div>
  

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>
</body>
</html>
