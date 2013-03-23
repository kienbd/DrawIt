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

  var comPosition = {
    logo: new goog.math.Coordinate(0,0),
    btnHolder: new goog.math.Coordinate(0,160),
    playBtn: new goog.math.Coordinate(80,10),
    shopBtn: new goog.math.Coordinate(80,80),
    highscoreBtn: new goog.math.Coordinate(80,150),
    settingBtn: new goog.math.Coordinate(80,220)
  };

  var comSize = {
    logo: new goog.math.Size(320,160),
    menuBtn: new goog.math.Size(160,60)
  };
  var menuScene = new dr.Scene;

  var logoHolder = new lime.Layer();
  logo = new lime.Sprite();
  logo.setFill('#DE8509').setAnchorPoint(0,0);
  logo.setSize(comSize.logo);

  logoHolder.appendChild(logo);


  var btnHolder = new lime.Layer().setPosition(comPosition.btnHolder);
  btns = new lime.Sprite();
  btns.setFill('#9E05A6').setAnchorPoint(0,0);
  btns.setSize(320,300);
  btns.setPosition(0,0);

  var playBtn = new lime.Sprite();
  playBtn.setFill('#97DE09').setAnchorPoint(0,0);
  playBtn.setSize(comSize.menuBtn);
  playBtn.setPosition(comPosition.playBtn);

  var shopBtn = new lime.Sprite();
  shopBtn.setFill('#97DE09').setAnchorPoint(0,0);
  shopBtn.setSize(comSize.menuBtn);
  shopBtn.setPosition(comPosition.shopBtn)

  var highscoreBtn = new lime.Sprite();
  highscoreBtn.setFill('#97DE09').setAnchorPoint(0,0);
  highscoreBtn.setSize(comSize.menuBtn);
  highscoreBtn.setPosition(comPosition.highscoreBtn)

  var settingBtn = new lime.Sprite();
  settingBtn.setFill('#97DE09').setAnchorPoint(0,0);
  settingBtn.setSize(comSize.menuBtn);
  settingBtn.setPosition(comPosition.settingBtn);

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
    director.replaceScene(menuScene.transScenes["selectScene"],lime.transitions.SlideInRight,0.7);
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

dr.Scene.makeSelectScene = function(director) {

  var selectscene = new dr.Scene();

  var comPosition = {
    topLayer: new goog.math.Coordinate(0,0),
    lbl: new goog.math.Coordinate(160,10),
    packHolder: new goog.math.Coordinate(0,40),
    funcBtn: new goog.math.Coordinate(0,420),
    pack1: new goog.math.Coordinate(15,20),
    pack2: new goog.math.Coordinate(115,20),
    pack3: new goog.math.Coordinate(215,20),
    goBtn: new goog.math.Coordinate(240,10),
    backBtn: new goog.math.Coordinate(20,10)
  };

  var comSize = {
    pack: new goog.math.Size(90,70),
    goBtn: new goog.math.Size(60,40),
    backBtn: new goog.math.Size(60,40)
  };

  topLayer = new lime.Layer().setPosition(0,0);

  packHolder = new lime.Layer().setPosition(0,40);

  funcBtn = new lime.Layer().setPosition(0,420);

  var lbl = new lime.Label().setText('PLAY').setFontFamily('Verdana').
    setFontColor('#c00').setFontSize(26).setFontWeight('bold').setSize(160,20);
  lbl.setPosition(comPosition.lbl);

  topLayer.appendChild(lbl);

  pack1 = new lime.Sprite().setAnchorPoint(0,0);
  pack1.setFill('#D6AE81').setPosition(comPosition.pack1).setSize(comSize.pack);

  pack2 = new lime.Sprite().setAnchorPoint(0,0);
  pack2.setFill('#D5ADE1').setPosition(comPosition.pack2).setSize(comSize.pack);

  pack3 = new lime.Sprite().setAnchorPoint(0,0);
  pack3.setFill('#DEA10F').setPosition(comPosition.pack3).setSize(comSize.pack);

  psprite = new lime.Sprite().setAnchorPoint(0,0);
  psprite.setFill('#DEEAFA').setPosition(0,0).setSize(320,380);

  packHolder.appendChild(psprite);
  packHolder.appendChild(pack1);
  packHolder.appendChild(pack2);
  packHolder.appendChild(pack3);

  goBtn = new lime.Sprite().setAnchorPoint(0,0);
  goBtn.setFill("#DADADF").setPosition(comPosition.goBtn).setSize(comSize.goBtn);
  backBtn = new lime.Sprite().setAnchorPoint(0,0);
  backBtn.setFill("#DADADF").setPosition(comPosition.backBtn).setSize(comSize.backBtn);

  fsprite = new lime.Sprite().setAnchorPoint(0,0);
  fsprite.setFill('#F0F6F1').setPosition(0,0).setSize(320,60);

  funcBtn.appendChild(fsprite);
  funcBtn.appendChild(goBtn);
  funcBtn.appendChild(backBtn);

  selectscene.appendChild(topLayer);
  selectscene.appendChild(packHolder);
  selectscene.appendChild(funcBtn);


  goog.events.listen(goBtn,['touchstart','mousedown'],function() {
    director.replaceScene(selectscene.transScenes["gameScene"],lime.transitions.Dissolve,0.7);

    gamescene = selectscene.transScenes["gameScene"];
    if(!gamescene.hasBoard) {
      gamescene.boardHolder.appendChild(board.canvas);
      gamescene.hasBoard = true;
    }

    board.loadAnswers('assets/answers/answer1.js');
  });

  goog.events.listen(backBtn,['touchstart','mousedown'],function() {
    director.replaceScene(selectscene.transScenes['menuScene'],lime.transitions.SlideIn,0.7);
  });

  return selectscene;
};

dr.Scene.makeGameScene = function(director) {
  var gamescene = new dr.Scene;

  var comPosition = {
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

  var comSize = {
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
  menuBtn.setSize(comSize.menuBtn);
  menuBtn.setPosition(comPosition.menuBtn);

  var remainBtn = dr.GlossyButton.makeGlossyButton('9/30');
  remainBtn.setSize(comSize.remainBtn);
  remainBtn.setPosition(comPosition.remainBtn);

  var quizHolder = new lime.Layer();
  quizHolder.setPosition(comPosition.quizHolder);

  var quiz = new lime.Sprite().setFill("#D62EDB");
  quiz.setPosition(comPosition.quiz);
  quiz.setSize(comSize.quiz);

  var nextBtn = new lime.Sprite().setFill("#ADADDA").setAnchorPoint(0,0);
  nextBtn.setSize(comSize.nextBtn).setPosition(comPosition.nextBtn);
  var prevBtn = new lime.Sprite().setFill("#ADADDA").setAnchorPoint(0,0);
  prevBtn.setSize(comSize.prevBtn).setPosition(comPosition.prevBtn);

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
  funcBtnHolder.setPosition(comPosition.funcBtnHolder);

  fsprite = new lime.Sprite().setFill('#1BE0B5').setAnchorPoint(0,0);
  fsprite.setSize(320,40);

  var submitBtn = dr.GlossyButton.makeGlossyButton("SUBMIT",80,40);
  submitBtn.setPosition(comPosition.submitBtn);
  var clearBtn = dr.GlossyButton.makeGlossyButton("CLEAR",50,30);
  clearBtn.setPosition(comPosition.clearBtn);
  var undoBtn = dr.GlossyButton.makeGlossyButton("UNDO",50,30);
  undoBtn.setPosition(comPosition.undoBtn);


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
      if(result["Name"] == "A" && result["Score"] > 90) {
        // do smt
      } else
      quiz.runAction(lib.makeShakeAnimation(6));
    }
      quiz.setPosition(comPosition.quiz);
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
