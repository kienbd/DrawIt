goog.provide('dr.Scene');

goog.require('lime');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.GlossyButton');
goog.require('lime.Sprite');
goog.require('lime.fill.Frame');
goog.require('lime.transitions.SlideInRight');
goog.require('lime.transitions.SlideIn');
goog.require('lime.transitions.Transition');
goog.require('lime.animation.RotateBy');
goog.require('lime.animation.MoveBy');
goog.require('lime.animation.Sequence');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.RotateTo');
goog.require('lime.transitions.Dissolve')

// components
goog.require('lib');
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
    director.replaceScene(menuScene.transScenes["gameScene"],lime.transitions.SlideInRight,0.7);

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

  var selectscene = new dr.Scene();

};

dr.Scene.makeGameScene = function(director) {
  var gamescene = new dr.Scene;

  compPosition = {
    quizHolder: new goog.math.Coordinate(0,0),
    menuBtn: new goog.math.Coordinate(20,10),
    remainBtn: new goog.math.Coordinate(150,15),
    quiz: new goog.math.Coordinate(160,110),
    nextBtn: new goog.math.Coordinate(10,85),
    prevBtn: new goog.math.Coordinate(290,85),
    funcBtnHolder: new goog.math.Coordinate(0,205),
    submitBtn: new goog.math.Coordinate(120+40,20),
    clearBtn: new goog.math.Coordinate(60+25,10+10),
    undoBtn: new goog.math.Coordinate(210+25,10+10),
    board: new goog.math.Coordinate(0,250)
  };

  compSize = {
    menuBtn: new goog.math.Size(50,30),
    remainBtn: new goog.math.Size(30,30),
    quiz: new goog.math.Size(240,180),
    nextBtn: new goog.math.Size(20,30),
    prevBtn: new goog.math.Size(20,30),
    submitBtn: new goog.math.Size(80,40),
    clearBtn: new goog.math.Size(50,30),
    undoBtn: new goog.math.Size(50,30),
    board: new goog.math.Size(320,220)

  };

  var menuBtn = dr.GlossyButton.makeGlossyButton('menu');
  menuBtn.setSize(compSize.menuBtn);
  menuBtn.setPosition(compPosition.menuBtn);

  var remainBtn = dr.GlossyButton.makeGlossyButton('9/30');
  remainBtn.setSize(compSize.remainBtn);
  remainBtn.setPosition(compPosition.remainBtn);

  var quizHolder = new lime.Layer();
  quizHolder.setPosition(compPosition.quizHolder);

  var quiz = new lime.Sprite().setFill("#D62EDB");
  quiz.setPosition(compPosition.quiz);
  quiz.setSize(compSize.quiz);

  var nextBtn = new lime.Sprite().setFill("#ADADDA").setAnchorPoint(0,0);
  nextBtn.setSize(compSize.nextBtn).setPosition(compPosition.nextBtn);
  var prevBtn = new lime.Sprite().setFill("#ADADDA").setAnchorPoint(0,0);
  prevBtn.setSize(compSize.prevBtn).setPosition(compPosition.prevBtn);

  var qsprite = new lime.Sprite().setFill("#8D2EDB").setAnchorPoint(0,0);
  qsprite.setSize(320,200);

  quizHolder.appendChild(qsprite);
  quizHolder.appendChild(quiz);
  quizHolder.appendChild(menuBtn);
  quizHolder.appendChild(remainBtn);
  quizHolder.appendChild(nextBtn);
  quizHolder.appendChild(prevBtn);

  gamescene.appendChild(quizHolder);


  var funcBtnHolder = new lime.Layer();
  funcBtnHolder.setPosition(compPosition.funcBtnHolder);

  fsprite = new lime.Sprite().setFill('#1BE0B5').setAnchorPoint(0,0);
  fsprite.setSize(320,40);

  var submitBtn = dr.GlossyButton.makeGlossyButton("SUBMIT",80,40);
  submitBtn.setPosition(compPosition.submitBtn);
  var clearBtn = dr.GlossyButton.makeGlossyButton("CLEAR",50,30);
  clearBtn.setPosition(compPosition.clearBtn);
  var undoBtn = dr.GlossyButton.makeGlossyButton("UNDO",50,30);
  undoBtn.setPosition(compPosition.undoBtn);


  funcBtnHolder.appendChild(fsprite);
  funcBtnHolder.appendChild(submitBtn);
  funcBtnHolder.appendChild(clearBtn);
  funcBtnHolder.appendChild(undoBtn);

  gamescene.appendChild(funcBtnHolder);


  var boardHolder = new lime.Layer();
  var board = new dr.Board(0,250,320,220);
  gamescene.boardHolder = boardHolder;
  gamescene.hasBoard = false;

  lib.loadjsfile('assets/ndollar.js',function() {
    board.init();
  });

  gamescene.appendChild(boardHolder);

  lib.setEvent(submitBtn,['touchstart','mousedown'],function() {
    result = board.submit();
    if(typeof result != "undefined") {
      if(result["Name"] == "A" && result["Score"] > 2) {
        // do smt
      } else
        quiz.runAction(lib.makeShakeAnimation(10));
    }
  });
  lib.setEvent(clearBtn,['touchstart','mousedown'],function() {
    board.clearBoard();
  });
  lib.setEvent(undoBtn,['touchstart','mousedown'],function() {
    board.undoStroke();
  });
  lib.setEvent(menuBtn,['touchstart','mousedown'],function() {
    director.replaceScene(gamescene.transScenes['menuScene'],lime.transitions.SlideIn,0.7);
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
