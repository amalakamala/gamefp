'use strict';


window.addEventListener('load', function () {

  var game = new Game([
    new ExampleMap1(),
    new ExampleMap2()
  ], [
    amala
    //archer
    //KnightHero
    //Hero,
    //knight
    //hero
  ]);

  game.appendTo(document.body);
  game.run();

});
