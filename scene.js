goog.provide('dr.Scene');

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


dr.Scene = function() {
 lime.Scene.call(this);

 this.transScenes = {};

};

goog.inherits(dr.Scene,lime.Scene);

dr.Scene.prototype.id = "dr.scene";

dr.Scene.makeMenuScene = function() {
  var menuScene = new dr.Scene;
  return menuScene;

};

dr.Scene.makeSelectScene = function() {

};

dr.Scene.makeGameScene = function(director) {
  var gamescene = new dr.Scene;
  var topBar = new lime.Layer();
  topBar.setPosition(0,0);
  tsprite  = new lime.Sprite();
  tsprite.setFill('#c00').setAnchorPoint(0,0);
  tsprite.setSize(320,40);

  topBar.appendChild(tsprite);

  gamescene.appendChild(topBar);

  var QuizHolder = new lime.Layer().setPosition(0,40);
  var Quiz = new lime.Sprite().setFill("#D62EDB").setAnchorPoint(0,0);
  Quiz.setPosition(50,0);
  Quiz.setSize(220,160);

  qsprite = new lime.Sprite().setFill("#8D2EDB").setAnchorPoint(0,0);
  qsprite.setSize(320,160);

  QuizHolder.appendChild(qsprite);
  QuizHolder.appendChild(Quiz);

  gamescene.appendChild(QuizHolder);


  var funcBtnHolder = new lime.Layer().setPosition(0,210);
  fsprite = new lime.Sprite().setFill('#1BE0B5').setAnchorPoint(0,0);
  fsprite.setSize(320,50);

  funcBtnHolder.appendChild(fsprite);

  gamescene.appendChild(funcBtnHolder);


  var Board = new lime.Layer().setPosition(0,270);
  bsprite = new lime.Sprite().setFill("#E0941B").setAnchorPoint(0,0);
  bsprite.setSize(320,220);
  window.abc = gamescene;

  goog.events.listen(bsprite,'click',function() {
    console.log("dsdas");
    director.replaceScene(gamescene.transScenes.menuScene);
  });

  Board.appendChild(bsprite);

  gamescene.appendChild(Board);

  return gamescene;
};

dr.Scene.makeSettingScene = function() {

};

dr.Scene.makeShopScene = function() {

};

dr.Scene.makeHighScoreScene = function() {

};
