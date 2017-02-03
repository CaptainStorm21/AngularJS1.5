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
  
<div ng-init="rebels = [
     {name: 'Joe', profession: 'Bank Robber', weapon: 'a pistol', age: 21},
     {name: 'Joseph', profession: 'Teacher', weapon: 'a book', age: 23},
     {name: 'John', profession: 'musician', weapon: 'notepad', age: 45},
     {name: 'Mary', profession: 'Burlesque dancer', weapon: 'shoes', age: 34},
     ];">
  <select name = "" id="" ng-model="rebel" ng-options="rebel.name for rebel in rebels"> </select>
  <p> You have selected: {{ rebel.name }} is {{ rebel.profession }} </p>


<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>
</body>
</html>
