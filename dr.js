//set main namespace
goog.provide('dr');


//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.GlossyButton');
goog.require('lime.transitions.Dissolve');
goog.require('lib');

// components
goog.require('dr.Button');

// entrypoint
dr.start = function(){

	dr.director = new lime.Director(document.body,1024,768);
	dr.director.makeMobileWebAppCapable();

  lib.loadjsfile("assets/ndollar.js");

  var scene = new lime.Scene();
  var layer = new lime.Layer().setPosition(512,0);

	if(dr.isBrokenChrome()) layer.setRenderer(lime.Renderer.CANVAS);

  var btn  = dr.makeButton('Play').setPosition(400,400);
  window.test = btn;

  dr.setEvent(btn,'click',function() {
    console.log("dasdsa");
  });

  layer.appendChild(btn);

  scene.appendChild(layer);

  dr.director.replaceScene(scene);

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
