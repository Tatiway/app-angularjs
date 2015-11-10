'use strict';
/*App Module*/

var app = angular.module('app',['ngRoute','mainCtrl','infoService']);




app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller:'homepageCtrl'
      }).
      when('/contacts', {
        templateUrl: 'partials/contacts.html',
        controller:'contactsCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html'
      }).
      when('/photos', {
        templateUrl: 'partials/photos.html',
        controller: 'photosCtrl'
      }).
      when('/country/:countryId', {
        templateUrl: 'partials/country.html',
        controller:'countriesCtrl'
      }).
      when('/:storyId', {
        templateUrl: 'partials/story-ditale.html',
        controller:'storyDitaleCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
      
  }]);
