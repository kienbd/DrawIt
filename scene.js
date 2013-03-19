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


  var funcBtnHolder = new lime.Layer().setPosition(0,205);
  fsprite = new lime.Sprite().setFill('#1BE0B5').setAnchorPoint(0,0);
  fsprite.setSize(320,50);

  var submit = dr.GlossyButton.makeGlossyButton("SUBMIT");
  submit.setPosition(70 + 40,25);
  var clear = dr.GlossyButton.makeGlossyButton("CLEAR");
  clear.setPosition(170 + 40,25);



  funcBtnHolder.appendChild(fsprite);
  funcBtnHolder.appendChild(submit);
  funcBtnHolder.appendChild(clear);

  gamescene.appendChild(funcBtnHolder);


  var boardHolder = new lime.Layer();
  var board = new dr.Board(0,260,320,210);

  boardHolder.appendChild(board.canvas);
  lib.loadjsfile('assets/ndollar.js',function() {
    board.init();
    board.loadAnswers('assets/answers/answer1.js');
  });

  gamescene.appendChild(boardHolder);

  lib.setEvent(submit,['touchstart','mousedown'],function() {
    board.submit();
  });
  lib.setEvent(clear,['touchstart','mousedown'],function() {
    board.clearBoard();
  });
  return gamescene;
};

dr.Scene.makeSettingScene = function() {

};

dr.Scene.makeShopScene = function() {

};

dr.Scene.makeHighScoreScene = function() {

};
