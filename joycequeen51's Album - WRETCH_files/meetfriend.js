function MeetFriend(link, p) {
    var pi = p.selectedIndex;
    var s = p.options[pi].value;
    if (s) {
        var url = link + s;
        var WindowObj = window.open(url, "_blank");
        try {
            var obj = WindowObj.name;
        } catch (e) {
            alert(Wretch.lang.show.meetFriends);
        }
    }
}


function cbox_switch(arg) {
    var myform = document.func;
    for (var i = 0; i < myform.elements.length; i++) {
        if (myform.elements[i].type === "checkbox") {
            myform.elements[i].checked = arg;
        }
    }
}

function cbox_switch2(myform, arg) {
    for (var i = 0; i < myform.elements.length; i++) {
        if (myform.elements[i].type === "checkbox") {
            myform.elements[i].checked = arg;
        }
    }
}

function cbox_switch3(myform, arg, base, offset) {
    var begin = base * offset;
    var end = begin + offset;
    var j = -1;
    for (var i = 0; i < myform.elements.length; i++) {
        if (myform.elements[i].type === "checkbox") {
            j++;
            if (j >= begin && j < end) {
                myform.elements[i].checked = arg;
            }
        }
    }
}

function cbox_switch4(myform, arg, base, offset) {
    var begin = base * offset;
    var end = begin + offset;
    var j = -1;
    var value;
    if (arg === 1) {
        value = true;
    } else {
        value = false;
    }
    for (var i = 0; i < myform.elements.length; i++) {
        if (myform.elements[i].type === "checkbox") {
            j++;
            if (j >= begin && j < end) {
                myform.elements[i].checked = value;
            }
        }
    }
}

function returnImage(id, book, path) {
    var myform = document.func;
    var obj = Array();

    obj.id = id;
    obj.book = book;
    obj.path = path;

    for (var i = 0; i < myform.elements.length; i++) {
        if (myform.elements[i].type === "checkbox" && myform.elements[i].checked) {
            obj.pic = myform.elements[i].value.substring(0, 10) + ".jpg";
            break;
        }
    }

    if (document.all) {
        window.returnValue = obj;
    } else {
        //opener.Dialog._return(obj);
        opener.insertPicFromFF(obj);
    }
    window.close();
}

// for IE user promote editor

function returnSelectedImageByPromote(id, book, path) {
    var myform = document.func;
    var obj = Array();

    obj.id = id;
    obj.book = book;
    obj.path = path;

    for (var i = 0; i < myform.elements.length; i++) {
        if (myform.elements[i].type === "checkbox" && myform.elements[i].checked) {
            var obit_selected = document.getElementsByName("obit_" + myform.elements[i].value);
            var sig_selected = document.getElementsByName("sig_" + myform.elements[i].value);
            var selected_image_sig = sig_selected[0].value;

            if (obit_selected[0].value === '2') {
                obj.pic = myform.elements[i].value.substring(0, 10) + ".flv";
                var width = document.getElementsByName("width_" + myform.elements[i].value);
                obj.width = width[0].value;
                var height = document.getElementsByName("height_" + myform.elements[i].value);
                obj.height = height[0].value;
            } else if (obit_selected[0].value === '3') {
                obj.pic = myform.elements[i].value.substring(0, 10) + ".mp3";
            } else {
                obj.pic = myform.elements[i].value.substring(0, 10) + ".jpg" + selected_image_sig;
            }
            break;
        }
    }

    if (document.all) {
        window.returnValue = obj;
    } else {
        //opener.Dialog._return(obj);
        opener.insertPicFromFF(obj);
    }
    window.close();
}

function returnSelectedImage(id, book, path) {
    var myform = document.func;
    var obj = Array();

    obj.id = id;
    obj.book = book;
    obj.path = path;
    obj.link = "";
    obj.pic = Array();

    for (var i = 0; i < myform.elements.length; i++) {
        if (myform.elements[i].type === "checkbox" && myform.elements[i].checked) {
            var obit_selected = document.getElementsByName("obit_" + myform.elements[i].value);

            if (obit_selected[0].value === '2') {
                obj.pic.push(myform.elements[i].value.substring(0, 10) + ".flv");
                var width = document.getElementsByName("width_" + myform.elements[i].value);
                obj.width = width[0].value;
                var height = document.getElementsByName("height_" + myform.elements[i].value);
                obj.height = height[0].value;
            } else if (obit_selected[0].value === '3') {
                obj.pic.push(myform.elements[i].value.substring(0, 10) + ".mp3");
            } else if (obit_selected[0].value === '0' || obit_selected[0].value === '1') {
                obj.pic.push(myform.elements[i].value.substring(0, 10) + ".jpg");
            } else if (obit_selected[0].value === 'close') {
                obj.link = true;
            }
        }
    }

    if (document.all) {
        window.returnValue = obj;
        window.close();
    } else {
        //opener.Dialog._return(obj);
        opener.insertPicFromFF(obj);
        window.close();
    }
}

/*
function returnImage(id, book, path, is_popup)
{
  var myform = document.func;
  var obj = Array();
  obj.id = id.toLowerCase();
  obj.book = book;
  obj.path = path;
  for(var i = 0; i < myform.elements.length; i++)
  {
    if(myform.elements[i].type == "checkbox" && myform.elements[i].checked)
    {
      obj.pic = myform.elements[i].value;
      break;
    }
  }
  var c = obj.id.charAt(0);
  var img = "http://" + c + ".pic.wretch.cc/photos/" + obj.path + "/" + c + "/" + obj.id.toLowerCase() + "/" + obj.book + "/" + obj.pic;
  eval("opener.document.getElementsByName('" + is_popup + "')='" + img + "'");
}
*/

// sheviks: this should be obsolete
/*
function insertImage(id, p, PicServer)
{
  var pi = p.selectedIndex;
  var book = p.options[pi].value;
  if(book == -1)
    return "";
  var obj = 
    showModalDialog("http://web.archive.org/web/20131225110225/http://www.wretch.cc/album/album.php?id=" + id + "&book=" + book + "&is_popup=1", window, 
      "resizable: no; help: no; status: yes; scroll: yes; DialogHeight: 600px; DialogWidth: 800px; unadorned: yes;");
  if(obj)
  {
    obj.id = obj.id.toLowerCase();
    var c = obj.id.charAt(0);
    //var kk = 0;
    //kk = Math.abs(getCRC32(obj.id)%32) + 1;
    //var img = "http://web.archive.org/web/20131225110225/http://pic" + kk + ".pic.wretch.cc/photos/" + obj.path + "/" + c + "/" + obj.id.toLowerCase() + "/" + obj.book + "/" + obj.pic;
    //var img = "http://web.archive.org/web/20131225110225/http://pic" + (k.getCRC(obj.id,0,32) ) + ".pic.wretch.cc/photos/" + obj.path + "/" + c + "/" + obj.id.toLowerCase() + "/" + obj.book + "/" + obj.pic;
    //var img = "http://" + c + obj.path + ".pic.wretch.cc/photos/" + obj.path + "/" + c + "/" + obj.id.toLowerCase() + "/" + obj.book + "/" + obj.pic;
    var img = PicServer + "photos/" + obj.path + "/" + c + "/" + obj.id.toLowerCase() + "/" + obj.book + "/" + obj.pic.substring(0,10) + ".jpg";
    return img;
  }
  return "";
}
function insertImage2(popupLink)
{
  window.open(popupLink, '_blank', 'height=600, width=800, directories=0, location=0, menubar=0, titlebar=0, resizable=1, scrollbars=0, copyhistory=0');
}
*/



function select_color(formName, fieldName, initValue) {
    Dialog("select_color.html", function(color) {
        if (color) { /* alert(formName + "." + fieldName + ".value='#" + color + "'");  */
            eval(formName + "." + fieldName + ".value='#" + color + "'");
            eval(formName + "." + fieldName + ".focus();");
        }
    }, initValue);
}

function check_sel_album(book, msg) {
    if (book) {
        if (book.checked) return true;

        for (i = 0; i < book.length; i++) {
            if (book[i].checked) {
                return true;
            }
        }
    }

    alert(msg);
    return false;
}

function check_sel_album2(form, msg) {
    for (i = 0; i < form.elements.length; i++) {
        var obj = form.elements[i];
        if (obj.type === "checkbox" && obj.checked) {
            return true;
        }
    }
    alert(msg);
    return false;
}

function check_del_album(book, msg1, msg2) {
    if (check_sel_album(book, msg1)) {
        return confirm(msg2);
    }
    return false;
}

function check_del_album2(form, msg1, msg2) {
    if (check_sel_album(form, msg1)) {
        return confirm(msg2);
    }

    return false;
}


function check_sel_pic(myform, msg) {
    for (i = 0; i < myform.elements.length; i++) {
        if (myform.elements[i].type === "checkbox" && myform.elements[i].checked) {
            return true;
        }
    }

    alert(msg);
    return false;
}

function check_del_pic(myform, msg1, msg2) {
    if (check_sel_pic(myform, msg1)) {
        return confirm(msg2);
    }

    return false;
}



function check_select_style(style, msg) {
    if (style) {
        if (style.check) {
            return true;
        }

        for (i = 0; i < style.length; i++) {
            if (style[i].checked) {
                return true;
            }
        }
    }

    alert(msg);
    return false;
}

function style_choosed(style_array) {
    if (style) {
        for (i = 0; i < style_array.length; i++) {
            if (style_array[i].checked) {
                return style_array[i].value;
            }
        }

    }
}


function layer_toggle(obj) {
    if (obj.style.display === 'none') {
       obj.style.display = 'block';
    } else if (obj.style.display === 'block') {
        obj.style.display = 'none';
      }	
}

function onclick_folder(hc, fd, url, check) {
    if (check === '0') {
        layer_toggle(hc);
    }
    else if (hc.style.display === 'none') {
        if (fd) {
            fd.src = url + 'minus.gif';
        }
        layer_toggle(hc);
    }
    else {
        if (fd) {
            fd.src = url + 'plus.gif';
        }
        layer_toggle(hc);
    }
}

/*
function goto(choose, base ,target) {
  var selected=choose.options[choose.selectedIndex].value;
  if(selected != ""){
      location.href=base+"&"+target+"="+selected;
  }
}
*/

function Trim(TRIM_VALUE) {
    if (TRIM_VALUE.length < 1) {
        return "";
    }
    TRIM_VALUE = RTrim(TRIM_VALUE);
    TRIM_VALUE = LTrim(TRIM_VALUE);
    if (TRIM_VALUE === "") {
        return "";
    }
    else {
        return TRIM_VALUE;
    }
} /*End Function*/

function RTrim(VALUE) {
    var w_space = String.fromCharCode(32);
    var v_length = VALUE.length;
    var strTemp = "";
    if (v_length < 0) {
        return "";
    }
    var iTemp = v_length - 1;

    while (iTemp > -1) {
        if (VALUE.charAt(iTemp) === w_space) {} else {
            strTemp = VALUE.substring(0, iTemp + 1);
            break;
        }
        iTemp = iTemp - 1;

    } //End While
    return strTemp;

} //End Function

function LTrim(VALUE) {
    var w_space = String.fromCharCode(32);
    if (v_length < 1) {
        return "";
    }
    var v_length = VALUE.length;
    var strTemp = "";

    var iTemp = 0;

    while (iTemp < v_length) {
        if (VALUE.charAt(iTemp) === w_space) {} else {
            strTemp = VALUE.substring(iTemp, v_length);
            break;
        }
        iTemp = iTemp + 1;
    } //End While
    return strTemp;
} //End Function

function switch_table(table_array, table_idx) {
    var obj, i;
    for (i = 0; i < table_array.length; i++) {
        obj = document.getElementById(table_array[i]);
        if (i === table_idx) {
            obj.style.display = "";
        } else {
            obj.style.display = "none";
        }
    }
}

function set_category_str(view, target_view1) {
    var str;
    if (view.selectedIndex >= 0) {
        str = view[view.selectedIndex].text;
        target_view1.value = str.substring(0, str.lastIndexOf('(') - 1);
    }
}

function set_category_text(view, textfield) {
    var str, cid;
    if (view.selectedIndex >= 0) {
        str = view[view.selectedIndex].text;
        str = str.slice(str.lastIndexOf('(') - 1, str.length);
        view[view.selectedIndex].text = textfield.value + str;

        str = view[view.selectedIndex].value;
        cid = str.slice(0, str.indexOf('_'));
        view[view.selectedIndex].value = cid + "_" + textfield.value;
        textfield.value = '';
    }
}

function submit_and_select_all(view) {
    for (i = 0; i < view.length; i++)
    {
        view[i].selected = true;
    }
}

// sheviks: this should be obsolete

function writeBackImageURL(form_name, component_name, PicServer, path, userid, book) {
    var imageComponent = document.getElementsByName('selected[]');
    var image_number = '';
    for (i = 0; i < imageComponent.length; i++) {
        if (imageComponent[i].checked) {
            image_number = imageComponent[i].value;
            image_number = image_number.substring(0, 10) + ".jpg";
            break;
        }
    }
    if (image_number === '') {
        return;
    }

    userid = userid.toLowerCase();
    var head_char = userid.charAt(0);
    var image_source = PicServer + "photos/" + path + "/" + head_char + "/" + userid.toLowerCase() + "/" + book + "/" + image_number;
    var url = "http://web.archive.org/web/20131225110225/http://www.wretch.cc/album/show.php?i=" + userid + "&b=" + book + "&f=" + image_number;
    var str = '<a target="_blank" href="' + url + '"><img border="0" src="' + image_source + '"></a>';
    var target_form = eval('opener.document.' + form_name);
    var opener_text_component;
    if (target_form) {
        opener_text_component = eval('opener.document.' + form_name + '.' + component_name);
    } else {
        opener_text_component = eval("opener.document.getElementById('" + component_name + "')");
    }
    opener_text_component.focus();

    if (opener.document.selection) {
        sel = opener.document.selection.createRange();
        sel.text = str;
    } else {
        opener_text_component.value = opener_text_component.value + str;
    }

    opener_text_component.focus();
    close();
}

function get_blog_image_url(PicServer, path, userid, book, image_number, image_type, width, height, link, sig) {
    var img = get_image_url(PicServer, path, userid, book, image_number, image_type, sig);
    var head_char = userid.charAt(0);
    if (image_number.indexOf(".flv") > -1) {
        var xname = image_number.split('.');
        var thumb = get_image_url(PicServer, path, userid, book, xname[0] + '.jpg', 's', sig);
        //var str = '<embed src="http://web.archive.org/web/20131225110225/http://pic.wretch.cc/icon/flvplayer.swf?autoStart=false&file='+img+'" width="'+width+'" height="'+height+'" wmode="transparent">\r\n';
        var str = '<embed src="http://web.archive.org/web/20131225110225/http://pic.wretch.cc/photos/serv/video/video_player/WretchPlayer.swf" quality="high" width="440" height="352" name="WretchPlayer2" align="middle" type="application/x-shockwave-flash" pluginspage="http://web.archive.org/web/20131225110225/http://www.macromedia.com/go/getflashplayer" allowfullscreen="true" flashvars="file=' + img + '&thumb=' + thumb + '&feedPath=http://www.wretch.cc/video/playlist.php&callback=http://www.wretch.cc/video/embed/c' + head_char + '"/>\r\n';
    }
    else if (image_number.indexOf(".mp3") > -1) {
        var pic_dynamic = 'http://web.archive.org/web/20131225110225/http://pic.wretch.cc/e';
/*
        var str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://web.archive.org/web/20131225110225/http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="400" height="80">';
        str += '<param name="movie" value="'+pic_dynamic+'/serv/video/video_player/player.swf?file='+img+'&skin='+pic_dynamic + '/serv/video/video_player/wretch-skin.xml" />';
        str += '<param name="quality" value="high" />';
		str += '<embed src="'+pic_dynamic+'/serv/video/video_player/player.swf" flashvars="file='+img+'&skin='+pic_dynamic + '/serv/video/video_player/wretch-skin.xml" width="400" height="20" quality="high" pluginspage="http://web.archive.org/web/20131225110225/http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/>';
        str += '</object>';
*/
        var str = '<a href="' + img + '" class="htrack">' + image_number + '</a>';
        str += '<script type="text/javascript"> var YWPParams = { autoplay: false, volume: 0.5, parse: true, displaystate: 0}; </script>';
        str += '<script type="text/javascript" src="http://web.archive.org/web/20131225110225/http://webplayer.yahooapis.com/player.js"></script>';
    } else {
        var url = "http://web.archive.org/web/20131225110225/http://www.wretch.cc/album/show.php?i=" + userid + "&b=" + book + "&f=" + image_number;
        if (link) {
            var str = '<img border="0" src="' + img + '">\r\n';
        } else {
            var str = '<a target="_blank" href="' + url + '"><img border="0" src="' + img + '"></a>\r\n';
        }	
    }

    return str;
}

function get_image_url(PicServer, path, userid, book, image_number, image_type, sig) {
    userid = userid.toLowerCase();
    var head_char = userid.charAt(0);

    if (image_type === 'b') {
        return PicServer + userid.toLowerCase() + "/" + book + "/" + image_number + sig;
    }

    if (image_type === 's') {
        return PicServer + userid.toLowerCase() + "/" + book + "/thumbs/t" + image_number + sig;
    }
}

function writeImageInfoBack(form_name, component_name, PicServer, path, userid, book, value_type) {
    if (!value_type) {
        value_type = 'default';
    }

    if (document.getElementById('link_close')) {
        var link = document.getElementById('link_close').checked;
    }
    var imageComponent = document.getElementsByName('selected[]');

    var width, height;
    var result_url = '';
    // sheviks: multi is for blog only
    if (value_type.indexOf('multi') > -1 || value_type === 'hala_image_url') {
        for (i = 0; i < imageComponent.length; i++) {
            if (imageComponent[i].checked) {
                var selected_image_xname = imageComponent[i].value;
                var sig_selected = document.getElementsByName("sig_" + selected_image_xname);
                var selected_image_sig = sig_selected[0].value;
                // sheviks: blog only
                if (value_type.indexOf('multi') > -1) {
                    var obit_selected = document.getElementsByName("obit_" + selected_image_xname);
                    if (obit_selected[0].value === '2') {
                        var tmp;
                        tmp = document.getElementsByName("width_" + selected_image_xname);
                        width = tmp[0].value;
                        tmp = document.getElementsByName("height_" + selected_image_xname);
                        height = tmp[0].value;
                        selected_image_xname = selected_image_xname.substring(0, 10) + ".flv";
                    }
                    else if (obit_selected[0].value === '3') {
                        selected_image_xname = selected_image_xname.substring(0, 10) + ".mp3";
                    } else {
                        selected_image_xname = selected_image_xname.substring(0, 10) + ".jpg";
                    }
                }
                else {
                    selected_image_xname = selected_image_xname.substring(0, 10) + ".jpg";
                }

                if (value_type === 'multi_big_image_url') {
                    result_url += get_blog_image_url(PicServer, path, userid, book, selected_image_xname, 'b', width, height, link, selected_image_sig) + "\n";
                } else if (value_type === 'hala_image_url') {
                    result_url += '[img]' + get_image_url(PicServer, path, userid, book, selected_image_xname, 'b', selected_image_sig) + "[/img]\n";
                } else if (value_type === 'multi_small_image_url') {
                    result_url += get_blog_image_url(PicServer, path, userid, book, selected_image_xname, 's', width, height, link, selected_image_sig) + "\n";
                }
            }
        }
    } else {
        for (i = 0; i < imageComponent.length; i++) {
            if (imageComponent[i].checked) {
                var selected_image_xname = imageComponent[i].value;
                var sig_selected = document.getElementsByName("sig_" + selected_image_xname);
                var selected_image_sig = sig_selected[0].value;
                if (value_type === 'profile') {
                    var obit_selected = document.getElementsByName("obit_" + selected_image_xname);
                    if (obit_selected[0].value === '2') {
                        selected_image_xname = selected_image_xname.substring(0, 10) + ".flv";
                    } else if (obit_selected[0].value === '3') {
                        selected_image_xname = selected_image_xname.substring(0, 10) + ".mp3";
                    } else {
                        selected_image_xname = selected_image_xname.substring(0, 10) + ".jpg";
                    }
                }
                else {
                    selected_image_xname = selected_image_xname.substring(0, 10) + ".jpg";
                }

                if (value_type === 'big_image_url') {
                    result_url = get_image_url(PicServer, path, userid, book, selected_image_xname, 'b', selected_image_sig) + "\n";
                } else if (value_type === 'small_image_url') {
                    result_url = get_image_url(PicServer, path, userid, book, selected_image_xname, 's', selected_image_sig) + "\n";
                } else if (value_type === 'default') {
                    result_url = get_image_url(PicServer, path, userid, book, selected_image_xname, 's', selected_image_sig) + "\n";
                } else if (value_type === 'profile') {
                    if (selected_image_xname.indexOf(".flv") > -1) {
                        result_url = get_image_url(PicServer, path, userid, book, selected_image_xname.substring(0, 10) + ".jpg", 's', selected_image_sig) + "\n";
                    } else if (selected_image_xname.indexOf(".mp3") > -1) {
                        result_url = "http://web.archive.org/web/20131225110225/http://l.yimg.com/wretch.yimg.com/icon/album/music-2.gif\n";
                    } else {
                        result_url = get_image_url(PicServer, path, userid, book, selected_image_xname, 's', selected_image_sig) + "\n";
                    }
                }

                break;
            }
        }

    }

    if (result_url === '') {
        return;
    }

    if (value_type === 'default' || value_type === 'profile') {
        var book_component = eval('opener.document.' + form_name + '.' + component_name + 'Book');
        book_component.value = book;

        var xname_component = eval('opener.document.' + form_name + '.' + component_name + 'Xname');
        xname_component.value = selected_image_xname;

        var image_component = eval('opener.document.' + form_name + '.' + component_name + 'Display');
        image_component.src = result_url;
    } else if (value_type === 'hala_image_url' || value_type === 'multi_big_image_url' || value_type === 'multi_small_image_url') {
        var target_form = eval('opener.document.' + form_name);
        if (target_form) {
            target = eval('opener.document.' + form_name + '.' + component_name);
        } else {
            target = eval("opener.document.getElementById('" + component_name + "')");
        }
        target.focus();
        target.value += result_url;
    } else if (value_type === 'big_image_url') {
        var target_form = eval('opener.document.' + form_name);
        if (target_form) {
            target = eval('opener.document.' + form_name + '.' + component_name);
        } else {
            target = eval("opener.document.getElementById('" + component_name + "')");
        }
        target.focus();
        target.value += result_url;
    } else if (value_type === 'small_image_url') {
        var target_form = eval('opener.document.' + form_name);
        if (target_form) {
            target = eval('opener.document.' + form_name + '.' + component_name);
        } else {
            target = eval("opener.document.getElementById('" + component_name + "')");
        }
        target.focus();
        target.value += result_url;
    }

    close();
}

/*
     FILE ARCHIVED ON 11:02:25 Dec 25, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:19:16 Dec 30, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.016
  captures_list: 397.676
  CDXLines.iter: 18.757 (3)
  LoadShardBlock: 363.366 (3)
  PetaboxLoader3.resolve: 441.325 (3)
  load_resource: 378.692
  RedisCDXSource: 10.181
  exclusion.robots: 0.228
  exclusion.robots.policy: 0.216
  PetaboxLoader3.datanode: 290.491 (5)
*/