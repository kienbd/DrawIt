goog.provide('lib');


lib.loadjsfile = function(filename){
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);
    if (typeof fileref!="undefined")
      document.getElementsByTagName("head")[0].appendChild(fileref);
};
