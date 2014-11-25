var $equations = $($('ul a[href="#total"]').get().reverse());
$equations.each(function() {
  var $equation = $(this);
  var $ul = $equation.parent().find("ul");
  var $anchors = $ul.find("> li > a");
  var total = 0;
  $anchors.each(function() {
    var $anchor = $(this);
    var number = parseInt($anchor.text());;
    total += number;
  });
  $equation.text(total);
});

$('a[href="#math"], a[href="#total"]').each(function() {
  $(this).text($(this).text() + "m");
});

$('ul a[href="#total"]').each(function() {
  $(this).text(function() {
    var text = parseInt($(this).text());
    var businessDay = 7 * 60;
    if (text > businessDay) {
      return Math.ceil((text / 60) / 7) + "d";
    }
  });
});