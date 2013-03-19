//set main namespace
goog.provide('dr');


//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.GlossyButton');
goog.require('lib');

goog.require('lime');
goog.require('lime.Sprite');
goog.require('lime.fill.Frame');

// components
goog.require('dr.Button');
goog.require('dr.GlossyButton');
goog.require('dr.Board');
goog.require('dr.Sprite');
goog.require('dr.Scene');

// entrypoint

dr.start = function(){
    //director
  dr.director = new lime.Director(document.body);
  dr.director.makeMobileWebAppCapable();

  var gamescene = dr.Scene.makeGameScene(dr.director);

  dr.director.replaceScene(gamescene);
  window.gamescene = gamescene;

  var gamescene = dr.Scene.makeGameScene(dr.director);
  var menuscene = dr.Scene.makeMenuScene();
  gamescene.transScenes.menuScene = menuscene;
  dr.director.replaceScene(gamescene);
};

//dr maker

//make Button
dr.makeGlossyButton = function(lbl) {
  var btn = new dr.GlossyButton(lbl).setSize(160,30);
  return btn;
};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('dr.start', dr.start);
