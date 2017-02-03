<!DOCTYPE html>
<html ng-app>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Lesson 2</title>
  </head>

  <body>

    <p> not recommended </p>
    <div ng-init="name = 'MyName'">
      <p ng-bind="name"></p>
    </div>

    <br>

    <div ng-init="number = 10">
      <button ng-click=" number = number +3"> +3 </button>
      <button ng-click=" number = number -1"> -1 </button>
      <p> {{ number }} </p>


      <br>

      <p>show me the paragraph</p>
      <input type="checkbox" ng-model="isChecked">
      <p ng-if="isChecked"> YOU SEE ME! </p>

      <br>

      <p>show me this one</p>
      <input type="checkbox" ng-model="isChecked4">
      <p style="color: red" ng-show="isChecked4"> crazy eh? </p>
      
      <br>
      

      
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>
