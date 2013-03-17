goog.provide('lib');


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
};
