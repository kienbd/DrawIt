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
goog.require('dr.Board');
goog.require('dr.Sprite');

// entrypoint
dr.start = function(){
    //director
  dr.director = new lime.Director(document.body, 320, 480);
  dr.director.makeMobileWebAppCapable();

  var gamescene = new lime.Scene;

  var btn = new dr.Button("assets/3-2.png",254,65).setPosition(200,200);
  var layer = new lime.Layer();
  var cv = new dr.Board(320,220);
  layer.appendChild(cv.canvas);
  lib.loadjsfile('assets/ndollar.js',function() {
    cv.init();
    cv.loadAnswers('assets/answers/answer1.js');
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
  var btn = new dr.GlossyButton(lbl).setSize(300,90);
  return btn;
};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('dr.start', dr.start);
