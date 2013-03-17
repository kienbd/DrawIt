//set main namespace
goog.provide('dr');


//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.GlossyButton');
goog.require('lime.transitions.Dissolve');
goog.require('lib');

goog.require('lime');
goog.require('lime.Circle');
goog.require('lime.Sprite');
goog.require('lime.fill.Frame');
goog.require('lime.animation.KeyframeAnimation');

// components
goog.require('dr.Button');
goog.require('dr.Board');

// entrypoint
dr.start = function(){
  // lib.loadjsfile('assets/ndollar.js');

  //director
  dr.director = new lime.Director(document.body, dr.WIDTH, dr.HEIGHT);
  dr.director.makeMobileWebAppCapable();

  var gamescene = new lime.Scene;

  layer = new lime.Layer();
  gamescene.appendChild(layer);

  var cv = new dr.Board(320,220);
  layer.appendChild(cv.canvas);
  // set active scene
  dr.director.replaceScene(gamescene);
  window.gamescene = gamescene;
  lime.scheduleManager.callAfter(function(){
    cv.init();
    cv.loadAnswers('assets/answers/answer1.js');
  },null,100);

};

dr.makeButton = function(lbl) {
  var btn = new dr.Button(lbl).setSize(300,90);
  btn.clickStatus = "avail";
  return btn;
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


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('dr.start', dr.start);
