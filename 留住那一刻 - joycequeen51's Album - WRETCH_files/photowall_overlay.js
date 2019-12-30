YUI().use('event-mouseenter', 'event', 'node', function(Y) {
    Y.on(['windowresize','domready'], function() {
        Y.one('table tr td.sidetitle #detail').delegate('mouseenter', function() {
            if (this.one('.overlay') !== null) {
                this.one('.overlay').addClass('show');
            }
        }, 'a');
        Y.one('table tr td.sidetitle #detail').delegate('mouseleave', function() {
            if (this.one('.overlay') !== null) {
                this.one('.overlay').removeClass('show');
            }
        }, 'a');
    });
});

/*
     FILE ARCHIVED ON 11:02:44 Dec 25, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:07:42 Dec 30, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 232.901
  exclusion.robots: 0.311
  LoadShardBlock: 197.321 (3)
  RedisCDXSource: 5.035
  esindex: 0.025
  load_resource: 188.042
  PetaboxLoader3.resolve: 168.065 (3)
  exclusion.robots.policy: 0.29
  PetaboxLoader3.datanode: 195.404 (5)
  CDXLines.iter: 23.227 (3)
*/