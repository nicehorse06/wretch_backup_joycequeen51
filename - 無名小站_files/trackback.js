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
     FILE ARCHIVED ON 22:16:57 Dec 26, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:10:56 Dec 30, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.135
  load_resource: 92.625
  PetaboxLoader3.datanode: 210.955 (7)
  RedisCDXSource: 13.473
  exclusion.robots.policy: 0.122
  LoadShardBlock: 203.835 (6)
  PetaboxLoader3.resolve: 50.53
  esindex: 0.012
  CDXLines.iter: 60.578 (3)
*/