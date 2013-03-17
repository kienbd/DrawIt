var answer1 = function() //must be same as file name
{
  var answers = new Array(16);
  answers[0] = new Multistroke("T", false, new Array(
    new Array(new Point(30,7),new Point(103,7)),
    new Array(new Point(66,7),new Point(66,87))
  ));
  answers[1] = new Multistroke("N", false, new Array(
    new Array(new Point(177,92),new Point(177,2)),
    new Array(new Point(182,1),new Point(246,95)),
    new Array(new Point(247,87),new Point(247,1))
  ));
  answers[2] = new Multistroke("D", false, new Array(
    new Array(new Point(345,9),new Point(345,87)),
    new Array(new Point(351,8),new Point(363,8),new Point(372,9),new Point(380,11),new Point(386,14),new Point(391,17),new Point(394,22),new Point(397,28),new Point(399,34),new Point(400,42),new Point(400,50),new Point(400,56),new Point(399,61),new Point(397,66),new Point(394,70),new Point(391,74),new Point(386,78),new Point(382,81),new Point(377,83),new Point(372,85),new Point(367,87),new Point(360,87),new Point(355,88),new Point(349,87))
  ));
  answers[3] = new Multistroke("P", false, new Array(
    new Array(new Point(507,8),new Point(507,87)),
    new Array(new Point(513,7),new Point(528,7),new Point(537,8),new Point(544,10),new Point(550,12),new Point(555,15),new Point(558,18),new Point(560,22),new Point(561,27),new Point(562,33),new Point(561,37),new Point(559,42),new Point(556,45),new Point(550,48),new Point(544,51),new Point(538,53),new Point(532,54),new Point(525,55),new Point(519,55),new Point(513,55),new Point(510,55))
  ));
  answers[4] = new Multistroke("X", false, new Array(
    new Array(new Point(30,146),new Point(106,222)),
    new Array(new Point(30,225),new Point(106,146))
  ));
  answers[5] = new Multistroke("H", false, new Array(
    new Array(new Point(188,137),new Point(188,225)),
    new Array(new Point(188,180),new Point(241,180)),
    new Array(new Point(241,137),new Point(241,225))
  ));
  answers[6] = new Multistroke("I", false, new Array(
    new Array(new Point(371,149),new Point(371,221)),
    new Array(new Point(341,149),new Point(401,149)),
    new Array(new Point(341,221),new Point(401,221))
  ));
  answers[7] = new Multistroke("exclamation", false, new Array(
    new Array(new Point(526,142),new Point(526,204)),
    new Array(new Point(526,221))
  ));
  answers[8] = new Multistroke("line", false, new Array(
    new Array(new Point(12,347),new Point(119,347))
  ));
  answers[9] = new Multistroke("five-point star", false, new Array(
    new Array(new Point(177,396),new Point(223,299),new Point(262,396),new Point(168,332),new Point(278,332),new Point(184,397))
  ));
  answers[10] = new Multistroke("null", false, new Array(
    new Array(new Point(382,310),new Point(377,308),new Point(373,307),new Point(366,307),new Point(360,310),new Point(356,313),new Point(353,316),new Point(349,321),new Point(347,326),new Point(344,331),new Point(342,337),new Point(341,343),new Point(341,350),new Point(341,358),new Point(342,362),new Point(344,366),new Point(347,370),new Point(351,374),new Point(356,379),new Point(361,382),new Point(368,385),new Point(374,387),new Point(381,387),new Point(390,387),new Point(397,385),new Point(404,382),new Point(408,378),new Point(412,373),new Point(416,367),new Point(418,361),new Point(419,353),new Point(418,346),new Point(417,341),new Point(416,336),new Point(413,331),new Point(410,326),new Point(404,320),new Point(400,317),new Point(393,313),new Point(392,312)),
    new Array(new Point(418,309),new Point(337,390))
  ));
  answers[11] = new Multistroke("arrowhead", false, new Array(
    new Array(new Point(506,349),new Point(574,349)),
    new Array(new Point(525,306),new Point(584,349),new Point(525,388))
  ));
  answers[12] = new Multistroke("pitchfork", false, new Array(
    new Array(new Point(38,470),new Point(36,476),new Point(36,482),new Point(37,489),new Point(39,496),new Point(42,500),new Point(46,503),new Point(50,507),new Point(56,509),new Point(63,509),new Point(70,508),new Point(75,506),new Point(79,503),new Point(82,499),new Point(85,493),new Point(87,487),new Point(88,480),new Point(88,474),new Point(87,468)),
    new Array(new Point(62,464),new Point(62,571))
  ));
  answers[13] = new Multistroke("six-point star", false, new Array(
    new Array(new Point(177,554),new Point(223,476),new Point(268,554),new Point(183,554)),
    new Array(new Point(177,490),new Point(223,568),new Point(268,490),new Point(183,490))
  ));
  answers[14] = new Multistroke("asterisk", false, new Array(
    new Array(new Point(325,499),new Point(417,557)),
    new Array(new Point(417,499),new Point(325,557)),
    new Array(new Point(371,486),new Point(371,571))
  ));
  answers[15] = new Multistroke("half-note", false, new Array(
    new Array(new Point(546,465),new Point(546,531)),
    new Array(new Point(540,530),new Point(536,529),new Point(533,528),new Point(529,529),new Point(524,530),new Point(520,532),new Point(515,535),new Point(511,539),new Point(508,545),new Point(506,548),new Point(506,554),new Point(509,558),new Point(512,561),new Point(517,564),new Point(521,564),new Point(527,563),new Point(531,560),new Point(535,557),new Point(538,553),new Point(542,548),new Point(544,544),new Point(546,540),new Point(546,536))
  ));
  return answers;
}

var event;
if (document.createEvent) {
  event = document.createEvent("HTMLEvents");
  event.initEvent("answersloaded", true, true);
} else {
  event = document.createEventObject();
  event.eventType = "answersloaded";
}

if (document.createEvent) {
  document.getElementsByTagName('canvas')[0].dispatchEvent(event);
} else {
  document.getElementsByTagName('canvas')[0].fireEvent("on" + event.eventType, event);
}
