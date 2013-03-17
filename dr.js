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

// entrypoint
dr.start = function(){
    //director
  dr.director = new lime.Director(document.body,320,480);
  dr.director.makeMobileWebAppCapable();

  var gamescene = new lime.Scene;

  var layer = new lime.Layer();
  var board = new dr.Board(320,220);
  var submitbtn = dr.makeGlossyButton('submit').setPosition(160,280);
  var clearbtn = dr.makeGlossyButton('clear').setPosition(160,360);

  dr.setEvent(submitbtn,'click',function() {
    board.submit();
  });
  dr.setEvent(clearbtn,'click',function() {
    board.clearBoard();
  });

  layer.appendChild(board.canvas);
  layer.appendChild(submitbtn);
  layer.appendChild(clearbtn);
  lib.loadjsfile('assets/ndollar.js',function() {
    board.init();
    board.loadAnswers('assets/answers/answer1.js');
  });

  gamescene.appendChild(layer);

  // set active scene
  dr.director.replaceScene(gamescene);
  window.gamescene = gamescene;
};

dr.isBrokenChrome = function(){
  return (/Chrome\/9\.0\.597/).test(goog.userAgent.getUserAgentString());
};

dr.setEvent = function(context,event,callback) {
  goog.events.listen(context,event,function() {
    if(this.clickStatus == "avail") {
      this.clickStatus = "unavail";
      lime.scheduleManager.callAfter(function() {
        this.clickStatus = "avail";
      },this,300);
      callback();
    }
  });
};


//dr maker

//make Button
dr.makeGlossyButton = function(lbl) {
  var btn = new dr.GlossyButton(lbl).setSize(160,30);
  return btn;
};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('dr.start', dr.start);
