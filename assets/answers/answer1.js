var answer1 = function() //must be same as file name
{
  var answers = new Array();

  answers.push({
    "name" : "A",
    "strokes" : JSON.parse('[[{"X":162,"Y":-543},{"X":163,"Y":-543},{"X":163,"Y":-540},{"X":161,"Y":-536},{"X":157,"Y":-523},{"X":149,"Y":-509},{"X":146,"Y":-500},{"X":143,"Y":-491},{"X":140,"Y":-482},{"X":136,"Y":-474},{"X":132,"Y":-466},{"X":129,"Y":-457},{"X":127,"Y":-448},{"X":124,"Y":-439},{"X":122,"Y":-431},{"X":120,"Y":-424},{"X":119,"Y":-421},{"X":117,"Y":-416},{"X":117,"Y":-414},{"X":116,"Y":-413}],[{"X":189,"Y":-548},{"X":190,"Y":-546},{"X":192,"Y":-543},{"X":195,"Y":-536},{"X":197,"Y":-524},{"X":204,"Y":-508},{"X":207,"Y":-501},{"X":214,"Y":-487},{"X":217,"Y":-477},{"X":219,"Y":-468},{"X":223,"Y":-464},{"X":225,"Y":-459},{"X":225,"Y":-458},{"X":229,"Y":-453},{"X":231,"Y":-446},{"X":234,"Y":-440},{"X":235,"Y":-437},{"X":237,"Y":-434},{"X":237,"Y":-433},{"X":238,"Y":-432},{"X":238,"Y":-431},{"X":239,"Y":-431},{"X":240,"Y":-430},{"X":241,"Y":-429},{"X":242,"Y":-426},{"X":243,"Y":-425},{"X":244,"Y":-423},{"X":244,"Y":-422},{"X":245,"Y":-422},{"X":245,"Y":-420},{"X":246,"Y":-420},{"X":246,"Y":-419},{"X":247,"Y":-419},{"X":247,"Y":-418}],[{"X":142,"Y":-454},{"X":143,"Y":-454},{"X":148,"Y":-456},{"X":157,"Y":-458},{"X":166,"Y":-459},{"X":175,"Y":-461},{"X":178,"Y":-462},{"X":180,"Y":-463},{"X":181,"Y":-463},{"X":183,"Y":-464},{"X":186,"Y":-465},{"X":188,"Y":-465},{"X":195,"Y":-465},{"X":197,"Y":-467},{"X":199,"Y":-467},{"X":200,"Y":-468},{"X":203,"Y":-468},{"X":206,"Y":-468},{"X":208,"Y":-469},{"X":213,"Y":-469},{"X":219,"Y":-469},{"X":225,"Y":-469},{"X":230,"Y":-469},{"X":233,"Y":-469},{"X":235,"Y":-469},{"X":237,"Y":-469},{"X":241,"Y":-469},{"X":245,"Y":-469},{"X":247,"Y":-470},{"X":249,"Y":-470}]]')
  });

  return answers;
}

// doan nay file nao cung~ the
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
