/* Unica Page Tagging Script v1.1
 * Copyright 2004-2006 Unica Corporation.  All rights reserved.
 * Visit http://www.unica.com for more information.
 */

var NTPT_IMGSRC = 'include_common/NetInsight/ntpagetag.gif';

var NTPT_FLDS = new Object();
NTPT_FLDS.lc = true; // Document location
NTPT_FLDS.rf = true; // Document referrer
NTPT_FLDS.rs = true; // User's screen resolution
NTPT_FLDS.cd = true; // User's color depth
NTPT_FLDS.ln = true; // Browser language
NTPT_FLDS.tz = true; // User's timezone
NTPT_FLDS.jv = true; // Browser's Java support

var NTPT_MAXTAGWAIT = 1.0; // Max delay (secs) on link-tags and submit-tags

// Optional variables:
var NTPT_HTTPSIMGSRC = '';
var NTPT_GLBLEXTRA = '';
var NTPT_GLBLREFTOP = false;

/*** END OF USER-CONFIGURABLE VARIABLES ***/

function O0000(O0000O,O0O0OOO){return(eval("\x74\x79\x70\x65\x6f\x66\x20"+O0000O+"\x20\x21\x3d\x20\x22\x75\x6e\x64\x65\x66\x69\x6e\x65\x64\x22")?eval(O0000O):O0O0OOO);}function O00O000(O0OOO0,O000OO){return(O0OOO0+(((O0OOO0=='')||((O000OO=='')||(O000OO.substring((0xf6d+32-0xf8d),(0x14d8+2215-0x1d7e))=="\x26")))?'':"\x26")+O000OO);}function O000O0(){var O0O00O=new Date();return(O0O00O.getTime()+"\x2e"+Math.floor(Math.random()*(0xd43+2155-0x11c6)));}function O0OOO(OO0000,O00OO0){OO0OO[OO0000]=O00OO0.toString();}function OO0OO0(OO0000){OO0OO[OO0000]='';}function OO0OOOO(OOOOO){var O0O0OO='',O00OO,O0O000;OOO0O0(O0000("\x4e\x54\x50\x54\x5f\x47\x4c\x42\x4c\x45\x58\x54\x52\x41",''));if(!LnkLck)OOO0O0(O0000("\x4e\x54\x50\x54\x5f\x50\x47\x45\x58\x54\x52\x41",''));OOO0O0(OOOOO);for(O00OO in OO0OO){O0O000=OO0OO[O00OO];if(O0O000&&(O0O000!=''))O0O0OO=O00O000(O0O0OO,(O00OO+"\x3d"+(self.encodeURIComponent?encodeURIComponent(O0O000):escape(O0O000))));}return O0O0OO;}function OOO00OO(){var O00OO;OOOOOO.OO0OO=new Array();for(O00OO in OO0OO)OOOOOO.OO0OO[O00OO]=OO0OO[O00OO];}function O0OO00(){var O00OO;OO0OO=new Array();for(O00OO in OOOOOO.OO0OO)OO0OO[O00OO]=OOOOOO.OO0OO[O00OO];}function OOOO0O(O0OOOO,O0OO0O,OOOO0){if(OO0O0[O0OOOO]!=null){var O00O0O=new Function(O0OO0O);OO0O0[O0OOOO].onload=O00O0O;OO0O0[O0OOOO].onerror=O00O0O;OO0O0[O0OOOO].onabort=O00O0O;}setTimeout(O0OO0O,(OOOO0*(0x61e+1960-0x9de)));}function OO0O00(O0OO0,OO0OOO){if(O0OO0=='')return;OOO0O=((OOO0O+(0xd01+3643-0x1b3b))%OO0O0.length);if(OO0O0[OOO0O]==null)OO0O0[OOO0O]=new Image((0x459+2628-0xe9c),(0x11c2+1387-0x172c));OO0O0[OOO0O].src=O0OO0+"\x3f"+OO0OOO;}function O00000(OOOOO){var O0OO0;var OO0OOO;if((OOOO00!='')&&(document.location.protocol=="\x68\x74\x74\x70\x73\x3a"))O0OO0=OOOO00;else O0OO0=O00O00;OO0OOO=OO0OOOO(OOOOO);OO0O00(O0OO0,OO0OOO);O0OO00();}function OOO0O0(OOOOO){var OOO00O;var OO0O0O;if(!OOOOO)return;OOOOO=OOOOO.toString();if(OOOOO=='')return;OOO00O=OOOOO.split("\x26");for(OO0O0O=(0x41f+1956-0xbc3);OO0O0O<OOO00O.length;OO0O0O++){var O00OOO=OOO00O[OO0O0O].split("\x3d");if(O00OOO.length==(0x1fa5+1107-0x23f6))O0OOO(O00OOO[(0x1836+2183-0x20bd)],(self.decodeURIComponent?decodeURIComponent(O00OOO[(0x1084+3223-0x1d1a)]):unescape(O00OOO[(0x4cb+410-0x664)])));}}function OO000O(OOOOO){O0OOO("\x65\x74\x73",O000O0());O00000(OOOOO);return true;}function O0O00O0(O0O0O,OOOOO,OOOO0){var O00O0;if(!O0O0O||!O0O0O.href)return true;if(LnkLck)return false;LnkLck=O0O0O;if(OOO00.lc)O0OOO("\x6c\x63",O0O0O.href);if(OOO00.rf){if(!OOOOO0||!top||!top.document)O0OOO("\x72\x66",document.location);}OO000O(OOOOO);if(OOOO0)O00O0=OOOO0;else O00O0=NTPT_MAXTAGWAIT;if(O00O0>(0x7df+2430-0x115d)){var OO00OO;if(O0O0O.click){O0O0O.tmpclck=O0O0O.onclick;O0O0O.onclick=null;OO00OO="\x69\x66\x20\x28\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x29\x20\x7b\x20\x4c\x6e\x6b\x4c\x63\x6b\x2e\x63\x6c\x69\x63\x6b\x28\x29\x3b\x20\x4c\x6e\x6b\x4c\x63\x6b\x2e\x6f\x6e\x63\x6c\x69\x63\x6b\x20\x3d\x20\x4c\x6e\x6b\x4c\x63\x6b\x2e\x74\x6d\x70\x63\x6c\x63\x6b\x3b\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x3d\x20\x6e\x75\x6c\x6c\x3b\x20\x7d";}else OO00OO="\x69\x66\x20\x28\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x29\x20\x7b\x20\x77\x69\x6e\x64\x6f\x77\x2e\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x68\x72\x65\x66\x20\x3d\x20\x22"+O0O0O.href+"\x22\x3b\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x3d\x20\x6e\x75\x6c\x6c\x3b\x20\x7d";OOOO0O(OOO0O,OO00OO,O00O0);return false;}LnkLck=null;return true;}function O0OOO0O(OO000,OOOOO,OOOO0){var O00O0;if(!OO000||!OO000.submit)return true;if(FrmLck)return false;FrmLck=OO000;OO000O(OOOOO);if(OOOO0)O00O0=OOOO0;else O00O0=NTPT_MAXTAGWAIT;if(O00O0>(0x9e0+6857-0x24a9)){OO000.tmpsbmt=OO000.onsubmit;OO000.onsubmit=null;OOOO0O(OOO0O,"\x69\x66\x20\x28\x20\x46\x72\x6d\x4c\x63\x6b\x20\x29\x20\x7b\x20\x46\x72\x6d\x4c\x63\x6b\x2e\x73\x75\x62\x6d\x69\x74\x28\x29\x3b\x20\x46\x72\x6d\x4c\x63\x6b\x2e\x6f\x6e\x73\x75\x62\x6d\x69\x74\x20\x3d\x20\x46\x72\x6d\x4c\x63\x6b\x2e\x74\x6d\x70\x73\x62\x6d\x74\x3b\x20\x46\x72\x6d\x4c\x63\x6b\x20\x3d\x20\x6e\x75\x6c\x6c\x3b\x20\x7d",O00O0);return false;}FrmLck=null;return true;}var O00O00=NTPT_IMGSRC;var OOO00=NTPT_FLDS;var OOOO00=O0000("\x4e\x54\x50\x54\x5f\x48\x54\x54\x50\x53\x49\x4d\x47\x53\x52\x43",'');var OOOOO0=O0000("\x4e\x54\x50\x54\x5f\x50\x47\x52\x45\x46\x54\x4f\x50",O0000("\x4e\x54\x50\x54\x5f\x47\x4c\x42\x4c\x52\x45\x46\x54\x4f\x50",false));var OOO000=O0000("\x4e\x54\x50\x54\x5f\x4e\x4f\x49\x4e\x49\x54\x49\x41\x4c\x54\x41\x47",false);var ntptAddPair=O0OOO;var ntptDropPair=OO0OO0;var ntptEventTag=OO000O;var ntptLinkTag=O0O00O0;var ntptSubmitTag=O0OOO0O;var OO0OO=new Array();var OOOOOO=new Object();var OO0O0=Array((0xc53+5034-0x1ff3));var OOO0O;for(OOO0O=(0xc69+6583-0x2620);OOO0O<OO0O0.length;OOO0O++)OO0O0[OOO0O]=null;var LnkLck=null;var FrmLck=null;O0OOO("\x6a\x73","\x31");O0OOO("\x74\x73",O000O0());if(OOO00.lc)O0OOO("\x6c\x63",document.location);if(OOO00.rf){var O0O0O0;if(OOOOO0&&top&&top.document)O0O0O0=top.document.referrer;else O0O0O0=document.referrer;O0OOO("\x72\x66",O0O0O0);}if(self.screen){if(OOO00.rs)O0OOO("\x72\x73",self.screen.width+"\x78"+self.screen.height);if(OOO00.cd)O0OOO("\x63\x64",self.screen.colorDepth);}if(OOO00.ln){var OO00O;if(navigator.language)OO00O=navigator.language;else if(navigator.userLanguage)OO00O=navigator.userLanguage;else OO00O='';if(OO00O.length>(0xd3b+6466-0x267b))OO00O=OO00O.substring((0xb13+5400-0x202b),(0x8ca+5379-0x1dcb));OO00O=OO00O.toLowerCase();O0OOO("\x6c\x6e",OO00O);}if(OOO00.tz){var O0O00;var O0O00O=new Date();var O000O=O0O00O.getTimezoneOffset();var OOO0OO;O0O00="\x47\x4d\x54";if(O000O!=(0x10c4+3752-0x1f6c)){if(O000O>(0xc86+1771-0x1371))O0O00+="\x20\x2d";else O0O00+="\x20\x2b";O000O=Math.abs(O000O);OOO0OO=Math.floor(O000O/(0x1840+1703-0x1eab));O000O-=OOO0OO*(0x13b1+2037-0x1b6a);if(OOO0OO<(0x41+6971-0x1b72))O0O00+="\x30";O0O00+=OOO0OO+"\x3a";if(O000O<(0x1026+3918-0x1f6a))O0O00+="\x30";O0O00+=O000O;}O0OOO("\x74\x7a",O0O00);}if(OOO00.jv){var OO00O0;if(navigator.javaEnabled())OO00O0="\x31";else OO00O0="\x30";O0OOO("\x6a\x76",OO00O0);}OOO00OO();if(!OOO000)O00000('');
