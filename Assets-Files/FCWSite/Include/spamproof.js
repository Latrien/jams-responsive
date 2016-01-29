// SpamProof jscript methods
//To be used to prevent spammers from grabbing email addresses from a website
//
//Example:
//For more information contact our <Script language="JavaScript">PrintMail('sales','hubbardone.com','Sales')</SCRIPT> department.
//results: For more information contact our sales department.
//	where sales will be a link to mailto.

function  SendMail(n,d){
	document.location.href='mailto:' + n.replace(/##/g,"\'") + '@' + d;
}

function xSendMail(name, domain){
	var BaseOptions = 'width=400,height=400,status=no,scrollbars=yes,resizeable=yes';
    var win = window.open('/emDisclaimer.aspx?n=' + name + '&d=' + domain,'_new', BaseOptions);
}

function PrintMail(n,d,m){
	PrintMail(n,d,m,'');
}	

function PrintMail(n,d,m,l){
	var ns = n.replace(/'/g,"##");
	if(m == ""){
		m = n + '@' + d;
	} else {
	    m = m.replace("<at>", "@");
	}	
	var ms = m.replace(/'/g,"##");	
	document.write("<div class=\"email\"><a href=\"JavaScript:SendMail('" + ns + "','" + d + "'); \" onMouseOver=\"self.status='" + ms.replace("<br>", "") + "'; return true;\" onMouseOut=\"self.status=''; return true;\"" + l +">" + m + "</a></div>");
	return true;
}	

function PrintEmail(name, domain) { 
	document.write(name + "@" + domain);
}

function SendEmail(name, domain){
	document.location.href = "mailto:" + name + "@" + domain;
}

function sMail(s){
    var sx = s.replace("<at>", "@");
    
    var n = sx.substring(0, sx.indexOf("@"));
    var d = sx.substring(sx.indexOf("@")+1);
	m = sx;

    //var ns = n.replace("'","\\\'");
    var ns = n.replace(/'/g,"##");
	//var ms = m.replace("'","\\\'");
	var ms = m.replace(/'/g,"##");
	var l = '';

	document.write("<a href=\"JavaScript:SendMail('" + ns + "','" + d + "'); \" onMouseOver=\"self.status='" + ms + "'; return true;\" onMouseOut=\"self.status=''; return true;\"" + l +">" + m + "</a>");
}