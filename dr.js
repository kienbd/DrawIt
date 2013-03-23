//set main namespace
goog.provide('dr');


//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');

goog.require('lime');

// components
goog.require('lib');
goog.require('dr.Scene');

// entrypoint

dr.WIDTH = 320;
dr.HEIGHT = 480;

dr.start = function(){
    //director
  dr.director = new lime.Director(document.body);
  dr.director.setSize(dr.WIDTH,dr.HEIGHT);
  dr.director.makeMobileWebAppCapable();

  var menuscene = dr.Scene.makeMenuScene(dr.director);
  dr.director.replaceScene(menuscene);
};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('dr.start', dr.start);
