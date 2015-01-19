myApp.controller('projectController', ['$scope', '$http', '$routeParams', 
    function ($scope, $http, $routeParams) {
        $http.get('/projects.json').success(function (data) {


            /*put json data into variable*/

            $scope.projects = data;
            
            
            




            /*add project to variable*/
            $scope.WhichProject = $routeParams.projectID;





            /*next and prev */

            if ($routeParams.projectID > 0) {
                $scope.prevProject = Number($routeParams.projectID) - 1;
            } else {
                $scope.prevProject = $scope.projects.length - 1;
            }


            if ($routeParams.projectID < $scope.projects.length - 1) {
                $scope.nextProject = Number($routeParams.projectID) + 1;
            } else {
                $scope.nextProject = 0;
            }


$('.giftrigger').hover(function () {
            $('.intro').toggleClass('gif');

        });



     











        });
      }]);




myApp.controller('projectManagerController', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
        



              
            $scope.addProject = function () {
                $scope.projects.$push({
                    name: $scope.projectName
                })
                
            };


        





        
      }]);









/*directives*/

myApp.directive("projectIntro", function () {
    return {
        restrict: 'E',
        templateUrl: "/partials/project-intro.html"
    };
});


myApp.directive("projectImages", function () {
    return {
        restrict: 'E',
        templateUrl: "/partials/project-images.html"
    };
});


myApp.directive("contact", function () {
    return {
        restrict: 'E',
        templateUrl: "/partials/contact.html"
    };
});