//set main namespace
goog.provide('dr');


//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.animation.KeyframeAnimation');

goog.require('lime');

// components
goog.require('lib');
goog.require('dr.Scene');

// entrypoint

dr.WIDTH = 320;
dr.HEIGHT = 480;

dr.start = function(){
    //director
  dr.director = new lime.Director(document.body);
  dr.director.setSize(dr.WIDTH,dr.HEIGHT);
  dr.director.makeMobileWebAppCapable();


  var loadingscene = new lime.Scene();
  loadingLayer = new lime.Layer();
  loading = new lime.Sprite().setAnchorPoint(0,0).setSize(100,100);
  loading.setPosition(110,150);
  lbl = new lime.Label().setText('LOADING').setFontFamily('Verdana').
    setFontColor('#c00').setFontSize(26).setFontWeight('bold').setSize(160,20);
  lbl.setPosition(160,280);
	var anim = new lime.animation.KeyframeAnimation();
	for(var r=0;r<6;r++){
	    for(var c=0;c<10;c++){
	        anim.addFrame(new lime.fill.Frame('assets/spinner_sheet.png',c*50,r*50,50,50));
	    }
	}
	loading.runAction(anim);
  loadingLayer.appendChild(loading);
  loadingLayer.appendChild(lbl);
  loadingscene.appendChild(loadingLayer);

  dr.director.replaceScene(loadingscene);

  lime.scheduleManager.callAfter(function() {
    var menuscene = dr.Scene.makeMenuScene(dr.director);
    dr.director.replaceScene(menuscene);
  },dr.director,3000);

  lib.setBackground('assets/background.png',320,480);
};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('dr.start', dr.start);
