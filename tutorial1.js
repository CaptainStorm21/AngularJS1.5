<!DOCTYPE html>
<html ng-app>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Angular 1.4</title>
  </head>

  <body>
    <h1>   {{ ' Hello' + ' ' + 'World!'}} </h1>
    <br>
    <p> 1 + 2 = {{ 1 + 2 }} </p>
    <br>
    <h2>Hello, {{ user }} </h2>
    <input type="text" name="" id="" ng-model="user">
    <br>
    <div ng-app12>
      <p> the Angular code will work ONLY within the div </p>
      <b>Good Morning, {{ user2 }} </b>
      <input type="text" name="" id="" ng-model="user2">
    </div>
  </body>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>

</html>
