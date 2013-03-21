goog.provide('dr.Quiz');

goog.require('lime');
goog.require('dr.Sprite');

dr.Quiz = function(link) {
  dr.Sprite.call(this,1,2,240,180);
  this.source = link;
  this.name = /assets\/question\/pack\d*\/(.*).png/.exec(link)[1];
}


goog.inherits(dr.Quiz,dr.Sprite);
