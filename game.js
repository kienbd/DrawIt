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
  var i = this.canNextQuiz();
  if (typeof i != 'undefined') {
    this.currentID = i;
    return true;
  } else return false;
};

dr.Game.prototype.prevQuiz = function() {
  var i = this.canPrevQuiz();
  if (typeof i != 'undefined') {
    this.currentID = i;
    return true;
  } else return false;
};

dr.Game.prototype.canNextQuiz = function() {
  var i = this.currentID + 1;
  while (i < dr.Game.QUIZNUM)
    if (this.isSolved(i) == false)
      break;
    else
      i++;
  if (i < dr.Game.QUIZNUM) {
    return i;
  }
};

dr.Game.prototype.canPrevQuiz = function() {
  var i = this.currentID - 1;
  while (i > -1)
    if (this.isSolved(i) == false)
      break;
    else
      i--;
  if (i > -1) {
    return i;
  }
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
