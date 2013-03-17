//set namespace
goog.provide('dr.GlossyButton');

//include lime.Button
goog.require('lime.GlossyButton');


// Constructor
dr.GlossyButton = function(lbl) {
  lime.GlossyButton.call(this,lbl);

  this.setColor('#000');
  this.borderWidth = 4;

  this.clickStatus = "avail";
};
goog.inherits(dr.GlossyButton,lime.GlossyButton);


dr.GlossyButton.prototype.makeState_ = function() {
    var state = new lime.RoundedRect().setFill('#fff').setRadius(10);
    state.inner = new lime.RoundedRect().setRadius(10);
    state.label = new lime.Label().setAlign('center').
        setFontFamily('"Trebuchet MS"').setFontColor('#eef').setFontSize(28);

    state.appendChild(state.inner);
    state.inner.appendChild(state.label);
    return state;
};

/**
 * @inheritDoc
 */
dr.GlossyButton.prototype.setColor = function(clr) {
    clr = lime.fill.parse(clr);
    goog.array.forEach([this.upstate, this.downstate], function(s) {
        var c = s == this.downstate ? clr.clone().addBrightness(.1) : clr;
        //s.setFill(c);
        var c2 = c.clone().addBrightness(.3);
        var grad = new lime.fill.LinearGradient().setDirection(0, 0, 0, 1);
        grad.addColorStop(0, c2);
        grad.addColorStop(.45, c);
        grad.addColorStop(.55, c);
        grad.addColorStop(1, c2);
        s.inner.setFill(grad);
    },this);
    return this;
};

