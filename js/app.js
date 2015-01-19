


var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'zumba.angular-waypoints']);




        $('.thumbnail img').waypoint('sticky', {
            offset: 200 // Apply "stuck" when element 30px from top
        });

   










myApp.config(['$routeProvider' , function($routeProvider) {
    
    $routeProvider.
    when ('/home' , {
        templateUrl: 'partials/home-page.html',
       
    }).
    when ('/project/:projectID' , {
        templateUrl: 'partials/project.html'
    }).
    when ('/project-manager' , {
        templateUrl: 'partials/project-manager.html'
    }).
    otherwise ({
        redirectTo:'/home'
    });
      }]);








    
