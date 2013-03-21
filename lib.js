goog.provide('lib');

goog.require('lime');
goog.require('lime.animation.RotateBy');
goog.require('lime.animation.MoveBy');
goog.require('lime.animation.Sequence');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.RotateTo');
goog.require('lime.animation.MoveTo');


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
  aniR = [];
  aniC = [];
  var agl = -0.2;
  totalFrame = 10;
  for(i=0;i<totalFrame-1;i++) {
    if(i%2 ==0 ) {
      aniM[i] = new lime.animation.MoveBy(opt,0);
      aniR[i] = new lime.animation.RotateTo(agl);
    }
    else {
      aniM[i] = new lime.animation.MoveBy(opt*-1,0);
      aniR[i] = new lime.animation.RotateTo(-agl);
    }
    aniM[i].setDuration(0.05);
    aniR[i].setDuration(0.05);
    aniC[i] = new lime.animation.Spawn(aniM[i],aniR[i]);
  }

  safe_aniR = new lime.animation.RotateTo(0).setDuration(0.01);
  if(totalFrame %2 ==0)
    safe_aniM = new lime.animation.MoveBy(opt*-1,0).setDuration(0.05);
  else
    safe_aniM = new lime.animation.MoveBy(opt).setDuration(0.05);
  safe_aniC = new lime.animation.Spawn(safe_aniR,safe_aniM);

  aniC.push(safe_aniC);
  var true_ani = new lime.animation.Sequence(aniC);
  return true_ani;
};


