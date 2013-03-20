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

dr.Scene.makeMenuScene = function(director) {
  var menuScene = new dr.Scene;

  var logoHolder = new lime.Layer();
  logo = new lime.Sprite();
  logo.setFill('#DE8509').setAnchorPoint(0,0);
  logo.setSize(320,160);

  logoHolder.appendChild(logo);


  var btnHolder = new lime.Layer().setPosition(0,160);
  btns = new lime.Sprite();
  btns.setFill('#9E05A6').setAnchorPoint(0,0);
  btns.setSize(320,300);
  btns.setPosition(0,0);

  var playBtn = new lime.Sprite();
  playBtn.setFill('#97DE09').setAnchorPoint(0,0);
  playBtn.setSize(160,60);
  playBtn.setPosition(80,10);

  var shopBtn = new lime.Sprite();
  shopBtn.setFill('#97DE09').setAnchorPoint(0,0);
  shopBtn.setSize(160,60);
  shopBtn.setPosition(80,80)

  var highscoreBtn = new lime.Sprite();
  highscoreBtn.setFill('#97DE09').setAnchorPoint(0,0);
  highscoreBtn.setSize(160,60);
  highscoreBtn.setPosition(80,150)

  var settingBtn = new lime.Sprite();
  settingBtn.setFill('#97DE09').setAnchorPoint(0,0);
  settingBtn.setSize(160,60);
  settingBtn.setPosition(80,220);

  btnHolder.appendChild(btns);
  btnHolder.appendChild(playBtn);
  btnHolder.appendChild(shopBtn);
  btnHolder.appendChild(highscoreBtn);
  btnHolder.appendChild(settingBtn);


  menuScene.appendChild(logoHolder);
  menuScene.appendChild(btnHolder);

  lib.setEvent(playBtn,['touchstart','mousedown'],function(){
    director.replaceScene(menuScene.transScenes["selectScene"]);
  });

  goog.events.listen(playBtn,['touchstart','mousedown'],function() {
    director.replaceScene(menuScene.transScenes["gameScene"]);

    gamescene = menuScene.transScenes["gameScene"];
    if(!gamescene.hasBoard)
      gamescene.boardHolder.appendChild(board.canvas);

    board.loadAnswers('assets/answers/answer1.js');
  });

  lib.setEvent(shopBtn,['touchstart','mousedown'],function(){
    director.replaceScene(menuScene.transScenes["shopScene"]);
  });

  lib.setEvent(highscoreBtn,['touchstart','mousedown'],function(){
    director.replaceScene(menuScene.transScenes["highscoreScene"]);
  });

  lib.setEvent(settingBtn,['touchstart','mousedown'],function(){
    director.replaceScene(menuScene.transScenes["settingScene"]);
  });

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

  var menuBtn = dr.GlossyButton.makeGlossyButton('menu',50,30);
  menuBtn.setPosition(0+30,0+20);
  var remainBtn = dr.GlossyButton.makeGlossyButton('9/30',30,30);
  remainBtn.setPosition(150,30);

  topBar.appendChild(tsprite);
  topBar.appendChild(menuBtn);
  topBar.appendChild(remainBtn);

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

  var submitBtn = dr.GlossyButton.makeGlossyButton("SUBMIT");
  submitBtn.setPosition(120 + 40,25);
  var clearBtn = dr.GlossyButton.makeGlossyButton("CLEAR",50,30);
  clearBtn.setPosition(60+25,10+ 15);
  var undoBtn = dr.GlossyButton.makeGlossyButton("UNDO",50,30);
  undoBtn.setPosition(185 + 50,10+ 15);


  funcBtnHolder.appendChild(fsprite);
  funcBtnHolder.appendChild(submitBtn);
  funcBtnHolder.appendChild(clearBtn);
  funcBtnHolder.appendChild(undoBtn);

  gamescene.appendChild(funcBtnHolder);


  var boardHolder = new lime.Layer();
  var board = new dr.Board(0,260,320,210);
  gamescene.boardHolder = boardHolder;
  gamescene.hasBoard = false;

  lib.loadjsfile('assets/ndollar.js',function() {
    board.init();
  });

  gamescene.appendChild(boardHolder);

  lib.setEvent(submitBtn,['touchstart','mousedown'],function() {
    board.submit();
  });
  lib.setEvent(clearBtn,['touchstart','mousedown'],function() {
    board.clearBoard();
  });
  lib.setEvent(menuBtn,['touchstart','mousedown'],function() {
    director.replaceScene(gamescene.transScenes['menuScene']);
  })
  lib.setEvent(remainBtn,['touchstart','mousedown'],function() {

  });
  return gamescene;
};

dr.Scene.makeSettingScene = function() {

};

dr.Scene.makeShopScene = function() {

};

dr.Scene.makeHighScoreScene = function() {

};
