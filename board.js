// set namespace
goog.provide('dr.Board');

// get requirements
goog.require('lime');
goog.require('lib');

// Constructor
dr.Board = function(x,y,w,h)
{
    this._isRotationInvariance = false; //che do nhan biet dc ke ca khi ve nghieng
    this._isSameNoStrokes = false; //che do bat buoc phai ve~ so' net giong dap an
    this._isProtractor = false; //lua chon thuat toan, true-> thuat toan protractor: nhanh hon, ko biet co chinh xac hon ko
    this._isDown = false;
		this._points = new Array(); // point array for current stroke
		this._strokes = new Array(); // array of point arrays
    this.canvas = new lime.Sprite().setPosition(x,y).setSize(w,h).setFill('assets/play/board.png').setAnchorPoint(0,0).setRenderer(lime.Renderer.CANVAS);
}

dr.Board.prototype.init = function()
{
    var $el = this;
		this._r = new NDollarRecognizer(this._isRotationInvariance);
    var canvasDom = this.canvas.getDeepestDomElement();
    this._g = canvasDom.getContext('2d');
    this._g.lineWidth = 4;
    this._g.font = "16px Gentilis";
    this._rc = this.getCanvasRect(this.canvas); // canvas rect on page
    this._g.fillStyle = "rgb(255,255,136)";
    this._g.fillRect(0, 0, this._rc.clientWidth, 20);
    goog.events.listen(canvasDom,['mousedown','touchstart'],function(e) {
      $el.mouseDownEvent(e.clientX, e.clientY, e.button);
    });
    goog.events.listen(canvasDom,['mousemove','touchmove'],function(e) {
      $el.mouseMoveEvent(e.clientX, e.clientY, e.button);
    });
    goog.events.listen(canvasDom,['mouseup','touchend'],function(e) {
      $el.mouseUpEvent(e.clientX, e.clientY, e.button);
    });
}

dr.Board.prototype.getCanvasRect = function(canvas)
{
  var w = canvas.getSize().width;
  var h = canvas.getSize().height;

  var cx = canvas.getPosition().x;
  var cy = canvas.getPosition().y;
  // while (canvas.offsetParent != null)
    // {
      // canvas = canvas.offsetParent;
      // cx += canvas.offsetLeft;
      // cy += canvas.offsetTop;
    // }
    return {x: cx, y: cy, width: w, height: h};
}

var getScrollY = function()
{
  var scrollY = 0;
  if (typeof(document.body.parentElement) != 'undefined')
    {
      scrollY = document.body.parentElement.scrollTop; // IE
    }
    else if (typeof(window.pageYOffset) != 'undefined')
      {
        scrollY = window.pageYOffset; // FF
      }
      return scrollY;
}

//
// Mouse Events
//
dr.Board.prototype.mouseDownEvent = function(x, y, button)
{
  document.onselectstart = function() { return false; } // disable drag-select
  document.onmousedown = function() { return false; } // disable drag-select
  document.ontouchstart = function() { return false; } // disable drag-select
  if (button <= 1 || typeof button == 'undefined')
    {
      this._isDown = true;
      x -= this._rc.x;
      y -= this._rc.y - getScrollY();
      if (this._points.length == 0)
        {
          this._strokes.length = 0;
          this._g.clearRect(0, 0, this._rc.clientWidth, this._rc.clientHeight);
        }
        this._points.length = 1; // clear
        this._points[0] = new Point(x, y);
        drawText("Recording stroke #" + (this._strokes.length + 1) + "...");
        // var clr = "rgb(" + rand(0,200) + "," + rand(0,200) + "," + rand(0,200) + ")";
        var clr = "rgb(255,250,240)";
        // console.log(clr);
        this._g.strokeStyle = clr;
        this._g.fillStyle = clr;
        this._g.fillRect(x, y, this._g.lineWidth, this._g.lineWidth);
    }
    else if (button == 2)
      {
        drawText("Recognizing gesture...");
      }
}

dr.Board.prototype.mouseMoveEvent = function(x, y, button)
{
  if (this._isDown)
    {
      x -= this._rc.x;
      y -= this._rc.y - getScrollY();
      // console.log(y);
      this._points[this._points.length] = new Point(x, y); // append
      var len = this._points.length;
      this.drawLine(this._points[len-2],this._points[len-1]);
    }
}

dr.Board.prototype.mouseUpEvent = function(x, y, button)
{
  document.onselectstart = function() { return true; } // enable drag-select
  document.onmousedown = function() { return true; } // enable drag-select
  document.ontouchstart = function() { return true; } // enable drag-select
  if (button <= 1 || typeof button == 'undefined')
    {
      if (this._isDown)
        {
          this._isDown = false;
          this._strokes.push(this._points.slice()); // add new copy to set
          drawText("Stroke #" + this._strokes.length + " recorded.");
        }
    }
    else if (button == 2) // segmentation with right-click
      {
        if (this._strokes.length > 1 || (this._strokes.length == 1 && this._strokes[0].length >= 10))
          {
            var result = this._r.Recognize(this._strokes, this._isRotationInvariance, this._isSameNoStrokes, this._isProtractor);
            drawText("Result: " + result.Name + " (" + round(result.Score,2) + ").");
          }
          else
            {
              drawText("Too little input made. Please try again.");
            }
            this._points.length = 0; // clear and signal to clear strokes on next mousedown
      }
}

// dr.Board.prototype.drawConnectedPoint = function(from, to)
// {

  // this._g.beginPath();
  // this._g.moveTo(this._points[from].X, this._points[from].Y);
  // this._g.lineTo(this._points[to].X, this._points[to].Y);
  // this._g.closePath();
  // this._g.stroke();
// }

dr.Board.prototype.drawLine = function(p1,p2)
{
  this._g.beginPath();
  this._g.moveTo(p1.X,p1.Y);
  this._g.lineTo(p2.X,p2.Y);
  this._g.closePath();
  this._g.stroke();
}

var drawText = function(str)
{
  console.log(str);
  // this._g.fillStyle = "rgb(255,255,136)";
  // this._g.fillRect(0, 0, _rc.clientWidth, 20);
  // this._g.fillStyle = "rgb(0,0,255)";
  // this._g.fillText(str, 1, 14);
}

var rand = function(low, high)
{
  return Math.floor((high - low + 1) * Math.random()) + low;
}

var round = function(n, d) // round 'n' to 'd' decimals
{
  d = Math.pow(10, d);
  return Math.round(n * d) / d
}

//
// Multistroke Adding and Clearing and Submitting
//

dr.Board.prototype.submit = function() {
  drawText("Recognizing gesture...");
  var result;
  if (this._strokes.length > 1 || (this._strokes.length == 1 && this._strokes[0].length >= 10))
    {
      result = this._r.Recognize(this._strokes, this._isRotationInvariance, this._isSameNoStrokes, this._isProtractor);
      result.Score = this._isProtractor == true ? result.Score * 10 : round(result.Score,2)*100;
      // drawText("Result: " + result.Name + " (" + round(result.Score,2) + ").");
      // alert("Result: " + result.Name + " (" + round(result.Score,2) + ").");
    }
    else
      {
        drawText("Too little input made. Please try again.");
        // alert("Too little input made. Please try again.");
      }
      this._points.length = 0; // clear and signal to clear strokes on next mousedown
      console.log(result);
      return result;
}

// function onClickAddExisting()
// {
  // if (_strokes.length > 0)
    // {
      // if (_strokes.length < 5 || confirm("With " + _strokes.length + " component strokes, it will take a few moments to add this gesture. Proceed?"))
        // {
          // var multistrokes = document.getElementById('multistrokes');
          // var name = multistrokes[multistrokes.selectedIndex].value;
          // var num = _r.AddGesture(name, isRotationInvariance, _strokes);
          // drawText("\"" + name + "\" added. Number of \"" + name + "\"s defined: " + num + ".");
          // _points.length = 0; // clear and signal to clear strokes on next mousedown
        // }
    // }
// }

// function onClickAddCustom()
// {
  // var name = document.getElementById('custom').value;
  // if (_strokes.length > 0 && name.length > 0)
    // {
      // if (_strokes.length < 5 || confirm("With " + _strokes.length + " component strokes, it will take a few moments to add this gesture. Proceed?"))
        // {
          // var num = _r.AddGesture(name, isRotationInvariance, _strokes);
          // drawText("\"" + name + "\" added. Number of \"" + name + "\"s defined: " + num + ".");
          // _points.length = 0; // clear and signal to clear strokes on next mousedown
        // }
    // }
// }
//
// function onClickCustom()
// {
  // document.getElementById('custom').select();
// }
//
// function onClickDelete()
// {
  // var num = _r.DeleteUserGestures(); // deletes any user-defined multistrokes
  // alert("All user-defined gestures have been deleted. Only the 1 predefined gesture remains for each of the " + num + " types.");
  // _points.length = 0; // clear and signal to clear strokes on next mousedown
// }

dr.Board.prototype.clearBoard = function()
{
  this._points.length = 0; // clear and signal to clear strokes on next mousedown
  this._strokes.length = 0; //clear
  this._g.clearRect(0, 0, this._rc.clientWidth, this._rc.clientHeight);
  // this._g.save();
  this.canvas.renderer.drawCanvasObject.call(this.canvas,this._g);
  // this._g.restore();
  // this.canvas.redraw_ = 0;
  drawText("Canvas cleared.");
}

dr.Board.prototype.undoStroke = function()
{
  this._strokes.pop();
  if (this._strokes.length > 0)
    this._points = clone(this._strokes[this._strokes.length - 1]);
  // this._points.splice(this._points.length - 1, this._points.length);
  this.canvas.renderer.drawCanvasObject.call(this.canvas,this._g);
  this.reDraw();
}

dr.Board.prototype.clearAnswers = function()
{
  this.Multistrokes = [];
}

dr.Board.prototype.loadAnswers = function(f)
{
  var fc = f.split('/').pop().split('.js')[0];
  var $el = this;
  lib.loadjsfile(f);
  goog.events.listen($el.canvas.getDeepestDomElement(),'answersloaded',function(e) {
    console.log(fc);
    // $el.clearAnswers();
    var answers = window[fc]();
    while (answers.length > 0)
      {
        var a = answers.pop();
        $el._r.AddGesture(a.name,$el._isRotationInvariance,a.strokes);
      }
    goog.events.unlisten($el.canvas.getDeepestDomElement(),'answersloaded',null);
  });
}

dr.Board.prototype.reDraw = function()
{
  this.canvas.renderer.drawCanvasObject.call(this.canvas,this._g);
  var i=0,j;
  while (i < this._strokes.length)
    {
      j = 0;
      while (j < (this._strokes[i].length - 1))
        {
          this.drawLine(this._strokes[i][j],this._strokes[i][j+1]);
          j++;
        }
        if (typeof this._strokes[i][0] != 'undefined')
          {
            this._g.fillRect(this._strokes[i][0].X, this._strokes[i][0].Y, this._g.lineWidth, this._g.lineWidth);
          }
        i++;
    }
}

var clone = function(obj)
{
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}
