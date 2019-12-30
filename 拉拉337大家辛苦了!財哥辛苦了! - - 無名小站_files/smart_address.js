var numrmt = '[0-9一二三四五六七八九零十１２３４５６７８９０○]';
var addrmt = new RegExp('(([台臺][北中南東]|新北|北|高|宜蘭|花蓮|金門|南投|屏東|苗栗|桃園|高雄|基隆|連江|雲林|新竹|嘉義|彰化|澎湖)[縣市](.{2,5}[鄉鎮市區])?(.{2,5}[村里鄰])?(.{2,5}[路街道段])?(' + numrmt + '段)?(.{1,4}巷)?(' + numrmt + '{1,4}弄)?(.{1,6}[號号])([之bB]' + numrmt + '|' + numrmt + '{1,2}[fFｆＦ樓]){0,1})', 'g');
var addrclass = 'smaplink';
var addricon_img = 'http://web.archive.org/web/20131226221735/http://tw.yimg.com/i/tw/lifestyle/map_texticon.gif';
var addricon_sel = 'a.' + addrclass + ' img';
var addricon_style = 'width:31px;height:13px;padding:0 4px 0 2px;display:inlinevertical-align:middle;';

var head = document.getElementsByTagName('head').item(0);

var sobj = document.createElement("style");
sobj.setAttribute("type", "text/css");
sobj.setAttribute("media", "screen");
head.appendChild(sobj);

if (document.styleSheets[0].addRule) {
    var SS = document.styleSheets[document.styleSheets.length-1];
    SS.addRule(addricon_sel, addricon_style);
} else {
    sobj.appendChild(document.createTextNode(addricon_sel + ' {' + addricon_style + '}'));
}

function makeAddress(O) {
    var T = O.innerHTML;
    if (T.length) {
        var MTH = T.match(addrmt);
        if (MTH !== null) {
            var Q = generateAddrHTML(T, MTH);
            if (Q && (Q != T)) O.innerHTML = Q;
        }
    }
}

function generateAddrHTML(T, MTH) {
    if (MTH.length) {
        var I;
        var AS = new Array();
        var SMTH = MTH.sort(sort_string_len);
        for (I=0;I<SMTH.length;I++) {
            var A = SMTH[I];
            if (AS[A]) continue;

            T = T.replace(new RegExp(A, 'g'), '<a href="http://web.archive.org/web/20131226221735/http://tw.rd.yahoo.com/referurl/wretch/maps/*http://tw.maps.yahoo.com/?ei=utf8&addr=' + encodeURIComponent(A) + '" class="' + addrclass + '" target="_blank" title="前往地圖">' + A.replace(/^(.)/, '<span>$1</span>') + '<img src="' + addricon_img + '" border="0" /></a>');
            AS[A] = 1;
        }
        return T;
    }
}

function sort_string_len(a, b) {
    return b.length - a.length;
}

// 只對需要的DOM物件作smartlink, 在yahoo blog中只對class="msgcontent" 的div作smartlink, 可修改成別的)
var YA = YAHOO.util.Dom.getElementsByClassName('innertext', 'div');
if (YA.length == 1) makeAddress(YA[0]);

/*
     FILE ARCHIVED ON 22:17:35 Dec 26, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:27:14 Dec 30, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 139.302
  exclusion.robots: 0.115
  PetaboxLoader3.resolve: 101.815
  load_resource: 226.703
  CDXLines.iter: 53.475 (3)
  LoadShardBlock: 293.282 (6)
  PetaboxLoader3.datanode: 306.31 (7)
  exclusion.robots.policy: 0.104
  esindex: 0.015
*/