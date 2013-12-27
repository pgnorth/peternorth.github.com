var delayFade = 30000;	//30 secs
var delayHover = 300;	//.3 secs

$(document).ready(function(){
	anim();
	credits();
	if ($.browser.msie && parseInt($.browser.version) < 7) return;	//stop here for IE < 7.0
	hovers();

	// target external links into new windows
	$('a').each(function(index) {
		if ($(this).attr('rel') == 'external') $(this).attr('target', '_blank');
	});

	//clear input
	$('#email').focus( function() { $(this).attr('value', ''); } ); 
});

function anim() {
  	$('#bg')
	.animate({ backgroundColor: "#FF0000" }, delayFade)
	.animate({ backgroundColor: "#00CC00" }, delayFade)
	.animate({ backgroundColor: "#0000FF" }, delayFade, function(){
		anim();
	});
}

function hovers() {
  	$('a:not(a.selected,a.nop)').bind('mouseenter', function() { $(this).animate({ opacity: '1.0' }, delayHover); } );
  	$('a:not(a.selected,a.nop)').bind('mouseleave', function() { $(this).animate({ opacity: opacityOriginal($(this)) }, delayHover); } );
  	$('#main a').unbind('mouseenter');
  	$('#main a').unbind('mouseleave');
}

function credits() {
  	$('a#contact, a#design, a#build').bind('mouseenter', function() { expandLink($(this)) });
  	$('a#contact, a#design, a#build').bind('mouseleave', function() { contractLink($(this)) });
}

function expandLink(x) {
	z = x.attr('href');
	z = z.replace('http://www.', '');
	z = z.replace('mailto:', '');
	x.append('<cite>: ' + z + '</cite>' );
}

function contractLink(x) {
	$('cite').remove();
}

function opacityOriginal(x) {
	return ( isFloat(x.attr('rev')) ) ? x.attr('rev') : '0.5';
}

function isFloat(x) {
   var y=parseFloat(x);
   if (isNaN(y)) return false;
   return x==y && x.toString()==y.toString();
}
