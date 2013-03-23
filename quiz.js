goog.provide('dr.Quiz');

goog.require('lime');
goog.require('dr.Sprite');

dr.Quiz = function(link) {
  lime.Sprite.call(this);
  this.source = link;
  this.name = /assets\/pack\d*\/(.*).png/.exec(link)[1];
  window.b = this;
}

dr.Quiz.width = 290;
dr.Quiz.height = 180;

goog.inherits(dr.Quiz,dr.Sprite);

dr.Quiz.prototype.getQuestionFrame = function()
{
  return new lime.fill.Frame(this.source,0,0,dr.Quiz.width,dr.Quiz.height);
}

dr.Quiz.prototype.getAnswerFrame = function()
{
  return new lime.fill.Frame(this.source,dr.Quiz.width*1,0,dr.Quiz.width,dr.Quiz.height);
}
