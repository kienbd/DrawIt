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
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.ColorTo');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.Spawn')
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

 this.loaded = true;

};

goog.inherits(dr.Scene,lime.Scene);

dr.Scene.prototype.id = "dr.scene";

dr.Scene.makeMenuScene = function(director) {

  var comPosition = {
    logo: new goog.math.Coordinate(0,0),
    btnHolder: new goog.math.Coordinate(0,140),
    playBtn: new goog.math.Coordinate(80,20),
    settingBtn: new goog.math.Coordinate(80,120),
    aboutBtn: new goog.math.Coordinate(80,230)
  };

  var comSize = {
    logo: new goog.math.Size(320,160),
    menuBtn: new goog.math.Size(160,60)
  };
  var menuScene = new dr.Scene();

  var logoHolder = new lime.Layer();
  logo = new lime.Sprite();
  logo.setFill('assets/menu/logo.png').setAnchorPoint(0,0);
  logo.setSize(comSize.logo);

  logoHolder.appendChild(logo);

  var btnHolder = new lime.Layer().setPosition(comPosition.btnHolder);


  var playBtn = new dr.Button('assets/menu/playBtn.png',comSize.menuBtn);
  playBtn.setPosition(comPosition.playBtn);

  var aboutBtn = new dr.Button('assets/menu/aboutBtn.png',comSize.menuBtn);
  aboutBtn.setPosition(comPosition.aboutBtn);

  var settingBtn = new dr.Button('assets/menu/settingBtn.png',comSize.menuBtn);
  settingBtn.setPosition(comPosition.settingBtn);

  btnHolder.appendChild(playBtn);
  btnHolder.appendChild(settingBtn);
  btnHolder.appendChild(aboutBtn);


  menuScene.appendChild(logoHolder);
  menuScene.appendChild(btnHolder);


  lib.setEvent(playBtn,['touchstart','mousedown'],function() {
    if(menuScene.loaded) {
      lime.scheduleManager.callAfter(function() {
        menuScene.transScenes['selectScene'].loaded = false;
        director.replaceScene(menuScene.transScenes["selectScene"]);
        menuScene.transScenes['selectScene'].loaded = true;
      },null,250);
    }
  });

  lib.setEvent(aboutBtn,['touchstart','mousedown'],function(){

    lime.scheduleManager.callAfter(function() {
      director.replaceScene(menuScene.transScenes["aboutScene"]);
    },null,250);
  });

  lib.setEvent(settingBtn,['touchstart','mousedown'],function(){
    lime.scheduleManager.callAfter(function() {
      director.replaceScene(menuScene.transScenes["settingScene"]);
    },null,250);
  });

  return menuScene;

};

dr.Scene.makeSettingScene = function(director) {
  var settingScene = new dr.Scene();

  var comPosition = {
    menuBtn: new goog.math.Coordinate(0,5),
    volLbl: new goog.math.Coordinate(30,150),
    hintLbl: new goog.math.Coordinate(30,250),
    lbl: new goog.math.Coordinate(160,70)
  };

  var comSize = {
    menuBtn: new goog.math.Size(50,30),
    volLbl: new goog.math.Size(150,60),
    hintLbl: new goog.math.Size(150,60),
    switcher: new goog.math.Size(60,60),
    lbl: new goog.math.Size(225,87)
  };


  var lbl = new lime.Sprite();
  lbl.setFill('assets/setting/setting.png');
  lbl.setSize(comSize.lbl);
  lbl.setPosition(comPosition.lbl);

  menuBtn = new dr.Button('assets/play/menuBtn.png',comSize.menuBtn);
  menuBtn.setPosition(comPosition.menuBtn);

  var volLbl = new lime.Sprite();
  volLbl.setFill('assets/setting/volume.png').setSize(comSize.volLbl).setPosition(comPosition.volLbl).setAnchorPoint(0,0);

  vol_s = new lime.Sprite();
  if(window.localStorage.getItem("vol")) {
    vol_s.selected = JSON.parse(window.localStorage.getItem("vol"));
    if(vol_s.selected)
      vol_s.setFill('assets/setting/selected.png');
    else
      vol_s.setFill('assets/setting/select.png');
  }
  else {
    vol_s.setFill('assets/setting/selected.png');
    vol_s.selected = true;
    window.localStorage.setItem("vol",true);
  }
  vol_s.setSize(comSize.switcher).setPosition(220,150).setAnchorPoint(0,0);

  var hintLbl = new lime.Sprite();
  hintLbl.setFill('assets/setting/hint.png').setSize(comSize.hintLbl).setPosition(comPosition.hintLbl).setAnchorPoint(0,0);

  hint_s = new lime.Sprite();
  if(window.localStorage.getItem("hint")) {
    hint_s.selected = JSON.parse(window.localStorage.getItem("hint"));
    if(hint_s.selected)
      hint_s.setFill('assets/setting/selected.png');
    else
      hint_s.setFill('assets/setting/select.png');
  }
  else {
    hint_s.setFill('assets/setting/selected.png');
    hint_s.selected = true;
    window.localStorage.setItem("hint",true);
  }
  hint_s.setSize(comSize.switcher).setPosition(220,250).setAnchorPoint(0,0);

  var layout = new lime.Layer();
  layout.setPosition(0,0);
  layout.appendChild(lbl);
  layout.appendChild(menuBtn);
  layout.appendChild(volLbl);
  layout.appendChild(vol_s);
  layout.appendChild(hintLbl);
  layout.appendChild(hint_s);


  settingScene.appendChild(layout);

  lib.setEvent(menuBtn,['touchstart','mousedown'],function() {
    director.replaceScene(settingScene.transScenes["menuScene"]);
  });

  goog.events.listen(vol_s,['touchstart','mousedown'],function() {
    if(!vol_s.selected) {
      vol_s.selected = true;
      window.localStorage.setItem("vol",true);
      vol_s.setFill('assets/setting/selected.png');
    }
    else {
      vol_s.selected = false;
      window.localStorage.setItem("vol",false);
      vol_s.setFill('assets/setting/select.png');
    }
    // lib.toggleSound();
  });

  goog.events.listen(hint_s,['touchstart','mousedown'],function() {
    if(!hint_s.selected) {
      hint_s.selected = true;
      window.localStorage.setItem("hint",true);
      hint_s.setFill('assets/setting/selected.png');
    }
    else {
      hint_s.selected = false;
      window.localStorage.setItem("hint",false);
      hint_s.setFill('assets/setting/select.png');
    }
    // lib.toggleSound();
  });

  return settingScene;
};

dr.Scene.makeAboutScene = function(director) {
  var aboutScene = new dr.Scene();

  var comPosition = {
    menuBtn: new goog.math.Coordinate(0,5)
  };

  var comSize = {
    menuBtn: new goog.math.Size(50,30)
  };

  var menuBtn = new dr.Button('assets/play/menuBtn.png',comSize.menuBtn);
  menuBtn.setPosition(comPosition.menuBtn);

  var layout = new lime.Layer();
  layout.setPosition(0,0);
  layout.appendChild(menuBtn);

  aboutScene.appendChild(layout);


  lib.setEvent(menuBtn,['touchstart','mousedown'],function() {
    director.replaceScene(aboutScene.transScenes['menuScene']);
  });

  return aboutScene;

};


dr.Scene.makeSelectScene = function(director) {

  var selectScene = new dr.Scene();

  var comPosition = {
    topLayer: new goog.math.Coordinate(0,0),
    lbl: new goog.math.Coordinate(160,50),
    packHolder: new goog.math.Coordinate(0,60),
    funcBtn: new goog.math.Coordinate(0,5),
    pack1: new goog.math.Coordinate(15,20),
    pack2: new goog.math.Coordinate(115,20),
    pack3: new goog.math.Coordinate(215,20),
    goBtn: new goog.math.Coordinate(240,10),
    backBtn: new goog.math.Coordinate(0,0)
  };

  var comSize = {
    pack: new goog.math.Size(90,80),
    star: new goog.math.Size(20,20),
    lbl: new goog.math.Size(160,60),
    goBtn: new goog.math.Size(60,40),
    backBtn: new goog.math.Size(50,30)
  };

  topLayer = new lime.Layer().setPosition(comPosition.topLayer);

  packHolder = new lime.Layer().setPosition(comPosition.packHolder);

  funcBtn = new lime.Layer().setPosition(comPosition.funcBtn);

  selectScene.packes = [];

  var lbl = new lime.Sprite();
  lbl.setFill('assets/play/playLabel.png');
  lbl.setSize(comSize.lbl);
  lbl.setPosition(comPosition.lbl);

  topLayer.appendChild(lbl);

  for(i=0;i<9;i++) {

    pack = new lime.Sprite().setAnchorPoint(0,0);
    col = i%3;
    row = Math.floor(i/3);
    pack.setFill('assets/play/frame.png').setSize(comSize.pack)
    pack.setPosition(15+(comSize.pack.width+10)*col,40+(comSize.pack.height+30)*row);


    star = new lime.Sprite();
    star.setFill('assets/play/star.png');
    star.setSize(comSize.star);
    star.setPosition(15+(comSize.pack.width+10)*col+ comSize.pack.width -10,40+(comSize.pack.height+30)*row+3+ comSize.pack.height - 25);
    var lbl = new lime.Label().setFontFamily('Verdana').
      setFontColor('#fff93c').setFontSize(22).setFontWeight('bold').setSize(23,23).setAnchorPoint(0,0);
    if(!window.localStorage.getItem("pack"+(i+1)))
      window.localStorage.setItem("pack"+(i+1),0);
    text = window.localStorage.getItem("pack" + (i+1)) || "";
    lbl.setText(text);
    lbl.setPosition(15+(comSize.pack.width+10)*col+ comSize.pack.width -52,40+(comSize.pack.height+30)*row+3+ comSize.pack.height - 20);
    star.setRotation(40);
    lbl.setRotation(30);
    selectScene.packes.push(lbl);


    roll = new lime.Sprite();
    roll.setFill('assets/roll.png');
    roll.setSize(80,60);
    roll.setPosition(15+(comSize.pack.width+10)*col+ comSize.pack.width -45,40+(comSize.pack.height+30)*row+3+ comSize.pack.height - 38);


    packHolder.appendChild(pack);
    if(i>2)
      pack.setOpacity(0.3);
    else {
      goog.events.listen(pack,['touchstart','mousedown'],function() {
        if(selectScene.loaded) {
          selectScene.transScenes['gameScene'].loaded = false;
          director.replaceScene(selectScene.transScenes["gameScene"]);
          dr.Scene.reloadGameScene(selectScene.transScenes["gameScene"],'pack1');
          lime.scheduleManager.callAfter(function() {
            selectScene.transScenes['gameScene'].loaded = true;
          },null,150);
        }
      });
      cover = new lime.Sprite().setAnchorPoint(0,0);
      cover.setFill('assets/pack' + (i+1) + ".png");
      cover.setSize(80,70);
      cover.setPosition(15+(comSize.pack.width+10)*col+ comSize.pack.width/2-40,40+(comSize.pack.height+30)*row+3+ comSize.pack.height/2-38);
      packHolder.appendChild(cover);
      packHolder.appendChild(roll);
      packHolder.appendChild(star);
      packHolder.appendChild(lbl);
    }
  }

  var backBtn = new dr.Button('assets/play/menuBtn.png',comSize.backBtn);
  backBtn.setPosition(comPosition.backBtn);

  funcBtn.appendChild(backBtn);

  selectScene.appendChild(topLayer);
  selectScene.appendChild(packHolder);
  selectScene.appendChild(funcBtn);


  goog.events.listen(backBtn,['touchstart','mousedown'],function() {
    if(selectScene.loaded) {
      selectScene.transScenes['menuScene'].loaded = false;
      director.replaceScene(selectScene.transScenes['menuScene']);
      lime.scheduleManager.callAfter(function() {
        selectScene.transScenes['menuScene'].loaded = true;
      },null,150);
    }
  });

  return selectScene;
};

dr.Scene.makeGameScene = function(director) {
  var gamescene = new dr.Scene();

  comPosition = {
    quizHolder: new goog.math.Coordinate(0,0),
    menuBtn: new goog.math.Coordinate(0,5),
    star: new goog.math.Coordinate(295,15),
    quiz: new goog.math.Coordinate(52+216/2,47+156/2),
    quizFrame: new goog.math.Coordinate(40+240/2,35+180/2),
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
    board: new goog.math.Size(300,200)
  };

  var menuBtn = new dr.Button('assets/play/backBtn.png',comSize.menuBtn);
  menuBtn.setPosition(comPosition.menuBtn);

  var lbl = new lime.Label().setText('0').setFontFamily('Verdana').
    setFontColor('#c00').setFontSize(26).setFontWeight('bold').setSize(40,30);
  lbl.setPosition(260,15);

  var remain = new lime.Label().setText('3/3').setFontFamily('Verdana').
    setFontColor('#807226').setFontSize(26).setFontWeight('bold').setSize(40,30);
  remain.setPosition(160,20);
  gamescene.remain = remain;

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

  var quizFrame = new lime.Sprite();
  quizFrame.setFill("assets/play/frame.png");
  quizFrame.setSize(comSize.quizFrame);
  quizFrame.setPosition(comPosition.quizFrame);

  var quiz = new lime.Sprite();
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
  quizHolder.appendChild(remain);

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
  var board = new dr.Board(15,275,290,170);
  gamescene.board = board;
  gamescene.boardHolder = boardHolder;
  gamescene.hasBoard = false;
  gamescene.board.isReady = true;
  lib.loadjsfile('assets/ndollar.js',function() {
    gamescene.board.init();
  });

  gamescene.appendChild(gamescene.boardHolder);

  var popupHolder = new lime.Layer();
  popupHolder.setPosition(5,35);
  var popup = new lime.Sprite().setAnchorPoint(0,0);
  popup.setFill('assets/popup.png');
  popup.setSize(310,270).setPosition(0,0);


  var hintHolder = new lime.Layer();
  hintHolder.setPosition(10,265);
  var hint = new lime.Sprite().setAnchorPoint(0,0);
  hint.setSize(150,70).setPosition(0,0);
  hint.setFill('assets/hint.png');

  popup.setScale(0);
  popupHolder.appendChild(popup);
  hintHolder.appendChild(hint);
  gamescene.appendChild(popupHolder);
  gamescene.appendChild(hintHolder);

  gamescene.popup = popup;
  gamescene.hint = hint;

  var shakeAni = lib.makeShakeAnimation(10);
  var flipAni = new lime.animation.ColorTo('#000000');
  var bubleAni = new lib.makeBubleAnimation(10);


  var trueSound = soundManager.createSound({id:'true',url:'assets/true.mp3'});
  var wrongSound = soundManager.createSound({id:'wrong',url:'assets/wrong.mp3'});

  gamescene.bubleAni = bubleAni;

  hint.setHidden(true);
  bubleAni.addTarget(hint);
  shakeAni.addTarget(quiz);
  shakeAni.addTarget(quizFrame);

  goog.events.listen(shakeAni,lime.animation.Event.STOP,function(){
    quiz.setPosition(comPosition.quiz);
    quizFrame.setPosition(comPosition.quizFrame);
  });

  goog.events.listen(bubleAni,lime.animation.Event.STOP,function() {
    hint.setPosition(0,0);
  })


  goog.events.listen(hint,['touchstart','mousedown'],function() {
    bubleAni.stop();
    lime.scheduleManager.callAfter(function() {
      hint.setHidden(true);
     },null,20);
  });

  lib.setEvent(nextBtn,['touchstart','mousedown'],function() {
    if (gamescene.game.nextQuiz() == true) {
      refreshScene();
      gamescene.board.clearBoard();
    }
  });
  lib.setEvent(prevBtn,['touchstart','mousedown'],function() {
    if (gamescene.game.prevQuiz() == true) {
      refreshScene();
      gamescene.board.clearBoard();
    }
  });
  lib.setEvent(submitBtn,['touchstart','mousedown'],function() {
    if(gamescene.board.isReady) {
      result = gamescene.board.submit();
      if(typeof result != "undefined") {
        if(result["Name"] == gamescene.game.currentQuiz().name && result["Score"] > 80) {
          if(JSON.parse(window.localStorage.getItem('vol')))
            soundManager.play('assets/true.mp3',{});
          gamescene.game.solveCurrentQuiz(3); //3 is score player got
          gamescene.board.isReady = false;
          nextBtn.clickStatus = "unavail";
          prevBtn.clickStatus = "unavail";
          refreshScore();
          gamescene.board.clearBoard();
          aniC = new lime.animation.ColorTo('#000000');
          aniC.setDuration(1);
          quiz.runAction(aniC);
          goog.events.listenOnce(aniC,lime.animation.Event.STOP,function(){
            quiz.setFill(gamescene.game.currentQuiz().getAnswerFrame());
            //auto change quiz
            lime.scheduleManager.callAfter(function() {
              gamescene.game.nextQuiz();
              refreshScene();
              nextBtn.clickStatus = "avail";
              prevBtn.clickStatus = "avail";
              gamescene.board.isReady = true;
            },null,2000);
          });
        } else {
          if(gamescene.hint.getHidden() || !JSON.parse(window.localStorage.getItem('hint'))) {
            if(JSON.parse(window.localStorage.getItem('vol')))
              soundManager.play('assets/wrong.mp3',{});

              shakeAni.play();
              // goog.events.listenOnce(shakeAni,lime.animation.Event.STOP,function(){
              gamescene.board.isReady = true;
              // },null,0)
          }
        }
      } else {
        if(gamescene.hint.getHidden() || !JSON.parse(window.localStorage.getItem('hint'))) {

          soundManager.play('assets/wrong.mp3',{});
          shakeAni.play();
          // goog.events.listenOnce(shakeAni,lime.animation.Event.STOP,function(){
          gamescene.board.isReady = true;
          // },null,0)
        }
      }
    }
  });
  lib.setEvent(clearBtn,['touchstart','mousedown'],function() {
    gamescene.board.clearBoard();
  });
  lib.setEvent(undoBtn,['touchstart','mousedown'],function() {
    gamescene.board.undoStroke();
    refreshUndoButton();
  });
  lib.setEvent(menuBtn,['touchstart','mousedown'],function() {
    if(gamescene.loaded) {
      gamescene.transScenes['selectScene'].loaded = false;
      gamescene.transScenes['selectScene'].packes.forEach(function(e,i) {
        e.setText(window.localStorage.getItem("pack"+(i+1)) || "");
      });
      director.replaceScene(gamescene.transScenes['selectScene']);
      gamescene.transScenes['selectScene'].loaded = true;
    }
  });

  goog.events.listen(remain,['touchstart','mousedown'],function() {
    if(popup.getScale().x == 0) {
      remain.setFontColor('#FA7725');
      popup.setScale(1);
      gamescene.game.allQuiz.forEach(function(e,i) {
        if(gamescene.game.isSolved(i)) {
          popup.getChildAt(i).setOpacity(0.2);
        }
      });
    } else {
      remain.setFontColor("#807226");
      popup.setScale(0);
    }
  })


  // just refresh without any action
  var refreshScene = function()
  {
    refreshQuizFrame();
    refreshQuizNavigatorButton();
    refreshUndoButton();
    refreshScore();
    refreshHint();
    gamescene.board.clearBoard();
    refreshRemain();
  }
  gamescene.refreshScene = refreshScene;

  var refreshScore = function() {
    lbl.setText(gamescene.game.score);
    if(window.localStorage.getItem(gamescene.game.name)) {
      if(JSON.parse(window.localStorage.getItem(gamescene.name)) < gamescene.game.score)
        window.localStorage.setItem(gamescene.game.name,gamescene.game.score);
    }
  }

  var refreshQuizFrame = function()
  {
    if(gamescene.game.isSolved(gamescene.game.currentID) == false ) {
      quiz.setFill(gamescene.game.currentQuiz().getQuestionFrame());
    }
    else {
      quiz.setFill(gamescene.game.currentQuiz().getAnswerFrame());
    }
    return quiz;
  }

  var refreshQuizNavigatorButton = function()
  {
    if (typeof gamescene.game.canNextQuiz() == 'undefined')
      nextBtn.setHidden(true);
    else nextBtn.setHidden(false);

    if (typeof gamescene.game.canPrevQuiz() == 'undefined')
      prevBtn.setHidden(true);
    else prevBtn.setHidden(false);
    // co the disable prev button khi dang quiz dau tien hoac la next button khi dang o quiz cuoi
  }

  var refreshUndoButton = function()
  {
    // ko undo dc thi disable di
  }

  var refreshHint = function() {
    left = gamescene.game.totalQuiz - gamescene.game.solvedQuizzes.length;

    if(JSON.parse(window.localStorage.getItem('hint'))) {
      if(left > 0) {
        gamescene.bubleAni.play();
        gamescene.hint.setHidden(false);
      }
    } else
      gamescene.hint.setHidden(true);
  }

  var refreshRemain = function() {
    left = gamescene.game.totalQuiz - gamescene.game.solvedQuizzes.length;
    remain.setText(left + "/3");
  }

  return gamescene;
};

dr.Scene.reloadGameScene = function(gamescene,packname) {
  var game = new dr.Game(packname);
  window.a = game;
  if (typeof game != 'undefined') {
    if(!gamescene.hasBoard) {
      gamescene.boardHolder.appendChild(gamescene.board.canvas);
      gamescene.hasBoard = true;
    }
    gamescene.game = game;
    gamescene.board.clearBoard();
    gamescene.board.loadAnswers(game.answers);
    gamescene.board.isReady = true;
    gamescene.refreshScene();

    gamescene.popup.removeAllChildren();
    gamescene.game.allQuiz.forEach(function(q,i) {
      pack = new lime.Sprite().setAnchorPoint(0,0);
      col = i%3;
      row = Math.floor(i/3);
      pack.setFill('assets/play/frame.png').setSize(90,70);
      pack.setPosition(10+(90+10)*col,20+(70+15)*row);
      console.log(q.getQuestionFrame());
      q_image = new lime.Sprite().setAnchorPoint(0,0);
      q_image.setSize(80,60).setFill(q.getQuestionFrame());
      q_image.setPosition(5,5);
      gamescene.popup.appendChild(pack);
      pack.appendChild(q_image);
      goog.events.listen(pack,['touchstart','mousedown'],function(e){
        gamescene.game.changeQuiz(i);
        gamescene.refreshScene();
        gamescene.remain.setFontColor("#807226");
        gamescene.popup.setScale(0);
      },false,i);
    });
    // gamescene.quiz.setFill(game.currentQuiz().getQuestionFrame());
  }
};
