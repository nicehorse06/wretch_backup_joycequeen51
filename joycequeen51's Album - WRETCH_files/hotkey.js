/*@cc_on @*/
/*@if (@_win32)
try {
  document.execCommand('BackgroundImageCache', false, true); } catch(e) {} @end @*/  
function is_non_vip_should_alert(event, mode) {
    if (!mode) {
        return false;
    }

    var srcElement = event.srcElement ? event.srcElement : event.target;
    var obj;
    var i;

    if (!event.shiftKey && !event.altKey && !event.ctrlKey) {
        obj = document.getElementsByTagName("INPUT");
        for (i = 0; i < obj.length; i++) {
            if (obj[i].name === srcElement.name &&
                     (obj[i].type === "text" ||
                        obj[i].type === "password")) {
                return false;
            }
        }

        obj = document.getElementsByTagName("TEXTAREA");
        for (i = 0; i < obj.length; i++) {
            if (obj[i].name === srcElement.name) {
                return false;
            }
        }

        switch (event.keyCode) {
        case 73:
        case 77:
        case 78:
        case 83:
            if (mode === 'album' || mode === 'home') {
                return false;
            }
            break;
        case 66:
        case 67:
        case 86:
        case 88:
        case 90:
            return true;
        }
        return false;
    }
}

function link_hotkey(event, parameters) {
    if (!parameters) {
        return;
    }
    var obj;
    var i;
    var page = parameters['page'];
    var total = parameters['total'];
    var PageLink = parameters['PageLink'];
    var HomeLink = parameters['HomeLink'];
    var UseHomeLink = parameters['UseHomeLink'];

    var srcElement = event.srcElement ? event.srcElement : event.target;

    if (!event.shiftKey && !event.altKey && !event.ctrlKey) {
        obj = document.getElementsByTagName("INPUT");
        for (i = 0; i < obj.length; i++) {
            if (obj[i].name === srcElement.name &&
                    (obj[i].type === "text" ||
                        obj[i].type === "password")) {
                return true;
            }
        }

        obj = document.getElementsByTagName("TEXTAREA");
        for (i = 0; i < obj.length; i++) {
            if (obj[i].name === srcElement.name) {
                return true;
            }
        }

        if (event.keyCode === 90) {
            if (page > 1 && PageLink) {
                document.location = PageLink + '1';
            }   
        } else if (event.keyCode === 88) {
            if ((page - 1) > 0  && PageLink) {
                document.location = PageLink + (page - 1);
            }
        } else if (event.keyCode === 67) {
            if (page < total  && PageLink) {
                document.location = PageLink + (page + 1);
            }	
        } else if (event.keyCode === 86) {
            if (PageLink) {
                document.location = PageLink + total;
            }	
        } else if (event.keyCode === 66) {
            if (UseHomeLink) {
                document.location = HomeLink;
            }	
        }
    }
}

function show_hotkey(event, parameters) {
    var obj;
    var i;
    if (!parameters) {
        return;
    }

    var srcElement = event.srcElement ? event.srcElement : event.target;
  
    if (!event.shiftKey && !event.altKey && !event.ctrlKey) {
        obj = document.getElementsByTagName("INPUT");
        for (i = 0; i < obj.length; i++) {
            if (obj[i].name === srcElement.name &&
                    (obj[i].type === "text" ||
                        obj[i].type === "password")) {
                return true;
            }
        }

        obj = document.getElementsByTagName("TEXTAREA");
        for (i = 0; i < obj.length; i++) {
            if (obj[i].name === srcElement.name) {
                return true;
            }
        }

        if (event.keyCode === 90) {
            if (parameters['first']) {
                document.location = document.getElementById("first").href;
            }
        } else if (event.keyCode === 88) {
            if (parameters['prev']) {
                document.location = document.getElementById("prev").href;
            }
        } else if (event.keyCode === 67) {
            if (parameters['next']) {
                document.location = document.getElementById("next").href;
            }
        } else if (event.keyCode === 86) {
            if (parameters['last']) {
                document.location = document.getElementById("last").href;
            }
        } else if (event.keyCode === 66) {
            document.location = document.getElementById("updir").href;
        } else if (event.keyCode === 78) {
            if (parameters['origin']) {
                document.location = document.getElementById("orig").href;
            }
        } else if (event.keyCode === 83) {
            if (parameters['slide']) {
                document.location =  document.getElementById("slide").href;
            }		
        } else if (event.keyCode === 73) {
            if (parameters['exif']) {
                var exif_obj = document.getElementById("exif");
                if (exif_obj) {
                    document.location = exif_obj.href; 
                }
            }
        } else if (event.keyCode === 77) {
            if (parameters['admin']) {
                document.cookie = 'sm=' + parameters['admin_cookie'];
                document.location.reload();
            }
        }
    }
}

/*
     FILE ARCHIVED ON 11:02:33 Dec 25, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:19:15 Dec 30, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 367.814 (3)
  load_resource: 243.783
  captures_list: 394.129
  exclusion.robots: 0.329
  esindex: 0.019
  exclusion.robots.policy: 0.306
  RedisCDXSource: 4.54
  PetaboxLoader3.resolve: 395.968 (4)
  CDXLines.iter: 15.084 (3)
  PetaboxLoader3.datanode: 178.19 (5)
*/