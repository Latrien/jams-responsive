/***********************************************
* dropdown CSS Menu script- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/

var disappeardelay=250  //menu disappear speed onMouseout (in miliseconds)
var enableanchorlink=0 //Enable or disable the anchor link when clicked on? (1=e, 0=d)
var hidemenu_onclick=1 //hide menu when user clicks within menu? (1=yes, 0=no)

/////No further editting needed

var ie5=document.all
var ns6=document.getElementById&&!document.all

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
//var str = what.tagName + " " + what.className + " " + what.offsetLeft + " " + totaloffset + "-----\n";;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
//if(offsettype=="left")
//	str = str + parentEl.tagName + " " + parentEl.className + " " + parentEl.offsetLeft + " " + totaloffset + "-----\n";
parentEl=parentEl.offsetParent;
}
//if(offsettype=="left")alert(str);
return totaloffset;
}

function showhide(obj, e, visible, hidden){
if (ie5||ns6)
dropmenuobj.style.left=dropmenuobj.style.top=-500
if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
obj.visibility=visible
else if (e.type=="click")
obj.visibility=hidden
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=0
if (whichedge=="rightedge"){
var windowedge=ie5 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
}
else{
var topedge=ie5 && !window.opera? iecompattest().scrollTop : window.pageYOffset
var windowedge=ie5 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure){ //move up?
edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
if ((dropmenuobj.y-topedge)<dropmenuobj.contentmeasure) //up no good either?
edgeoffset=dropmenuobj.y+obj.offsetHeight-topedge
}
}
return edgeoffset
}

function showmenu(obj, e, dropmenuID){
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
if (typeof dropmenuobj!="undefined") //hide previous menu
dropmenuobj.style.visibility="hidden"
clearhidemenu()
if (ie5||ns6){
obj.onmouseout=delayhidemenu
dropmenuobj=document.getElementById(dropmenuID)
if (hidemenu_onclick) dropmenuobj.onclick=function(){dropmenuobj.style.visibility='hidden'}
dropmenuobj.onmouseover=clearhidemenu
dropmenuobj.onmouseout=ie5? function(){ dynamichide(event)} : function(event){ dynamichide(event)}
showhide(dropmenuobj.style, e, "visible", "hidden")
dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
if(dropmenuID=="xprMenuPart_c2d13ef1_3bd7_4973_98a9_d88fc627c35d_c1d8fb2c_41ac_4b27_afd6_728e57bdaa95")
{
	dropmenuobj.style.left = dropmenuobj.x-(dropmenuobj.contentmeasure-obj.offsetWidth)+"px"
}
if(isIE()){
    dropmenuobj.style.top= dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
}

}
return clickreturnvalue()
}

function clickreturnvalue(){
if ((ie5||ns6) && !enableanchorlink) return false
else return true
}

function contains_ns6(a, b) {
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}

function dynamichide(e){
if (ie5&&!dropmenuobj.contains(e.toElement))
delayhidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
delayhidemenu()
}

function delayhidemenu(){
delayhide=setTimeout("dropmenuobj.style.visibility='hidden'",disappeardelay)
}

function clearhidemenu(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}	

function isIE () {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

<!-- // Hide from old browsers

//navitem1on = new Image();
//navitem1on.src = "/img/nav1/lo_navitem1.gif";
//navitem1off = new Image();
//navitem1off.src = "/img/nav1/l_navitem1.gif";

//navitem2on = new Image();
//navitem2on.src = "/img/nav1/lo_navitem2.gif";
//navitem2off = new Image();
//navitem2off.src = "/img/nav1/l_navitem2.gif";

// FUNCTIONS
function
lo(imgName) {
imgon = eval(imgName + "on.src");
document [imgName].src = imgon;
}
function
l(imgName) {
imgoff = eval(imgName + "off.src");
document [imgName].src = imgoff;
}
// END HIDING FROM OLDER BROWSERS -->

(function() {
   if(typeof jQuery == 'undefined'){
   	   var script = document.createElement('script');
   	   script.type = "text/javascript";
   	   script.src = "http://www.jamsadr.com/FCWSite/Include/jquery-1.8.3.min.js";
   	   document.getElementsByTagName('head')[0].insertBefore(script, document.getElementsByTagName('head')[0].firstChild);
   	}
})();

var viewPortTag=document.createElement('meta');
viewPortTag.id="viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width, initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);

//mobile menu creation
function mobileNav_init(){	
	$('.headerA .header').append('<div class="mobile-nav"></div>');
	$('.mobile-nav').append('<div class="menu-btn" id="menu-btn"><div></div><span></span><span></span><span></span></div>');
	$('.mobile-nav').append('<div class="mobileMenu"></div>');
	var searchBar = $('#txtSiteSearchQu').detach();
	var searchButton = $('.sitesearch').find('input[type=submit]').attr('value', 'Search').detach();
	$('.mobileMenu').append('<div class="mobileSearchBar"></div>');
	$('.mobileSearchBar').append('<span>To search for a phrase, enclose it "in quotes"</span>');
	$('.mobileSearchBar').append(searchBar);
	$('.mobileSearchBar').append(searchButton);
	$('.mobileMenu').append('<ul class="parentMenu"></ul>');

	var htmlArray = [];
	var urlArray = [];
	$('.nav1 ul li').find('a').each(function(index){
		var subMenuID = $(this).attr('onmouseover');
		
		if(subMenuID != undefined){			
			htmlArray.push($('#'+subMenuID.split("'")[1]).html());
			urlArray.push("subMenu");
		}else{
			htmlArray.push("noSubMenu");
			urlArray.push($(this).attr('href'));
		}
	});

	$('.nav1 ul li').find('img').each(function(index) {
		var listItem = document.createElement("li");
		listItem.className = 'subSwitch';

		var menuLink = document.createElement("a");
		menuLink.href = 'javascript:void(0)';

		var subMenuContainer = document.createElement("div");
		subMenuContainer.className = 'subMenu';
		if(htmlArray[index] != "noSubMenu"){
			subMenuContainer.innerHTML = htmlArray[index];
		}else{
			listItem.className = '';
			menuLink.href = urlArray[index];
		}

		var spanItem = document.createElement("span");
		spanItem.innerHTML = $(this).attr('navtext');
		spanItem.className = "navSpan";


		listItem.appendChild(spanItem);
		listItem.appendChild(subMenuContainer);
		menuLink.appendChild(listItem);

		$('.mobileMenu ul.parentMenu').append(menuLink);
	});	

	var subHtmlArray = [];
	var subUrlArray = [];

	$('.subnav ul li').find('a').each(function(index){
		var subMenuID = $(this).attr('onmouseover');
		
		if(subMenuID != undefined){			
			subHtmlArray.push($('#'+subMenuID.split("'")[1]).html());
			subUrlArray.push("subMenu");
		}else{
			subHtmlArray.push("noSubMenu");
			subUrlArray.push($(this).attr('href'));
		}
	});

	$('.subnav ul li').find('a').each(function(index) {
		var listItem = document.createElement("li");
		listItem.className = 'subSwitch';

		var menuLink = document.createElement("a");
		menuLink.href = 'javascript:void(0)';

		var subMenuContainer = document.createElement("div");
		subMenuContainer.className = 'subMenu';
		if(subHtmlArray[index] != "noSubMenu"){
			subMenuContainer.innerHTML = subHtmlArray[index];
		}else{
			listItem.className = '';
			menuLink.href = subUrlArray[index];
		}

		var spanItem = document.createElement("span");
		spanItem.innerHTML = $(this).text();
		spanItem.className = "navSpan";


		listItem.appendChild(spanItem);
		listItem.appendChild(subMenuContainer);
		menuLink.appendChild(listItem);

		$('.mobileMenu ul.parentMenu').append(menuLink);
	});	
}

var responsiveApp = {
	menuBtn : function(){
		$('.mobileMenu').fadeToggle(400);
		//
	},
	subSwitch : function(){
		$(this).children('.subMenu').slideToggle();
		//
	},
	subMenu : function(event){
		event.stopPropagation();
		//
	},
	navSlider : function(){
		if($(window).width()<500){
			$('.carouselitems .item img').each(function() {
				$(this).attr('src', $(this).attr('responsivesrc'));
			});
		}
		//
	},
	neutralDetails : function(){
		var bioSwitcher = $('.responsiveBioSwitcher').detach();
		$('.leftside .image').append(bioSwitcher);
		$('.narrativebio p').each(function(){
			if($(this).index()>1){
				$(this).hide();
			}else{
				$(this).append("<div style='margin-top:17px;' id='readMoreButton'><a href='javascript:void(0);'>Read more</a></div>");
			}
		});

		$('.narrativebio ul').each(function(){
			if($(this).index()>1){
				$(this).hide();
			}
		});

		$('.details .ceinfo').each(function(){
			$(this).hide();
		});
		//
	},
	readMoreBtn : function(){		
		$('.narrativebio p, .narrativebio ul, .details .ceinfo').each(function(){
			$(this).fadeIn();
		});
		$('#readMoreButton').remove();
	},
	specialties : function(){		
		$('.responsiveBioSwitcher ul').fadeToggle();
		//
	},
	biography : function(){		
		$('html,body').animate({scrollTop: $(".bioTitle").offset().top},300);
		//
	},
	locationDetails: function(){
		$('.officesdetail').find('.sectioninfo').find('script').remove();
		var officeDetailSwitcher = $('.officesdetail').find('.sectioninfo').detach();
		$('.officesdetail').find('.details').find('.contact').append(officeDetailSwitcher);
	},
	shortenNeutralQuote: function(){
		$('.shortenQuote em:first-of-type').addClass('keepVisible');
		$('.shortenQuote em').each(function(){
			if(!$(this).hasClass("keepVisible")){
				$(this).addClass("invisibleQuote").hide();
			}
		});
		$('.keepVisible').append("<div style='margin-top:17px; display: inline;' id='quoteReadMore'><a href='javascript:void(0);'>... Read more</a></div>");
	},
	quoteReadMoreTrigger: function(){
		$('#quoteReadMore').hide();
		$('.shortenQuote em').each(function(){
			$(this).show();			
		});
	},
	neutralDetailsLocationSwitch: function(){
		var locSwitcher = $('.switchLocation .office').detach();		
		$('.shortenQuote').parent().append(locSwitcher);
		$('.shortenQuote').parent().find('.office').prepend('<h2>Locations</h2>').css('order','3');
		$('.shortenQuote').parent().find('.office').find('ul').css('margin-top','15px');
		//
	},
	renameLocationListing: function(){
		$('.officeslisting').find('.middle .top').text("Locations");
		//
	},	
	neutralsSearchSeeMore: function(){
		$('.moreNeutrals').append("<div class='searchSeeMore' id='searchSeeMore'><a href='javascript:void(0);'>See more</a></div>");
		$('.moreNeutrals p').each(function(){
			if($(this).index() > 3){
				$(this).hide();
			}
		});
	},
	neutralsSearchSeeMoreTrigger: function(){
		$('.moreNeutrals p').each(function(){
			$(this).fadeIn();
		});
		$('#searchSeeMore a').remove();
	},
	cleMenuInit: function(){
		var titleNo = 0;
		$('.CLEMenu').find('tr').each(function(){
			if($(this).hasClass('titleRow')){
				$(this).attr('openRows', titleNo);
				titleNo++;
			}else{
				$(this).attr('contentRow', titleNo-1);
				$(this).hide();
			}
		});
	},
	cleMenuTrigger: function(){
		var makeVisible = $(this).attr('openRows');
		$("tr[contentrow='" + makeVisible + "']").each(function(index, el) {
			$(this).fadeToggle(300);
		});
	},
	jamsConnectShorten: function(){
		$('.textblock_JamsConnectDescription p').each(function(){
			if($(this).index()>11){
				$(this).hide();
			}else if($(this).index()==11){
				$(this).append("<div style='margin-top:17px; display: inline;' id='jamsConnectReadMore'><a href='javascript:void(0);'>... Read more</a></div>");
			}
		});
		$('.textblock_JamsConnectDescription ul').each(function(){
			if($(this).index()>12){
				$(this).hide();
			}
		});		
	},
	jamsConnectReadMoreTrigger: function(){
		$('.textblock_JamsConnectDescription p').each(function(){
			$(this).show();
		});
		$('.textblock_JamsConnectDescription ul').each(function(){
			$(this).show();			
		});	
		$('#jamsConnectReadMore').hide();
	},
	pdfDownloadSwitch: function(){
		$('.downloadMobile').each(function(index, el) {
			$(this).find('img').remove();
			$(this).find('br').remove();
			var pdfSwitcher = $(this).detach();	
			$('.CLEMenu').parent().append(pdfSwitcher);
		});		
	},
	articlesSearch: function(){
		var articleSearchSwitch = $('.pubslisting').find('.search').detach();
		$('.pubslisting .mainbodyA').find('.mainbody').append(articleSearchSwitch);
	},
	shortenListing: function(){
		$('.shortenListing .list').find('tr').each(function(){
			if($(this).index()>16){
				$(this).hide();				
			}
		});
		$('.shortenListing').append("<div style='margin-top:17px; display: inline;' id='shortenListingSeeMore'><a href='javascript:void(0);'>See more</a></div>");
	},
	shortenListingTrigger: function(){
		$('.shortenListing .list').find('tr').each(function(){
			$(this).show();		
		});
		$('#shortenListingSeeMore').hide();
	},
	newsSearch: function(){
		var newsSearchSwitch = $('.newssearch').find('.search').detach();
		$('.newssearch .mainbodyA').find('.mainbody').append(newsSearchSwitch);
	},
	eventsSearch: function(){		
		var eventsSearch = $('.eventssearch').find('.search').detach();
		$('.eventssearch .mainbodyA').find('.mainbody').append(eventsSearch);
	},
	diversityAdjust: function(){
		var diversityRight = $('.diversityMoveCenter').detach();
		$('.aboutdetail').find('.mainbody').append(diversityRight);
	},
	adjustRightSide: function(){		
		$('.moveLeft').each(function(index, el) {
			var rightSideContent = $('.moveLeft').detach();
			$('.rightContentPlaceholder').append(rightSideContent);
		});
	},
	limitParaghraps: function(){
		if($('.limitContent').attr('maxparagraphs') && $('.limitContent').attr('readmoretext')){
			var contentLimit = $('.limitContent').attr('maxparagraphs');
			var readMoreText = $('.limitContent').attr('readmoretext');				

			$('.limitContent').children().each(function(){
				if($(this).index()>contentLimit-1){
					$(this).hide();
				}
			});		

			$('.limitContent').append("<div id='contentLimit'><a href='javascript:void(0);'>" + readMoreText + "</a></div>");

			if($('.limitContent').attr('readmoredesign')){
				var customClass = $('.limitContent').attr('readmoredesign');	
				$('#contentLimit').addClass(customClass);
			}
		}
	},
	contentLimitTrigger: function(){
		$('.limitContent').children().each(function(){
			$(this).show();
		});	
		$('#contentLimit').remove();
	}
}	

window.onload = function(e){ 
	if($(window).width()<994){
		mobileNav_init();

		var tempElement = $('.subMenu').children('ul').children('li');
		$('body').on('click', tempElement, responsiveApp.subMenu);
		$('body').on('click', '#readMoreButton', responsiveApp.readMoreBtn);	
		$('body').on('click', '#menu-btn', responsiveApp.menuBtn);
		$('body').on('click', '.subSwitch', responsiveApp.subSwitch);
		$('body').on('click', '#specialtiesToggle', responsiveApp.specialties);
		$('body').on('click', '#biographyToggle', responsiveApp.biography);
		$('body').on('click', '#quoteReadMore', responsiveApp.quoteReadMoreTrigger);
		$('body').on('click', '#searchSeeMore', responsiveApp.neutralsSearchSeeMoreTrigger);
		$('body').on('click', '.titleRow', responsiveApp.cleMenuTrigger);
		$('body').on('click', '#jamsConnectReadMore', responsiveApp.jamsConnectReadMoreTrigger);
		$('body').on('click', '#shortenListingSeeMore', responsiveApp.shortenListingTrigger);
		$('body').on('click', '#contentLimit', responsiveApp.contentLimitTrigger);

		responsiveApp.navSlider();	
		responsiveApp.neutralDetails();
		responsiveApp.locationDetails();
		responsiveApp.shortenNeutralQuote();
		responsiveApp.neutralDetailsLocationSwitch();
		responsiveApp.renameLocationListing();
		responsiveApp.neutralsSearchSeeMore();
		responsiveApp.cleMenuInit();
		responsiveApp.jamsConnectShorten();
		responsiveApp.pdfDownloadSwitch();
		responsiveApp.articlesSearch();
		responsiveApp.shortenListing();
		responsiveApp.newsSearch();
		responsiveApp.eventsSearch();
		responsiveApp.diversityAdjust();
		responsiveApp.adjustRightSide();
		responsiveApp.limitParaghraps();
	}
};