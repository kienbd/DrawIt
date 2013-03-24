goog.provide('dr.Game');

goog.require('lime');
goog.require('dr.Quiz');

dr.Game = function(packName) {
  this.allQuiz = [];
  for(i=0;i<dr.Game.QUIZNUM;i++) {
    var quiz = new dr.Quiz("assets/" + packName + "/quiz" + i + ".png");
    this.allQuiz.push(quiz);
  }
  this.totalQuiz = dr.Game.QUIZNUM;
  this.currentID = 0;
  this.solvedQuizzes = [];
  this.answers = "assets/" +packName + "/answers" + ".js";
};


dr.Game.QUIZNUM = 3;

dr.Game.prototype.changeQuiz = function(i) {
  this.currentID = i;
};


dr.Game.prototype.nextQuiz = function() {
  if (this.currentID < dr.Game.QUIZNUM - 1)
    this.currentID++;
  if (this.isSolved(this.currentID) == true)
    this.nextQuiz();
};

dr.Game.prototype.prevQuiz = function() {
  if (this.currentID > 0)
    this.currentID--;
  if (this.isSolved(this.currentID) == true)
    this.prevQuiz();
};

dr.Game.prototype.currentQuiz = function() {
  return this.allQuiz[this.currentID];
};

dr.Game.prototype.isSolved = function(i) {
  if(this.solvedQuizzes.indexOf(i) == -1)
    return false;
  else
    return true;
};

dr.Game.prototype.solveCurrentQuiz = function() {
  this.solvedQuizzes.push(this.currentID);
}

dr.Game.prototype.unSolvedQuizzes = function() {
  var un = [];
  for(i=0;i<totalQuiz;i++)
    if(!this.isSolved(i))
      un.push(this.allQuiz[i])

  return un;

}
