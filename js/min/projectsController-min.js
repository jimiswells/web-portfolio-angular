myApp.controller("projectController",["$scope","$http","$routeParams",function(t,r,e){r.get("/projects.json").success(function(r){t.projects=r,t.WhichProject=e.projectID,t.prevProject=e.projectID>0?Number(e.projectID)-1:t.projects.length-1,t.nextProject=e.projectID<t.projects.length-1?Number(e.projectID)+1:0,$(".giftrigger").hover(function(){$(".intro").toggleClass("gif")})})}]),myApp.controller("projectManagerController",["$scope","$http","$routeParams",function(t,r,e){t.addProject=function(){t.projects.$push({name:t.projectName})}}]),myApp.directive("projectIntro",function(){return{restrict:"E",templateUrl:"/partials/project-intro.html"}}),myApp.directive("projectImages",function(){return{restrict:"E",templateUrl:"/partials/project-images.html"}}),myApp.directive("contact",function(){return{restrict:"E",templateUrl:"/partials/contact.html"}});