//CREATES THE NEW APP MODULE THAT WILL RUN EVERYTHING
var app = angular.module("folioApp", []);

//LINED TO CONTROLLER HTML
app.controller("infoSectionCtrl", function ($scope) {



    //CREATE AN ARRAY OF IMAGES AND INFO (OBJECTS)

 $scope.sectionInfo = [

        {
            headline: "Project 1 "
            , description: "Just some of the things I can do"
  }, 
//     {
//            headlineTwo: "Project 2 "
//            , descriptionTwo: "You should hire me for sure!"
// },
//   




];


});


app.directive("spdSectionInfo", function () {
    return {

        restrict: "EA"
        , templateUrl: "spd-section.html"
    };


});


 