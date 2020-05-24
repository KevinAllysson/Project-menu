$(function () {
    var face = $("#face");
    face.hide();
    var you = $("#youtube");
    you.hide();
    var twi = $("#twitter");
    twi.hide();
    var lin = $("#linkedin");
    lin.hide();
    var net = $("#netflix");
    net.hide();
    var amaz = $("#amazon");
    amaz.hide();
    var ifo = $("#ifood");
    ifo.hide();
  
    $("#menu").click(function () {
      face.toggle(100);
      you.toggle(200);
      twi.toggle(300);
      lin.toggle(400);
      net.toggle(500);
      amaz.toggle(600);
      ifo.toggle(700);
    });
  });
  