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

  var playBtn = new lime.Sprite();
  playBtn.setFill('assets/menu/playBtn.png').setAnchorPoint(0,0);
  playBtn.setSize(comSize.menuBtn);
  playBtn.setPosition(comPosition.playBtn);

  var shopBtn = new lime.Sprite();
  shopBtn.setFill('assets/menu/shopBtn.png').setAnchorPoint(0,0);
  shopBtn.setSize(comSize.menuBtn);
  shopBtn.setPosition(comPosition.shopBtn)

  var settingBtn = new lime.Sprite();
  settingBtn.setFill('assets/menu/settingBtn.png').setAnchorPoint(0,0);
  settingBtn.setSize(comSize.menuBtn);
  settingBtn.setPosition(comPosition.settingBtn);

  btnHolder.appendChild(playBtn);
  btnHolder.appendChild(shopBtn);
  btnHolder.appendChild(settingBtn);


  menuScene.appendChild(logoHolder);
  menuScene.appendChild(btnHolder);


  goog.events.listen(playBtn,['touchstart','mousedown'],function() {
    selectScene = dr.Scene.makeSelectScene(director);
    menuScene.transScenes["selectScene"] = selectScene;
    selectScene.transScenes["menuScene"] = menuScene;
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

  selectScene.appendChild(topLayer);
  selectScene.appendChild(packHolder);
  selectScene.appendChild(funcBtn);


  goog.events.listen(goBtn,['touchstart','mousedown'],function() {
    gameScene = dr.Scene.makeGameScene(director);
    selectScene.transScenes["gameScene"] = gameScene;
    gameScene.transScenes["selectScene"] = selectScene;
    director.replaceScene(selectScene.transScenes["gameScene"],lime.transitions.Dissolve,0.7);
  });

  goog.events.listen(backBtn,['touchstart','mousedown'],function() {
    director.replaceScene(selectScene.transScenes['menuScene'],lime.transitions.SlideIn,0.7);
  });

  return selectScene;
};

dr.Scene.makeGameScene = function(director) {
  var gamescene = new dr.Scene;

  var game = new dr.Game('pack1');

  comPosition = {
    quizHolder: new goog.math.Coordinate(0,0),
    menuBtn: new goog.math.Coordinate(20,10),
    remainBtn: new goog.math.Coordinate(150,15),
    quiz: new goog.math.Coordinate(40,30),
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
    remainBtn: new goog.math.Size(30,30),
    quiz: new goog.math.Size(240,180),
    nextBtn: new goog.math.Size(20,30),
    prevBtn: new goog.math.Size(20,30),
    submitBtn: new goog.math.Size(80,40),
    clearBtn: new goog.math.Size(50,30),
    undoBtn: new goog.math.Size(50,30),
    board: new goog.math.Size(320,220)
  };

  var menuBtn = new lime.Sprite();
  menuBtn.setFill('assets/play/menuBtn.png');
  menuBtn.setSize(comSize.menuBtn);
  menuBtn.setPosition(comPosition.menuBtn);

  var remainBtn = new lime.Sprite();
  remainBtn.setFill('assets/play/remain.png');
  remainBtn.setSize(comSize.remainBtn);
  remainBtn.setPosition(comPosition.remainBtn);

  var quizHolder = new lime.Layer();
  quizHolder.setPosition(comPosition.quizHolder);

  var nextBtn = new lime.Sprite().setFill("assets/play/nextBtn.png").setAnchorPoint(0,0);
  nextBtn.setSize(comSize.nextBtn).setPosition(comPosition.nextBtn);
  var prevBtn = new lime.Sprite().setFill("assets/play/prevBtn.png").setAnchorPoint(0,0);
  prevBtn.setSize(comSize.prevBtn).setPosition(comPosition.prevBtn);

  var quiz = new lime.Sprite().setAnchorPoint(0,0);
  quiz.setFill(game.currentQuiz().getQuestionFrame());
  quiz.setPosition(comPosition.quiz);
  quiz.setSize(comSize.quiz);

  quizHolder.appendChild(quiz);
  quizHolder.appendChild(menuBtn);
  quizHolder.appendChild(remainBtn);
  quizHolder.appendChild(nextBtn);
  quizHolder.appendChild(prevBtn);

  gamescene.appendChild(quizHolder);


  var funcBtnHolder = new lime.Layer();
  funcBtnHolder.setPosition(comPosition.funcBtnHolder);

  var submitBtn = new lime.Sprite().setFill('assets/play/submitBtn.png').setAnchorPoint(0,0);
  submitBtn.setSize(comSize.submitBtn);
  submitBtn.setPosition(comPosition.submitBtn);
  var clearBtn = new lime.Sprite().setFill('assets/play/clearBtn.png').setAnchorPoint(0,0);
  clearBtn.setSize(comSize.clearBtn);
  clearBtn.setPosition(comPosition.clearBtn);
  var undoBtn = new lime.Sprite().setFill('assets/play/undoBtn.png').setAnchorPoint(0,0);
  undoBtn.setSize(comSize.undoBtn);
  undoBtn.setPosition(comPosition.undoBtn);


  submitBtn.clickStatus = "avail";
  clearBtn.clickStatus = "avail";
  undoBtn.clickStatus = "avail";


  funcBtnHolder.appendChild(submitBtn);
  funcBtnHolder.appendChild(clearBtn);
  funcBtnHolder.appendChild(undoBtn);

  gamescene.appendChild(funcBtnHolder);

  var boardHolder = new lime.Layer();
  var board = new dr.Board(0,270,320,200);
  gamescene.boardHolder = boardHolder;
  // gamescene.hasBoard = false;
  boardHolder.appendChild(board.canvas);
  lib.loadjsfile('assets/ndollar.js',function() {
    board.init();
    board.loadAnswers(game.answers);
  });

  gamescene.appendChild(boardHolder);

  var shakeAni = lib.makeShakeAnimation(10);
  goog.events.listen(shakeAni,lime.animation.Event.STOP,function(){
    quiz.setPosition(comPosition.quiz);
  });

  lib.setEvent(nextBtn,['touchstart','mousedown'],function() {
    game.nextQuiz();
    refreshScence();
    board.clearBoard();
  });
  lib.setEvent(prevBtn,['touchstart','mousedown'],function() {
    game.prevQuiz();
    refreshScence();
    board.clearBoard();
  });
  lib.setEvent(submitBtn,['touchstart','mousedown'],function() {
    result = board.submit();
    if(typeof result != "undefined") {
      if(result["Name"] == "A" && result["Score"] > 80) {
        game.solveCurrentQuiz();
        refreshQuizFrame();
      } else
      quiz.runAction(shakeAni);
    }
  });
  lib.setEvent(clearBtn,['touchstart','mousedown'],function() {
    board.clearBoard();
  });
  lib.setEvent(undoBtn,['touchstart','mousedown'],function() {
    board.undoStroke();
    refreshUndoButton();
  });
  lib.setEvent(menuBtn,['touchstart','mousedown'],function() {
    director.replaceScene(gamescene.transScenes['selectScene'],lime.transitions.SlideIn,0.7);
  })
  lib.setEvent(remainBtn,['touchstart','mousedown'],function() {

  });

  var refreshScence = function()
  {
    refreshQuizFrame();
    refreshQuizNavigatorButton();
    refreshUndoButton();
  }

  var refreshQuizFrame = function()
  {
    game.isSolved(game.currentID) == false ? quiz.setFill(game.currentQuiz().getQuestionFrame()).setAnchorPoint(0,0) : quiz.setFill(game.currentQuiz().getAnswerFrame()).setAnchorPoint(0,0)
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
