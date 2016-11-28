//CREATES THE NEW APP MODULE THAT WILL RUN EVERYTHING
var app = angular.module("folioApp", []);

//LINED TO CONTROLLER HTML
app.controller("infoSectionCtrl", function ($scope) {



    //CREATE AN ARRAY OF IMAGES AND INFO (OBJECTS)

 $scope.sectionInfo = [

        {
            headline: "Grand Circus: Theatre App ",
            description: "My team built a theatre reservation app.",
            img:'img/projectScreenshots/gc/GroupMidtermProjectTheatre.png'
  }, 
      {
            headline: "Grand Circus: Bebop Mad libs ",
            description: "Mad libs based off one of my favorite animes.",
            img:'img/projectScreenshots/gc/cowboyBebopMadLibs.png'
  }, 
      {
            headline: "Grand Circus: Hals Temp converter ",
            description: "Basic temperature converter.",
            img:'img/projectScreenshots/gc/HalsTempConverter.png'
  }, 
      {
            headline: "Grand Circus: Skyrim Shopping Cart ",
            description: "I was a traveler like you, until I took an arrow to the knee.",
            img:'img/projectScreenshots/gc/ShoppingListSkyrim.png'
  }, 
      {
            headline: "Grand Circus: GTO Fan Page ",
            description: "Another great show I love to represent",
            img:'img/projectScreenshots/gc/gtofanPageBootstrap.png'
  }, 
      {
            headline: "Grand Circus: 6 ",
            description: "Just some of the things I can do",
            img:'img/projectScreenshots/gc/gtofanPageBootstrap.png'
  }, 
      {
            headline: "Grand Circus: 7 ",
            description: "Just some of the things I can do",
            img:'img/projectScreenshots/gc/gtofanPageBootstrap.png'
  }, 
      {
            headline: "Grand Circus: 8 ",
            description: "Just some of the things I can do",
            img:'img/projectScreenshots/gc/gtofanPageBootstrap.png'
  },  
          {
            headline: "CodePen Picked Projects: My First UI Remake ",
            description: "This was my first attempt at the Gameboy UI",
            img:'img/projectScreenshots/codepen/gameBoyRemake.png'
  }, 
      {
            headline: "CodePen Picked Projects: Flex-box MPC ",
            description: "I used flexbox and js to make my first MPC.",
            img:'img/projectScreenshots/codepen/flexBoxMPC.png'
  }, 
      {
            headline: "CodePen Picked Projects: Animated Profile Card ",
            description: "Fun project for beginners",
            img:'img/projectScreenshots/codepen/animeProfileCard.png'
  }, 
      {
            headline: "CodePen Picked Projects: Password Generator ",
            description: "Had fun with this one",
            img:'img/projectScreenshots/codepen/animePassGen.png'
  }, 
      {
            headline: "CodePen Picked Projects: Hyper Loader ",
            description: "Turbo loader demo",
            img:'img/projectScreenshots/codepen/hyperLoader.png'
  }, 
      {
            headline: "CodePen Picked Projects: Hypno Loader ",
            description: "Don't look at it for to long....",
            img:'img/projectScreenshots/codepen/hypnoLoader.png'
  }, 
      {
            headline: "CodePen Picked Projects: CSS Scenery ",
            description: "Great way to practice CSS animations",
            img:'img/projectScreenshots/codepen/animeScenery.png'
  }, 
    
 ];

});
   


app.directive("spdSectionInfo", function () {
    return {

        restrict: "EA"
        , templateUrl: "spd-section.html"
    };


});
 
 