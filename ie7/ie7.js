/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'isotope\'">' + entity + '</span>' + html;
	}
	var icons = {
		'iso-te5seract': '&#xe943;',
		'iso-mirage-letterhead': '&#xe942;',
		'iso-css': '&#xe936;',
		'iso-file-unknown': '&#xe937;',
		'iso-html': '&#xe938;',
		'iso-js': '&#xe939;',
		'iso-json': '&#xe93a;',
		'iso-less': '&#xe93b;',
		'iso-php': '&#xe93d;',
		'iso-sass': '&#xe93e;',
		'iso-scss': '&#xe93f;',
		'iso-sql': '&#xe940;',
		'iso-txt': '&#xe941;',
		'iso-eye': '&#xe93c;',
		'iso-mirage-eye': '&#xe934;',
		'iso-mirage': '&#xe935;',
		'iso-ia-visuals': '&#xe930;',
		'iso-tesseract': '&#xe931;',
		'iso-page': '&#xe92f;',
		'iso-folder': '&#xe92e;',
		'iso-bold': '&#xe901;',
		'iso-code': '&#xe910;',
		'iso-header': '&#xe900;',
		'iso-italic': '&#xe902;',
		'iso-strike': '&#xe903;',
		'iso-layers': '&#xe932;',
		'iso-jigsaw': '&#xe92d;',
		'iso-bell': '&#xe92c;',
		'iso-speaker': '&#xe92a;',
		'iso-rocket-left': '&#xe917;',
		'iso-rocket': '&#xe916;',
		'iso-rocket-right': '&#xe918;',
		'iso-share': '&#xe923;',
		'iso-garbage-can': '&#xe924;',
		'iso-comment': '&#xe925;',
		'iso-heart': '&#xe926;',
		'iso-brush': '&#xe927;',
		'iso-brush-left': '&#xe928;',
		'iso-brush-right': '&#xe929;',
		'iso-audio': '&#xe921;',
		'iso-pause': '&#xe92b;',
		'iso-stop': '&#xe933;',
		'iso-play': '&#xe922;',
		'iso-tick': '&#xe920;',
		'iso-pencil-left': '&#xe91d;',
		'iso-pencil': '&#xe91e;',
		'iso-pencil-right': '&#xe91f;',
		'iso-subtract': '&#xe91b;',
		'iso-ellipse': '&#xe91c;',
		'iso-ellipse-vertical': '&#xe906;',
		'iso-add': '&#xe907;',
		'iso-chevron-down': '&#xe908;',
		'iso-chevron-left': '&#xe909;',
		'iso-chevron-right': '&#xe919;',
		'iso-chevron-up': '&#xe91a;',
		'iso-home': '&#xe915;',
		'iso-mail': '&#xe914;',
		'iso-user': '&#xe913;',
		'iso-clapper': '&#xe912;',
		'iso-gear': '&#xe911;',
		'iso-list-ordered': '&#xe904;',
		'iso-list-unordered': '&#xe905;',
		'iso-cross': '&#xe90a;',
		'iso-hamburger': '&#xe90b;',
		'iso-image-o': '&#xe90c;',
		'iso-link': '&#xe90d;',
		'iso-link-left': '&#xe90e;',
		'iso-link-right': '&#xe90f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/iso-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
