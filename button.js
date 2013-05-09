goog.provide('dr.Button');

goog.require('lime.Button');
goog.require('lime.Sprite');


dr.Button = function(sprite_sheet,w,h) {
  if(typeof h === 'undefined') {
    up_state = new lime.Sprite().setFill(new lime.fill.Frame(sprite_sheet,0,0,w.width,w.height)).setAnchorPoint(0,0);
    down_state = new lime.Sprite().setFill(new lime.fill.Frame(sprite_sheet,0,w.height,w.width,w.height)).setAnchorPoint(0,0);
    lime.Button.call(this,up_state,down_state);
  } else {
    up_state = new lime.Sprite().setFill(new lime.fill.Frame(sprite_sheet,0,0,w,h).setAnchorPoint(0,0));
    down_state = new lime.Sprite().setFill(new lime.fill.Frame(sprite_sheet,0,h,w,h).setAnchorPoint(0,0));
    lime.Button.call(this,up_state,down_state);
  }
  this.setAnchorPoint(0,0);
  this.clickStatus = "avail";
}

goog.inherits(dr.Button,lime.Button);



