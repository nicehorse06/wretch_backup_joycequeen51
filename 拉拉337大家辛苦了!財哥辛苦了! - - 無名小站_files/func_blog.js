function cookieActivated() {
    // Non-IE browsers
    if (navigator.userAgent.indexOf('MSIE') === -1) {
        return navigator.cookieEnabled;
    }
    // IE Family browsers
    document.cookie = 'cookieActived=true';
    return (document.cookie.indexOf('cookieActived') !== -1);
}     

function goMonthly(p)
{
  var pi = p.selectedIndex;
  var link = p.options[pi].value;

  if(link != -1)
  {
    document.location = link;
  }

}

function layer_toggle(obj) 
{
    if (obj.style.display == 'none') obj.style.display = 'block';
    else if (obj.style.display == 'block') obj.style.display = 'none';
}

function onclick_folder(hc, fd, url, check) {
    if (check == '0') {
        layer_toggle(hc);
    } else if (hc.style.display == 'none') {
        fd.src = url + 'minus.gif';
        layer_toggle(hc);
    } else {
        fd.src = url + 'plus.gif';
        layer_toggle(hc);
    }
}

function MeetFriend(link, p)
{
  var pi = p.selectedIndex;
  var s = p.options[pi].value;
  if(s)
  {
    var url = link + s;
    window.open(url, "_blank");
  }
}


function check_select_style(style , msg)
{
  if(style)
  {
    if(style.check)
      return true;

    for(i = 0; i < style.length; i++)
    {
      if(style[i].checked)
      {
        return true;
      }
    }
  }

  alert(msg);
  return false;
}

function nextSlide()
{
   if(PicsArray.length > 0)
   {
     if(++nowIndex >= PicsArray.length)
       nowIndex = 0;

     document.images.SlideShow.style.filter="blendTrans(duration=2)";
     if(document.all)
     {
       document.images.SlideShow.filters.blendTrans.duration = crossFadeDuration;
       document.images.SlideShow.filters.blendTrans.Apply();
     }

     document.images.SlideShow.src = PicsArray[nowIndex];
     if(document.all)
     {
       document.images.SlideShow.filters.blendTrans.Play();
     }
     document.getElementById("SlidePicTitle").value = PicsTitleArray[nowIndex];
     document.getElementById("SlidePicLink").href = PicsLinkArray[nowIndex];

     if(iIntervalId != undefined)
     {
       clearInterval(iIntervalId);
       iIntervalId = setInterval('nextSlide()', slideShowSpeed);
     }
   }
}

function prevSlide()
{
   if(PicsArray.length > 0)
   {
     if(--nowIndex < 0)
       nowIndex = PicsArray.length - 1;

     document.images.SlideShow.style.filter="blendTrans(duration=2)";
     if(document.all)
     {
       document.images.SlideShow.filters.blendTrans.duration = crossFadeDuration;
       document.images.SlideShow.filters.blendTrans.Apply();
     }

     document.images.SlideShow.src = PicsArray[nowIndex];
     if(document.all)
     {
       document.images.SlideShow.filters.blendTrans.Play();
     }
     document.getElementById("SlidePicTitle").value = PicsTitleArray[nowIndex];
     document.getElementById("SlidePicLink").href = PicsLinkArray[nowIndex];

     if(iIntervalId != undefined)
     {
       clearInterval(iIntervalId);
       iIntervalId = setInterval('nextSlide()', slideShowSpeed);
     }
   }
}

function SlideShowPlayPause(lang_SlidePlay, lang_SlidePause)
{
  if(PicsArray.length > 0)
  {
    if(iIntervalId != undefined)
    {
      clearInterval(iIntervalId);
      iIntervalId = undefined;
      document.getElementById("buttonPlayPause").value = lang_SlidePlay;
    }
    else 
    {
      SlideShowStart();
      document.getElementById("buttonPlayPause").value = lang_SlidePause;
    }
  }
}

function SlideShowStart()
{
  if(PicsArray.length > 0)
  {
    nextSlide();
    iIntervalId = setInterval('nextSlide()', slideShowSpeed);
  }
}

function check_input(msg)
{
  var form = document.form;
  if(form.text.value.length == 0)
  {
    alert(msg);
    return false;
  }
  return true;
}

function check_new_comment_input(msg, msg_over_length)
{
  var form = document.form;
  if(form.text.value.length == 0)
  {
    alert(msg);
    return false;
  }
  if(form.text.value.length > 1000)
  {
    alert(msg_over_length);
    return false;
  }
  if(!cookieActivated()) {
    window.location = "http://web.archive.org/web/20131226221735/http://www.wretch.cc/common/error.php?error=magic";
    return false;
  }
  return true;
}

function copy_to_clipborad(id) 
{
   var obj = document.getElementById(id);
   obj.select();
   if (window.clipboardData) 
   {
     window.clipboardData.setData("Text", obj.value);
   }
   else if (window.netscape) 
   { 
   
     netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
     var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
     if (!clip) return;
     var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
     if (!trans) return;
     trans.addDataFlavor('text/unicode');
     var str = new Object();
     var len = new Object();
     var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
     var copytext=meintext;
     str.data=copytext;
     trans.setTransferData("text/unicode",str,copytext.length*2);
     var clipid=Components.interfaces.nsIClipboard;
     if (!clip) return;
       clip.setData(trans,null,clipid.kGlobalClipboard);
   }
}

function pic_server_replace(origStr)
{
  var i, m, newStr = origStr;
  var PicServPat = new RegExp('src="http://web.archive.org/web/20131226221735/http://pic.wretch.cc/([^"\?]+)(gif|jpg|png)"', 'g');
  var matchAry = origStr.match(PicServPat);

  if (null == matchAry)
    return origStr;

  for (i = 0; i < matchAry.length; i++)
  {
    m = matchAry[i].replace('http://web.archive.org/web/20131226221735/http://pic.wretch.cc', 'http://web.archive.org/web/20131226221735/http://l.yimg.com/wretch.yimg.com');;
    newStr = newStr.replace(matchAry[i], m);
  }
  return newStr;
}

function show_external_bookmark(bm_url, bm_title)
{
  var bookmark_list = new Array();
  var i, t, name, url;

  bookmark_list[0] = 'Yahoo!奇摩,yahoo,http://tw.myweb2.search.yahoo.com/myresults/bookmarklet?ei=UTF-8&u=__U__&t=__T__';
  bookmark_list[1] = 'Furl,furl,http://www.furl.net/savedialog.jsp?v=1&u=__U__&t=__T__';
  bookmark_list[2] = 'Technorati,technorati,http://technorati.com/faves?sub=favthis&add=__U__&title=__T__';
  bookmark_list[3] = 'HEMiDEMi,hemidemi,http://www.hemidemi.com/user_bookmark/new?url=__U__&title=__T__';
  bookmark_list[4] = 'MyShare,myshare,http://myshare.url.com.tw/index.php?func=newurl&from=mysharepop&url=__U__&desc=__T__';
  bookmark_list[5] = 'udn,udn,http://bookmark.udn.com/add?f_URL=__U__&f_TITLE=__T__';
  bookmark_list[6] = 'funP,funp,http://funp.com/push/submit/?via=tools&url=__U__&title=__T__';
  bookmark_list[7] = 'del.icio.us,delicious,http://del.icio.us/post?v=4&noui&jump=close&url=__U__&title=__T__';
  bookmark_list[8] = 'Google,google,http://www.google.com/bookmarks/mark?op=add&bkmk=__U__&title=__T__';

  for (i = 0; i < 8; i++)
  {
    t = bookmark_list[i].split(',');
    if (t.length != 3)
      continue;
    name   = t[0];
    img    = t[1];
    url    = t[2];

    url = url.replace('__U__', encodeURIComponent('http://web.archive.org/web/20131226221735/http://www.wretch.cc/blog/' + bm_url));
    url = url.replace('__T__', encodeURIComponent(bm_title));
//    url = 'http://web.archive.org/web/20131226221735/http://tw.rd.yahoo.com/referurl/wretch/blog/bookmark/' + i + '/*' + url;

    document.write("<a href='" + url + "' target='_blank'><img src='http://web.archive.org/web/20131226221735/http://l.yimg.com/wretch.yimg.com/photos/icon/blog/bookmark/" + img + ".png' width='16' height='16' title='" + name + "' alt='" + name + " BookMark' border='0' /></a>&nbsp;&nbsp;");
  }
}

function extandTextarea(id)
{
  document.getElementById('comments-reply-edit-'+id).style.display = 'inline';  
}  

function closeTextarea(id)
{
  document.getElementById('comments-reply-edit-'+id).style.display = 'none';
}

/*
     FILE ARCHIVED ON 22:17:35 Dec 26, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:27:06 Dec 30, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 9.691
  exclusion.robots: 0.207
  PetaboxLoader3.resolve: 213.206 (2)
  load_resource: 140.403
  CDXLines.iter: 58.588 (3)
  LoadShardBlock: 272.991 (6)
  PetaboxLoader3.datanode: 161.675 (7)
  exclusion.robots.policy: 0.189
  esindex: 0.014
*/