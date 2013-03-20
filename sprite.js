goog.provide('dr.Sprite');

goog.require('lime.Sprite');

//Constructor

dr.Sprite = function(sprite_sheet,col,row,w,h) {
  lime.Sprite.call(this);
  //lime.fill.Frame('img',x,y,w,h);
  frame = new lime.fill.Frame(sprite_sheet,0,0,w,h);
  this.setFill(frame);
  this.setAnchorPoint(0,0);
  this.offset = {width: w,height: h};
  this.url = sprite_sheet;
  this.col = col;
  this.row = row;
  this.totalFrame = col*row;
  this.currentFrame = 0;
  this.clickStatus = "avail";
}

goog.inherits(dr.Sprite,lime.Sprite);

dr.Sprite.prototype.id = "dr.sprite";

dr.Sprite.prototype.nextFrame = function() {
  this.currentFrame = this.currentFrame + 1;
  if(this.currentFrame == this.totalFrame)
    this.currentFrame = 0;
  col = this.currentFrame%this.col;
  row = Math.floor(this.currentFrame/this.col);
  y = this.offset.height * row;
  x = this.offset.width * col;
  this.setFill(new lime.fill.Frame(this.url,x,y,this.offset.width,this.offset.height));
}

