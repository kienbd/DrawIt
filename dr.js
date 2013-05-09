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
  lib.loadPxLoader(function(){
    //director
    dr.director = new lime.Director(document.body);
    dr.director.setSize(dr.WIDTH,dr.HEIGHT);
    dr.director.makeMobileWebAppCapable();

    var loadingscene = new lime.Scene();

    // Gr3
    // loadingLayer = new lime.Layer();
    // loading = new lime.Sprite().setAnchorPoint(0,0).setSize(70,70);
    // loading.setPosition(108,170);

    // ent = new lime.Sprite();
    // ent.setFill('assets/G3.png');
    // ent.setSize(320,160);
    // ent.setPosition(160,220);
    // var production = new lime.Sprite();
    // production.setFill("assets/production.png");
    // production.setSize(320*0.75,160*0.75);
    // production.setPosition(160,280)

    // group3

    loadingLayer = new lime.Layer();
    loading = new lime.Sprite().setAnchorPoint(0,0).setSize(100,100);
    loading.setPosition(110,120);

    ent = new lime.Sprite();
    ent.setFill('assets/group3.png');
    ent.setSize(320*.8,160*0.8);
    ent.setPosition(160,260);


    var production = new lime.Sprite();
    production.setFill("assets/production.png");
    production.setSize(320*0.5,160*0.5);
    production.setPosition(160,300)


    var anim = new lime.animation.KeyframeAnimation();
    for(var r=0;r<6;r++){
      for(var c=0;c<10;c++){
        anim.addFrame(new lime.fill.Frame('assets/spinner_sheet.png',c*50,r*50,50,50));
      }
    }
    loading.runAction(anim);
    loadingLayer.appendChild(loading);
    loadingLayer.appendChild(ent);
    loadingLayer.appendChild(production);
    loadingscene.appendChild(loadingLayer);

    dr.director.replaceScene(loadingscene);

    var menuscene;
    var selectscene;
    var gamescene;
    var shopscene;
    var settingscene;
    lime.scheduleManager.callAfter(function() {
      menuscene = dr.Scene.makeMenuScene(dr.director);
      selectscene = dr.Scene.makeSelectScene(dr.director);
      shopscene = dr.Scene.makeShopScene(dr.director);
      gamescene = dr.Scene.makeGameScene(dr.director);
      settingscene = dr.Scene.makeSettingScene(dr.director);

      gamescene.transScenes["menuScene"] = menuscene;
      gamescene.transScenes["selectScene"] = selectscene;

      menuscene.transScenes["selectScene"] = selectscene;
      menuscene.transScenes["shopScene"] = shopscene;
      menuscene.transScenes["settingScene"] = settingscene;

      shopscene.transScenes["menuScene"] = menuscene;
      settingscene.transScenes["menuScene"] = menuscene;

      selectscene.transScenes["menuScene"] = menuscene;
      selectscene.transScenes["gameScene"] = gamescene;
      dr.director.replaceScene(menuscene);
    },dr.director,0);

    lib.setBackground('assets/background.png',320,480);

  });

};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('dr.start', dr.start);
