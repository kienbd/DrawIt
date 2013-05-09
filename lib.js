goog.provide('lib');

goog.require('lime');
goog.require('lime.animation.RotateBy');
goog.require('lime.animation.MoveBy');
goog.require('lime.animation.Sequence');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.RotateTo');
goog.require('lime.animation.MoveTo');
goog.require('lime.animation.Loop');


lib.loadjsfile = function loadScript(url, callback){
    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
          if(typeof callback != 'undefined')
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
    return script;
};

lib.isBrokenChrome = function(){
  return (/Chrome\/9\.0\.597/).test(goog.userAgent.getUserAgentString());
};

lib.setEvent = function(context,event,callback) {
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


lib.makeShakeAnimation = function(opt) {
  aniM = [];
  aniC = [];
  totalFrame = 30;
  for(i=0;i<totalFrame-1;i = i+2) {
    if(i%4 ==0 ) {
      aniM[i] = new lime.animation.MoveBy(opt,0).enableOptimizations();
      aniM[i+1] = new lime.animation.MoveBy(opt*-1,0).enableOptimizations();
    }
    else {
      aniM[i] = new lime.animation.MoveBy(opt*-1,0).enableOptimizations();
      aniM[i+1] = new lime.animation.MoveBy(opt,0).enableOptimizations();
    }
    aniM[i].setDuration(0.01);
    aniM[i+1].setDuration(0.01);
  }

  var true_ani = new lime.animation.Sequence(aniM).enableOptimizations();
  return true_ani;
};

lib.makeBubleAnimation = function(opt) {
  ani = [];
  totalFrame = 2;
  for(i=0;i<totalFrame;i++) {
    if(i%2==0) {
      ani[i] = new lime.animation.MoveBy(0,opt).enableOptimizations();
    } else {
      ani[i] = new lime.animation.MoveBy(0,opt*-1).enableOptimizations();
    }
    ani[i].setEasing(lime.animation.Easing.EASE);
    ani[i].setDuration(0.5);
  }

  var true_ani = new lime.animation.Loop(new lime.animation.Sequence(ani).enableOptimizations());
  return true_ani;
}

lib.setBackground = function(bkg_url,w,h) {
var css = 'body { background-image: url(' + bkg_url + ');' + 'background-repeat: no-repeat;background-position: 0 0;' + 'background-size: ' + w + 'px '+ h + 'px;',
    head = document.getElementsByTagName('head')[0],
    style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }


  head.appendChild(style);
}

lib.loadPxLoader = function(callback) {
  var arr =['PxLoader.js','PxLoaderImage.js','soundManager2.js','PxLoaderSound.js','PxLoaderVideo.js'];
  var len = arr.length;
  lib.loadjsfile('assets/js/pxloader/' + arr[0],function(){
    lib.loadjsfile('assets/js/pxloader/' + arr[1],function(){
      lib.loadjsfile('assets/js/pxloader/' + arr[2],function(){
        lib.loadjsfile('assets/js/pxloader/' + arr[3],function(){
          lib.loadjsfile('assets/js/pxloader/' + arr[4],function(){
            var loader = new PxLoader();

            var images = [
              'background.png','group3.png','production.png','icon.png','popup.png','spinner_sheet.png',
              'menu/logo.png','menu/logo1.png','menu/playBtn.png','menu/settingBtn.png','menu/shopBtn.png',
              'play/1.png','play/board.png','play/clearBtn.png','play/frame.png','play/menuBtn.png','play/nextBtn.png',
              'play/playLabel.png','play/prevBtn.png','play/star.png','play/submitBtn.png','play/undoBtn.png'
            ]
            for (var i = 0; i < images.length; i++) {
              // console.log(images[i]);
              loader.addImage('assets/'+ images[i]);
            }


            var sounds = ['assets/a.mp3']; // vi tri dau tien cua mang la theme sound
            // init soundmanager
            soundManager.url = 'soundManager2/';
            // soundManager.flashVersion = 9;
            soundManager.useHighPerformance = true;
            // soundManager.flashLoadTimeout = 500;

            // soundManager.ontimeout(function(status){
              soundManager.userHTML5Audio = true;
              soundManager.preferFlash = false;
              soundManager.reboot();
            // });

            soundManager.onready(function(){
              for (var i = 0; i < sounds.length; i++) {
                // console.log(sounds[i]);
                if (!soundManager.canPlayURL(sounds[i]))
                  continue;
                loader.addSound('sound'+i.toString(),sounds[i]);

              }
              loader.addCompletionListener(function() {
                callback();
              });
              loader.start();
            });

          });
        });
      });
    });
  });
}

lib.loopSound = function(sid) {
  window.setTimeout(function(){
    soundManager.play(sid,{
      onfinish: function(){
        lib.loopSound(sid);
      }
    });
  },1);
}
