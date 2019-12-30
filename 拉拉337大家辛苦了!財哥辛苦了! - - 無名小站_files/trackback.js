var trackbackList = YUD.get('HiddenTrackback'),
	toggleClass = function (o, name) {
		if(YUD.hasClass(o, name)) {
			YUD.removeClass(o, name);
		} else {
			YUD.addClass(o, name)
		}
	};
YUE.on(YUD.get('trackback-switch'), 'click', function(e){
	var target = e.target || e.srcElement;
	toggleClass(target, 'hide');
	toggleClass(trackbackList, 'hide-list');
})

/*
     FILE ARCHIVED ON 22:17:35 Dec 26, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:27:16 Dec 30, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.167
  CDXLines.iter: 57.11 (3)
  RedisCDXSource: 1.655
  exclusion.robots: 0.182
  LoadShardBlock: 133.609 (6)
  load_resource: 97.344
  PetaboxLoader3.datanode: 121.535 (7)
  esindex: 0.011
  PetaboxLoader3.resolve: 62.735
*/