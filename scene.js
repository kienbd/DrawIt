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
goog.require('dr.Game');


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
    playBtn: new goog.math.Coordinate(80,20),
    shopBtn: new goog.math.Coordinate(80,120),
    settingBtn: new goog.math.Coordinate(80,230)
  };

  var comSize = {
    logo: new goog.math.Size(320,160),
    menuBtn: new goog.math.Size(160,60)
  };
  var menuScene = new dr.Scene;

  var logoHolder = new lime.Layer();
  logo = new lime.Sprite();
  logo.setFill('assets/menu/logo.png').setAnchorPoint(0,0);
  logo.setSize(comSize.logo);

  logoHolder.appendChild(logo);

  var btnHolder = new lime.Layer().setPosition(comPosition.btnHolder);


  var playBtn = new dr.Button('assets/menu/playBtn.png',comSize.menuBtn);
  playBtn.setPosition(comPosition.playBtn);

  var shopBtn = new dr.Button('assets/menu/shopBtn.png',comSize.menuBtn);
  shopBtn.setPosition(comPosition.shopBtn);

  var settingBtn = new dr.Button('assets/menu/settingBtn.png',comSize.menuBtn);
  settingBtn.setPosition(comPosition.settingBtn);

  btnHolder.appendChild(playBtn);
  btnHolder.appendChild(shopBtn);
  btnHolder.appendChild(settingBtn);


  menuScene.appendChild(logoHolder);
  menuScene.appendChild(btnHolder);


  lib.setEvent(playBtn,['touchstart','mousedown'],function() {
    director.replaceScene(menuScene.transScenes["selectScene"],lime.transitions.SlideInRight,0.7);
  });

  lib.setEvent(shopBtn,['touchstart','mousedown'],function(){
    director.replaceScene(menuScene.transScenes["shopScene"]);
  });

  lib.setEvent(settingBtn,['touchstart','mousedown'],function(){
    director.replaceScene(menuScene.transScenes["settingScene"]);
  });

  return menuScene;

};

dr.Scene.makeSelectScene = function(director) {

  var selectScene = new dr.Scene();

  var comPosition = {
    topLayer: new goog.math.Coordinate(0,0),
    lbl: new goog.math.Coordinate(160,20),
    packHolder: new goog.math.Coordinate(0,40),
    funcBtn: new goog.math.Coordinate(0,400),
    pack1: new goog.math.Coordinate(15,20),
    pack2: new goog.math.Coordinate(115,20),
    pack3: new goog.math.Coordinate(215,20),
    goBtn: new goog.math.Coordinate(240,10),
    backBtn: new goog.math.Coordinate(20,10)
  };

  var comSize = {
    pack: new goog.math.Size(90,80),
    star: new goog.math.Size(20,20),
    goBtn: new goog.math.Size(60,40),
    backBtn: new goog.math.Size(50,30)
  };

  topLayer = new lime.Layer().setPosition(comPosition.topLayer);

  packHolder = new lime.Layer().setPosition(comPosition.packHolder);

  funcBtn = new lime.Layer().setPosition(comPosition.funcBtn);

  var lbl = new lime.Label().setText('PLAY').setFontFamily('Verdana').
    setFontColor('#c00').setFontSize(26).setFontWeight('bold').setSize(160,20);
  lbl.setPosition(comPosition.lbl);

  topLayer.appendChild(lbl);

  for(i=0;i<9;i++) {

    pack = new lime.Sprite().setAnchorPoint(0,0);
    col = i%3;
    row = Math.floor(i/3);
    pack.setFill('assets/play/frame.png').setSize(comSize.pack)
    pack.setPosition(15+(comSize.pack.width+10)*col,40+(comSize.pack.height+30)*row);
    goog.events.listen(pack,['touchstart','mousedown'],function() {
      director.replaceScene(selectScene.transScenes["gameScene"],lime.transitions.Dissolve,0.7);
      dr.Scene.reloadGameScene(selectScene.transScenes["gameScene"],'pack1');
    });

    star = new lime.Sprite();
    star.setFill('assets/play/star.png');
    star.setSize(comSize.star);
    star.setPosition(15+(comSize.pack.width+10)*col+ comSize.pack.width -10,40+(comSize.pack.height+30)*row+3+ comSize.pack.height - 20);
    lbl = new lime.Label().setFontFamily('Verdana').
      setFontColor('#c00').setFontSize(24).setFontWeight('bold').setSize(20,20);
    text = Math.floor(Math.random()*20) + 1;
    lbl.setText(text);
    lbl.setPosition(15+(comSize.pack.width+10)*col+ comSize.pack.width -34,40+(comSize.pack.height+30)*row+3+ comSize.pack.height - 20);
    star.setRotation(20);
    lbl.setRotation(10);


    packHolder.appendChild(pack);
    if(i>2)
      pack.setOpacity(0.3);
    else {
      cover = new lime.Sprite().setAnchorPoint(0,0);
      cover.setFill('assets/pack' + (i+1) + ".png");
      cover.setSize(50,40);
      cover.setPosition(15+(comSize.pack.width+10)*col+ comSize.pack.width/2-25,40+(comSize.pack.height+30)*row+3+ comSize.pack.height/2-25);
      packHolder.appendChild(cover);
      packHolder.appendChild(lbl);
      packHolder.appendChild(star);
    }
  }

  var backBtn = new dr.Button('assets/play/menuBtn.png',comSize.backBtn);
  backBtn.setPosition(comPosition.backBtn);

  funcBtn.appendChild(backBtn);

  selectScene.appendChild(topLayer);
  selectScene.appendChild(packHolder);
  selectScene.appendChild(funcBtn);


  goog.events.listen(backBtn,['touchstart','mousedown'],function() {
    director.replaceScene(selectScene.transScenes['menuScene'],lime.transitions.SlideIn,0.7);
  });

  return selectScene;
};

dr.Scene.makeGameScene = function(director) {
  var gamescene = new dr.Scene;

  comPosition = {
    quizHolder: new goog.math.Coordinate(0,0),
    menuBtn: new goog.math.Coordinate(0,0),
    star: new goog.math.Coordinate(280,15),
    quiz: new goog.math.Coordinate(52,47),
    quizFrame: new goog.math.Coordinate(40,35),
    prevBtn: new goog.math.Coordinate(10,105),
    nextBtn: new goog.math.Coordinate(290,105),
    funcBtnHolder: new goog.math.Coordinate(0,205),
    submitBtn: new goog.math.Coordinate(120,20),
    clearBtn: new goog.math.Coordinate(60,10+10),
    undoBtn: new goog.math.Coordinate(210,10+10),
    board: new goog.math.Coordinate(0,250)
  };

  var comSize = {
    menuBtn: new goog.math.Size(50,30),
    star: new goog.math.Size(30,30),
    quiz: new goog.math.Size(216,156),
    quizFrame: new goog.math.Size(240,180),
    nextBtn: new goog.math.Size(20,30),
    prevBtn: new goog.math.Size(20,30),
    submitBtn: new goog.math.Size(80,40),
    clearBtn: new goog.math.Size(50,30),
    undoBtn: new goog.math.Size(50,30),
    board: new goog.math.Size(320,220)
  };

  var menuBtn = new dr.Button('assets/play/menuBtn.png',comSize.menuBtn);
  menuBtn.setPosition(comPosition.menuBtn);

  var lbl = new lime.Label().setText('30').setFontFamily('Verdana').
    setFontColor('#BA9F27').setFontSize(26).setFontWeight('bold').setSize(40,30);
  lbl.setPosition(250,15);

  var star = new lime.Sprite();
  star.setFill('assets/play/star.png');
  star.setSize(comSize.star);
  star.setPosition(comPosition.star);

  var quizHolder = new lime.Layer();
  quizHolder.setPosition(comPosition.quizHolder);

  var nextBtn = new dr.Button("assets/play/nextBtn.png",comSize.nextBtn);
  nextBtn.setPosition(comPosition.nextBtn);
  var prevBtn = new dr.Button("assets/play/prevBtn.png",comSize.prevBtn);
  prevBtn.setPosition(comPosition.prevBtn);

  var quizFrame = new lime.Sprite().setAnchorPoint(0,0);
  quizFrame.setFill("assets/play/frame.png");
  quizFrame.setSize(comSize.quizFrame);
  quizFrame.setPosition(comPosition.quizFrame);

  var quiz = new lime.Sprite().setAnchorPoint(0,0);
  // quiz.setFill(game.currentQuiz().getQuestionFrame());
  quiz.setPosition(comPosition.quiz);
  quiz.setSize(comSize.quiz);
  gamescene.quiz = quiz;

  quizHolder.appendChild(quizFrame);
  quizHolder.appendChild(quiz);
  quizHolder.appendChild(menuBtn);
  quizHolder.appendChild(star);
  quizHolder.appendChild(lbl);
  quizHolder.appendChild(nextBtn);
  quizHolder.appendChild(prevBtn);

  gamescene.appendChild(quizHolder);


  var funcBtnHolder = new lime.Layer();
  funcBtnHolder.setPosition(comPosition.funcBtnHolder);

  var submitBtn = new dr.Button('assets/play/submitBtn.png',comSize.submitBtn);
  submitBtn.setPosition(comPosition.submitBtn);

  var clearBtn = new dr.Button('assets/play/clearBtn.png',comSize.clearBtn);
  clearBtn.setPosition(comPosition.clearBtn);

  var undoBtn = new dr.Button('assets/play/undoBtn.png',comSize.undoBtn);
  undoBtn.setPosition(comPosition.undoBtn);

  funcBtnHolder.appendChild(submitBtn);
  funcBtnHolder.appendChild(clearBtn);
  funcBtnHolder.appendChild(undoBtn);

  gamescene.appendChild(funcBtnHolder);

  var boardHolder = new lime.Layer();
  var board = new dr.Board(0,270,320,200);
  gamescene.board = board;
  gamescene.boardHolder = boardHolder;
  gamescene.hasBoard = false;
  lib.loadjsfile('assets/ndollar.js',function() {
    board.init();
  });

  gamescene.appendChild(boardHolder);

  var shakeAni = lib.makeShakeAnimation(10);
  goog.events.listen(shakeAni,lime.animation.Event.STOP,function(){
    quiz.setPosition(comPosition.quiz);
    quizFrame.setPosition(comPosition.quizFrame);
  });

  lib.setEvent(nextBtn,['touchstart','mousedown'],function() {
    gamescene.game.nextQuiz();
    refreshScence();
    board.clearBoard();
  });
  lib.setEvent(prevBtn,['touchstart','mousedown'],function() {
    gamescene.game.prevQuiz();
    refreshScence();
    board.clearBoard();
  });
  lib.setEvent(submitBtn,['touchstart','mousedown'],function() {
    result = board.submit();
    if(typeof result != "undefined") {
      if(result["Name"] == gamescene.game.currentQuiz().name && result["Score"] > 80) {
        gamescene.game.solveCurrentQuiz();
        refreshQuizFrame();
      } else
      quiz.runAction(shakeAni);
      quizFrame.runAction(shakeAni);
    } else
      quiz.runAction(shakeAni);
      quizFrame.runAction(shakeAni);
  });
  lib.setEvent(clearBtn,['touchstart','mousedown'],function() {
    board.clearBoard();
  });
  lib.setEvent(undoBtn,['touchstart','mousedown'],function() {
    board.undoStroke();
    refreshUndoButton();
  });
  lib.setEvent(menuBtn,['touchstart','mousedown'],function() {
    director.replaceScene(gamescene.transScenes['menuScene'],lime.transitions.SlideIn,0.7);
  });

  var refreshScence = function()
  {
    refreshQuizFrame();
    refreshQuizNavigatorButton();
    refreshUndoButton();
  }

  var refreshQuizFrame = function()
  {
    gamescene.game.isSolved(gamescene.game.currentID) == false ? quiz.setFill(gamescene.game.currentQuiz().getQuestionFrame()).setAnchorPoint(0,0) : quiz.setFill(gamescene.game.currentQuiz().getAnswerFrame()).setAnchorPoint(0,0);
    return quiz;
  }

  var refreshQuizNavigatorButton = function()
  {
    // co the disable prev button khi dang quiz dau tien hoac la next button khi dang o quiz cuoi
  }

  var refreshUndoButton = function()
  {
    // ko undo dc thi disable di
  }

  return gamescene;
};

dr.Scene.makeSettingScene = function() {

};

dr.Scene.makeShopScene = function() {

};

dr.Scene.reloadGameScene = function(gamescene,packname) {
  var game = new dr.Game(packname);
  if (typeof game != 'undefined') {
    if(!gamescene.hasBoard) {
      gamescene.boardHolder.appendChild(gamescene.board.canvas);
      gamescene.hasBoard = true;
    }
    gamescene.game = game;
    gamescene.board.loadAnswers(game.answers);
    gamescene.quiz.setFill(game.currentQuiz().getQuestionFrame());
  }
};
